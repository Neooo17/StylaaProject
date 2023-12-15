// window.addEventListener('scroll', function(){
//     var textElement = document.querySelector('.content .text');
//     textElement.classList.add('visible');
// });


// Behavior: This script waits to add the visible class until the .text element reaches a specific point in the viewport (determined by textPosition < screenPosition).

window.addEventListener('scroll', function() {
    var textElement = document.querySelector('.content .text');
    var textPosition = textElement.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(textPosition < screenPosition) {
        textElement.classList.add('visible');
    }
});





document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.clientHeight;

    var triggerPoint = documentHeight / 1; // Halfway through the page

    var leftText = document.querySelector('.left-text');
    var rightText = document.querySelector('.right-text');

    if (scrollPosition > triggerPoint - windowHeight) {
        leftText.style.visibility = 'visible';
        leftText.style.animation = 'slideInFromLeft 1s ease forwards';

        rightText.style.visibility = 'visible';
        rightText.style.animation = 'slideInFromRight 1s ease forwards';
    }
});





