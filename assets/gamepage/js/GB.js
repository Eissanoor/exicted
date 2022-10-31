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

function England() {
  voteable = "1 England win the match";
  document.getElementById("England").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function IR() {
  voteable = "1 IR Iran win the match";
  document.getElementById("IR").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function USA() {
  voteable = "1 USA win the match";
  document.getElementById("USA").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Wales() {
  voteable = "1 Wales win the match";
  document.getElementById("Wales").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Wale() {
  voteable = "1 Wales win the match";
  document.getElementById("Wale").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Iran() {
  voteable = "1 IR Iran win the match";
  document.getElementById("Iran").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Englan() {
  voteable = "1 England win the match";
  document.getElementById("Englan").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function US() {
  voteable = "1 USA win the match";
  document.getElementById("US").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Wal() {
  voteable = "1 Wales win the match";
  document.getElementById("Wal").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Engla() {
  voteable = "1 England win the match";
  document.getElementById("Engla").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Ira() {
  voteable = "1 Iran win the match";
  document.getElementById("Ira").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function SA() {
  voteable = "1 USA win the match";
  document.getElementById("SA").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
