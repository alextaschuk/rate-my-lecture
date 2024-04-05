import React from "react";
import { auth } from "../../api/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignupBox from "@/app/components/auth/signup";

function Signup() {
  return (
    <div className="bg-bluegrey-500 min-h-screen">
      <h1>Test!</h1>
      <SignupBox />
    </div>
  );
}

export default Signup;
