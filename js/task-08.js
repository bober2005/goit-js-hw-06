const form = document.querySelector('.login-form');

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    if (!formDataObject.email || !formDataObject.password) {
      alert('Please fill in all fields.');
    } else {
      console.log(formDataObject);
      form.reset();
    }
  }