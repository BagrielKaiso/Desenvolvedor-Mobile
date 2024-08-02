document.getElementById('openPopup1Btn').addEventListener('click', function() {
    document.getElementById('popup1').style.display = 'flex';
});

document.getElementById('openPopup2Btn').addEventListener('click', function() {
    document.getElementById('popup2').style.display = 'flex';
});

document.getElementById('openPopup3Btn').addEventListener('click', function() {
    document.getElementById('popup3').style.display = 'flex';
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById(button.getAttribute('data-popup')).style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
});