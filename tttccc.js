const canvas = document.getElementById('canvas')
canvas.width = 580
canvas.height = 1200

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'rgb(255, 153, 51)'
ctx.fillRect(0, 0, 560, 1180)

ctx.fillStyle = 'rgb(255,255,255)'
ctx.fillRect(6, 6, 548, 1168)

ctx.fillStyle = 'rgb(255, 153, 51)'
ctx.fillRect(10, 10, 540, 1160)

ctx.fillStyle = 'rgb(0,0,0)'
ctx.fillRect(14, 14, 532, 1152)

ctx.fillStyle = 'rgb(255,255,255)'
ctx.fillRect(19, 19, 522, 1142)

ctx.fillStyle = 'rgb(255, 163, 102)'
ctx.fillRect(25, 25, 510, 1130)                    //main bkgd










let img1, img2;

/*window.onload = function () {
    (function () {

        img1 = new Image();
        img1.src = './fin02.png';
        img1.onload = function () {
            ctx.drawImage(img1, 400, 240, 150, 155);
        }
        img2 = new Image();
        img2.src = './fin01.png';
        img2.onload = function () {
            ctx.drawImage(img2, 350, 100, 150, 155);
        }

    }())
}*/



/*var md01alpha = 30;

window.onload = function () {
    (function () {

        alphastart1(100, 'md01')
        alphastart(100, 'md02')

    }())
}*/


/*canvas.addEventListener('click', function (e) {
    p = getEventPosition(e);
    ball()
    if (ctx.isPointInPath(p.x, p.y)) {
        startMove(100)
    } else {
        startMove(30)
    }
    ball()
}, false);*/

/*img.onmouseover = function () {
    startMove(100)
};
img.onmouseout = function () {
    startMove(30)
}*/
/*var alphatimer1;
function alphastart1(tar,iidd) {
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
}*/




















/*let menulg = ctx.createLinearGradient(400, 30, 1075, 580);
menulg.addColorStop(0, 'white');
menulg.addColorStop(1, 'black');
let menucolor = menulg
let menulg2 = ctx.createLinearGradient(200, 50, 400, 380);
menulg2.addColorStop(0, 'white');
menulg2.addColorStop(1, 'black');

function menu() {
    ctx.fillStyle = menucolor                             //  menu
    ctx.beginPath()
    ctx.moveTo(535, 25)
    ctx.lineTo(390, 25)
    ctx.lineTo(535, 140)
    ctx.fill()
}

function menu2(y) {
    ctx.strokeStyle = 'rgb(255, 163, 102)'                             //  menu2
    ctx.lineWidth = 8
    ctx.beginPath()
    ctx.moveTo(390, y)
    ctx.lineTo(533, y - (-114))
    ctx.closePath()
    ctx.stroke()
}


function menu3(y1,y2,y3,y4,x) {
    ctx.fillStyle = 'white'                             //  menu3
    ctx.beginPath()
    ctx.moveTo(530, y1)
    ctx.lineTo(393, y2)
    ctx.lineTo(393, y3)
    ctx.lineTo(x, y4)
    ctx.fill()
}

function menu3close(y1, y2, y3, y4, x) {
    ctx.fillStyle = 'rgb(255, 163, 102)'                             //  menu3
    ctx.beginPath()
    ctx.moveTo(530, y1)
    ctx.lineTo(393, y2)
    ctx.lineTo(393, y3)
    ctx.lineTo(x, y4)
    ctx.fill()
}

menu()
let menudisplay = false
var menutime = 0
var menutime2 = 0

canvas.addEventListener('click', function (e) {
    p = getEventPosition(e);
    menu()
    if (ctx.isPointInPath(p.x, p.y)) {
        if (menucolor != menulg2) {
            menudisplay = true
            menutime = 0
            menustarttimerun()
            menucolor  = menulg2;
        } else {
            menudisplay = false
            menutime2 = 0
            menuclosetimerun()
            menucolor = menulg;
        }
    } else {
        menudisplay = false
        menutime2 = 0
        menuclosetimerun()
        menucolor = menulg;
    }
    menu()
}, false);

//setInterval('menu()', 50)

function animstretstartprepare(y){
    ctx.strokeStyle = 'rgb(0,0,0)'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(390,y)
    ctx.lineTo(390,y-(-50))
    ctx.closePath()
    ctx.stroke()
}
function animstretcloseprepare(y) {
    //ctx.strokeStyle = 'rgb(255, 250, 102)'
    ctx.strokeStyle = 'rgb(255, 163, 102)'
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(390,329)
    ctx.lineTo(390,y-50.5)
    ctx.closePath()
    ctx.stroke()
}

function menustarttimerun() {
    menustarttimerunfff = window.setInterval(animstretstart,50);
}

function menuclosetimerun() {
    menuclosetimerunfff = window.setInterval(animstretclose, 50);
}

function animstretstart(){
    if (menudisplay == true & menutime < 1.00) {
        menutime += 0.05
        var timetime = menutime.toFixed(2)
        if (timetime == 0.05) {
            animstretstartprepare(29)
            menu3(138, 27, 102, 211, 530)
            menu2(104)
            menu2(179)
            menu2(254)
            menu2(329)
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
            ctx.fillStyle = 'white'
            ctx.beginPath()
            ctx.arc(427, 336, 34, 0, Math.PI * 2, false)
            ctx.fill()
        }
        if (timetime == 0.25) {
            animstretstartprepare(229)
        }
        if (timetime == 0.30) {
            animstretstartprepare(279)
        }
        if (timetime == 0.60) {
            //menu3(138,27, 102,211)
            //menu3(220,109, 177,285)
            //menu3(295, 185,252,361)
            //menu3(370,259, 326,437)
            //menu3(370, 259, 370, 370)
            //menu2(329)
        }
        if (menutime == 1.00) {
            clearInterval(menustarttimerun);
        }
    } 
}

function animstretclose(){
    if (menudisplay == false & menutime2 < 1.00) {
        menutime2 += 0.05
        var timetime = menutime2.toFixed(2)
        if (timetime == 0.05) {
            animstretcloseprepare(329)
            ctx.fillStyle = 'rgb(255, 163, 102)'
            ctx.beginPath()
            ctx.arc(427, 336, 35, 0, Math.PI * 2, false)
            ctx.fill()
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
            //window.onload()
        }
        if (menutime2 == 1.00) {
            menudisplay = true;
            clearInterval(menuclosetimerun);
        }
    } 
}*/


















ctx.fillStyle = 'rgb(255,255,255)'                //up right
ctx.beginPath()
ctx.arc(268, 142, 75, 0, Math.PI * 2, true)
ctx.fill()

ctx.fillStyle = 'rgb(255, 163, 102)'           //up right
//ctx.fillStyle = 'rgb(255,255,255)'
ctx.beginPath()
ctx.arc(227, 179, 95, 0, Math.PI * 2, false)
ctx.fill()

ctx.fillStyle = 'rgb(255,255,255)'
ctx.beginPath()
ctx.arc(284, 264, 50, 0, Math.PI * 2, true)       //down right
ctx.fill()

ctx.fillStyle = 'rgb(255, 163, 102)'           //down right
//ctx.fillStyle = 'rgb(255,255,255)'
ctx.beginPath()
ctx.arc(257, 240, 65, 0, Math.PI * 2, false)
ctx.fill()

ctx.fillStyle = 'rgb(255,255,255)'               //down left
ctx.beginPath()
ctx.arc(150, 275, 90, 0, Math.PI * 2, true)
ctx.fill()

ctx.fillStyle = 'rgb(255, 163, 102)'           //down left
//ctx.fillStyle = 'rgb(255,255,255)'
ctx.beginPath()
ctx.arc(180, 225, 100, 0, Math.PI * 2, false)
ctx.fill()

ctx.fillStyle = 'rgb(255,255,255)'               //up left
ctx.beginPath()
ctx.arc(132, 132, 80, 0, Math.PI * 2.0, false)
ctx.fill()

ctx.fillStyle = 'rgb(255, 163, 102)'           //up left
//ctx.fillStyle = 'rgb(255,255,255)'
ctx.beginPath()
ctx.arc(174, 174, 95, 0, Math.PI * 2, false)
ctx.fill()


/*let ballrg = ctx.createRadialGradient(250, 170, 111, 200, 200, 400);
ballrg.addColorStop(1, 'black');
ballrg.addColorStop(0, 'white');
function ball() {
    ctx.fillStyle = ballrg                 // center ball
    ctx.beginPath()
    ctx.arc(200, 200, 100, 0, Math.PI * 2, false)
    ctx.fill()
}

ball()*/

/*canvas.addEventListener('click', function (e) {
    p = getEventPosition(e);
    ball()
    if (ctx.isPointInPath(p.x, p.y)) {
        menu3time = 0
        menu3starttimerun()
    } else {

    }
    ball()
}, false);*/


/*function uprightpetal(x, y, x2, y2) {
    let rotatinglg = ctx.createLinearGradient(x, y, x2, y2);
    rotatinglg.addColorStop(1, 'white');
    rotatinglg.addColorStop(0, 'black');
    ctx.fillStyle = rotatinglg
    ctx.beginPath()
    ctx.arc(268, 142, 75, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.fillStyle = 'rgb(255, 163, 102)'
    //ctx.fillStyle = 'rgb(255,255,255)'
    ctx.beginPath()
    ctx.arc(227, 179, 95, 0, Math.PI * 2, false)
    ctx.fill()
    ball()
}

function menu3starttimerun() {
    menu3starttimerunfff = window.setInterval(animpetalstart, 50);
}

function animpetalstart() {
    menu3time += 0.05
    var timetime = menu3time.toFixed(2)
    if (timetime == 0.05) {
        uprightpetal(-1400, -1400, 400, 400)
    }
    if (timetime == 0.10) {
        uprightpetal(-1000, -1000, 400, 400)
    }
    if (timetime == 0.15) {
        uprightpetal(-600, -600, 400, 400)
    }
    if (timetime == 0.30) {
        uprightpetal(0, 0, 1, 1)
    }
    if (menutime == 1.00) {
        clearInterval(menu3starttimerun);
    }
}*/





















ctx.rotate(-Math.PI * 0.027);

function drawUsingArc(rect, r, ctx) {
    var path = new Path2D();

    path.moveTo(rect.x + r, rect.y);
    path.lineTo(rect.x + rect.width - r, rect.y);
    path.arc(rect.x + rect.width - r, rect.y + r, r, Math.PI / 180 * 270, 0, false);
    path.lineTo(rect.x + rect.width, rect.y + rect.height - r);
    path.arc(rect.x + rect.width - r, rect.y + rect.height - r, r, 0, Math.PI / 180 * 90, 0, false);
    path.lineTo(rect.x + r, rect.y + rect.height);
    path.arc(rect.x + r, rect.y + rect.height - r, r, Math.PI / 180 * 90, Math.PI / 180 * 180, false);
    path.lineTo(rect.x, rect.y + r);
    path.arc(rect.x + r, rect.y + r, r, Math.PI / 180 * 180, Math.PI / 180 * 270, false);

    ctx.fill(path);
}
function Rect(x, y, w, h) {
    return { x: x, y: y, width: w, height: h };
}

var rect = Rect(-8,464,455,465);
var r = 40;
ctx.fillStyle = 'rgb(82, 122, 122)';                       //  text  stroke
drawUsingArc(rect, r, ctx);


rect = Rect(-4, 468, 447, 600);
r = 40;
ctx.fillStyle = 'rgb(209, 224, 224)';                       //  text  stroke
drawUsingArc(rect, r, ctx);


ctx.rotate(Math.PI * 0.027);
ctx.fillStyle = 'rgb(255, 163, 102)'
ctx.fillRect(30, 520, 40, 610)
ctx.fillStyle = 'rgb(255, 163, 102)'
ctx.fillRect(290, 470, 240, 610)
rect = Rect(40,470,445,670);
r = 40;
ctx.fillStyle = 'rgb(209, 224, 224)';                    
drawUsingArc(rect, r, ctx);
rect = Rect(190, 460, 330, 680);
r = 40;
ctx.fillStyle = 'rgb(209, 224, 224)';
drawUsingArc(rect, r, ctx);

ctx.fillStyle = 'rgba(209, 224, 224,1)'
ctx.beginPath()
ctx.arc(480, 470, 40, 0, Math.PI * 2, true)       
ctx.fill()

ctx.strokeStyle = 'rgba(82, 122, 122,1)'
ctx.lineWidth = 4
ctx.beginPath()
ctx.arc(480, 467, 40, Math.PI * 1.5, Math.PI * 2, false)  
ctx.stroke()

ctx.strokeStyle = 'rgb(82, 122, 122)'        
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(450, 429.4)
ctx.lineTo(480, 427.4)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(209, 224, 224)'
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(450, 434)
ctx.lineTo(480, 432)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(82, 122, 122)'
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(520, 464)
ctx.lineTo(520, 500)
ctx.closePath()
ctx.stroke()

/*rect = Rect(190, 425, 330, 680);
r = 40;
ctx.fillStyle = 'rgba(209, 224, 0,0.4)';
drawUsingArc(rect, r, ctx);*/

/*ctx.fillStyle = 'rgb(255, 163, 102)'
ctx.beginPath()
ctx.moveTo(535,458)
ctx.lineTo(488, 460)
ctx.lineTo(535, 560)
ctx.fill()*/









ctx.strokeStyle = 'rgb(0,0,0)'      //left  m  strl
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(80,350)
ctx.lineTo(80, 500)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(0,0,0)'     //right  m  slashl
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(255, 320)
ctx.lineTo(460, 475)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'         //  m  m  slash  down
ctx.lineWidth = 3
ctx.beginPath()
ctx.moveTo(80, 520)
ctx.lineTo(466, 485)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'          //  m m slash  upupup
ctx.lineWidth = 3
ctx.beginPath()
ctx.moveTo(185, 370)
ctx.lineTo(240, 485)
ctx.closePath()
ctx.stroke()


//up table white line

ctx.strokeStyle = 'rgb(250,250,250)'      
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(101, 375)
ctx.lineTo(101, 485)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'         
ctx.beginPath()
ctx.moveTo(101, 485)
ctx.lineTo(200, 475)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'          
ctx.beginPath()
ctx.moveTo(200, 475)
ctx.lineTo(175, 420)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'
ctx.beginPath()
ctx.moveTo(280, 474)
ctx.lineTo(385, 464)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'
ctx.beginPath()
ctx.moveTo(388, 465)
ctx.lineTo(250, 355)
ctx.closePath()
ctx.stroke()


//down table line

ctx.strokeStyle = 'rgb(250,250,250)'
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(80, 550)
ctx.lineTo(80, 800)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(0,0,0)'
ctx.lineWidth = 3
ctx.beginPath()
ctx.moveTo(86, 650)
ctx.lineTo(86, 850)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(120, 850)
ctx.lineTo(530, 810)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(0,0,0)'
ctx.lineWidth = 3
ctx.beginPath()
ctx.moveTo(300, 837)
ctx.lineTo(500, 817)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'
ctx.lineWidth = 5
ctx.beginPath()
ctx.moveTo(90, 885)
ctx.lineTo(550, 840)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'     //down right slashl
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(490, 505)
ctx.lineTo(530, 540)
ctx.closePath()
ctx.stroke()

ctx.strokeStyle = 'rgb(250,250,250)'          //  m m slash  downdown
ctx.lineWidth = 3
ctx.beginPath()
ctx.moveTo(255, 530)
ctx.lineTo(360, 800)
ctx.closePath()
ctx.stroke()














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

/*ctx.fillStyle = 'blue'                            //  menu
ctx.beginPath()
ctx.moveTo(535, 25)
ctx.lineTo(410, 25)
ctx.lineTo(535, 150)
ctx.fill()
ctx.isPointInPath(50, 50);     //true
ctx.isPointInPath(5, 5);     //false


canvas.addEventListener('click', function (e) {
    p = getEventPosition(e);
    if (ctx.isPointInPath(p.x, p.y)) {
        ctx.fillStyle = 'lightgray';
        ctx.beginPath()
        ctx.moveTo(535, 25)
        ctx.lineTo(410, 25)
        ctx.lineTo(535, 150)
        ctx.fill()
        var d = window.document.getElementById('registertag');
        d.innerHTML = 'hello';
    }
}, false);

canvas.addEventListener('mouseup', function (e) {
    p = getEventPosition(e);
    if (ctx.isPointInPath(p.x, p.y)) {
        ctx.fillStyle = 'blue';
        ctx.beginPath()
        ctx.moveTo(535, 25)
        ctx.lineTo(410, 25)
        ctx.lineTo(535, 150)
        ctx.fill()
        var d = window.document.getElementById('registertag');
        d.innerHTML = 'register';
    }
}, false);*/



// 設定顏色
/*ctx.fillStyle = 'rgb(200, 200, 0)'
// 畫出矩形
ctx.fillRect(10, 10, 55, 50)

// 再次設定顏色
ctx.fillStyle = 'rgba(0, 0, 200, 0.75)'
// 畫出矩形
ctx.fillRect(30, 30, 55, 50)*/



// 設定顏色並劃出實心矩形
/*ctx.fillStyle = 'rgba(255, 0, 0, .7)'
ctx.fillRect(25, 25, 100, 100)

// 從座標(45, 45)向又向下清除60像素顏色
ctx.clearRect(45, 45, 60, 60)

// 從座標(50, 50)向右向下畫出一個寬高50的矩形，但只有外框
ctx.strokeRect(50, 50, 50, 50)*/



/*ctx.beginPath()
let x = 50
let y = 50
let radius = 15
let startAngle = 0
let endAngle = Math.PI * 1.5
let anticlockwise = false
ctx.fillStyle = 'blue'
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctx.fill()

ctx.beginPath()
x = 100
y = 50
endAngle = Math.PI * 1.5
anticlockwise = true
ctx.fillStyle = 'rgba( 255, 0, 0, 1)'
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
ctx.fill()*/

// 實心三角形
/*ctx.fillStyle = 'red'
ctx.beginPath()
ctx.moveTo(25, 25)
ctx.lineTo(105, 25)
ctx.lineTo(25, 105)
ctx.fill()*/

// 空心三角形
/*ctx.strokeStyle = 'blue'
ctx.beginPath()
ctx.moveTo(125, 125)
ctx.lineTo(125, 45)
ctx.lineTo(45, 125)
ctx.closePath()
ctx.stroke()*/

// 將canvas 加入body
document.body.appendChild(canvas)