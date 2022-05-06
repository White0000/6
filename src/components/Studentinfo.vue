<template>
  <div class="card" >
    <div>名字：{{ card_item.name }} </div>
      <div>ID：{{card_item.stuId}}</div>
      <div v-if="card_item.gender=='男'">性别：男</div>
      <div v-else>性别：女
    </div>
  </div>
</template>

<script>
export default {
  name: "Studentinfo",
  props:['card_item'],
}
</script>

<style scoped>
	
.card{
cursor: pointer;
}
</style>