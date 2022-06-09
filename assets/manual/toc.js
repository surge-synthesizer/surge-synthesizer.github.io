$(document).ready(function() {
  $("#manual-toc-wrapper").resizable({
    resize: function() {
      var track_width='width';
      var widthHistory=JSON.stringify({width:this.style.width});
      localStorage.setItem(track_width,widthHistory);
    }
  });
  $('#manual-toc-wrapper').resizable({handles: 'e'})
})
if (window.matchMedia("(min-width: 700px)").matches) {
  $(function() {
    var track_show='show';
    var track_hide='hide';
    var track_wrapper='wrapper';
    var track_width='width';
    var track_position='position';
    var track_padding='padding';
    initToc();
    function initToc() {
      var width=localStorage.getItem(track_width);
      if(width==null) width={width:'fit-content'};
      else width=JSON.parse(width);
      $("#manual-toc-wrapper").css(width);
      var show=localStorage.getItem(track_show);
      if(show==null) show={display:'block'};
      else show=JSON.parse(show);
      $("#toc-show").css(show);
      var hide=localStorage.getItem(track_hide);
      if(hide==null) hide={display:'none'};
      else hide=JSON.parse(hide);
      $("#toc-hide").css(hide);
      var wrapper=localStorage.getItem(track_wrapper);
      if(wrapper==null) wrapper={display:'none'};
      else wrapper=JSON.parse(wrapper);
      $("#toc").css(wrapper);
      var position=localStorage.getItem(track_position);
      if(position==null) position={position:'fixed'};
      else position=JSON.parse(position);
      $("#manual-toc-wrapper").css(position);
      var padding=localStorage.getItem(track_padding);
      if(padding==null) padding={padding:'0 40px 0 110px'};
      else padding=JSON.parse(padding);
      $("#manual-content-wrapper").css(padding);
    };
  })
}
function mobile_toc_hide() {/* empty for non-mobile */}
if (window.matchMedia("(max-width: 700px)").matches) {
  function mobile_toc_hide() {
    document.getElementById("manual-toc-wrapper").style.position = "fixed";
    document.getElementById("toc-show").style.display = "block";
    document.getElementById("toc-hide").style.display = "none";
    document.getElementById("toc").style.display = "none";
    document.getElementById("manual-content-wrapper").style.padding = "0 40px 0 110px";
    var track_show='show';
    var showHistory=JSON.stringify({display: 'block'});
    localStorage.setItem(track_show,showHistory);
    var track_hide='hide';
    var hideHistory=JSON.stringify({display: 'none'});
    localStorage.setItem(track_hide,hideHistory);
    var track_wrapper='wrapper';
    var wrapperHistory=JSON.stringify({display: 'none'});
    localStorage.setItem(track_wrapper,wrapperHistory);
    var track_position='position';
    var positionHistory=JSON.stringify({position: 'fixed'});
    localStorage.setItem(track_position,positionHistory);
    var track_padding='padding';
    var paddingHistory=JSON.stringify({padding: '0 40px 0 110px'});
    localStorage.setItem(track_padding,paddingHistory);
  }
}
function toc_show() {
  document.getElementById("manual-toc-wrapper").style.position = "relative";
  document.getElementById("toc-show").style.display = "none";
  document.getElementById("toc-hide").style.display = "block";
  document.getElementById("toc").style.display = "block";
  document.getElementById("manual-content-wrapper").style.padding = "0 40px 0 40px";
  var track_show='show';
  var showHistory=JSON.stringify({display: 'none'});
  localStorage.setItem(track_show,showHistory);
  var track_hide='hide';
  var hideHistory=JSON.stringify({display: 'block'});
  localStorage.setItem(track_hide,hideHistory);
  var track_wrapper='wrapper';
  var wrapperHistory=JSON.stringify({display: 'block'});
  localStorage.setItem(track_wrapper,wrapperHistory);
  var track_position='position';
  var positionHistory=JSON.stringify({position: 'relative'});
  localStorage.setItem(track_position,positionHistory);
  var track_padding='padding';
  var paddingHistory=JSON.stringify({padding: '0 40px 0 40px'});
  localStorage.setItem(track_padding,paddingHistory);
  tocResizable();
  function tocResizable() {
    $("#manual-toc-wrapper").resizable({
      resize: function() {
        var track_width='width';
        var widthHistory=JSON.stringify({width:this.style.width});
        localStorage.setItem(track_width,widthHistory);
      }
    });
    $('#manual-toc-wrapper').resizable({handles: 'e'})
  }
}
function toc_hide() {
  document.getElementById("manual-toc-wrapper").style.position = "fixed";
  document.getElementById("toc-show").style.display = "block";
  document.getElementById("toc-hide").style.display = "none";
  document.getElementById("toc").style.display = "none";
  document.getElementById("manual-content-wrapper").style.padding = "0 40px 0 110px";
  var track_show='show';
  var showHistory=JSON.stringify({display: 'block'});
  localStorage.setItem(track_show,showHistory);
  var track_hide='hide';
  var hideHistory=JSON.stringify({display: 'none'});
  localStorage.setItem(track_hide,hideHistory);
  var track_wrapper='wrapper';
  var wrapperHistory=JSON.stringify({display: 'none'});
  localStorage.setItem(track_wrapper,wrapperHistory);
  var track_position='position';
  var positionHistory=JSON.stringify({position: 'fixed'});
  localStorage.setItem(track_position,positionHistory);
  var track_padding='padding';
  var paddingHistory=JSON.stringify({padding: '0 40px 0 110px'});
  localStorage.setItem(track_padding,paddingHistory);
}
const mediaQuery = '(max-width: 700px)';
const mediaQueryList = window.matchMedia(mediaQuery);
mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
  if (event.matches) {
    mobile_toc_hide = function() {
      document.getElementById("manual-toc-wrapper").style.position = "fixed";
      document.getElementById("toc-show").style.display = "block";
      document.getElementById("toc-hide").style.display = "none";
      document.getElementById("toc").style.display = "none";
      document.getElementById("manual-content-wrapper").style.padding = "0 40px 0 110px";
      var track_show='show';
      var showHistory=JSON.stringify({display: 'block'});
      localStorage.setItem(track_show,showHistory);
      var track_hide='hide';
      var hideHistory=JSON.stringify({display: 'none'});
      localStorage.setItem(track_hide,hideHistory);
      var track_wrapper='wrapper';
      var wrapperHistory=JSON.stringify({display: 'none'});
      localStorage.setItem(track_wrapper,wrapperHistory);
      var track_position='position';
      var positionHistory=JSON.stringify({position: 'fixed'});
      localStorage.setItem(track_position,positionHistory);
      var track_padding='padding';
      var paddingHistory=JSON.stringify({padding: '0 40px 0 110px'});
      localStorage.setItem(track_padding,paddingHistory);
    }
  } else {
    mobile_toc_hide = function() {/* empty for non-mobile */}
  }
})
