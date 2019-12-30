<template>
  <div>
    <b>Proxy Object:</b>
    {{ licenses }}
    <ul>
      <li v-for="item in licenses.items" :key="item.id">{{ item.id }}</li>
    </ul>
    <a v-if="licenses.page > 1" @click="licenses.page -= 1">Previous page </a>
    <a v-if="licenses.page < licenses.totalPages" @click="licenses.page++">Next page</a>
  </div>
</template>

<script>
import { createInstance } from 'vuex-pagination'
export default {
  computed: {
    licenses: createInstance('licenses', {
      page: 1,
      pageSize: 10
    }),
    allLicenses () {
      return this.licenses.items
    }
  }
}
</script>

<style>

</style>
