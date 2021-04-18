import LifeLeft from "../src/js/life-left.js";

describe("LifeLeft", () => {
  let lifeLeft;
  beforeEach(() => {
    lifeLeft = new LifeLeft("North America", 3, 1, 23);
  });
  test("should create a life left object that has overall happiness, average stress level and continent properties", () => {
    const lifeLeftObject = {
      continent: "North America",
      happyLevel: 3,
      stressLevel: 1,
      age: 23,
    };
    expect(lifeLeft).toEqual(lifeLeftObject);
  });
  test("should return a number that matches the life expectancy of the object continent", () => {
    expect(lifeLeft.lifeExpect()).toEqual(78);
  });
  test("should add 5 years to life expectancy if overall happy level is high", () => {
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(83);
  });
  test("should add 2 years to life expectancy if overall happy level is equal to 2", () => {
    lifeLeft.happyLevel = 2;
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(80);
  });
  test("should return expected life expectancy if overall happy level is low", () => {
    lifeLeft.happyLevel = 0;
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(78);
  });
  test("should subtract 2 years from life expectancy if overall stress level is high", () => {
    lifeLeft.stressLevel = 3;
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(81);
  });
  test("should subtract 1 year from life expectancy if overall stress level is equal to 2", () => {
    lifeLeft.stressLevel = 2;
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(82);
  });
  test("should return life expectancy if overall stress level is low", () => {
    lifeLeft.stressLevel = 0;
    lifeLeft.lifeExpect();
    expect(lifeLeft.lifeStyles()).toEqual(83);
  });
  test("should create a method that determines the user has not surpassed the life expectancy", () => {
    lifeLeft.lifeExpect();
    lifeLeft.lifeStyles();
    expect(lifeLeft.surpassedExpect()).toEqual(false);
  });
  test("should return how many years passed the life expectancy a user has lived", () => {
    lifeLeft.age = 93;
    lifeLeft.lifeExpect();
    lifeLeft.lifeStyles();
    expect(lifeLeft.surpassedExpect()).toEqual(true);
  });
  test("should return years surpassed the expectancy if lifeExpect() returns true", () => {
    lifeLeft.age = 93;
    lifeLeft.lifeExpect();
    lifeLeft.lifeStyles();
    const yearsSurpassed = lifeLeft.surpassedExpect();
    expect(lifeLeft.lifeCalc(yearsSurpassed)).toEqual(10);
  });
});
