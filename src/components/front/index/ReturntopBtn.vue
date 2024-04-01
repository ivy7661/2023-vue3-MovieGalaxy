<template>
  <div class="back-top hide d-flex justify-content-center align-items-center" title="回頂部">
    <img src="/public/icons/btn_back_top.svg" alt="btn_back_top" class="pt-2" />
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  mounted() {
    this.returnTop();
  },
  methods: {
    returnTop() {
      $(document).ready(() => {
        // 捲軸偵測距離頂部超過 50 才顯示按鈕
        $(window).scroll(() => {
          if ($(window).scrollTop() > 50) {
            if ($('.back-top').hasClass('hide')) {
              $('.back-top').toggleClass('hide');
            }
          } else {
            $('.back-top').addClass('hide');
          }
        });

        // 點擊按鈕回頂部
        $('.back-top').on('click', (event) => {
          $('html, body').animate(
            {
              scrollTop: 0
            },
            300 // 回頂部時間為 300 毫秒
          );
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.back-top {
  z-index: 3000;
  position: fixed;
  bottom: 15px;
  right: 13px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-size: 60px 60px;
  border-radius: 20px;
  background: rgba(219, 144, 255, 0.1);
  box-shadow: 3px 4px 32px 0px rgba(167, 122, 202, 0.25);
  transition: all 0.2s linear;
}

.back-top:hover {
  opacity: 0.8;
  box-shadow: 0px 0px 3px;
}

.back-top.hide {
  opacity: 0;
  transform: translateY(150%);
}
</style>
