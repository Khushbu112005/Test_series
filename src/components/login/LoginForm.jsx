import { useState } from "react";
import {
  LockKeyhole,
  MessageCircle,
  Mail,
  Lock,
  ArrowUpRight,
} from "lucide-react";

import FormField from "../ui/FormField";
import CustomInput from "../ui/CustomInput";

function LoginForm({
  register,
  onSubmit,
  handleSubmit,
  errors,
  onSendCode,
  isSendingOtp,
  feedback,
}) {
  const [password, setPassword] = useState(false);
  return (
    <div className="bg-white dark:bg-[#0B1622] rounded-r-xl">
      {/* Tabs */}
      <div className="flex bg-[#EDF5F3] dark:bg-[#111B2C] rounded-xl p-1 mt-5">
        <button
          type="button"
          onClick={() => setPassword(true)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm ${
            password
              ? "bg-white dark:bg-[#263247] text-[#0D2535] dark:text-slate-100 font-semibold shadow-sm"
              : "text-[#70818A] dark:text-slate-400"
          }`}
        >
          <LockKeyhole size={15} strokeWidth={1.5} />
          Password
        </button>

        <button
          type="button"
          onClick={() => setPassword(false)}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm ${
            !password
              ? "bg-white dark:bg-[#263247] text-[#0D2535] dark:text-slate-100 font-semibold shadow-sm"
              : "text-[#70818A] dark:text-slate-400"
          }`}
        >
          <MessageCircle size={15} strokeWidth={1.5} />
          One-time code
        </button>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, password ? "password" : "otp"),
        )}
        className="flex flex-col gap-5 mt-5"
      >
        {/* Email / Mobile */}
        <FormField
          label="Email or mobile number"
          required
          id="email"
          labelColor="text-[#52636B]"
          className="text-[12px] font-semibold"
        >
          <div className="relative">
            <Mail
              size={16}
              strokeWidth={1.5}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
            />

            <CustomInput
              id="email"
              type="text"
              placeholder="you@example.com"
              error={errors.email}
              required
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  const emailPattern = /^\S+@\S+\.\S+$/;
                  const phonePattern = /^\+?[\d\s()-]+$/;
                  const phoneDigits = value.replace(/\D/g, "").length;

                  return (
                    emailPattern.test(value) ||
                    (phonePattern.test(value) &&
                      phoneDigits >= 8 &&
                      phoneDigits <= 15) ||
                    "Enter a valid email address or phone number"
                  );
                },
              })}
              className="h-[42px] pl-10 pr-3 text-[12px]"
            />
          </div>
        </FormField>

        {/* Password */}
        {password ? (
          <FormField
            label="Password"
            required
            id="password"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <Lock
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="password"
                type="password"
                placeholder="Enter Your Password"
                required
                error={errors.password}
                {...register("password", { required: "Password is required" })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        ) : (
          /* One-time code */
          <FormField
            label="One-time code"
            required
            id="otp"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <MessageCircle
                  size={16}
                  strokeWidth={1.5}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
                />

                <CustomInput
                  id="otp"
                  type="text"
                  placeholder="6-digit code"
                  maxLength={6}
                  required
                  error={errors.otp}
                  {...register("otp", {
                    required: "OTP is required",
                    pattern: {
                      value: /^\d{6}$/,
                      message: "OTP must be exactly 6 digits",
                    },
                  })}
                  className="h-[42px] pl-10 pr-3 text-[12px]"
                />
              </div>

              <button
                type="button"
                onClick={onSendCode}
                disabled={isSendingOtp}
                className="text-[#06B6D4] text-[11px] font-semibold whitespace-nowrap disabled:cursor-wait disabled:opacity-60"
              >
                {isSendingOtp ? "Sending..." : "Send code"}
              </button>
            </div>
          </FormField>
        )}

        {feedback && (
          <p
            role={feedback.type === "error" ? "alert" : "status"}
            aria-live="polite"
            className={`text-[12px] ${
              feedback.type === "error" ? "text-red-500" : "text-emerald-600"
            }`}
          >
            {feedback.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full h-[42px] mt-1 flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#05A9C5] text-white rounded-full text-[12px] font-semibold shadow-[0_5px_12px_rgba(6,182,212,0.25)] transition-colors"
        >
          Log in
          <ArrowUpRight size={15} strokeWidth={1.8} />
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
