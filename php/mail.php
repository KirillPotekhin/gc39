<?php
// один получатель
$to  = 'kirill.potekhin@gmail.com';

// тема письма
$subject = 'Заявка';

// текст письма меняется он!!
$message = $_POST['car-model'] . '<br />' . $_POST['date-renta-at'] . '<br />' . $_POST['date-renta-to'] . '<br />' . $_POST['client-surname'] . '<br />' .$_POST['client-number'] . '<br />' . $_POST['client-email'];

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Дополнительные заголовки
$headers .= 'To: Кирилл <shapkinsib@gmail.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '. $_POST['client-surname'] .  '<' . $_POST['client-email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
?>