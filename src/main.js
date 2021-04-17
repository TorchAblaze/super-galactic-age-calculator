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
    const happiness = parseInt($("#happiness").val());
    const stress = parseInt($("#stress").val());
    console.log(continent);
    if (userAge < 0 || isNaN(userAge)) {
      $("#output").text("Please enter an age in number format");
    } else {
      const lifeExpectancy = new LifeLeft(
        continent,
        happiness,
        stress,
        userAge
      );
      lifeExpectancy.lifeExpect();
      lifeExpectancy.lifeStyles();
      console.log(lifeExpectancy);
      planets.forEach((element) => {
        newUserAges.push(element.planetAge(userAge));
      });
      let planetAges = "<p>Planets and Ages</p>";
      planets.forEach((element, index) => {
        planetAges += `<ul> <li>${element.name} Age: ${newUserAges[index]}</li></ul>`;
      });
      $("#output").html(planetAges);
      $("#output").append(lifeExpectancy.lifeCalc());
    }
    $("#output").show();
  });
});
