document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // 애니메이션이 한 번만 실행되도록 관찰 중지
            }
        });
    }, {
        threshold: 0.2 // 요소의 20%가 화면에 들어올 때 애니메이션 시작
    });

    const elements = document.querySelectorAll(".text-content, .image-content");
    elements.forEach(element => observer.observe(element));
});

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const hamburger = document.querySelector('.hamburger');

    // 드롭다운 메뉴나 햄버거 아이콘이 아닌 영역을 클릭했을 때 메뉴 닫기
    if (dropdownMenu.classList.contains('show') && !dropdownMenu.contains(event.target) && !hamburger.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});
