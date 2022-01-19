$(document).ready(function(){

    var modal = $('#modal');

    var modalThank = $('#modal-thank');

    var closeThank = $('#modal-dialog__close');

    

    $('#modal-form').validate({

errorClass: "invalid",

  errorElement: "label",

  rules: {

   username: {

    required: true,

    minlength: 2,

    maxlength: 15

   },

   phone: {

    required: true

   },

   email: {

    required: false,

    email: true

   },

  },

  messages: {

   username: {

    required: "Заполните поле",

    maxlength: jQuery.validator.format("Не больше 15 символов"),

    minlength: jQuery.validator.format("Осталось символов: {0}")

   },

   phone: {

    required: "Заполните поле"

   },

   email: {

    required: "Заполните поле",

    email: "Неправильный формат email"

   },

  },

  submitHandler: function () {

 	event.preventDefault();

    	$.ajax({

        	url: 'mail.php',

        	type: 'POST',

        	data: $("#modal-form").serialize(),

        	success: function(data) {

        	$('input').val('');

          $('text').val('');

        	modal.removeClass('modal_active');

            modalThank.addClass('modal-thank_active');

            closeThank.on('click', function () {

                modalThank.removeClass('modal-thank_active');

            $('#modal-form').trigger("reset");

            });

        	}

    	});

   }

	});

});