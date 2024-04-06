<template>
  <div class="row justify-content-center mb-5">
    <div class="col-md-10">
      <div class="d-flex justify-content-center">
        <h2 class="mb-4">評論規章</h2>
      </div>
      <div class="rules-container px-4 py-5">
        <p>使用本網站服務，您同意以下事項：</p>
        <ol>
          <li>禁止分享有關色情、暴力、仇恨言論或其他不當之內容。</li>
          <li>為保障其他會員之權利，禁止於無雷評論區洩露劇情結局或重要情節。</li>
          <li>不得發布侵犯版權、著作權之內容。</li>
          <li>我們鼓勵會員提供客觀、真實及有建設性之評論，不得刻意散播虛假資訊或惡意評論。</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rules-container {
  border-radius: 20px;
  border: 2px solid #dfdff1;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(205, 203, 203, 0.15) 33.52%,
    rgba(249, 225, 255, 0.1) 67.04%,
    rgba(142, 9, 129, 0.1) 100.56%
  );
}
li {
  margin-bottom: 10px;
}
</style>
