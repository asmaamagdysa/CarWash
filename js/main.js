window.onload = function() {loadFunction()};
window.onscroll = function() {scrollFunction()};

function loadFunction(){
  
  document.getElementById("navbarId").style.padding = "23px 0px" ;
    
}

function scrollFunction() {
  
  if ( document.documentElement.scrollTop > 75) {
    document.getElementById("navbarId").style.padding = "8px 4px";
    
  } else {
    
    document.getElementById("navbarId").style.padding = "23px 0px" ;
    
  }
}