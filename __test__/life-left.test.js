import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  test("should create a life left object that has overall happiness, average stress level and continent properties", () => {
    const lifeLeft = new LifeLeft("North America", "Very", "Low");
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: "Very",
      stressLevel: "Low",
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
  test("should return a number that matches the life expectancy of the object continent", () => {
    const lifeLeft = new LifeLeft("North America", "Very", "Low");
    expect(lifeLeft.lifeExpect()).toEqual(78);
  });
});
