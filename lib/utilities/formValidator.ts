const TYPES_REGEX = {
  NAME: /^[A-Za-z ]+$/,
  PASSWORD: /^[A-Za-z0-9]{5,}$/,
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  WHITESPACE: /^[\s]+$/,
};

export const registerValidator = (value: any, name: string) => {
  let error;

  if (!value || TYPES_REGEX.WHITESPACE.test(value)) {
    return (error = 'Field required.');
  }

  switch (name) {
    case 'firstName':
      if (!TYPES_REGEX.NAME.test(value) || value.length < 3) {
        return (error = 'Invalid first name');
      }
      break;

    case 'lastName':
      if (!TYPES_REGEX.NAME.test(value)) {
        return (error = 'Invalid last name');
      }
      break;

    case 'username':
      if (value.length <= 2) {
        return (error = 'Invalid username');
      }
      break;

    case 'emailAddress':
      if (!TYPES_REGEX.EMAIL.test(value)) {
        return (error = 'Invalid email address.');
      }
      break;

    case 'password':
      if (!TYPES_REGEX.PASSWORD.test(value)) {
        return (error = 'Invalid password.');
      }

      break;

    // case "confirmPassword":
    //   if (value.length <= 2) {
    //     return (error = "Invalid confirmPassword");
    //   }

    //   break;

    //referrence confirmPassword to password later.
  }

  return error;
};
