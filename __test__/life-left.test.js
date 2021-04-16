import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  let lifeLeft;
  beforeEach(() => {
    lifeLeft = new LifeLeft("North America", "Very", "Low");
  });
  test("should create a life left object that has overall happiness, average stress level and continent properties", () => {
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: "Very",
      stressLevel: "Low",
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
  test("should return a number that matches the life expectancy of the object continent", () => {
    expect(lifeLeft.lifeExpect()).toEqual(78);
  });
});
