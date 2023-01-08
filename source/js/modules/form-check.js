
const phoneInputs = document.querySelectorAll('input[data-phone-input]');

const getInputNumbersValue = (value) => {
  return value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  let input = evt.target;
  input.value = getInputNumbersValue(input.value);
  if (input.value.length < 11) {
    input.setCustomValidity('Пожалуйста, введите номер телефона полностью');
  } else {
    input.setCustomValidity('');
  }
};

const initPhoneCheck = () => {
  phoneInputs.forEach((el) => {
    el.addEventListener('input', onPhoneInput);
  });
};

export {initPhoneCheck};
