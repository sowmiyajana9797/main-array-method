// Main Array Methods

// 1.forEach:

let sentence = [1,3,5,7,8,10];
sentence.forEach(function(a){
    let result = a - 1 ;
    console.log(result);
});

// output
// 0
// 2
// 4
// 6
// 7
// 9

// 2. map:

let maps = [44,66,77,88];
let output = maps.map(function(number){
    return number + 5;
});
console.log(output);

// output
// [ 49, 71, 82, 93 ]

// 3. filter:
let sowmiya = [3,4,5,6,7,8,9];
let ans = sowmiya.filter(function(y){
    if(y >= 6){
        return y;
    }
});
console.log(ans);

// output
// [ 6, 7, 8, 9 ]

// 4.reduce:
let num = [4,3,2,7,5];
let web = num.reduce(function(accumulator,currentvalue){
    return accumulator + currentvalue;
},0);
console.log(web);

// output
// 21

// 5.slice:

let cloths = ["adidas","puma","label","raymond"];
let res = cloths.slice(0,3);
console.log(res);

// output
// [ 'adidas', 'puma', 'label' ]

// 6.splice:

let bikes = ["RE","R15","RX100","HondaShine"];
let out = bikes.splice(1,3);
console.log(out);

// output
// [ 'R15', 'RX100', 'HondaShine' ]
  
// 7.sort:
let screen = [1,4,3,2,7,9];
let shot = screen.sort(function(x,y){
    return y-x;
});
console.log(shot);

// output
// [ 9, 7, 4, 3, 2, 1 ]
