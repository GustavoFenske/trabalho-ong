document.getElementById("formAdoção").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value
    let idade = document.getElementById("idade").value
    let cidade = document.getElementById("cidade").value
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pets = document.querySelector('input[name="pets"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("horas").value;




    if (nome.length < 3) return alert("Nome Inválido");

    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }

    if (telefone.length < 8) return alert("telefone invalido");

    if (cpf.length <= 0) return alert("digite o seu cpf");

    if (idade < 18) return alert("é necessário ser maior de idade");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    if (moradia == false) return alert("escolha sua moradiaaz");

    if (!quintal) return alert("assinale a opção do quintal");

    if (!pets) return alert("assinale a opção do pets");

    if (horas < 0 || horas > 24) return alert ("digite horas validas");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;


});