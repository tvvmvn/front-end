export default async function () {
  try {
    return {
      type: 'nav',
      props: { 'class': 'nav' },
      children: [
        { type: 'a', props: { 'href': '/', 'class': 'nav__link', 'data-link': '' }, children: ['Home'] },
        { type: 'a', props: { 'href': '/posts', 'class': 'nav__link', 'data-link': '' }, children: ['Explore'] },
        auth ? 
          { type: 'a', props: { 'href': '/profiles/' + auth.user.username, 'data-link': '' }, children: [auth.user.username] } 
          : '',
        { type: 'a', props: { 'href': '/login', 'class': 'nav__link', 'data-link': '' }, children: ['Login'] },
        { type: 'a', props: { 'href': '/test', 'class': 'nav__link', 'data-link': '' }, children: ['Test'] }
      ]
    }

  } catch (err) {
    console.error(err)
  }
}

