/*
        preserve
        react


        tsc index.tsx --jsx preserve
*/
function ComponentFoo(prop) {
    return <AnotherComponent name={prop.name}/>;
}
var Button = function (prop, context) {
    <button>{prop}</button>;
};
