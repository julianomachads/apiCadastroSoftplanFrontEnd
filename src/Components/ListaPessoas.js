import React from 'react';
import PessoaService from '../Service/PessoaService';
import '../Styles/Components/ListaPessoas.css';

export class ListaPessoas extends React.Component{

    constructor (props){
        super(props)
        this.state = {

            pessoas:[]

        }

    }

    componentDidMount(){

        PessoaService.getPessoas().then((response) => {

            this.setState({pessoas: response.data})

        });

    }

    render(){

        return(

            <div className="table-list">
                <h1 className="text-center">Lista de Pessoas</h1>
                <table className="table table-dark">

                    <thead className="tbl-head">
                        <tr>
                            <td>IdPessoa</td>
                            <td>Nome</td>
                            <td>CPF</td>
                            <td>Sexo</td>
                            <td>E-mail</td>
                            <td>Estado</td>
                            <td>País</td>
                            <td>Data de Nascimento</td>
                            <td>Data de Cadastro</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pessoas.map(
                                pessoa =>
                                <tr key = {pessoa.codPessoa}>
                                    <td>{pessoa.codPessoa}</td>
                                    <td>{pessoa.nome}</td>
                                    <td>{pessoa.cpf}</td>
                                    <td>{pessoa.sexo}</td>
                                    <td>{pessoa.email}</td>
                                    <td>{pessoa.naturalidade}</td>
                                    <td>{pessoa.nacionalidade}</td>
                                    <td>{pessoa.datanasc}</td>
                                    <td>{pessoa.datacad}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>

        )

    }

}