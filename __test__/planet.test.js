import Planet from "../src/js/planet.js";

describe("Planet", () => {
  test("will create a planet object with a planet name and Earth year equivalent property", () => {
    const planet = new Planet("Mercury", 0.24);
    const planetObject = {
      name: "Mercury",
      earthYears: 0.24,
    };
    expect(planet).toEqual(planetObject);
  });
});
