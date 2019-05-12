// SMOOTH SCROLL
$('nav a, .btn').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// STICKY MENU BACKGROUND
window.addEventListener('scroll', function(){
    if(window.scrollY > 150) document.querySelector('nav').style.background = 'rgba(51,51,51,.75)';
    else document.querySelector('nav').style.background = 'rgba(51,51,51,1)';
});