var dataReal = new Date();
    var dia = String(dataReal.getDate()).padStart(2, '0');
    var mes = String(dataReal.getMonth() + 1).padStart(2, '0');
    var ano = dataReal.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    var hora = dataReal.getMinutes()
    var controle = hora + mes + dia

    var logo = window.document.getElementById('logoPrincipal');

    var botao = window.document.getElementById('botao');
    

    var campos = window.document.getElementById('campos')
    var valor = window.document.getElementById('valor')
    var extenso = window.document.getElementById('extenso')
    var pagador = window.document.getElementById('pagador')
    var documento = window.document.getElementById('documento')
    var referencia = window.document.getElementById('referente')
    var datas = window.document.getElementById('datas')

function gerarRecibo() {

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
    <div class="titulo">
        <h1>Recibo</h1>
    </div>
    <br>
        <p>Nº Controle: ${controle}</p>
        <p>Nome: RCC Florianópolis</p>
        <p>Endereço: Rua Doutor Pedro Rangel, 154</p>
        <p>Bairro: Sâo João</p>
        <p>Cidade: Itajaí</p>
        <p>Email: rccfloripa.diocese@gmail.com</p>
        
        <br>
        <br>
    </div>
    <div class="conteudo-recibo">
        <p class="conteudo">
            Recebi(bemos) de <strong>${pagador.value.toUpperCase()}</strong> - CPF/CNPJ Nº <strong>${documento.value}</strong>, a importancia de <strong>R$ ${valor.value}</strong> (<strong>${extenso.value.toUpperCase()}</strong>) referente a <strong> ${referencia.value}</strong>.
        </p><br>
    <div class="forma-pagto">
        <p>Pagamento:  <strong>${formaPagto}</strong></p>
        <br>
        <br>
    </div>
    <div class="cidade">
        <p>Florianópolis,   ${datas.value} </p><br><br><br><br>
    </div>
    <div class="assinatura" >
        <img class="assinatura-caneta" src="../img/assinatura.png" alt="Assinatura Cadinho">
    </div>
    <div class="assinatura">
        <p>____________________________</p>
        <p>Ismael Otto</p>
        <p>Tesoureiro</p>
        <p>(48) 9 9645-2429</p>
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

