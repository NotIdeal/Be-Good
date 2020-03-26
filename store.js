function black(){
    var price=document.getElementsByClassName('discount');
    price[0].style.color="white";
    price[1].style.color="white"; 
    price[2].style.color="white";
    price[3].style.color="white";
    price[4].style.color="white";
    price[5].style.color="white";
    price[6].style.color="white";
    price[7].style.color="white";
    price[8].style.color="white";
    price[9].style.color="white";
    price[10].style.color="white";
    price[11].style.color="white";
    var tovar=document.getElementsByClassName('nametovar');
    tovar[0].style.color="white";
    tovar[1].style.color="white";
    tovar[2].style.color="white";
    tovar[3].style.color="white";
    tovar[4].style.color="white";
    tovar[5].style.color="white";
    tovar[6].style.color="white";
    tovar[7].style.color="white";
    tovar[8].style.color="white";
    tovar[9].style.color="white";
    tovar[10].style.color="white";
    tovar[11].style.color="white";
    document.body.style.backgroundColor ="black";
    document.getElementById('magazin').style.borderTop='1px solid white';
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
    document.getElementById('fooot').style.borderTop='3px solid white';
}

function EN(){
    document.getElementById('glav1').innerHTML='Home';
    document.getElementById('glav2').innerHTML='Tours';
    document.getElementById('glav3').innerHTML='Contacts';
    document.getElementById('glav4').innerHTML="About us";
    document.getElementById('slogan').innerHTML='Travel only in "Be Good travel"';
    var tovar=document.getElementsByClassName('nametovar');
    tovar[0].innerHTML='Bahamas islands';
    tovar[1].innerHTML='Big canyon';
    tovar[2].innerHTML='Niagara falls';
    document.getElementById('catalog').innerHTML='"To travel is to take a journey into yourself."';
    document.getElementById('time').innerHTML='TIME TO TRAVEL';
}

function RU(){
    document.getElementById('glav1').innerHTML='Главная';
    document.getElementById('glav2').innerHTML='Туры';
    document.getElementById('glav3').innerHTML='Контакты';
    document.getElementById('glav4').innerHTML="О нас";
    document.getElementById('slogan').innerHTML='Путешествие только в «"Be Good" travel»';
    var tovar=document.getElementsByClassName('nametovar');
    tovar[0].innerHTML='BБогамские острова';
    tovar[1].innerHTML='Большой каньон';
    tovar[2].innerHTML='Водопад ниагара';
    document.getElementById('catalog').innerHTML='"Посмотри на мир. Он куда удивительнее, чем сны"';
    document.getElementById('time').innerHTML='ВРЕМЯ ПУТЕШЕСТВОВАТЬ';
}