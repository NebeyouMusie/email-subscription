const scriptURL = 'https://script.google.com/macros/s/AKfycbz-pRAMiDRZBGGwzND3P1T6QyqrCZ1hj3XvvP-WFHEN2tA16jNLy7g5eSis8U3pk5I/exec';
let message = document.querySelector('span');
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = 'Thank you For Subscribing!';
        setTimeout(() => {
          message.innerHTML = '';
      },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));

      
  });