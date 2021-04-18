export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  planetYears(years) {
    if (years < 0 || isNaN(years)) {
      return "Please enter a valid age in number format";
    }
    const planetYears = parseInt(years / this.earthYears);
    this.planetYears = planetYears;
    return this.planetYears;
  }
}
