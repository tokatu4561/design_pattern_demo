export interface Iterater {
  // Iterater は 集約体 (Aggregate)に次の要素が存在するかしないかと、次の要素を返す
  next(): any;
  hasNext();
}

export interface Aggregate {
  createIterater();
}
