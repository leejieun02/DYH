/*document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 여기에 결제 처리 로직을 추가하세요.
        // 실제 결제 처리를 위한 서비스나 API를 호출하거나 가상의 결제 성공 메시지를 표시할 수 있습니다.
        // 이 예제에서는 가상의 성공 메시지를 표시합니다.

        alert('결제가 성공적으로 완료되었습니다.');

        // 결제 성공 후 메인 페이지로 리디렉션
        window.location.href = 'main.html'; // 메인 페이지의 URL로 변경하세요.
    });
});*/


document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');

    // 상품 선택 또는 수량 입력 시 총 가격 업데이트
    function updateTotalPrice() {
        const selectedProduct = productSelect.options[productSelect.selectedIndex];
        const productPrice = parseFloat(selectedProduct.getAttribute('data-price'));
        const quantity = parseInt(quantityInput.value);
        const total = productPrice * quantity;

        // 총 가격을 표시
        totalPriceElement.textContent = `₩${total.toFixed(0)}`;
    }

    productSelect.addEventListener('change', updateTotalPrice);
    quantityInput.addEventListener('input', updateTotalPrice);
});




