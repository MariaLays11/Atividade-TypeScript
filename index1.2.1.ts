class Dog {
  name: string;
  age: number;
  isAlive: boolean;
  owners: string[];

  constructor(name: string, age: number, isAlive: boolean, owners: string[]) {
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
    this.owners = owners;
  }

  bark(): void {
    console.log('Hof hof!');
  }
}