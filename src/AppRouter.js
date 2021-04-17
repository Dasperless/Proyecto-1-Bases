import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NavBar } from './NavBar';
import { HomeScreen } from './HomeScreen';
import { ClienteScreen } from './ClienteScreen';
import { ProveedorScreen } from './ProveedorScreen';
import { InventarioScreen } from './InventarioScreen';
import { VentaScreen } from './VentaScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>   {/*PATH DEBE SER EXACTO CON EL 'exact' */}
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/cliente" component={ClienteScreen} />
                    <Route exact path="/proveedor" component={ProveedorScreen} />
                    <Route exact path="/inventario" component={InventarioScreen} />
                    <Route exact path="/venta" component={VentaScreen} />
                    <Redirect to="/"/>
                    {/* <Route component={HomeScreen} />Si no existiera la ruta que muestre el default.(404) */}
                    

                </Switch>
            </div>
        </Router>
    )
}
