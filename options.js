var defaultWidth = '130'
var defaultColor1 = '#A00000'
var defaultColor2 = '#00A000'

// Saves options to chrome.storage.sync.
function save_options() {
  var width = document.getElementById('width').value;
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  chrome.storage.sync.set({
    inputWidth: width,
    color1: color1,
    color2: color2,
  }, function() {

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores default options
function restore_options() {
  chrome.storage.sync.set({
    inputWidth: defaultWidth,
    color1: defaultColor1,
    color2: defaultColor2,
  }, function(options) {
    document.getElementById('width').value = defaultWidth;
    document.getElementById('color1').value = defaultColor1;
    document.getElementById('color2').value = defaultColor2;

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Defaults restored and saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Initializes select box and checkbox state using the preferences
// stored in chrome.storage.
function get_options() {
  chrome.storage.sync.get([
    'inputWidth',
    'color1',
    'color2',
  ], function(options) {
    document.getElementById('width').value = options.inputWidth || defaultWidth;
    document.getElementById('color1').value = options.color1 || defaultColor1;
    document.getElementById('color2').value = options.color2 || defaultColor2;

    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Defaults restored and saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.addEventListener('DOMContentLoaded', get_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('restore').addEventListener('click',
    restore_options);
