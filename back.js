function updateColor() {
    const red = $('#redSlider').val();
    const green = $('#greenSlider').val();
    const blue = $('#blueSlider').val();

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    $('#colorDisplay').css('background-color', rgbColor);
    $('#colorCode').text(`RGB(${red}, ${green}, ${blue})`);

    const chRed = 255 - red;
    const chGreen = 255 - green;
    const chBlue = 255 - blue;
    const chColor = `rgb(${chRed}, ${chGreen}, ${chBlue})`;
    $('#modalTextDisplay').css('color', chColor);

}
$(document).ready(function () {
    $('.setBackgroundBtn').on('click', function () {
        const red = $('#redSlider').val();
        const green = $('#greenSlider').val();
        const blue = $('#blueSlider').val();

        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        $('.back').css('background-color', rgbColor);

        const chRed = 255 - red;
        const chGreen = 255 - green;
        const chBlue = 255 - blue;
        const chColor = `rgb(${chRed}, ${chGreen}, ${chBlue})`;
        $('.popup-button').css('color', chColor);
        $('b').css('color', chColor);
        $('h3').css('color', chColor);
        $('h4').css('color', chColor);
        $('h1').css('color', chColor);
        $('.l').css('color', chColor);
        $('.ll').css('color', chColor);
        $('.marquee-character').css('color', chColor);
    });

    $('#redSlider, #greenSlider, #blueSlider').on('input', updateColor);
});
