function getUserData() {
    const userId = document.getElementById('userId').value;
    const url = `https://example.com/api/user/${userId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        });
}

function loginUser() {
    const username = document.getElementById('username').value; // Getting username from input
    const password = document.getElementById('password').value; // Getting password from input

    localStorage.setItem('userPassword', password);

    const loginPayload = { username, password };
    fetch('https://example.com/api/login', {
        method: 'POST',
        body: JSON.stringify(loginPayload),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Login successful:', data);
        });
}

function executeCommand() {
    const command = document.getElementById('commandInput').value;
    eval(command);
}
