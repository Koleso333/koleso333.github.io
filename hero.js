(function () {
    // Держим закругление углов квадратиков строго пропорциональным
    // их реальному пиксельному размеру при любом масштабе/ресайзе.
    var RADIUS_RATIO = 0.11;

    function updateHeroRadius() {
        var squares = document.querySelectorAll('.hero-square');
        for (var i = 0; i < squares.length; i++) {
            // offsetWidth берёт размер без учёта transform (поворота).
            var size = squares[i].offsetWidth;
            squares[i].style.borderRadius = (size * RADIUS_RATIO) + 'px';
        }
    }

    window.addEventListener('resize', updateHeroRadius);
    window.addEventListener('orientationchange', updateHeroRadius);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateHeroRadius);
    } else {
        updateHeroRadius();
    }
})();
