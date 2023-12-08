import "../blocks/SideBar.css";

import { Link } from "react-router-dom";
import avatar from "../images/avatar.svg";

const SideBar = () => {
  return (
    <section className="sidebar">
      <div>
        <img src={avatar} alt="avatar"></img>
      </div>
      <p>
        <Link className="sidebar__link" to="profile">
          Name
        </Link>
      </p>
    </section>
  );
};

export default SideBar;
