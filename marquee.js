$(document).ready(function() {
    const container = $('#marquee-container');
    const containerWidth = container.width();
    const containerHeight = container.height();
    const text = "Xian's Website";
    const amplitude = containerHeight / 2 - 20; // 正弦波幅度
    const frequency = 0.005; // 正弦波频率
    const duration = 10000; // 动画持续时间
    const characterSpacing = 100; // 字符间距

    // 将文本拆分成单个字符并添加到容器中
    for (let i = 0; i < text.length; i++) {
        container.append(`<span class="marquee-character" id="char-${i}">${text[i]}</span>`);
    }

    function startMarquee() {
        $('.marquee-character').each(function(index) {
            const $char = $(this);
            const initialLeft = containerWidth + (index * characterSpacing); // 初始位置分散开来

            function animateCharacter() {
                $char.css({ left: initialLeft });
                $char.animate({ left: -characterSpacing * text.length }, {
                    duration: duration,
                    easing: 'linear',
                    step: function(now) {
                        const x = now + index * characterSpacing; // 当前水平位置，保持等间距
                        const y = amplitude * Math.sin(frequency * x) + (containerHeight / 2) - ($char.height() / 2); // 计算垂直位置
                        $char.css('top', y);
                    },
                    complete: animateCharacter
                });
            }

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