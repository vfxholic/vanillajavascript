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

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
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
  title.addEventListener("click", handleClick);
}

function OnOffline() {
  window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
}

init();
OnOffline();
