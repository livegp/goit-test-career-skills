import { useRouteError, useNavigate } from 'react-router-dom';

import useErrorMessage from '../../hooks/useErrorMessage';

function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorMessage = useErrorMessage(error);

  console.log('error', error);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Oops!</h1>
      <p>{errorMessage}</p>
      <button type="button" onClick={goBack}>
        ← Go back
      </button>
    </div>
  );
}

export default ErrorBoundary;
