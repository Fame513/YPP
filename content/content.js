chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('message', message);
  console.log('sender', sender);
  sendResponse('dooooooon');
});



$(function () {
  var $description = $('textarea#description');
  var $tags = $('#tags_default');
  var $name = $('#name');
  var $category = $('#category');
  var $loopedNo = $('#item_item_attributes_attributes_0_boolean_value_no');
  var $loopedYes = $('#item_item_attributes_attributes_0_boolean_value_yes');
  var $audioFiles = $('#item_item_attributes_attributes_1_multiple_select_value');
  var $noVocals = $('#item_item_attributes_attributes_2_not_applicable');
  var $mainLength = $('#item_item_attributes_attributes_5_text_value');
  var $aditionalLength = $('#item_item_attributes_attributes_6_text_value');
  var $tempo = $('#item_item_attributes_attributes_9_text_value');
  var $youtubeContentYes = $('#item_item_attributes_attributes_10_boolean_value_yes');
  var $youtubeContentValue = $('#item_item_attributes_attributes_11_text_value');
  var $licese = $('#got_proper_licenses');
  var $image = $('#temporary_files_to_assign_thumbnail');
  var $prview = $('#temporary_files_to_assign_audio_mp3_preview');
  var $archive = $('#temporary_files_to_assign_source');
  var $vocalsSelect = $('#item_item_attributes_attributes_2_multiple_select_value');
  var $form = $('form#new_item');
  
  chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
    $description.val(message.template.description.replace('{{INCLUDES}}', getIncludesText(message.data.files)));
    $category.val(message.template.category);
    $tags.val(message.template.tags);
    $name.val(message.data.name);
    message.data.isLoped ? $loopedYes.prop('checked', true) :  $loopedNo.prop('checked', true);
    $audioFiles.children('option').prop("selected", true);
    $noVocals.prop('checked', true);
    $vocalsSelect.prop('disabled', true);
    $mainLength.val(message.data.files[0].duration);
    $aditionalLength.val(message.data.files.filter(function (v, i) {
      return i !== 0;
    }).map(function (value) { return value.duration }).join(', '));
    $tempo.val(message.data.tempo);
    $youtubeContentYes.prop("checked", true);
    $youtubeContentValue.val('AdRev');
    $licese.prop('checked', true);
    $image.children('option:contains("'+ message.data.imageName +'")').prop("selected", true);
    $prview.children('option:contains("'+ message.data.previewName +'")').prop("selected", true);
    $archive.children('option:contains("'+ message.data.archieName +'")').prop("selected", true);
  });
});

function getIncludesText(files) {
  var text = '<h3>It includes:</h3>\n<ul>\n';
  for(var i = 0; i < files.length; i++) {
    text += '<li>' + (i+1)+ ' - ' + files[i].name + ' (' + files[i].duration + ') ;</li>\n'
  }
  text += '</ul>\n';
  return text;
}