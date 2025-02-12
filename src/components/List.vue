<template>
  <div class="product-list">
    <div class="card" v-for="list in products" :key="list.id">
      <img :src="list.image" :alt="list.name">
      <p>{{ list.name }}</p>
      <p>가격 : {{  list.price  }}￦</p>
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
  background-image: url('./images/flower2.png');
  // background-size: cover;
  // background-repeat: no-repeat;
  width: 100vw;
  height: 88.8vh;
  // background-color: #f5d377;
  display: flex;
  gap: 4rem;
  justify-content: center;
  .card{
    margin-top: 140px;
    width: 200px;
    text-align: center;
    img{
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
    p{
      padding: 15px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #2c2b2b;
    }
    p:nth-of-type(2){
      font-weight: 300;
      font-size: 14px;
    }
    button{
      margin-top: 10px;
      font-size: 13px;
      word-break: keep-all;
      text-align: center;
      width: 95px;
      height: 90px;
      // border: 5px solid #dd2e2e;
      border: 13px solid #6bb143;
      outline: none;
      line-height: 20px;
      padding: 6px;
      border-radius: 50%;
      cursor: pointer;
      // background-color: #f59e4e;
      background-color:  #468124;
      color: #fff;
      transition: 0.5s;
      &:hover{
        border: 13px solid #468124;
        color: #fff;
      }
    }
  }
}
</style>