import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleOAuthProvider clientId="147763064629-ffvq67ek2obgrffjcbcebu5e4jd2h54c.apps.googleusercontent.com">
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
