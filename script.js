window.addEventListener("load", () => {
  const wk = ["월", "화", "수", "목", "금"];
  const nm = ["조혜정", "김정래", "김대웅", "한민욱", "홍성일", "김용중"];
  const period = [
    {1교시,  time: "09:00-09:50"},
    {2교시,  time: "10:00-10:50"},
    {3교시,  time: "11:00-11:50"},
    {4교시,  time: "12:00-12:50"},
    {점심,  time: "12:50-13:50"},
    {5교시,  time: "09:00-09:50"},
    {6교시,  time: "09:00-09:50"},
    {7교시,  time: "09:00-09:50"},
    {8교시,  time: "09:00-09:50"},
  ];
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
    const crnm = [
      "휴계실",
      "메타버스콘텐츠",
      "인공지능융합",
      "인공지능프로그램",
      "인공지능데이터"
    ];
    const crpw = ["8520","1973"];
  
  // 요일 헤더 생성
  const weekdaysRow = document.getElementById("weekdays");
  wk.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day
    weekdaysRow.appendChild(th);
  })

  // 시간표 데이터 정의
const timetableData = [
  // 1교시
  {
    time: "09:00-09:50",
    classes: [
      { subject: cnm[0], teacher: nm[0], classroom: crnm[1] },
      { subject: cnm[1], teacher: nm[1], classroom: crnm[3] },
      { subject: cnm[2], teacher: nm[2], classroom: crnm[2] },
      { subject: cnm[3], teacher: nm[3], classroom: crnm[1] },
      { subject: cnm[1], teacher: nm[1], classroom: crnm[3] },
    ],
  },
  // 2교시
  {
    time: "10:00-10:50",
    classes: [
      { subject: cnm[4], teacher: nm[4], classroom: crnm[4] },
      { subject: cnm[5], teacher: nm[5], classroom: crnm[2] },
      { subject: cnm[6], teacher: nm[0], classroom: crnm[3] },
      { subject: cnm[7], teacher: nm[1], classroom: crnm[1] },
      { subject: cnm[8], teacher: nm[2], classroom: crnm[4] },
    ],
  },
  // 3교시
  {
    time: "11:00-11:50",
    classes: [
      { subject: cnm[1], teacher: nm[1], classroom: crnm[3] },
      { subject: cnm[3], teacher: nm[3], classroom: crnm[1] },
      { subject: cnm[5], teacher: nm[5], classroom: crnm[2] },
      { subject: cnm[7], teacher: nm[1], classroom: crnm[1] },
      { subject: cnm[0], teacher: nm[0], classroom: crnm[1] },
    ],
  },
  // 4교시
  {
    time: "12:00-12:50",
    classes: [
      { subject: cnm[2], teacher: nm[2], classroom: crnm[2] },
      { subject: cnm[4], teacher: nm[4], classroom: crnm[4] },
      { subject: cnm[6], teacher: nm[0], classroom: crnm[3] },
      { subject: cnm[8], teacher: nm[2], classroom: crnm[4] },
      { subject: cnm[3], teacher: nm[3], classroom: crnm[1] },
    ],
  },
  // 점심 시간
  {
    time: "12:50-13:50",
    classes: [
      { subject: "점심 시간", teacher: "", classroom: crnm[0] },
      { subject: "점심 시간", teacher: "", classroom: crnm[0] },
      { subject: "점심 시간", teacher: "", classroom: crnm[0] },
      { subject: "점심 시간", teacher: "", classroom: crnm[0] },
      { subject: "점심 시간", teacher: "", classroom: crnm[0] },
    ],
  },
  // 5교시
  {
    time: "13:50-14:40",
    classes: [
      { subject: cnm[5], teacher: nm[5], classroom: crnm[2] },
      { subject: cnm[7], teacher: nm[1], classroom: crnm[1] },
      { subject: cnm[0], teacher: nm[0], classroom: crnm[1] },
      { subject: cnm[2], teacher: nm[2], classroom: crnm[2] },
      { subject: cnm[4], teacher: nm[4], classroom: crnm[4] },
    ],
  },
  // 6교시
  {
    time: "14:50-15:40",
    classes: [
      { subject: cnm[6], teacher: nm[0], classroom: crnm[3] },
      { subject: cnm[8], teacher: nm[2], classroom: crnm[4] },
      { subject: cnm[1], teacher: nm[1], classroom: crnm[3] },
      { subject: cnm[3], teacher: nm[3], classroom: crnm[1] },
      { subject: cnm[5], teacher: nm[5], classroom: crnm[2] },
    ],
  },
];


  // 과목별 색상 매핑
  const subjectColorMap = {
    인공지능개론: 1,
    AI딥러닝모델기초: 2,
    IoT클라우드플랫폼: 3,
    프로그래밍기초: 4,
    서버운영체제: 4,
    AI로봇영상처리: 5,
    데이터베이스구현: 5,
    자료구조: 3,
    클라우드기초: 2,
  }

  // 시간표 본문 생성
  const timetableBody = document.getElementById("timetable-body")

  timetableData.forEach((period, index) => {
    // 각 교시마다 3개의 행 생성 (과목, 담당, 강의실)
    const subjectRow = document.createElement("tr")
    const teacherRow = document.createElement("tr")
    const classroomRow = document.createElement("tr")

    // 교시 셀 생성
    const periodCell = document.createElement("td")
    periodCell.className = "period-cell"
    periodCell.rowSpan = 3
    periodCell.innerHTML = `${index + 1}교시<br><span class="time-label">${period.time}</span>`
    subjectRow.appendChild(periodCell)

    // 구분 셀 생성
    const subjectLabel = document.createElement("td")
    subjectLabel.textContent = "과목"
    subjectRow.appendChild(subjectLabel)

    const teacherLabel = document.createElement("td")
    teacherLabel.textContent = "담당"
    teacherRow.appendChild(teacherLabel)

    const classroomLabel = document.createElement("td")
    classroomLabel.textContent = "강의실"
    classroomRow.appendChild(classroomLabel)

    // 각 요일별 수업 정보 생성
    period.classes.forEach((classInfo) => {
      // 과목 셀
      const subjectCell = document.createElement("td")
      subjectCell.textContent = classInfo.subject
      subjectCell.className = classInfo.subject
        ? `subject subject-color-${subjectColorMap[classInfo.subject] || 1}`
        : "empty-cell"
      subjectRow.appendChild(subjectCell)

      // 담당 셀
      const teacherCell = document.createElement("td")
      teacherCell.textContent = classInfo.teacher
      teacherCell.className = classInfo.subject
        ? `teacher subject-color-${subjectColorMap[classInfo.subject] || 1}`
        : "empty-cell"
      teacherRow.appendChild(teacherCell)

      // 강의실 셀
      const classroomCell = document.createElement("td")
      classroomCell.textContent = classInfo.classroom
      classroomCell.className = classInfo.subject
        ? `classroom subject-color-${subjectColorMap[classInfo.subject] || 1}`
        : "empty-cell"
      classroomRow.appendChild(classroomCell)
    })

    // 행 추가
    timetableBody.appendChild(subjectRow)
    timetableBody.appendChild(teacherRow)
    timetableBody.appendChild(classroomRow)
  })
})

