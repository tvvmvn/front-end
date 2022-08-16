export default async function (params) {
  try {
    var userId = params.userId;
    var token = params.token;

    var response = await fetch(`http://localhost:3000/users/${userId}/${token}`)
    .then(res => res.json());

    console.log(response)

    if (response.token) { // If success
      localStorage.setItem('jwt', response.token)
    }

    render();

    function render() {
      document.getElementById('app').innerHTML += 
      `
        <h1>Verification</h1>
        <p id="message">${response.message}</p>
      `
    }
  } catch (err) {
    console.error(err)
  }
}