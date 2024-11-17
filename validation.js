function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value.trim();
    let excerpt = document.getElementById("excerpt").value.trim();
    let errorMessages = document.getElementById("errorMessages");
  
    // Limpa mensagens de erro
    errorMessages.innerHTML = "";
  
    // Variável para verificar se há erros
    let isValid = true;
  
    // Validação do nome
    if (name.length < 10) {
      errorMessages.innerHTML += "<p>O nome completo deve ter pelo menos 10 caracteres.</p>";
      isValid = false;
    }
  
    // Validação do e-mail
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessages.innerHTML += "<p>Por favor, insira um e-mail válido.</p>";
      isValid = false;
    }
  
    // Validação do telefone (aceita apenas números e no mínimo 10 dígitos)
    let phonePattern = /^[0-9]{10,}$/;
    if (!phonePattern.test(phone)) {
      errorMessages.innerHTML += "<p>O telefone deve conter apenas números e ter pelo menos 10 dígitos.</p>";
      isValid = false;
    }
  
    // Validação da cidade
    if (city.length < 10) {
      errorMessages.innerHTML += "<p>A cidade deve ter pelo menos 10 caracteres.</p>";
      isValid = false;
    }
  
    // Validação do estado (exemplo: deve ter exatamente 2 letras, como "SP")
    let statePattern = /^[A-Za-z]{2}$/;
    if (!statePattern.test(state)) {
      errorMessages.innerHTML += "<p>O estado deve conter 2 letras (ex.: SP).</p>";
      isValid = false;
    }
  
    // Validação do trecho (deve ter pelo menos 10 caracteres)
    if (excerpt.length < 15) {
      errorMessages.innerHTML += "<p>O trecho deve ter pelo menos 15 caracteres.</p>";
      isValid = false;
    }
  
    // Retorna false para impedir o envio se houver erros
    return isValid;
  }
  