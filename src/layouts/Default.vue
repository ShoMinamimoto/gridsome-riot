<!--suppress GraphQLUnresolvedReference -->
<template>
  <div class="h-px min-h-screen p-4">
    <div
        class="relative p-4 bg-xivbase shadow-lg rounded-lg border border-black ring-2 ring-xivring flex flex-col min-h-full text-white">
      <div class="absolute inset-x-0 top-0 h-1/5 max-h-20 bg-gradient-to-t from-xivbase to-xivtop rounded-t-lg"></div>
      <div class="relative flex flex-col flex-grow min-h-full">
        <header class="header p-2">
          <div class="container flex mx-auto justify-center mb-2">
            <strong>
              <g-link class="text-3xl" to="/">{{ $static.metadata.siteName }}</g-link>
            </strong>
          </div>
          <div class="container mx-auto">
            <nav class="nav flex gap-1 justify-evenly">
              <NavLink v-for="(link, name) in pages" :key="name" :href="link">{{ name }}</NavLink>
            </nav>
          </div>
        </header>
        <div class="flex-grow px-2">
          <slot/>
        </div>
        <footer>
          <div class="text-xivring p-2 mt-4">
            <g-link class="float-right" to="/about/"><font-awesome :icon="['fas','info-circle']"></font-awesome> About</g-link>
            <p>FINAL FANTASY XIV © 2010 - {{ year }} SQUARE ENIX CO., LTD. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
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
        'Projects': '/projects/',
        'Voyages': '/voyages/'
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
