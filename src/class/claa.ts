/*
  class
*/
export const claa = () => {
    class Person {
        protected name: string;
        protected constructor(name: string) { this.name = name; }
    }

    class Employee extends Person {
        private department: string;

        constructor(name: string, department: string) {
            super(name)
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    //let john = new Person("John");//error

    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }

    class Octopuses {
        readonly numberOfLegs: number = 16;
        constructor(readonly name: string) {
        }
    }

    let dad = new Octopus("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit";//error
    console.log(dad.name);
    let dades = new Octopuses("Man with the 16 strong legs");
    console.log(dades.name);
}

claa();
