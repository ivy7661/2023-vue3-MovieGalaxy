<template>
  <div class="row justify-content-center mb-5">
    <div class="col-md-10">
      <div class="d-flex justify-content-center">
        <h2 class="mb-4">用戶規章</h2>
      </div>
      <div class="rules-container px-4 py-5">
        <p>使用本網站服務，您同意以下事項：</p>
        <ol>
          <li>
            當您註冊成為網站會員，或使用本網站所提供之服務與參加活動時，我們將要求您填寫個人資料，如姓名、電子信箱等。
          </li>
          <li>請妥善保管帳號，不得出借或轉讓予第三人使用，若帳號遭人冒用，請立即通知客服人員。</li>
          <li>
            本公司對於「會員」之資料，基於保障個人隱私權，除供本網站之所需，及本網站行銷統計、分析、會員服務外，不作其他目的使用。
          </li>
          <li>本公司對於所有會員使用本網站服務之資訊將會依法保障隱私。</li>
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
