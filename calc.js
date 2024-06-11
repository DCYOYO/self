$(document).ready(function () {
    const display = $("#display");
    const ans = $("#ans");
    const btns = $("button");
    const historyContent = $("#history-content");
    var fir = true;


    
    $('.sosad').on('click', function () {
        display.val("");
    });
    ans.val("ANS=");
    btns.on('click', function () {
        var dis = display.val().slice(-1);
        var va = $(this).attr("id");
        if (display.val() == "undefined") {
            display.val("");
        }
        else if ($(this).attr("id") === "=") {
            try {
                let result = eval(display.val());
                ans.val("ANS=" + result);
                addToHistory(display.val() + " = " + result, result);
                fir = true;
            } catch (e) {
                ans.val("Error");
            }
        } else if ($(this).attr("id") == "de") {
            display.val(display.val().slice(0, -1));
        } else if ($(this).attr("id") === "ac") {
            display.val("0");
            ans.val("ANS=");
            fir = true;
        } else {
            if (fir) {
                ans.val("ANS=");
                if ($(this).attr("id") == "00" || $(this).attr("id") == "0") {
                    display.val("0");
                } else if (va == "+" || va == "." || va == "/" || va == "*" || va == "-") {
                    ans.val("Error");
                    display.val("0");
                } else {
                    display.val($(this).attr("id"));
                    fir = false;
                }
            } else {
                if (dis != "+" && dis != "." && dis != "/" && dis != "*" && dis != "-") {
                    display.val(display.val() + $(this).attr("id"));
                } else if (va != "+" && va != "." && va != "/" && va != "*" && va != "-") {
                    display.val(display.val() + $(this).attr("id"));
                } else {
                    display.val(display.val().slice(0, -1) + va);
                }
            }
        }
        if (display.val() == "undefined") {
            display.val("");
        }
    });


    function addToHistory(expression, result) {
        let historyItem = $("<div></div>");
        historyItem.addClass("history-item");
        historyItem.text(expression);
        historyItem.attr("id", result);
        historyItem.on('click', function () {
            if (fir) {
                if (result != "undefined") {
                    display.val($(this).attr('id'));
                    fir = false;
                }
            } else {
                if (result != "undefined") {
                    display.val(display.val() + $(this).attr('id'));
                }
            }
        });
        historyContent.append(historyItem);
    }
});
