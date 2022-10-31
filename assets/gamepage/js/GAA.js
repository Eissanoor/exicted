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
function Dr7() {
  voteable = "1 Draw match";
  document.getElementById("Dr7").innerHTML = voteable;
  console.log("asd");
  document.getElementById("btt").disabled = true;
}
function Dr8() {
  voteable = "1 Draw match";
  document.getElementById("Dr8").innerHTML = voteable;
  console.log("asd");
  document.getElementById("btt").disabled = true;
}

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
function Qata() {
  voteable = "1 Qatar win the match";
  document.getElementById("Qata").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Senega() {
  voteable = "1 Senegal win the match";
  document.getElementById("Senega").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Netherland() {
  voteable = "1 Netherlands win the match";
  document.getElementById("Netherland").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Ecuad() {
  voteable = "1 Ecuador win the match";
  document.getElementById("Ecuad").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Ecua() {
  voteable = "1 Ecuador win the match";
  document.getElementById("Ecua").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Sene() {
  voteable = "1 Senegal win the match";
  document.getElementById("Sene").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Netherla() {
  voteable = "1 Netherlands win the match";
  document.getElementById("Netherla").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Qa() {
  voteable = "1 Qatar win the match";
  document.getElementById("Qa").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
// ------------------------------------
