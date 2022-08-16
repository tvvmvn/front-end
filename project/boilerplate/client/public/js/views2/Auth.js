export default async function () {
  try {
    var auth = await fetch('http://localhost:3000/user', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
    }).then(res => res.json())  

    window.auth = auth;

    return auth;

  } catch (err) {
    console.error(err)
  }
}
