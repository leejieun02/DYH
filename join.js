// sendit() : 사용자 회원가입 형식 체크 문제있을경우 alert()를 통해 알려준다
const sendit = () => {
    const userid = document.joinForm.userid;
    const userpw = document.joinForm.userpw;
    const userpw_ch = document.joinForm.userpwcheck;
    const username = document.joinForm.username;
    const userphone = document.joinForm.userphone;
    const useremail = document.joinForm.useremail;
    const useraddress = document.joinForm.useraddress;
    
    // 아이디를 입력 안했을 경우
    if(userid.value == '') {
        alert('아이디를 입력해주세요.');
        userid.focus();
        return false;
    }
    // 아이디 형식이 다를 경우
    if(userid.value.length < 4 || userid.value.length > 12){
        alert("아이디는 4자 이상 12자 이하로 입력해주세요.");
        userid.focus();
        return false;
    }
    // 비밀번호 입력 안했을 경우
    if(userpw.value == '') {
        alert('비밀번호를 입력해주세요.');
        userpw.focus();
        return false;
    }
    // 비밀번호 확인 입력 안했을 경우
    if(userpw_ch.value == '') {
        alert('비밀번호 확인을 입력해주세요.');
        userpw_ch.focus();
        return false;
    }
    // 비밀번호 형식이 다를 경우
    if(userpw.value.length < 6 || userpw.value.length > 20){
        alert("비밀번호는 6자 이상 20자 이하로 입력해주세요.");
        userpw.focus();
        return false;
    }
    // 비밀번호와 비밀번호 체크가 다를 경우
	if(userpw.value != userpw_ch.value) {
        alert('비밀번호가 다릅니다. 다시 입력해주세요.');
        userpw_ch.focus();
        return false;
    }
    // 이름을 입력 안했을 경우
    if(username.value == '') {
        alert('이름을 입력해주세요.');
        username.focus();
        return false;
    }
   
    const expNameText = /[가-힣-A-Za-z]+$/; // 이름 형식 한글과 영어 이름까지
    if(!expNameText.test(username.value)){
        alert("이름 형식이 맞지않습니다. 형식에 맞게 입력해주세요.");
        username.focus();
        return false;
    }
    // 번호를 입력 안했을 경우
    if(userphone.value == '') {
        alert('핸드폰 번호를 입력해주세요.');
        userphone.focus();
        return false;
    }
    // 번호 형식이 다를 경우
    const expHpText = /^\d{3}-\d{3,4}-\d{4}$/; // 000-0000-0000 형식!!
    if(!expHpText.test(userphone.value)) {
        alert('핸드폰 번호 형식이 맞지않습니다. 형식에 맞게 입력해주세요.');
        hp.focus()
        return false;
    }
    // 이메일 입력 안했을 경우
    if(useremail.value == '') {
        alert('이메일을 입력해주세요.');
        useremail.focus();
        return false;
    }
	// 이메일 형식 : 이메일 아이디 @ 도메인 형식
    const expEmailText = /^[A-Za-z0-9\.\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z0-9\.\-]+$/;
    if(!expEmailText.test(useremail.value)) {
        alert('Please check the format your E-mail.');
        useremail.focus();
        return false;
    }
    if(useraddress.value == ''){
        alert('주소를 입력해주세요.');
        useraddress.focus();
        return false;
    }
    return true;
}
// 아이디 중복 체크 함수
const checkId = () => {
    const userid = document.joinform.userid; // join.html에서 name을 통해 userid를 가져옴
    const result = document.querySelector('#result'); // querySelector에 id태그를 통해 가져옴 
    
    if(userid.value == '') {
        alert('아이디를 입력해주세요.');
        userid.focus();
        return false;
    }
    if(userid.value.length < 4 || userid.value.length > 12){
        alert("아이디는 4자 이상 12자 이하로 입력해주세요.");
        userid.focus();
        return false;
    }
    
    // AJAX로 아이디 중복 체크
    const xhr = new XMLHttpRequest();	// XMLHttpRequest 객체 사용
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE) {
            if(xhr.status == 200) {
                let txt = xhr.responseText.trim();
                if(txt == "O") {	
                    result.style.display = "block";
                    result.style.color = "green";
                    result.innerHTML = "사용할 수 있는 아이디입니다.";
                } else {		
                    result.style.display = "block";
                    result.style.color = "red";
                    result.innerHTML = "중복된 아이디입니다.";
                    userid.focus();
                    // 키 입력 시 result 숨김 이벤트
                    userid.addEventListener("keydown", function(){
                        result.style.display = "none";
                    });
                }
            }
        }
    }
    xhr.open("GET", "checkId_ok.php?userid="+userid.value, true);
    xhr.send();
}