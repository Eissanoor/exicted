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
function Qatar() {
  voteable = "1 Qatar win the match";
  document.getElementById("Qatar").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Ecuador() {
  voteable = "1 Ecuador win the match";
  document.getElementById("Ecuador").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function England() {
  voteable = "1 England win the match";
  document.getElementById("England").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function IR() {
  voteable = "1 IR win the match";
  document.getElementById("IR").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Senegal() {
  voteable = "1 Senegal win the match";
  document.getElementById("Senegal").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Netherlands() {
  voteable = "1 Netherlands win the match";
  document.getElementById("Netherlands").innerHTML = voteable;
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
function Argentina() {
  voteable = "1 Argentina win the match";
  document.getElementById("Argentina").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Arabia() {
  voteable = "1 Arabia win the match";
  document.getElementById("Arabia").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
