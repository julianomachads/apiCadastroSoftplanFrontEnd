import React from 'react';
import '../Styles/Pages/Consultar.css';
import { NavbarMenu } from '../Components/NavbarMenu';
import { useHistory } from 'react-router-dom'
import { ListaPessoas } from '../Components/ListaPessoas';

export function Consultar(){

    let history = useHistory();

    function voltar(){

        history.push('/menu');

    }

    return(

        <div className='consultar'>
            <NavbarMenu history={voltar} texto='Voltar' pagename='Consultar'/>
            <div className='table-listapessoas'>

                <ListaPessoas />

            </div>
        </div>

    )

}