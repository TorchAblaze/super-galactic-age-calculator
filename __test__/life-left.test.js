import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  test("should create a life left object that has overall happiness and continent properties", () => {
    const lifeLeft = new LifeLeft("North America", "Very");
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: "Very",
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
});
