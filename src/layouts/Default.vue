<template>
  <div class="layout bg-base">
    <header class="header bg-secondary">
      <div class="container flex mx-auto justify-center">
        <strong>
          <g-link class="text-accent" to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
      </div>
      <div class="container mx-auto">
        <nav class="nav flex justify-evenly">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about/">About</g-link>
          <g-link class="nav__link" to="/cms/">CMS</g-link>
          <g-link class="nav__link" to="/links/">Links</g-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
metadata {
siteName
}
}
</static-query>

<style>
.nav__link {
  @apply text-accent
}
</style>
