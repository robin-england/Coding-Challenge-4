// U63166005
// From previous challenge:
// Car Class Constructor:
class Car{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }       
    // Accelerate Method:
    accelerate(){
        this.speed = (this.speed + 10)  // Adding 10 km/h to speed
        console.log("We are accelerating! We are now driving at " + this.speed + "km/h.")
    }
    // Brake Method:
    brake(){
        this.speed = (this.speed - 5)  // Subtracting 5 km/h from speed
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
// 3. Customize Accelerate Method:
    accelerate(){
        this.speed = (this.speed + 20)  // Adding 20 km/h to speed
        this.charge = (this.charge - 1) // Decreasing charge by 1%
        console.log("We are accelerating! We are now driving at " + this.speed + "km/h. Charge is at " + this.charge + "%.")
    }
}
// 4. Testing EV Class:
let Tesla = new EV ("Tesla",120,23) // Created test car

Tesla.accelerate() // Testing each function
Tesla.brake()
Tesla.chargeBattery(2)
Tesla.accelerate()
Tesla.accelerate() // This will make the battery 0%
Tesla.accelerate() // Should not be able to accelerate anymore.

// Testing shows that the charge ends at -1% and the car continues to accelerate even though it shouldn't be able to.