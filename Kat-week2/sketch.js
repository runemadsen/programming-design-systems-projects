var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.rect(0,0,800,800).fill(0);

r.ellipse(130,130,50,50).fill(200).stroke(255);

for (var a=0,aMax=(2*Math.PI),aStep=(Math.PI/10); a<aMax; a+=aStep){
    step = randomIntFromInterval(150, 250);
    fillValue = randomIntFromInterval(170, 220);
    px1 = 130+Math.sin(a)*30;
    py1 = 130+Math.cos(a)*30;
    px2 = 130+Math.sin(a)*(30+step);
    py2 = 130+Math.cos(a)*(30+step);

    r.line(px1, py1, px2, py2).strokeWidth(5).stroke(fillValue);
};

r.ellipse(550,550,700,700).fill(200);

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

r.draw();