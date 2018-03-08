/**
 * Created by David on 2017-06-28.
 */

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastNaem = last;
    this.age = age;
    this.eye = eye;
}

var a = new Person('jin seok','lee','27','black');

// var arr = ['a','b','c'];

// console.log(arr);

// for( i in a ){
//     var str = a[i];
//     var c = [i,str];
//     console.log(c.join(':').toUpperCase());
// }

function returnLength(){
    for(x in arguments)
        console.log(arguments[x]);
    return arguments.length;
}

function celebrityIDCreator(theCelebrities){
    var i;
    var uniqueID = 100;
    for(i in theCelebrities){
        theCelebrities[i]['id'] =  (function(j) {return Number(uniqueID) + Number(j)})(i);
    }
    return theCelebrities;
}
var datas = [{name:'david',id:0},{name:'seo yoon',id:0},{name:'josh',id:0}];
var ids = celebrityIDCreator(datas);
var first = ids[1];

var arr = [33, 4, 1, 2221, 21, 521];

console.log(arr);
console.log(arr.sort( (a,b) => {return a-b} ));
console.log(arr);

