var db = require ('../db');
exports.getEstadisticaFacturas = function (req,resp) {
	var instruction = "execute ConsultaEstadisticaCuatro ";

	if (req.body.fecha1 == "") {instruction+="null,";}
	else {instruction+="'";instruction+=req.body.fecha1+"',"}
	
	if (req.body.fecha2 == "") {instruction+="null";}
	else { instruction+="'";instruction+=req.body.fecha2+"'"}
    
	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Sales.Orders]");
			resp.json(data.recordset)
		}
	});
};
