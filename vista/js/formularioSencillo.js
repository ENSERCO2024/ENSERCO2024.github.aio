//entrar al formulario
const formulario = document.getElementById("formulario");

//acceso a todos los inputs
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

// Acceso a la comprobación de la validación del formulario
const valida = {
    nombre:false,
    apellido:false,
    telefono:false,
    email:false
}
// Envío del formulario
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
})

// Validación del nombre
nombre.addEventListener("blur",()=>{
    let name_re = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,15}$/;

    if(nombre.value == "" || nombre == null){
        setErrorFor(nombre,"No puede dejar el nombre en blanco");
        valida.nombre = false;
    }else{
        if(!name_re.exec(nombre.value)){
            setErrorFor(nombre,"El nombre solo puede estar formado por letras y contener entre 0 y 15 caracteres");
        }else{
            setSuccessFor(nombre)
            valida.nombre =true;
        }
    }

})


// Validación de los apellidos
nombre.addEventListener("blur",()=>{
    let name_re = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,40}$/;

    if(nombre.value == "" || apellidos == null){
        setErrorFor(apellidos,"No puede dejar los apellidos en blanco");
        valida.apellidos = false;
    }else{
        if(!name_re.exec(apellidos.value)){
            setErrorFor(apellidos,"Los apellidos solo puede estar formado por letras y contener entre 0 y 15 caracteres");
        }else{
            setSuccessFor(apellidos)
            valida.apellidos =true;
        }
    }

})


// Validación del teléfono
telefono.addEventListener("blur",()=>{
    let email_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/;
    
    if(telefono.value == "" || telefono == null){
        setErrorFor(telefono,"No puede dejar el nombre en blanco");
        valida.telefono = false;
    }else{
        if(!email_re.exec(telefono.value)){
            setErrorFor(telefono,"El teléfono solo podrá contener números y longitud másxima de 9 dígitos");
        }else{
            setSuccessFor(telefono)
            valida.apellidos =true;
        }
    }
})

// Validacion del email
email.addEventListener("blur",()=>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    if(email.value == "" || email == null){
        setErrorFor(email,"No puede dejar el email en blanco");
        valida.email = false;
    }else{
        if(!email_re.exec(email.value)){
            setErrorFor(email,"Introducir email válido");
        }else{
            setSuccessFor(email)
            valida.email =true;
        }
    }
})


// Mensaje de error
function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";


}


//si todo esta correcto
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className ="form-control success";

}
