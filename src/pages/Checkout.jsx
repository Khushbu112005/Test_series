import { useParams } from "react-router-dom";
import PageHero from "../components/common/PageHero";
import StudentDetailsForm from "../components/common/StudentDetailsForm";

function Checkout() {
  const { id } = useParams();

  const features = [
    {
      icon: "🔒",
      text: "Secure Payment",
    },
    {
      icon: "✅",
      text: "Instant Access",
    },
    {
      icon: "📞",
      text: "24/7 Support",
    },
    {
      icon: "💯",
      text: "100% Authentic",
    },
  ];

  const batches = [
    {
      id: 1,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 2,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 3,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 4,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 5,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 6,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 7,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
    {
      id: 8,
      title: "CA FND Success Batch",
      tag: "POPULAR",
      description: "Chapter wise + 2 full course + 2 MTPs",
      date: "SEP 2026 - JAN 2027",
      batch: "CA FND SUCCESS BATCH SEP",
      price: "₹2000",
      oldPrice: "₹4000",
      discount: "50% OFF",
    },
  ];

  const batch = batches.find((item) => item.id === Number(id));

  return (
    <section className="bg-[#F4F3EF] text-[#0E1B30] dark:bg-[#07121E] dark:text-slate-100">
      <PageHero
        showHomeIcon={false}
        padding="px-4 pt-28 pb-8 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pt-40 xl:px-28"
        backgroundClassName="bg-[#F4F3EF] dark:bg-[#050F1A]"
        homeColor="text-[#06B6D4]"
        breadcrumbLinkColor="text-[#06B6D4]"
        breadcrumbCurrentColor="text-[#52636B]"
        breadcrumbSeparatorColor="text-[#94A3B8]"
      />

      <section className="px-4 py-4 sm:px-8 md:px-12 lg:px-16 xl:px-28">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-8 lg:gap-0">
          {/* Left Part */}
          <div className="lg:col-span-3">
            {/* Product Details */}
            <div className="bg-white dark:bg-[#1B2335] rounded-sm border border-[#E5E7EB] dark:border-slate-700 overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E5E7EB] dark:border-slate-700 font-inter">
                <h2 className="font-georgia font-bold text-[14px] text-[#0E1B30] dark:text-slate-100">
                  Product Details
                </h2>
              </div>

              <div className="px-4 py-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-bold font-inter text-[14px] text-[#0E1B30] dark:text-slate-100">
                      {batch?.batch}
                    </p>

                    <p className="text-[12px] font-inter text-[#99A1AF] dark:text-slate-400 mt-1">
                      {batch?.date}
                    </p>

                    <p className="text-[10px] font-inter text-[#94A3B8] dark:text-slate-400">
                      Inclusive of all taxes
                    </p>
                  </div>

                  <p className="text-[16px] font-bold text-[#06B6D4]">
                    {batch?.price}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-[14px] font-inter text-[#6A7282] dark:text-slate-300">
                    Discount
                  </p>

                  <p className="text-[14px] text-[#0B1220] dark:text-slate-100">
                    {batch?.discount}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <p className="text-[16px] font-bold text-[#0E1B30] dark:text-slate-100">Total</p>

                  <p className="text-[16px] font-bold text-[#06B6D4]">
                    {batch?.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="bg-white dark:bg-[#1B2335] rounded-lg border border-[#E5E7EB] dark:border-slate-700 overflow-hidden mt-3">
              <div className="px-4 py-3 border-b border-[#E5E7EB] dark:border-slate-700">
                <h2 className="font-georgia font-bold text-[16px] text-[#0E1B30] dark:text-slate-100">
                  Coupon Code
                </h2>
              </div>

              <div className="p-3">
                <div className="bg-[#EAF7F9] dark:bg-[#123444] border border-[#96EFFE] dark:border-cyan-800 rounded px-3 py-2.5">
                  <p className="text-[9px] text-[#536870] dark:text-slate-200">
                    Use
                    <span className="text-[#06B6D4] font-bold">
                      {" "}
                      OFFER30
                    </span>{" "}
                    to get 30% OFF — valid till 31 December 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1B2335] rounded-lg px-3 py-2.5 flex items-center gap-2"
                >
                  <span className="text-[12px]">{feature.icon}</span>

                  <span className="text-[12px] text-[#1E3251] dark:text-slate-200">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Part*/}
          <div className="lg:col-span-5 lg:pl-6">
            {/* Form */}
            <StudentDetailsForm batch={batch} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Checkout;
