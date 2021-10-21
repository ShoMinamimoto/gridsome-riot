<template>
  <Layout>
    <PageTitle>
      Rainbow Riot
    </PageTitle>
    <p>Information about our FC will go here.</p>
  </Layout>
</template>

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