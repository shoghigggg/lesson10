function myFunction(a, b) {
    return a *b;
}
myFunction(4,3);

//-------------------------

function calculateDogAge(age) {
    var dogYears = 7 *age;
    console.log(dogYears);

}
 calculateDogAge(1)
 calculateDogAge(2);

 //------------------------

 function calculate(age) {
     var currentYear = 2017;
     var birthYear = currentYear - age;
     console.log(birthYear);
 }
calculate(20);


//---------------------------

var cube = function(x){
return x * x * x;
};

console.log(cube(5));
console.log(cube("test"));

var cube = function(x) {
    if(typeof(x) !== 'number') return true;
   return x * x * x;

};

/*cube('test');

var name = function(y) {
    if(typeof(y) == "string") return 1;
    caches
};
name('test')*/

//-------------
var w =15;
var volume = function(w , l , h){
    return w * l * h;
};
volume(2, 3, 4);
console.log(w);

//--------------------------
var area = 36;
var volume = function(w , l , h){
  var  area = w * l;
    console.log("inside the function are is" + area);
    return area * (2*h);
};

console.log("the volume is" + volume(2,3,4));
console.log("outside the function, area is" + area);

//--------------------------------------
/*function getMaxNumb(n1, n2){
    if(n1 < n2){
        return n2;
    }
    else {

return n1;
    }
};
alert(getMaxNumb(10 , 11));


var num1 = 5;
var num2 = 6;
var getMaxnum = function (n1 , n2){
    if(n1 < n2) {
        return n2;
    }
    else {
        return n1;
    }
};

getMaxnum(num1,num2);*/

//------------------------------------
function doubleMax(x,y){
    return 2 * getMaxnum(x,y);
};

function getMaxnum(n1, n2){
    if(n1 < n2){
        return n2;
    }
    else{
        return n1;
    }
};

console.log(doubleMax(13 , 10));

//---------------------------

function luckyNumber (a , b , c){
    var lucky = b * getMin (a,c);
    return lucky;
}
function getMin(n1,n2){
    if(n1 > n2){
        return n2;
    }
    else {
        return n1;
    }
}
alert(luckyNumber(5, 6.5, 2));