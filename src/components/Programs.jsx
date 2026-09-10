import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Programs() {
  return (
    <section>
      <div className="h-full bg-[url('assets/p1.jpg')] bg-cover bg-center">
        <div className="px-10 pt-30 pb-10">
          <p className="text-[#06B6D4]">
            CA PROGRAM · FOUNDATION & INTERMEDIATE
          </p>
          <h1 className="font-bold text-[#FFFFFF]">Chartered Accountancy</h1>
          <p className="text-[#FFFFFF8C] w-130">
            Teachers with 7-8 years of CPT & Foundation experience prepare and
            check every test paper. ICAI-level difficulty, result-oriented
            approach.
          </p>
          <Link className="inline-flex gap-2">
            VIEW PACKAGES
            <span>
              <ArrowRight/>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Programs;
