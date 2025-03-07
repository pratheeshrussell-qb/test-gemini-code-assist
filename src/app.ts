import { authenticateUser } from './lib/auth.js';
import { displayUserInfo } from './lib/user.js';

document.getElementById('submitBtn')!.addEventListener('click', () => {
  const username = (document.getElementById('username') as HTMLInputElement).value;
  const pass = (document.getElementById('password') as HTMLInputElement).value;
  if (username) {
    authenticateUser(username,pass); 
   
    displayUserInfo(username);
  } else {
    alert("Please enter a username!");
  }
});