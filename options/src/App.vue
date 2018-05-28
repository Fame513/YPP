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
            ></v-select>
            <div id="flora-wrap">
              <froala :tag="'textarea'" :config="config" v-model="selectedTemplate.description"/>
            </div>
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
          width: '648',
          heightMin: 96,
          // iframe: true,
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

  #flora-wrap .fr-wrapper * {
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #545454;
  }


  #flora-wrap .fr-wrapper a {
    color: #0084B4;
    text-decoration: none
  }

  #flora-wrap .fr-wrapper a:hover, #flora-wrap .fr-wrapper a:focus {
    text-decoration: underline
  }

  #flora-wrap .fr-wrapper h1, #flora-wrap .fr-wrapper h2, #flora-wrap .fr-wrapper h3, #flora-wrap .fr-wrapper h4, #flora-wrap .fr-wrapper h5, #flora-wrap .fr-wrapper h6 {
    padding: 10px 0px 20px 0px;
    color: #545454;
    font-weight: inherit
  }

  #flora-wrap .fr-wrapper h1 {
    font-size: 37px;
    line-height: 44px;
    padding: 12px 0px 10px 0px
  }

  #flora-wrap .fr-wrapper h2 {
    font-size: 27px;
    line-height: 35px
  }

  #flora-wrap .fr-wrapper h3 {
    font-size: 24px;
    line-height: normal
  }

  #flora-wrap .fr-wrapper h4 {
    font-size: 19px;
    line-height: normal
  }

  #flora-wrap .fr-wrapper h5 {
    font-size: 17px;
    line-height: normal
  }

  #flora-wrap .fr-wrapper .underlined {
    border-bottom: 1px solid #d4d4d4
  }

  #flora-wrap .fr-wrapper h2.underlined {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 15px
  }

  #flora-wrap .fr-wrapper h3.underlined {
    margin-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 8px;
    font-size: 20px
  }

  #flora-wrap .fr-wrapper h4.underlined {
    margin-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 8px;
    font-size: 20px
  }

  #flora-wrap .fr-wrapper h5.underlined {
    margin-top: 0px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    font-size: 16px
  }

  #flora-wrap .fr-wrapper p {
    padding: 10px 0px
  }

  #flora-wrap .fr-wrapper b {
    font-weight: normal
  }

  #flora-wrap .fr-wrapper strong {
    font-weight: bold
  }

  #flora-wrap .fr-wrapper em {
    font-style: italic
  }

  #flora-wrap .fr-wrapper ol {
    list-style: lower-roman
  }

  #flora-wrap .fr-wrapper ul {
    list-style: square
  }

  #flora-wrap .fr-wrapper label {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px
  }

  #flora-wrap .fr-wrapper label.disabled {
    color: #aaa
  }

  #flora-wrap .fr-wrapper form .formatting-help {
    font: 12px/1.4 "Helvetica Neue", Arial, sans-serif
  }

  #flora-wrap .fr-wrapper input[type=email], #flora-wrap .fr-wrapper input[type=url], #flora-wrap .fr-wrapper input[type=password], #flora-wrap .fr-wrapper input[type=text], #flora-wrap .fr-wrapper input[type=number] {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    background-clip: padding-box;
    background: white;
    border: 1px solid #bbb;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #7e7e7e;
    height: 30px;
    margin: 0;
    outline: 0;
    padding: 5px 0 6px 8px;
    position: relative;
    -webkit-appearance: none
  }

  #flora-wrap .fr-wrapper input[type=email][disabled], #flora-wrap .fr-wrapper input[type=url][disabled], #flora-wrap .fr-wrapper input[type=password][disabled], #flora-wrap .fr-wrapper input[type=text][disabled], #flora-wrap .fr-wrapper input[type=number][disabled] {
    background: #ededed;
    cursor: not-allowed
  }

  #flora-wrap .fr-wrapper input[type=email].invalid, #flora-wrap .fr-wrapper input[type=url].invalid, #flora-wrap .fr-wrapper input[type=password].invalid, #flora-wrap .fr-wrapper input[type=text].invalid, #flora-wrap .fr-wrapper input[type=number].invalid {
    background: #fff6f6;
    border-color: #a90000
  }

  #flora-wrap .fr-wrapper input[type=email].validating, #flora-wrap .fr-wrapper input[type=url].validating, #flora-wrap .fr-wrapper input[type=password].validating, #flora-wrap .fr-wrapper input[type=text].validating, #flora-wrap .fr-wrapper input[type=number].validating {
    background-image: url(https://public-assets.envato-static.com/assets/common/small_loader-04748fcf273b76003c0cdb271c3f9b4525bd291833be9162227bf7580697c2d7.gif);
    background-position: 99%;
    background-repeat: no-repeat
  }

  ::-webkit-input-placeholder {
    color: #bbb
  }

  #flora-wrap .fr-wrapper input:-moz-placeholder {
    color: #bbb
  }

  #flora-wrap .fr-wrapper textarea {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    background-clip: padding-box;
    background: white;
    border: 1px solid #bbb;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #7e7e7e;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 150px;
    margin: 0;
    outline: 0;
    padding: 10px
  }

  #flora-wrap .fr-wrapper textarea[disabled] {
    background: #ededed;
    cursor: not-allowed
  }

  #flora-wrap .fr-wrapper textarea.tall {
    height: 500px
  }

  #flora-wrap .fr-wrapper textarea.invalid {
    background: #fff6f6;
    border-color: #a90000
  }
  #flora-wrap .fr-wrapper select[multiple] {
    height: 100px
  }

  #flora-wrap .fr-wrapper input[type=file] {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    background: white;
    border: 1px solid #bbb;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 13px;
    margin: 0;
    padding: 5px 8px 6px 8px;
    outline: 0
  }

  #flora-wrap .fr-wrapper input[type=checkbox], input[type=radio] {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 18px;
    border: none;
    cursor: pointer;
    height: auto;
    line-height: normal;
    margin: 3px 0;
    padding: 0;
    width: auto
  }

  #flora-wrap .fr-wrapper input[type=checkbox]:focus, input[type=radio]:focus {
    outline: 1px dotted #222
  }

  #flora-wrap .fr-wrapper pre.existing-value {
    white-space: pre-wrap
  }

  #flora-wrap .fr-wrapper form fieldset {
    border: none;
    margin: 0;
    padding: 0
  }

  #flora-wrap .fr-wrapper form fieldset p {
    padding-top: 0
  }

  #flora-wrap .fr-wrapper input[type=checkbox].wordy-checkbox {
    float: left;
    margin: 3px 10px 60px 0
  }

  #flora-wrap .fr-wrapper code, #flora-wrap .fr-wrapper pre {
    color: #333333;
    font: 11px Monaco, "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", monospace;
    white-space: pre-wrap;
    word-wrap: break-word
  }

  #flora-wrap .fr-wrapper pre {
    background-color: whitesmoke;
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmNWY1ZjUiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2U2ZTZlNiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");
    background-size: 100%;
    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(50%, #f5f5f5), color-stop(50%, #e6e6e6));
    background-image: -webkit-linear-gradient(#f5f5f5 50%, #e6e6e6 50%);
    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(50%, #f5f5f5), color-stop(50%, #e6e6e6));
    background-image: linear-gradient(#f5f5f5 50%, #e6e6e6 50%);
    background-size: 38px 38px;
    border: 1px solid #d4d4d4;
    display: block;
    line-height: 19px;
    margin-bottom: 10px;
    overflow: visible;
    overflow-y: hidden;
    padding: 0 0 0 4px
  }


  #flora-wrap .fr-wrapper table td, #flora-wrap .fr-wrapper table th {
  /*border: inherit;*/
  }

  #flora-wrap .fr-wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    overflow: auto
  }

  #flora-wrap .fr-wrapper p {
    margin-bottom: 20px;
    padding: 0
  }

  #flora-wrap .fr-wrapper p:last-child {
    margin-bottom: 0
  }

  #flora-wrap .fr-wrapper small {
    color: #909090;
    font-size: 12px
  }

  #flora-wrap .fr-wrapper ol, #flora-wrap .fr-wrapper ul {
    margin-bottom: 20px;
    padding-left: 25px
  }

  #flora-wrap .fr-wrapper ol:last-child, #flora-wrap .fr-wrapper ul:last-child {
    margin-bottom: 0
  }

  #flora-wrap .fr-wrapper ol {
    list-style-type: decimal
  }

  #flora-wrap .fr-wrapper ul {
    list-style: disc
  }

  #flora-wrap .fr-wrapper table {
    margin-bottom: 20px;
    max-width: 100%;
    overflow: auto;
    border-collapse: separate;
  }

  #flora-wrap .fr-wrapper img {
    max-width: 100%;
    margin: 0;
    vertical-align: initial;
  }

  #flora-wrap .fr-wrapper blockquote {
    border-left: 1px solid #454545;
    color: #777;
    font-style: italic;
    margin-bottom: 20px;
    padding-left: 20px
  }

  #flora-wrap .fr-wrapper pre {
    margin-bottom: 20px
  }

  #flora-wrap .fr-wrapper h2, #flora-wrap .fr-wrapper h3, #flora-wrap .fr-wrapper h4, #flora-wrap .fr-wrapper h5, #flora-wrap .fr-wrapper h6 {
    margin: 30px 0 20px;
    padding: 0
  }

  #flora-wrap .fr-wrapper h2:first-child, #flora-wrap .fr-wrapper h3:first-child, #flora-wrap .fr-wrapper h4:first-child, #flora-wrap .fr-wrapper h5:first-child, #flora-wrap .fr-wrapper h6:first-child {
    margin-top: 0
  }

  #flora-wrap .fr-wrapper h1 {
    display: none
  }

  #flora-wrap .fr-wrapper h2 {
    border-bottom: 1px solid #d4d4d4;
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 10px
  }

  #flora-wrap .fr-wrapper h3 {
    border-bottom: 1px solid #d4d4d4;
    font-size: 18px;
    line-height: 27px;
    color: #545454;
    padding-bottom: 10px
  }

  #flora-wrap .fr-wrapper h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    text-transform: uppercase
  }

  #flora-wrap .fr-wrapper a {
    color: #0084B4
  }

  #flora-wrap .fr-wrapper a:hover {
    color: #00719b
  }

  #flora-wrap .fr-wrapper ol, #flora-wrap .fr-wrapper ul {
    padding-left: 35px
  }

</style>
