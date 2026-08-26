const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');
const togglePassword = document.querySelector('.toggle-password');
const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

const switchToSignup = () => {
  loginPanel.classList.add('hidden');
  signupPanel.classList.remove('hidden');
};

const switchToLogin = () => {
  signupPanel.classList.add('hidden');
  loginPanel.classList.remove('hidden');
};

if (showSignupBtn) {
  showSignupBtn.addEventListener('click', switchToSignup);
}

if (showLoginBtn) {
  showLoginBtn.addEventListener('click', switchToLogin);
}

if (togglePassword) {
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      message.textContent = 'Please enter both email and password.';
      message.style.color = '#ff9c9c';
      return;
    }

    if (!email.includes('@')) {
      message.textContent = 'Please enter a valid email address.';
      message.style.color = '#ff9c9c';
      return;
    }

    message.innerHTML = '<span class="success-icon">✓</span>Login successful. Welcome back to Workonnect!';
    message.style.color = '#059669';
    form.reset();
    togglePassword.textContent = 'Show';
    passwordInput.type = 'password';
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!fullName || !email || !password) {
      signupMessage.textContent = 'Please fill in all fields to create your account.';
      signupMessage.style.color = '#ff9c9c';
      return;
    }

    if (!email.includes('@')) {
      signupMessage.textContent = 'Please enter a valid email address.';
      signupMessage.style.color = '#ff9c9c';
      return;
    }

    if (password.length < 6) {
      signupMessage.textContent = 'Password must be at least 6 characters long.';
      signupMessage.style.color = '#ff9c9c';
      return;
    }

    signupMessage.innerHTML = `<span class="success-icon">✓</span>Account created successfully for ${fullName}. Welcome to Workonnect!`;
    signupMessage.style.color = '#059669';
    signupForm.reset();

    setTimeout(() => {
      switchToLogin();
      message.innerHTML = '<span class="success-icon">✓</span>Login successful. Welcome back to Workonnect!';
      message.style.color = '#059669';
    }, 1200);
  });
}
