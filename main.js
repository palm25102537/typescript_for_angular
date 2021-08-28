// function log(message){{
//     console.log(message)
// }}
// let msg = "Hello world"
// log(msg)
// let count = 5
// count = "a";
// let a;
// a=1
// a=true
// a="a"
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue =2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
