function barSetter() {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
    var w = window,
        d = document,
        e = d.documentElement,
        b = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || b.clientWidth,
        y = w.innerHeight|| e.clientHeight|| b.clientHeight;

  var containerDiv = document.createElement('div');
  containerDiv.id = 'barContainer';
  containerDiv.style.width = x.toString()+ 'px';
  containerDiv.style.height = y.toString()+ 'px';
  containerDiv.style.opacity = 0.80;
  containerDiv.style.position = 'fixed';
  containerDiv.style.left = '0px';
  containerDiv.style.top = '0px';
  containerDiv.style.pointerEvents = 'none';

  var barPairs = Math.round(x/140),
     totalBars = barPairs*2,
      barWidth = String(100/totalBars)+'%';

    for(i=0; i< totalBars; i++) {
      var bar = document.createElement('div');
      bar.style.width = barWidth;
      bar.style.height = '100%'; 
      bar.style.display = 'inline-block';
      if(i%2 === 0) {
          bar.style.backgroundColor = '#5A0000';
      } else {
          bar.style.backgroundColor = '#005A00';
      }
      containerDiv.appendChild(bar);
    }
  document.body.appendChild(containerDiv);
}

console.log('beginning of script')
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('script being run')
  if(!!document.getElementById('barContainer')) {  
    barContainer = document.getElementById('barContainer');
    document.body.removeChild(barContainer);
    console.log('truthy')
  } else {
    barSetter();
    console.log('falsey')
  }
});
