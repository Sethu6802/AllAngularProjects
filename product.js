var Product = /** @class */ (function () {
    function Product(pid, des, pr) {
        if (pid === void 0) { pid = 1; }
        if (des === void 0) { des = "Description"; }
        if (pr === void 0) { pr = 100; }
        this.prodId = pid;
        this.desc = des;
        this.price = pr;
    }
    Product.prototype.getId = function () {
        return this.prodId;
    };
    Product.prototype.getDesc = function () {
        return this.desc;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    return Product;
}());
var p = new Product();
console.log(p.getId());
console.log(p.getDesc());
console.log(p.getPrice());
