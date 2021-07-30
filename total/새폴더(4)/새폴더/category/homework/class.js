class test{
    constructor(){
        this.name ='a'
    }
    static init(){
        console.log('static')
    }
    init(){
        console.log('그냥 init')
    }
}

console.log(test);
console.log(new test);
test.init();

let a = new test();
a.init();
