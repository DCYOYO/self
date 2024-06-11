$(document).ready(function() {
    const container = $('#marquee-container');
    const containerWidth = container.width();
    const containerHeight = container.height();
    const text = "Xian's Website";
    const amplitude = containerHeight / 2 - 20; 
    const frequency = 0.005; 
    const duration = 10000; 
    const characterSpacing = 100; 

    // 将文本拆分成单个字符并添加到容器中
    for (let i = 0; i < text.length; i++) {
        container.append(`<span class="marquee-character" id="char-${i}">${text[i]}</span>`);
    }

    function startMarquee() {
        // 遍歷每個字符，為每個字符啟動動畫
        $('.marquee-character').each(function(index) {
            const $char = $(this);
            
            // 計算字符的初始左側位置，將字符分散開來
            const initialLeft = containerWidth + (index * characterSpacing); // 初始位置分散開來
            
            // 定義字符的動畫函數
            function animateCharacter() {
                // 將字符位置設置為初始位置
                $char.css({ left: initialLeft });
    
                // 使用 jQuery 的 animate 方法來執行動畫
                $char.animate({ left: -characterSpacing * text.length }, {
                    duration: duration, // 動畫持續時間
                    easing: 'linear', // 線性動畫效果，速度均勻
                    step: function(now) {
                        // 現在的位置
                        const x = now + index * characterSpacing; // 當前水平位置，保持等間距
                        const y = amplitude * Math.sin(frequency * x) + (containerHeight / 2) - ($char.height() / 2); // 計算垂直位置
                        
                        // 更新字符的垂直位置
                        $char.css('top', y);
                    },
                    // 當動畫完成後，重新啟動動畫
                    complete: animateCharacter
                });
            }
    
            // 啟動動畫
            animateCharacter();
        });
    }
    

    // 确保窗口大小改变时重新计算宽度
    $(window).resize(function() {
        $('.marquee-character').stop();
        startMarquee();
    });

    startMarquee();
});