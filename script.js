window.addEventListener('load', function() {
  const wk = ["월","화","수","목","금"];
  const nm = ["조혜정","김정래","김대웅","한민욱","홍성일","김용중"];
  const cnm = ["인공지능개론","AI딥러닝모델기초","IoT클라우드플랫폼","프로그래밍기초","서버운영체제","AI로봇영상처리","데이터베이스구현","자료구조","클라우드기초"];
  const crnm = ["휴개실","메타버스콘텐츠","인공지능융합","인공지능프로그램","인공지능데이터"];
  const crpw = ["8520","1973"];

  let week = document.querySelector('.week');
  for(let i=0; i<wk.length; i++){
      let weekDiv = decument.createElement("div");
      week.appendChild(weekDiv);
      weekDiv.textContent = wk[i];
      }
  let week = document.querySelector('.period');
  
});
