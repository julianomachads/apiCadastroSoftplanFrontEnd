import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Login } from '../Pages/Login';
import { Menu } from '../Pages/Menu';
import { Cadastrar } from '../Pages/Cadastrar';
import { Alterar } from '../Pages/Alterar';
import { Consultar } from '../Pages/Consultar';
import { Excluir } from '../Pages/Excluir';

export const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <Login />}/>
            <PrivateRoute exact path="/menu" component={ () => <Menu />}/>
            <PrivateRoute exact path="/menu/cadastrarPessoas" component={ () => <Cadastrar />}/>
            <PrivateRoute exact path="/menu/listarPessoas" component={ () => <Consultar />}/>
            <PrivateRoute exact path="/menu/excluirPessoas" component={ () => <Excluir />}/>
            <PrivateRoute exact path="/menu/alterarPessoas" component={ () => <Alterar />}/>
        </Switch>
    </BrowserRouter>

);