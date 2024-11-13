window.addEventListener('scroll', function() {
 
    if((window.scrollY > (window.innerHeight-(window.innerHeight/2))) && ( 0 < (document.getElementById('footer').getBoundingClientRect().top)-window.innerHeight)){
        document.getElementById('popup').classList.add('mostrar');

    } else{
        document.getElementById('popup').classList.remove('mostrar');
    }
});
