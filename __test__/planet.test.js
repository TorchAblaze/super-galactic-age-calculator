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
});
