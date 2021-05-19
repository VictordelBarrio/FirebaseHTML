const formaingresar = document.getElementById('formLogin');

formaingresar.addEventListener('submit', (e)=>{
    e.preventDefault();

    let correo = formaingresar['correo'].value;
    let contrasena = formaingresar['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(cred =>{
        console.log(cred);

        $('#ingresarModal').modal('hide');
        formaingresar.reset();
        formaingresar.querySelector('.error').innerHTML="";
    }).catch(err => {
        formaingresar.querySelector('.error').innerHTML=mensajeError(err.code);
        console.log(err);
    });
});

function mensajeError(codigo){
    let message = '';
    switch(codigo){
        case 'auth/wrong-password':
            message = "Su contrasena no es correcta";
        break;
        case 'auth/user-not-found':
            message = "Usuario no encontrado";
        break;
        case 'auth/weak-password':
            message = "Contrasena debil";
        break;
       default: 
        message = 'Ocurrio un error al ingresar con este usuario'; 

    }

    return message;
}

const salir = document.getElementById('salir');

salir.addEventListener('click', (e)=>{
    e.preventDefault();

    auth.signOut().then( ()=>{
            alert('You have closed the sesion');
    });
})