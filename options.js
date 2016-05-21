// Saves options to chrome.storage.sync.
function save_options() {
  
  var width = document.getElementById('width').value;
  chrome.storage.sync.set({
    inputWidth: width
  }, function() {
    
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    inputWidth: '130'
  }, function(items) {
    document.getElementById('width').value = items.inputWidth;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
