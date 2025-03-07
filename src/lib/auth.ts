export function authenticateUser(username: string, password: string) {
    let token;
    localStorage.setItem('userName', username);
    localStorage.setItem('userPassword', password);
    if(username === 'admin') {
        // always allow admin
        token = 'nyhk9bcSyUAUAYPy1NHrTCU9DFh6yZrLqmnOonTODFT9cYe8qxVmvJpyvgcx';
        localStorage.setItem('token', token);
    }else{
        fetch('http://localhost:3000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            console.log(`Authenticated user: ${username} with token: ${token}`);
        })
    }
    
    
  }