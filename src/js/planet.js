export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  mercuryAge(age) {
    const mercuryYears = parseInt(age / this.earthYears);
    return mercuryYears;
  }
  venusAge(age) {
    const venusYears = parseInt(age / this.earthYears);
    return venusYears;
  }
}
