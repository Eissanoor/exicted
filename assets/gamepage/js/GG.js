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
function Switzerland() {
  voteable = "1 Switzerland win the match";
  document.getElementById("Switzerland").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Cameroon() {
  voteable = "1 Cameroon win the match";
  document.getElementById("Cameroon").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Brazil() {
  voteable = "1 Brazil win the match";
  document.getElementById("Brazil").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Serbia() {
  voteable = "1 Serbia win the match";
  document.getElementById("Serbia").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Cameroo() {
  voteable = "1 Cameroon win the match";
  document.getElementById("Cameroo").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}

function Serbi() {
  voteable = "1 Serbia win the match";
  document.getElementById("Serbi").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Brazi() {
  voteable = "1 Brazil win the match";
  document.getElementById("Brazi").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Switzerla() {
  voteable = "1 Switzerland win the match";
  document.getElementById("Switzerla").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Serb() {
  voteable = "1 Serbia win the match";
  document.getElementById("Serb").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Switzerl() {
  voteable = "1 Switzerland win the match";
  document.getElementById("Switzerl").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Camer() {
  voteable = "1 Cameroon win the match";
  document.getElementById("Camer").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Br() {
  voteable = "1 Brazil win the match";
  document.getElementById("Br").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
