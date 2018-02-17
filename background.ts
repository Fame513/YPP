const config = {
  apiKey: 'AIzaSyAlYdK3Bpb_qAsFn733rqbhiUbxLh-0e48',
  authDomain: 'yppy-1356c.firebaseapp.com',
  databaseURL: 'https://yppy-1356c.firebaseio.com',
  projectId: 'yppy-1356c',
  storageBucket: 'yppy-1356c.appspot.com',
  messagingSenderId: '95008419704'
};

firebase.initializeApp(config);
const db = firebase.firestore();

interface Tokens {
  refreshToken: string;
  accessToken: string;
  expires: number;
}

class Model {
  tokens: Tokens;
  user: {name: string, email: string};
  onChage: () => void

}

const model: Model  = new Model();
let lastLoadedData;
let wind;
let username;
let updateDataCallback;

function updateData() {
  if (updateDataCallback) {
    updateDataCallback();
  }
}

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    chrome.windows.remove(wind.id);
    console.log(request.tokens);
    $.ajax({
      url: 'https://api.envato.com/v1/market/private/user/username.json',
      headers: {'Authorization': 'Bearer ' + request.tokens.access_token}
    }).done(function (data) {
      username = data.username;
      updateData();
    })
  });


function openAuthWindow() {
  chrome.windows.create({
    url: "https://api.envato.com/authorization?response_type=code&client_id=easy-music-uploader-q1haaron&redirect_uri=http://localhost/auth",
    // type: "popup",
    width: 655,
    height: 974
  }, function (win) {
    wind = win;
  });
}

function saveLastData(data) {
  lastLoadedData = data;
}

function getLastData() {
  return lastLoadedData;
}

function loadTemplates() {
  return db.collection('templates').get().then(function (querySnapshot) {
    const data = [];
    querySnapshot.forEach(function(doc) {
      data.push(doc.data());
    });
    return data;
  });
}