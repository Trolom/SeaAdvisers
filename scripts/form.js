$('.contact-form').find('.input-text').each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).find('label').css({
      'top': '10px',
      'fontSize': '14px'
    });
  }
})
$('.contact-form').find('.input-text').focus(function() {
  $(this).parent('.form-field').addClass('focus');
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '14px'
  }, 300);
})
$('.contact-form').find('.input-text').blur(function() {
  if ($(this).val().length == 0) {
    $(this).parent('.form-field').removeClass('focus');
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '18px'
    }, 300);
  }
})