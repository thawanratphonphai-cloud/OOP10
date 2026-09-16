class Engine{
    constructor(private type:string){}
    start():void{
        console.log(`เครื่องยนต์${this.type}กำลังทำงาน`);
    }
    stop():void{
        console.log(`เครื่องยนต์${this.type}หยุดทำงาน`);
    }
    showInfo():void{
        console.log(`เครื่องยนต์ชนิด ${this.type}`);
    }
}
class Battery{
    constructor(public capacity:number){}
    charge():void{
        this.showInfo();
        this.capacity=100;
        console.log('ชาร์จเรียบร้อยแล้ว');
        this.showInfo();
    }
    showInfo():void{
        console.log(`ขณะนี้แบตเตอรี่ตงเหลือ ${this.capacity}%`)
    }
}
class Car{
    private engine:Engine;
    private battery:Battery;

    constructor(engineType:string,batteryCapacity:number){
        this.engine =new Engine(engineType);
        this.battery=new Battery(batteryCapacity);
    }
    startcar():void{
        this.engine.start();
    }
    stopCar():void{
        this.engine.stop
    }
    showCarInfo():void{
        
        console.log(`ข้อมูลรถยนต์: ประเภทเครื่องยนต์:`,this.engine);
        console.log(`สถานะแบตเตอรี่: ความจุคือ${this.battery.capacity}mAh`);
        
    }
    chargeBattery():void{
        this.battery.charge();
    }
}
const car1=new Car("v6",10);
car1.startcar();
car1.chargeBattery();
car1.stopCar();
