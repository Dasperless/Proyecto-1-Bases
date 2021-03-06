import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import axios from 'axios';

export const HomeScreen = () => {

    // ----------------------------------------------------------------------------1-------------------------------------------------------
    const [formValues1, handleInputChange1, reset1] = useForm({
        proveedor01: ''
    })

    const { proveedor01 } = formValues1;

    const [dato1, setDato1] = useState([]);
    const [dato2, setDato2] = useState([]);
    const [dato3, setDato3] = useState([]);
    const [dato4, setDato4] = useState([]);
    const [dato5, setDato5] = useState([]);

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleSubmit01 = (e) => {
        e.preventDefault();
        if (proveedor01.length > 0) {
            console.log(proveedor01);
            axios.post("http://localhost:9000/EstadisticaProveedores/", {
                'nombre': proveedor01
            })
                .then(response => {
                    const datosC = response.data;
                    setDato1(cust => datosC);
                    console.log(datosC);
                })
                .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------2-------------------------------------------------------
    const [formValues2, handleInputChange2, reset2] = useForm({
        cliente: ''
    })

    const { cliente } = formValues2;

    const handleSubmit02 = (e) => {
        e.preventDefault();
        if (cliente.length > 0) {
            axios.post("http://localhost:9000/EstadisticaClientes/", {
                'nombre': cliente
            })
                .then(response => {
                    const datosC = response.data;
                    setDato2(cust => datosC);
                })
                .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------3-------------------------------------------------------
    const [formValues3, handleInputChange3, reset3] = useForm({
        fecha13: '',
        fecha23: ''
    })

    const { fecha13, fecha23 } = formValues3;

    const handleSubmit03 = (e) => {
        e.preventDefault();
        if (fecha13.length > 0 && fecha23.length > 0) {
            console.log(fecha13);
            axios.post("http://localhost:9000/EstadisticaProductos/", {
                'fecha1': fecha13,
                'fecha2': fecha23
            })
                .then(response => {
                    const datosC = response.data;
                    setDato3(cust => datosC);
                })
                .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------4-------------------------------------------------------
    const [formValues4, handleInputChange4, reset4] = useForm({
        fecha14: '',
        fecha24: ''
    })
    const { fecha14, fecha24 } = formValues4;
    const handleSubmit04 = (e) => {
        e.preventDefault();
        if (fecha14.length > 0 && fecha24.length > 0) {
            axios.post("http://localhost:9000/EstadisticaFacturas/", {
                'fecha1': fecha14,
                'fecha2': fecha24
            })
                .then(response => {
                    const datosC = response.data;
                    setDato4(cust => datosC);
                })
                .catch(error => console.log(error));
        }
    }

    // ----------------------------------------------------------------------------5-------------------------------------------------------
    const [formValues5, handleInputChange5, reset5] = useForm({
        fecha15: '',
        fecha25: ''
    })
    const { fecha15, fecha25 } = formValues5;
    const handleSubmit05 = (e) => {
        e.preventDefault();
        if (fecha15.length > 0 && fecha25.length > 0) {
            axios.post("http://localhost:9000/EstadisticaOrdenes/", {
                'fecha1': fecha15,
                'fecha2': fecha25
            })
                .then(response => {
                    const datosC = response.data;
                    setDato5(cust => datosC);
                })
                .catch(error => console.log(error));
        }
    }

    return (
        <div className="container">
            <h1>Datos estad??sticos</h1>

            {/* --------------------------------------#1------------------------------- */}
            <hr />
            <br></br>
            <h5> B??squeda de los montos m??s altos, bajos y compra promedio que se le hace a los proveedores.</h5>
            <form onSubmit={handleSubmit01}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependproveedor01"><strong>Nombre de proveedor:</strong></span>
                            </div>
                            <input
                                name='proveedor01'
                                type="text"
                                className="form-control"
                                value={proveedor01}
                                onChange={handleInputChange1}
                                aria-describedby="inputGroupPrependproveedor01" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset1}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <div className="anyClass">
                <table className="table dt-responsive nowrap table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Nombre proveedor</th>
                            <th scope="col">Categor??a</th>
                            <th scope="col">Monto m??ximo</th>
                            <th scope="col">Monto m??nimo</th>
                            <th scope="col">Promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dato1.map((dato) => (
                                <tr>
                                    <td>{dato.SupplierName}</td>
                                    <td>{dato.SupplierCategoryName}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.Minimo)}</span>}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.Maximo)}</span>}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.promedio)}</span>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h5> B??squeda de los montos m??s altos, bajos y ventas promedio que hacen los clientes.</h5>
            {/* --------------------------------------#2------------------------------- */}
            <form onSubmit={handleSubmit02}>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente"><strong>Nombre de cliente:</strong></span>
                            </div>
                            <input
                                name='cliente'
                                type="text"
                                className="form-control"
                                value={cliente}
                                onChange={handleInputChange2}
                                aria-describedby="inputGroupPrependcliente" />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset2}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <div className="anyClass">
                <table className="table dt-responsive nowrap table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Nombre cliente</th>
                            <th scope="col">Categor??a</th>
                            <th scope="col">Monto m??ximo</th>
                            <th scope="col">Monto m??nimo</th>
                            <th scope="col">Promedio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dato2.map((dato) => (
                                <tr>
                                    <td>{dato.CustomerName}</td>
                                    <td>{dato.CustomerCategoryName}</td>
                                    <td>{currencyFormat(dato.minimo)}</td>
                                    <td>{currencyFormat(dato.maximo)}</td>
                                    <td>{currencyFormat(dato.promedio)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            <br />
            <br />
            <br />
            <br />
            <h5> B??squeda de los top 10 de los productos que generan m??s ganancia en las ventas.</h5>
            {/* --------------------------------------#3------------------------------- */}
            <form onSubmit={handleSubmit03}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependnumF3"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha13'
                                type="date"
                                className="form-control"
                                value={fecha13}
                                onChange={handleInputChange3}
                                aria-describedby="inputGroupPrependnumF3" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente3"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha23'
                                type="date"
                                className="form-control"
                                value={fecha23}
                                onChange={handleInputChange3}
                                aria-describedby="inputGroupPrependcliente3" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    {/* </div> */}
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset3}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <div className="anyClass">
                <table className="table dt-responsive nowrap table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-right">Total de ganancia</th>
                            <th scope="col" className="text-center">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dato3.map((dato) => (
                                <tr>
                                    <td>{dato.StockItemName}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.Ganancia)}</span>}</td>
                                    <td>{<div className="text-center">{dato.Ranking}</div>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <h5> B??squeda de los top 10 de los clientes que tienen mayor cantidad de facturas emitidas a su nombre.</h5>
            {/* --------------------------------------#4------------------------------- */}
            <form onSubmit={handleSubmit04}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependnumF4"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha14'
                                type="date"
                                className="form-control"
                                value={fecha14}
                                onChange={handleInputChange4}
                                aria-describedby="inputGroupPrependnumF4" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrependcliente4"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha24'
                                type="date"
                                className="form-control"
                                value={fecha24}
                                onChange={handleInputChange4}
                                aria-describedby="inputGroupPrependcliente4" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset4}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <div className="anyClass">
                <table className="table dt-responsive nowrap table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Nombre cliente</th>
                            <th scope="col">Cantidad de facturas</th>
                            <th scope="col" className="text-right" >Monto total facturado</th>
                            <th scope="col" className="text-center">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dato4.map((dato) => (
                                <tr>
                                    <td>{dato.CustomerName}</td>
                                    <td>{dato.TotalSold}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.TotalInvoices)}</span>}</td>
                                    <td>{<div className="text-center">{dato.Ranking}</div>}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


            <br />
            <br />
            <br />
            <br />
            <h5> B??squeda de los top 10 de los proveedores que tienen mayor cantidad de ??rdenes de compras emitidas a su nombre.</h5>
            {/* --------------------------------------#5------------------------------- */}
            <form onSubmit={handleSubmit05}>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend51"><strong>Del:</strong></span>
                            </div>
                            <input
                                name='fecha15'
                                type="date"
                                className="form-control"
                                value={fecha15}
                                onChange={handleInputChange5}
                                aria-describedby="inputGroupPrepend51" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-5">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend5"><strong>Al:</strong></span>
                            </div>
                            <input
                                name='fecha25'
                                type="date"
                                className="form-control"
                                value={fecha25}
                                onChange={handleInputChange5}
                                aria-describedby="inputGroupPrepend5" 
                                min="2013-01-01" max="2016-05-31" 
                                />
                        </div>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-info' type="submit">Buscar</button>
                    </div>
                    <div className="form-group col-md-1">
                        <button className='btn btn-warning' onClick={reset5}>Reset</button>
                    </div>
                </div>
            </form>
            <br></br>
            <div className="anyClass">
                <table className="table dt-responsive nowrap table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Nombre proveedor</th>
                            <th scope="col" className="text-right">Monto de transacci??n</th>
                            <th scope="col" className="text-center">Cantidad de ordenes</th>
                            <th scope="col">Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dato5.map((dato) => (
                                <tr>
                                    <td>{dato.SupplierName}</td>
                                    <td>{<span className="float-right">{currencyFormat(dato.TotalOrdersAmount)}</span>}</td>
                                    <td>{<div className="text-center">{dato.TotalOrders}</div>}</td>
                                    <td>{dato.Ranking}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
