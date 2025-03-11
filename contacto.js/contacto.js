function Cliente (nombre, apellido, edad, correo){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.correo=correo;
}
function registrar(){
    console.log("Registrando...");
}
  
const inputNombre = document.getElementById("name");
const inputApellido = document.getElementById("lastname");
const inputEdad = document.getElementById("age");
const inputCorreo = document.getElementById("email");
let p; 

function registrar(){

    let newcliente = new Cliente(inputNombre.value, inputApellido.value, inputEdad.value, inputCorreo.value );

    if(inputNombre.value==""){
        alert("ingresa el nombre");
    }else{
        display(newcliente);
    }
   
}

function display(Cliente){
    const list = document.getElementById("list");
    p=`
    <div> 
        <p>${Cliente.nombre} - ${Cliente.apellido} - ${Cliente.edad} - ${Cliente.correo}</p>
    </div>
    `;
    list.innerHTML+=p;// inserta en HTML
}


let cliente1 = new Cliente("Daniel","Hernandez",30,"daniel@gmail.com")


console.log(cliente1);

display(cliente1);