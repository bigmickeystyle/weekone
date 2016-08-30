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

var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = new Object;

for (var prop in a){
    b[a[prop]] = prop;
}

console.log(b);

var i = 10;

while (i > 0) {
    console.log(i);
    i--;
}
