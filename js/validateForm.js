document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formToValidate").addEventListener('submit', validarFormulario); 
});

function validarFormulario(event){
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            else{
                alert("Su formulario ha sido enviado con exito.");
            }
            form.classList.add('was-validated');
    });
}