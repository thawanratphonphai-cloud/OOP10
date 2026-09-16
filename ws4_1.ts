export{};
class Patient{
    constructor(private name:string,private age:number){}
    showInfo(){
        return `ผู้ป่วยชื่อ: ${this.name}อายุ: ${this.age}`;
    }
}

class Doctor{
    constructor(private name:string,private special:string){}
    showInfo(){
        return `แพทย์ ${this.name}เชี่ยวชาญ ${this.special}`;
    }
    examine(p:Patient){
        console.log(this.showInfo(),"ตรวจคนไข้",p.showInfo());
    }
    diagnose(p:Patient,diagnose:string){
        console.log(this.showInfo(),"วินิจฉัย",p.showInfo(),"เป็นโรค",diagnose);
    }
    prescribeMedicine(pt:Patient,med:string){
        console.log(this.showInfo(),"จ่ายยา",med,"ให้",pt.showInfo());
    }
    calculateTreatmentCost(pt:Patient,fee:number,medFee:number){
        const total = fee + medFee;
        console.log(this.showInfo(),"คำนวณค่ารักษา",pt.showInfo(),"รวมเป็นเงิน",total,"บาท");
    }
}

const doctor=new Doctor("สำราญ","หัวใจ")
const p1 =new Patient("วันดี",25);
const p2 =new Patient("อุทัยวร",50);

doctor.examine(p1);
doctor.examine(p2);
doctor.diagnose(p1,"หัวใจเต้นผิดจังหวะ");
doctor.diagnose(p2,"หัวใจล้มเหลว");

doctor.prescribeMedicine(p1, "ยาลดความดัน");
doctor.prescribeMedicine(p2, "ยาบำรุงหัวใจ");

doctor.calculateTreatmentCost(p1, 1000, 500);
doctor.calculateTreatmentCost(p2, 800, 300);