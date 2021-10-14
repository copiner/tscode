/*
  Genertics
*/

export const genertic = () => {

    class GenericAny<T> {
        zeroVal: T;
        add: (x: T, y: T) => T;
    }

    let mGeneric = new GenericAny<number>();
    mGeneric.zeroVal = 9;
    mGeneric.add = function(x, y) {
        return x + y;
    }

    let sGeneric = new GenericAny<string>();
    sGeneric.zeroVal = '9';
    sGeneric.add = function(x, y) {
        return x + y;
    }

    console.log(mGeneric);
    console.log(sGeneric);

    //------
    interface Lengthwise {
        length: number;
    }

    function logIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }

    //logIdentity(9);
    logIdentity({ length: 1, value: 3 })


}

genertic()
