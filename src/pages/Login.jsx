import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/common/AuthLayout";
import LoginForm from "../components/login/LoginForm";
import { endpoints } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, method) => {
    try {
      const response =
        method === "password"
          ? await endpoints.login({
              username: data.email,
              password: data.password,
            })
          : await endpoints.verifyOtp({
              email: data.email,
              otp: data.otp,
            });
      console.log("Login response:", response.data);
      console.log(response.status);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  //   setFeedback(null);
  //   const isEmailValid = await trigger("email");

  //   if (!isEmailValid) {
  //     return;
  //   }

  //   setIsSendingOtp(true);

  //   try {
  //     const response = await endpoints.sendLoginOtp({
  //       email: getValues("email"),
  //     });
  //     setFeedback({
  //       type: "success",
  //       message: response.data?.message || "One-time code sent.",
  //     });
  //   } catch (error) {
  //     console.error("Failed to send login code:", error);
  //     setFeedback({
  //       type: "error",
  //       message:
  //         error.response?.data?.message ||
  //         "Could not send the code. Please try again.",
  //     });
  //   } finally {
  //     setIsSendingOtp(false);
  //   }
  // };

  return (
    <AuthLayout
      auth="true"
      leftLabel="YOUR NEXT CHAPTER"
      leftTitle={
        <>
          A clearer path to
          <span className="text-[#06B6D4]"> qualification.</span>
        </>
      }
      leftDescription="Everything you need to study with purpose, build confidence, and move closer to the career you’ve imagined."
      leftStepTitle="One focused step at a time."
      leftStepDescription="Your professional journey starts here."
      titleLabel="STUDENT PORTAL"
      title="Welcome back"
      description="Sign in to continue your learning journey."
      formContent={
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
        />
      }
      footerContent={
        <div className="mt-5 flex flex-col items-start gap-3 text-[10px] sm:flex-row sm:items-center sm:justify-between">
          <Link to="/reset-password" className="text-[#06B6D4] font-semibold">
            Forgot password?
          </Link>

          <p className="text-[#A0ADB2]">
            New to Chartered Studies?{" "}
            <Link to="/register" className="text-[#06B6D4] font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      }
    />
  );
}

export default Login;
