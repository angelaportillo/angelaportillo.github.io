let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #40A3A7;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #40A3A7;">Estudio Ingeniería Biomédica y juego Handball:)</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
