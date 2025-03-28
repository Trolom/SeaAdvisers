  $('document').ready(function(){
  
  /* menu - starts */
  
      $('.header-menu li a').each(function(){
          var $this = $(this);
          var t = $this.text();
          if (/  /i.test(t)){
              $this.parents('li').addClass('diff');
              $this.html(t.replace('  ','<br>'));
          }
      });
  
      mobileMenu();
  
  /* menu - ends */
  
  /* rotate - ends */
  
      var img = $('#arrow img');
  
      if(img.length > 0){
  
          var offset = img.offset();
  
          function mouse(evt){
  
              var center_x = (offset.left) + (img.width()/2);
  
              var center_y = (offset.top) + (img.height()/2);
  
              var mouse_x = evt.pageX; var mouse_y = evt.pageY;
  
              var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
  
              var degree = (radians * (180 / Math.PI) * -1) + 90;
  
              img.css('-moz-transform', 'rotate('+degree+'deg)');
  
              img.css('-webkit-transform', 'rotate('+degree+'deg)');
  
              img.css('-o-transform', 'rotate('+degree+'deg)');
  
              img.css('-ms-transform', 'rotate('+degree+'deg)');
  
          }
  
          $(document).mousemove(mouse);
  
      }
  
  /* rotate - ends */
  
  /* ol - starts */
  
      $('.ipPreviewWidget ol li').each(function() {
          $(this).wrapInner('<span>');
      });
  
  /* ol - ends */
  
  /* external link - starts */
  
      $('a[rel~="external"]').click(function(){$(this).attr({'target':'_blank'});});
  
  /* external link - ends */
  
  });
  
  //----------------------------------------------------------------------------------------------------------------------------------