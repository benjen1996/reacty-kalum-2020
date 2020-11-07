import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RolScreen } from '../components/roles/RolScreen';
import { Navbar } from '../components/ui/Navbar';
import { UsuarioScreen } from '../components/usuarios/UsuarioScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>

                    <Route exact path="/usuarios" component={UsuarioScreen} />
                    <Route exact path="/roles" component={RolScreen} />

                </Switch>

            </div>

        </>
    )
}
