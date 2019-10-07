const getAlertError = (error) => {
  const { response } = error;
  if (!response) return error.message;
  switch (response.status) {
    case 404: return 'Bad request';
    case 500: return 'Internal server error';
    case 401: return 'Unauthorised!';
    default: return 'Network problem!';
  }
};

export { getAlertError };
