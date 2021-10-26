<!--suppress GraphQLUnresolvedReference, HtmlRequiredAltAttribute -->
<template>
  <Layout>
    <div class="relative">
      <PageTitle class="mr-10 text-center">
        Rainbow Riot
      </PageTitle>
      <div class="relative h-24 w-24 mx-auto">
        <img class="absolute inset-0" :src="$static.allFreeCompany.edges[0].node.Crest[0]"/>
        <img class="absolute inset-0" :src="$static.allFreeCompany.edges[0].node.Crest[1]"/>
        <img class="absolute inset-0" :src="$static.allFreeCompany.edges[0].node.Crest[2]"/>
      </div>
      <p class="text-center">Information about our FC will go here.</p></div>
  </Layout>
</template>

<static-query>
query { allFreeCompany{ edges{ node{
  Crest
}}}}
</static-query>

<script>
import PageTitle from "../components/PageTitle";

export default {
  components: {PageTitle},
  metaInfo: {
    title: "FC"
  },
  data(){
    return{
      fcInfo: null
    }
  },
}
</script>

<style scoped>

</style>