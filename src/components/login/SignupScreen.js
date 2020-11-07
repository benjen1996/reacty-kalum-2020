import React, { useContext, useState } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const SignupScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const  [usuario, setUsuario]  = useState({
        email: '',
        username: '',
        password: '',
        bio: '',
        nombres: '',
        apellidos: '',


    });

    function handleInputChange(e) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function handleSumit(e){
        e.preventDefault();
        try {
            const {data} = await Axios.post('http://localhost:9002/kalum-oauth/v1/usuarios',usuario);
            Swal.fire('Registro',`El registro del usuario ${usuario.username} ha sido creado exitosamente`,'success');
            dispatch({
                type: types.login,
                payload: data
            });
        } catch (error) {

            if (error.response.status === 503) {
                
                Swal.fire('Registro',`Error ${error.response.data.Mensaje}`,'error');

            } else if(error.response.status === 400) {
                Swal.fire('Registro',`Error ${error.response.data.Mensaje}`,'error');
            } else{
                Swal.fire('Registro',`Error al crear el registro`,'error');
            }
            
            
        }
    }

    return (
        <div className="container mt-5" >
            <div className="card border-primary text-center" >
                <div className="card-header" >
                    Nuevo Registro
                </div>

            </div>
            <div className="card-body" >
                <form onSubmit={handleSumit } >
                    <div className="form-group row" >
                        <label className="col-form-label col-md-2" >Username</label>
                        <input type="text" value={usuario.username} onChange={handleInputChange} className=" form-control" name="username" placeholder="Inserte el nombre de usuario" required autoFocus />
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-md-2" >Password</label>
                        <input type="password" value={usuario.password} onChange={handleInputChange} className=" form-control" name="password" placeholder="Inserte password" required />
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-md-2" >Email</label>
                        <input type="text" value={usuario.email} onChange={handleInputChange} className=" form-control" name="email" placeholder="Ingresar email" required />
                    </div>
                    <div className="form-group row">

                        <label className="col-form-label col-md-2" >Bio</label>
                        <input type="text" value={usuario.bio} onChange={handleInputChange} className=" form-control" name="bio" placeholder="Inserte su bio" required />
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-md-2" >Nombres</label>
                        <input type="text" value={usuario.nombres} onChange={handleInputChange} className=" form-control" name="nombres" placeholder="Inserte Nombres de usuario" required />
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-md-2" >Apellidos</label>
                        <input type="text" value={usuario.apellidos} onChange={handleInputChange} className=" form-control" name="apellidos" placeholder="Inserte Apellidos de usuario" required />
                    </div>
                    <div className="form-group" >
                        <button className="btn btn-lg btn-primary btn-block" type="submit" >Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
