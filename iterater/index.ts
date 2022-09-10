import { TaskList } from "./concrete";

const agr = new TaskList([]);

agr.add({ name: "タスク1" });
agr.add({ name: "タスク2" });
agr.add({ name: "タスク3" });
agr.add({ name: "タスク4" });

const itr = agr.createIterater();

while (itr.hasNext()) {
  const task = itr.next();
  console.log(task);
}
