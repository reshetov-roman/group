<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true));
$mail->SMTPAuth = true;
$mail->Username = "myyyrobot@gmail.com";
$mail->Password = "abzalken1993";
$mail->setFrom('abzal1818@gmail.com', 'SSGroup'); // название
$mail->addAddress('abzal1818@gmail.com', 'SSGroup');     // Add a recipient
$mail->isHTML(true);
$mail->Subject = 'Заказ звонка на сайте SS Group';
$mail->Body = "<html>
            <head>
                <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
            </head>
            <body>
                <b>Имя:</b> " . $_POST['name'] . "<br/>     
                <b>Телефон:</b> " . $_POST['phone'] . "             
            </body>
            </html>";
$mail->AltBody = 'This is a plain-text message body';
echo "Спасибо. Ожидайте звонка.";
if (!$mail->send()) {
    exit("Mailer Error: " . $mail->ErrorInfo);
}

?>



