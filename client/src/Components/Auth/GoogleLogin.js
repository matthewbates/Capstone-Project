import React from "react";
import GoogleLogin from "react-google-login";

function GoogleLoginOption() {
  function handleFailure(result) {
    alert(result);
  }

  function handleGoogleLogin(googleData) {
    console.log(googleData);
  }

  return (
    <div>
      <GoogleLogin
        clientId={
          "140579730421-nrcast86asj9oasjsl96rru0fgn6fbtd.apps.googleusercontent.com"
        }
        buttonText="Log in with Google"
        onSucess={handleGoogleLogin}
        onFailure={handleFailure}
        // cookiePolicy={"single_host_origin"}
      ></GoogleLogin>
    </div>
  );
}

export default GoogleLoginOption;
