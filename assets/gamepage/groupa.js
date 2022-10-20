let voteable;

function myFunction() {
  const ran = Math.floor(Math.random() * 3) + 1;
  if (ran == 1) {
    voteable = "1 qatar win the match";
    document.getElementById("qatar").innerHTML = voteable;
    document.getElementById("btt").disabled = true;
  } else if (ran == 3) {
    voteable = "3 Ecuador win the match";
    document.getElementById("Ecuador").innerHTML = voteable;
    document.getElementById("btt").disabled = true;
  } else if (ran == 2) {
    voteable = "2 draw";
    document.getElementById("draw").innerHTML = voteable;
    document.getElementById("btt").disabled = true;
  } else {
    voteable = "Input is not a number";
  }
}
