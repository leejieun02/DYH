window.onload = async function getProfile_API(){
    //회원정보 리스트 조희
    profile_list = await getUserDetailInfo()
}

var profile_tier_info = document.getElementsByClassName('profile_tier_info')[0];

if(profile_list.point>=0&&profile_list.point <100000){
    profile_tier_info.innerText = '화이트'
}
if(profile_list.point>=100000&&profile_list.point <300000){
    profile_tier_info.innerText = '실버'
}
if(profile_list.point>=300000&&profile_list.point <500000){
    profile_tier_info.innerText = '골드'
}
if(profile_list.point>=500000&&profile_list.point <700000){
    profile_tier_info.innerText = 'VIP'
}
if(profile_list.point>=700000&&profile_list.point <1000000){
    profile_tier_info.innerText = 'VVIP'
}