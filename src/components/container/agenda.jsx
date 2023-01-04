import React, {useState} from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import ContactoForm from '../pure/forms/contactoForm';

const Agenda = () => {

    const contacto1 = new Contacto("Iván", "Alagastino", "27", true)
    const contacto2 = new Contacto("Franco", "Alagastino", "24", false)

    const [contactos, setContactos] = useState([contacto1, contacto2]);

    function estadoDelContacto(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].conectado = !tempContactos[index].conectado;
        setContactos(tempContactos);
    }

    function agregarContacto(contacto) {
        const tempContactos = [...contactos]
        tempContactos.push(contacto)
        setContactos(tempContactos) 
    }

    function eliminarContacto(contacto) {
        const tempContactos = [...contactos]
        const index = contactos.indexOf(contacto)
        tempContactos.splice(index, 1)
        setContactos(tempContactos)
    }

    const Tabla = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    { contactos.map((contacto, index) => {
                        return (
                            <ContactoComponent 
                                key = {index}
                                contacto = {contacto}
                                estado = {estadoDelContacto}
                                eliminar = {eliminarContacto}>
                            </ContactoComponent>
                        )
                    }) }
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h1>Lista de contactos:</h1>
            <Tabla></Tabla>
            <ContactoForm agregar={agregarContacto}></ContactoForm>
        </div>
    );
}

export default Agenda;
