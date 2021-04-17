var db = require ('../db');
exports.getVentas = function (req,resp) {
	var instruction = "execute SP_ConsultaVentas ";

	if (req.body.numFactura == "") instruction+="null,";
	else  {instruction+=req.body.numFactura+","} 

	if (req.body.cliente == "") instruction+="null,";
	else {instruction+="'";instruction+=req.body.cliente+"',"}

	if (req.body.entrega == "") instruction+="null,";
    else {instruction+="'";instruction+=req.body.entrega+"',"}
    
	if (req.body.fecha1 == "") instruction+="null,";
    else {instruction+="'";instruction+=req.body.fecha1+"',"}

	if (req.body.fecha2 == "") instruction+="null,";
    else {instruction+="'";instruction+=req.body.fecha2+"',"}
    
	if (req.body.montoMinimo == "") instruction+="null,";
    else {instruction+=req.body.montoMinimo+","}

	if (req.body.montoMaximo == "") instruction+="null";
    else {instruction+=req.body.montoMaximo}

	console.log(instruction);
	db.executeSQL(instruction,function(data,err) {
		if(err) {
			console.log("[ERROR]:[Ocurrió un error en la consulta a la base de datos]")
			console.log(err)
		}else {
			console.log("[MENSAJE]:[Se realizó una consulta en la base de datos con exito]");
			console.log("	[TABLA]:[Sales.SalesOrders]");
			resp.json(data.recordset)
		}
	});
};


// {"numFactura":"123321","cliente":"Bin Laden","entrega":"Avion","fecha1":"2020-09-01","fecha2":"2020-09-30","montoMinimo":"100","montoMaximo":"1000000000"}
