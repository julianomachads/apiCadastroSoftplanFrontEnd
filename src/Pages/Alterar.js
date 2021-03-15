import React from 'react';
import '../Styles/Pages/Alterar.css'
import { NavbarMenu } from '../Components/NavbarMenu';
import { useHistory } from 'react-router-dom'
import { PostFormAlterar } from '../Components/PostFormAlterar';

export function Alterar(){

    let history = useHistory();

    function voltar(){

        history.push('/menu');

    }

    return(

        <div className='alterar'>
            <NavbarMenu history={voltar} texto='Voltar' pagename='Alterar'/>
            <div className='container-form-alterar'>
                <PostFormAlterar />
            </div>

        </div>

    )

}