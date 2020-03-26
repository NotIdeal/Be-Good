function timeEN(){
    var text;
    var time = new Date().getHours();
    if (time < 10) {
        text = "Good morning!";
    } else if (time < 18) {
        text = "Good day!";
    } else {
        text = "Good evening!";
    }
    return text;
}

function timeRU(){
    var text;
    var time = new Date().getHours();
    if (time < 10) {
        text = "Доброе утро!";
    } else if (time < 18) {
        text = "Добрый день!";
    } else {
        text = "Добрый вечер!";
    }
    return text;
}

function time(){
    document.getElementById('text').innerHTML=timeRU();
}

function EN(){
    document.getElementById('glav1').innerHTML='Home';
    document.getElementById('glav2').innerHTML='Tours';
    document.getElementById('glav3').innerHTML='Contacts';
    document.getElementById('glav4').innerHTML="About us";
    document.getElementById('text').innerHTML=timeEN();
    document.getElementById('text2').innerHTML='We thank you for your reply and wish you all the best!'
}

function RU(){
    document.getElementById('glav1').innerHTML='Главная';
    document.getElementById('glav2').innerHTML='Туры';
    document.getElementById('glav3').innerHTML='Контакты';
    document.getElementById('glav4').innerHTML="О нас";
    document.getElementById('text').innerHTML=timeRU();
    document.getElementById('text2').innerHTML='Мы благодарим вас за ваш ответ и желаем вам всего наилучшего!';
}

function black(){
    document.getElementById('jasu').style.borderTop='2px solid white';
    document.getElementById('jasu').style.borderBottom='2px solid white';
    document.getElementById('text2').style.color='white';
    document.body.style.backgroundColor ="black";
    document.getElementById("heading").style.backgroundColor ="black";
    document.getElementById("header").style.backgroundColor ="black";
    document.getElementById("companyname").style.color="white";
    document.getElementById('moon').src="img/moonwhite.png";
    document.getElementById('sun').src="img/sunwhite.png";
    document.getElementById("RUS").style.color="white";
    document.getElementById("ENG").style.color="white";
    document.getElementById("heding2").style.backgroundColor ="black";
    document.getElementById("heding2-1").style.backgroundColor ="black";
    document.getElementById("glav1").style.color="white";
    document.getElementById('glav2').style.color='white';
    document.getElementById('glav3').style.color='white';
    document.getElementById('glav4').style.color='white';
    document.getElementById('korzina').src="img/uuwak.png";
    document.getElementById("glav1").style.color="white";
    document.getElementById("glav1").onmouseenter=function(){
        this.style.backgroundColor='white';
        this.style.color='black';
    }
    document.getElementById("glav1").onmouseleave=function(){
        this.style.backgroundColor='black';
        this.style.color='white';
        this.style.transition='1.5s';
    }
    document.getElementById("glav2").onmouseenter=function(){
        this.style.backgroundColor='white';
        this.style.color='black';
    }
    document.getElementById("glav2").onmouseleave=function(){
        this.style.backgroundColor='black';
        this.style.color='white';
        this.style.transition='1.5s';
    }
    document.getElementById("glav3").onmouseenter=function(){
        this.style.backgroundColor='white';
        this.style.color='black';
    }
    document.getElementById("glav3").onmouseleave=function(){
        this.style.backgroundColor='black';
        this.style.color='white';
        this.style.transition='1.5s';
    }
    document.getElementById("glav4").onmouseenter=function(){
        this.style.backgroundColor='white';
        this.style.color='black';
    }
    document.getElementById("glav4").onmouseleave=function(){
        this.style.backgroundColor='black';
        this.style.color='white';
        this.style.transition='1.5s';
    }
    document.getElementById('btwt').style.color="white";
    document.getElementById('home').style.backgroundColor='black';
    document.getElementById('home').style.color='white';
}