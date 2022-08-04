import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes";
import "../css/globalstyle.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const AppBreadcrumb = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="m-0 ms-2 d-flex">
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <div className="bc" key={match.pathname}>
          <Link
            className={`${
              index >= breadcrumbs.length - 1
                ? "breadcumbActiveStyle"
                : "primary"
            }`}
            to={match.pathname || ""}
          >
            {breadcrumb}
          </Link>

          {index < breadcrumbs.length - 1 && (
            <span className="px-1 text-dark-50">{"/"}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(AppBreadcrumb);
