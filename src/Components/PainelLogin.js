import React from 'react';
import { MdPerson } from "react-icons/md";
import { MdLock } from "react-icons/md";
//import { isAuthenticated } from '../RouterGroup/AuthRouter';
//import { Redirect } from 'react-router-dom';
//import history from '../RouterGroup/RouteGo';

export class PainelLogin extends React.Component{

    constructor (props){
        super(props)
        this.state = {

            username: '',
            password: ''

        }

    }

    onChangeValue = e => {

        this.setState({[e.target.id]: e.target.value})
        //console.log(this.state)


    }

    clickHandler = e => {

        e.preventDefault()
        this.history.pushState(null, '/menu');

    }

    /*onSubmitButton = e => {
        e.preventDefault()
        console.log(this.state)
        if(isAuthenticated(this.state)){

            console.log(this.state)
            console.log(localStorage.getItem('usuario'))
            //alert('Logado com sucesso!')
            return history.push('/menu');
            //return <Redirect to={{ pathname: "/menu"}}/>

        }else{
            alert('Você não tem autorização para entrar neste app!')
        }

    }*/

    render(){

        const {username, password} = this.state
        return(

            <form className="painel-login" onSubmit={this.props.entrar}>

                <div className="login-left">

                    <img src="https://pbs.twimg.com/profile_images/1311759066134458374/0za1ZUfU.jpg" alt="Login Cadastro" />

                </div>
                <div className="login-right">

                        <h1>Login API</h1>
                        <div className="login-input-user">

                            <MdPerson />
                            <input type="text" id='username' value={username} onChange={this.onChangeValue} onKeyUp={this.onChangeValue} placeholder="Digite o nome de usuário" />

                        </div>
                        <div className="login-input-password">

                            <MdLock />
                            <input type="password" id='password' value={password} onChange={this.onChangeValue} onKeyUp={this.onChangeValue} placeholder="Digite sua senha" />

                        </div>

                        <button type="submit" className="btn btn-dark">Entrar</button>

                </div>

            </form>

        )

    }

}