import { ProjectItems } from "../../db";
import SingleProject from "../SingleProject/SingleProject";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="ProjectTitle">Project</div>
      {ProjectItems.map((item) => (
        <SingleProject item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
