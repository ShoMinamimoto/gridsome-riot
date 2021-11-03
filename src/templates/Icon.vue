<!--suppress GraphQLUnresolvedReference -->
<template>
  <div>
    <g-image :src="$page.post.image"/>
  </div>
</template>

<page-query>
query ($id: ID!) { post: icon (id: $id){
  image(width: 80, height: 80, quality: 100, fit: inside)
}}
</page-query>

<script>
export default {
  name: "Icon"
}
</script>

<style scoped>

</style>