const form = document.getElementById('userForm');
  const messageBox = document.getElementById('messageBox');

  form.addEventListener('submit', function(event) {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Get the value from the input field
    const name = document.getElementById('userName').value;

    // 3. Update and show the message container
    messageBox.textContent = `Thank you, ${name}! Your form was submitted.`;
    messageBox.style.display = 'block';

    // 4. (Optional) Hide the form after submission
    form.style.display = 'none';
  });