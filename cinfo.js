function black(){
    document.getElementById('info').style.borderTop='2px solid white';
    document.getElementById('info').style.borderBottom='1px solid white';
    document.getElementById('info').style.backgroundColor='black';
    document.getElementById('aim1').style.color='white';
    document.getElementById('def1').style.color='white';
    document.getElementById('prize1').style.color='white';
    
    document.getElementById('Time').style.borderBottom='2px solid white';
    document.getElementById('Time').style.backgroundColor='black';
    document.getElementById('pTime1').style.color='white';
    document.getElementById('Date').style.color='white';

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
    var tovar=document.getElementsByClassName('nametovar');
    tovar[0].style.color="white";
    tovar[1].style.color="white";
    tovar[2].style.color="white";
    
    var price=document.getElementsByClassName('discount');
    price[0].style.color="white";
    price[1].style.color="white";
    price[2].style.color="white";
}

function EN(){
    document.getElementById('glav1').innerHTML='Home';
    document.getElementById('glav2').innerHTML='Tours';
    document.getElementById('glav3').innerHTML='Contacts';
    document.getElementById('glav4').innerHTML="About us";
    document.getElementById('aim1').innerHTML='The goal of our "Be Good travel" is to create the maximum comfortable and informative vacation for you!';
    document.getElementById('def1').innerHTML='We invite you to visit anywhere in the world, relax, have fun and get acquainted with the culture of other countries. And all this - at affordable prices and at the highest level of service. At your service - the best resorts and historical cities, comfortable hotels and corners of pristine nature. We are ready to help you realize your dream. Traveling with “Be Good travel” is reliable, profitable and convenient.';
    document.getElementById('prize1').innerHTML='The company "Be Good travel" wishes you a good day and good mood!';
    document.getElementById('pTime').innerHTML='Opening hours';
    document.getElementById('pTime1').innerHTML='Travel';
    document.getElementById('Date').innerHTML=('MN-FR: 9:00-18:00\nST: 10:00-14:00\nSN: Holiday');
    document.getElementById('qwe').innerHTML='Contacts';
    document.getElementById('meken').innerHTML='Kabanbay Batyr street 1, Nur-Sultan, Kazakhstan, The Earth';
    document.getElementById('inname').placeholder='Name';
    document.getElementById('insurname').placeholder='Surname';
    document.getElementById('innumber').placeholder='Age';
    document.getElementById('inadress').placeholder='Adress';
    document.getElementById('intheme').placeholder='Theme';
    document.getElementById('incomment').placeholder='Add comment...';
    document.getElementById('blinn').innerHTML='Send';
}

function RU(){
    document.getElementById('glav1').innerHTML='Главная';
    document.getElementById('glav2').innerHTML='Туры';
    document.getElementById('glav3').innerHTML='Контакты';
    document.getElementById('glav4').innerHTML="О нас";
    document.getElementById('aim1').innerHTML='Цель нашего "Be Good travel" —  Создание максимум комфортного и познавательного отдыха именно для вас!';
    document.getElementById('def1').innerHTML='Мы  предлагаем вам посетить любую точку мира, отдохнуть, развлечься и познакомиться с культурой других стран. И все это — за приемлемые цены и на самом высоком уровне обслуживания. К вашим услугам — лучшие курорты и исторические города, комфортабельные отели и уголки девственной природы. Мы готовы помочь вам осуществить мечту. Путешествие с «Be Good travel»  — это надежно, выгодно и удобно.';
    document.getElementById('prize1').innerHTML='Компания «Be Good travel» желает Вам удачного дня и хорошего настроения!';
    document.getElementById('pTime').innerHTML='Часы работы';
    document.getElementById('pTime1').innerHTML='Путешествуй!';
    document.getElementById('Date').innerHTML=('ПН–ПТ: 9:00–18:00\nСБ: 10:00–14:00\nВС: выходной');
    document.getElementById('qwe').innerHTML='Контакты';
    document.getElementById('meken').innerHTML='ул. Кабанбай батыр, 60/4, Нур-Султан, Казахстан, Земля';
    document.getElementById('inname').placeholder='Имя';
    document.getElementById('insurname').placeholder='Фамилия';
    document.getElementById('innumber').placeholder='Возраст';
    document.getElementById('inadress').placeholder='Адрес';
    document.getElementById('intheme').placeholder='Тема';
    document.getElementById('incomment').placeholder='Добавьте сообщение...';
    document.getElementById('blinn').innerHTML='Отправить';
}