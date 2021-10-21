<template>
  <div class="h-px min-h-screen p-4">
    <div class="layout bg-base rounded-lg flex flex-col min-h-full">
      <header class="header bg-secondary rounded-t-lg p-2">
        <div class="container flex mx-auto justify-center mb-2">
          <strong>
            <g-link class="text-accent text-3xl" to="/">{{ $static.metadata.siteName }}</g-link>
          </strong>
        </div>
        <div class="container mx-auto">
          <nav class="nav flex gap-1 justify-evenly">
            <NavLink v-for="(link, name) in pages" :href="link" :key="name">{{name}}</NavLink>
          </nav>
        </div>
      </header>
      <div class="flex-grow text-tertiary">
        <slot/>
      </div>
      <footer>
        <div class="bg-tertiary text-accent rounded-b-lg p-2">
          <p>FINAL FANTASY XIV © 2010 - {{ year }} SQUARE ENIX CO., LTD. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavLink from "../components/NavLink.vue";

export default {
  data() {
    return {
      year: new Date().getFullYear(),
      pages: {
        'CMS': '/cms/',
        'Links': '/links/',
        'FC': '/free-company/',
        'Linkshells': '/linkshell/',
        'Projects': '/projects/'
      }
    }
  },
  components: {
    NavLink
  }
}
</script>

<static-query>
query {
metadata {
siteName
}
}
</static-query>

<style>

</style>
