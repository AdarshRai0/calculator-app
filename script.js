let body = document.querySelector("body");
let toggle = document.getElementById('circle');

function del() {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
}
let two = document.getElementById("two");

two.addEventListener("click", function () {
  body.classList.add("active1");
  body.classList.remove("active2");
  toggle.style.left = "34%";
});
let one = document.getElementById("one");
one.addEventListener("click", function () {
  body.classList.remove("active1");
  body.classList.remove("active2");
  toggle.style.left = "2%";

});
let three = document.getElementById("three");
three.addEventListener("click", function () {
  body.classList.add("active2");
  body.classList.remove("active1");
  toggle.style.left = "70%";

});
