import { AgeComparator, Context, HeightComparator, Human } from "./strategy";

// if 文などで分岐させることでアルゴリズムを切り替えるところを、各Strategyクラスにアルゴリズムを持たせることで
// strategy(戦略)クラスの切り替えや追加が容易になる

const human1 = new Human("太郎", 175, 60, 16);
const human2 = new Human("二郎", 170, 58, 16);

const ageComparator = new AgeComparator();
const heightComparator = new HeightComparator();

let ctx = new Context(ageComparator);

ctx.compare(human1, human2); // console.log 年齢は同じ

ctx = new Context(heightComparator);

ctx.compare(human1, human2); // console.log 太郎の方が身長が高い！
