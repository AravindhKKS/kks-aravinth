import "./SingleProject.css";

const SingleProject = ({ item }) => {
  return (
    <div className="SingleProject">
      <div className="SingleProjectWrapper">
        <div className="SingleProjectLeft">
          <img src={item.Img} alt="" className="SingleProjectImg" />
        </div>
        <div className="SingleProjectRight">
          <div className="SingleProjectTitle">{item.Title}</div>
          <div className="SingleProjectDesc">{item.Desc}</div>
          <a href={item.Link} className="SingleProjectLink">
            {item.Link}
          </a>
        </div>
      </div>
    </div>
  );
};
export default SingleProject;
