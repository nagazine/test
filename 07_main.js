
// - global -------------------------------------------------------------------
var screenCanvas, info,ctx;
var num = 0;

var el_console = document.getElementById('console');
var el_x1 = document.getElementById('x1');
var el_y1 = document.getElementById('y1');
var el_x2 = document.getElementById('x2');
var el_y2 = document.getElementById('y2');

var updateConsole = function(console){
    el_console.innerHTML = console;
}
var updateXY1 = function(x,y){
    el_x1.innerHTML = x;
    el_y1.innerHTML = y; 
}
var updateXY2 = function(x,y){
    el_x2.innerHTML = x;
    el_y2.innerHTML = y; 
}

//ローカルストレージからの読み込み
if(window.localStorage){
    num = parseInt(window.localStorage.getItem('Num'));
    if(!num)num=0;    
}

// - main ---------------------------------------------------------------------
window.onload = function(){

    // スクリーンの初期化
    screenCanvas = document.getElementById('screen');
    screenCanvas.width = 500;
    screenCanvas.height = 500;

    // エレメント関連
    info = document.getElementById('info');

    ctx = screenCanvas.getContext('2d');
    button(400,400,50,50);
};

function button(x,y,width,height){
    //矩形を描画
    ctx.rect(x, y, width, height);
    ctx.stroke();
    //canvas内マウスオーバー時イベント
    screenCanvas.addEventListener('mousemove', function (e) {
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        mouseX = e.clientX - button.left;//canvasに対するクリック位置の相対値を取得
        mouseY = e.clientY - button.top;
        //マウス位置がボタン内部にいればボタン押下時処理を実施
        if (x < mouseX && mouseX < x + width) {
            if (y < mouseY && mouseY < y + height) {
                ctx.fillStyle = 'yellow';
            }
            else{
                ctx.fillStyle = 'white';
            }
        }
        else{
            ctx.fillStyle = 'white';
        }
        ctx.fill();
    }, false);
    //touch版
    screenCanvas.addEventListener('touchmove', function (e) {
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        mouseX = e.clientX - button.left;//canvasに対するクリック位置の相対値を取得
        mouseY = e.clientY - button.top;
        //マウス位置がボタン内部にいればボタン押下時処理を実施
        if (x < mouseX && mouseX < x + width) {
            if (y < mouseY && mouseY < y + height) {
                ctx.fillStyle = 'yellow';
            }
            else{
                ctx.fillStyle = 'white';
            }
        }
        else{
            ctx.fillStyle = 'white';
        }
        ctx.fill();
    }, false);
    //canvas内クリック時イベント
    screenCanvas.addEventListener('click', function(e){
        //updateConsole('clickevent');
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        mouseX = e.clientX - button.left;//canvasに対するクリック位置の相対値を取得
        mouseY = e.clientY - button.top;
        //updateXY1(mouseX,mouseY);

        //マウス位置がボタン内部にいればボタン押下時処理を実施
        if(x < mouseX && mouseX < x + width){
            if(y < mouseY && mouseY < y + height){
                // alert("mouseX:"+mouseX+" mouseY:"+mouseY+"\n"
                // +"e.clientX:"+e.clientX+" e.clientY:"+e.clientY);
                ctx.fillStyle = 'black';//文字色　黒
                ctx.fill();
                ctx.clearRect(90,90,110,110);//指定範囲のcanvas表示クリア
                num++;
                ctx.fillText(num,100,100)//カウンタ数値を表示
                //ローカルストレージへの書き込み
                if(window.localStorage){
                    window.localStorage.setItem('Num',num);
                }

                ctx.fillStyle = 'yellow';//ボタン色　黄色
                ctx.fill();
            }
        }
    }, false);
    //canvas内mousedown時イベント
    screenCanvas.addEventListener('mousedown',function(e){
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        mouseX = e.clientX - button.left;//canvasに対するクリック位置の相対値を取得
        mouseY = e.clientY - button.top;
        //マウス位置がボタン内部にいればボタン押下時処理を実施
        if(x < mouseX && mouseX < x + width){
            if(y < mouseY && mouseY < y + height){
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        }
    },false);
    //touch版
    screenCanvas.addEventListener('touchstart',function(e){
        updateConsole('touchdownevent');
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        updateConsole('touchdownevent2');

        // var original = e.originalEvent;

        e.preventDefault();
        updateConsole('touchdownevent3');
        
        var touches = e.changedTouches;

        var touchX,touchY;

        touchX = touches[0].pageX;
        touchY = touches[0].pageY;
        updateConsole('touchdownevent4');

        // if(original.changedTouches){
        //     updateConsole('touchdownevent41');
        //     touchX = original.changedTouches[0].pageX;
        //     touchY = original.changedTouches[0].pageY;    
        // }
        // else{
        //     updateConsole('touchdownevent42');
        //     touchX = e.pageX;
        //     touchY = e.pageY;
        // }
        updateXY2(touchX,touchY);
        var touchXR = touchX - button.left;//canvasに対するクリック位置の相対値を取得
        var touchYR = touchY - button.top;
        updateConsole('touchdownevent5');
        updateXY2(touchXR,touchYR);
        //マウス位置がボタン内部にいればボタン押下時処理を実施
        if(x < touchXR && touchXR < x + width){
            if(y < touchYR && touchYR < y + height){
                updateConsole('touchdownevent inrect');
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        }
    },false);
}

document.addEventListener("DOMContentLoaded",window.onload);