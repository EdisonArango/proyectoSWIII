var db = openDatabase("dbLab","1.0","algo",10*1240);

function eventoBoton(){
    //consultar();
    cargarListaRemota();
}

function insertar(){
    var nombre	=$("#nombre").val();
    var cedula	= $("#cedula").val();
    db.transaction(
        function(tx){
            tx.executeSql("INSERT INTO categoria (id,nombre) VALUES ('"+cedula+"', '"+nombre+"')");
	},
        error_,
        succes_);
}
/*$("#boton_1").onck(function(){
	alert ("si funciono");

}); */

// var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
/*
db.transaction(tx){
	 tx.executeSql("CREATE TABLE IF NOT EXISTS categoria (id int,nombre varchar(20))")

	inser into categoria (id,nombre) nombre 
}*/

db.transaction(
	function (s) {  
	  s.executeSql("CREATE TABLE IF NOT EXISTS categoria (id,nombre)");
	/*  s.executeSql("DELETE FROM categoria WHERE id = 0");
	  s.executeSql("DELETE FROM categoria WHERE id");
	  for (var i = 0; i < 10; i++) {
	  	s.executeSql("INSERT INTO categoria (id,nombre) VALUES ("+i+", 'felipe"+i+"')");
	
	  };*/
	  
	}
	,error_, 
	succes_);

function consultar(){

	db.transaction(
		function(tx){

			tx.executeSql("select * FROM categoria",[],recorrer,error_);
		},error_,succes_);
}

function recorrer(tx,rs){
	var html="";
	for (var i = 0; i < rs.rows.length; i++) {
	  	var fila = rs.rows.item(i);
	  		html +=generarLi(fila);

	  	console.log(fila);
	
	  }


	console.log(html);
	$("#lista").html(html);
	$("#lista").listview('refresh');
	$("#page0").trigger("refresh");
}



function generarLi(fila){
	var h= "<li><a href='#page1' >"+fila.id+" "+fila.nombre+ "</a></li>" 
	return h;
	
}
function error_(e){

	console.error(e);
	alert("error");
}

function succes_(e){

	/*alert("bien")*/
}

/*
<ul data-role='listview' data-filter='true' data-filter-placeholder='Search fruits...' data-inset='true'>
    <li><a href='#'>Apple</a></li>
    <li><a href='#'>Banana</a></li>
    <li><a href='#'>Cherry</a></li>
    <li><a href='#'>Cranberry</a></li>
    <li><a href='#'>Grape</a></li>
    <li><a href='#'>Orange</a></li>
</ul>
 */

function mostrarPuntos(data){
    //alert(mapaPuntos + "<---");
    //var capaMarcadores = new OpenLayers.Layer.Markers( "Puntos" );
    //mapaPuntos.addLayer(capaMarcadores);
    //ol.proj.fromLonLat([-73.6243721,4.13478]),
    /*
    var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon = new OpenLayers.Icon('http://localhost/app/img/marker.png', size, offset);
    */
   
    for(var d in data){
        //capaMarcadores.addMarker(new OpenLayers.Marker(new OpenLayers.LonLat(0, 0), icon));
    }
}

function mostrarLista(data){
    var cadenaLista = "<ul id='listaNombres' data-role='listview' data-inset='true'>";
    $("#contenedorLista").html("");
    for(var d in data){
        cadenaLista += "<li><a href='#'>"+data[d].nombres+"</a></li>";
    }
    cadenaLista += "</ul>";
    $("#contenedorLista").html(cadenaLista);
    $("#listaNombres").listview();
    
    mostrarPuntos(data);
}

function cargarListaRemota(){
    $.ajax({
        url:"http://localhost/servicios/mostrar.php",
        type:"GET",
        //type: "POST",
        contentType: 'application/json',
        dataType:"json",
       
        success:function(data){
            console.log(data);
            mostrarLista(data);
        },  
        error: function (jqXHR, exception) {
       
            //CerrarPreloader();
            if (jqXHR.status === 0) {
                return;//alert('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
                window.location.href = servidor + directorio_raiz + formulario_login; /*Direccionar al formulario de login */
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        },
    });
}
