import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/" home>
              Home
            </Link>
          </li>
        </ol>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default layout;
