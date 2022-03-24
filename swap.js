var a = 20;
var b = 30;
var temp = a;
a = b;
b = temp;
console.log('a = ',a);
console.log('b = ',b);

// without temporary variable
var x = 25;
var y = 20;
x = x+y;
//x = 25=20 = 45;
y = x-y;
//y = 45 - 20 = 25;

x = x - y;
// x = 45 - 25 = 20
console.log('x:',x);
console.log('y:',y);


var p = 21;
var q = 11;
[p,q] = [q,p];
console.log('p:',p);
console.log('q:',q);