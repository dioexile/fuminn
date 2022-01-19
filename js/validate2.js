$(document).ready(function(){

    var modal = $('#about-form');

    var modalThank = $('#modal-thank');

    var closeThank = $('#modal-dialog__close');

    var text = $('#text2');

    

    $('#about-form').validate({

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

        	url: 'about-form.php',

        	type: 'POST',

        	data: $("#about-form").serialize(),

        	success: function(data) {

        	$('input').val('');

          text.val('');

        	alert('Ваша заявка отпралена!')

            $('#about-form').trigger("reset");

            }

    	});

   }

	});

});