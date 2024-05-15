<template>
  <div class="row justify-content-center mb-5">
    <div class="col-11 col-md-10 d-flex flex-column align-items-center">
      <h2 class="mb-4">Q & A</h2>
      <img src="/images/QA.png" alt="QA" class="principle-img mb-4 img-fluid" />
      <div class="row w-100" id="accordionQA">
        <div class="col-md-12 accordion-item">
          <h2
            class="accordion-header accordion-title d-flex justify-content-center"
            id="flush-headingOne"
          >
            <button
              class="accordion-button collapsed mx-3 my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              <div class="fs-5 qa-title">為什麼要區分一般、無雷評論區</div>
            </button>
          </h2>
          <div id="flush-collapseOne" class="collapse" data-bs-parent="#accordionQA">
            <div class="accordion-body qa-content px-3 py-4">
              為了維持尚未觀看電影會員的觀影體驗，我們設置了無雷評論區，使會員得依自身需求查看影評或參與討論。
            </div>
          </div>
        </div>
        <div class="col-md-12 accordion-item">
          <h2
            class="accordion-header accordion-title d-flex justify-content-center"
            id="flush-headingTwo"
          >
            <button
              class="accordion-button collapsed mx-3 my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              <div class="fs-5 qa-title">要如何避開涉及劇透的影評？</div>
            </button>
          </h2>
          <div id="flush-collapseTwo" class="collapse" data-bs-parent="#accordionQA">
            <div class="accordion-body qa-content px-3 py-4">
              您可以於進入影評頁面後，點選無雷影評
            </div>
          </div>
        </div>

        <div class="col-md-12 accordion-item">
          <h2
            class="accordion-header accordion-title d-flex justify-content-center"
            id="flush-headingThree"
          >
            <button
              class="accordion-button collapsed mx-3 my-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              <div class="fs-5 qa-title">可以查看自己的影評紀錄嗎？</div>
            </button>
          </h2>
          <div id="flush-collapseThree" class="collapse" data-bs-parent="#accordionQA">
            <div class="accordion-body qa-content px-3 py-4">
              您可以在會員專區查看所有自己曾發布的影評
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  @include Inter;
  color: #fff;
  font-weight: 700;
}
.principle-img {
  border-radius: 20px;
  border: 2px solid #dfdff1;
  box-shadow: 2px 2px 15px 0px rgba(167, 122, 202, 0.25);
}
.accordion-title {
  // width: 600px;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #dfdff1;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(205, 203, 203, 0.15) 33.52%,
    rgba(249, 225, 255, 0.1) 67.04%,
    rgba(142, 9, 129, 0.1) 100.56%
  );
}
.qa-title {
  @include Inter;
  color: #fff;
  font-weight: 600;
}
.qa-content {
  @include Inter;

  color: #fff;
  font-weight: 500;
}
.accordion-body {
  // width: 600px;
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #dfdff1;
}
</style>
