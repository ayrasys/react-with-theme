import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';

import Logo from 'components/Logo';
import { login } from 'actions/index';

export class Home extends React.PureComponent {
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = (e) => {
    e.preventDefault();

    this.props.dispatch(login());
  };

  render() {
    const { user } = this.props;

    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">   
			
				<div className="m-login m-login--signin  m-login--5" id="m_login">
 	<div className="m-login__wrapper-1 m-portlet-full-height">
		<div className="m-login__wrapper-1-1">
			<div className="m-login__contanier">
				<div className="m-login__content">
					<div className="m-login__logo">
						<a href="https://keenthemes.com/metronic/preview/?page=snippets/pages/user/login-5&amp;demo=default#">
							<img src=""/>  	
						</a>
					</div>
					<div className="m-login__title">
						<h3>JOIN OUR GREAT METRO COMMUNITY GET FREE ACCOUNT</h3>
					</div>
					<div className="m-login__desc">
						Amazing Stuff is Lorem Here.Grownng Team
					</div>
					<div className="m-login__form-action">
						<button type="button" id="m_login_signup" className="btn btn-outline-focus m-btn--pill">Get An Account</button>				
					</div>			 		
				</div>
			</div>	
			<div className="m-login__border"><div></div></div>	
		</div>
	</div>
	<div className="m-login__wrapper-2 m-portlet-full-height">
		<div className="m-login__contanier">			
			<div className="m-login__signin">
				<div className="m-login__head">
					<h3 className="m-login__title">Login To Your Account</h3>
				</div>
				<form className="m-login__form m-form" action="https://keenthemes.com/metronic/preview/?page=snippets/pages/user/login-5&amp;demo=default">
					<div className="form-group m-form__group">
						<input className="form-control m-input" type="text" placeholder="Username" name="username" autocomplete="off"/>
					</div>
					<div className="form-group m-form__group">
						<input className="form-control m-input m-login__form-input--last" type="Password" placeholder="Password" name="password"/>
					</div>
					<div className="row m-login__form-sub">
						<div className="col m--align-left">
							<label className="m-checkbox m-checkbox--focus">
							<input type="checkbox" name="remember" /> Remember me
							<span></span>
							</label>
						</div>
						<div className="col m--align-right">
							<a href="javascript:;" id="m_login_forget_password" className="m-link">Forget Password ?</a>
						</div>
					</div>
					<div className="m-login__form-action">
						<button id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Sign In</button>
					</div>
				</form>
			</div>
			<div className="m-login__signup">
				<div className="m-login__head">
					<h3 className="m-login__title">Sign Up</h3>
					<div className="m-login__desc">Enter your details to create your account:</div>
				</div>
				<form className="m-login__form m-form" action="https://keenthemes.com/metronic/preview/?page=snippets/pages/user/login-5&amp;demo=default">
					<div className="form-group m-form__group">
						<input className="form-control m-input" type="text" placeholder="Fullname" name="fullname"/>
					</div>
					<div className="form-group m-form__group">
						<input className="form-control m-input" type="text" placeholder="Email" name="email" autocomplete="off"/>
					</div>
					<div className="form-group m-form__group">
						<input className="form-control m-input" type="password" placeholder="Password" name="password"/>>
					</div>
					<div className="form-group m-form__group">
						<input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword"/>>
					</div>
					<div className="m-login__form-sub">
						<label className="m-checkbox m-checkbox--focus">
							<input type="checkbox" name="agree"/> I Agree the <a href="https://keenthemes.com/metronic/preview/?page=snippets/pages/user/login-5&amp;demo=default#" className="m-link m-link--focus">terms and conditions</a>.
							<span></span>
						</label>
						<span className="m-form__help"></span>
					</div>
					<div className="m-login__form-action">
						<button id="m_login_signup_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Sign Up</button>
						<button id="m_login_signup_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">Cancel</button>
					</div>
				</form>
			</div>
			<div className="m-login__forget-password">
				<div className="m-login__head">
					<h3 className="m-login__title">Forgotten Password ?</h3>
					<div className="m-login__desc">Enter your email to reset your password:</div>
				</div>
				<form className="m-login__form m-form" action="https://keenthemes.com/metronic/preview/?page=snippets/pages/user/login-5&amp;demo=default">
					<div className="form-group m-form__group">
						<input className="form-control m-input" type="text" placeholder="Email" name="email" id="m_email" autocomplete="off"/>>
					</div>
					<div className="m-login__form-action">
						<button id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Request</button>
						<button id="m_login_forget_password_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom ">Cancel</button>
					</div>
				</form>
			</div>			 
		</div>
	</div> 
</div>				
		

</div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
