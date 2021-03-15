import React from 'react';
import '../Styles/Pages/Excluir.css'
import { NavbarMenu } from '../Components/NavbarMenu';
import { useHistory } from 'react-router-dom'
import { PostFormExcluir } from '../Components/PostFormExcluir';

export function Excluir(){

    let history = useHistory();

    function voltar(){

        history.push('/menu');

    }

    return(

        <div className='excluir'>
            <NavbarMenu history={voltar} texto='Voltar' pagename='Excluir'/>
            <div className='container-form-excluir'>
                <PostFormExcluir />
            </div>

        </div>

    )

}