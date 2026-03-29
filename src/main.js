import { LinkedList } from "./LinkedList.js";

const list = new LinkedList("apple");

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("crocodile");

console.log(list.toString());
console.log(list.size());
