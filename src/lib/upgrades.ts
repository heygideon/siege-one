type Upgrade = {
  name: string;
  description: string;
  activeDescription: string;
  cost: number;
};

const cursorUpgrades: Upgrade[] = [
  {
    name: "Cursor",
    description: "clicks so you don't have to",
    activeDescription: "+0.1 clicks/sec",
    cost: 30,
  },
  {
    name: "Cursor 2",
    description: "clicks harder so you don't have to",
    activeDescription: "+0.5 clicks/sec",
    cost: 50,
  },
  {
    name: "Cursor 3",
    description: "clicks even harder so you don't have to",
    activeDescription: "+1 clicks/sec",
    cost: 90,
  },
  {
    name: "Cursor 4",
    description: "clicks even harderer so you don't have to",
    activeDescription: "+2 clicks/sec",
    cost: 150,
  },
];

const orchardUpgrades: Upgrade[] = [
  {
    name: "Orchard",
    description: "money grows on trees",
    activeDescription: "+1 clicks/sec",
    cost: 150,
  },
  {
    name: "Orchard 2",
    description: "lots of money grows on trees",
    activeDescription: "+2 clicks/sec",
    cost: 250,
  },
  {
    name: "Orchard 3",
    description: "money grows on lots of trees",
    activeDescription: "+3 clicks/sec",
    cost: 400,
  },
  {
    name: "Orchard 4",
    description: "lots of money grows on lots of trees",
    activeDescription: "+5 clicks/sec",
    cost: 750,
  },
  {
    name: "Orchard 5",
    description: "too many trees",
    activeDescription: "+7 clicks/sec",
    cost: 1000,
  },
];

const bankUpgrades: Upgrade[] = [
  {
    name: "Bank 1",
    description: "the rich get richer",
    activeDescription: "+8 clicks/sec",
    cost: 900,
  },
  {
    name: "Bank 2",
    description: "the rich get even richer",
    activeDescription: "+12 clicks/sec",
    cost: 1200,
  },
  {
    name: "Bank 3",
    description: "the rich get even richerer",
    activeDescription: "+18 clicks/sec",
    cost: 1500,
  },
  {
    name: "Bank 4",
    description: "the rich get even richererer",
    activeDescription: "+24 clicks/sec",
    cost: 1900,
  },
];

export const upgrades: Record<string, Upgrade[]> = {
  cursor: cursorUpgrades,
  orchard: orchardUpgrades,
  bank: bankUpgrades,
};
