import React from 'react';
import '../Styles/Components/NavbarMenu.css';

export class NavbarMenu extends React.Component{

    render(){

        return(

            <div className='navbar-default'>
    
                <img src="https://pbs.twimg.com/profile_images/1311759066134458374/0za1ZUfU.jpg" alt="Login Cadastro" />
                <div className='page-name'>

                    <span>{this.props.pagename}</span>

                </div>

                <div className='divspan'>

                    <span onClick={this.props.history}>{this.props.texto}</span>

                </div>

            </div>

        )

    }

}