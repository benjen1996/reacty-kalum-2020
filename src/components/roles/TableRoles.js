import React from 'react'
import { RowRole } from './RowRole';

export const TableRoles = () => {

    const [roles,setRoles] = useState ([]);
    return (
        
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                    {roles.map(role => {<RowRole {...role}/>   })}
            </tbody>
        </table>
    )
}
