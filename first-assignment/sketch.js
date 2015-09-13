var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.rect(100, 100, 200, 200)
  .fill(255, 0, 0)
  .stroke(0)

r.triangle(400, 50, 400, 400, 650, 50)
  .fill(0, 255, 0)
  .stroke(0)

r.ellipse(200, 500, 200, 300)
  .fill(0, 0, 255)
  .stroke(false)

r.draw();