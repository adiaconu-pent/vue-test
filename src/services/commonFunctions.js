const getAlertError = (error) => {
  const { response } = error;
  if (!response) return error.message;
  switch (response.status) {
    case 404:
      return 'Bad request';
    case 500:
      return 'Internal server error';
    case 401:
      return 'Unauthorised!';
    default:
      return 'Network problem!';
  }
};

const getDateInt = date => Math.trunc(date.getTime() / 1000);

const getFirstMothInt = () => {
  const today = new Date();
  today.setMonth(0);
  getDateInt(today);
};

const getDateFromInt = date => new Date(date * 1000).toLocaleDateString();

export {
  getAlertError, getFirstMothInt, getDateFromInt, getDateInt,
};
