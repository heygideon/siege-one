<script setup lang="ts">
import { inject, type Ref } from "vue";
import { colours, eyes, mouths, things, type MeepleState } from "~/lib/meeple";

const meeple = inject<Ref<MeepleState>>("meeple");
if (!meeple) throw new Error("meeple not provided");

const colour = (key: string) => colours.items[key]!;
const eye = (key: string) => eyes.items[key]!;
const mouth = (key: string) => mouths.items[key]!;
const thing = (key: string) => things.items[key]!;

const SIZE = 192;

const radians = (degrees: number) => (degrees * Math.PI) / 180;
const getImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

const render = async () => {
  const canvas = document.createElement("canvas");

  canvas.width = SIZE;
  canvas.height = SIZE;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const colourImg = await getImage(colour(meeple.value.colour[0].key).src);
  ctx.drawImage(colourImg, 0, 0, canvas.width, canvas.height);

  if (meeple.value.eyes[0].key) {
    const eyeImg = await getImage(eye(meeple.value.eyes[0].key).src);
    ctx.drawImage(eyeImg, 78, 64, 37, 12);
  }
  if (meeple.value.mouth[0].key) {
    const mouthImg = await getImage(mouth(meeple.value.mouth[0].key).src);
    ctx.drawImage(mouthImg, 86, 76, 26, 16);
  }

  for (const t of meeple.value.things) {
    ctx.save();

    const thingImg = await getImage(thing(t.key).src);
    const x = t.x || thing(t.key)._thing.x;
    const y = t.y || thing(t.key)._thing.y;
    const w = thing(t.key)._thing.w;
    const h = thing(t.key)._thing.h || thing(t.key)._thing.w;

    const rotate = thing(t.key)._thing.rotate;
    if (rotate) {
      ctx.translate(x + w / 2, y + h / 2);
      ctx.rotate(radians(rotate));
      ctx.translate(-(x + w / 2), -(y + h / 2));
    }

    ctx.drawImage(thingImg, x, y, w, h);

    ctx.restore();
  }

  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "meeple.png";
    a.click();
    URL.revokeObjectURL(url);
  });
};
</script>

<template>
  <button
    @click="render"
    class="group mx-auto mt-4 flex h-12 w-auto flex-none items-center rounded-full bg-amber-700 bg-gradient-to-br from-amber-600 to-amber-700 px-4 text-white shadow-sm transition hover:scale-105 hover:from-amber-700"
  >
    <span class="text-lg font-semibold">Download</span>
  </button>
</template>
