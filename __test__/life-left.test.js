import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  let lifeLeft;
  beforeEach(() => {
    lifeLeft = new LifeLeft("North America", 3, 1);
  });
  test("should create a life left object that has overall happiness, average stress level and continent properties", () => {
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: 3,
      stressLevel: 1,
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
  test("should return a number that matches the life expectancy of the object continent", () => {
    expect(lifeLeft.lifeExpect()).toEqual(78);
  });
  test("should add 5 years to life expectancy if happy level is high", () => {
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(83);
  });
});
