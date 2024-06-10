$(document).ready(function () {
    var intervalId;
    var rotateInterval;
    var angle = 0;
    var po = true;
    $('#startAddingBtn').on('click', function () {
        // 設置一個定時器，每隔500毫秒添加一個新方塊
        if (po) {
            po = false;
            intervalId = setInterval(function () {
                // 創建新方塊
                var newBox = $('<div class="box"></div>');

                // 獲取容器的寬度和高度
                var containerWidth = $('#container').width();
                var containerHeight = $('#container').height();

                // 隨機生成 X 和 Y 座標
                var randomX = Math.floor(Math.random() * (containerWidth - 100)); // 100 是方塊的寬度
                var randomY = Math.floor(Math.random() * (containerHeight - 100)); // 100 是方塊的高度

                // 設置方塊的位置
                newBox.css({
                    left: randomX + 'px',
                    top: randomY + 'px'
                });

                // 將新方塊添加到容器中
                $('#container').append(newBox);
            }, (Math.random() * 300) + 30); // 每500毫秒添加一次
        }

    });

    $('#stopAddingBtn').on('click', function () {
        // 清除定時器
        clearInterval(intervalId);
        po = true;
    });

    $('#clearBoxesBtn').on('click', function () {
        // 移除所有方塊
        $('#container').empty();
        // 停止自動添加
        clearInterval(intervalId);
        po = true;
    });
});