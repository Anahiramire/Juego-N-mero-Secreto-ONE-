let numeroSecreto=0;
let intentos=0;
let numeroMaximo=10;
let guardarNumero=[];
console.log(numeroSecreto);

function editarHTML(elemento, texto){
    let asignarTexto= document.querySelector(elemento);
    asignarTexto.innerHTML= texto;
    return;
}

function numeroAleatorio(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(guardarNumero);
    
    if (guardarNumero.length==numeroMaximo){
        guardarNumero.splice(0,guardarNumero.length);
        return numeroAleatorio();
    }
    else{
        if (guardarNumero.includes(numeroGenerado)){
            return numeroAleatorio();
        }
        else{
            guardarNumero.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    editarHTML('h1',"Adivina adivinador");
    editarHTML('p', `Escribe un número entre el 1 y ${numeroMaximo}`);
    numeroSecreto=numeroAleatorio();
    intentos=1;
}

function validarUsuario(){
    let usuario= parseInt(document.getElementById("valorUsuario").value);
    if (usuario===numeroSecreto){
        editarHTML('p',`Adivinaste el número en ${intentos} ${intentos==1 ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute('disabled');
    }
    else{
        if (usuario>numeroSecreto){
            editarHTML('p',"El número es menor");
        }
        else{
            editarHTML('p',"El número es mayor");
        } intentos++;
    }limpiar();
    return usuario;
}

function limpiar(){
    document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego(){
    condicionesIniciales();
    limpiar();
    document.querySelector(`#reiniciar`).setAttribute('disabled','true');
}

condicionesIniciales();

