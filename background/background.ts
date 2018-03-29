const config = {
  apiKey: 'AIzaSyAlYdK3Bpb_qAsFn733rqbhiUbxLh-0e48',
  authDomain: 'yppy-1356c.firebaseapp.com',
  databaseURL: 'https://yppy-1356c.firebaseio.com',
  projectId: 'yppy-1356c',
  storageBucket: 'yppy-1356c.appspot.com',
  messagingSenderId: '95008419704'
};

const envatoClilentId = 'easy-music-uploader-q1haaron';
const serverUrl = 'https://audiojungle-uploader.herokuapp.com';

firebase.initializeApp(config);
const db = firebase.firestore();

interface Tokens {
  refreshToken: string;
  accessToken: string;
  expires: number;
}

interface Template {
  category: string,
  description: string,
  name: string,
  tags: string
}

class Model {
  tokens: Tokens;
  user: { name: string, email: string } = {name: '', email: ''};
  onChange: () => void = () => {
  };
  openAuthWindow = openAuthWindow;
  uploadFiles = uploadFiles;
  isLoading: boolean = false;
  progress: number = 0;
  templates: Template[] = [];
  selectedTemplate: number = 0;
  pasteData = pasteData;
  logout = logout;
  lastLoadedFiles: {
    files: { name: string, duration: string }[],
    archieName: string,
    previewName: string,
    imageName: string,
    tempo: string,
    isLoped: boolean,
    name: string
  };
}

const model: Model = new Model();
let wind;
let updateDataCallback;

loadTemplates().then((result) => {
  console.log(result);
  model.templates = result;
  model.onChange();
});

function uploadFiles(files: File[]) {
  console.log(files);
  if (!files || files.length === 0) {
    return;
  }

  const xhr: XMLHttpRequest = new XMLHttpRequest();

  // обработчик для закачки
  xhr.upload.onprogress = function (event) {
    console.log((event.loaded / event.total) * 100);
    model.progress = (event.loaded / event.total) * 100;
    model.onChange();
  };

  // обработчики успеха и ошибки
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function () {
    if (this.status == 200) {
      model.lastLoadedFiles = JSON.parse(this.response);
      console.log(JSON.parse(this.response));
      sendNotification('Files uploaded', 'Files uploaded successful');
    } else {
      console.log('error ' + this.status);
    }
    model.isLoading = false;
    model.onChange();
  };

  xhr.open('POST', serverUrl, true);
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('file' + i, files[i]);
  }
  xhr.send(formData);

  model.progress = 0;
  model.isLoading = true;
  model.onChange();
}

function updateData() {
  if (model.onChange) {
    model.onChange();
  }
}

function getModel() {
  return model;
}

function setCallback(callback) {
  updateDataCallback = callback;
}

function logout() {
  model.user = {name: '', email: ''};
  model.onChange();

}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    model.user.name = user.displayName;
    model.user.email = user.email;
    updateData();
  }
});

chrome.runtime.onMessageExternal.addListener(
  function (request, sender, sendResponse) {
    chrome.windows.remove(wind.id);
    console.log(request.token);
    firebase.auth().signInWithCustomToken(request.token);
    // const headers = {'Authorization': 'Bearer ' + request.tokens.access_token};
    // Promise.all([
    //   fetch('https://api.envato.com/v1/market/private/user/username.json', {headers}),
    //   fetch('https://api.envato.com/v1/market/private/user/email.json', {headers})
    // ])
    //   .then(([name, email]) => Promise.all([name.json(), email.json()]))
    //   .then(([name, email]) => {
    //     model.user.name = name.username;
    //     model.user.email = email.email;
    //     updateData();
    //   });
  });


function openAuthWindow() {
  chrome.windows.create({
    url: `https://api.envato.com/authorization?response_type=code&client_id=${envatoClilentId}&redirect_uri=${serverUrl}/auth`,
    type: 'popup',
    width: 655,
    height: 974
  }, function (win) {
    wind = win;
  });
}

function loadTemplates() {
  return db.collection('templates').get().then(function (querySnapshot) {
    const data = [];
    querySnapshot.forEach(function (doc) {
      data.push(doc.data());
    });
    return data;
  });
}

function pasteData() {
  chrome.tabs.query({active: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      data: model.lastLoadedFiles,
      template: model.templates[model.selectedTemplate]
    });
  });
}

function sendNotification(title: string, message: string) {
  chrome.notifications.create('', {
    message: message,
    type: 'basic',
    title: title,
    iconUrl: 'https://habrastorage.org/getpro/habr/avatars/4ec/bd0/85d/4ecbd085d692835a931d03174ff19539.png'
  });
}