const input = document.getElementById('validation-input');

  input.addEventListener('blur', (event) => {
    const dataLength = Number(input.getAttribute('data-length'));
    const inputValue = event.target.value;
    const isValid = inputValue.length === dataLength;

    if (isValid) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.add('invalid');
      input.classList.remove('valid');
    }
  });