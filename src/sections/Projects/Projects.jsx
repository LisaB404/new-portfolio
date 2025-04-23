import "./Projects.css";
import Wave from "../../components/Wave/Wave";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { projectData, responsive } from "./projectsData";
import CustomButtonGroup from "../../components/CustomButtonGroup/CustomButtonGroup";

export default function Projects({ deviceType }) {
  const project = projectData.map((item) => (
    <ProjectCard
      key={item.id}
      url={item.imageurl}
      name={item.name}
      description={item.description}
      link={item.link}
    />
  ));
  return (
    <>
      <Wave style={{ transform: "rotate(0deg)" }} />
      <div className="projects-container">
        <h2 className="page-title">Projects</h2>
        <div className="carousel-wrapper">
          <Carousel
            showDots={true}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroup />}
            infinite={true}
            autoPlay={deviceType !== "mobile"}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 0.8s ease-in-out"
            responsive={responsive}
            dotListClass="custom-dot-list-style"
            renderDotsOutside={true}
          >
            {project}
          </Carousel>
        </div>
      </div>
      <Wave />
    </>
  );
}
