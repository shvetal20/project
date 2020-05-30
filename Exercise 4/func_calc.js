
function  myFirstApp(name,age) {
alert(`Привет, меня зовут ${name} и это моя первая программа`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        skills.forEach(function(item) {
        alert('Я владею ' + item);
        });
        // console.log(skills);
    }
    showSkills();

    function checkAge() {
        if (age > 18) {
            alert("У тебя отличные шансы стать FrondEnd dev!");
        } else {
            alert("Ты очень рано задумался над своим будущим");
        }

    }
    checkAge();

    function calcPow(num) {
        return num ** num;
    }
    console.log(calcPow(2));
}

myFirstApp('Vitalii', 36);

