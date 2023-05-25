<template>
    <div ref="onepage" id="onepage">
		<section ref="section1" class="s1">section01</section>
        <section ref="section2" class="s2">section02</section>
        <section ref="section3" class="s3">section03</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      total_section: 0,
      current_idx: 0,
      screen_h: 0,
      page_h: 0,
      last_y: 0,
      onpage_on: true,
      isScroll: false,
    };
  },
  mounted() {
    this.init();

    window.addEventListener('resize', this.setHeight);
    document.body.addEventListener('scroll', this.handleScroll);
    document.body.addEventListener('touchmove', this.handleScroll);
    document.body.addEventListener('mousewheel', this.handleScroll);
  },
  methods: {
    init() {
      this.setHeight();

      this.total_section = this.$refs.onepage.querySelectorAll('section').length;
      this.last_y = this.page_h * this.total_section;
    },
    handleScroll(event) {
      if (this.last_y > window.pageYOffset && !this.onpage_on) {
        console.log(':: 원페이지 시작 ::');
        this.onpage_on = true;
        this.isScroll = false;
      }

      if (!this.onpage_on) return;

      event.preventDefault();
      event.stopPropagation();
      if (this.isScroll) return;

      this.isScroll = true;
      const direction = event.deltaY > 0 ? 1 : -1;

      let y = 0;
      if (direction === -1) {
        this.current_idx--;
        if (this.current_idx < 0) {
          this.current_idx = -1;
        }
        y = this.current_idx * this.page_h;
      } else {
        this.current_idx++;
        if (this.current_idx > this.total_section) {
          this.current_idx = this.total_section;
          this.onpage_on = false;
          return;
        }

        y = this.current_idx * this.page_h;
      }

      window.scrollTo({ top: y, behavior: 'smooth' });
      setTimeout(() => {
        this.isScroll = false;
      }, 500);
    },
    setHeight() {
        const windowHeight = window.innerHeight; // 창의 높이
        this.screen_h = windowHeight - 76;
        this.page_h = this.screen_h;
        const sections = this.$refs.onepage.querySelectorAll('section');
        sections.forEach((section) => {
            section.style.height = this.page_h + 'px';
      });
    },
  },
};
</script>

<style scoped>
html{
    padding:0;
    margin:0;
    }
section{box-sizing:border-box;color:#fff;font-size:24px;text-align:center;}
.s1{background-color:#ff7040;}
.s2{background-color:#e8e87b;}
.s3{background-color:#69a7ff;}
</style>