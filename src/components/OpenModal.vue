<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
    <h2>주문완료</h2>
    <p>주문이 성공적으로 완료되었습니다.</p>
    <button @click="handleClose">확인</button>
  </div>
</div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
});
const emit = defineEmits(["closeModal"]);
const handleClose = () => {
  emit("closeModal",false);
}
</script>

<style lang="scss" scoped>
.modal-overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 99.9vw;
  height: 99.8vh;
  background-color: rgba(0,0,0,0.5);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal{
    position: relative;
    z-index: 10;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: #e9e285;
    // background-color: #b9d37d;
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    button {
      width: 60px;
      padding: 9px;
      background-color: #86b41b;
      border: none;
      cursor: pointer;

    }  
  }
}
</style>