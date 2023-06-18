import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    {
      logo: "logo-linkedin",
      url: "https://www.linkedin.com/in/blessing-akinola-0073b9112/"
    },
    {
      logo: "logo-twitter",
      url: "https://twitter.com/straksman"
    }, 
    {
      logo: "logo-instagram",
      url: ""
    }, 
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="h-96 object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h3 className="md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-4xl text-2xl">
              Hello!
              <br />
            </span>
            My Name is <span>Blessing Akinola</span>
          </h3>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon, index) => (
              <div
                key={index}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.url} target="_blank" rel="noopener noreferrer"><ion-icon name={icon.logo}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
