import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { endpoints } from "../services/testService";

import Checker from "../assets/icons/Checker.png";
import PageHero from "../components/common/PageHero";
import Button from "../components/ui/Button";

function TestSeriesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("description");
  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const response = await endpoints.getTest(id);

        const data = response.data.data;

        setBatch({
          id: data.paper_id,
          title: data.paper_name,
          tag: data.discount_percent > 0 ? "SUCCESS BATCH" : "",
          description: data.description
            ?.replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .trim(),
          attempt: data.attempt ?? "",
          group: data.group ?? data.paper_name,
          price: `₹${data.price}`,
          oldPrice: `₹${data.mrp}`,
          save: `Save ₹${Number(data.mrp || 0) - Number(data.price || 0)}`,
        });
      } catch (error) {
        console.error("Error fetching test series:", error);
        setError("Failed to load test series.");
      } finally {
        setLoading(false);
      }
    };

    fetchTest();
  }, [id]);

  if (loading) {
    return <p>Loading test series...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!batch) {
    return <p>Test series not found.</p>;
  }

  return (
    <section className="bg-[#F5F4F1] dark:bg-[#07101A] min-h-screen">
      {/* Hero */}
      <PageHero
        className="px-4 pb-10 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pb-14 lg:pt-40 xl:px-24 xl:pt-48"
        badge="CA FOUNDATION · SUCCESS BATCH"
        title={batch?.title}
        titleClassName="text-[38px] leading-tight sm:text-[52px] lg:text-[64px] xl:text-[72px] xl:leading-none"
      />

      {/* Main */}
      <div className="px-4 py-8 sm:px-8 sm:py-10 md:px-12 lg:px-16 lg:py-12 xl:px-20 xl:py-16">
        <div className="wide-screen-content grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr] lg:gap-8">
          {/* Left */}
          <div className="flex flex-col gap-5">
            {/* Checker Image */}
            <div className="h-56 overflow-hidden rounded-[8px] border border-[#E2E8F0] sm:h-72 lg:h-[400px]">
              <img
                src={Checker}
                alt="Test series"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tabs + Content */}
            <div className="bg-white dark:bg-[#1B2335] rounded-[8px] overflow-hidden">
              {/* Tabs */}
              <div className="flex items-center gap-4 px-3 py-2 border-b border-[#E2E8F0] dark:border-slate-700">
                <button
                  type="button"
                  onClick={() => setActiveTab("description")}
                  className={`rounded-full px-4 py-2 text-[12px] font-bold ${activeTab === "description" ? "bg-[#172033] text-white" : "text-[#5A6577] dark:text-slate-300"}`}
                >
                  Description
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("what-you-get")}
                  className={`rounded-full px-4 py-2 text-[12px] font-bold ${activeTab === "what-you-get" ? "bg-[#172033] text-white" : "text-[#5A6577] dark:text-slate-300"}`}
                >
                  What you get
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("schedule")}
                  className={`rounded-full px-4 py-2 text-[12px] font-bold ${activeTab === "schedule" ? "bg-[#172033] text-white" : "text-[#5A6577] dark:text-slate-300"}`}
                >
                  Schedule
                </button>
              </div>

              {/* Tab Content */}
              <div className="px-4 py-5 flex flex-col gap-4">
                {/* Description */}
                {activeTab === "description" && (
                  <>
                    <h2 className="text-[#101F3C] dark:text-slate-100 text-[18px] font-inter font-bold">
                      About this batch
                    </h2>

                    <p className="w-full text-[#5A6577] dark:text-slate-300 text-[14px] font-inter leading-[1.6]">
                      {batch.description}
                    </p>

                    <p className="w-full text-[#5A6577] dark:text-slate-300 text-[14px] font-inter leading-[1.6]">
                      Every paper is set at ICAI difficulty by faculty who have
                      taught this level for years. You write it by hand under
                      exam conditions, upload a single scanned PDF, and get it
                      back annotated within 48 hours — with a marks breakdown
                      and presentation notes.
                    </p>
                  </>
                )}

                {/* What You Get */}
                {activeTab === "what-you-get" && (
                  <>
                    <h2 className="text-[#101F3C] dark:text-slate-100 text-[18px] font-inter font-bold">
                      What you get
                    </h2>

                    <p className="text-[#5A6577] dark:text-slate-300 text-[14px] font-inter leading-[1.6]">
                      {batch.description}
                    </p>

                    <div className="flex flex-col gap-3 text-[#5A6577] dark:text-slate-300 text-[14px] font-inter">
                      <p>✓ Chapter-wise tests</p>
                      <p>✓ 2 full-course tests</p>
                      <p>✓ 2 ICAI-style MTPs</p>
                      <p>✓ Paper evaluation and feedback</p>
                      <p>✓ Marks breakdown and presentation notes</p>
                    </div>
                  </>
                )}

                {/* Schedule */}
                {activeTab === "schedule" && (
                  <>
                    <h2 className="text-[#101F3C] dark:text-slate-100 text-[18px] font-inter font-bold">
                      Schedule
                    </h2>

                    <p className="text-[#5A6577] dark:text-slate-300 text-[14px] font-inter leading-[1.6]">
                      Tests are scheduled throughout the preparation period so
                      that you can complete each chapter and evaluate your
                      preparation before the final examination.
                    </p>

                    <div className="flex flex-col gap-3 text-[#5A6577] dark:text-slate-300 text-[14px] font-inter">
                      <p>Chapter-wise tests — As per syllabus progression</p>

                      <p>
                        Full-course tests — After completion of the syllabus
                      </p>

                      <p>MTPs — Before the examination</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-white dark:bg-[#1B2335] rounded-[8px] p-5 flex flex-col gap-4">
              <p className="text-[#0E9CBD] text-[11px] font-inter font-bold">
                {batch?.tag}
              </p>

              <div className="flex flex-col gap-1">
                <h2 className="text-[#101F3C] dark:text-slate-100 text-[24px] font-arial font-bold">
                  {batch?.title}
                </h2>

                <p className="text-[#5A6577] dark:text-slate-300 font-inter text-[14px]">
                  {batch?.description}
                </p>
              </div>

              {/* Attempt */}
              <div className="flex flex-col gap-2">
                <p className="text-[#8E97A6] text-[11px] font-bold">ATTEMPT</p>

                <div className="border border-[#E2E8F0] dark:border-slate-600 rounded-[10px] px-3 py-3">
                  <p className="text-[#172033] dark:text-slate-200 text-[9px]">
                    {batch?.attempt}
                  </p>
                </div>
              </div>

              {/* Group */}
              <div className="flex flex-col gap-2">
                <p className="text-[#94A3B8] text-[7px] font-semibold">GROUP</p>

                <div className="border border-[#E2E8F0] dark:border-slate-600 rounded-[10px] px-3 py-3">
                  <p className="text-[#172033] dark:text-slate-200 text-[9px]">
                    {batch?.group}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-[#E2E8F0] dark:border-slate-700 pt-4 flex flex-col gap-2">
                <p className="text-[#8E97A6] font-inter text-[11px] font-bold">
                  AVAILABLE AT
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[#101F3C] dark:text-slate-100 text-[36px] font-georgia font-bold">
                      {batch?.price}
                    </span>

                    <span className="mt-3 text-[#8E97A6] text-[16px] font-georgia line-through">
                      {batch?.oldPrice}
                    </span>
                  </div>

                  <span className="bg-[#E6F8FC] dark:bg-[#123444] text-[#0E9CBD] rounded-full px-2 py-1 text-[12px] font-inter font-bold">
                    {batch?.save}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => navigate(`/test-series/${batch.id}/checkout`)}
                variant="primary"
                className="py-3"
              >
                Buy now
                <ArrowRight size={14} className="text-[#FFFFFF] font-bold" />
              </Button>

              {/* Benefits */}
              <div className="flex flex-col gap-3 pt-1">
                <div className="flex items-center gap-2 text-[#5A6577] dark:text-slate-300 text-[12px] font-dm-sans">
                  <Clock size={14} className="text-[#0E9CBD]" />
                  Papers returned within 48 hours
                </div>

                <div className="flex items-center gap-2 text-[#5A6577] dark:text-slate-300 text-[12px] font-dm-sans">
                  <CheckCircle size={14} className="text-[#0E9CBD]" />
                  Full refund before the first test
                </div>

                <div className="flex items-center gap-2 text-[#5A6577] dark:text-slate-300 text-[12px] font-dm-sans">
                  <MessageCircle size={14} className="text-[#0E9CBD]" />
                  Mentor support on WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestSeriesDetail;
