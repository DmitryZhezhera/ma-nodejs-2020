class Planet {
  constructor(name, diameter) {
    this.p = 3.14;
    this.name = name;
    this.v = this.calcV(diameter);
  }

  toString() {
    console.log('​Планета ', this.name, " має об'єм ", this.v);
  }

  calcV(d) {
    return (4 * this.p * (d / 2) ** 3) / 3;
  }
}

module.exports = Planet;
