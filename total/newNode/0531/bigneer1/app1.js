function algml(name,age){
    this.name=name,
    this.age=age
}

function add(a,b){
    return a+b;
}

module.exports = {
    algml:algml,
    add:add
}