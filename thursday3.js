function getLessThanZero(arr){
    var a = arr.filter(function(num){
        return num < 0;
    });
    return a;
}

var test = [1, 2, -1, -90, 10];

var result = getLessThanZero(test);

console.log(test);
console.log(result);
