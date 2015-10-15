var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  // debug: true
});

// SHARP
r.rect(0,0,800,800).fill('hsv', 0, 0, 50);

// drawCircles(250, 250, 200, 9)
// function drawCircles(x, y, radius, level) {
//   saturation = Math.round(Rune.random(10,80))
//   r.ellipse(x, y, radius*2, radius*2).fill('hsv', 0, saturation, 40);
//   if (level > 1) {
//     level = level - 1;
//     num = Math.round(Rune.random(2, 5));
//     console.log
//     for(var i=0; i<num; i++) {
//       a = Math.random() * (Math.PI * 2);
//       nx = x + Math.cos(a) * 6.0 * level;
//       ny = y + Math.sin(a) * 6.0 * level;
//       drawCircles(nx, ny, radius/2, level);
//     }
//   }
// }
a = 15.5;
radius = 90;
var p;
for(var i=0; i<360; i++) {
  x = r.width/2 + Math.cos( Rune.radians(i) ) *radius*2.5;
  //The exponent a controls the shape of the curve
  y = r.height/2+ Math.sin( Rune.radians(i) ) * Math.pow(Math.sin(Rune.radians(i)/2), a) *radius;
  if (i==0) {
    p = r.path(200, 300).fill('hsv', 0, 100, 55).strokeWidth(4);
  } else {
  //ellipse(x,y, 10,10);
  //point(x,y);
  // vertex(x,y);
    p.lineTo(y-400,x-500);
  }
}
p.closePath();

p2 = p.copy().strokeWidth(4);
p3 = p.copy().strokeWidth(4);
p4 = p.copy().strokeWidth(4);
p5 = p.copy().strokeWidth(4);
p6 = p.copy().strokeWidth(4);
p7 = p.copy().strokeWidth(4);

p2.move(400,300);
p3.move(100,550);
p4.move(700,700);
p5.move(300,900);
p6.move(400,850);
p7.move(200,500);

r.draw();