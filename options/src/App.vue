<template>
  <v-app>

    <v-toolbar color="cyan" dark tabs height="48" app>
      <v-tabs
        color="cyan"
        slider-color="yellow"
        v-model="model">
        <v-tab ripple :href="temp" :key="temp">Templates</v-tab>
        <v-tab ripple :href="options" :key="options">Options</v-tab>
        <v-tab rippl :href="history" :key="history">History</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
      <v-tab-item :id="temp" :key="temp">
        <v-navigation-drawer clipped app>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                  Templates
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-divider/>
          <v-list>
            <v-list-tile v-for="template in templates" ripple @click="selectedTemplate = template" key="template.id">
              <v-list-tile-content>
                <v-list-tile-title>{{template.name}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <v-container fluid>
            {{selectedTemplate ? selectedTemplate.name : ''}}
          </v-container>
        </v-content>
      </v-tab-item>

      <v-tab-item :id="options" :key="options">
        <v-content>
          <v-container fluid>
            Api key <input v-model="apiKey"/>
            <button @click="saveKey">Save</button>
            <v-btn color="success">Success</v-btn>
          </v-container>
        </v-content>
      </v-tab-item>
      <v-tab-item :id="history" :key="history"></v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script>
  import {db} from './firebase';

  export default {
    name: 'app',
    data() {
      return {
        apiKey: '',
        templates: [],
        selectedTemplate: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        model: 'temp'
      };
    },
    props: ['app'],
    firestore: {
      templates: db.collection('templates')
    },
    methods: {
      saveKey() {
        console.log();
        const model = this.app.getModel();
        console.log(this.templates);
        if (model.user.email) {
          db.collection('users').doc(model.user.email).set({apiKey: this.apiKey}).then(() => {
            console.log('success');
          }).catch(err => {
            console.error(err);
          });
        }
      }
    }
  };
</script>

<style>
  .tabs {
    height: 100%;
  }
</style>
