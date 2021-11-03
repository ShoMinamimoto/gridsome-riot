<!--suppress JSDeprecatedSymbols -->
<template>
  <div>
    <div v-for="category in $static.allLinks.edges" class="text-center">
      <div class="mx-auto border-2 w-1/3 rounded-xl bg-secondary text-accent text-xl font-semibold py-2 m-4">
        <span>{{ category.node.name }}</span>
      </div>
      <div class="grid grid-cols-3 justify-between justify-items-stretch gap-4">
        <div v-for="subcat in category.node.subcats">
          <div class="border-2 border-white rounded-2xl mb-2"><span class="text-lg font-semibold">{{
              subcat.name
            }}</span></div>
          <div class="flex">
            <div class="self-center">
              <g-image :src="subcat.image" class="border border-black ring-2 ring-xivring rounded-xl shadow-lg"/>
            </div>
            <div class="flex justify-center flex-col flex-1 gap-2 underline">
              <div v-for="link in subcat.links">
                <a :href="link.url">{{ link.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--suppress GraphQLUnresolvedReference -->
<static-query>
query { allLinks(order:ASC) { edges { node {
  name
  subcats {
    name
    image (height:80, width:80, quality:100)
    links {
      name
      url
    }
  }
}}}}
</static-query>

<script>
export default {
  name: "LinkCategory",
}
</script>

<style scoped>

</style>