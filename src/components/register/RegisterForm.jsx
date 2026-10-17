import { useState } from "react";

import {
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  MessageCircle,
  Eye,
  ArrowRight,
  ChevronDown,
  BookOpen,
  MapPin,
  MapPinned,
  EyeOff,
} from "lucide-react";

import FormField from "../ui/FormField";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import Button from "../ui/Button";

import s1 from "../../assets/images/s1.svg";
import s2 from "../../assets/images/s2.svg";
import s3 from "../../assets/images/s3.svg";
import s4 from "../../assets/images/s4.svg";
import s5 from "../../assets/images/s5.svg";
import s6 from "../../assets/images/s6.svg";

function RegisterForm({ register, onSubmit, handleSubmit, setValue, errors }) {
  const [showPasswords, setShowPasswords] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  const avatars = [s1, s2, s3, s4, s5, s6];

  const courseOptions = [
    {
      value: "",
      label: "Select your course",
    },
    {
      value: "ca-inter",
      label: "CA Inter",
    },
    {
      value: "ca-final",
      label: "CA Final",
    },
  ];

  const stateOptions = [
    {
      value: "",
      label: "Select state",
    },
    {
      value: "maharashtra",
      label: "Maharashtra",
    },
    {
      value: "gujarat",
      label: "Gujarat",
    },
    {
      value: "delhi",
      label: "Delhi",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0B1622] rounded-r-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 mt-5"
      >
        {/* First Name */}
        <div className="col-span-1">
          <FormField
            label="First name"
            required
            id="firstName"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <UserRound
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="firstName"
                type="text"
                placeholder="Enter first name"
                error={errors.firstName}
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must contain at least 2 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "First name cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                    message: "Enter a valid first name",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Last Name */}
        <div className="col-span-1">
          <FormField
            label="Last name"
            required
            id="lastName"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <UserRound
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="lastName"
                type="text"
                placeholder="Enter last name"
                error={errors.lastName}
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must contain at least 2 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Last name cannot exceed 30 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
                    message: "Enter a valid last name",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Email */}
        <div className="col-span-1">
          <FormField
            label="Email address"
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
                type="email"
                placeholder="you@example.com"
                error={errors.email}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                  maxLength: {
                    value: 100,
                    message: "Email cannot exceed 100 characters",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Mobile */}
        <div className="col-span-1">
          <FormField
            label="Mobile number"
            required
            id="mobile"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <Phone
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="mobile"
                type="tel"
                placeholder="98765 43210"
                maxLength={10}
                inputMode="numeric"
                error={errors.mobile}
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Registration OTP */}
        <div className="col-span-2">
          <FormField
            label="Registration OTP"
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
                  placeholder="Enter code"
                  maxLength={6}
                  inputMode="numeric"
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

              <Button
                type="button"
                variant="ghost"
                className="text-[#06B6D4] text-[11px] font-semibold whitespace-nowrap p-0 border-0"
              >
                Send OTP
              </Button>
            </div>
          </FormField>
        </div>

        {/* Course */}
        <div className="col-span-1">
          <FormField
            label="Course"
            required
            id="course"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <BookOpen
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3] pointer-events-none"
              />

              <CustomSelect
                id="course"
                options={courseOptions}
                error={errors.course}
                {...register("course", {
                  required: "Please select your course",
                })}
              />

              <ChevronDown
                size={15}
                strokeWidth={1.5}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BA3] pointer-events-none"
              />
            </div>
          </FormField>
        </div>

        {/* State */}
        <div className="col-span-1">
          <FormField
            label="State"
            required
            id="state"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3] pointer-events-none"
              />

              <CustomSelect
                id="state"
                options={stateOptions}
                error={errors.state}
                {...register("state", {
                  required: "Please select your state",
                })}
              />

              <ChevronDown
                size={15}
                strokeWidth={1.5}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BA3] pointer-events-none"
              />
            </div>
          </FormField>
        </div>

        {/* City */}
        <div className="col-span-1">
          <FormField
            label="City"
            required
            id="city"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <MapPinned
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="city"
                type="text"
                placeholder="Enter city"
                error={errors.city}
                {...register("city", {
                  required: "City is required",
                  minLength: {
                    value: 2,
                    message: "City must contain at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "City cannot exceed 50 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/,
                    message: "Enter a valid city name",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Address */}
        <div className="col-span-1">
          <FormField
            label="Address"
            required
            id="address"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="address"
                type="text"
                placeholder="House no., street, area"
                error={errors.address}
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 5,
                    message: "Address must contain at least 5 characters",
                  },
                  maxLength: {
                    value: 150,
                    message: "Address cannot exceed 150 characters",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Create Password */}
        <div className="col-span-1">
          <FormField
            label="Create password"
            required
            id="password"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <LockKeyhole
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="password"
                type={showPasswords ? "text" : "password"}
                placeholder="Minimum 8 characters"
                error={errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must contain at least 8 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Password cannot exceed 50 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                    message:
                      "Password must contain uppercase, lowercase, number and special character",
                  },
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Confirm Password */}
        <div className="col-span-1">
          <FormField
            label="Confirm password"
            required
            id="confirmPassword"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <div className="relative">
              <LockKeyhole
                size={16}
                strokeWidth={1.5}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9BA3]"
              />

              <CustomInput
                id="confirmPassword"
                type={showPasswords ? "text" : "password"}
                placeholder="Repeat your password"
                error={errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
                className="h-[42px] pl-10 pr-3 text-[12px]"
              />
            </div>
          </FormField>
        </div>

        {/* Show Passwords */}
        <div className="col-span-2 flex justify-end -mt-3">
          <button
            type="button"
            onClick={() => setShowPasswords(!showPasswords)}
            className="flex items-center gap-1 text-[#06B6D4] text-[12px] font-dm-sans font-semibold p-0 border-0"
          >
            {showPasswords ? (
              <EyeOff size={14} strokeWidth={1.8} />
            ) : (
              <Eye size={14} strokeWidth={1.8} />
            )}
            {showPasswords ? "Hide Password" : "Show Password"}
          </button>
        </div>

        {/* Referrer Code */}
        <div className="col-span-1">
          <FormField
            label="Referrer code"
            id="referralCode"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="referralCode"
              type="text"
              placeholder="Optional"
              {...register("referralCode")}
              className="h-[42px] px-3 text-[12px]"
            />
          </FormField>
        </div>

        {/* Referred From */}
        <div className="col-span-1">
          <FormField
            label="Referred from"
            id="referredFrom"
            labelColor="text-[#52636B]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="referredFrom"
              type="text"
              placeholder="Friend, social media..."
              {...register("referredFrom")}
              className="h-[42px] px-3 text-[12px]"
            />
          </FormField>
        </div>

        {/* Profile Avatar */}
        <div className="col-span-2">
          <p className="text-[#52636B] dark:text-slate-300 text-[11px] font-semibold mb-2">
            Choose your profile avatar
            <span className="text-red-400 ml-1">*</span>
          </p>

          <div className="flex items-center gap-2">
            {avatars.map((avatar, index) => (
              <Button
                key={index}
                type="button"
                onClick={() => {
                  setSelectedAvatar(index);
                  setValue("avatar", avatar);
                }}
                className={`relative w-10 h-10 rounded-lg border text-[21px] p-0 ${selectedAvatar === index ? "border-[#06B6D4] bg-[#E8FAFC] dark:bg-[#123444]" : "border-[#DCE3E5] dark:border-slate-600 bg-[#F3F8F7] dark:bg-[#111B2C]"}`}
              >
                <img src={avatar} alt={`Avatar ${index + 1}`} />

                {selectedAvatar === index && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#06B6D4] text-white flex items-center justify-center text-[9px]">
                    ✓
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="col-span-2">
          <Button
            type="submit"
            className="w-full h-[42px] mt-1 text-[12px] font-semibold shadow-[0_5px_12px_rgba(6,182,212,0.25)]"
          >
            Create account
            <ArrowRight size={15} strokeWidth={1.8} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
