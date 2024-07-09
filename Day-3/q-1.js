function compareJSON(obj1, obj2) {
    let obj1Keys = Object.keys(obj1).sort();
    let obj2Keys = Object.keys(obj2).sort();
    
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    
    for (let key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    
    return true;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

console.log(compareJSON(obj1, obj2)); // true

