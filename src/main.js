import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Planet from "./js/planet.js";
import LifeLeft from "./js/life-left.js";

$(document).ready(function () {
  const planets = [
    new Planet("Mercury", 0.24),
    new Planet("Venus", 0.62),
    new Planet("Mars", 1.88),
    new Planet("Jupitar", 11.86),
    new Planet("Saturn", 0.45),
    new Planet("Uranus", 0.72),
    new Planet("Neptune", 0.67),
    new Planet("Pluto", 6.39),
  ];
  let newUserAges = [];
  $("form#galactic-calc").submit(function (event) {
    event.preventDefault();
    const userAge = parseInt($("#user-age").val());
    const continent = $("#continent").val();
    const happiness = $("#happiness").val();
    const stress = $("#stress").val();
    const lifeExpectancy = new LifeLeft(continent, happiness, stress, userAge);
    planets.forEach((element) => {
      newUserAges.push(element.planetAge(userAge));
    });
    let planetAges = "";
    planets.forEach((element, index) => {
      planetAges += `<p>Planets and Ages:</p> <ul> <li>Planet: ${element.name} Age: ${newUserAges[index]}</li></ul>`;
    });
    lifeExpectancy.lifeExpect();
    lifeExpectancy.lifeStyles();
    $("#output").html(planetAges);
    $("#output").text(lifeExpectancy.lifeCalc());
    $("#output").show();
  });
});
