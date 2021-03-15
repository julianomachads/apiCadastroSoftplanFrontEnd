import React from 'react';
import PessoaService from '../Service/PessoaService';

export class PostForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            id: '',
            cpf: '',
            nome: '',
            sexo: '',
            naturalidade: '',
            nacionalidade: '',
            email: '',
            datanasc: ''

        }

    }

    onChangeValue = e => {

        this.setState({[e.target.id]: e.target.value})

    }

    submitHandler = e => {

        e.preventDefault()
        console.log(this.state)
        PessoaService.salvarPessoa(this.state)

    }

    render(){
        const {cpf, nome, sexo, naturalidade, nacionalidade, email, datanasc} = this.state
        return(

            <form id='form-cadastrar' className='form-cadastrar' onSubmit={this.submitHandler}>
                    <div>

                        <h1>Nome</h1>
                        <input type="text" id='nome' value={nome} onChange={this.onChangeValue}/>

                    </div>
                    <div>

                        <h1>Sexo</h1>
                        <input type="text" id='sexo' value={sexo} onChange={this.onChangeValue} />

                    </div>
                    <div>

                        <h1>CPF</h1>
                        <input type="number" id='cpf' value={cpf} onChange={this.onChangeValue} />

                    </div>
                    <div>

                        <h1>Naturalidade</h1>
                        <input type="text" id='naturalidade' value={naturalidade} onChange={this.onChangeValue} />

                    </div>
                    <div>

                        <h1>Nacionalidade</h1>
                        <input type="text" id='nacionalidade' value={nacionalidade} onChange={this.onChangeValue} />

                    </div>
                    <div>

                        <h1>E-mail</h1>
                        <input type="mail" id='email' value={email} onChange={this.onChangeValue} />

                    </div>
                    <div>

                        <h1>Data de Nascimento</h1>
                        <input type="date" id='datanasc' value={datanasc} onChange={this.onChangeValue} />

                    </div>
                    <button type="submit" className="btn btn-dark button-cadastrar">Cadastrar</button>
                </form>

        )

    }

}