<template>
  <v-container>
    <v-list>
      <v-list-item>
          <h1>Any issues?</h1>
      </v-list-item>
      <v-list-item>
        <span>We apologize for any inconvenience caused by the errors you have encountered. Your satisfaction is our top priority, and we appreciate your patience as we work to resolve these issues. Please use this page to report any errors or problems you have experienced, and we will do our best to rectify them swiftly.</span>
      </v-list-item>
      <v-list-item>
      <span>There are a few ways to report issues to us:</span>
      <ul>
        <li>Send us an email at <a href="mailto:public@patrickli.one">public@patrickli.one</a></li>
        <li>Send us a GitHub issues at <a href="https://github.com/PSY3650J-International-Students/dishdiplomat-www/issues/new">PSY3650J-International-Students/dishdiplomat-www</a></li>
      </ul>
      </v-list-item>
      <v-list-item>
        <span>When reporting issues, please try to include as much information as possible.</span>
        <span>If you are willing to become one of our contributors, please start by checking our code repository at <a href="https://github.com/PSY3650J-International-Students/dishdiplomat-www">PSY3650J-International-Students/dishdiplomat-www</a>. You can create a new pull request at <a href="https://github.com/PSY3650J-International-Students/dishdiplomat-www/pulls">https://github.com/PSY3650J-International-Students/dishdiplomat-www/pulls</a></span>
      </v-list-item>
      <v-list-item>
      <span>Thank you for your support!</span>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const list = ref<number>(0)
</script>
