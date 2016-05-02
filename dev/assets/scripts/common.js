var ozluy='*** Yusuf Özlü | ozluy ***';
console.log(ozluy);

var hamburger=document.getElementById('hamburger_menu'),
leftMenu=document.getElementById('left_menu'),
header=document.getElementById('header'),
footer=document.getElementById('footer'),
main=document.getElementById('main');

var menuOpener = function(){
  if(leftMenu.className=='opened'){
    hamburger.className='hamburger';
    leftMenu.className='';
    main.className='';
    footer.className='';
    header.className='';
  }
  else{
    hamburger.className='hamburger clicked';
    leftMenu.className='opened';
    main.className='translated';
    footer.className='translated';
    header.className='translated';
  }
}
