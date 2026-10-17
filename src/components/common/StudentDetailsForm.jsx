import FormField from "../ui/FormField";
import CustomInput from "../ui/CustomInput";
import CustomTextArea from "../ui/CustomTextArea";
import CustomSelect from "../ui/CustomSelect";
import Button from "../ui/Button";

function StudentDetailsForm({ batch }) {
  const stateOptions = [
    {
      value: "",
      label: "Select State",
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

  const cityOptions = [
    {
      value: "",
      label: "Select State First",
    },
    {
      value: "mumbai",
      label: "Mumbai",
    },
    {
      value: "ahmedabad",
      label: "Ahmedabad",
    },
    {
      value: "delhi",
      label: "Delhi",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1B2335] rounded-sm border border-[#E5E7EB] dark:border-slate-700 p-4">
      <h2 className="font-georgia font-bold text-[14px] text-[#0E1B30] dark:text-slate-100 mb-4">
        Student Details
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* First Name */}
        <div className="sm:col-span-1">
          <FormField
            label="First Name"
            required
            id="firstName"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold "
          >
            <CustomInput
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              className="h-[42px] text-[10px]"
            />
          </FormField>
        </div>

        {/* Last Name */}
        <div className="sm:col-span-1">
          <FormField
            label="Last Name"
            required
            id="lastName"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              className="h-[42px] text-[10px]"
            />
          </FormField>
        </div>

        {/* Mobile */}
        <div className="sm:col-span-2">
          <FormField
            label="Mobile Number"
            required
            id="mobile"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <div className="flex gap-2">
              <div className="flex-1">
                <CustomInput
                  id="mobile"
                  type="tel"
                  placeholder="Enter Your Mobile No"
                  className="h-[42px] text-[10px]"
                />
              </div>

              <Button
                type="button"
                className="h-[42px] whitespace-nowrap px-2 text-[11px] sm:px-4 sm:text-[12px]"
              >
                Send OTP
              </Button>
            </div>
          </FormField>
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <FormField
            label="Email address"
            required
            id="email"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="email"
              type="email"
              placeholder="Enter Your Email ID"
              className="h-[42px] text-[10px]"
            />
          </FormField>
        </div>

        {/* Create Password */}
        <div className="sm:col-span-1">
          <FormField
            label="Create Password"
            required
            id="password"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="password"
              type="password"
              placeholder="••••••••••"
              className="h-[42px] text-[10px]"
            />
          </FormField>
        </div>

        {/* Confirm Password */}
        <div className="sm:col-span-1">
          <FormField
            label="Confirm Your Password"
            required
            id="confirmPassword"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomInput
              id="confirmPassword"
              type="password"
              placeholder="••••••••••"
              className="h-[42px] text-[10px]"
            />
          </FormField>
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <FormField
            label="Address"
            required
            id="address"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomTextArea
              id="address"
              placeholder="Enter Your address"
              rows={3}
              className="h-[70px] text-[10px]"
            />
          </FormField>
        </div>

        {/* State */}
        <div className="sm:col-span-1">
          <FormField
            label="State"
            required
            id="state"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomSelect id="state" options={stateOptions} />
          </FormField>
        </div>

        {/* City */}
        <div className="sm:col-span-1">
          <FormField
            label="City"
            required
            id="city"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <CustomSelect id="city" options={cityOptions} />
          </FormField>
        </div>

        {/* Coupon */}
        <div className="sm:col-span-2">
          <FormField
            label="Coupon Code"
            id="coupon"
            labelColor="text-[#1E3251]"
            className="text-[12px] font-semibold"
          >
            <div className="flex gap-2">
              <div className="flex-1">
                <CustomInput
                  id="coupon"
                  type="text"
                  placeholder="Enter coupon code"
                  className="h-[42px] text-[10px]"
                />
              </div>

              <Button type="button" className="h-[42px] px-4 text-[12px]">
                Apply
              </Button>
            </div>
          </FormField>
        </div>

        {/* Summary */}
        <div className="sm:col-span-2">
          <div className="bg-[#0E1B30] rounded px-3 py-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-white">Subtotal</span>

              <span className="text-[14px] text-white">{batch?.price}</span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-[16px] font-bold text-white">Total</span>

              <span className="text-[18px] font-bold text-[#06B6D4]">
                {batch?.price}
              </span>
            </div>
          </div>
        </div>

        {/* Proceed */}
        <div className="sm:col-span-2">
          <Button
            type="button"
            className="w-full h-[42px] mt-[-1px] text-[12px] font-semibold"
          >
            Proceed to Payment →
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailsForm;
