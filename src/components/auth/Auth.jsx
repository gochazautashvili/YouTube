"use client";
import RegisterComp from "./Register";
import LoginComp from "./Login";
import { Button } from "@components/ui/button";
import useAuth from "@hooks/useAuth";

const Auth = () => {
  const { handelUploadProfile, handleSubmit, auth, setAuth, error } = useAuth();

  return (
    <form className="w-full flex-col flex" onSubmit={handleSubmit}>
      {auth ? (
        <RegisterComp handelUploadProfile={handelUploadProfile} />
      ) : (
        <LoginComp />
      )}
      <p
        onClick={() => setAuth((prev) => !prev)}
        className="font-normal ml-1 underline cursor-pointer my-2"
      >
        Change Authorization Method
      </p>
      {error && <p className="text-red-500 mb-1 text-base">{error}</p>}
      <Button>SUBMIT</Button>
    </form>
  );
};

export default Auth;
