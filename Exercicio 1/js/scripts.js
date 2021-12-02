    function validarFormulario(){
        var email = document.forms["formLogin"]["email"].value;
        var senha = document.forms["formLogin"]["senha"].value;

        if (email == "") {
            document.formLogin.email.style.border='2px solid red';
            document.getElementById('email').focus();
            alert("Preencha todos os campos");                     
            return false;     
        } else{

            if (senha == "") {
                document.formLogin.senha.style.border='2px solid red';
                document.getElementById('senha').focus();
                alert("Preencha todos os campos");                  
                return false;     
            }
            else{
                alert("Login para o " + email + " efetuado com sucesso!");
                return true;
            }
        }
    }