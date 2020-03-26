function EN(){
    document.getElementById('glav1').innerHTML='Home';
    document.getElementById('glav2').innerHTML='Tours';
    document.getElementById('glav3').innerHTML='Contacts';
    document.getElementById('glav4').innerHTML="About us";
    document.getElementById('def').innerHTML="If you decide to go on a trip to this beautiful city, you will not be disappointed. It is always crowded with tourists, but you can always find a quiet and comfortable place. Just wake up early in the morning and take a walk around the city and see the real beauty.";
    document.getElementById('fel').innerHTML="Feel it!";
    document.getElementById('def2').innerHTML="City of art. Literally on every corner you will come across sculptures and masterpiece architecture. This is a city where you can walk slowly and enjoy every building you look at.";
    document.getElementById('rate').innerHTML="Rate (1 - 10)";
}

function RU(){
    document.getElementById('glav1').innerHTML='Главная';
    document.getElementById('glav2').innerHTML='Туры';
    document.getElementById('glav3').innerHTML='Контакты';
    document.getElementById('glav4').innerHTML="О нас";
    document.getElementById('def').innerHTML="Если вы решитесь отправиться в путешествие в этот красивый город, то не разочаруетесь. Он всегда переполнен туристами, но, если сойти с главных туристических троп, всегда можно найти тихое и уютное место. Просто проснитесь рано утром и прогуляйтесь по городу, и увидите настоящую красоту.";
    document.getElementById('fel').innerHTML="Почувствуй!";
    document.getElementById('def2').innerHTML="Город искусства. Буквально на каждом углу Вы столкнетесь со скульптурами и шедевральной архитектурой. Это город, где Вы можете медленно идти и наслаждаться каждым зданием, на которое только посмотрите.";
    document.getElementById('rate').innerHTML="Оцените (1 - 10)";
}

function black(){
    document.body.style.backgroundColor='black';
    var def=document.getElementsByClassName('definition');
    def[1].style.color="white";
    def[3].style.color="white";
    document.getElementById('info').style.borderTop="2px solid white";
    document.getElementById('info').style.borderBottom="2px solid white";
    document.getElementById('rate').style.color="white";
    document.getElementById('fel').style.color='white';
    document.getElementById('tenge').style.color='white';

    document.getElementById("heading").style.backgroundColor ="black";
    document.getElementById("header").style.backgroundColor ="black";
    document.getElementById("companyname").style.color="white";
    document.getElementById('moon').src="../img/moonwhite.png";
    document.getElementById('sun').src="..//img/sunwhite.png";
    document.getElementById("RUS").style.color="white";
    document.getElementById("ENG").style.color="white";
    document.getElementById("heding2").style.backgroundColor ="black";
    document.getElementById("heding2-1").style.backgroundColor ="black";
    document.getElementById("glav1").style.color="white";
    document.getElementById('glav2').style.color='white';
    document.getElementById('glav3').style.color='white';
    document.getElementById("glav4").style.color="white";
    document.getElementById('korzina').src="..//img/uuwak.png";
    document.getElementById('fotword').style.color='white';
    document.getElementById('minus').src="../img/minuswhite.png";
    document.getElementById('plus').src="../img/pluswhite.png";
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
}

function add(){
    var x=document.getElementById('inputc').value;
    x++;
    if(x<=10)
        document.getElementById('inputc').value= x;
}

function minus(){
    var x=document.getElementById('inputc').value;
    x--;
    if(x>=0){
        document.getElementById('inputc').value= x;
    }
}