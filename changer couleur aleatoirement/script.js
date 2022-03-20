var ol = document.querySelector('ol');
ol.addEventListener('click', function(e) {
    e.target.style.color = '#' + (Math.random().toString(16)).slice(2, 8);
})