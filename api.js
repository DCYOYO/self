$(document).ready(function () {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

    // 當選擇「其他」時顯示輸入框
    $('#citySelect').on('change', function () {
        if ($(this).val() === 'other') {
            $('#otherCityInput').show();
        } else {
            $('#otherCityInput').hide();
        }
    });

    // 點擊按鈕時獲取天氣資訊
    $('.getWeatherBtn').on('click', function () {
        var selectedCity = $('#citySelect').val();
        if (selectedCity === 'other') {
            selectedCity = $('#otherCity').val();
            if (!selectedCity) {
                alert('請輸入城市名稱');
                return;
            }
        }

        var fullWeatherUrl = `${weatherUrl}${selectedCity}&appid=0a071e7171b934d4601528841e88d90f&units=metric&lang=zh_tw`;

        // 使用 $.ajax 獲取天氣資訊
        $.ajax({
            url: fullWeatherUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                var weatherInfo = `<div class="card">
                                       <div class="card-body">
                                           <h5 class="card-title">城市: ${data.name}</h5>
                                           <p class="card-text">溫度: ${data.main.temp}°C</p>
                                           <p class="card-text">天氣: ${data.weather[0].description}</p>
                                           <p class="card-text">濕度: ${data.main.humidity}%</p>
                                           <p class="card-text">風速: ${data.wind.speed} m/s</p>
                                       </div>
                                   </div>`;
                $('#weatherResultBody').html(weatherInfo); 
                $('#weatherModal').modal('hide');
                $('#weatherResultModal').modal('show');
            },
            error: function (error) {
                console.error('錯誤:', error);
                $('#weatherResultBody').html('錯誤: ' + error.responseText);
                $('#weatherResultModal').modal('show');
            }
        });
    });
});
