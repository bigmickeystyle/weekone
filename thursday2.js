function newRev(arr){
    return arr.slice().reverse();
}

var forward = [1, 2, 3, 4, 5];

var backward = newRev(forward);

console.log(forward);
console.log(backward);
