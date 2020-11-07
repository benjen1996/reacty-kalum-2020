import React from 'react';

export const RowUsuario = ({ apellidos,nombres,username, email,bio }) => {
    return (
        <tr>
            <td>{apellidos}</td>
            <td>{nombres}</td>
            <td> {username} </td>
            <td>{email}</td>
    <td>{bio}</td>
        <td>
            <button type="button" name="editar"  className="btn btn-rounded btn-outline-primary btn-sm" > Editar</button>
        </td>
            <td>
                <button type="button" name="eliminar" className="btn btn-rounded btn-outline-danger btn-sm" >Eliminar</button>
            </td>
        </tr>
    )
}
