let x = 0;
// let y = 100;
// let x2 = windowWidth/2;
// let y2 = windowHeight/4;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
};

function draw() {
  background(256)
  stroke(0)
  noFill()
  strokeWeight(3)
  drawingContext.setLineDash([]);
  rect(10, 10, 50)
  ellipse(35, windowHeight-35, 50)
  
  strokeWeight(1)
  fill(0)
  textSize(18)
  text("internetlaite", 75, 40)
  text("reititin", 75, windowHeight-25)

  if(x>0) {
    strokeWeight(2)
    drawingContext.setLineDash([]);
    line(75, 75, 75, windowHeight-75)
    triangle(60, windowHeight-100, 90, windowHeight-100, 75, windowHeight-75)
  }

  if(x>1) {
    drawingContext.setLineDash([5, 15]);
    line(125, 75, 125, windowHeight-75)
    drawingContext.setLineDash([]);
    triangle(125, 75, 110, 100, 140, 100)
  }
}

const kappale1 = document.querySelector("#para");
const kappaleet = document.querySelectorAll(".par");

const options = { };

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    };
    console.log(entry.target);
    console.log(x);
    x++;
    observer.unobserve(entry.target)
  });
}, options);

kappaleet.forEach(kappale => {
  observer.observe(kappale);
});