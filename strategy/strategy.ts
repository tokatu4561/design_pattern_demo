export class Human {
  public name: string;
  public height: number = -1;
  public weight: number = -1;
  public age: number = -1;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.age = age;
  }
}

interface Comparator<T> {
  compare(c1: T, c2: T): void;
}

export class AgeComparator implements Comparator<Human> {
  compare(c1: Human, c2: Human) {
    if (c1.age > c2.age) {
      return 1;
    } else if (c1.age === c2.age) {
      console.log(`年齢は同じ`);
      return 0;
    } else {
      return -1;
    }
  }
}

export class HeightComparator implements Comparator<Human> {
  compare(c1: Human, c2: Human) {
    if (c1.height > c2.height) {
      console.log(`${c1.name}の方が身長が高い！`);
      return 1;
    } else if (c1.height === c2.height) {
      console.log(`身長は同じ！`);
      return 0;
    } else {
      return -1;
    }
  }
}

export class Context {
  private comparator: Comparator<Human>;

  constructor(strategy: Comparator<Human>) {
    this.comparator = strategy;
  }

  public compare(h1: Human, h2: Human) {
    return this.comparator.compare(h1, h2);
  }
}
