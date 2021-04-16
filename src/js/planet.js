export default class Planet {
  constructor(name, earthYears) {
    this.name = name;
    this.earthYears = earthYears;
  }
  mercuryAge(userAge) {
    const mercuryYears = parseInt(userAge / this.earthYears);
    return mercuryYears;
  }
}
