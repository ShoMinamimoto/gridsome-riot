<!--suppress GraphQLUnresolvedReference -->
<template>
  <Layout>
    <PageTitle>Voyage Helper</PageTitle>
    <p>Information about our voyaging will go here.</p>
    <TableWrapper :headers="Object.keys($static.allAirshipParts.edges[0].node)">
      <TableContents :rows="$static.allAirshipParts.edges"></TableContents>
    </TableWrapper>
  </Layout>
</template>

<static-query>
query {
  allItems(filter:{ItemUICategory:{in:["Airship Hull","Airship Rigging","Airship Forecastle","Airship Aftcastle"]}}){
    edges{
      node{
        Name
      }}}
  allAirshipParts(sort:{order:ASC} skip:2){
    edges{
      node{
        Slot
        Rank
        Components
        Surveillance
        Retrieval
        Speed
        Range
        Favor
        Class
      }}}}
</static-query>

<script>
import PageTitle from "../components/PageTitle";
import TableWrapper from "../components/TableWrapper";
import TableContents from "../components/TableContents";

export default {
  components: {TableContents, TableWrapper, PageTitle},
  metaInfo: {
    title: 'Voyages'
  },
  methods: {
    slotName(number) {
      switch (number) {
        case 0:
          return 'Hull';
        case 1:
          return 'Rigging';
        case 2:
          return 'Forecastle';
        case 3:
          return 'Aftcastle';
      }
    }
  }
}
</script>

<style scoped>

</style>