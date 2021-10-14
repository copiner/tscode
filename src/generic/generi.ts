/*
  Generics
*/

export const gener = () => {
    /*
        function getProperty(obj: T, key: K) {
            return obj[key];
        }
    
        let x = { a: 1, b: 2, c: 3, d: 4 };
    
        getProperty(x, "a"); // okay
        getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.  
    */

    class BeeKeeper {
        hasMask: boolean;
    }

    class ZooKeeper {
        nametag: string;
    }

    class Animal {
        numLegs: number;
    }

    class Bee extends Animal {
        keeper: BeeKeeper;
    }

    class Lion extends Animal {
        keeper: ZooKeeper;
    }

    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }

    createInstance(Lion).keeper.nametag;
    createInstance(Bee).keeper.hasMask;



}

gener()
