// document.getElementById('caca').addEventListener('submit', function(event){
//     event.preventDefault();
//     login();
// });

function login() {
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
    })
    
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user == "ingreyeslara" && pass == "Utd_2024" ){
        Swal.fire({
            title: 'Credenciales correctas',
            text: 'Bienvenido al sistema',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => { 
            if (result.isConfirmed) {
                window.location.href = 'https://erick0510.projectsutd.online/unidad1/';x
            }
        });
        
        
    } else if( user == "examen_parcial2" && pass == "Voyporel100") {
        Swal.fire({
            title: 'Credenciales correctas',
            text: 'Bienvenido al sistema',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then((result) => { 
            if (result.isConfirmed) {
                window.location.href = 'https://erick0510.projectsutd.online/unidad1/';x
            }
        });

    } else (
        Swal.fire({
            title: 'Credenciales incorrectas',
            text: 'Verifica tus credenciales',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })

    )
}