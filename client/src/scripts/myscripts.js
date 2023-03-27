import $ from 'jquery';
import { useEffect } from 'react';


export const burgerClick = () =>{
  var phoneBarMenu = $('#phoneBarMenu')[0];
  $('#burger')[0].addEventListener('click', ()=>{
    if(phoneBarMenu.offsetHeight < 50){
      phoneBarMenu.style.height = `${phoneBarMenu.scrollHeight}px`;
    }else{
      phoneBarMenu.style.height = 0;
    } 
  })
};

export const windowListener = () => {
  layoutChange();
    window.addEventListener('resize', ()=>{
      layoutChange();
  })
};

export const isMobile = () => {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
   return true;
  } else {
   return false;
  }
};


function layoutChange(){
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    $('#compBar').css('display', 'none');
    $('#phoneBar').css('display', 'block');

  } else {
    $('#compBar').css('display', 'block');
    $('#phoneBar').css('display', 'none');

  }
}
