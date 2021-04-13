$('textarea[name="text"]').on('input', function() {
    text = $('textarea').val();
    $('div').html(text);
    if(text.length>250){
        $('textarea[name="text"]').attr('disabled', 'true');
    }
  });