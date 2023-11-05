var textCounter = 0; // 텍스트 엘리먼트 식별을 위한 카운터
var selectedText = null; // 선택된 텍스트 엘리먼트를 추적하기 위한 변수

        // 텍스트를 추가하는 함수
        function addText() {
            var textOverlay = document.createElement("div");
            textOverlay.className = "text-overlay";
            textOverlay.id = "custom-text-" + textCounter;
            textOverlay.style.color = document.getElementById("text-color").value;
            textOverlay.style.fontSize = document.getElementById("text-size").value + "px";
            textOverlay.style.fontFamily = document.getElementById("font-select").value;
            textOverlay.style.left = "50%";
            textOverlay.style.top = "50%";
            textOverlay.style.transform = "translate(-50%, -50%)";
            textOverlay.textContent = document.getElementById("text-input").value;
            document.querySelector(".image-container").appendChild(textOverlay);

            // 드래그 가능하게 만듭니다.
            var isDragging = false;
            var offsetX, offsetY;

            textOverlay.addEventListener("mousedown", function (e) {
                isDragging = true;
                offsetX = e.clientX - textOverlay.getBoundingClientRect().left;
                offsetY = e.clientY - textOverlay.getBoundingClientRect().top;
                selectedText = textOverlay; // 선택한 텍스트 엘리먼트 설정
            });

            document.addEventListener("mousemove", function (e) {
                if (isDragging) {
                    textOverlay.style.left = e.clientX - offsetX + "px";
                    textOverlay.style.top = e.clientY - offsetY + "px";
                }
            });

            document.addEventListener("mouseup", function () {
                isDragging = false;
            });

            textCounter++;
        }

        // 선택한 텍스트의 크기를 조절하는 함수
        function resizeSelectedText() {
            if (selectedText) {
                var newSize = document.getElementById("text-size").value + "px";
                selectedText.style.fontSize = newSize;
            }
        }

        document.getElementById("add-text").addEventListener("click", addText);
        document.getElementById("resize-text").addEventListener("click", resizeSelectedText);
