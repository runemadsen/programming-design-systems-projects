var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  // debug: true
});

// SHARP
r.rect(0,0,400,800).fill(0);

var angle = 360/30
// radius = 150
var radius = 0;
var p = r.polygon(200,400).fill(255);
for(var i=0; i<30; i++) {
  radius = i%2==0 ? Rune.random(50,75) : Rune.random(75,180)
  var x = Math.cos(Rune.radians(i * angle)) * radius;
  var y = Math.sin(Rune.radians(i * angle)) * radius;
  p.lineTo(x,y);
}

// WET
// var path = r.path(600,400).fill(255).stroke(0);
// path.curveTo(700,200,500,100,700,700);
// path.lineTo(700,500);
// path.closePath();

var wave = r.path(500, 350).fill(255).stroke(0).strokeWidth(3);

// var angle = 0;
// while (angle < 720 ) {
//     wave.curveTo(100*Math.cos(angle), 0, 100*Math.sin(angle));
//     wave.curveTo(300*Math.cos(angle), 300, 300*Math.sin(angle));
//     angle += 720 / 30;
// }

var angle2 = 360/10;
var x1 = 50;
var y1 = 0;
var x2 = 100;
for(var j=0; j<10; j++) {
  var y1 = j%2==0 ? -100 : 100
  // var x2 = Math.cos(Rune.radians(j * angle2)) * 80;
  // x1 = Math.cos(Rune.radians(j * angle2) * (50 + (j*100)))
  // x2 = Math.cos(Rune.radians(j * angle2) * (100 + (j*100)))
  // y1 = Math.sin(Rune.radians(j * angle2) * offset)
  // var y2 = Math.sin(Rune.radians(j * angle2)) * 80;
  wave.curveTo(x1, y1, x2, 0)
  x1 += 100
  x2 += 100
}

wave.closePath();


r.draw();