import React from 'react';
import PessoaService from '../Service/PessoaService';

export class PostFormAlterar extends React.Component{

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
        if(e.target.value === null){

            this.setState({[e.target.id]: ''})

        }else{

            this.setState({[e.target.id]: e.target.value})

        }
       

    }
    
    changeHandlerId = e => {

        var botao = document.getElementById('botaoalterar');
        var id = this.state.id;

        if(id === ''){
            id = 0;
        }

        PessoaService.getPessoaById(id).then((response) => {

            this.setState(response.data)

        });

        PessoaService.getLengthPessoas().then(response => {
            
            //if(id < 1 ||id > response.data){
            if(id < 1 ){

                botao.disabled = true;
    
            }else{
                botao.disabled = false;
            }
        
        });

    }

    submitHandler = e => {

        var botao = document.getElementById('botaoalterar');
        e.preventDefault()
        console.log(this.state)
        PessoaService.updatePessoaById(this.state)
        this.setState({id: ''})
        this.setState({cpf: ''})
        this.setState({nome: ''})
        this.setState({sexo: ''})
        this.setState({naturalidade: ''})
        this.setState({nacionalidade: ''})
        this.setState({email: ''})
        this.setState({datanasc: ''})
        botao.disabled = true;

    }

    render(){
        const {cpf, nome, sexo, naturalidade, nacionalidade, email, datanasc, id} = this.state
        return(

            <form id='form-alterar' className='form-alterar' onSubmit={this.submitHandler}>
                    <div className='div-id-alterar'>

                        <h1>Digite um ID para alterar o cadastro correspondente:</h1>
                        <span className='span-obs'>Obs.: Os dados aparecerão automáticamente.</span>
                        <h1>ID</h1>
                        <input type="text" id='id' value={id} onChange={this.onChangeValue} onKeyUp={this.changeHandlerId}/>

                    </div>

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
                    <button type="submit" id="botaoalterar" className="btn btn-dark button-alterar" disabled={true}>Alterar</button>
                </form>

        )

    }

}