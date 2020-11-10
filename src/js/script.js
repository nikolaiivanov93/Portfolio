const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});    

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.knowledge__percent'),
    lines = document.querySelectorAll('.knowledge__scale span');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

//scroll
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

/* $(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
}); */


//form


function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        /* phone: "required", */
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа")
        },
        /* phone: "Пожалуйста, введите свой номер телефона", */
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        },
      },
    });
  };

  /* validateForms('#feedback-form');
  validateForms('#feedback form'); */
  

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        /* $('#feedback').fadeOut();
        $('#thanks').fadeIn('slow'); */
        $('form').trigger('reset');
    });
    return false;
});
