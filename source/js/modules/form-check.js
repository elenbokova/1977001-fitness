
const phoneInputs = document.querySelectorAll('input[data-phone-input]');

const getInputNumbersValue = (value) => {
  return value.replace(/\D/g, '');
};

const onPhoneInput = (evt) => {
  let input = evt.target;
  input.value = getInputNumbersValue(input.value);
};

const initPhoneCheck = () => {
  phoneInputs.forEach((el) => {
    el.addEventListener('input', onPhoneInput);
  });
};

export {initPhoneCheck};
