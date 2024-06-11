$(document).ready(function () {
    var images = [
        "https://i.pinimg.com/originals/75/c2/f8/75c2f842863ae2df6b3ac2d0a4d63026.gif",
        "https://s1.aigei.com/src/img/gif/03/03e6b5c2c2e54e688a8eafd135c2de5d.gif?imageView2/2/w/239&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:k-g4vYkoIDiQk2ZBSnmg7Ggh0fU=",
        "https://img95.699pic.com/photo/40176/0613.gif_wh300.gif",
        "https://memeprod.ap-south-1.linodeobjects.com/user-gif-post/1616753722358.gif",
        "https://imgs.qiubiaoqing.com/qiubiaoqing/imgs/605c51d8201ac7im.gif",
        "https://media.tenor.com/--h8XIKn2xsAAAAM/%E5%BB%A2%E7%89%A9%E5%85%94%E5%AD%90-%E5%BB%A2%E5%85%94.gif"
    ];
    var clicked = true;
    var randomImage;
    $('.button-group').click(function () {
        if (clicked) {
            randomImage = images[$(this).attr("id")];
            clicked = false;
        }
        else  {
            var set = $(this);
            var divContent = set.text();
            var color = $('b').css('color');
            
            set.text('');
            set.css('background-image', 'url(' + randomImage + ')');

            setTimeout(function () {
                set.append($('<b></b>').text(divContent));
                $('b').css('color', color);
                set.css('background-image', '');
                clicked = true;
            }, 3000);
        }
        

    });
    $('.self').click(function () {

        var enableAnimation = confirm("是否啟用動畫？");
        if (!enableAnimation) {
            $('.a, .b, .c, .d, .e, .f').css('animation', 'none');
        }
        else {
            $('.a').css('animation', 'move1 10s infinite ease');
            $('.b').css('animation', 'move2 10s infinite ease');
            $('.c').css('animation', 'move3 10s infinite ease');
            $('.d').css('animation', 'move2 10s infinite ease');
            $('.e').css('animation', 'move3 10s infinite ease');
            $('.f').css('animation', 'move1 10s infinite ease');
        }
    });
});
