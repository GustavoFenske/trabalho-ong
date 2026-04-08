document.getElementById("formAdoção").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value
    let idade = document.getElementById("idade").value
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');

    if (nome.length < 3) return alert("Nome Inválido");

    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }

    if (telefone.length < 8) return alert("telefone invalido");

    if (cpf.length <= 0) return alert("digite o seu cpf")

    if ()
        document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;


});