<?php
session_start();

// Verificar se os campos foram preenchidos
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telefone']) && isset($_POST['cidade']) && isset($_POST['estado']) && isset($_POST['trecho'])) 
    
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['telefone']);
    $city = trim($_POST['cidade']);
    $state = trim($_POST['estado']);
    $excerpt = trim($_POST['trecho']);

    // Verificar se os campos não estão vazios
    if (!empty($name) && !empty($email) && !empty($phone) && !empty($city) && !empty($state) && !empty($excerpt)) {
        
        // Verificar se o e-mail é válido
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            
            // Armazenar os dados na sessão usando um array associativo
            $_SESSION['form_data'] = [
                'name' => $name,
                'email' => $email,
                'telefone' => $phone,
                'cidade' => $city,
                'estado' => $state,
                'trecho' => $excerpt
            ];

            // Redirecionar para a página de confirmação
            header("Location: confirmation.php");
            exit();

        } else {
            $_SESSION['error'] = "Por favor, insira um e-mail válido.";
            header("Location: form.php");
            exit();
        }

    } else {
        $_SESSION['error'] = "Todos os campos devem ser preenchidos.";
        header("Location: form.php");
        exit();

    }
    // Se não houver dados no POST, redirecionar para o formulário
        {
        $_SESSION['error'] = "Erro no envio dos dados.";
        header("Location: form.php");
        exit();
}
?>
