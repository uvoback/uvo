/* class Super {
    constructor() {
        console.log("构造");
    }
}

class Sub extends Super {

    static nns() {
        console.log("nns");
    }
}
Sub.nns();

new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub(); */
function Super()
{
    console.log("构造");
}

/* Sub.prototype = new Super(); */

/* Sub.nns = function()
{
    console.log("nns");
}

Sub.prototype.snns = function()
{
    console.log("snns");
}

function Sub()
{
    this.prototype = new Super();
}

new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub();
new Sub(); */





/* function Cak(a)
{
    this.span = a;
}

function Zub(a, uu)
{
    this.prototype = new Cak(a);
    this.uu = uu;
}

var aa = new Zub(1, 2)
console.log(aa.prototype.span + "+" + aa.uu);
var bb = new Zub(3, 4)
console.log(aa.prototype.span + "+" + aa.uu);
console.log(bb.prototype.span + "+" + bb.uu); */
/* function Alxx()
{
}
var a = new Alxx().__proto__;
var b = Alxx.prototype;
console.log(a === b);
console.log(a);
console.log(b); */
/* function Cak(a)
{
    this.span = a;
}

Zub.prototype = new Cak(114);

function Zub(a, uu)
{
    //this.prototype = new Cak(a);
    Cak.call(this, a);
    this.uu = uu;

}

var aa = new Zub(1, 2)
console.log(aa.span + "+" + aa.uu);
var bb = new Zub(3, 4)
console.log(aa.span + "+" + aa.uu);
console.log(bb.span + "+" + bb.uu);
console.log("------");
var b = bb;
for (var key in b) {
    console.log(key + "=" + b[key]);
} */

/* function Cak(a)
{
    if (arguments.length == 0) return;
    this.span = a;
}

Zub.prototype = new Cak();

function Zub(a, uu)
{
    //Cak.call(this, a);
    this.__proto__.constructor(a);
    this.uu = uu;
}

var aa = new Zub(1, 2)
console.log(aa.span + "+" + aa.uu);
var bb = new Zub(3, 4)
console.log(aa.span + "+" + aa.uu);
console.log(bb.span + "+" + bb.uu);
console.log("------");
var b = bb;
for (var key in b) {
    console.log(key + "=" + b[key]);
} */
var a = "a";
var r = parseInt(a)
console.log(r);