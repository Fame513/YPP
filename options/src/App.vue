<template>
  <v-app>

    <v-toolbar color="cyan" dark tabs height="48" app >
      <v-tabs
        color="cyan"
        slider-color="yellow"
        v-model="selectedTab">
        <v-tab ripple>Templates</v-tab>
        <v-tab ripple>Options</v-tab>
        <v-tab ripple>History</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="selectedTab">
      <v-tab-item>
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
            <template v-for="template in templates">
              <v-list-tile  ripple @click="selectedTemplate = template" :key="template.id"
                           v-bind:class="{ selected: selectedTemplate === template}">
                <v-list-tile-content>
                  <v-list-tile-title>{{template.name}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider/>
            </template>
            <v-list-tile  ripple @click="addTemplate()">
              <v-list-tile-content>
                <v-list-tile-title><b>Add template</b></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <v-container fluid v-if="selectedTemplate">
            <v-text-field label="Name" v-model="selectedTemplate.name"/>
            <v-select
              :items="categoryListItems"
              v-model="selectedTemplate.category"
              label="Category"
              single-line
            ></v-select>
            <v-text-field label="Category" v-model="selectedTemplate.category"/>
            <froala :tag="'textarea'" :config="config" v-model="selectedTemplate.description"/>
            <v-text-field label="Tags" multi-line v-model="selectedTemplate.tags"/>
            <v-btn @click="deleteTemplate(selectedTemplate.id)" color="error">Delete</v-btn>
            <v-btn @click="saveTemplate(selectedTemplate)" color="success">Save</v-btn>
          </v-container>
        </v-content>
      </v-tab-item>

      <v-tab-item>
        <v-content>
          <v-container fluid>
            <v-text-field label="Api key" v-model="user.apiKey"/>
            <v-btn color="success" @click="saveKey">Save</v-btn>
          </v-container>
        </v-content>
      </v-tab-item>
      <v-tab-item></v-tab-item>
    </v-tabs-items>
  </v-app>
</template>

<script>
  import {db, auth} from './firebase';

  $(function() {
    $.FroalaEditor.DefineIcon('trackList', {NAME: 'list-alt'});
    $.FroalaEditor.RegisterCommand('trackList', {
      title: 'Paste track list',
      focus: false,
      undo: false,
      refreshAfterCallback: false,
      callback: function () {
        this.html.insert('{{INCLUDES}}');
      }
    });
  });

  export default {
    name: 'app',
    data() {
      return {
        categoryListItems: [
          {value: "music", text: "Music"},
          {value: "music/ambient", text: " - Ambient"},
          {value: "music/ambient/chill", text: "------ - Chill"},
          {value: "music/ambient/atmospheres-soundscapes", text: "------ - Atmospheres, Soundscapes"},
          {value: "music/ambient/lounge", text: "------ - Lounge"},
          {value: "music/ambient/electronic", text: "------ - Electronic"},
          {value: "music/ambient/new-age", text: "------ - New Age"},
          {value: "music/children-s", text: " - Children's"},
          {value: "music/cinematic", text: " - Cinematic"},
          {value: "music/cinematic/dramatic-action-adventure", text: "------ - Dramatic, Action, Adventure"},
          {value: "music/cinematic/suspense-dark", text: "------ - Suspense, Dark"},
          {value: "music/cinematic/comedy", text: "------ - Comedy"},
          {value: "music/cinematic/romantic-sentimental", text: "------ - Romantic, Sentimental"},
          {value: "music/cinematic/sci-fi-fantasy", text: "------ - Sci-Fi, Fantasy"},
          {value: "music/classical", text: " - Classical"},
          {value: "music/classical/piano", text: "------ - Piano"},
          {value: "music/classical/guitar", text: "------ - Guitar"},
          {value: "music/classical/strings", text: "------ - Strings"},
          {value: "music/classical/orchestral", text: "------ - Orchestral"},
          {value: "music/classical/chamber-small-ensembles", text: "------ - Chamber, Small Ensembles"},
          {value: "music/classical/modern", text: "------ - Modern"},
          {value: "music/corporate", text: " - Corporate"},
          {value: "music/corporate/news", text: "------ - News"},
          {value: "music/corporate/tech", text: "------ - Tech"},
          {value: "music/corporate/motivational", text: "------ - Motivational"},
          {value: "music/country-western", text: " - Country, Western"},
          {value: "music/drum-bass-breakbeat", text: " - Drum &amp; Bass, Breakbeat"},
          {value: "music/electronica", text: " - Electronica"},
          {value: "music/electronica/techno", text: "------ - Techno"},
          {value: "music/electronica/trance", text: "------ - Trance"},
          {value: "music/electronica/hard-industrial", text: "------ - Hard, Industrial"},
          {value: "music/electronica/dance", text: "------ - Dance"},
          {value: "music/electronica/downtempo", text: "------ - Downtempo"},
          {value: "music/electronica/idm-glitch", text: "------ - IDM, Glitch"},
          {value: "music/electronica/dubstep", text: "------ - Dubstep"},
          {value: "music/house", text: " - House"},
          {value: "music/experimental-abstract", text: " - Experimental, Abstract"},
          {value: "music/folk-acoustic", text: " - Folk, Acoustic"},
          {value: "music/funk-groove", text: " - Funk, Groove"},
          {value: "music/soul-r-b", text: " - Soul, R&amp;B"},
          {value: "music/hip-hop", text: " - Hip-Hop"},
          {value: "music/holiday-seasonal", text: " - Holiday &amp; Seasonal"},
          {value: "music/jazz", text: " - Jazz"},
          {value: "music/jazz/blues", text: "------ - Blues"},
          {value: "music/jazz/swing", text: "------ - Swing"},
          {value: "music/jazz/big-band", text: "------ - Big Band"},
          {value: "music/jazz/electronic", text: "------ - Electronic"},
          {value: "music/jazz/smaller-ensembles", text: "------ - Smaller Ensembles"},
          {value: "music/jazz/solos", text: "------ - Solos"},
          {value: "music/pop", text: " - Pop"},
          {value: "music/rock", text: " - Rock"},
          {value: "music/rock/grunge-garage-punk", text: "------ - Grunge, Garage, Punk"},
          {value: "music/rock/hard-rock-metal", text: "------ - Hard Rock, Metal"},
          {value: "music/rock/indie-rock", text: "------ - Indie Rock"},
          {value: "music/rock/lite-rock", text: "------ - Lite Rock"},
          {value: "music/world-beat", text: " - World Beat"},
          {value: "music/world-beat/latin", text: "------ - Latin"},
          {value: "music/world-beat/african", text: "------ - African"},
          {value: "music/world-beat/asian", text: "------ - Asian"},
          {value: "music/world-beat/indian", text: "------ - Indian"},
          {value: "music/world-beat/middle-eastern", text: "------ - Middle Eastern"},
          {value: "music/world-beat/reggae", text: "------ - Reggae"},
          {value: "music/world-beat/island-tropical", text: "------ - Island, Tropical"},
          {value: "music/world-beat/ancient-medieval-celtic", text: "------ - Ancient, Medieval, Celtic"},
          {value: "music/percussion", text: " - Percussion"},
          {value: "music/percussion/traditional", text: "------ - Traditional"},
          {value: "music/percussion/tribal", text: "------ - Tribal"},
          {value: "music/percussion/avant-garde-fx", text: "------ - Avant-Garde, FX"},
          {value: "music/vocals-voice", text: " - Vocals, Voice"},
          {value: "music/vocals-voice/female", text: "------ - Female"},
          {value: "music/vocals-voice/male", text: "------ - Male"},
          {value: "music/vocals-voice/mixed", text: "------ - Mixed"},
          {value: "music/miscellaneous", text: " - Miscellaneous"}
        ],
        apiKey: '',
        user: {},
        templates: [],
        selectedTab: 0,
        selectedTemplate: null,
        config: {
          heightMin: 96,
          iframe: true,
          iframeStyleFiles: ['/options/dist/assets/description.css'],
          htmlAllowedAttrs: ['href', 'src'],
          htmlAllowedStyleProps: [],
          toolbarSticky: false,
          zIndex: 1,
          pasteDeniedAttrs: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen', 'allowtransparency', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background', 'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'hreflang', 'http-equiv', 'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign', 'webkitallowfullscreen', 'width', 'wrap'],
          wordDeniedAttrs: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen', 'allowtransparency', 'alt', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background', 'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'hreflang', 'http-equiv', 'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign', 'webkitallowfullscreen', 'width', 'wrap'],
          imageMultipleStyles: false,
          imageResize: false,
          imageStyles: {},
          imageDefaultWidth: 0,
          imageDefaultAlign: 'left',
          imageDefaultDisplay: 'inline',
          iframeDefaultStyle: '',
          toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'paragraphFormat', 'formatOL', 'formatUL', 'quote',
            'html', 'fullscreen', 'insertLink', 'insertImage', 'insertTable', 'trackList', '|', 'specialCharacters', 'clearFormatting', '|', 'undo', 'redo', '|', 'help',],
          imageEditButtons: ['imageReplace', 'imageRemove', '|', 'imageLink', 'linkOpen', 'linkEdit', 'linkRemove', 'imageAlt'],
          quickInsertButtons: ['image', 'table', 'ul', 'ol'],
          quickInsertTags: ['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'blockquote'],
          tableEditButtons: ['tableRemove', '|', 'tableRows', 'tableColumns', 'tableCells'],
          htmlAllowedTags: ['a', 'b', 'blockquote', 'br', 'cite', 'code', 'del', 'em', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'img', 'ins', 'kbd', 'li', 'ol', 'p', 'pre', 'strong', 'sub', 'sup', 'table', 'tbody', 'td', 'th', 'tr', 'u', 'ul'],
          pasteDeniedTags: ['abbr', 'address', 'area', 'article', 'aside', 'audio', 'base', 'bdi', 'bdo', 'button', 'canvas', 'caption', 'col', 'colgroup', 'datalist', 'dd', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1',
            'header', 'hgroup', 'hr', 'iframe', 'input', 'keygen', 'label', 'legend', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'optgroup', 'option', 'output', 'param', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike'
            , 'summary', 'textarea', 'tfoot', 'thead', 'time', 'title', 'track', 'var', 'video', 'wbr'],
          wordDeniedTags: ['abbr', 'address', 'area', 'article', 'aside', 'audio', 'base', 'bdi', 'bdo', 'button', 'canvas', 'caption', 'col', 'colgroup', 'datalist', 'dd', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1',
            'header', 'hgroup', 'hr', 'iframe', 'input', 'keygen', 'label', 'legend', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'optgroup', 'option', 'output', 'param', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike'
            , 'summary', 'textarea', 'tfoot', 'thead', 'time', 'title', 'track', 'var', 'video', 'wbr'],
          htmlRemoveTags: ['abbr', 'address', 'area', 'article', 'aside', 'audio', 'base', 'bdi', 'bdo', 'button', 'canvas', 'caption', 'col', 'colgroup', 'datalist', 'dd', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1',
            'header', 'hgroup', 'hr', 'iframe', 'input', 'keygen', 'label', 'legend', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'optgroup', 'option', 'output', 'param', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike'
            , 'summary', 'textarea', 'tfoot', 'thead', 'time', 'title', 'track', 'var', 'video', 'wbr'],
          tableResizer: false,
          tableStyles: {},
          linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
          inlineStyles: {},
          linkStyles: {},
          paragraphStyles: {},
          tableCellStyles: {},
          paragraphFormat: {
            N: 'Normal',
            H2: 'Heading 2',
            H3: 'Heading 3',
            H4: 'Heading 4',
            H5: 'Heading 5',
            H6: 'Heading 6',
            PRE: 'Pre',
            CODE: 'Code',
            KBD: 'Kbd',
          }
        }
      };
    },
    props: ['app'],
    firestore: {
      templates: db.collection('templates')
    },
    methods: {
      saveKey() {
        console.log(this.apiKey);
        const user = auth.currentUser;
        const uid = user && user.uid;
        if (!uid) {
          return;
        }
        db.collection('users').doc(uid).update({apiKey: this.user.apiKey}).then(() => {
          console.log('success');
        }).catch(err => {
          console.error(err);
        });
      },

      saveTemplate(template) {
        db.collection('templates').doc(template.id).set(template);
      },

      addTemplate() {
        this.$firestoreRefs.templates.add({name: 'New template', category: '', description: '', tags: ''})
      },

      deleteTemplate(temlateId) {
        this.$firestoreRefs.templates.doc(temlateId).delete();
        this.selectedTemplate = null;
      }
    },

    mounted: function () {
      auth.onAuthStateChanged(user => {
        if(user) {
          this.$bind('user', db.collection('users').doc(user.uid))
        } else {
          if (this.$firestoreRefs.user) {
            this.$unbind('user')
          }
        }
      })
    }
  };
</script>

<style>
  .tabs {
    height: 100%;
  }

  .toolbar {
    z-index: 10;
  }

  .selected {
    background-color: cyan;
  }
</style>
