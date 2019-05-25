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

if (age >= 18 && age <= 21) {
  console.log("you can dirnk but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
} */

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function handleOffline() {
  console.log("bye bye~~!");
}

function handleOnline() {
  console.log("Welcome back!!");
}

/*------------------------------------------*/

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

function OnOffline() {
  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
}

init();
OnOffline();
