import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();
    return class AuthWrapped extends Component {
        state = {
            user: null
        }

        componentDidMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login');
            }
            else {
                try {
                    const profile = Auth.getProfile();
                    this.setState({
                        user: profile
                    });
                }
                catch(err){
                    Auth.logout();
                    this.props.history.replace('/');
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent {...this.props} user={this.state.user} />
                );
            }
            else {
                return null;
            }
        }
    };
}
