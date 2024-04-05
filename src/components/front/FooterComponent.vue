<template>
  <footer class="footer p-4 pb-0 mb-0">
    <div class="container">
      <div class="row align-items-center justify-content-center justify-content-lg-between">
        <div
          class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0"
        >
          <a href="#">
            <img src="/images/LOGO.svg" class="img-fluid" alt="logo" width="150" />
          </a>
        </div>
        <div class="col-12 col-lg-7">
          <div class="row justify-content-center justify-content-lg-between align-items-center">
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <img src="/icons/mail.svg" alt="mail" style="width: 20px; height: 20px" />
                <h6 class="text-light mt-2 mb-1">聯絡我們 E-MAIL</h6>
                <p class="mb-1">moviegalaxy@Anythings</p>
                <h6 class="text-light my-2">服務時間 14~18</h6>
              </div>
            </div>
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <img src="/icons/language.svg" alt="aboutUs" style="width: 20px; height: 20px" />
                <h6 class="text-light my-2">關於影評星塵</h6>
                <RouterLink class="footer-link mb-1" to="/aboutUs/operationPrinciple">
                  網站理念
                </RouterLink>
                <RouterLink class="footer-link mb-1" to="/aboutUs/QA"> Q & A </RouterLink>
              </div>
            </div>
            <div class="col-12 mb-3 mb-lg-0 col-lg-3">
              <div class="d-flex flex-column align-items-center">
                <img src="/icons/chat.svg" alt="chat" style="width: 20px; height: 20px" />
                <h6 class="text-light my-2">平台規則</h6>
                <p class="mb-1">用戶規章</p>
                <p class="mb-1">評論規章</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-flex justify-content-between mt-2 py-2 py-lg-3 text-secondary">
        <p class="mb-0 mb-lg-0">&copy; copyright 2023 Movie Galaxy All Rights Reserved.</p>
        <p class="mb-0">本作品僅為專題使用，非從事商業用途</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
p {
  color: #c5c1c1;
}
.footer-link {
  color: #c5c1c1;
}
</style>
