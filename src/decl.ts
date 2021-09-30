/*
    declare
*/

export const decl=()=>{

    
    const num = 9;
    const kitty = {
          name:"Dainy",
          live:num
    }

    kitty.name = 'Rorry';
    kitty.live--;

    //kitty = null;

    function f([a, b]: [number, number]){
         console.log(a);
         console.log(b);
    }

    let kki: [number,number] = [9,5];
    //f(kis);
    f(kki);

    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a:act, ...b } = o;

    console.log(act);
    console.log(b);

    //rest
    let s = [3,7];
    let p = [9,3];
    let d = [2,...s, ...p, 8];
    console.log(d);
    d[1] = 4;
    console.log(d);
    console.log(s);

    let obj = {
        food:"spicy",
        price:"88",
        ambiance:"noisy"
    }

    let search = {
        ...obj,
        food:"sweet",
    }

    console.log(search);


}

decl();