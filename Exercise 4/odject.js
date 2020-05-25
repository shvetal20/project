let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    borde: "black",
    bg: "red"
};

delete options.bool;

console.log(options);


/*for (let key in options) {
    console.log("Свойства " + key + " Имеет значение " + options[key]);
}
console.log(Object.keys(options).length);*/


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Peter";

//delete user.name;

console.log(user.name);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum = 0;
  for (let key in salaries) {
      sum += salaries[key];
    
    }
    console.log(sum);


    let obj = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    
    function multiplyNumeric(obj) {
        for (let key in obj) {
            if(typeof obj[key] == "number") {
              obj[key] *= 2;
            }
        }
    }
    multiplyNumeric(obj);
    console.log(obj);
     
