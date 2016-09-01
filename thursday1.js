
function each(item, func){
    if (typeof item === "object" && typeof func === "function") {
        for (var val in item){
            func(item[val], val);
        }
    }
    else if (Array.isArray(item) === true && typeof func === "function"){
        for (var i = 0; i < item.length; i++){
            func(i, item[i]);
        }
    }
    else {
        console.log("please enter an array or object for the first argument,"
        +" and a function as the second");
        return 0;
    }

}
each({
    a: 1,
    b: 2
}, function(val, name) {
    console.log('The value of ' + name + ' is ' + val);
}); //logs 'the value of a is 1' and 'the value of b is 2'

each(['a', 'b'], function(val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
}); //logs 'the value of item 0 is a' and '

each("banana", 3);
