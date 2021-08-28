//this file is like a module

export class Point {
    constructor(private _x?:number,private _y?:number){}

    draw(){
        console.log('X'+this._x+"Y"+this._y)
    }

    get x(){
        return this._x
    }

    set x(value){
        if(value<0) throw new Error('value must more than zero')
    }
}

