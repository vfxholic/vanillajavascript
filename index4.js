/*
if ("nicolas" === "nini") {
  console.log("hi");
} else if ("10" === "10") {
  console.log("byebye");
} else {
  console.log("haha");
}
*/

/* && : 둘다 참이여야 함 , || : 하나만 참이여도 참 */
/*
if (20 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
} else {
  console.log("no");
}
*/

/* 섹시하지 않아서 사용하지 않음 ㅋㅋㅋ 
const age = prompt("how old are you?");
console.log(age); */

const age = prompt("how old are you?");

if (age >= 18 && age <= 21) {
  console.log("you can dirnk but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
