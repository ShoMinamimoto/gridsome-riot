<!--suppress GraphQLUnresolvedReference -->
<template>
  <Layout>
    <PageTitle>Voyage Helper</PageTitle>
    <p>Information about our voyaging will go here.</p>
    <div v-for="icon in $static.allIcon.edges">
      <g-link :to="icon.node.path">{{icon.node.name}}</g-link>
    </div>
  </Layout>
</template>

<static-query>
query { allIcon { edges { node {
  name
  path
}}}}
</static-query>

<script>
import PageTitle from "../components/PageTitle";
export default {
  components: {PageTitle},
  metaInfo: {
    title: 'Voyages'
  }
}
</script>

<style scoped>

</style>