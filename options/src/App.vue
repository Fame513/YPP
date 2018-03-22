<template>
  <v-app>

    <v-toolbar color="cyan" dark tabs height="48" app >
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
          <v-container fluid v-if="selectedTemplate">
            <v-text-field label="Name" v-model="selectedTemplate.name"/>
            <v-text-field label="Category" v-model="selectedTemplate.category"/>
            <froala :tag="'textarea'" :config="config" v-model="selectedTemplate.description"/>
            <v-text-field label="Tags" multi-line v-model="selectedTemplate.tags"/>
            <v-btn @click="saveTemplate(selectedTemplate)">Save</v-btn>
          </v-container>
        </v-content>
      </v-tab-item>

      <v-tab-item :id="options" :key="options">
        <v-content>
          <v-container fluid>
            <input v-model="apiKey"/>
            <v-text-field label="Api key" v-model="apiKey"/>
            <v-btn color="success" @click="saveKey">Save</v-btn>
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
        model: 'temp',
        config: {
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
          iframeDefaultStyle: '',
          toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'paragraphFormat', 'formatOL', 'formatUL', 'quote',
            'html', 'fullscreen', 'insertLink', 'insertImage', 'insertTable', '|', 'specialCharacters', 'clearFormatting', '|', 'undo', 'redo', '|', 'help',],
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
      },
      saveTemplate(template) {
        db.collection('templates').doc(template.id).set(template);
      }
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
</style>
