import SignupForm from "../components/SignupForm"; // Form bileşenini içeri aktarıyoruz
import React from 'react';
const SignupPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignupForm />
    </div>
  );
};

export default SignupPage;
