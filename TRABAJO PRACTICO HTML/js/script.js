const datosDeRelleno = `{
	"texto": {
		"idiomaPrincipal": "·Español",
		"idiomaSecundario": "·Ingles",

		"aptitudes": "·Trabajo en equipo<br/><br/>·Iniciativa<br/><br/>·Resolucion de problemas<br/><br/>·Aprendizaje fluido<br/><br/>·Comunicacion Efectiva",

		"habilidadesInformaticas": "·Programacion con Javascript, CSS, HTML, C#, SQL<br/><br/>·Conocimientos avanzados de Photoshop<br/><br/>·Manejo de MySQL, MariaDB, MongoDB<br/><br/>·Maquetacion CSS",

		"cursos": "·Programacion avanzada en Javascript (200 horas) - Edx<br/><br/>·Adobe Illustrator para diseño grafico (140 horas) - Domestika",

		"resumen": "Est dignissimos Quis sit nobis fugit eos alias quibusdam qui laborum obcaecati ea eveniet voluptatum aut quisquam natus. Aut magnam distinctio ut explicabo debitis sit autem architecto est consequuntur assumenda. Sed autem sint cum deserunt iste et culpa totam qui minus natus aut dolores dolores est omnis nesciunt. Qui sint aspernatur non nostrum accusantium aut explicabo debitis et laudantium quas!    ",

		"experiencias": "·Etiam ut felis sed augue aliquam maximus a ac nisl.<br/><br/>·Cras bibendum mi sed sem iaculis interdum.<br/><br/>·In sed diam bibendum, consequat metus mattis, lobortis felis.<br/><br/>·Integer vel nunc eu turpis gravida convallis id nec nibh.<br/><br/>·Etiam volutpat odio et libero consectetur porta.<br/><br/>·Curabitur id tortor vitae enim elementum sollicitudin.<br/><br/>·Aenean ultricies ante sit amet arcu congue congue.<br/><br/>·Praesent eu nibh pharetra, bibendum velit eu, efficitur odio.<br/><br/>·Praesent pulvinar leo at viverra venenatis.<br/><br/>·Praesent maximus erat nec turpis pretium, at efficitur risus sollicitudin.<br/><br/>·In in est a justo congue lobortis.<br/><br/>·Integer vulputate diam eu urna vulputate accumsan.",

		"formacion": "2015 - Grado Superior en desarrollo de aplicaciones web. IES Miguel Catalan, Zaragoza<br/><br/>2013 - Bachillerato de ciencias. IES Luis Bañuel"
	}
}`;//algunos de estos datos fueron sacados de Lorem Ipsum

const objRelleno = JSON.parse(datosDeRelleno);
//ahora el string es un objeto JSON


var enlaceApi="https://randomuser.me/api/";
var nuevoEnlace=enlaceApi;
var nuevoColor;

//captura de datos
function tomarDatos(){
  var sexo=document.getElementById("sexo").value;
  var color=document.getElementById("color").value;
  nuevoEnlace=enlaceApi+sexo;
  nuevoColor=color;
  mostrarNuevoPerfil();
}


function mostrarNuevoPerfil(){
  fetch(nuevoEnlace)
  .then(response => response.json())
  .then(datosPersonaRandom => {
    //color de la columna izq
    document.getElementById("textoLeftColumn").style.backgroundColor=(nuevoColor);
    //informacion de contacto (columna IZQUIERDA)
    document.getElementById("fotoPerfil").setAttribute("src",datosPersonaRandom.results[0].picture.large);
    document.getElementById("numeroTelefono").innerHTML="NÚMERO: "+datosPersonaRandom.results[0].cell;
    document.getElementById("mail").innerHTML="MAIL: "+datosPersonaRandom.results[0].email;

    const calleNombreNumero = (datosPersonaRandom.results[0].location.street.name+" "+datosPersonaRandom.results[0].location.street.number);
    const ciudad = (datosPersonaRandom.results[0].location.city+", "+datosPersonaRandom.results[0].location.state);
    document.getElementById("direccion").innerHTML="DIRECCIÓN: "+calleNombreNumero+", "+ciudad;

    document.getElementById("idioma1").innerHTML=objRelleno.texto.idiomaPrincipal;
    document.getElementById("idioma2").innerHTML=objRelleno.texto.idiomaSecundario;

    document.getElementById("aptitudes").innerHTML=objRelleno.texto.aptitudes;

    document.getElementById("habilidades").innerHTML=objRelleno.texto.habilidadesInformaticas;

    document.getElementById("cursos").innerHTML=objRelleno.texto.cursos;


    
    //informacion principal (columna DERECHA)
    const nombreCompleto = (datosPersonaRandom.results[0].name.title+" "+datosPersonaRandom.results[0].name.first+" "+datosPersonaRandom.results[0].name.last);
    document.getElementById("nombreCompleto").innerHTML=nombreCompleto;

    document.getElementById("resumen").innerHTML=objRelleno.texto.resumen;

    document.getElementById("experiencias").innerHTML=objRelleno.texto.experiencias;

    document.getElementById("formacion").innerHTML=objRelleno.texto.formacion;
})
}






