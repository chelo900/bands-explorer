export function validateAccount(user) {
  const errors = {};
  if (!user.email) {
    errors.email = "Field email is required";
  }
  if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      user.email
    )
  ) {
    errors.email = "Not valid Email";
  }
  if (!user.password) {
    errors.password = "Field password is required";
  } else if (`${user.password}`.length < 8) {
    errors.password = "The password must be at least 8 characters";
  }
  if (!user.repeatPassword) {
    errors.repeatPassword = "Field repeat password required";
  } else if (user.password !== user.repeatPassword) {
    errors.repeatPassword = "Passwords do not match";
  }

  return errors;
}
