import React, {Fragment, Component} from 'react';
import socialNetworks from "../../data/SocialNetworks/socials";
import { db } from '../../config/firestore-dev';

class LoginRegister extends Component {
constructor(props){
    super(props);
    this.state = {username: '', password: '', isSignUp: false, login: false, isUser: false}

}
 onChangeInput = (e) =>{
    this.setState({
         [e.target.name] : e.target.value
    })
}
 onSubmitInput = (e) =>{
    e.preventDefault()
    if(this.state.isSignUp){
        this.onSignUp()
    } else {
        this.onSignIn()
    }
}

signUp = (e) => {
    e.preventDefault()
    this.setState({
        isSignUp : true,
    })
}

signUpFalse = (e) => {
    e.preventDefault()
    this.setState({
        isSignUp : false,
    })
}

 onSignUp = () => {
    const { username, password } = this.state;
    const name = db.collection('users').where('username', '==', username);
    name.orderBy('username').get().then(querySnapshot=>{
          querySnapshot.forEach(doc=>{
              const value = doc.data();
             if(value){
                if(username === value.username){
                   // window.alert('username is taken by another users!')
                  this.setState({
                     isUser: true,
                    
                 })
                } else {
                  this.setState({
                     isUser: false,
                    
                  })
                }

             }

          })
    })

    if(username.length < 6 || password.length < 6){
        window.alert('Username dan Password minimal 6 kharakter!')
    } else if(this.state.isUser === true){
        window.alert("Username telah digunakan oleh orang lain !")
    } else if(this.state.isUser === false){
        db.collection('users').add({
            username: this.state.username, 
            password: this.state.password
        });
    }
 }

 onSignIn = () => {
    const { username, password} = this.state;
    const name = db.collection('users');
          name.orderBy('username').get().then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    const value = doc.data();
                    console.log(doc)
                if(value){
                   if(username === value.username && password === value.password){
                     this.setState({
                        login: true,
                       
                    })
                   } else if(username === value.username && password !== value.password) {
                    window.alert('Password is not valid!')
                     this.setState({
                        login: false,
                       
                     })
                   } else {
                     window.alert('Akun belum terdaftar !')
                      this.setState({
                         login: false,
                        
                      })
                   }
                } 

                })
          })

          .catch( function(error){
            console.log(error)
          })


}

componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state){
         console.log("Login: ", this.state.login, "isSignUp : ", this.state.isSignUp)
         if(this.state.login){
            window.alert("Login Sukses!");
            // const login = window.btoa(true);
            // console.log(login, window.atob(login))
            localStorage.setItem('authState', JSON.stringify({auth: window.btoa(this.state.login)}))
         }
    }
}

render(){
    return (
        <Fragment>
            <div className="off-canvas-item">
                <div className="log-in-content-wrap">
                    <h2>
                    {
                        this.state.isSignUp ? "Sign Up" : "Sign In"
                    }
                    </h2>
                    <div className="login-form mtn-15">
                        <form >
                            <div className="form-input-item">
                                <label htmlFor="username" className="sr-only">Username</label>
                                <input type="text" 
                                    name="username" 
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.onChangeInput} 
                                    required/>
                            </div>

                            <div className="form-input-item">
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.onChangeInput} 
                                    required/>
                            </div>

                            <div className="form-input-item">
                                <button 
                                    onClick={this.onSubmitInput}
                                    type="submit" 
                                    className="btn-submit">
                                    {
                                        this.state.isSignUp ? "Daftar" : "Login" 
                                    }
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="sign-up-notification">
                        <p>{this.state.isSignUp ? "Sudah punya akun ?" : "Belum punya Akun ?"} <a href="/" 
                            onClick={this.state.isSignUp !== true ? this.signUp : this.signUpFalse}
                            >{this.state.isSignUp ? "Login Akun" : "Buat Akun"}</a></p>
                    </div>
                </div>
            </div>

            <div className="off-canvas-item mt-sm-30">
                <div className="social-icons">
                    {
                        socialNetworks.map(social=>(
                            <a key={social.id} href={`https://${social.networkName}.com/${social.username}`} target="_blank" rel="noopener noreferrer">
                                <i className={`fa fa-${social.networkName}`}/>
                            </a>
                        ))
                    }
                </div>
                <div className="copyright-content">
                    <p> © PT. Arkana Putra Indonesia {new Date().getFullYear()} All Right Reserved.</p>
                </div>
            </div>
        </Fragment>
    );
};
}

export default LoginRegister;