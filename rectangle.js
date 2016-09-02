function Rectangle(width, height){
    this.width = width,
    this.height = height,
    this.getArea = function(){
        console.log(this.height*this.width);
    };
}

function Square(length){
    Rectangle.call(this, length, length);
}

var rect = new Rectangle(4, 5);
rect.getArea(); //20

var square = new Square(4);
square.getArea(); //16

function Rectangle2(width, height){
    this.width = width,
    this.height = height;
}

Rectangle2.prototype.getArea = function(){
    console.log(this.width * this.height);
};

Square2.prototype.getArea = Rectangle2.prototype.getArea;

function Square2(length){
    this.width = length,
    this.height = length;
}

var rect2 = new Rectangle2(6, 7);
rect2.getArea();

var square2 = new Square2(5);
square2.getArea();
