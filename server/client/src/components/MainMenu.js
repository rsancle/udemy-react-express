import React, { Component } from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';

export default class MainMenu extends Component {
    render(){
        return (
            <nav>
                <Menu secondary>
                    <Menu.Item>
                        <a href="">Emaily</a>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name='sign-in' >
                            <Button color='google plus'>
                                <Icon name='google plus circle' /> Login with Google
                            </Button>

                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </nav>


        );
    }
}