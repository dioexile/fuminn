<?php

$data = $_POST;



$to = "egor55468@gmail.com";

$subject = "'fumigatornn.ru'";

$name = trim($_POST["username"]);

$phone= trim($_POST["phone"]);

$email= trim($_POST["email"]);

$mesage= trim($_POST["message"]);

$message = "Имя: $name\nТеелефон: $phone\nE-mail: $email\nОставленное сообщение: $mesage";



$pagetitle = "новый заказ с сайта $subject";

mail($to, $pagetitle, $message);