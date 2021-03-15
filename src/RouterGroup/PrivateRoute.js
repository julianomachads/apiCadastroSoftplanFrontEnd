import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './AuthRouter';
//import { usuario } from '../RouterGroup/AuthRouter';

export const PrivateRoute = ({component: Component, ...rest}) =>(

    <Route {...rest} render = {props => 
        isAuthenticated() ? ( //Se usuario autenticado

            <Component {...props}/>

        ) : ( //Se não...

            <Redirect to={{ pathname: "/", state: { from: props.location } }}/>

        )
    }/>

);