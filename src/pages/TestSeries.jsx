import { House } from "lucide-react";

function TestSeries() {
  return (
    <section className="">
      <div
        className="px-28 py-48 bg-gradient-to-r
    from-[#155F75]
    via-[#181F31]
    via-[60%]
    to-[#171F31]"
      >
        <div className="flex flex-col gap-2 text-[10px] text-[#94A3B8]">
          <p className="text-[12px]">
            <span className="inline-flex items-center gap-2 text-[#FFFFFF80]">
              <House size={15}/>
              Home
              <span className="text-[#FFFFFF80] mx-2">›</span>
              <span className="text-white">Test Series</span>
            </span>
          </p>
          <h1 className="text-[#FFFFFF] font-bold text-[72px] w-150">
            Write. Submit. Get Marked.
          </h1>
          <p className="text-[15px] w-140">
            Nine batches across CA Foundation, Intermediate and Final — each
            paper set and checked by qualified faculty, with live guidance
            sessions between tests.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestSeries;
