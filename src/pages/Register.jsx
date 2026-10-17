import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/common/AuthLayout";
import RegisterForm from "../components/register/RegisterForm";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <AuthLayout
      auth="true"
      leftLabel="BEGIN WITH PURPOSE"
      className="h-full justify-center p-6 sm:p-10 md:p-12 xl:p-16 2xl:p-20"
      leftTitle={
        <>
          Build your <span className="text-[#06B6D4]">professional edge.</span>
        </>
      }
      leftDescription="Join a community of focused learners preparing for the exams that shape tomorrow’s leaders."
      leftStepTitle="One focused step at a time."
      leftStepDescription="Your professional journey starts here."
      titleLabel="NEW STUDENT"
      title="Create your account"
      description="Set up your profile and start learning with direction."
      formContent={
        <RegisterForm
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          errors={errors}
          onSubmit={onSubmit}
        />
      }
      footerContent={
        <div className="flex items-center justify-end mt-5 text-[10px]">
          <p className="text-[#A0ADB2]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#06B6D4] font-semibold">
              Log in here
            </Link>
          </p>
        </div>
      }
    />
  );
}

export default Register;
