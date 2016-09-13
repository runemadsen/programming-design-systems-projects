

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true,
    background: 0
});

//rune.backgroung(0)

var xrect = r.width/3;
var yrect = 380;
var rot=1;
var circ =90;
var circfactor = 2;
var hfact= 1;

    
for (var j=0; j<=4; j++){
    
for(var i=1; i<(4-j); i++){
  
    circfactor= circ + 65*Math.sin(Rune.degrees(i)) - 30*Math.sin(Rune.degrees(j));
    hfact= 20*Math.sin(Rune.degrees(i))
    
r.ellipse(xrect-62+(i*circ+10)+(j*circ/5), yrect-72-(j*circfactor/1.3)-hfact,circfactor+(i*3),circfactor+(i*3))
  .fill(0)
  
  .stroke(0)

}

}



for(var i=0; i<7; i++){
r.triangle(xrect-8, yrect-25, xrect+269, yrect-25, r.width/2, r.height-145)
.fill(255)
.stroke(false)

}

for (var j=0; j<12; j++){
    
for(var i=0; i<(12-j); i++){
  
r.rect(xrect-25+(i*24)+(j*12), yrect-26+(j*26),18,18)
  .fill(0)
  .rotate(45*rot, xrect+(i*24)+(j*12), yrect+(j*26))

  .stroke(22)

}

}



r.draw();