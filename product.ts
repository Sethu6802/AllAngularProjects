class Product{

    private prodId : number;
    private desc : String;
    private price: number;

    constructor(pid:number = 1, des:String = "Description", pr:number = 100){
        this.prodId = pid;
        this.desc = des;
        this.price = pr;
    }

    getId(){
        return this.prodId; 
    }

    getDesc(){
        return this.desc;
    }

    getPrice(){
        return this.price;
    }
}

let p = new Product();
console.log(p.getId());
console.log(p.getDesc());
console.log(p.getPrice());