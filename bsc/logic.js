var menu = false;
  
function toggle_menu(){
    if(menu){
        menu = false;
        document.getElementById('hamburger_menu').checked = false;
        document.body.style.overflow = 'auto';
    }else{
        menu = true;
        document.body.style.overflow = 'hidden';
    };
};