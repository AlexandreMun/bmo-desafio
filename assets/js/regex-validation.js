// validação do email
export function isEmailValid(email) {
  const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

  if (regex.test(email)) {
    return true;
  }

  return false;
}

// Validação do telefone
export function isPhoneValid(phone) {
  const regex = new RegExp(/(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/);

  if (regex.test(phone)) {
    return true;
  }

  return false;
}
