export default async function () {
  const element = {
    type: 'h1',
    props: {},
    children: ['Hello']
  }

  console.log('...')

  if (typeof(EventSource) !== 'undefined') {
    var source = new EventSource('http://localhost:3000/test');
    source.onmessage = function (e) {
      console.log(e.data)
    }
  } else {
    console.log('Sorry, your browser does not support server-send events.')
  }

  return element;
}