// const {Router} = ReactRouter;

T9n.setLanguage('no_NB');

var logInFunction = function(error, state){
  console.log("Loginfunction says: ");

  console.log(state);
  console.log(error);
  console.log(Router);

  // Router.push("/profile")

  if (!error) {
    if (state == "signIn") {
    }
    if (state == "signUp") {
      // Successfully registered
      // ...
    }
  }
};

var logOutFunction = function(err, state) {
  console.log("Logging out??");
  // this.transitionTo('/login')
  // Router.browserHistory.push('/login');
}

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',


    /*// Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,
      */
    // Hooks
    onSubmitHook: logInFunction,
    onLogoutHook: logOutFunction,
    /*
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,
    */

    // Texts
    texts: {
      button: {
          signUp: "Registrer"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
