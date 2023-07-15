//######### Variáveis #########//
let numero = document.querySelector('.numero');

let digito1 = document.querySelector('.digito1');
let digito2 = document.querySelector('.digito2');

let telainicial = document.querySelector('.telainicial');
let cliquebranco = document.querySelector('.cliquebranco');
let cliqueConfirma = document.querySelector('.cliqueConfirma');
let invalido = document.querySelector('.invalido');

let diginvalido = document.querySelector('.digito-invalido');

let candidatos = document.querySelector('.candidato');

let votoBranco = false;
let votoinvalido = false;
let fim = false;

let beep = new Audio('sounds/beep.mp3');
let music = new Audio('sounds/votacao-finalizada.mp3');

digito1.style.animation = '';
digito2.style.animation = 'none';

let candidato1 = `
<div class="num-candidato">
    <span>SEU VOTO PARA</span>
    <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
    <input type="text" name="digitado" value="2" class="digitado1" maxlength="1" readonly>
    <input type="text" name="digitado" value="1" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
    <p><strong>Nome</strong>: Pedro</p>
    <P><strong>Partido</strong>: AB</P>
    <p><strong>Slogan</strong>: <i>"Vamos arrumar isso aí"</i></p>
    <p><strong>Vice-presidente</strong>: Carlos </p>
</div>
<div>
    <img class="foto-candidato" src="images/candidato1.png" alt="">
    <img class="foto-vice" src="images/vice1.jpeg" alt="">
</div>
`
let candidato2 = `
<div class="num-candidato">
    <span>SEU VOTO PARA</span>
    <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
    <input type="text" name="digitado" value="1" class="digitado1" maxlength="1" readonly>
    <input type="text" name="digitado" value="2" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
    <p><strong>Nome</strong>: Ana</p>
    <P><strong>Partido</strong>: AC</P>
    <p><strong>Slogan</strong>: <i>"Que?"</i></p>
    <p><strong>Vice-presidente</strong>: Cleide </p>
</div>
<div>
    <img class="foto-candidato" src="images/candidato2.jpg" alt="">
    <img class="foto-vice" src="images/vice2.jpg" alt="">
</div>
`
let candidato3 = `
<div class="num-candidato">
    <span>SEU VOTO PARA</span>
    <P style="text-align: center;"><strong>PRESIDENTE</strong></P><br>
    <input type="text" name="digitado" value="3" class="digitado1" maxlength="1" readonly>
    <input type="text" name="digitado" value="4" class="digitado2" maxlength="1" readonly>
</div>
<div class="text-candidato">
    <p><strong>Nome</strong>: Jorge</p>
    <P><strong>Partido</strong>: AD</P>
    <p><strong>Slogan</strong>: <i>"...?"</i></p>
    <p><strong>Vice-presidente</strong>: Ana </p>
</div>
<div>
    <img class="foto-candidato" src="images/candidato3.jpg" alt="">
    <img class="foto-vice" src="images/vice3.jpg" alt="">
</div>
`

// Funções dos Botões //
function digitar(numero) {
    beep.play()
    
    if(fim === false && votoBranco === false) {
        if(digito1.value == '' && digito2.value == '') {
            digito1.value = numero;
            digito1.style.animation = 'none';
            digito2.style.animation = '';
        } 
        else if(digito1.value != '' && digito2.value == '') {
            digito2.value = numero;
            digito2.style.animation = 'none';
        }
    }
}

function corrige() {
    beep.play();

    if(fim === false){
        cliquebranco.classList.add('sumir');
        invalido.classList.add('sumir');
        candidatos.classList.add('sumir');
        telainicial.classList.remove('sumir');
        digito1.value = '';
        digito2.value = '';
        votoBranco = false;
        votoinvalido = false;
    }
}

function branco() {
    beep.play();

    if(fim === false){
        if(digito1.value == '' && digito2.value == '') {
            votoBranco = true;
            telainicial.classList.add('sumir');
            cliquebranco.classList.remove('sumir');
        }
    }
}

const loop = setInterval(() => {
    if(digito1.value == "2" && digito2.value == "1"){
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato1;
    }
    else if(digito1.value == "1" && digito2.value == "2"){
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato2;
    }
    else if(digito1.value == "3" && digito2.value == "4"){
        telainicial.classList.add('sumir');
        candidatos.classList.remove('sumir');
        candidatos.innerHTML = candidato3;
    }
    else{
        if(digito1.value != '' && digito2.value != ''){
            votoinvalido = true;
            telainicial.classList.add('sumir');
            invalido.classList.remove('sumir');
            diginvalido.innerHTML = `Você digitou <strong>${digito1.value}${digito2.value}</strong>`
        }else if(digito1.value == "" && digito2.value == "") {
            digito1.style.animation = '';
        }
    }
},10)