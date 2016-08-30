function logtype(value){
    if (typeof value === "undefined"){
        console.log("undefined!");
    }
    else if (Array.isArray(value) === true){
        console.log("array!");
    }
    else if (typeof value === "string"){
        console.log("string!");
    }
    else if (value === null){
        console.log("null!");
    }
    else if (typeof value === "boolean"){
        console.log("boolean!");
    }
    else if (typeof value === "function"){
        console.log("function!");
    }
    else if (typeof value === "object"){
        console.log("object!");
    }
    else if (isNaN(value) === true){
        console.log("NaN!");
    }
    else if (typeof value === "number"){
        console.log("number!");
    }
    else {
        console.log("I have no idea!");
    }
}

var a;
var b = null;
var c = 1;
var d = NaN;
var e = "hello";
var f = true;
var g = function(){};
var h = new Object;
var i = [];


logtype(a);
logtype(b);
logtype(c);
logtype(d);
logtype(e);
logtype(f);
logtype(g);
logtype(h);
logtype(i);
