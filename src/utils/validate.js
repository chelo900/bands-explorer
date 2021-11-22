export const validate = (user, users) => {
  if (user.email && user.password) {
    const validUser = users.find(
      (element) =>
        element.email === user.email && element.password === user.password
    );

    return validUser ? true : false;
  }
  return false;
};
