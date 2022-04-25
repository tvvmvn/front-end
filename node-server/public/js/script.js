//  4/8 Friday, 4/11 Monday

loadDoc(d => myCallback(d))
// console.log('end')

function loadDoc(cb) {
  const xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", "https://dapi.kakao.com/v2/search/image?query=카리나");
  xhttp.setRequestHeader('Authorization', 'KakaoAK d5a49f32e43c184c2823a05cdaf8c841');
  xhttp.send();

  // ** 제일 늦게 실행되는 함수 안으로 넣어버리는 것이다.
  xhttp.addEventListener('load', (e) => { 
    var DATA = JSON.parse(e.target.responseText);
    cb(DATA)
  })
}

function myCallback(data) {
  console.log(data)

  var div = document.createElement('div')

  // Some image 403(Forbidden) Error
  // Unauthorized.
  data.documents.map(doc => {
    var img = document.createElement('img')
    img.src = doc.image_url
    img.width = 100
    img.height = 100
    img.style.objectFit = 'cover'
    div.appendChild(img)
  })

  document.getElementById('root').appendChild(div)
}

/*
프로세스와 스레드의 차이
1 프로세스 - 운영체제로부터 자원을 할당받는 작업의 단위
2 스레드 - 프로세스가 할당받은 자원을 이용하는 실행의 단위

싱글스레드와 멀티스레드
1 싱글스레드 - 메인스레드에서 순차 실행
2 메인스레드는 A,B,C 스레드를 가지짐
*/









