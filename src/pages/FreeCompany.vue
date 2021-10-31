<!--suppress GraphQLUnresolvedReference, HtmlRequiredAltAttribute -->
<template>
  <Layout>
    <div class="relative">
      <PageTitle class="mr-10 text-center">
        Rainbow Riot
      </PageTitle>
      <div class="relative h-24 w-24 mx-auto">
        <img :src="$static.allFreeCompany.edges[0].node.Crest[0]" class="absolute inset-0"/>
        <img :src="$static.allFreeCompany.edges[0].node.Crest[1]" class="absolute inset-0"/>
        <img :src="$static.allFreeCompany.edges[0].node.Crest[2]" class="absolute inset-0"/>
      </div>
    </div>
    <div class="container flex gap-4 mx-auto">
      <div class="flex-grow w-1/2">
        <h3 class="text-xl m-4"><strong>Our members:</strong></h3>
        <table class="w-full border-collapse table-fixed border-white border-2 text-lg">
          <tr>
            <th class="w-24 border-white border-2">Avatar</th>
            <th class="border-white border-2">Rank</th>
            <th class="border-white border-2">Name</th>
          </tr>
          <tr v-for="member in $static.allCompanyMembers.edges">
            <td class="border-white border-2">
              <a :href="'https://na.finalfantasyxiv.com/lodestone/character/' + member.node.ID" target="_blank"><img
                  :src="member.node.Avatar"/></a>
            </td>
            <td class="border-white border-2">
              <div class="text-center">
                <img :src="member.node.RankIcon" class="inline"/> {{ member.node.Rank }}
              </div>
            </td>
            <td class="border-white border-2">
              <span class="ml-2">{{ member.node.Name }}</span>
            </td>
          </tr>
        </table>
      </div>
      <div class="flex-grow w-1/2 text-lg">
        <h3 class="text-xl m-4"><strong>Our FC estate:</strong></h3>
        <span class="ml-4">{{ $static.allFreeCompany.edges[0].node.Estate.Name }}
          {{$static.allFreeCompany.edges[0].node.Estate.Plot}} on
        {{ $static.allFreeCompany.edges[0].node.DC }},
          {{ $static.allFreeCompany.edges[0].node.Server }}</span>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query { allFreeCompany{ edges{ node{
  Crest
  DC
  Estate {
    Name
    Plot
  }
  Server
}}}
  allCompanyMembers(order: ASC){ edges{ node{
    Avatar
    ID
    Name
    Rank
    RankIcon
  }}}}
</static-query>

<script>
import PageTitle from "../components/PageTitle";

export default {
  components: {PageTitle},
  metaInfo: {
    title: "FC"
  },
  data() {
    return {
      fcInfo: null
    }
  },
}
</script>

<style scoped>

</style>