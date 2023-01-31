var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

    var logo = window.document.getElementById('logoPrincipal');

    var botao = window.document.getElementById('botao');
    


function gerarRecibo() {
    var campos = window.document.getElementById('campos')
    var valor = window.document.getElementById('valor')
    var extenso = window.document.getElementById('extenso')
    var pagador = window.document.getElementById('pagador')
    var documento = window.document.getElementById('documento')


    var checagem = window.document.getElementsByName('formaPagto')
    var formaPagto = ''

    if (checagem[0].checked){
        formaPagto = ' Via PIX'
    } else if(checagem[1].checked){
        formaPagto = ' Em dinheiro'
    } else if(checagem[2].checked) {
        formaPagto = ' Por cartão'
    }




    campos.innerHTML = (`

    <div class="recibo-pronto">
    <div>
        <img class="logo" src="../img/logo.png" alt="">
    </div>
    <div class="cabecalho">
        <h1>Recibo</h1>
        <p>Nº ${controle}</p>
    </div>
    <div class="conteudo-recibo">
        <p class="conteudo">
            Recebi(bemos) de <strong>${pagador.value.toUpperCase()}</strong> - CPF/CNPJ Nº <strong>${documento.value}</strong>, a importancia de <strong>R$ ${valor.value}</strong> (<strong>${extenso.value.toUpperCase()}</strong>) referente ao serviço de <strong>martelinho de ouro</strong> no carro <strong> ${carro.value.toUpperCase()}</strong> com placa <strong>${placa.value.toUpperCase()}</strong>
        </p><br>
        <p class="sercicos-realizados">
            Reparo nas peças:<br>
            <strong>${servico1.value}</strong><br>
            <strong>${servico2.value}</strong><br>
            <strong>${servico3.value}</strong><br>
            <strong>${servico4.value}</strong>
        </p><br>
    </div>
    <div class="forma-pagto">
        <p>Pagamento:  <strong>${formaPagto}</strong></p>
        <br>
        <br>
    </div>
    <div class="cidade">
        <p>BIGUAÇU, ${dataAtual} </p><br><br><br><br>
    </div>
    <div class="assinatura" >
        <img class="assinatura-caneta" src="../img/assinatura-cadinho.png" alt="Assinatura Cadinho">
    </div>
    <div class="assinatura">
        <p>____________________________</p>
        <p>Ricardo Carlos de Fraga</p>
            <p>26.439.271/0001-31</p>
            <p>(48) 9 8415-2125</p>
    </div>
    <div class="btn">
  

        <button id="botao" onclick="window.print()">Imprimir / Salvar</button>
               
    </div>

</div>

        `);
        assinatura.style.display = 'block'
        campos.style.background = 'hsl(225, 100%, 98%'
        campos.style.color = 'black'
        campos.style.boxShadow = 'none'
        logo.style.display = 'none'

}
