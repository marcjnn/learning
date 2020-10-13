<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug }
          }"
        >{{ destination.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style>
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.vue-school-active-link {
  color: #f04f4b;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: #f04f4b;
  font-weight: bold;
}
</style>
