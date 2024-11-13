
function ativar() {
         document.getElementById('Book-A-Class').classList.add('mostrar');
}

window.addEventListener('scroll', function() {
    
    let elementoRect = (document.getElementById('Book-A-Class').getBoundingClientRect());
    let posicaoMetadeDoElemento = ((elementoRect.bottom)-window.innerHeight)-((elementoRect.height)/2);
    if(0 > posicaoMetadeDoElemento){
        ativar();
    } 
});