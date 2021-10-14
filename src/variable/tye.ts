/*
  type
*/
export const tye = () => {

    interface Named {
        name: string;
    }

    let x: Named;
    let y = {
        name: "Alice",
        loc: "Seattle"
    };

    x = y;

    function greet(n: Named) {
        console.log('name', n.name);
    }

    greet(y);
}

tye();
