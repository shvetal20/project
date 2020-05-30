let chooseBtn = document.getElementById("choose"),
    receiveBtn = document.getElementById("receive"),
    heading = document.getElementsByTagName("h2")[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    closeBtn = document.querySelector('.close');


chooseBtn.addEventListener('mouseenter',function() {
    heading.textContent = "Действительно все!";
});

chooseBtn.addEventListener('mouseleave',function() {
    heading.textContent = "Все включено";
});

receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});