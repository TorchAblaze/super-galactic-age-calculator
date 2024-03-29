import Planet from "../src/js/planet.js";

describe("Planet", () => {
  test("should create a planet object with planet name and Earth year equivalent properties", () => {
    const planet = new Planet("Mercury", 0.24);
    const planetObject = {
      name: "Mercury",
      earthYears: 0.24,
    };
    expect(planet).toEqual(planetObject);
  });
  test("should create a planet age method that takes an age parameter and returns that age in the planet's years", () => {
    const mercury = new Planet("Mercury", 0.24);
    const venus = new Planet("Venus", 0.62);
    const mars = new Planet("Mars", 1.88);
    const jupitar = new Planet("Jupitar", 11.86);
    const saturn = new Planet("Saturn", 0.45);
    const uranus = new Planet("Uranus", 0.72);
    const neptune = new Planet("Neptune", 0.67);
    const pluto = new Planet("Pluto", 6.39);
    const userAge = 23;
    expect(mercury.planetYear(userAge)).toEqual(95);
    expect(venus.planetYear(userAge)).toEqual(37);
    expect(mars.planetYear(userAge)).toEqual(12);
    expect(jupitar.planetYear(userAge)).toEqual(1);
    expect(saturn.planetYear(userAge)).toEqual(51);
    expect(uranus.planetYear(userAge)).toEqual(31);
    expect(neptune.planetYear(userAge)).toEqual(34);
    expect(pluto.planetYear(userAge)).toEqual(3);
  });
  test("If userAge is less than 0, return false", () => {
    const mercury = new Planet("Mercury", 0.24);
    const userAge = -12;
    expect(mercury.planetYear(userAge)).toEqual(undefined);
  });
  test("If userAge is equal to NaN, return false", () => {
    const mercury = new Planet("Mercury", 0.24);
    const userAge = "Hello";
    expect(mercury.planetYear(userAge)).toEqual(undefined);
  });
});
