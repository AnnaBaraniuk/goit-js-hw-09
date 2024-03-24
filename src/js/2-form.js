const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

function saveFormData() {
  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function loadFormData() {
  const savedData = localStorage.getItem(LOCAL_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    email.value = formData.email;
    message.value = formData.message;
  }
}

loadFormData();

form.addEventListener('input', () => {
  saveFormData();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Будь ласка, заповніть всі поля форми!');
    return;
  }
  console.log({
    email: email.value.trim(),
    message: message.value.trim(),
  });

  localStorage.removeItem(LOCAL_KEY);
  email.value = '';
  message.value = '';
});
