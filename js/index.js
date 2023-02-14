const form = document.getElementById('form');
const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  return re.test(phone);
};

const validateInputs = () => {
  const nameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

  if (nameValue === '') {
    setError(fname, 'Username is required');
  } else {
    setSuccess(fname);
  }

  if (phoneValue === '') {
    setError(phone, 'Phone No is required');
  } else if (!isValidPhone(phoneValue)) {
    setError(phone, 'Provide a valid Phone no');
  } else {
    setSuccess(phone);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }
};
