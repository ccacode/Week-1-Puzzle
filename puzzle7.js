var red=getColor();

function redgored(){
while (getColor() != "red") {
  down();
}
if (getColor() == "red") {
  right();right();
}
while (getColor() != "red") {
  up();
}

if (getColor() == "red") {
  right();right();
}
}
redgored(1);
redgored(1);
redgored(1);
