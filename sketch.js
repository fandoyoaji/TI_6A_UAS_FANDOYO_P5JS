let gantiwarna = false;

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background("#ffc0cb");
  orbitControl();
  if(gantiwarna === true){
    let warna = color("skyblue");
    ambientLight(warna);
  }
sphere(70);

cone(90, 300);
}
function doubleClicked(){
  gantiwarna = true;
}