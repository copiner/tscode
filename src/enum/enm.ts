/*
  enum
*/

export const enm = () => {
    enum Direction {
        up,
        down,
        left,
        right
    }

    console.log(Direction.right)

    enum ShapeKind {
        Circle,
        Square,
    }

    interface Circle {
        kind: ShapeKind.Circle;
        radius: number;
    }

    interface Square {
        kind: ShapeKind.Square;
        sideLength: number;
    }

    let c: Circle = {
        //kind: ShapeKind.Square,//error
        kind: ShapeKind.Circle,
        radius: 100,
    }

    console.log(c);

    enum E {
        X, Y, Z
    }

    function f(obj: { X: number }) {
        return obj.X;
    }


    console.log(f(E));

    //------
    enum En {
        A
    }
    let a = En.A;
    let nameOfA = En[a]; // "A"
    console.log(nameOfA);

    //------
    const enum Directions {
        Up,
        Down,
        Left,
        Right
    }

    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

    console.log(directions);
}

enm();
