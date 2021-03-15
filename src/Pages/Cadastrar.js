import React from 'react';
import '../Styles/Pages/Cadastrar.css';
import { NavbarMenu } from '../Components/NavbarMenu';
import { PostForm } from '../Components/PostForm';
import { useHistory } from 'react-router-dom'

export function Cadastrar(){

    let history = useHistory();

    function voltar(){

        history.push('/menu');

    }



    return(

        <div className='cadastrar'>
            <NavbarMenu history={voltar} texto='Voltar' pagename='Cadastrar'/>
            <div className='container-form-cadastrar'>
                <PostForm />
            </div>
        </div>

    )

}