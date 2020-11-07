import React from 'react';

export const RowRole = ({ id, nombre }) => {
    return (
        <tr>
            <td> {id} </td>
            <td>{nombre}</td>
        </tr>
    )
}
