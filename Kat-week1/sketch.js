var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

for (i=0; i<3; i++){
  r.rect(100+(i*10), 100+(i*10), 500, 500)
    .fill(false)
    .stroke(0,0,0);
}

for (i=0; i<3; i++){
  yVal = 210 - (i*80);
  diameter = (75 - (15*i))*2;
  r.ellipse(475, yVal, diameter, diameter)
    .fill(0, 0, 0)
    .stroke(false)
    .rotate(20);
}

counter = 29;
for ( i=0; i<15; i++){
  for(j=0; j<counter;j++){
    startingXValue = 400+((j/2)*10)+(5*i)
    startingYValue1 = 220+(i*10)+(5*i)
    if(j%2 == 0) {
      startingYValue2 = startingYValue1 + 15 
    } else {
      startingYValue2 = startingYValue1
      startingYValue1 += 15
    }
    r.triangle(startingXValue, startingYValue1, startingXValue+5, startingYValue2, startingXValue+10, startingYValue1)
      .fill(255, 255, 255)
      .stroke(0)
      .rotate(20);
  }
  counter-=2;
}

r.draw();