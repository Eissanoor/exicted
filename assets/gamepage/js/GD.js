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
function Denmark() {
  voteable = "1 Denmark win the match";
  document.getElementById("Denmark").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Tunisia() {
  voteable = "1 Tunisia win the match";
  document.getElementById("Tunisia").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function France() {
  voteable = "1 France win the match";
  document.getElementById("France").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Australia() {
  voteable = "1 Australia win the match";
  document.getElementById("Australia").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Tunisi() {
  voteable = "1 Tunisia win the match";
  document.getElementById("Tunisi").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}

function Australi() {
  voteable = "1 Australia win the match";
  document.getElementById("Australi").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}

function Franc() {
  voteable = "1 France win the match";
  document.getElementById("Franc").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}

function Denmar() {
  voteable = "1 Denmark win the match";
  document.getElementById("Denmar").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Denma() {
  voteable = "1 Denmark win the match";
  document.getElementById("Denma").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Austral() {
  voteable = "1 Australia win the match";
  document.getElementById("Austral").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}

function Tuni() {
  voteable = "1 Tunisia win the match";
  document.getElementById("Tuni").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Fr() {
  voteable = "1 France win the match";
  document.getElementById("Fr").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
