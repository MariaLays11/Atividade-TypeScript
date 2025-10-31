class SpecialStats {
  attack: number;
  defense: number;

  constructor(attack: number, defense: number) {
    this.attack = attack;
    this.defense = defense;
  }
}

class Stats {
  hp: number;
  attack: number;
  defense: number;
  special: SpecialStats;
  speed: number;

  constructor(
    hp: number,
    attack: number,
    defense: number,
    special: SpecialStats,
    speed: number
  ) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.special = special;
    this.speed = speed;
  }
}

class Pokemon {
  name: string;
  type: "fire" | "water" | "grass" | "electric" | "rock" | "normal" | "psychic";
  specie: "Legendary Pokemon" | "Normal Pokemon" | "Mythical Pokemon";
  height: number;
  weight: number;
  abilities: string[];
  stats: Stats;

  constructor(
    name: string,
    type: "fire" | "water" | "grass" | "electric" | "rock" | "normal" | "psychic",
    specie: "Legendary Pokemon" | "Normal Pokemon" | "Mythical Pokemon",
    height: number,
    weight: number,
    abilities: string[],
    stats: Stats
  ) {
    this.name = name;
    this.type = type;
    this.specie = specie;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.stats = stats;
  }

  attack(): void {
    const randomIndex = Math.floor(Math.random() * this.abilities.length);
    console.log(`${this.name} used ${this.abilities[randomIndex]}!`);
  }
}
