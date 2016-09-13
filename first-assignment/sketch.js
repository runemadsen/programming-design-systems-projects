

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true,
    background: 0
});

//rune.backgroung(0)

var xrect = r.width/3;
var yrect = 350;
var rot=1;



//.rotate()


for (var j=0; j<3; j++){
  
r.ellipse(r.width/2-21*Rune.random(.9,1), 200*Rune.random(.9,1.1), 360*Rune.random(.9,1.1), 320*Rune.random(.9,1.1))
  .fill(false)
  .stroke(0)
}

r.triangle(0, 320, r.width, 320, r.width/2, 1500)
.fill(255)
.stroke(false)

for (var j=0; j<12; j++){
    
for(var i=0; i<(14-j); i++){
  
r.rect(xrect+(i*21)+(j*11.5), yrect+(j*28),33, 52)
  .fill(false)
  .rotate(45*rot, xrect+(i*21)+(j*11.5), yrect+(j*28))

  .stroke(0)

  rot= rot + 2
    if(rot>4)
    {rot=1}
}

}


r.draw();