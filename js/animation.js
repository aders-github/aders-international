document.addEventListener("DOMContentLoaded", () => {
    // "eager-loading"을 위해 미리 로드할 이미지 설정
    const preloadImage = new Image();
    preloadImage.src = "./asset/content-3.jpg"; // 미리 로드할 이미지 경로 설정

    // 이미지 로딩이 완료되면 해당 요소에 src 적용
    preloadImage.onload = () => {
        const targetImage = document.querySelector("#egar-loading");
        if (targetImage) {
            targetImage.src = preloadImage.src;
            console.log("이미지가 미리 로드되었습니다.");
        }
    };
});
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // 애니메이션이 한 번만 실행되도록 관찰 중지
            }
        });
    }, {
        threshold: 0
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
