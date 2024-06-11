$(document).ready(function() {
    const canvas = $('#pieChart')[0];
    const ctx = canvas.getContext('2d');
    const data = [33, 33, 34];
    const labels = ['HTML', 'CSS', 'JAVASCRIPT'];
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];
    const total = data.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;

    data.forEach((value, index) => {
        const sliceAngle = 2 * Math.PI * (value / total);
        const percentage = (value / total * 100).toFixed(2) + '%';
        animateSlice(startAngle, sliceAngle, colors[index], labels[index], percentage);
        startAngle += sliceAngle;
    });

    function animateSlice(startAngle, sliceAngle, color, label, percentage) {
        let animationStep = 0.01;
        let currentAngle = startAngle;

        function draw() {
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
        draw();
    }
});