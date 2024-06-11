function updateColor() {
    const red = $('#redSlider').val();
    const green = $('#greenSlider').val();
    const blue = $('#blueSlider').val();

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    $('#colorDisplay').css('background-color', rgbColor);
    $('#colorCode').text(`RGB(${red}, ${green}, ${blue})`);



    const invertedRed = 255 - red;
    const invertedGreen = 255 - green;
    const invertedBlue = 255 - blue;
    const invertedColor = `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
    $('#modalTextDisplay').css('color', invertedColor);

}
$(document).ready(function () {
    $('.setBackgroundBtn').on('click', function () {
        const red = $('#redSlider').val();
        const green = $('#greenSlider').val();
        const blue = $('#blueSlider').val();

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        $('.back').css('background-color', rgbColor);



        const invertedRed = 255 - red;
        const invertedGreen = 255 - green;
        const invertedBlue = 255 - blue;
        const invertedColor = `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`;
        // $('.popup-content button').css('color', invertedColor);
        $('.popup-button').css('color', invertedColor);
        $('b').css('color', invertedColor);
        $('h3').css('color', invertedColor);
        $('h4').css('color', invertedColor);
        $('h1').css('color', invertedColor);
        $('.l').css('color', invertedColor);
        $('.ll').css('color', invertedColor);
        $('.marquee-character').css('color', invertedColor);
    });

    $('#redSlider, #greenSlider, #blueSlider').on('input', updateColor);
});
