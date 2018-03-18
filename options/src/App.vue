<template>
  <div>
    Api key <input v-model="apiKey"/>
    <button @click="saveKey">Save</button>
  </div>
</template>

<script>
  import { db } from './firebase';

export default {
  name: 'app',
  data () {
    return {
      apiKey: ''
    }
  },
  props: ['app'],
  firestore: {
    templates: db.collection('templates')
  },
  methods: {
    saveKey() {
      console.log();
      const model = this.app.getModel();
      if (model.user.email) {
        db.collection("users").doc(model.user.email).set({apiKey: this.apiKey}).then(() => {
          console.log('success')
        }).catch(err => {
          console.error(err);
        });
      }
    }
  }
}
</script>
