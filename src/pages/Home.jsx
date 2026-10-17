import Hero from "../components/home/Hero";
import Programs from "../components/home/Programs";
import Promise from "../components/home/Promise";
import Mentors from "../components/home/Mentors";
import Toppers from "../components/home/Toppers";
import StudentStories from "../components/home/StudentStories";
import Process from "../components/home/Process";
import GetInTouch from "../components/home/GetInTouch";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Programs />
      <Promise />
      <Toppers />
      <StudentStories />
      <Process />
      <Mentors />
      <GetInTouch />
    </div>
  );
}

export default Home;
