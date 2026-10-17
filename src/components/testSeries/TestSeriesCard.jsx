import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import CA from "../../assets/images/CA.jpeg";

function TestSeriesCard({ batch, onNavigate }) {
  return (
    <div className="bg-white dark:bg-[#1B2335] p-3 flex flex-col gap-2 rounded-lg shadow-xs hover:shadow-md transition-shadow transition-transform duration-300 hover:-translate-y-1">
      <div className="h-fit md:h-70 lg:h-75 rounded-md overflow-hidden relative">
        <img
          src={CA}
          alt="CA Test Series"
          className="w-full h-full object-cover"
        />

        <div className="absolute left-0 bottom-0 w-full bg-[#061126] py-2 sm:py-3 text-center px-1">
          <p className="text-[#FFFFFF] font-dm-sans text-[8px] sm:text-[9px]">
            INDIA'S BEST TEST SERIES FOR CA EXAMS
          </p>

          <p className="text-[#22C3E6] text-[8px] sm:text-[9px] font-dm-sans font-bold mt-0.5 sm:mt-1">
            WHATSAPP FOR QUERIES : 93508 06110
          </p>
        </div>
      </div>

      <div className="px-1 py-2 sm:py-3 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <p className="flex-1 text-[#101F3C] dark:text-slate-100 text-[14px] sm:text-[15px] font-bold leading-tight">
            {batch.title}
          </p>

          <span className="bg-[#E5F8FC] dark:bg-[#123444] text-[#0E9CBD] rounded-full px-2 py-1 text-[9px] sm:text-[10px] font-bold shrink-0">
            {batch.tag}
          </span>
        </div>
      </div>

      <p className="text-[#5A6577] dark:text-slate-300 text-[12px] font-inter">
        {batch.description}
      </p>

      <div className="border border-[#DCE5E5] dark:border-slate-600 rounded-[7px] p-2 flex items-center gap-2 font-inter text-[#5A6577] dark:text-slate-300 text-[11px] sm:text-[12px] mt-2">
        <CalendarDays size={12} className="shrink-0" />
        <p className="truncate">{batch.date}</p>
      </div>

      <div className="border border-[#DCE5E5] dark:border-slate-600 rounded-[7px] p-2 flex items-center gap-2 font-inter text-[#5A6577] dark:text-slate-300 text-[11px] sm:text-[12px] mt-2">
        <Clock size={12} className="shrink-0" />
        <p className="truncate">{batch.batch}</p>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <span className="text-[#101F3C] dark:text-slate-100 text-[20px] sm:text-[24px] font-georgia font-bold">
            {batch.price}
          </span>

          <span className="text-[#8E97A6] text-[13px] sm:text-[14px] font-inter line-through">
            {batch.oldPrice}
          </span>
        </div>

        <span className="text-[#0E9CBD] text-[10px] sm:text-[11px] font-inter font-bold">
          {batch.discount}
        </span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => onNavigate(`${batch.id}/checkout`)}
          className="flex-1 bg-[#06B6D4] hover:bg-[#0891b2] font-arial text-[#FFFFFF] rounded-full py-2 text-[12px] font-bold transition-colors cursor-pointer"
        >
          Buy now
        </button>

        <button
          onClick={() => onNavigate(batch.id)}
          className="px-3 sm:px-4 py-2 border border-[#E2E8F0] dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-[#101F3C] dark:text-slate-100 text-[12px] font-bold flex items-center gap-1 transition-colors cursor-pointer"
        >
          Details
          <ArrowUpRight size={12} className="text-[#101F3C] dark:text-slate-100" />
        </button>
      </div>
    </div>
  );
}

export default TestSeriesCard;
