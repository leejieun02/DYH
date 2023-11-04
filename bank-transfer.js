document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('payment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 여기에 결제 처리 로직을 추가하세요.
        // 실제 결제 처리를 위한 서비스나 API를 호출하거나 가상의 결제 성공 메시지를 표시할 수 있습니다.
        // 이 예제에서는 가상의 성공 메시지를 표시합니다.

        alert('4801105079758824 이 계좌로 24시간 내에 입금을 완료해주세요.');
        // 결제 성공 후 메인 페이지로 리디렉션
        window.location.href = 'main.html'; // 메인 페이지의 URL로 변경하세요.
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const checkoutButton = document.getElementById('checkoutButton');
    const paymentMethodSelect = document.getElementById('payment-method');

    checkoutButton.addEventListener('click', function () {
        const selectedPaymentMethod = paymentMethodSelect.value;

        switch (selectedPaymentMethod) {
            case 'credit-card':
                handleCreditCardPayment();
                break;
            case 'bank-transfer':
                handleBankTransfer();
                break;
            case 'kakao-pay':
                handleKakaoPay();
                break;
            case 'naver-pay':
                handleNaverPay();
                break;
            default:
                alert('결제 방법을 선택하세요.');
        }
    });

    function handleCreditCardPayment() {
        // 여기에 신용카드 결제 처리 로직을 추가합니다.
        alert('신용카드로 결제합니다.');
    }

    function handleBankTransfer() {
        // 여기에 가상계좌 결제 처리 로직을 추가합니다.
        alert('가상계좌로 결제합니다.');
    }

    function handleKakaoPay() {
        // 여기에 카카오페이 결제 처리 로직을 추가합니다.
        alert('카카오페이로 결제합니다.');
    }

    function handleNaverPay() {
        // 여기에 네이버페이 결제 처리 로직을 추가합니다.
        alert('네이버페이로 결제합니다.');
    }
});
