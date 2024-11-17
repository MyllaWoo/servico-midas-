<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $to = "ecamila771@gmail.com"; // Altere para o seu e-mail
    $subject = "Nova inscrição na Newsletter";
    $body = "Email: $email";
    $headers = "From: noreply@seusite.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "Inscrição realizada com sucesso!";
    } else {
        echo "Erro ao realizar inscrição.";
    }
}
?>
