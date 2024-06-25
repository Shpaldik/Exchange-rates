<template>
  <div>
    <Header />
    <Description class="mt-40"/>
    <CryptoBlog class="mt-20"/>
    <Bitles class="mt-20"/>
    <Pros />
    <Register class="mt-20"/>
    <Footer class="mt-20"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MainBlog from "./components/Description.vue";
import Description from "./components/Description.vue";
import CryptoBlog from "./components/CryptoBlog.vue";
import Bitles from "./components/Bitles.vue";
import Pros from "./components/Pros.vue";
import Register from "./components/Register.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Description,
    CryptoBlog,
    Bitles,
    Pros,
    Register,
    Footer
  },
};
</script>