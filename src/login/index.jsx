import React, {Component} from 'react'
import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import './index.scss'
class Login  extends Component {
     constructor(props) {
         super(props);
          this.state = {
            email : '',
            password : '',
            hasAccount: false
        }
    }
    componentDidMount(){
    let db = firebase.database();
    
   }
    handleChange = ({target : {value, id}}) => {
        this.setState({
            [id]: value,
        })
   }
   creacteAccount = () => {
    const {email, password} = this.state    
    // firebase.auth().createUserWithEmailAndPassword(email, password )
    // .catch(error => console.log('err'))
 
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
        this.setState({hasAccount: true})
    })
    .catch(error => console.log('err'))
   }
    render() {
   const {hasAccount} = this.state
        return (
            <div>
              {
                  hasAccount ? 
                  (
                      <h1>вы успешно зарегистрировались</h1>
                  )
                  : (
                    <div className="login__wrapper">
                    <input className="login__name" type="text" id="email" placeholder="email" onChange={this.handleChange}/>
                    <input className="login__password" type="password" id="password" placeholder="password" onChange={this.handleChange}/>
                    <input className="send" type="submit" onClick={this.creacteAccount}/>       
                 </div>  
                  )
              }
    
            </div>
        )
    }
}
export default Login
