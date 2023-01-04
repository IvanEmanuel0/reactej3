import React, {useRef} from 'react';
import { Contacto } from '../../../models/contacto.class';

const ContactoForm = ( {agregar} ) => {

    const nombreRef = useRef("");
    const apellidoRef = useRef("");
    const edadRef = useRef("");

    function agregarContacto(e){
        e.preventDefault();
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            edadRef.current.value,
            true
        )
        vaciarFormulario();
        agregar(nuevoContacto);
    }

    function vaciarFormulario(){
        nombreRef.current.value=""
        apellidoRef.current.value=""
        edadRef.current.value=""
    }

    return (
        <form onSubmit={agregarContacto}>
            <input ref={nombreRef} type='text' placeholder='Ingresar nombre'/>
            <input ref={apellidoRef} type='text' placeholder='Ingresar apellido'/>
            <input ref={edadRef} type='text' placeholder='Ingresar edad'/>
            <button>Agregar contacto</button>
        </form>
    );
}

export default ContactoForm;
