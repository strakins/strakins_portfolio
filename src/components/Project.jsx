import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project2 from "../assets/images/devdetails.jpg";
import project1 from '../assets/images/strakins_homes1.jpg'
import project4 from "../assets/images/strakinsai.png";
import project5 from "../assets/images/countriesapiproject.jpg";
import project_person from "../assets/images/hero.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Strakins Home",
      github_link: "https://github.com/strakins/strakins_homes",
      live_link: "https://strakins-homes.vercel.app/",
    },
    {
      img: project2,
      name: "Portfolio Site",
      github_link: "https://github.com/strakins/Developers-Details/tree/master",
      live_link: "https://strakins.github.io/Developers-Details/",
    },
    {
      img: project4,
      name: "AI Prompt App",
      github_link: "https://github.com/strakins/AI_ASSISTANT",
      live_link: "https://ai-assistant-strakins.vercel.app/",
    },
    {
      img: project5,
      name: "Country Demography",
      github_link: "https://github.com/strakins/countries_demography/tree/master",
      live_link: "https://strakins.github.io/countries_demography/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" className="rotate-12 w-52 ml-12" />
        </div>
      </div>
    </section>
  );
};

export default Project;
