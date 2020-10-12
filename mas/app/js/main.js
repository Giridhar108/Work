function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('.video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/sddefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);
    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';
    console.log('https://www.youtube.com/embed/' + id + query)
    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

$('.views__slider').slick({
    prevArrow: '<svg class="slider-btn slider-btn__right" width="62" height="62" viewBox="-5 -5 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 27V25H30V23L33 26L30 29V27H19Z" fill="#292929"/><path d="M26 2C39.2548 2 50 12.7452 50 26H54C54 10.536 41.464 -2 26 -2V2ZM2 26C2 12.7452 12.7452 2 26 2V-2C10.536 -2 -2 10.536 -2 26H2ZM26 50C12.7452 50 2 39.2548 2 26H-2C-2 41.464 10.536 54 26 54V50ZM26 54C41.464 54 54 41.464 54 26H50C50 39.2548 39.2548 50 26 50V54Z" fill="#F1CDB3"/></svg></button > ',
    nextArrow: '<svg class="slider-btn slider-btn__left" width="62" height="62" viewBox="-5 -5 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 25V27H22V29L19 26L22 23V25H33Z" fill="#292929"/><path d="M26 50C12.7452 50 2 39.2548 2 26H-2C-2 41.464 10.536 54 26 54V50ZM50 26C50 39.2548 39.2548 50 26 50V54C41.464 54 54 41.464 54 26H50ZM26 2C39.2548 2 50 12.7452 50 26H54C54 10.536 41.464 -2 26 -2V2ZM26 -2C10.536 -2 -2 10.536 -2 26H2C2 12.7452 12.7452 2 26 2V-2Z" fill="#F1CDB3"/></svg>',
    // infinite: true,
    slidesToShow: 1,
    // infinite: false,

});


$(document).ready(function () {
    $('.kind__kinds .kind__front').on('click', f_question__item);
    $('.kind__kinds .kind__back').on('click', f_question__item);
});

function f_question__item() {

    $('.kind__kinds .kind__back').not($(this).next()).slideUp(300);
    

    
    $(this).next().slideToggle(500);

}