// From previous challenge:
// Car Class Constructor:
class Car{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }       
    // Accelerate Method:
    accelerate(){
        this.speed = (this.speed + 10)  // Adding 10 km/h
        console.log("We are accelerating! We are now driving at " + this.speed + "km/h.")
    }
    // Brake Method:
    brake(){
        this.speed = (this.speed - 5)  // Subtracting 5 km/h
        console.log("We are slowing down! We are now driving at " + this.speed + "km/h.")
    }
}
// New code:
// 1. Implement EV Class:
class EV extends Car{
    constructor(make,speed,charge){
        super(make,speed)
        this.charge=charge
    }
// 2. Charge Battery Method:
chargeBattery(chargeTo){
    this.charge = chargeTo
        console.log("Battery has been charged to " + this.charge + "%.")
}
}