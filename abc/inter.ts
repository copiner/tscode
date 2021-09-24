/*
    interface
*/
export const inter = ()=>{

    interface LabelledValue {
        label: string;
        size: number;
    }
    
    function printLabel(labelledObj: LabelledValue) {
        console.log(labelledObj.label);
    }
    
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);

    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
           newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({color: "black"});
    console.log(mySquare)

    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = {x:10, y: 20}
    //p1.x = 5;

    let a: Array<number> = [3,5,7,9];
    let ro: ReadonlyArray<number> = a;
    console.log(ro[0]);
    //ro[0] = 12;

    //a = ro;
    a = ro as number[];

    interface SearchFunc {
        (source: string, subString: string): boolean;
    }

    let mySearch: SearchFunc;
    mySearch = function(source: string,  subString: string){
        let result = source.indexOf(subString);
        return result > -1;
    }

    console.log(mySearch('copiner','co'));

    //todo
    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }
    
    function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
        return new ctor(hour, minute);
    }
    
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }
    
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    digital.tick()

    //------
    interface Shape {
        color: string;
    }
    
    interface PenStroke {
        penWidth: number;
    }
    
    interface Square extends Shape, PenStroke {
        sideLength: number;
    }
    
    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    console.log(square)

    //------
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;

    console.log(c)
    
}

inter()