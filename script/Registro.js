document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener('submit', validarFormulario)
});


function validarFormulario(evento) {

    evento.preventDefault();

    var usuario = document.getElementById('Usuario').value;


    var extranos = "!¡<>«#$%&‘()*+,-_@:;./´'¿?[]{}";

    function tiene_extranos(texto) {
        for (i = 0; i < texto.length; i++) {
            if (extranos.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }
    if (tiene_extranos(usuario) != 0) {
        alert('El usuario no puede tener caracteres extraños');
        return;
    }



    var password = document.getElementById('password').value;

    var password2 = document.getElementById('Cpassword').value;

    if (password != password2) {
        alert('Las contraseñas no coinciden');
        return;
    }




    this.submit();
}


function showContent(cont) {
    switch (cont) {
        case 1:
            element = document.getElementById("divenfermedad");
            check = document.getElementById("CB-enfermedad");
            if (check.checked) {
                element.style.display = 'block';
                $("form").css({ "height": "980px" })
            }
            else {
                element.style.display = 'none';
                $("form").css({ "height": "910px" })
            }
            break;
        case 2:
            element = document.getElementById("subdivenfermedad");
            check = document.getElementById("CB-enfermedadContagiosa");
            if (check.checked) {
                element.style.display = 'block';
                $("form").css({ "height": "1180px" })
            }
            else {
                element.style.display = 'none';
                $("form").css({ "height": "980px" })
                break;
            }

    }
};

$(function () {
    $('#Fnacimiento').on('change', calcularEdad);
});

function calcularEdad() {

    fecha = $(this).val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    $('#Edad').val(edad + " " + "años");
}
