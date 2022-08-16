export default async function () {
  try {
    async function handleSubmit(e) {
      e.preventDefault()
      var formData = new FormData(form)

      var signupResult = await fetch('http://localhost:3000/users', {
        method: 'POST',
        body: new URLSearchParams(formData)
      }).then(res => res.json())

      if (signupResult.errors) {
        var errors = ''
        signupResult.errors.map(error => {
          errors += `<li>${error}</li>`
        })
        return document.getElementById('errors').innerHTML = errors;
      }

      e.target.innerHTML = `<h1>${signupResult.message}</h1>`;
    }

    return {
      type: 'div',
      props: {},
      children: [
        { type: 'h1', props: {}, children: ['Sign Up'] },
        { type: 'form', props: { 'onSubmit': handleSubmit }, children: [
          { type: 'input', props: { 'type': 'text', 'name': 'username', 'placeholder': 'username' }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'input', props: { 'type': 'text', 'name': 'email', 'placeholder': 'email' }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'input', props: { 'type': 'text', 'name': 'password', 'placeholder': 'password' }, children: [] },
          { type: 'br', props: {}, children: [] },
          { type: 'button', props: { 'type': 'submit' }, children: ['Submit'] },
        ] },
        { type: 'ul', props: { 'id': 'errors' }, children: [] }
      ]
    }

  } catch (err) {
    console.error(err)
  }
}
