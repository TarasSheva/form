<?php

$name = $_POST['name'];
$tel = $_POST['tel'];
$city = $_POST['city'];
$inst = $_POST['inst'];
$age = $_POST['age'];
$ques = $_POST['ques'];

if (!empty($_FILES['image']['tpm_name'])){
    $filePath = __DIR__."/files/".$_FILES['image']['name'];
    if(copy($_FILES['image']['tpm_name'], $filePath)) {
        $fileAttach = $filePath;
        $message->addAttachment($fileAttach);
    }
}



$to = "tarasgsheva@gmail.com";
$subject = "Отправлена заявка с сайта STarG.shop";
$message = "Name: $name \nTel: $tel \nCity: $city \nInst: $inst \nAge: $age \nQues: $ques \nImage: $image";
$headers = "From STARG.shop";

mail($to, $subject, $message, $headers);

// $resepient = "tarasgsheva@gmail.com";
// $sitename = "Nazvanie";

// $name = trim($_POST["name"]);
// $phone = trim($_POST["phone"]);
// $email = trim($_POST["email"]);

// $message = "Name: $name \nTel: $phone \nE-mail: $email";

// $pagetitle = "Novaya zayavka s saita \"$sitename\"";
// mail($resepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n Form: $resepient");