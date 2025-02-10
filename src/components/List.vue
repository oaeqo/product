<template>
  <div class="product-list">
    <div class="card" v-for="list in products" :key="list.id">
      <img :src="list.image" :alt="list.name">
      <p>가격 : {{  list.price  }}</p>
      <button @click="addToList(list)">장바구니 추가</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products:Array,
  addToCart : Function
});
const emit = defineEmits(['add-to-cart']);
const addToList = (list) => {
  emit( 'add-to-cart', list );
}
</script>

<style lang="scss" scoped>
.product-list{
  display: flex;
  gap: 2rem;
  justify-content: center;
  .card{
    width: 200px;
    text-align: center;
    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
    p{
      padding: 20px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
    button{
      margin-top: 10px;
      font-size: 13px;
      word-break: keep-all;
      text-align: center;
      width: 95px;
      height: 90px;
      border: 10px solid #dd2e2e;
      outline: none;
      line-height: 20px;
      padding: 11px;
      border-radius: 50%;
      cursor: pointer;
      background-color: #f59e4e;
      transition: 0.4s;
      &:hover{
        background-color: #dd2e2e;
        color: #fff;
      }
    }
  }
}
</style>