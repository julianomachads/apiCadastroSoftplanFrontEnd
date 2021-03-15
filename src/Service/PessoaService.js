import axios from 'axios';
//import { usuario } from '../RouterGroup/AuthRouter';

//const AUTHORIZATION_TOKEN = usuario;

//{ auth: {username:'softplan', password:'123'} }

const PESSOAS_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/listarPessoas';
const PESSOA_BY_ID_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/getPessoa';
const ALTERAR_PESSOA_BY_ID_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/updatePessoa';
const GET_LENGTH_PESSOAS_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/getLengthPessoas';
const SALVAR_PESSOA_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/salvarPessoa';
const DELETAR_PESSOA_REST_API_CADASTRO = 'http://localhost:8080/cadastrarPessoa/excluirPessoa';

class PessoaService{

    getPessoas(){
        return axios.get(PESSOAS_REST_API_CADASTRO,  { auth: {username:'softplan', password:'123'} });
    }

    getPessoaById(id){
        //return axios.get(PESSOA_BY_ID_REST_API_CADASTRO);
        return axios.get(PESSOA_BY_ID_REST_API_CADASTRO+"/"+id, { auth: {username:'softplan', password:'123'} })

    }

    async updatePessoaById(state){
        return await axios.put(ALTERAR_PESSOA_BY_ID_REST_API_CADASTRO, state , { auth: {username:'softplan', password:'123'} })
                    .then(response => {
                        console.log(response)
                        alert(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }

    async deletePessoa(id){

        return await axios.delete(DELETAR_PESSOA_REST_API_CADASTRO+"/"+id,  { auth: {username:'softplan', password:'123'} })
                    .then(response => {
                        console.log(response)
                        alert(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })

    }

    async salvarPessoa(state){
        return await axios.post(SALVAR_PESSOA_REST_API_CADASTRO, state,  { auth: {username:'softplan', password:'123'} })
                    .then(response => {
                        console.log(response)
                        alert(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }

    getLengthPessoas(){
        return axios.get(GET_LENGTH_PESSOAS_REST_API_CADASTRO, { auth: {username:'softplan', password:'123'} })
    }

}

export default new PessoaService();