function inverse(str){
    str = [].slice.call(str);
    var inverted = str.map(function(letter){
        return (letter === letter.toUpperCase()) ? letter.toLowerCase() : letter.toUpperCase();
    }).join('');
    return inverted;
}

console.log(inverse("hArDCorE"));
