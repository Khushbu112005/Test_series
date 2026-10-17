import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/common/AuthLayout";
import FormField from "../components/ui/FormField";
import CustomInput from "../components/ui/CustomInput";
import { Mail, ArrowUpRight } from "lucide-react";

function ResetPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout
      leftLabel="ACCOUNT RECOVERY"
      leftTitle={
        <>
          Find your way <span className="text-[#06B6D4]">back in.</span>
        </>
      }
      leftDescription="Enter your registered email and we'll help you set a fresh password for your learning journey."
      leftStepTitle="A fresh start, one step away."
      leftStepDescription="Get back to learning with confidence."
      titleLabel="FORGOT PASSWORD"
      title="Reset your password"
      description="We'll prepare a secure link for your account."
      formContent={
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField id="email" label="Email address" required>
            <div className="relative">
              <Mail
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />
              <input
                type="email"
                placeholder="you@example.com"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full h-[42px] pl-10 pr-3 text-[12px] px-3 py-4 border border-[#DCE3E5] dark:border-slate-600 rounded-lg bg-white dark:bg-[#111B2C] text-[12px] text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#06B6D4]"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.email.message}
              </p>
            )}
          </FormField>

          <button
            type="submit"
            className="w-full h-11 mt-5 bg-[#06B6D4] text-white rounded-md flex items-center justify-center gap-2 text-sm font-semibold"
          >
            Send Reset Link
            <ArrowUpRight size={15} />
          </button>
        </form>
      }
      footerContent={
        <div className="mt-5 text-[10px]">
          <p className="text-[#A0ADB2]">
            Remember your password?{" "}
            <Link to="/login" className="text-[#06B6D4] font-semibold">
              Log in here
            </Link>
          </p>
        </div>
      }
    />
  );
}

export default ResetPassword;
