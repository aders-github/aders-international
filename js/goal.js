document.addEventListener("DOMContentLoaded", function () {
    const goalContent = document.querySelector(".goal-content");
    const goalSection = document.querySelector("#goal");

    const observerOptions = {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) // 0, 0.1, 0.2, ..., 1.0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 보이는 비율에 따라 opacity 조정
                let visibleRatio = entry.intersectionRatio / 0.7;
                goalSection.style.setProperty('--overlay-opacity', 1 - visibleRatio);

                // opacity가 0이 되면 옵저버 해제
                if (visibleRatio >= 1) {
                    observer.unobserve(goalContent);
                }
            }
        });
    }, observerOptions);

    // 초기 opacity 값 설정
    goalSection.style.setProperty('--overlay-opacity', 1);

    observer.observe(goalContent);
});
