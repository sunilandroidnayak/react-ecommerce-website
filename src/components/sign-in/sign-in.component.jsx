import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState( { [name] : value });
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I Already have a account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    value='email' 
                    type="email" 
                    required ='true'
                    value={this.state.email} 
                    label='EMAIL'
                    handleChange={this.handleChange}/>

                    <FormInput 
                    name='password' 
                    value='password' 
                    required type="password" 
                    label="PASSWORD"
                    value={this.state.password}
                    handleChange={this.handleChange}/>

                    <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;