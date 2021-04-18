export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  planetAge(age) {
    if (age < 0) {
      return false;
    }
    const planetYears = parseInt(age / this.earthYears);
    this.planetYears = planetYears;
    return this.planetYears;
  }
}
