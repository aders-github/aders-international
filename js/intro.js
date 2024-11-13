document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer 설정
    const observerOptions = {
        threshold: 0.1 // 요소의 10%가 화면에 보일 때 트리거
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 요소가 화면에 들어왔을 때 효과 적용
                entry.target.style.transition = "opacity 2s";
                entry.target.style.opacity = 1;

                // 관찰 중지
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 모든 .text-content 요소에 옵저버 추가
    document.querySelectorAll(".text-content").forEach(element => {
        element.style.opacity = 0; // 초기값 설정
        observer.observe(element);
    });
});
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}
