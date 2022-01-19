<?php

$data = $_POST;



$to = "fumigatornn@gmail.com";

$subject = "'fumigatornn.ru'";

$name = trim($_POST["username"]);

$phone= trim($_POST["phone"]);

$email= trim($_POST["email"]);

$mesage= trim($_POST["mesage"]);

$message = "Имя: $name\nТеелефон: $phone\nE-mail: $email\nОставленное сообщение: $mesage";



$pagetitle = "новый заказ с сайта $subject";

mail($to, $pagetitle, $message);