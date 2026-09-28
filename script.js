const formulario = document.getElementById("formCadastro");
const cpf = document.getElementById("cpf");
const imagem = document.getElementById("imagem");
const preview = document.getElementById("preview");
const mensagem = document.getElementById("mensagem");

// Formatação do CPF
cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;
});

// Mostrar prévia da imagem
imagem.addEventListener("change", function () {

    const arquivo = imagem.files[0];

    if (arquivo) {
        const leitor = new FileReader();

        leitor.onload = function (evento) {
            preview.src = evento.target.result;
            preview.style.display = "block";
        };

        leitor.readAsDataURL(arquivo);
    }
});

// Enviar formulário
formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const endereco = document.getElementById("endereco").value;
    const valorCpf = cpf.value;

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    if (valorCpf.length !== 14) {
        mensagem.textContent = "Digite um CPF válido.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Senha:", senha);
    console.log("Endereço:", endereco);
    console.log("CPF:", valorCpf);
});