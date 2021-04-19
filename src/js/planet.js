export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  planetYear(years) {
    if (years < 0 || isNaN(years)) {
      return undefined;
    }
    const planetYears = parseInt(years / this.earthYears);
    this.planetYears = planetYears;
    return this.planetYears;
  }
}
