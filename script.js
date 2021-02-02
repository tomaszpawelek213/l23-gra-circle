$(function() { // oczekiwanie na wczytanie dokumentu
//utwórz czerwone koło o średnicy 100px które po kliknieciu znikni i pojawi sie w
//dodolnym miejscu ekranu oraz zmieni swój kolor na inny losowy, nasępnie napisz skrypt
//który bedzie zliczał klinięcia i umieszczał ta ilosc na stronie
// po 50 kliknięciach wyswietl gratulaje ora stwórz timer w którym będzie 30s po którego upłynięciu
// zatrzymasz grę i wyśwelicz stosowną informację. - !!
    function endGame() {
        if(clickCount == numberOfClicksToWin) {
            alert('Wygrałeś !!!');
        }else {
            alert('Niestety przegałeś :((');
        }
        clickCount=0;
    }
    var numberOfClicksToWin = 10;
    var timeGame = 10000;

    var inputText = $("<input type='text' id='textViev' placeholder='ilość kliknięć'>");
    $('body').append(inputText);

    var circle = $("<div id='circle'></div>");
    $('body').append(circle);

    var clickCount = 0;
    circle.on('click', function (){
        clickCount++;
        inputText.val(clickCount);
        if(clickCount == 1){
            setTimeout(endGame, timeGame)
        }else if (clickCount == numberOfClicksToWin){
            endGame();
        }
        var maxMXWindow = $(window).width();
        var maxMYWindow = $(window).height();
        circle.fadeOut(50);
        // funkcja do przetestowania
        var newXPosiotion = Math.floor(Math.random() * (maxMXWindow - 75)) + 75;
        var newYPosiotion = Math.floor(Math.random() * (maxMYWindow - 75)) + 75;
        circle.css('margin-left' , newXPosiotion+75);
        circle.css('margin-top' , newYPosiotion+75);
        circle.fadeIn(700);
        // zmiana koloru
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        circle.css('background-color', color);
    })
})
