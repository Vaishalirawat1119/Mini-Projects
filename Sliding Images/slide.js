function debounce(func, wait = 20, immediate = true){
    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };

        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
    sliderImages.forEach(sliderImage => {
        //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        //Bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShown = slideInAt > sliderImage.offsetTop;

        const isNotScrolledPast = window.scrollY < imageBottom;

        if(isHalfShown && isNotScrolledPast){
            sliderImage.classList.add('active');
        }
        else{
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));