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
  $("form#galactic-calc").submit(function (event) {
    event.preventDefault();
    const userAge = parseInt($("#user-age").val());
    const continent = $("#continent").val();
    const happiness = parseInt($("#happiness").val());
    const stress = parseInt($("#stress").val());
    const lifeExpectancy = new LifeLeft(continent, happiness, stress, userAge);
    lifeExpectancy.lifeExpect();
    lifeExpectancy.lifeStyles();

    if (isNaN(userAge) || userAge < 0) {
      const error = "Please enter a valid age in number format";
      $("#output").text(error);
      $("#output").show();
      return;
    }

    const yearsSurpassed = lifeExpectancy.surpassedExpect();
    const yearsLeft = lifeExpectancy.lifeCalc(yearsSurpassed);
    let planetAges = "<p>Planets and Ages</p>";
    planets.forEach((element) => {
      if (yearsSurpassed) {
        planetAges += `<ul> <li>You are ${element.planetYear(
          userAge
        )} year(s) old and have surpassed the life expectancy by ${element.planetYear(
          yearsLeft
        )} year(s) on ${element.name}</li></ul>`;
      } else {
        planetAges += `<ul> <li>You are ${element.planetYear(
          userAge
        )} year(s) old and have approximately ${element.planetYear(
          yearsLeft
        )} year(s) left on ${element.name}</li></ul>`;
      }
    });
    $("#output").html(planetAges);
    if (yearsSurpassed) {
      $("#output").append(
        `You have surpassed the life expectancy by ${yearsLeft} year(s) on Earth`
      );
    } else {
      $("#output").append(
        `You have approximately ${yearsLeft} year(s) left on Earth`
      );
    }
    $("#output").show();
  });
});
