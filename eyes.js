var balls = document.getElementsByClassName("ball");
var text = document.getElementById("bee-info");
var container = document.body;
document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  // CHANGE COLOR IF BEE'S NEAR
  //Calculate center
  let centery = window.innerHeight / 2;
  let centerx = window.innerWidth / 2;
  //Apply position transformation taking the center of the window as reference point (0,0)
  let newPosCenterRefX = event.clientX - centerx;
  let newPosCenterRefY = event.clientY - centery;
  //Calculate percentage
  let perX = Math.abs((newPosCenterRefX * 100) / centerx);
  let perY = Math.abs((newPosCenterRefY * 100) / centery);
  let perRadial = Math.sqrt(Math.pow(perX, 2) + Math.pow(perY, 2));
  if (perRadial > 100) perRadial = 100; //Limit percentage to 100
  //Check and show bee position
  if (perRadial >= 0 && perRadial <= 40) text.innerHTML = "The bee is <b>near</b>";
  else if (perRadial > 40 && perRadial <= 70)
    text.innerHTML = "The bee is <b>coming</b>";
  else text.innerHTML = "The bee is <b>far</b>";
  //Change color depend where is bee
  container.style.backgroundColor =
    "rgb(255," +
    ((perRadial * 175) / 100 + 48) +
    ", " +
    (perRadial / 100) * 207 +
    ")";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};
