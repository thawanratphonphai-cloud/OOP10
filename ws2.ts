export {};

class CPU {
    constructor(private brand: string, private cores: number) {}
    process(): void {
        this.showInfo();
        console.log("CPU กำลังทำงาน");
    }
    showInfo(): void {
        console.log(`CPU - ${this.brand} ${this.cores} cores`);
    }
}

class RAM {
    constructor(private capacity: number) {}
    load(): void {
        this.showInfo();
        console.log("RAM กำลังโหลดข้อมูล");
    }
    showInfo(): void {
        console.log(`RAM - ${this.capacity}GB`);
    }
}

class Storage {
    constructor(private capacity: number, private type: string) {}
    readData(): void {
        this.showInfo();
        console.log("Storage กำลังจัดเก็บ");
    }
    showInfo(): void {
        console.log(`Storage - ${this.capacity} Type: ${this.type}TB`);
    }
}

class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage;

    constructor(brand: string, cores: number, ramCapacity: number, storageCapacity: number, storageType: string) {
        this.cpu = new CPU(brand, cores);
        this.ram = new RAM(ramCapacity);
        this.storage = new Storage(storageCapacity, storageType);
    }

    boot(): void {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
    }
}

const pc1 = new Computer("Intel", 8, 16, 1, "SSD");
pc1.boot();