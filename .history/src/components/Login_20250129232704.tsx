import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("ID Token:", credentialResponse.credential); // ID Token
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default Login;
