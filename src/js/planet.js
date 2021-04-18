export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  planetAge(age) {
    if (age < 0 || isNaN(age)) {
      return "Please enter a valid age in number format";
    }
    const planetYears = parseInt(age / this.earthYears);
    this.planetYears = planetYears;
    return this.planetYears;
  }
}
