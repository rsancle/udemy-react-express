import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import Checkout from './Checkout';

class MainMenu extends Component {
    renderContent() {

        switch (this.props.auth) {
            case null:
                return 'Still waiting';
            case false:
                return <a href='/auth/google' className='google plus'>
                            <Icon name='google plus circle' /> Login with Google
                        </a>;
            default:
                return [
                    <Checkout key='1'/>,
                    <p key="3"> Credits: {this.props.auth.credits}</p>,
                    <a key='2' href='/api/logout'>Logout</a>
                ];
        }
    }

    render(){
        return (
            <nav>
                <Menu secondary>
                    <Menu.Item>
                        <Link to={ this.props.auth ? '/surveys' : '/'}>Emaily</Link>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='sign-in' >

                            { this.renderContent() }

                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </nav>


        );
    }
}


/*
* Takes sub state auth from store and return it as auth prop
*/
function mapStateToProps ({ auth }) {
    return { auth };
}

/*function mapStateToProps (state) {
    return { auth: state.auth };
}*/

export default connect(mapStateToProps)(MainMenu);