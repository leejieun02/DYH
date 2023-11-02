function clearDefaultText(input) {
    if (input.value === "이곳에 제목을 입력해주세요." || input.value === "이곳에 문의할 내용을 입력해주세요.") {
        input.value = "";
    }
}
const postForm = document.getElementById('new-post-form');
const postList = document.getElementById('post-list');

postForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const email = document.querySelector('input[type="email"]').value;


    // 새 게시물을 생성하고 목록에 추가
    const listItem = document.createElement('li');
    listItem.classList.add('post-item');    
    listItem.innerHTML = `<h4>${title}</h4><p>작성자: ${email}</p><hr><p>${content}</p>`;
    postList.appendChild(listItem);
    
    // 입력 필드 초기화
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.querySelector('input[type="email"]').value = '';
});

// '임시저장' 버튼 클릭 시 알림 메시지 표시
    const saveDraftButton = document.getElementById('save-draft');
    saveDraftButton.addEventListener('click', function () {
        alert('임시저장 되었습니다.');
    });
    const emailInput = document.getElementById('email');

// 이메일 입력 필드에 포커스 이벤트 리스너 추가
emailInput.addEventListener('focus', function () {
// 포커스를 받으면 힌트 텍스트를 비웁니다.
emailInput.placeholder = '';
});

// 이메일 입력 필드에서 포커스가 빠져나갈 때 이벤트 리스너 추가
emailInput.addEventListener('blur', function () {
// 포커스가 빠져나가면 힌트 텍스트를 다시 표시합니다.
emailInput.placeholder = '필수 입력사항입니다.';
});