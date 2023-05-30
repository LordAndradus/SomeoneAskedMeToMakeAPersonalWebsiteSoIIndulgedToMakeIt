const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const userInputDisplay = document.getElementById('user-input-display');

usernameInput.addEventListener('input', updateUserInputDisplay);
passwordInput.addEventListener('input', updateUserInputDisplay);

//Function to above calls
function updateUserInputDisplay()
{
    const username = usernameInput.value;
    const password = passwordInput.value;
    userInputDisplay.textContent = 'Username: ${username}, Password: ${password}';
}

