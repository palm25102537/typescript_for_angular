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

// let a:number;
// let b:boolean;
// let c:string;
// let d:any;
// let e:number[] = [1,2,3];
// let f:any[] = [1,true,'a'] 

// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue =2;

// enum Color {Red =0,Green=1,Blue=2,Purple=3}

// let backgroundColor = Color.Red;

// type assertion
// let message ="abc";
// let endWithC=(<string>message).endsWith('c');
// let alterWay=(message as string).endsWith('c');

//Custom type
//inline annotation
// let drawpoint = (point:number)=>{
//     //...

// }

// let drawpoint = (point:{x:number,y:number})=>{
//     //...

// }

// interface

// interface Point{
//     x:number,
//     y:number,
// }

// let drawPoint =(point:Point)=>{
//     //..
// }

// drawPoint({
//     x:1
//     y:2
// })

import {Point} from './point' //import class Point from module

//module in typescript is different from module of angular
let point = new Point(1,2)

point.draw()