import React from 'react';
import '../Styles/Pages/Menu.css';

import { NavbarMenu } from '../Components/NavbarMenu';

import { useHistory } from 'react-router-dom'
import { MdContentPaste } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export function Menu() {

    let history = useHistory();

    function cadastrarRedirect(){

        history.push('/menu/cadastrarPessoas');

    }

    function alterarRedirect(){

        history.push('/menu/alterarPessoas');

    }

    function excluirRedirect(){

        history.push('/menu/excluirPessoas');

    }

    function consultarRedirect(){

        history.push('/menu/listarPessoas');

    }

    function sair(){

        history.push('/');

    }

    return (

        <div className='menu'>
            <NavbarMenu history={sair} texto='Sair' pagename='Menu'/>
            <div className='buttons'>
                <div className='botao' onClick={cadastrarRedirect}>
    
                    <MdContentPaste />
                    <span>Cadastrar</span>
    
                </div>
                <div className='botao' onClick={alterarRedirect}>
    
                    <MdEdit />
                    <span>Alterar</span>
    
                </div>
                <div className='botao' onClick={excluirRedirect}>
    
                    <MdDeleteForever />
                    <span>Deletar</span>
    
                </div>
                <div className='botao' onClick={consultarRedirect}>
    
                    <MdSearch />
                    <span>Consultar</span>
    
                </div>
            </div>
        </div>
    
    );

}