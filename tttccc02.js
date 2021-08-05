const canvas2 = document.getElementById('canvas2')
canvas2.width = 580
canvas2.height = 1200

const ctx2 = canvas2.getContext('2d')


var index = true
let buffer = 0
var ballanimadmit = false


let menulg = ctx2.createLinearGradient(400, 30, 1075, 580);
menulg.addColorStop(0, 'white');
menulg.addColorStop(1, 'black');
let menucolor = menulg
let menulg2 = ctx2.createLinearGradient(200, 50, 400, 380);
menulg2.addColorStop(0, 'white');
menulg2.addColorStop(1, 'black');

function menu() {
    ctx2.fillStyle = menucolor                             //  menu
    ctx2.beginPath()
    ctx2.moveTo(535, 25)
    ctx2.lineTo(390, 25)
    ctx2.lineTo(535, 140)
    ctx2.fill()
}

function menu2(y) {
    ctx2.strokeStyle = 'rgb(255, 163, 102)'                             //  menu2
    ctx2.lineWidth = 8
    ctx2.beginPath()
    ctx2.moveTo(390, y)
    ctx2.lineTo(533, y - (-114))
    ctx2.closePath()
    ctx2.stroke()
}


function menu3(y1,y2,y3,y4,x) {
    ctx2.fillStyle = 'white'                             //  menu3
    ctx2.beginPath()
    ctx2.moveTo(530, y1)
    ctx2.lineTo(393, y2)
    ctx2.lineTo(393, y3)
    ctx2.lineTo(x, y4)
    ctx2.fill()
}

function menu3close(y1, y2, y3, y4, x) {
    ctx2.fillStyle = 'rgb(255, 163, 102)'                             //  menu3
    ctx2.beginPath()
    ctx2.moveTo(530, y1)
    ctx2.lineTo(393, y2)
    ctx2.lineTo(393, y3)
    ctx2.lineTo(x, y4)
    ctx2.fill()
}

menu()
let menudisplay = false
var menutime = 0
var menutime2 = 0

canvas2.addEventListener('click', function (e) {
    p = getEventPosition(e);
    menu()
    if (ctx2.isPointInPath(p.x, p.y)) {
        if (menucolor != menulg2) {
            //balllighttimerun()
            menudisplay = true
            var d = window.document.getElementById('registertag');
            d.innerHTML = menudisplay
            menutime = 0
            menustarttimerun()
            menucolor = menulg2;
        } else {
            buffer = 1
            menutime2 = 0
            menuclosetimerun()
            menucolor = menulg;
        }
    } else {
        if (menudisplay == true) {
            buffer = 1
            menutime2 = 0
            menuclosetimerun()
            menucolor = menulg;
        }
    }
    menu()
}, false);

//setInterval('menu()', 50)

function animstretstartprepare(y){
    ctx2.strokeStyle = 'rgb(0,0,0)'
    ctx2.lineWidth = 4
    ctx2.beginPath()
    ctx2.moveTo(390,y)
    ctx2.lineTo(390,y-(-50))
    ctx2.closePath()
    ctx2.stroke()
}
function animstretcloseprepare(y) {
    //ctx.strokeStyle = 'rgb(255, 250, 102)'
    ctx2.strokeStyle = 'rgb(255, 163, 102)'
    ctx2.lineWidth = 4
    ctx2.beginPath()
    ctx2.moveTo(390,329)
    ctx2.lineTo(390,y-50.5)
    ctx2.closePath()
    ctx2.stroke()
}

function menustarttimerun() {
    if(buffer == 1){
        clearInterval(menuclosetimerunfff)
    }
    menustarttimerunfff = window.setInterval(animstretstart,50);
}

function menuclosetimerun() {
    clearInterval(menustarttimerunfff)
    menuclosetimerunfff = window.setInterval(animstretclose, 50);
}

function animstretstart() {
    menudisplay = true
    if (menudisplay == true & menutime < 2.00) {
        /*if (menutime2 == 0) {
            menutime += 0.05
        }*/
        menutime += 0.05
        var timetime = menutime.toFixed(2)
        //var timetime = parseInt(menutime)
        alphastart1(-10, 'md01')
        alphastart(0, 'md02')
        if (timetime == 0.05) {
            animstretstartprepare(29)
            menu3(138, 27, 102, 211, 530)
            menu301text()
            menu2(104)
            menu2(179)
            menu2(254)
            //menu2(329)
        }
        if (timetime == 0.10) {
            animstretstartprepare(79)
            menu3(220, 109, 177, 285, 530)
        }
        if (timetime == 0.15) {
            animstretstartprepare(129)
            menu3(295, 185, 252, 361, 530)
        }
        if (timetime == 0.20) {
            animstretstartprepare(179)
            menu3(370, 259, 335, 370, 435)
            ctx2.fillStyle = 'white'
            ctx2.beginPath()
            ctx2.arc(427, 336, 34, 0, Math.PI * 2, false)
            ctx2.fill()
        }
        if (timetime == 0.25) {
            animstretstartprepare(229)
        }
        if (timetime == 0.30) {
            animstretstartprepare(279)
            //buffer = 1
        }
        if (timetime == 1.00) {
            //menu3(138,27, 102,211)
            //menu3(220,109, 177,285)
            //menu3(295, 185,252,361)
            //menu3(370,259, 326,437)
            //menu3(370, 259, 370, 370)
            //menu2(329)
            menutime = 0
            clearInterval(menustarttimerunfff)

        }
    } 
}

function animstretclose() {
    if (menudisplay == true & menutime2 < 1.00) {
        window.onload()
        menutime2 += 0.05
        /*if (menutime == 0) {
            menutime2 += 0.05
        }*/
        var timetime = menutime2.toFixed(2)
        if (timetime == 0.05) {
            animstretcloseprepare(329)
            ctx2.fillStyle = 'rgb(255, 163, 102)'
            ctx2.beginPath()
            ctx2.arc(427, 336, 35, 0, Math.PI * 2, false)
            ctx2.fill()
            menu3close(368, 257, 372, 372, 530)
        }
        if (timetime == 0.10) {
            animstretcloseprepare(279)
            menu3close(293, 183, 254, 363, 530)
        }
        if (timetime == 0.15) {
            animstretcloseprepare(229)
            menu3close(218, 107, 179, 287, 530)
        }
        if (timetime == 0.20) {
            animstretcloseprepare(179)
            menu3close(136, 25, 104, 215, 530)
        }
        if (timetime == 0.25) {
            animstretcloseprepare(129)
        }
        if (timetime == 0.30) {
            animstretcloseprepare(79)
            ctx2.clearRect(0, 0, innerWidth, innerHeight)
            if (index == false) {
                downplaceanim()
            }
            menu()
        }
        if (timetime == 0.35) {
            window.onload()
        }
        if (timetime == 0.40) {
            if (ballanimadmit == true) {
                balllighttimerun()
            }
        }
        if (timetime == 0.70) {

            menudisplay = false
            var d = window.document.getElementById('registertag');
            d.innerHTML = menudisplay
            menutime2 = 0
            clearInterval(menuclosetimerunfff)

        }
        
    } 
}




//            menu text               ------------------------------------


function menu301text() {

    ctx2.fillStyle = 'rgb(0,0,0)'
    ctx2.font = "30px DFKai-sb"
    ctx2.fillText("首", 420, 110)
    ctx2.fillText("頁", 470, 150)

}




































var md01alpha = 30;

window.onload = function () {
    (function () {

        alphastart1(100, 'md01')
        alphastart(100, 'md02')

    }())
}

var alphatimer1;
function alphastart1(tar, iidd) {
    var img = document.getElementById(iidd);
    clearInterval(alphatimer1);
    alphatimer1 = setInterval(function () {
        var ispeed = 0;
        ispeed = md01alpha < tar ? 5 : -5;
        if (md01alpha == tar) {
            clearInterval(alphatimer1)
        }
        else {
            md01alpha += ispeed;
            img.style.filter = "alpha(opacity:" + md01alpha + ")";
            img.style.opacity = md01alpha / 100;
        }
    }, 30)
}
var alphatimer;
function alphastart(tar, iidd) {
    var img = document.getElementById(iidd);
    clearInterval(alphatimer);
    alphatimer = setInterval(function () {
        var ispeed = 0;
        ispeed = md01alpha < tar ? 5 : -5;
        if (md01alpha == tar) {
            clearInterval(alphatimer)
        }
        else {
            md01alpha += ispeed;
            img.style.filter = "alpha(opacity:" + md01alpha + ")";
            img.style.opacity = md01alpha / 100;
        }
    }, 30)
}










let balllg = ctx.createLinearGradient(200, 0, 0, 200);
balllg.addColorStop(0, 'white');
balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
balllg.addColorStop(1, 'white');

let ballrg = ctx.createRadialGradient(250, 170, 111, 200, 200, 400);
ballrg.addColorStop(1, 'black');
ballrg.addColorStop(0, 'white');

function ball(lgorrg) {
    ctx.fillStyle = lgorrg                 // center ball
    ctx.beginPath()
    ctx.arc(200, 200, 100, 0, Math.PI * 2, false)
    ctx.fill()
}

ball(ballrg)
let ballcolortime = 0

function balllighttimerun() {
    balllighttimerunfff = window.setInterval(balllightchange, 50);
}

function balllightchange() {

    ballcolortime += 0.05
    var timetime = ballcolortime.toFixed(2)

    if (timetime == 0.05) {
        balllg = ctx.createLinearGradient(-100, 300, -300, 500);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.10) {
        balllg = ctx.createLinearGradient(50, 150, -150, 350);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.15) {
        balllg = ctx.createLinearGradient(125, 75, -75, 275);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.20) {
        balllg = ctx.createLinearGradient(200, 0, 0, 200);         //medium
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.25) {
        balllg = ctx.createLinearGradient(275, -75, 75, 125);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.30) {
        balllg = ctx.createLinearGradient(350, -150, 225, 50);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.35) {
        balllg = ctx.createLinearGradient(500,-300,375,-100);
        balllg.addColorStop(0, 'white');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(0.5, 'rgb(210, 121, 166)');
        balllg.addColorStop(0.15, 'rgb(204, 204, 179)');
        balllg.addColorStop(1, 'white');
        ball(balllg)
    }
    if (timetime == 0.40) {
        ballrg = ctx.createRadialGradient(250, 170, 111, 200, 200, 400);
        ballrg.addColorStop(1, 'black');
        ballrg.addColorStop(0, 'white');
        ball(ballrg)
    }
    if (timetime == 0.45) {
        ballcolortime = 0
        ballanimadmit = false
        clearInterval(balllighttimerunfff);
    }
    
}



















function downplaceanim() {
    /*ctx2.strokeStyle = 'rgb(209, 224, 224)'
    ctx2.lineWidth = 8
    ctx2.beginPath()
    ctx2.moveTo(80, 550)
    ctx2.lineTo(80, 800)
    ctx2.closePath()
    ctx2.stroke()*/

    ctx2.strokeStyle = 'rgb(209, 224, 224)'
    ctx2.lineWidth = 6
    ctx2.beginPath()
    ctx2.moveTo(86, 855)
    ctx2.lineTo(86, 645)
    ctx2.closePath()
    ctx2.stroke()

    /*ctx2.strokeStyle = 'rgb(209, 224, 224)'
    ctx2.lineWidth = 8
    ctx2.beginPath()
    ctx2.moveTo(120, 850)
    ctx2.lineTo(530, 810)
    ctx2.closePath()
    ctx2.stroke()*/

    ctx2.strokeStyle = 'rgb(209, 224, 224)'
    ctx2.lineWidth = 6
    ctx2.beginPath()
    ctx2.moveTo(295, 837)
    ctx2.lineTo(505, 817)
    ctx2.closePath()
    ctx2.stroke()

    /*ctx2.strokeStyle = 'rgb(209, 224, 224)'
    ctx2.lineWidth = 8
    ctx2.beginPath()
    ctx2.moveTo(90, 885)
    ctx2.lineTo(550, 840)
    ctx2.closePath()
    ctx2.stroke()*/

    /*ctx2.strokeStyle = 'rgb(209, 224, 224)'     // down right  slashl
    ctx2.lineWidth = 7
    ctx2.beginPath()
    ctx2.moveTo(490, 505)
    ctx2.lineTo(530, 540)
    ctx2.closePath()
    ctx2.stroke()*/

    ctx2.strokeStyle = 'rgb(209, 224, 224)'          //  m m slash  downdown
    ctx2.lineWidth = 6
    ctx2.beginPath()
    ctx2.moveTo(255, 530)
    ctx2.lineTo(360, 800)//105,270-----
    ctx2.closePath()
    ctx2.stroke()
}


















//var menu301display = false

canvas2.addEventListener('click', function (e) {         // index
    p = getEventPosition(e);
    if (menudisplay == true) {
        menu3(138, 27, 102, 211, 530)
    }
    if (ctx2.isPointInPath(p.x, p.y)) {
        //menu301display = true
        index = true
        ballanimadmit = true
    } else {
        //menu301display = false
    }
}, false);

//var menu301display = false

canvas2.addEventListener('click', function (e) {
    p = getEventPosition(e);
    if (menudisplay == true) {
        menu3(220, 109, 177, 285, 530)
    }
    if (ctx2.isPointInPath(p.x, p.y)) {
        //menu301display = true
        index = false
        ballanimadmit = true
        var ttt1 = document.getElementById('menu302content')
        ttt1.classList.remove("displayisnone")
        var ttt2 = document.getElementById('menu303content')
        ttt2.classList.add("displayisnone")
    } else {
        //menu301display = false
    }
}, false);

//var menu301display = false

canvas2.addEventListener('click', function (e) {
    p = getEventPosition(e);
    if (menudisplay == true) {
        menu3(295, 185, 252, 361, 530)
    }
    if (ctx2.isPointInPath(p.x, p.y)) {
        //menu301display = true
        index = false
        ballanimadmit = true
        var ttt1 = document.getElementById('menu302content')
        ttt1.classList.add("displayisnone")
        var ttt2 = document.getElementById('menu303content')
        ttt2.classList.remove("displayisnone")
    } else {
        //menu301display = false
    }
}, false);

//var menu301display = false

canvas2.addEventListener('click', function (e) {
    p = getEventPosition(e);
    if (menudisplay == true) {
        menu3(370, 259, 335, 370, 435)
    }
    if (ctx2.isPointInPath(p.x, p.y)) {
        //menu301display = true
        index = false
        ballanimadmit = true
    } else {
        //menu301display = false
    }
}, false);


















function getEventPosition(e) {
    var x, y;
    if (e.layerX || e.layerX == 0) {
        x = e.layerX;
        y = e.layerY;
    } else if (e.offsetX || e.offsetX == 0) {
        x = e.offsetX;
        y = e.offsetY;
    }
    return { x: x, y: y };
}


document.body.appendChild(canvas2)















