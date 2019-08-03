import React from 'react';
import InputForm from '../input-form/InputForm';
import AllButton from '../all-button/AllButton';
import {signInWithGoogle} from '../firebase/Firebase';
import './SignIn.scss';

class SignIn extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         email:'',
         password:''
      }
   }
   handleChange= e => {
      const {value,name} = e.target;
      this.setState({[name]:value})
   }
   handleSubmit = e =>{
      e.preventDefault();
      this.setState({email:'',password:''})
   }
   render(){
      return(
         <div className='sign-in'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
               <InputForm 
                  name='email' 
                  type='email' 
                  value={this.state.email} 
                  label='email' 
                  handleChange={this.handleChange} 
                  required/>
               <InputForm 
                  name='password' 
                  type='password' 
                  label='password' 
                  value={this.state.password} 
                  handleChange={this.handleChange} 
                  required/>
               <div className="buttons">  
                  <AllButton type='submit'>Sign In</AllButton>
                  <AllButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</AllButton>
               </div> 
            </form>
         </div>
      )
   }
}
export default SignIn;