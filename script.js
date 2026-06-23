<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Aplicação Prática - Calculadora de IMC</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7f6;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        button {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }
        button:hover {
            background-color: #27ae60;
        }
        .resultado {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #2c3e50;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Calculadora de IMC</h1>
        <p>Clique no botão abaixo para iniciar o cálculo do seu Índice de Massa Corporal.</p>
        <button onclick="calcularIMC()">Iniciar Cálculo</button>
        <div id="resultado" class="resultado"></div>
    </div>

    <script>
        function calcularIMC() {
            // Captura o nome do usuário
            let nome = prompt("Digite seu nome:");
            if (!nome) return; // Cancela a execução se o nome estiver vazio

            // Captura o peso e a altura, convertendo para números decimais
            let peso = Number(prompt(nome + ", digite seu peso em kg (ex: 70.5):"));
            let altura = Number(prompt(nome + ", digite sua altura em metros (ex: 1.75):"));

            // Valida se os dados inseridos são números válidos
            if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                alert("Por favor, insira valores válidos para peso e altura.");
                return;
            }

            // Realiza o cálculo do IMC: peso / (altura * altura)
            let imc = peso / (altura * altura);
            let classificacao = "";

            // Estrutura condicional para classificar o IMC
            if (imc < 18.5) {
                classificacao = "Abaixo do peso";
            } else if (imc >= 18.5 && imc < 25) {
                classificacao = "Peso normal";
            } else if (imc >= 25 && imc < 30) {
                classificacao = "Sobrepeso";
            } else {
                classificacao = "Obesidade";
            }

            // Exibe o resultado formatado na página HTML através do DOM
            let divResultado = document.getElementById("resultado");
            divResultado.innerHTML = `
                <hr>
                <p><strong>${nome}</strong>, seu IMC é <strong>${imc.toFixed(2)}</strong>.</p>
                <p>Classificação: <em>${classificacao}</em></p>
            `;
        }
    </script>

</body>
</html>