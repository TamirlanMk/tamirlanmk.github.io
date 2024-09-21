<script>
export default {
  async mounted() {
    await this.$nextTick();
    document.body.addEventListener('mousemove', this.onMouseMove);
  },
  beforeUnmount() {
    document.body.removeEventListener('mousemove', this.onMouseMove);
  },
  methods: {
    onMouseMove(e) {
      const cardRect = document.body.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;

      const target = e.target.closest('[data-cursor]') || e.target;

      if (target?.dataset?.cursor) {
        this.$refs.highlight.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y}) translate(-50%,-50%) scale(2)`;
      } else {
        this.$refs.highlight.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y}) translate(-50%,-50%)`;
      }

      this.$refs.cursor.style.transform = `matrix(1, 0, 0, 1, ${x}, ${y}) translate(-50%,-50%)`;
    },
  },
};
</script>

<template>
  <div>
    <div ref="cursor" class="cursor z-[100]"></div>
    <div ref="highlight" class="cursor-highlight"></div>
  </div>
</template>

<style scoped>
.cursor {
  background-color: rgb(52, 8, 120);

  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;

  will-change: transform;
  transform-origin: center;

  pointer-events: none;
  border-radius: 50%;

  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  mix-blend-mode: difference;
}

.cursor-highlight {
  background: rgb(255, 255, 255);

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;

  will-change: transform;
  transform-origin: center;

  pointer-events: none;
  border-radius: 50%;
  mix-blend-mode: difference;

  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
