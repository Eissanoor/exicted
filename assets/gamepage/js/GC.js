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
function Dr6() {
  voteable = "1 Draw match";
  document.getElementById("Dr6").innerHTML = voteable;
  console.log("asd");
  document.getElementById("btt").disabled = true;
}
function Argentina() {
  voteable = "1 Argentina win the match";
  document.getElementById("Argentina").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Saudi() {
  voteable = "1 Saudi arab win the match";
  document.getElementById("Saudi").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Mexico() {
  voteable = "1 Mexico win the match";
  document.getElementById("Mexico").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Poland() {
  voteable = "1 Poland win the match";
  document.getElementById("Poland").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Pola() {
  voteable = "1 Poland win the match";
  document.getElementById("Pola").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Saud() {
  voteable = "1 Saudi arab win the match";
  document.getElementById("Saud").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Argentin() {
  voteable = "1 Argentina win the match";
  document.getElementById("Argentin").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Mexic() {
  voteable = "1 Mexico win the match";
  document.getElementById("Mexic").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Pol() {
  voteable = "1 Poland win the match";
  document.getElementById("Pol").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Argent() {
  voteable = "1 Argentina win the match";
  document.getElementById("Argent").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function Sau() {
  voteable = "1 Saudi arab win the match";
  document.getElementById("Sau").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
function exico() {
  voteable = "1 Mexico arab win the match";
  document.getElementById("exico").innerHTML = voteable;
  document.getElementById("btt").disabled = true;
}
