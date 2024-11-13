let status = false;
function menuToggle() {
    document.getElementById('menu').classList.toggle('mostrar');
    if(!status){
        menuImg = 'https://img.icons8.com/ios-filled/50/delete-sign--v1.png';
        status = true;
    } else{
        menuImg = 'https://img.icons8.com/ios-filled/50/menu--v1.png';
        status = false;
    }

    document.getElementById('botaoMenu').src = menuImg;
}