
export const clss = () => {

    class Animal {
        public name: string;
        private age: number;
        constructor(theName: string, theAge: number) {
            this.name = theName;
            this.age = theAge;
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name + ',' + this.age} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name: string, age: number) { super(name, age); }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name: string, age: number) { super(name, age); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the pee", 12);
    let tom: Animal = new Horse("Tommy the pa", 11);

    sam.move();
    tom.move(34);

    sam.name;
    //sam.age;
}

clss()
