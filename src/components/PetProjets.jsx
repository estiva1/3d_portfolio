import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { petprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PetProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_view,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col m-3 items-end card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient shadow-xl w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
            >
              <img
                src={github}
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(live_view, "_blank")}
              className="black-gradient shadow-xl w-10 h-10 mt-3 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={eye}
                alt="live demo"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const PetProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Pet-projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my pet-projects. Each one is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {petprojects.map((project, index) => (
          <PetProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(PetProjects, "");
