<template>
  <div v-if="page">
    <div v-html="page.content.rendered" />
    <p>
    {{page.content.rendered}}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios'

@Component
export default class HelloWorld extends Vue {
  @Prop() slug!: string;
  page: any = null;

  async mounted() {
    const api = axios.create()
    try {
      const resp = await api.get(`http://wp.wcblocks.local/wp-json/wp/v2/pages?slug=${this.slug}`)
      if(resp.data) {
        console.log(resp)
        this.page = resp.data[0]
      }
    }catch(e){
      console.error(e)
    }
  }
}
</script>
