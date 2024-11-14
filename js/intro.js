const intro = document.querySelector('#intro');
const introList = document.querySelector('.intro-list');
const intros = document.querySelectorAll('.intro-content');
let currentIndex = 0; // 현재 슬라이드 인덱스

// 슬라이더 크기 설정 함수
function setSlideWidth() {
    const introWidth = intro.clientWidth; // intro의 현재 너비를 변수로 저장
    intros.forEach((inner) => {
        inner.style.width = `${introWidth}px`; // 각 슬라이드의 너비를 intro의 너비로 설정
    });
    introList.style.width = `${introWidth * intros.length}px`; // 전체 슬라이드의 너비 설정
    introList.style.marginLeft = `-${introWidth * currentIndex}px`; // 현재 슬라이드 위치 유지
}

// 초기 슬라이드 크기 설정
setSlideWidth();

// 창 크기 변경 시 슬라이드 크기 조정
window.addEventListener('resize', setSlideWidth);

const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

// 슬라이드 이동 함수
function moveSlide(index) {
    introList.style.marginLeft = `-${intro.clientWidth * index}px`;
}

// 왼쪽 버튼 클릭 이벤트
buttonLeft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = intros.length - 1; // 첫 번째보다 이전으로 이동 시 마지막 슬라이드로
    }
    moveSlide(currentIndex);
    resetInterval(); // 자동 슬라이드 재설정
});

// 오른쪽 버튼 클릭 이벤트
buttonRight.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= intros.length) {
        currentIndex = 0; // 마지막 이후로 이동 시 첫 번째 슬라이드로
    }
    moveSlide(currentIndex);
    resetInterval(); // 자동 슬라이드 재설정
});

// 자동 슬라이드 기능
const getInterval = () => {
    return setInterval(() => {
        currentIndex++;
        if (currentIndex >= intros.length) {
            currentIndex = 0; // 자동 슬라이드가 끝에 도달하면 처음으로 돌아가도록 설정
        }
        moveSlide(currentIndex);
    }, 3000); // 3초마다 자동 슬라이드
};

let interval = getInterval();

// 자동 슬라이드를 재설정하는 함수
function resetInterval() {
    clearInterval(interval); // 기존 interval 제거
    interval = getInterval(); // 새로운 interval 등록
}
