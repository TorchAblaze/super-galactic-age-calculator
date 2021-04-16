export default class LifeLeft {
  constructor(continent, happyLevel, stressLevel) {
    this.continent = continent;
    this.happyLevel = happyLevel;
    this.stressLevel = stressLevel;
  }
  lifeExpect() {
    const continents = [
      ["North America", 78],
      ["South America", 75],
      ["Africa", 63],
      ["Australia", 83],
      ["Europe", 81],
      ["Asia", 69],
    ];
    continents.forEach((element) => {
      if (element[0] === this.continent) {
        this.lifeExpect = element[1];
      }
    });
    return this.lifeExpect;
  }
  lifeStyles() {
    if (this.happyLevel === 3) {
      this.lifeExpect += 5;
    } else if (this.happyLevel === 2) {
      this.lifeExpect += 2;
    }
    if (this.stressLevel === 3) {
      this.lifeExpect -= 2;
    } else if (this.stressLevel === 2) {
      this.lifeExpect -= 1;
    }
    return this.lifeExpect;
  }
}
