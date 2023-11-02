// 색상 이미지 파일 경로 객체
const colorImagesbuds= {
  black: '버즈 블랙.png',
  White: '버즈 화이트.avif',
  purple: '버즈 퍼플.avif',
  onyx: '버즈 오닉스.avif',
  olive: '버즈 올리브.avif',
  device2: {
      // 버즈 프로에 대한 이미지 데이터를 추가하세요
  purple: '버즈 프로 퍼플.avif',
  black: '버즈 프로 블랙.avif',
  White: '버즈프로 화이트.avif',
      // 다른 색상 이미지 데이터 추가
  },
};

document.addEventListener("DOMContentLoaded", function () {
    const colorOptions = document.querySelectorAll('input[type="radio"][name="color"]');
    // 이미지 표시 영역
    const colorDisplay = document.getElementById('colorDisplay');
    
    // 기기 선택 셀렉트 박스
    const deviceSelect = document.getElementById("deviceSelect");
    // 색상 선택 옵션들


  
    
    colorOptions.forEach(option => {
      option.addEventListener('change', function () {
        colorDisplay.textContent = '색상: ' + this.value;
    });
    });
  });
  
  // HTML에서 기기 선택 드롭다운을 가져옵니다.
  const deviceSelect = document.getElementById('deviceSelect');
  
  // 이미지와 텍스트를 그릴 캔버스 요소 가져오기
  const canvas = document.getElementById('stampCanvas');
  const ctx = canvas.getContext('2d');
  
  // 이미지가 변경될 때 텍스트 초기화 함수
  function resetStampedText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // 이미지가 변경될 때마다 호출되는 함수를 작성합니다.
  deviceSelect.addEventListener('change', function () {
    const selectedDevice = deviceSelect.value;
  
    if (selectedDevice === 'device1') {
      deviceImage.src = '버즈 블랙.png';
    } else if (selectedDevice === 'device2') {
      deviceImage.src = '버즈.jpg';
    }
  
    // 이미지가 변경될 때 기존에 각인된 텍스트 초기화
    resetStampedText();
  });
  
  // 이미지를 나타낼 img 요소를 가져옵니다.
  const deviceImage = document.getElementById('deviceImage');
  
  // 이미지가 로드된 후 초기화
  deviceImage.onload = function () {
    canvas.width = deviceImage.width;
    canvas.height = deviceImage.height;
  
    // 이미지를 그립니다.
    ctx.drawImage(deviceImage, 0, 0);
  
    // 각인 버튼 클릭 이벤트
    engraveButton.addEventListener('click', function () {
      const text = engravingText.value;
      const x = canvas.width / 2; // 가운데 X 좌표
      const y = canvas.height / 2; // 가운데 Y 좌표
      engravingResults.push({ text, x, y });
      redrawEngravings();
    });
  };
  
  // 이미지 로드 후 초기화
  deviceImage.src = '에어팟맥스.jpeg';
  deviceImage.src = '버즈.jpeg';
  
  const engravingText = document.getElementById('engravingText');
  const engraveButton = document.getElementById('engraveButton');
  const engravingResults = [];
  let isDragging = false;
  let selectedEngraving = null;
  let offsetX = 0;
  let offsetY = 0;
  
  // 각인된 텍스트를 그리는 함수
  function redrawEngravings() {
    // 이미지를 다시 그립니다.
    ctx.drawImage(deviceImage, 0, 0);
  
    engravingResults.forEach(result => {
      const selectedFont = fontSelect.value; // 사용자가 선택한 폰트 가져오기
      ctx.font = `bold 30px ${selectedFont}`;
      ctx.fillStyle = fontColorInput.value;
      ctx.fillText(result.text, result.x, result.y);
    });
  }
  
  // 마우스 이벤트 등록
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', onMouseLeave);
  
  // 폰트 색상을 가져올 input 요소 가져오기
  const fontSelect = document.getElementById('fontSelect');
  const fontColorInput = document.getElementById('fontColorInput');
  
  // 마우스 다운 이벤트 핸들러
  function onMouseDown(e) {
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;
  
    engravingResults.forEach(result => {
      const textWidth = ctx.measureText(result.text).width;
      const textHeight = 30; // 폰트 크기에 따라 조정
  
      if (
        mouseX >= result.x &&
        mouseX <= result.x + textWidth &&
        mouseY >= result.y - textHeight &&
        mouseY <= result.y
      ) {
        isDragging = true;
        selectedEngraving = result;
        offsetX = mouseX - result.x;
        offsetY = mouseY - result.y;
      }
    });
  }
  
  // 마우스 이동 이벤트 핸들러
  function onMouseMove(e) {
    if (!isDragging) return;
  
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;
  
    selectedEngraving.x = mouseX - offsetX;
    selectedEngraving.y = mouseY - offsetY;
  
    redrawEngravings();
  }
  
  // 마우스 업 이벤트 핸들러
  function onMouseUp() {
    isDragging = false;
    selectedEngraving = null;
  }
  
  // 마우스 벗어남 이벤트 핸들러
  function onMouseLeave() {
    isDragging = false;
    selectedEngraving = null;
  }