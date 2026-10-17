import {
  CalendarDays,
  Clock,
  ArrowUpRight,
  Search,
  ChevronDown,
  SlidersHorizontal,
  MoveRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestSeriesCard from "../components/testSeries/TestSeriesCard";
import PageHero from "../components/common/PageHero";
import Button from "../components/ui/Button";
import { endpoints } from "../services/testService";

function TestSeries() {
  const navigate = useNavigate();

  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const filters = [
    {
      name: "course",
      label: "All courses",
    },
    {
      name: "level",
      label: "All levels",
    },
    {
      name: "attempt",
      label: "All attempts",
    },
  ];

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await endpoints.getTestSeries();
        setBatches(response.data.data.test_series);
      } catch (error) {
        console.error("Error fetching batches:", error);
        setError("Failed to load test series.");
      } finally {
        setLoading(false);
      }
    };

    fetchBatches();
  }, []);

  if (loading) {
    return <p>Loading test series...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="w-full overflow-x-hidden">
      <PageHero
        breadcrumb="Test Series"
        title="Write. Submit. Get Marked."
        containerClassName="wide-screen-content"
        titleClassName="text-4xl sm:text-5xl lg:text-[72px] lg:max-w-xl leading-[1.1] sm:leading-[1.05] lg:leading-[0.95]"
        description="Nine batches across CA Foundation, Intermediate and Final — each paper set and checked by qualified faculty, with live guidance sessions between tests."
        descriptionClassName="text-sm sm:text-[15px] max-w-xl w-full"
      />

      <div className="bg-white dark:bg-[#09111B] px-4 sm:px-8 md:px-16 lg:px-28 py-5">
        <div className="wide-screen-content flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-2 text-[#94A3B8] shrink-0">
              <SlidersHorizontal size={15} />

              <span className="text-[12px] font-semibold tracking-[1.5px]">
                FILTER
              </span>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
              {filters.map((filter) => (
                <div className="relative w-full sm:w-[180px]" key={filter.name}>
                  <select
                    name={filter.name}
                    className="w-full appearance-none border border-[#E2E8F0] dark:border-slate-600 rounded-full px-4 pr-10 py-2 font-inter font-medium text-[14px] text-[#5A6577] dark:text-slate-300 bg-white dark:bg-[#1B2335] outline-none cursor-pointer"
                  >
                    <option value="">{filter.label}</option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#5A6577] dark:text-slate-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-3 md:flex-row">
            {/* Search */}
            <div className="w-full md:flex-1 lg:w-[250px] lg:flex-none px-4 py-2 rounded-full border border-[#E2E8F0] dark:border-slate-600 bg-white dark:bg-[#1B2335] flex items-center gap-3">
              <Search size={16} className="text-[#94A3B8] shrink-0" />

              <input
                type="text"
                placeholder="Search batches or courses"
                className="w-full min-w-0 bg-transparent outline-none text-[14px] text-[#64748B] dark:text-slate-100 placeholder:text-[#94A3B8] font-dm-sans"
              />
            </div>

            <div className="flex gap-2 md:shrink-0">
              <Button
                className="w-12 h-12 p-0 md:w-auto md:h-auto md:px-8 md:py-2"
                title="Apply Filters"
              >
                <p className="hidden md:block">Apply Filters</p>
                <MoveRight size={18} />
              </Button>

              <Button
                type="button"
                className="px-8 py-2 rounded-full border border-[#E2E8F0] dark:border-slate-600 text-[#5A6577] dark:text-slate-300 dark:hover:bg-slate-800 text-[14px] font-semibold"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F4F1] dark:bg-[#050F18] px-4 sm:px-8 md:px-16 lg:px-28 py-8">
        <div className="wide-screen-content flex items-center justify-between border-b border-[#E2E8F0] dark:border-slate-700 pb-4">
          <h2 className="text-[#101F3C] dark:text-slate-100 text-[18px] sm:text-[20px] font-bold font-dm-sans">
            All batches
          </h2>

          <p className="text-[#5A6577] dark:text-slate-400 text-[12px] font-dm-sans">
            {batches.length} of {batches.length} shown
          </p>
        </div>

        <div className="wide-screen-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {batches.length === 0 ? (
            <p>No test series available.</p>
          ) : (
            batches.map((batch) => (
              <TestSeriesCard
                key={batch.paper_id}
                batch={{
                  id: batch.paper_id,
                  title: batch.paper_name,
                  tag: batch.discount_percent > 0 ? "POPULAR" : "",
                  description: batch.description
                    ?.replace(/<[^>]*>/g, "")
                    .replace(/&nbsp;/g, " ")
                    .trim(),
                  price: `₹${batch.price}`,
                  oldPrice: `₹${batch.mrp}`,
                  discount: `${batch.discount_percent}% OFF`,
                  image: batch.cover_photo_url,
                  batch: batch.paper_name,
                }}
                onNavigate={(id) => navigate(`/test-series/${id}`)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default TestSeries;
