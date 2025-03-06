window.addEventListener("load", function () {
  const wk = ["월", "화", "수", "목", "금"];
  const nm = ["조혜정", "김정래", "김대웅", "한민욱", "홍성일", "김용중"];
  const cnm = [
    "인공지능개론",
    "AI딥러닝모델기초",
    "IoT클라우드플랫폼",
    "프로그래밍기초",
    "서버운영체제",
    "AI로봇영상처리",
    "데이터베이스구현",
    "자료구조",
    "클라우드기초",
  ];

  let scheduleDiv = document.querySelector(".schedule");

  // 헤더 (첫 번째 칸은 빈 칸)
  let emptyDiv = document.createElement("div");
  emptyDiv.classList.add("cell", "header");
  scheduleDiv.appendChild(emptyDiv);

  // 요일 헤더 추가
  for (let i = 0; i < wk.length; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("cell", "header");
    dayDiv.textContent = wk[i];
    scheduleDiv.appendChild(dayDiv);
  }

  // 교시 및 과목 데이터 추가
  for (let i = 1; i <= 9; i++) {
    // 교시 헤더 추가
    let periodDiv = document.createElement("div");
    periodDiv.classList.add("cell", "header");
    periodDiv.textContent = `${i}교시`;
    scheduleDiv.appendChild(periodDiv);

    // 요일별 과목 추가
    for (let j = 0; j < wk.length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      // 과목 및 교수 랜덤 배정
      let subjectIndex = Math.floor(Math.random() * cnm.length);
      let professorIndex = Math.floor(Math.random() * nm.length);
      cell.textContent = `${cnm[subjectIndex]} (${nm[professorIndex]})`;

      scheduleDiv.appendChild(cell);
    }
  }
});
