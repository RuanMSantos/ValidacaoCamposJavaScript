function ValidarCampos(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    if (nome.value == null || nome.value == ""){
        alert("Digite o nome!");
        nome.focus();
        return;
    } else {
        if (nome.value.length > 20){
            alert("Campo com mais de 20 caracteres!");
            nome.value = "";
            nome.focus();
            return;
        }
    }

    if (email.value == null || email.value == ""){
        
        alert("Digite o email!");
        email.focus();
        return;

    } else {

        if (!ValidaEmail(email.value.trim())){

            alert("E-mail inválido");
            email.value = "";
            email.focus();
            return;
        }

        else {
            // let parteEmail = email.value.substring(0, 5);
            // alert(parteEmail);

            let antesDoArroba = email.value.substring(0, email.value.indexOf("@"));
            alert(antesDoArroba);
        }

    }
}

function ValidaEmail(email){
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function Pegadinha(){
    window.location.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8_U__eLgdHyZ3v_nl6wAbxB_2z3940aeBA&s";
}