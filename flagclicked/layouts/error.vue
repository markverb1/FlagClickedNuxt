<template>
  <div>
    <center>
      <div v-if="error.statusCode === 404">
        <h1>Our server is having issues finding this page</h1>
        <Error404 height="400" />
        <p>
          The server is having an issue finding this page. Make sure you've
          typed the URL correctly.
        </p>
      </div>
      <h1 v-else>An error occurred</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </center>
  </div>
</template>

<script>
import Error404 from "../components/Error404";

export default {
  components: { Error404 },
  props: ["error"],
  layout: "error",
};
</script>