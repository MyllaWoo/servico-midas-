<?php
session_start();

// Verificar se os dados do formulário estão na sessão
if (isset($_SESSION['form_data'])) {
    $formData = $_SESSION['form_data'];
    unset($_SESSION['form_data']); // Limpar os dados após exibição
} else {
    header("Location: form.php"); // Se não houver dados, redirecionar para o formulário
    exit();
}
?>

