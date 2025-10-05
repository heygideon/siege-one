type Upgrade = {
  name: string;
  description: string;
  activeDescription: string;
  cost: number;
  tick: (v: number) => number;
};

const cursorUpgrades: Upgrade[] = [
  {
    name: "Cursor",
    description: "clicks so you don't have to",
    activeDescription: "+0.1 clicks/sec",
    cost: 30,
    tick: (v: number) => v + 0.1,
  },
  {
    name: "Cursor 2",
    description: "clicks harder so you don't have to",
    activeDescription: "+0.5 clicks/sec",
    cost: 50,
    tick: (v: number) => v + 0.5,
  },
  {
    name: "Cursor 3",
    description: "clicks even harder so you don't have to",
    activeDescription: "+1 clicks/sec",
    cost: 90,
    tick: (v: number) => v + 1,
  },
  {
    name: "Cursor 4",
    description: "clicks even harderer so you don't have to",
    activeDescription: "+2 clicks/sec",
    cost: 150,
    tick: (v: number) => v + 2,
  },
];

const orchardUpgrades: Upgrade[] = [
  {
    name: "Orchard",
    description: "money grows on trees",
    activeDescription: "+1 clicks/sec",
    cost: 150,
    tick: (v: number) => v + 1,
  },
  {
    name: "Orchard 2",
    description: "lots of money grows on trees",
    activeDescription: "+2 clicks/sec",
    cost: 250,
    tick: (v: number) => v + 2,
  },
  {
    name: "Orchard 3",
    description: "money grows on lots of trees",
    activeDescription: "+3 clicks/sec",
    cost: 400,
    tick: (v: number) => v + 3,
  },
  {
    name: "Orchard 4",
    description: "lots of money grows on lots of trees",
    activeDescription: "+5 clicks/sec",
    cost: 750,
    tick: (v: number) => v + 5,
  },
  {
    name: "Orchard 5",
    description: "too many trees",
    activeDescription: "+7 clicks/sec",
    cost: 1000,
    tick: (v: number) => v + 7,
  },
];

const bankUpgrades: Upgrade[] = [
  {
    name: "Bank 1",
    description: "the rich get richer",
    activeDescription: "1% interest every 10s",
    cost: 900,
    // 1.05^(1/10) ≈ 1.0049
    tick: (v: number) => v * 1.001,
  },
  {
    name: "Bank 2",
    description: "the rich get even richer",
    activeDescription: "2% interest every 10s",
    cost: 1200,
    // 1.01^(1/10) ≈ 1.002
    tick: (v: number) => v * 1.002,
  },
  {
    name: "Bank 3",
    description: "the rich get even richerer",
    activeDescription: "5% interest every 10s",
    cost: 1500,
    // 1.05^(1/10) ≈ 1.0049
    tick: (v: number) => v * 1.0049,
  },
  {
    name: "Bank 4",
    description: "the rich get even richererer",
    activeDescription: "8% interest every 10s",
    cost: 1900,
    // 1.08^(1/10) ≈ 1.0077
    tick: (v: number) => v * 1.0077,
  },
];

export const upgrades: Record<string, Upgrade[]> = {
  cursor: cursorUpgrades,
  orchard: orchardUpgrades,
  bank: bankUpgrades,
};
