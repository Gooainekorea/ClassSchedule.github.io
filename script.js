window.addEventListener('load', function() {
  const wk = ["월","화","수","목","금"];
  const nm = ["조혜정","김정래","김대웅","한민욱","홍성일","김용중"];
  const cnm = ["인공지능개론","AI딥러닝모델기초","IoT클라우드플랫폼","프로그래밍기초","서버운영체제","AI로봇영상처리","데이터베이스구현","자료구조","클라우드기초"];
  const crnm = ["휴개실","메타버스콘텐츠","인공지능융합","인공지능프로그램","인공지능데이터"];
  const crpw = ["8520","1973"];

  let weekDiv = document.querySelector('.week');
  let periodDiv= document.querySelector('.period');
  
  for(let i=0; i<wk.length; i++){
      let dayDiv = document.createElement("div");
      weekDiv.appendChild(dayDiv);
      dayDiv.textContent = wk[i];
      }
    for (let i = 1; i <= 9; i++) {
    let periodItem = document.createElement("div");
    periodItem.textContent = `${i}교시`;
    periodDiv.appendChild(periodItem);
  }
});
