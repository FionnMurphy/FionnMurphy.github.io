var menu = false;

function toggle_menu(){
    if(menu){
        document.getElementById('hamburger_menu').checked = false;
        document.body.style.overflow = 'auto';
    }else{
        document.body.style.overflow = 'hidden';
    }
};