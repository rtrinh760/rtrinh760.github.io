import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div>
      <h1>Unexpected error occurred.</h1>
      <p>Please try again.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
