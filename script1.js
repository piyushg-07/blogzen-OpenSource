// script.js
document.getElementById('search-bar').addEventListener('focus', function () {
    document.getElementById('trending-searches').style.display = 'block';
});

document.getElementById('search-bar').addEventListener('blur', function () {
    setTimeout(function () {
        document.getElementById('trending-searches').style.display = 'none';
    }, 200);
});

document.querySelectorAll('#trending-searches li').forEach(function (item) {
    item.addEventListener('click', function () {
        document.getElementById('search-bar').value = this.textContent;
        document.getElementById('trending-searches').style.display = 'none';
    });
});
