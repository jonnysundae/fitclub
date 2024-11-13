let status = false;

function ativar() {
    if(!status){
         document.getElementById('Book-A-Class').classList.toggle('mostrar');
         status = true;
    }
}

window.addEventListener('scroll', function() {
    
    let elementoRect = (document.getElementById('Book-A-Class').getBoundingClientRect());
    let posicaoMetadeDoElemento = ((elementoRect.bottom)-window.innerHeight)-((elementoRect.height)/2);
    if(0 > posicaoMetadeDoElemento){
        ativar();
    } 
});