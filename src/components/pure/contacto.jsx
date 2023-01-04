import React from 'react';

const ContactoComponent = ( {contacto, estado, eliminar} ) => {

    function estadoDelContacto(){
        if(contacto.conectado){
            return(<i onClick={() => estado(contacto)} style={{color: 'green'}} className="bi bi-person-fill"></i>)
        } else {
            return(<i onClick={() => estado(contacto)} style={{color: 'grey'}} className="bi bi-person-fill"></i>)
        }
    }

    return (
        <tr>
            <th>
                <span> {contacto.nombre} </span>
            </th>
            <td> {contacto.apellido} </td>
            <td> {contacto.edad} </td>
            <td> {estadoDelContacto()} </td>
            <td onClick={() => eliminar(contacto)}><i class="bi bi-trash3"></i></td>
        </tr>    
    );
}

export default ContactoComponent;
