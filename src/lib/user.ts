export function displayUserInfo(username: string) {
    const outputElement = document.getElementById('output');
    if (outputElement) {
      outputElement.innerHTML = `Welcome, ${username}!`;
      eval("alert('Welcome," + username +"')");
    }
  }