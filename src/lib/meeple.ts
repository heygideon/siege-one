import meepleBlue from "~/assets/meeple-blue.png";
import meepleCyan from "~/assets/meeple-cyan.png";
import meepleOrange from "~/assets/meeple-orange.png";
import meepleYellow from "~/assets/meeple-yellow.png";

import eyes1 from "~/assets/eyes/1.svg";
import eyes2 from "~/assets/eyes/2.svg";
import eyes3 from "~/assets/eyes/3.svg";
import eyes4 from "~/assets/eyes/4.svg";
import eyes5 from "~/assets/eyes/5.svg";
import eyes6 from "~/assets/eyes/6.svg";
import eyes7 from "~/assets/eyes/7.svg";
import eyes8 from "~/assets/eyes/8.svg";
import eyes9 from "~/assets/eyes/9.svg";
import eyes10 from "~/assets/eyes/10.svg";
import eyes11 from "~/assets/eyes/11.svg";
import eyes12 from "~/assets/eyes/12.svg";
import eyes13 from "~/assets/eyes/13.svg";
import eyes14 from "~/assets/eyes/14.svg";
import eyes15 from "~/assets/eyes/15.svg";
import eyes16 from "~/assets/eyes/16.svg";
import eyes17 from "~/assets/eyes/17.svg";
import eyes18 from "~/assets/eyes/18.svg";
import eyes19 from "~/assets/eyes/19.svg";
import eyes20 from "~/assets/eyes/20.svg";
import eyes21 from "~/assets/eyes/21.svg";
import eyes22 from "~/assets/eyes/22.svg";
import eyes23 from "~/assets/eyes/23.svg";
import eyes24 from "~/assets/eyes/24.svg";
import eyes25 from "~/assets/eyes/25.svg";
import eyes26 from "~/assets/eyes/26.svg";
import eyes27 from "~/assets/eyes/27.svg";
import eyes28 from "~/assets/eyes/28.svg";
import eyes29 from "~/assets/eyes/29.svg";
import eyes30 from "~/assets/eyes/30.svg";
import eyes31 from "~/assets/eyes/31.svg";

import mouth1 from "~/assets/mouth/1.svg";
import mouth2 from "~/assets/mouth/2.svg";
import mouth3 from "~/assets/mouth/3.svg";
import mouth4 from "~/assets/mouth/4.svg";
import mouth5 from "~/assets/mouth/5.svg";
import mouth6 from "~/assets/mouth/6.svg";
import mouth7 from "~/assets/mouth/7.svg";
import mouth8 from "~/assets/mouth/8.svg";
import mouth9 from "~/assets/mouth/9.svg";
import mouth10 from "~/assets/mouth/10.svg";
import mouth11 from "~/assets/mouth/11.svg";
import mouth12 from "~/assets/mouth/12.svg";
import mouth13 from "~/assets/mouth/13.svg";
import mouth14 from "~/assets/mouth/14.svg";
import mouth15 from "~/assets/mouth/15.svg";
import mouth16 from "~/assets/mouth/16.svg";
import mouth17 from "~/assets/mouth/17.svg";
import mouth18 from "~/assets/mouth/18.svg";
import mouth19 from "~/assets/mouth/19.svg";
import mouth20 from "~/assets/mouth/20.svg";
import mouth21 from "~/assets/mouth/21.svg";
import mouth22 from "~/assets/mouth/22.svg";
import mouth23 from "~/assets/mouth/23.svg";
import mouth24 from "~/assets/mouth/24.svg";
import mouth25 from "~/assets/mouth/25.svg";
import mouth26 from "~/assets/mouth/26.svg";
import mouth27 from "~/assets/mouth/27.svg";
import mouth28 from "~/assets/mouth/28.svg";
import mouth29 from "~/assets/mouth/29.svg";
import mouth30 from "~/assets/mouth/30.svg";

import crown from "~/assets/things/icons8-crown-96.png";
import partyHat from "~/assets/things/icons8-party-hat-96.png";
import santaHat from "~/assets/things/icons8-santa-hat-96.png";
import partyBalloons from "~/assets/things/icons8-party-balloons-96.png";
import party from "~/assets/things/icons8-party-96.png";
import headphones from "~/assets/things/icons8-headphones-96.png";
import book from "~/assets/things/icons8-book-96.png";
import books from "~/assets/things/icons8-books-96.png";
import piano from "~/assets/things/icons8-classic-music-96.png";
import drum from "~/assets/things/icons8-drum-96.png";
import planet from "~/assets/things/icons8-planet-96.png";
import camera from "~/assets/things/icons8-camera-96.png";
import minecraftSword from "~/assets/things/icons8-minecraft-sword-96.png";
import football from "~/assets/things/icons8-football-96.png";
import americanFootball from "~/assets/things/icons8-sport-96.png";
import basketball from "~/assets/things/icons8-basketball-96.png";
import beach from "~/assets/things/icons8-beach-96.png";
import beachUmbrella from "~/assets/things/icons8-beach-umbrella-96.png";
import sun from "~/assets/things/icons8-sun-96.png";
import star from "~/assets/things/icons8-star-96.png";
import cat from "~/assets/things/icons8-cat-96.png";
import dog from "~/assets/things/icons8-dog-96.png";
import hatchingChicken from "~/assets/things/icons8-hatching-chicken-96.png";
import owl from "~/assets/things/icons8-hedwig-96.png";
import penguin from "~/assets/things/icons8-penguin-96.png";
import rubberDuck from "~/assets/things/icons8-rubber-duck-96.png";

/*
src\assets\things\icons8-cat-96.png
src\assets\things\icons8-dog-96.png
src\assets\things\icons8-hatching-chicken-96.png
src\assets\things\icons8-hedwig-96.png
src\assets\things\icons8-penguin-96.png
src\assets\things\icons8-rubber-duck-96.png
src\assets\things\icons8-books-96.png
*/

export type Item = {
  label: string;
  src: string;
  price?: number;
};
export type ThingItem = Item & {
  _thing: {
    x: number;
    y: number;
    w: number;
    h?: number;
    rotate?: number;
  };
};
export type Category<I = Item> = { price?: number; items: Record<string, I> };

export const colours: Category = {
  price: 200,
  items: {
    blue: {
      label: "Blue",
      src: meepleBlue,
    },
    cyan: {
      label: "Cyan",
      src: meepleCyan,
    },
    orange: {
      label: "Orange",
      src: meepleOrange,
    },
    yellow: {
      label: "Yellow",
      src: meepleYellow,
    },
  },
};

export const eyes: Category = {
  price: 300,
  items: {
    "1": { label: "1", src: eyes1 },
    "2": { label: "2", src: eyes2 },
    "3": { label: "3", src: eyes3 },
    "4": { label: "4", src: eyes4 },
    "5": { label: "5", src: eyes5 },
    "6": { label: "6", src: eyes6 },
    "7": { label: "7", src: eyes7 },
    "8": { label: "8", src: eyes8 },
    "9": { label: "9", src: eyes9 },
    "10": { label: "10", src: eyes10 },
    "11": { label: "11", src: eyes11 },
    "12": { label: "12", src: eyes12 },
    "13": { label: "13", src: eyes13 },
    "14": { label: "14", src: eyes14 },
    "15": { label: "15", src: eyes15 },
    "16": { label: "16", src: eyes16 },
    "17": { label: "17", src: eyes17 },
    "18": { label: "18", src: eyes18 },
    "19": { label: "19", src: eyes19 },
    "20": { label: "20", src: eyes20 },
    "21": { label: "21", src: eyes21 },
    "22": { label: "22", src: eyes22 },
    "23": { label: "23", src: eyes23 },
    "24": { label: "24", src: eyes24 },
    "25": { label: "25", src: eyes25 },
    "26": { label: "26", src: eyes26 },
    "27": { label: "27", src: eyes27 },
    "28": { label: "28", src: eyes28 },
    "29": { label: "29", src: eyes29 },
    "30": { label: "30", src: eyes30 },
    "31": { label: "31", src: eyes31 },
  },
};

export const mouths: Category = {
  price: 300,
  items: {
    "1": { label: "1", src: mouth1 },
    "2": { label: "2", src: mouth2 },
    "3": { label: "3", src: mouth3 },
    "4": { label: "4", src: mouth4 },
    "5": { label: "5", src: mouth5 },
    "6": { label: "6", src: mouth6 },
    "7": { label: "7", src: mouth7 },
    "8": { label: "8", src: mouth8 },
    "9": { label: "9", src: mouth9 },
    "10": { label: "10", src: mouth10 },
    "11": { label: "11", src: mouth11 },
    "12": { label: "12", src: mouth12 },
    "13": { label: "13", src: mouth13 },
    "14": { label: "14", src: mouth14 },
    "15": { label: "15", src: mouth15 },
    "16": { label: "16", src: mouth16 },
    "17": { label: "17", src: mouth17 },
    "18": { label: "18", src: mouth18 },
    "19": { label: "19", src: mouth19 },
    "20": { label: "20", src: mouth20 },
    "21": { label: "21", src: mouth21 },
    "22": { label: "22", src: mouth22 },
    "23": { label: "23", src: mouth23 },
    "24": { label: "24", src: mouth24 },
    "25": { label: "25", src: mouth25 },
    "26": { label: "26", src: mouth26 },
    "27": { label: "27", src: mouth27 },
    "28": { label: "28", src: mouth28 },
    "29": { label: "29", src: mouth29 },
    "30": { label: "30", src: mouth30 },
  },
};

export const things: Category<ThingItem> = {
  items: {
    crown: {
      label: "Crown",
      src: crown,
      price: 200,
      _thing: {
        x: 84,
        y: 26,
        w: 32,
        rotate: 4,
      },
    },
    partyHat: {
      label: "Party hat",
      src: partyHat,
      price: 200,
      _thing: {
        x: 82,
        y: 28,
        w: 32,
        rotate: 4,
      },
    },
    santaHat: {
      label: "Santa hat",
      src: santaHat,
      price: 200,
      _thing: {
        x: 84,
        y: 28,
        w: 32,
        rotate: 4,
      },
    },
    partyBalloons: {
      label: "Party balloons",
      src: partyBalloons,
      price: 200,
      _thing: {
        x: 116,
        y: 74,
        w: 32,
        rotate: 8,
      },
    },
    party: {
      label: "Disco",
      src: party,
      price: 200,
      _thing: {
        x: 84,
        y: 0,
        w: 32,
        rotate: 4,
      },
    },
    headphones: {
      label: "Headphones",
      src: headphones,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    book: {
      label: "Book",
      src: book,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    books: {
      label: "Books",
      src: books,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    piano: {
      label: "Piano",
      src: piano,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    drum: {
      label: "Drum",
      src: drum,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    planet: {
      label: "Planet",
      src: planet,
      price: 200,
      _thing: {
        x: 114,
        y: 76,
        w: 32,
        rotate: 4,
      },
    },
    camera: {
      label: "Camera",
      src: camera,
      price: 200,
      _thing: {
        x: 48,
        y: 80,
        w: 32,
        rotate: 4,
      },
    },
    minecraftSword: {
      label: "Minecraft sword",
      src: minecraftSword,
      price: 200,
      _thing: {
        x: 124,
        y: 76,
        w: 32,
        rotate: 4,
      },
    },
    football: {
      label: "Football",
      src: football,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    americanFootball: {
      label: "American football",
      src: americanFootball,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    basketball: {
      label: "Basketball",
      src: basketball,
      price: 200,
      _thing: {
        x: 124,
        y: 124,
        w: 32,
      },
    },
    beach: {
      label: "Beach",
      src: beach,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    beachUmbrella: {
      label: "Beach Umbrella",
      src: beachUmbrella,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    sun: {
      label: "Sun",
      src: sun,
      price: 200,
      _thing: {
        x: 16,
        y: 16,
        w: 32,
      },
    },
    star: {
      label: "Star",
      src: star,
      price: 200,
      _thing: {
        x: 16,
        y: 16,
        w: 32,
      },
    },
    cat: {
      label: "Cat",
      src: cat,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    dog: {
      label: "Dog",
      src: dog,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    chick: {
      label: "Cute little chick",
      src: hatchingChicken,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    owl: {
      label: "Owl",
      src: owl,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    penguin: {
      label: "Penguin",
      src: penguin,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
    rubberDuck: {
      label: "Rubber duck",
      src: rubberDuck,
      price: 200,
      _thing: {
        x: 24,
        y: 120,
        w: 32,
      },
    },
  },
};

type MeepleItemState = {
  key: string;
  x?: number;
  y?: number;
};
export type MeepleState = {
  colour: [MeepleItemState];
  eyes: [MeepleItemState];
  mouth: [MeepleItemState];
  things: MeepleItemState[];
};
