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
var p = r.polygon(200,350).fill(255);
for(var i=0; i<30; i++) {
  radius = i%2==0 ? Rune.random(50,75) : Rune.random(75,180)
  var x = Math.cos(Rune.radians(i * angle)) * radius;
  var y = Math.sin(Rune.radians(i * angle)) * radius;
  p.lineTo(x,y);
}

// WET
var path = r.path(600,350).fill(0);
var r_thing = 0
var offset = 2.75
var offset2 = 2.75
for(var i=0; i<500; i+=1) {
  r_thing = offset + 100 * (Math.sin(Rune.radians(2.5*i)));
  x = r_thing * Math.cos(Rune.radians(i));
  y = r_thing * Math.sin(Rune.radians(i));
  path.lineTo(x,y);
  if (i < 125) {
    offset += .15
    offset2 += .1
  } else if (i < 250) {
    offset -= .25
    offset2 -= 1.01
  } else if (i < 375) {
    offset += 1.15
    offset2 += .02
  } else {
    offset -= 1.25
    offset2 -= .02
  }
}

path.closePath();

r.draw();