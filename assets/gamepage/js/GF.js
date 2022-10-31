let voteable;
var p = document.getElementById("Dr1");
p.addEventListener(
  "click",
  function () {
    if (p.getAttribute("data-text") == p.innerHTML) {
      p.innerHTML = p.getAttribute("data-text1");
    } else {
      p.setAttribute("data-text1", p.innerHTML);
      p.innerHTML = p.getAttribute("data-text");
    }
  },
  false
);
var a = document.getElementById("Dr2");
a.addEventListener(
  "click",
  function () {
    if (a.getAttribute("data-text") == a.innerHTML) {
      a.innerHTML = a.getAttribute("data-text1");
    } else {
      a.setAttribute("data-text1", a.innerHTML);
      a.innerHTML = a.getAttribute("data-text");
    }
  },
  false
);
var b = document.getElementById("Dr3");
b.addEventListener(
  "click",
  function () {
    if (b.getAttribute("data-text") == b.innerHTML) {
      b.innerHTML = b.getAttribute("data-text1");
    } else {
      b.setAttribute("data-text1", b.innerHTML);
      b.innerHTML = b.getAttribute("data-text");
    }
  },
  false
);
var c = document.getElementById("Dr4");
c.addEventListener(
  "click",
  function () {
    if (c.getAttribute("data-text") == c.innerHTML) {
      c.innerHTML = c.getAttribute("data-text1");
    } else {
      c.setAttribute("data-text1", c.innerHTML);
      c.innerHTML = c.getAttribute("data-text");
    }
  },
  false
);
var d = document.getElementById("Dr5");
d.addEventListener(
  "click",
  function () {
    if (d.getAttribute("data-text") == d.innerHTML) {
      d.innerHTML = d.getAttribute("data-text1");
    } else {
      d.setAttribute("data-text1", d.innerHTML);
      d.innerHTML = d.getAttribute("data-text");
    }
  },
  false
);
var e = document.getElementById("Dr6");
e.addEventListener(
  "click",
  function () {
    if (e.getAttribute("data-text") == e.innerHTML) {
      e.innerHTML = e.getAttribute("data-text1");
    } else {
      e.setAttribute("data-text1", e.innerHTML);
      e.innerHTML = e.getAttribute("data-text");
    }
  },
  false
);
function Morocco() {
  voteable = "1 Morocco win the match";
  document.getElementById("Morocco").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Croatia() {
  voteable = "1 Croatia win the match";
  document.getElementById("Croatia").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Belgium() {
  voteable = "1 Belgium win the match";
  document.getElementById("Belgium").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Canada() {
  voteable = "1 Canada win the match";
  document.getElementById("Canada").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Belgiu() {
  voteable = "1 Belgium win the match";
  document.getElementById("Belgiu").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Morocc() {
  voteable = "1 Morocco win the match";
  document.getElementById("Morocc").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Croat() {
  voteable = "1 Croatia win the match";
  document.getElementById("Croat").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Cana() {
  voteable = "1 Canada win the match";
  document.getElementById("Cana").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Croa() {
  voteable = "1 Croatia win the match";
  document.getElementById("Croa").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Belg() {
  voteable = "1 Belgium win the match";
  document.getElementById("Belg").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Can() {
  voteable = "1 Canada win the match";
  document.getElementById("Can").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Mor() {
  voteable = "1 Morocco win the match";
  document.getElementById("Mor").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
