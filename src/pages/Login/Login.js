import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-[600px]  flex justify-center items-center ">
      <div className="shadow-lg shadow-gray-500 rounded-2xl w-96 p-7">
        <h2 className="text-3xl text-center font-bold  ">Login</h2>
        <form className="my-4" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="font-semibold label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="text"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="font-semibold label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="password"
              {...register("password")}
            />
            <label className="label">
              <span className="label-text-alt">Forgot Password ?</span>
            </label>
          </div>

          <p>{data}</p>
          <input
            type="submit"
            value={"Login"}
            className="btn btn-accent w-full "
          />
        </form>
        <p className="font-semibold">
          New to Doctors Portal ?{" "}
          <Link className="text-secondary" to={"/signup"}>
            Create An Account
          </Link>
        </p>{" "}
        <div className="divider">OR</div>
        <button className="btn btn-secondary btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
