import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  test("should create a life left object that has overall happiness, stress level and continent properties", () => {
    const lifeLeft = new LifeLeft("North America", "Very", "Low");
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: "Very",
      stressLevel: "Low",
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
});
