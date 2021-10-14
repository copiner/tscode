/*
  Generics
*/
export const generics = () => {

    function identity<T>(arg: T): T {
        return arg;
    }

    let ou = identity<string>("sstringg");
    console.log(ou);

    let op = identity(11011);
    console.log(op);

    function logIdentity<T>(arg: Array<T>): Array<T> {
        console.log(arg.length);
        return arg;
    }

    let ot = logIdentity([2, 7, 4]);
    console.log(ot);

    //------
    let tIdentity: <T>(arg: T) => T = identity;

    interface GenericIdentityFn<T> {
        (arg: T): T;
    }

    let yIdentity: GenericIdentityFn<number> = identity;

    console.log(yIdentity(2));

}

generics();
