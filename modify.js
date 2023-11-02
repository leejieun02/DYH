function edit_check(){
    
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("repwd");
    var mobile = document.getElementById("mobile");


    if(pwd.value){
        var pwd_len = pwd.value.length;
        if( pwd_len < 4 || pwd_len > 8){
            var err_txt = document.querySelector(".err_pwd");
            err_txt.textContent = "비밀번호는 4~8글자만 입력할 수 있습니다.";
            pwd.focus();
            return false;
        };
    };

    if(pwd.value){
        if(pwd.value != repwd.value){
            var err_txt = document.querySelector(".err_repwd");
            err_txt.textContent = "비밀번호를 확인해 주세요.";
            repwd.focus();
            return false;
        };
    };

    if(mobile.value){
        var reg_mobile = /^[0-9]+$/g;
        if(!reg_mobile.test(mobile.value)){
            var err_txt = document.querySelector(".err_mobile");
            err_txt.textContent = "전화번호는 숫자만 입력할 수 있습니다.";
            mobile.focus();
            return false;
        };
    };
};

function change_email(){
    var email_dns = document.getElementById("email_dns");
    var email_sel = document.getElementById("email_sel");

    var idx = email_sel.options.selectedIndex;

    var sel_txt = email_sel.options[idx].value;
    email_dns.value = sel_txt;
};

function addr_search(){
    window.open("search_addr.php", "", "width=600, height=400, left=0, top=0");
};

function del_check(){
    var i = confirm("정말 탈퇴하시겠습니까?\n탈퇴한 아이디는 사용하실 수 없습니다.");

    if(i == true){
        // location.href = "delete.php?idx=<?php echo $s_idx; ?>";
        location.href = "delete.php";
    };
};