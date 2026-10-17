import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white dark:bg-[#050F1A] dark:border-t px-6 py-12 sm:px-10 lg:px-32">
      <footer className="wide-screen-content grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20 lg:items-start">
        {/* Courses */}
        <div className="flex flex-col items-start gap-2">
          <Link
            to="/courses"
            className="text-[12px] text-[#06B6D4] font-semibold"
          >
            Courses
          </Link>
          <Link
            to="/courses/ca"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            CHARTERED ACCOUNTANCY (CA)
          </Link>
          <Link
            to="/courses/cma"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            COST & MANAGEMENT ACCOUNTANCY (CMA)
          </Link>
          <Link
            to="/courses/cs"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            COMPANY SECRETARY (CS)
          </Link>
        </div>

        {/* Logo / Contact */}
        <div className="flex flex-col lg:items-center gap-4">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full">
                <img
                  src={logo}
                  alt="Chartered Studies"
                  className="h-[41px] w-[46px] object-contain"
                />
              </div>
            </Link>

            <p className="font-inter text-[23px] font-bold text-[#06B6D4]">
              Chartered
              <span className="text-[#111111] dark:text-white"> Studies</span>
            </p>
          </div>
          <div className="w-60 border-t border-[#00000080] dark:border-white/30"></div>

          <div className="flex lg:items-center lg:justify-center gap-6">
            <Link
              to="/contact"
              className="text-[#06B6D4] text-[12px] whitespace-nowrap font-bold"
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/contact"
              className="text-[#06B6D4] text-[12px] whitespace-nowrap font-bold"
            >
              EMAIL US
            </Link>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-start gap-2 lg:pl-20">
          <Link to="/privacy-policy" className="text-[#06B6D4] text-[12px]">
            Legal
          </Link>

          <Link
            to="/privacy-policy"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-conditions"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/refund-policy"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            Refund Policy
          </Link>

          <Link
            to="/shipping&delivery-policy"
            className="text-[12px] text-[#111111CC] dark:text-[#FFFFFFCC] font-semibold"
          >
            Shipping & Delivery Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
