import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import { auth, provider } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { signIn } from "next-auth/client";

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="data:image/jpeg;base64,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"
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
