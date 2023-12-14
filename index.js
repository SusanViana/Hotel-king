var nome_hotel = prompt("Qual o nome do hotel?");
var nome_usuario = prompt("Qual o seu nome?");
var senha = prompt("Digite a senha:");
var senha_correta = "2678";

function inicio() {
    alert("Bem-vindo ao hotel " + nome_hotel + ", " + nome_usuario + ". É um imenso prazer ter você por aqui");

    var escolha = parseInt(prompt('Selecione uma opção: 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Sair'));

    switch (escolha) {
        case 1:
            reserva_quartos();
            break;
        case 2:
            cadastro_hospedes();
            break;
        case 3:
            abastecer_carros();
            break;
        case 4:
            sair();
            break;
        default:
            erro();
    }
}

function reserva_quartos() {
    var diaria = parseFloat(prompt("Qual o valor padrão da diária?"));

    if (diaria < 0) {
        alert("Valor inválido, " + nome_usuario);
        inicio();
        return;
    }

    var num_diarias = parseInt(prompt("Quantas diárias serão necessárias?"));

    if (num_diarias < 0 || num_diarias > 30) {
        alert("Valor inválido, " + nome_usuario);
        inicio();
        return;
    }

    var total_valor = diaria * num_diarias;

    var nome_hospede = prompt("Qual o nome do hóspede?");
    var confirmacao = prompt(nome_usuario + ", você confirma a hospedagem para " + nome_hospede + " por " + num_diarias + " dias? (S/N)").toUpperCase();

    if (confirmacao === "S") {
        alert(nome_usuario + ", reserva efetuada para " + nome_hospede + ". O valor total é de R$" + total_valor.toFixed(2));
    } else {
        alert(nome_usuario + ", reserva não efetuada.");
    }

    inicio();
}

function cadastro_hospedes() {
    alert('HOTEL ' + nome_hotel + ' - CADASTRO DE HÓSPEDES');
    inicio();
}

function abastecer_carros() {
    alert('HOTEL ' + nome_hotel + ' - ABASTECER');
    inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}

inicio();

