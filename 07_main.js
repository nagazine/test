
// - global -------------------------------------------------------------------
var screenCanvas, info,ctx;
var num = 0;

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
        var button = e.target.getBoundingClientRect();//canvasの矩形サイズ取得
        mouseX = e.clientX - button.left;//canvasに対するクリック位置の相対値を取得
        mouseY = e.clientY - button.top;
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
    screenCanvas.addEventListener('touchdown',function(e){
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
}