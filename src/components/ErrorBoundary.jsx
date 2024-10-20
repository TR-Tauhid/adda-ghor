import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <div className="leading-loose space-y-20 mt-10">
      <Helmet><title>Home | Error</title></Helmet>
      <h1>
        Error Happened ::
        {error.status} {error.statusText}
      </h1>
      <Link
        className="btn btn-ghost bg-style border-2 border-white hover:scale-150"
        to="/"
        >
        Home
      </Link>
    </div>
  ) : (
    <div className="leading-loose space-y-20 mt-10">
      <Helmet><title>Home | Error</title></Helmet>
      <h1>
        Error Happened ::
        {error.message || error} <br />
        {error.status} {error.statusText}
      </h1>
      <Link
        className="btn btn-ghost bg-style border-2 border-white hover:scale-150"
        to="/"
      >
        Home
      </Link>
    </div>
  );
}
