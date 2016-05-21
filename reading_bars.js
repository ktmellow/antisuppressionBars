// this is the code which will be injected into a given page...

(function() {

  var customWidth;
  
  // Determines number of bars on page, based on width. 
  function barSetter() {
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

    var barPairs = Math.round(x/customWidth),
       totalBars = barPairs*2,
        barWidth = String(100/totalBars)+'%';

      for( i=0; i< totalBars; i++ ) {
        var bar = document.createElement('div');
        bar.style.width = barWidth;
        bar.style.height = '100%'; 
        bar.style.display = 'inline-block';
        if( i%4 === 0 ) {
           bar.style.backgroundColor = '#A00000';
           bar.style.opacity = 0.85;
        } else if( i%2 === 0 ) {
           bar.style.backgroundColor ='#00A000';
           bar.style.opacity = 0.95;
        } else {
            bar.style.backgroundColor = '';
        }
        containerDiv.appendChild(bar);
      }
    document.body.appendChild(containerDiv);
  }

  function executeNow() {
    chrome.storage.sync.get("inputWidth", function(obj) {
      customWidth = parseInt(obj.inputWidth) || 130;
      if(!!document.getElementById('barContainer')) {  
        barContainer = document.getElementById('barContainer');
        document.body.removeChild(barContainer);
      } else if (document.getElementById('barContainer') === false 
        || document.getElementById('barContainer') === null) {
        barSetter();
      } else {
        barSetter();
        // console.log('ERROR IN CONTROL FLOW');
      }
    });
  };
  return executeNow();
})();