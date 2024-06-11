$(document).ready(function () {
    var cat;
    var po = true;
    $('.startAddingBtn').on('click', function () {
        if (po) {
            po = false;
            cat = setInterval(function () {
                
                var newBox = $('<div class="box"></div>');

                
                var containerWidth = $('.container').width();
                var containerHeight = $('.container').height();

                
                var randomX = Math.floor(Math.random() * (containerWidth - 100)); // 100 是方塊的寬度
                var randomY = Math.floor(Math.random() * (containerHeight - 100)); // 100 是方塊的高度

                
                newBox.css({
                    left: randomX + 'px',
                    top: randomY + 'px'
                });

                
                $('.container').append(newBox);
            }, (Math.random() * 300) + 30); 
        }

    });

    $('.stopAddingBtn').on('click', function () {
        
        clearInterval(cat);
        po = true;
    });

    $('.clearBoxesBtn').on('click', function () {
        
        $('.container').empty();
        
        clearInterval(cat);
        po = true;
    });
});