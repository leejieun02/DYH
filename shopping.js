// 전체 선택 체크박스 요소를 가져옵니다.
const selectAllCheckbox = document.getElementById('selectAll');

// 모든 상품 체크박스 요소들을 가져옵니다.
const productCheckboxes = document.querySelectorAll('.shopping__list__detail input[type="checkbox"]');

// "전체 선택" 체크박스의 상태에 따라 모든 상품 체크박스를 선택 또는 해제합니다.
selectAllCheckbox.addEventListener('change', function () {
    const isChecked = selectAllCheckbox.checked;

    // 모든 상품 체크박스를 선택 상태로 만듭니다.
    productCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
});

// 모든 상품 체크박스의 상태를 모니터링하고, 모든 체크박스가 선택되면 "전체 선택" 체크박스도 선택 상태로 변경합니다.
productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const areAllChecked = [...productCheckboxes].every(checkbox => checkbox.checked);
        selectAllCheckbox.checked = areAllChecked;
    });
});



// 결제 버튼 요소를 가져옵니다.
const checkoutButton = document.getElementById('shopping__bigorderbtn right');

// 결제 버튼을 클릭할 때 실행될 함수를 정의합니다.
checkoutButton.addEventListener('click', function() {
    // 모든 상품 체크박스 요소들을 가져옵니다.
    const productCheckboxes = document.querySelectorAll('.shopping__list__detail input[type="checkbox"]');

    // 선택된 상품을 저장할 배열을 만듭니다.
    const selectedProducts = [];

    // 각 상품 체크박스를 확인하여 선택된 상품을 추출합니다.
    productCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            // 선택된 상품 정보를 추출하거나 선택된 상품을 결제 페이지로 전송할 수 있습니다.
            // 예를 들어, 선택된 상품을 배열에 추가하거나 다른 작업을 수행할 수 있습니다.
            // 여기에서는 간단한 메시지를 출력하도록 하겠습니다.
            const productInfo = checkbox.parentNode.querySelector('.shopping__list__optionbtn').previousSibling.textContent.trim();
            selectedProducts.push(productInfo);
        }
    });

    if (selectedProducts.length > 0) {
        // 선택된 상품이 있다면, 이를 결제 페이지로 전송하는 로직을 추가할 수 있습니다.
        alert('선택된 상품: ' + selectedProducts.join(', '));
        // 여기에서는 간단한 경고창으로 선택된 상품을 표시합니다.
    } else {
        alert('선택된 상품이 없습니다.');
    }
});

// 선택된 상품 정보를 URL로 전달하는 함수
function redirectToPaymentPage(selectedProducts) {
    // 선택된 상품 정보를 URL 매개변수로 인코딩합니다.
    const encodedProducts = encodeURIComponent(selectedProducts.join(','));

    // 결제 페이지 URL을 생성하고 선택된 상품 정보를 추가합니다.
    const paymentPageURL = 'p.html?selectedProducts=' + encodedProducts;

    // 사용자를 결제 페이지로 리다이렉트합니다.
    window.location.href = paymentPageURL;
}

// "선택 상품 결제" 버튼 클릭 시 호출되는 함수
checkoutButton.addEventListener('click', function() {
    const selectedProducts = [];
    
    // 선택된 상품 정보를 추출하는 코드 (이전 예시와 동일)
    
    if (selectedProducts.length > 0) {
        // 선택된 상품 정보를 결제 페이지로 전달합니다.
        redirectToPaymentPage(selectedProducts);
    } else {
        alert('선택된 상품이 없습니다.');
    }
});

