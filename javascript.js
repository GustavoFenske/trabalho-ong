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
    let termo = document.getElementById("termo").checked;
    let financeiro = document.getElementById("financeiro").value;
    let decisao = document.querySelector('input[name="decisao"]:checked');


    let cpfexistente = "123.456.678-90";

    if (nome.length < 3) return alert("Nome Inválido");

    if (email.includes("@")) {

    } else {
        return alert("o email precisa ter @");
    }

    if (telefone.length < 8) return alert("telefone invalido");

    if (cpf.length <= 0) return alert("digite o seu cpf");

    if (cpf === cpfExistente) return alert("esse cpf ja adotou antes");

    if (idade < 18) return alert("é necessário ser maior de idade");

    if (cidade.length <= 0) return alert("digite a sua cidade");

    if (moradia == false) return alert("escolha sua moradiaaz");

    if (moradia == "apartamento") {
        if (quintal.value == "sim") {
            return alert("Apartamento não tem quintal");
        }
    }

    if (moradia == "Apartamento") {
        let resposta_moradia = prompt("O apartamento aceita pets? (responda com sim ou não)");

        if (resposta_moradia == "não") {
            alert("Desculpe, mas só aceitamos apartamentos que aceitam pets!");
            document.getElementById("moradia").value = "selecione";
        }
    }

    if (!quintal) return alert("assinale a opção do quintal");

    if (!pets) return alert("assinale a opção do pets");

    if (pets.value == "nao") {
        alert("Como este é seu primeiro pet, a ONG entrará em contato para oferecer acompanhamento especializado.");
    }

    if (horas < 0 || horas > 24) return alert("digite horas validas");

    if (horas > 8) return alert("O animal não pode ficar sozinho por mais de 8 horas");

    if (!termo) return alert("Você precisa aceitar os termos de responsabilidade para continuar.");

    if (motivo.length < 15 || motivo == "quero" || motivo == "porque sim") {
        return alert("Por favor descreva melhor o motivo da adoção");
    }

    if (financeiro === "nao") {
        return alert("E necessário ter condições financeiras");
    } else if (financeiro === "") {
        return alert("Por favor, informe sua situação financeira.");
    }

    if (decisao && decisao.value === "hoje") {
        alert("Você nao pode adotar no mesmo dia");
    }
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;


});