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
function Germany() {
  voteable = "1 Germany win the match";
  document.getElementById("Germany").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Japan() {
  voteable = "1 Japan win the match";
  document.getElementById("Japan").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Spain() {
  voteable = "1 Spain win the match";
  document.getElementById("Spain").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Costa() {
  voteable = "1 Costa win the match";
  document.getElementById("Costa").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Japa() {
  voteable = "1 Japan win the match";
  document.getElementById("Japa").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Rica() {
  voteable = "1 costa Rica win the match";
  document.getElementById("Rica").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Spai() {
  voteable = "1 Spain win the match";
  document.getElementById("Spai").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function German() {
  voteable = "1 Germany win the match";
  document.getElementById("German").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Jap() {
  voteable = "1 Japan win the match";
  document.getElementById("Jap").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Spa() {
  voteable = "1 Spain win the match";
  document.getElementById("Spa").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Cos() {
  voteable = "1 Costa rica win the match";
  document.getElementById("Cos").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Ger() {
  voteable = "1 Germany rica win the match";
  document.getElementById("Ger").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
