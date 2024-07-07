( () =>{
$(document).ready(function () {
    let texto=""
  $("#boton1").click(() => {
    $("#banner__top").hide();
    funcion("a");
  });
  $("#boton2").click(() => {
    $("#banner__top").hide();
    funcion("b");
  });
  $("#boton3").click(() => {
    $("#banner__top").hide();
    funcion("c");
  });
const funcion = (texto) => {
    const botones={
    a:"Para proteger nuestra identidad Digital; creamos @electronicos con nombres propios<br>ejemplos :<br><br>Elver Castillo<br>Andrea Cortez<br>David Gomez",
    b:"El periodo de entrenamiento se realíza cumpliendo metas;<br><br> siete metas en total;<br>Basadas en publicidad unicamente;<br>para esto empleamos la red social<br> <br>INSTAGRAM",
    c:"Depende del cargo en que te encuentres;<br><br> tambien esto depende del liderazgo dentro de la empresa",
}
    if(botones[texto]){
        botones[texto]
 const div1 = document.querySelector(".form__container");
 const boton = document.createElement("button");
 div1.classList.add('text')
 boton.classList.add('fas','fa-check-square')
  div1.innerHTML = botones[texto];
  boton.addEventListener("click", () => {
    location.reload();
  });
  div1.appendChild(boton);
}}
});
})()