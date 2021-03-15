import React from 'react';
import '../Styles/Pages/Login.css';
import { PainelLogin } from '../Components/PainelLogin';
import { useHistory } from 'react-router-dom'

export function Login() {

    let history = useHistory();

    function entrar(){

        history.push('/menu');

    }

    return(

        <div className="login">
            <PainelLogin entrar={entrar}/>
        </div>

    )

}