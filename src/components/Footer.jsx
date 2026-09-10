import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-white grid grid-cols-3 gap-4 px-4 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-[12px] text-[#06B6D4]">Courses</p>
        <p className="text-[12px] text-[#111111CC]">
          CHARTERED ACCOUNTANCY (CA)
        </p>
        <p className="text-[12px] text-[#111111CC]">
          COST & MANAGEMENT ACCOUNTANCY (CMA)
        </p>
        <p className="text-[12px] text-[#111111CC]">COMPANY SECRETARY (CS)</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img src={logo} className="h-[41px] w-[46px]"/>
          <p className="text-[#06B6D4] font-bold text-[23px]">
            Chartered <span className="text-[#111111]">Studies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
