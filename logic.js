window.addEventListener('resize', checksize);

function checksize(){
    var x = document.getElementById('nav_bar');
    if(window.innerWidth > 1000){  
      x.style.display = 'flex';
    }else if(x.style.display == 'block'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    };
};

function toggle_menu(){
  if(window.innerWidth <= 1000){
    var x = document.getElementById('nav_bar');
    if (x.style.display == 'none'){
      x.style.display = 'block';
    }else{
      x.style.display = 'none';
    };
  };
};