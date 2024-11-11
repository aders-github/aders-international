document.addEventListener("DOMContentLoaded", function () {
    const imgItems = document.querySelectorAll(".img-item");
    const bridgeView = document.querySelector(".bridge-view");

    imgItems.forEach((img) => {
        img.addEventListener("click", function () {
            bridgeView.innerHTML = ``;
            // 이미지의 ID에 따라 다른 콘텐츠를 할당
            let content = "";
            switch (img.id) {
                case "bridge-img1":
                    content = `
            <div class="view-overlay">
              <img src="../asset/content-1.jpg" alt="Image 1 Preview" style="width: 100%; height: auto;">
              <div class="caption">Description for Image 1</div>
            </div>
          `;
                    break;
                case "bridge-img2":
                    content = `
            <div class="view-overlay">
              <img src="../asset/content-2.jpg" alt="Image 1 Preview" style="width: 100%; height: auto;">
              <div class="caption">Description for Image 1</div>
            </div>
          `;
                    break;
                case "bridge-img3":
                    content = `
            <div class="view-overlay">
              <img src="../asset/content-1.jpg" alt="Image 1 Preview" style="width: 100%; height: auto;">
              <div class="caption">Description for Image 1</div>
            </div>
          `;
                    break;
                default:
                    content = `
            <img src="../asset/logo2.png" alt="Logo" style="width: 60%;" class="effect-shine">
            <h2>Default Content</h2>
            <p>This is the default description</p>
          `;
            }

            // bridge-view의 콘텐츠를 업데이트
            bridgeView.innerHTML = content;
        });
    });
});
