$(document).ready(function() {
    
    const canvas = $('#pieChart')[0];
    const ctx = canvas.getContext('2d');

    //設定圓餅圖的比例及顯示文字
    const data = [35.2, 27.5, 37.3];
    const labels = ['HTML', 'CSS', 'JAVASCRIPT'];

    // 圓餅圖的顏色
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

    // 計算比例總和
    const total = data.reduce((sum, value) => sum + value, 0);

    // 起始角度
    let startAngle = 0;

    // 遍歷數據，為每個扇形執行動畫函數
    data.forEach((value, index) => {
        const sliceAngle = 2 * Math.PI * (value / total);
        const percentage = (value / total * 100).toFixed(2) + '%';
        animateSlice(startAngle, sliceAngle, colors[index], labels[index], percentage);
        startAngle += sliceAngle;
    });

    // 定義動畫函數
    function animateSlice(startAngle, sliceAngle, color, label, percentage) {
        // 動畫步長
        let animationStep = 0.01;

        // 當前角度
        let currentAngle = startAngle;

        // 繪製函數
        function draw() {
            // 如果當前角度小於終止角度，則繼續繪製
            if (currentAngle < startAngle + sliceAngle) {
                requestAnimationFrame(draw);
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(canvas.width / 2, canvas.height / 2);
                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, startAngle, currentAngle);
                ctx.closePath();
                ctx.fill();
                currentAngle += animationStep;
            } else if (currentAngle >= startAngle + sliceAngle) {
                // 當扇形繪製完成後，添加文字和百分比
                ctx.fillStyle = 'black';
                ctx.font = 'bold 16px Arial';
                const middleAngle = startAngle + sliceAngle / 2;
                const textX = canvas.width / 2 + Math.cos(middleAngle) * (canvas.height / 2.8);
                const textY = canvas.height / 2 + Math.sin(middleAngle) * (canvas.height / 2.8);
                ctx.fillText(label, textX - ctx.measureText(label).width / 2, textY - 6);
                ctx.font = '14px Arial';
                ctx.fillText(percentage, textX - ctx.measureText(percentage).width / 2, textY + 14);
            }
        }
        draw(); // 開始繪製動畫
    }
});
