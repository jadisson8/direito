function validateForm() {
  var form = document.getElementById("myForm");
  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute("required") && elements[i].value.trim() === "") {
      alert("Preencha todos os campos obrigatórios.");
      return false; // Impede o envio do formulário
    }
  }

  alert("Cadastro realizado!");
  return true; // Permite o envio do formulário
}

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('loginForm')
    formulario.addEventListener('submit', function (event) {
        event.preventDefault()
        // Se quiser obter os valores dos campos de entrada
        const emailTelefoneInput = formulario.querySelector('[name="E-mail/Telefone"]');
        const senhaInput = formulario.querySelector('[type="password"]');
        const emailTelefone = emailTelefoneInput.value;
        const senha = senhaInput.value
        // Armazena os dados no localStorage
        localStorage.setItem('emailTelefone', emailTelefone);
        localStorage.setItem('senha', senha)
        // Redireciona para a página 'interface.html'
        window.location.href = 'interface.html';
    });
});

