let alumno=[];
//crear constructo
let contador=0;
class Estudiante {constructor
    (NombreE, CampusE, CorreoE, GeneroE, califA, califB) {
        this.Nombre = NombreE;
        this.Campus = CampusE;
        this.Correo = CorreoE;
        this.Genero = GeneroE;
        this.CalifA = califA;
        this.CalifB = califB;
        this.id = contador++;
    }
}
 
//funcion registrar    
function registro(){
    console.log("Registo Nuevo Alumno");
   // obtener los valores de los inputs documents.getElementByID
   let inputNombre = document.getElementById("txtNombre").value;
   let inputCorreo = document.getElementById("txtCorreo").value;
   let inputGenero = document.getElementById("selGenero").value;
   let inputCampus= document.getElementById("selCampus").value;
   let inputCalifA = Number(document.getElementById("numCalifA").value);
   let inputCalifB = Number(document.getElementById("numCalifB").value);

   //Crear el objeto nuevoAlumno
   let newalumno=new Estudiante(inputNombre,inputGenero,inputCorreo,inputCampus,inputCalifA,inputCalifB);

  if(inputNombre.trim()!="" && inputCorreo.trim()!="" && inputGenero.trim()!="" && inputCampus.trim()!="" ){      
      //desplegar en consola el nuevo alumno
      console.log(newalumno);
      alumno.push(newalumno);
      //limpiar formulario
      // limpiarform();
      imprimirAlumnos();
      limpiar();
   }else{
      alert("Falta información");
   }
 }
// funcion imprimin alimns
function imprimirAlumnos(){
    let row="";
    for(let i=0; i<alumno.length;i++){
        let est = alumno[i];

        let promedio = (Number(est.CalifA)+Number(est.CalifB))/2;

        row+=`
         <tr id="${est.id}">
            <td>${est.Nombre}</td>
            <td>${est.Correo}</td>
            <td>${est.Genero}</td>
            <td>${est.Campus}</td>
            <td>${est.CalifA}</td>
            <td>${est.CalifB}</td>  
            <td>${promedio}</td> 
            <td><button class="btn btn-danger" onclick="borrarAlumno(${est.id})";>Borrar</button></td> 
      </tr> `;
    }    

    var tabla = document.getElementById("alumnosTabla");
    tabla.innerHTML=row;
}
// limp form
function limpiar(){
        inputNombre = document.getElementById("txtNombre").value="";
        inputCorreo = document.getElementById("txtCorreo").value="";
        inputGenero = document.getElementById("selGenero").value="";
        inputCampus = document.getElementById("selCampus").value="";
        inputCalifA = document.getElementById("numCalifA").value="";
        inputCalifB = document.getElementById("numCalifB").value="";
 }

 function borrarAlumno(identificador){
   console.log("borrando alumno");
    document.getElementById(identificador).remove();    //borra HTML 
    alumno.splice(identificador,1);  //borra arreglo
 }
//contructor est
 function init(){
    
    console.log("Register");
    let alumno= new Estudiante("Allison","allison@GMAIL.com","Mujer","Mexicali",80,90);
   // let alumno2= new Estudiante("Alalondra","allison@GMAIL.com","Mujer","Mexicali",80,90);
    //let alumno3= new Estudiante("Alexa","allison@GMAIL.com","Mujer","Mexicali",80,90);
    
    imprimirAlumnos();
 }
 function init() {
    console.log("Register");
       // displayCards();
}
window.onload = init;