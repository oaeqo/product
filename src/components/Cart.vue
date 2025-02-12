<template>
  <div class="cart">
    <OpenModal :isOpen="isOpenModal" @closeModal="closeModal" />
    <div class="cart-list">
    <h2>장바구니</h2>
    <h3 :style="{marginTop:'50px', marginLeft:'15px'}" v-if="cart.length === 0">장바구니가 비었습니다.</h3>
    <ul v-else>
      <li v-for="list in cart" :key="list.id">
        <img :src="list.image" :alt="list.name">
        <p>{{ list.name }}</p>
        <p>가격: {{ list.price }}￦</p>
        <p>수량: {{ list.count }}</p>
        <button @click="removeCart(list.id)">삭제</button>
      </li>
    </ul>
  </div>
  <div class="cart-add">
    <h2>주문내역</h2>
    <div class="total">
      <p>상품금액 : {{  totalPrice }}</p>
      <p>배송비   : {{  shippingFee === 0 ? "무료" : `${shippingFee}원` }} </p>
      <p>(배송비 3,000원 / 5만원 이상 구매시 무료배송)</p>
      <p>총 결제금액 : {{ payment }}</p>
      <button @click="handleOpen">주문결제</button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import OpenModal from './OpenModal.vue';
import { computed, ref } from 'vue';
const isOpenModal = ref(false);
//라우터 인스턴스 생성
const router = useRouter();
const handleOpen = () => {
  isOpenModal.value = true;
}
const closeModal = (value) => {
  isOpenModal.value = value;
  emit('clear-cart',true);
  router.push('/'); //상품 목록 페이지로 이동
}
const props = defineProps({
  cart: Array
});
const emit = defineEmits(['remove-cart-id', 'clear-cart']);
const removeCart = (cartID) => {
  emit( 'remove-cart-id', cartID );
}
const totalPrice = computed(()=>{
//   let sum = 0;
//   props.cart.forEach((item)=>{
//   //가격*수량 :
//   sum += item.price * item.count;
// });
// return sum;

//배열 객체 사용
let result = props.cart.reduce( (sum,item)=>{
   return sum += item.price * item.count
},0);
return result;
});
const shippingFee = computed(()=>{
  return totalPrice.value >= 50000 ? 0 : 3000;
});
const payment = computed(()=>{
  return totalPrice.value + shippingFee.value;
});
</script>

<style lang="scss" scoped>
.cart{
  padding: 2rem 5rem;
  gap: 1rem;
  height: 81.6vh;
  display: flex;
  background-color: #f5d377;
  // background-image: url('./images/birth2.png');
  //   background-size: cover;
  // background-repeat: no-repeat;


  div{
    flex: 1;
    border: 1px solid #222;
    border-radius: 5px;
  }
  .cart-list{
    border: none;
    width: 80%;
    h2{
      margin-left: 17px;
    }
    ul{
      padding: 20px 0;
      li{
        display: flex;
        gap: 2rem;
        align-items: center;
        padding: 1rem;
        img{
          width: 100px;
          height: 100px;
        }
        p{
        font-size: 15px;
        }
        p:nth-of-type(2){
          font-size: 14px;
        }
        button {
          padding: 5px;
          background-color: transparent;
          outline: none;
          border: 2px solid #468124;
          cursor: pointer;
          &:hover{
            background-color: #407920;
            color: #fff;
          }
        }
      }
    }
  }
  .cart-add{
    position: fixed;
    right: 0;
    top: 270px;
    transform: translateX(-35%);
    width: 30%;
    height: 30%;
    padding: 50px;
    background-color: transparent;
    border: 20px solid #407920;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
      padding: 10px;
    }
    .total{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 1rem;
      p{
        padding: 7px;
        font-size: 15px;
      }
      p:nth-of-type(3){
          font-size: 13px;
        }
        p:nth-of-type(4){
          font-weight: bold;
        }
        button{
          margin-top: 20px;
          background-color: #6bb143;
          color: #fff;
          border: 3px solid  #468124;
          padding: 13px;
          // border-radius: 50%;
          cursor: pointer;
          transition: 0.4s;
      &:hover{
        background-color: #468124;
        color: #fff;
      }
        }
    }
  }
}
</style>