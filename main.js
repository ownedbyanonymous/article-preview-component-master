const shareButton = document.querySelector('.share-button');
const shareOptions = document.querySelector('.share-options');
const authorDetails = document.querySelector('.author-details');
const authorImage = document.querySelector('.author-image');
const shareButtonIcon =  shareButton.querySelector('svg')
const footer= document.querySelector('footer');

shareButton.addEventListener('click', ()=>{
    const isOpen=shareOptions.classList.toggle('show-share-options');
    if (window.innerWidth >= 730 && isOpen){ 
        shareButton.style.backgroundColor = '#6E8098';
        shareButtonIcon.style.fill = 'white';
    } else if (window.innerWidth < 730){
        authorDetails.classList.toggle('hide-author');
        authorImage.classList.toggle('hide-author');
        footer.classList.toggle('footer-active');
    }
    else{
        shareButton.style.backgroundColor=''; // Reset background color
        shareButtonIcon.style.fill = ''; // Reset fill color
    }
})