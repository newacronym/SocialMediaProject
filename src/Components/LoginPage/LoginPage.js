import React, { Component } from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIn/SignIN';
import SignUp from '../SignUp/SignUp';
import olavector from '../../images/olavector.svg';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true
         }
    }

    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin: false});
        else    
            this.setState({isLogin: true});
    }

    render() { 
        return ( 
            <div className='mainContianer'>
                <Grid container>
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={4}>
                       <div className="loginpage__main">
                           <div>
                               <div className="loginpage_rightcomponent">
                                   
                                   <img className="loginpage__logo" src={olavector} />
                                   <div className="loginPage__signin">

                                     {
                                         this.state.isLogin ? <SignIN/> : <SignUp/>
                                     }

                                        <div className="login_forgt"> Forgot password?</div>
                                   </div>
                               </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className="loginPage__signin">
                                                 {/* Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#000","background-color":"#DCCDCA","padding":"1px","border":"1px solid black","border-radius":"5px"}}>Sign up</span> */}
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#fff","background-color":"black","padding":"5px","border":"1px solid blue","border-radius":"5px"}}>Sign up</span>
                                        </div> :
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    }
                                    
                                   
                                </div>
                           </div>
                       </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;