import { isRouteErrorResponse } from 'react-router-dom';

const useErrorMessage = error =>
  `Error: ${
    isRouteErrorResponse(error)
      ? `${error.status}: ${error.statusText}. ${error.data?.message || ''}`
      : error instanceof Error
        ? error.message
        : typeof error === 'string'
          ? error
          : (() => {
              console.error(error);
              return 'Unknown error';
            })()
  }`;

export default useErrorMessage;
