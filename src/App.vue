<template>
  <div>
    <Header />
    <Description class="mt-20"/>
    <CryptoBlog />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainBlog from "./components/Description.vue";
import Description from "./components/Description.vue";
import CryptoBlog from "./components/CryptoBlog.vue";
export default {
  name: "App",
  components: {
    Header,
    Description,
    CryptoBlog
  },
};
</script>