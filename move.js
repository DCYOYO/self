let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let isDown = false;
let yes = true;

function move(e) {
    if (isDown) {
        const dx = e.pageX - mouseX;
        const dy = e.pageY - mouseY;
        let newX = offsetX + dx;
        let newY = offsetY + dy;
        yes = false;
        const button = $('.popup-button');
        const maxX = $(window).width() - button.outerWidth();
        const maxY = $(window).height() - button.outerHeight();
        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));

        button.css({ left: newX + 'px', top: newY + 'px' });
        updatePopupPosition(newX, newY);
    }
}

function updatePopupPosition(buttonOffsetX, buttonOffsetY) {
    const button = $('.popup-button');
    const popup = $('#popup-content');
    let popupX = buttonOffsetX;
    let popupY = buttonOffsetY - popup.outerHeight();

    // Check for overlap with button
    if (popupY < 0 || (popupY + popup.outerHeight() > $(window).height())) {
        popupY = buttonOffsetY + button.outerHeight(); // Place below the button
    }

    popupX = Math.min(popupX, $(window).width() - popup.outerWidth());
    popupY = Math.max(0, popupY);

    popup.css({
        left: popupX + 'px',
        top: popupY + 'px'
    });
}
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
    const button = $('.popup-button');
    offsetX = button.offset().left;
    offsetY = button.offset().top;
    updatePopupPosition(offsetX, offsetY);

    button.mousedown(function (e) {
        isDown = true;

        mouseX = e.pageX;
        mouseY = e.pageY;
        offsetX = button.offset().left;
        offsetY = button.offset().top;
        $(document).mousemove(move);

    });

    $(document).mouseup(function () {
        isDown = false;


    });

    button.on('click', function () {

        if (yes == false) {
            yes = true;
        }
        else if (yes == 1) {
            $('#popup-content').toggle();
            if ($('#popup-content').is(':visible')) {
                updatePopupPosition(button.offset().left, button.offset().top);
            }
        }
    });

    $('#close-button').on('click', function () {
        $('#popup-content').toggle();
    });
});