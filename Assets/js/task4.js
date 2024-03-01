$(document).ready(function() {
        function fadeMonThu() {
          $('.kontaktMon-thur h3').fadeTo('slow', 0.5);
        }
    
        function fadeFriSun() {
          $('.kontaktFri-sun h3').fadeTo('slow', 0.3);
        }
    
        fadeMonThu();
        fadeFriSun();
      });       



      $(document).ready(function(){
        $('.adressKontakt h1').addClass('color-transition');
        
        $('.adressKontakt h1').css ({
          color: '#FFD500'
        }, 1000); 
    
        $('.adressKontakt h3').animate({
          fontSize: '24px' 
        }, 1000);
      });