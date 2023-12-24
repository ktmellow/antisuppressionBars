// this is the code which will be injected into a given page...

(function() {
  
  // Determines number of bars on page, based on width. 
  function barSetter(width, color1, color2) {
    var w = window,
        d = document,
        e = d.documentElement,
        b = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || b.clientWidth,
        y = w.innerHeight|| e.clientHeight|| b.clientHeight;

    var containerDiv = document.createElement('div');
    containerDiv.id = 'barContainer';
    containerDiv.style.width = '100%';
    containerDiv.style.height = '100%';
    containerDiv.style.position = 'fixed';
    containerDiv.style.mixBlendMode = 'multiply';
    containerDiv.style.left = '0px';
    containerDiv.style.top = '0px';
    containerDiv.style.pointerEvents = 'none';
    containerDiv.style.zIndex = "9999999999";

    var barPairs = Math.round(x/width),
       totalBars = barPairs*2,
        barWidth = String(100/totalBars)+'%';

      for( i=0; i< totalBars; i++ ) {
        var bar = document.createElement('div');
        bar.style.width = barWidth;
        bar.style.height = '100%'; 
        bar.style.display = 'inline-block';
        if( i%4 === 0 ) {
           bar.style.backgroundColor = color1;
           bar.style.opacity = 0.85;
        } else if( i%2 === 0 ) {
           bar.style.backgroundColor = color2;
           bar.style.opacity = 0.95;
        } else {
            bar.style.backgroundColor = '';
        }
        containerDiv.appendChild(bar);
      }
    document.body.appendChild(containerDiv);
  }

  function executeNow() {
    chrome.storage.sync.get(['inputWidth', 'color1', 'color2'], function(options) {
      var width = parseInt(options.inputWidth) || 130;
      var color1 = options.color1 || '#A00000'
      var color2 = options.color2 || '#00A000'
      if(!!document.getElementById('barContainer')) {  
        barContainer = document.getElementById('barContainer');
        document.body.removeChild(barContainer);
      } else {
        barSetter(width, color1, color2);
      }
    });
  };

  return executeNow();
})();