(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.loginForm');

        form.onsubmit = () => {
            const data = JSON.stringify({
                'username': form.username.value,
                'password': form.password.value
            });

            fetch('http://128.199.57.136:1337/login', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
                .then((result) => result.json())
                .then((data) => {
                    localStorage.setItem('token', data.AccessToken);
                    localStorage.setItem('userid', data.ID);
                    window.location.assign('../admin/admin.html');
                })
                .catch((err) => {
                    console.log(err);
                });

            return false;
        };
    });
})();

document.getElementById('logud').addEventListener('click', () => {
    if (confirm('vil du logge af?')) {
        localStorage.clear();
    }
})