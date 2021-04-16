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
  test("should create a Mercury method that takes an age parameter and returns that age in Mercury years", () => {
    const planet = new Planet("Mercury", 0.24);
    const userAge = 23;
    expect(planet.mercuryAge(userAge)).toEqual(95);
  });
  test("should create a Venus method that that takes an age parameter and returns that age in Venus years", () => {
    const planet = new Planet("Venus", 0.62);
    const userAge = 23;
    expect(planet.venusAge(userAge)).toEqual(37);
  });
});
