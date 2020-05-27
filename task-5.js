class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed = ${car.maxSpeed}, speed = ${car.speed}, isOn = ${car.isOn}, distance = ${car.distance} и price = ${car.price}`
    );
  }

  constructor(obj, speed = 0, isOn = false, distance = 0) {
    this.maxSpeed = obj.maxSpeed;
    this._price = obj.price;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(amount) {
    this._price = Number(amount);
  }

  turnOn() {
    this.isOn === false ? (this.isOn = true) : console.log("car is already On");
  }

  turnOff() {
    if (this.isOn === true) {
      this.isOn = false;
      this.speed = 0;
    } else {
      console.log("car is already Off");
    }
  }

  accelerate(value) {
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += Number(value);
    }
  }

  decelerate(value) {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= Number(value);
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += Number(hours) * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
