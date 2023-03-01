
document.addEventListener('scroll', function() {
    var image = document.getElementById("fotito");
  
    image.style.width = '50px';
    image.style.height = 'auto';
  });

  
  document.getElementById("fotito").onclick= function() {

    var image = document.getElementById("fotito");
  
    image.style.width = '155px';
    image.style.height = 'auto';
  };
//BOTONES CAMBIO BACK
  document.getElementById("B_Color1").onclick= function() {

    var r = document.querySelector(':root');
    r.style.setProperty('--Uno', '#e3f2fd');
    r.style.setProperty('--Dos', 'rgb(179, 210, 255)');
  }

  document.getElementById("B_Color2").onclick= function() {

    var r = document.querySelector(':root');
    r.style.setProperty('--Uno', '#fde3f9');
    r.style.setProperty('--Dos', 'rgb(250, 183, 240)');
  }

 //BOTONES ACORDEON 
  document.getElementById("boton1").onclick= function() {

    var image = document.getElementById("fotito");
  
    image.style.width = '155px';
    image.style.height = 'auto';
  };
  document.getElementById("boton2").onclick= function() {

    var image = document.getElementById("fotito");
  
    image.style.width = '155px';
    image.style.height = 'auto';
  };
  document.getElementById("boton3").onclick= function() {

    var image = document.getElementById("fotito");
  
    image.style.width = '155px';
    image.style.height = 'auto';
  };
  document.getElementById("boton4").onclick= function() {

    var image = document.getElementById("fotito");
  
    image.style.width = '155px';
    image.style.height = 'auto';
  };

