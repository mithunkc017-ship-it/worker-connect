const availabilityToggle = document.getElementById('availabilityToggle');
const availabilityText = document.getElementById('availabilityText');
const toggleLabel = document.getElementById('toggleLabel');
const requestMessage = document.getElementById('requestMessage');
const editProfile = document.getElementById('editProfile');

availabilityToggle.addEventListener('click', () => {
  const isAvailable = availabilityToggle.classList.toggle('is-on');
  availabilityToggle.setAttribute('aria-pressed', String(isAvailable));
  toggleLabel.textContent = isAvailable ? 'Available' : 'Busy';
  availabilityText.textContent = isAvailable ? 'You are available for work' : 'You are currently busy';
  availabilityToggle.parentElement.querySelector('small').textContent = isAvailable
    ? 'Customers can send you job requests'
    : 'New job requests are paused';
});

document.querySelectorAll('.accept-button, .decline-button').forEach((button) => {
  button.addEventListener('click', () => {
    const request = button.closest('.request-row');
    const title = request.querySelector('.request-main strong').textContent;
    const accepted = button.classList.contains('accept-button');
    requestMessage.textContent = `${accepted ? 'Accepted' : 'Declined'}: ${title}`;
    request.style.opacity = '0.55';
    request.querySelectorAll('button').forEach((item) => { item.disabled = true; });
  });
});

editProfile.addEventListener('click', () => {
  document.getElementById('profile').scrollIntoView({ behavior: 'smooth', block: 'center' });
  editProfile.textContent = 'Profile section selected';
});
