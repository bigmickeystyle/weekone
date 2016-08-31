function sumNum(){
    var total = 0;
    for (var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sumNum(5, 10));
console.log(sumNum(1, 3, 5, 15, 2, 3));
console.log(sumNum());

function waitThenRun(func){
    setTimeout(func, 3000);
}

function hello(){
    console.log("BOO!");
}

waitThenRun(hello);

function millionizer(num){
    if (num <= 0 || isNaN(num)){
        return "ERROR";
    }
    while (num <= 1000000){
        num *= 10;
    }
    return num;
}

console.log(millionizer(500));
console.log(millionizer(1000000));
console.log(millionizer("beef"));
console.log(millionizer(-3));
console.log(millionizer(0));
