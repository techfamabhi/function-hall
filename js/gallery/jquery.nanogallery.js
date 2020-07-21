
/*! shifty - v1.5.0 - 2015-05-31 - http://jeremyckahn.github.io/shifty */
(function(){var t=this,n=function(){"use strict";function n(){}function e(t,n){var e;for(e in t)Object.hasOwnProperty.call(t,e)&&n(e)}function i(t,n){return e(n,function(e){t[e]=n[e]}),t}function r(t,n){e(n,function(e){t[e]===void 0&&(t[e]=n[e])})}function o(t,n,e,i,r,o,u){var s,c,h,p=o>t?0:(t-o)/r;for(s in n)n.hasOwnProperty(s)&&(c=u[s],h="function"==typeof c?c:f[c],n[s]=a(e[s],i[s],h,p));return n}function a(t,n,e,i){return t+(n-t)*e(i)}function u(t,n){var i=h.prototype.filter,r=t._filterArgs;e(i,function(e){i[e][n]!==void 0&&i[e][n].apply(t,r)})}function s(t,n,e,i,r,a,s,c,h,f,p){g=n+e+i,y=Math.min(p||d(),g),v=y>=g,M=i-(g-y),t.isPlaying()&&!v?(t._scheduleId=f(t._timeoutHandler,m),u(t,"beforeTween"),n+e>y?o(1,r,a,s,1,1,c):o(y,r,a,s,i,n+e,c),u(t,"afterTween"),h(r,t._attachment,M)):t.isPlaying()&&v&&(h(s,t._attachment,M),t.stop(!0))}function c(t,n){var i={},r=typeof n;return"string"===r||"function"===r?e(t,function(t){i[t]=n}):e(t,function(t){i[t]||(i[t]=n[t]||l)}),i}function h(t,n){this._currentState=t||{},this._configured=!1,this._scheduleFunction=p,n!==void 0&&this.setConfig(n)}var f,p,l="linear",_=500,m=1e3/60,w=Date.now?Date.now:function(){return+new Date},d="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:w;p="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var g,y,v,M;return h.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=d(),this._start(this.get(),this._attachment),this.resume())},h.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||n,this._step=t.step||n,this._finish=t.finish||n,this._duration=t.duration||_,this._currentState=i({},t.from)||this.get(),this._originalState=this.get(),this._targetState=i({},t.to)||this.get();var e=this;this._timeoutHandler=function(){s(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var o=this._currentState,a=this._targetState;return r(a,o),this._easing=c(o,t.easing||l),this._filterArgs=[o,this._originalState,a,this._easing],u(this,"tweenCreated"),this},h.prototype.get=function(){return i({},this._currentState)},h.prototype.set=function(t){this._currentState=t},h.prototype.pause=function(){return this._pausedAtTime=d(),this._isPaused=!0,this},h.prototype.resume=function(){return this._isPaused&&(this._timestamp+=d()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},h.prototype.seek=function(t){t=Math.max(t,0);var n=d();return 0===this._timestamp+t?this:(this._timestamp=n-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,s(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,n),this.pause()),this)},h.prototype.stop=function(e){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=n,(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||t.mozCancelRequestAnimationFrame||t.clearTimeout)(this._scheduleId),e&&(u(this,"beforeTween"),o(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),u(this,"afterTween"),u(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},h.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},h.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},h.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},h.prototype.filter={},h.prototype.formula={linear:function(t){return t}},f=h.prototype.formula,i(h,{now:d,each:e,tweenProps:o,tweenProp:a,applyFilter:u,shallowCopy:i,defaults:r,composeEasingObject:c}),"function"==typeof SHIFTY_DEBUG_NOW&&(t.timeoutHandler=s),"object"==typeof exports?module.exports=h:"function"==typeof define&&define.amd?define('ngTweenable', function(){return h}):t.NGTweenable===void 0&&(t.NGTweenable=h),h}();(function(){n.shallowCopy(n.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return 1>(t/=.5)?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return 1>(t/=.5)?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return 1>(t/=.5)?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return 1>(t/=.5)?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return-Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},easeInOutExpo:function(t){return 0===t?0:1===t?1:1>(t/=.5)?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return 1>(t/=.5)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var n=1.70158;return t*t*((n+1)*t-n)},easeOutBack:function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},easeInOutBack:function(t){var n=1.70158;return 1>(t/=.5)?.5*t*t*(((n*=1.525)+1)*t-n):.5*((t-=2)*t*(((n*=1.525)+1)*t+n)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*2*Math.PI/2)+1},swingFromTo:function(t){var n=1.70158;return 1>(t/=.5)?.5*t*t*(((n*=1.525)+1)*t-n):.5*((t-=2)*t*(((n*=1.525)+1)*t+n)+2)},swingFrom:function(t){var n=1.70158;return t*t*((n+1)*t-n)},swingTo:function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return 1>(t/=.5)?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})})(),function(){function t(t,n,e,i,r,o){function a(t){return((l*t+_)*t+m)*t}function u(t){return((w*t+d)*t+g)*t}function s(t){return(3*l*t+2*_)*t+m}function c(t){return 1/(200*t)}function h(t,n){return u(p(t,n))}function f(t){return t>=0?t:0-t}function p(t,n){var e,i,r,o,u,c;for(r=t,c=0;8>c;c++){if(o=a(r)-t,n>f(o))return r;if(u=s(r),1e-6>f(u))break;r-=o/u}if(e=0,i=1,r=t,e>r)return e;if(r>i)return i;for(;i>e;){if(o=a(r),n>f(o-t))return r;t>o?e=r:i=r,r=.5*(i-e)+e}return r}var l=0,_=0,m=0,w=0,d=0,g=0;return m=3*n,_=3*(i-n)-m,l=1-m-_,g=3*e,d=3*(r-e)-g,w=1-g-d,h(t,c(o))}function e(n,e,i,r){return function(o){return t(o,n,e,i,r,1)}}n.setBezierFunction=function(t,i,r,o,a){var u=e(i,r,o,a);return u.displayName=t,u.x1=i,u.y1=r,u.x2=o,u.y2=a,n.prototype.formula[t]=u},n.unsetBezierFunction=function(t){delete n.prototype.formula[t]}}(),function(){function t(t,e,i,r,o,a){return n.tweenProps(r,e,t,i,1,a,o)}var e=new n;e._filterArgs=[],n.interpolate=function(i,r,o,a,u){var s=n.shallowCopy({},i),c=u||0,h=n.composeEasingObject(i,a||"linear");e.set({});var f=e._filterArgs;f.length=0,f[0]=s,f[1]=i,f[2]=r,f[3]=h,n.applyFilter(e,"tweenCreated"),n.applyFilter(e,"beforeTween");var p=t(i,s,r,o,h,c);return n.applyFilter(e,"afterTween"),p}}(),function(t){function n(t,n){var e,i=[],r=t.length;for(e=0;r>e;e++)i.push("_"+n+"_"+e);return i}function e(t){var n=t.match(M);return n?(1===n.length||t[0].match(v))&&n.unshift(""):n=["",""],n.join(O)}function i(n){t.each(n,function(t){var e=n[t];"string"==typeof e&&e.match(S)&&(n[t]=r(e))})}function r(t){return s(S,t,o)}function o(t){var n=a(t);return"rgb("+n[0]+","+n[1]+","+n[2]+")"}function a(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),b[0]=u(t.substr(0,2)),b[1]=u(t.substr(2,2)),b[2]=u(t.substr(4,2)),b}function u(t){return parseInt(t,16)}function s(t,n,e){var i=n.match(t),r=n.replace(t,O);if(i)for(var o,a=i.length,u=0;a>u;u++)o=i.shift(),r=r.replace(O,e(o));return r}function c(t){return s(T,t,h)}function h(t){for(var n=t.match(F),e=n.length,i=t.match(I)[0],r=0;e>r;r++)i+=parseInt(n[r],10)+",";return i=i.slice(0,-1)+")"}function f(i){var r={};return t.each(i,function(t){var o=i[t];if("string"==typeof o){var a=d(o);r[t]={formatString:e(o),chunkNames:n(a,t)}}}),r}function p(n,e){t.each(e,function(t){for(var i=n[t],r=d(i),o=r.length,a=0;o>a;a++)n[e[t].chunkNames[a]]=+r[a];delete n[t]})}function l(n,e){t.each(e,function(t){var i=n[t],r=_(n,e[t].chunkNames),o=m(r,e[t].chunkNames);i=w(e[t].formatString,o),n[t]=c(i)})}function _(t,n){for(var e,i={},r=n.length,o=0;r>o;o++)e=n[o],i[e]=t[e],delete t[e];return i}function m(t,n){k.length=0;for(var e=n.length,i=0;e>i;i++)k.push(t[n[i]]);return k}function w(t,n){for(var e=t,i=n.length,r=0;i>r;r++)e=e.replace(O,+n[r].toFixed(4));return e}function d(t){return t.match(F)}function g(n,e){t.each(e,function(t){var i,r=e[t],o=r.chunkNames,a=o.length,u=n[t];if("string"==typeof u){var s=u.split(" "),c=s[s.length-1];for(i=0;a>i;i++)n[o[i]]=s[i]||c}else for(i=0;a>i;i++)n[o[i]]=u;delete n[t]})}function y(n,e){t.each(e,function(t){var i=e[t],r=i.chunkNames,o=r.length,a=n[r[0]],u=typeof a;if("string"===u){for(var s="",c=0;o>c;c++)s+=" "+n[r[c]],delete n[r[c]];n[t]=s.substr(1)}else n[t]=a})}var v=/(\d|\-|\.)/,M=/([^\-0-9\.]+)/g,F=/[0-9.\-]+/g,T=RegExp("rgb\\("+F.source+/,\s*/.source+F.source+/,\s*/.source+F.source+"\\)","g"),I=/^.*\(/,S=/#([0-9]|[a-f]){3,6}/gi,O="VAL",b=[],k=[];t.prototype.filter.token={tweenCreated:function(t,n,e){i(t),i(n),i(e),this._tokenData=f(t)},beforeTween:function(t,n,e,i){g(i,this._tokenData),p(t,this._tokenData),p(n,this._tokenData),p(e,this._tokenData)},afterTween:function(t,n,e,i){l(t,this._tokenData),l(n,this._tokenData),l(e,this._tokenData),y(i,this._tokenData)}}}(n)}).call(null);


// ##########################################
// ##### nanoGALLERY as a JQUERY PLUGIN #####
// ##########################################
//;(function ($) {
;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
		define('jqueryNanoGallery', ['jquery', 'ngTweenable'], factory);
	}
	else {
    // No AMD. Register plugin with global jQuery object.
		factory(jQuery, window.NGTweenable);
	}
})(function($, NGTweenable) {

  jQuery.nanoGallery = function(elt, options){
    // To avoid scope issues, use '_this' instead of 'this'
    // to reference this class from internal events and functions.
    var _this = this;

    // Access to jQuery and DOM versions of element
    _this.$e = $(elt);
    _this.e = elt;

    // Add a reverse reference to the DOM object
    _this.$e.data('nanoGallery', _this);

    _this.init = function(){
      _this.options = $.extend(true, {},$.nanoGallery.defaultOptions, options);
      // Initialization code
      _this.nG= new nanoGALLERY();
      _this.nG.Initiate(_this.e, _this.options );
    };

    // PUBLIC EXPOSED METHODS
    _this.test = function() {
      //alert('test');
      // console.dir(_this.nG.G.I.length);
      // console.dir(_this.nG);
      //privateTest();
    }


    // Run initializer
    _this.init();
  };

  jQuery.nanoGallery.defaultOptions = {
    userID : '',
    kind : '',
    album : '',
    photoset : '',
    blackList : 'scrapbook|profil', whiteList : '', albumList : '',
    RTL : false,
    picasaUseUrlCrossDomain : true,
    flickrSkipOriginal : true,
    galleryToolbarWidthAligned : true, galleryToolbarHideIcons : false,
    galleryFullpageButton : false, galleryFullpageBgColor : '#111',
    galleryEnableKeyboard : false,
    galleryRenderStep : 10,
    breadcrumbAutoHideTopLevel : false,
    displayBreadcrumb : false,
    theme : 'default',
    colorScheme : 'none', colorSchemeViewer : 'default',
    items : null,
    itemsBaseURL : '',
    itemsSelectable : false, showCheckboxes: true, checkboxStyle : 'left:15px; top:15px;',
    keepSelection: false,
    jsonCharset: 'Latin', jsonProvider: '',
    paginationMaxLinesPerPage : 0, paginationDots : false, paginationSwipe : true,
    maxWidth : 0,
    viewer : 'internal',
    viewerFullscreen: false,
    viewerDisplayLogo : false,
    fancyBoxOptions : null,
    imageTransition : 'slide',
    openOnStart : '',
    viewerToolbar : {
      display:true, position : 'bottom', style : 'innerImage', autoMinimize:800,
      standard:'minimizeButton , previousButton, pageCounter ,nextButton,playPauseButton,fullscreenButton,infoButton,linkOriginalButton,closeButton,label',
      minimized:'minimizeButton,label'
    },
    thumbnailAlignment : 'center',
    thumbnailWidth : 230, thumbnailHeight : 154,
    thumbnailGutterWidth : 2, thumbnailGutterHeight : 2,
    thumbnailAdjustLastRowHeight : true,
    thumbnailFeatured : false,
    thumbnailAlbumDisplayImage : false,
    thumbnailHoverEffect : null,
    thumbnailLabel : { position : 'overImageOnBottom', display : true, displayDescription : true, titleMaxLength : 0, descriptionMaxLength : 0, hideIcons : false, title : '', itemsCount : '' },
    thumbnailDisplayInterval : 5, thumbnailDisplayTransition : true,
    thumbnailLazyLoad : false, thumbnailLazyLoadTreshold : 100,
    thumbnailGlobalImageTitle : '', thumbnailGlobalAlbumTitle : '',
    thumbnailOpenImage: true,
    //thumbnailSizeSM : 480, thumbnailSizeME : 992, thumbnailSizeLA : 1200, thumbnailSizeXL : 1800,
    breakpointSizeSM : 480, breakpointSizeME : 992, breakpointSizeLA : 1200, breakpointSizeXL : 1800,
    fnThumbnailInit : null, fnThumbnailHoverInit : null, fnThumbnailHoverResize : null, fnThumbnailHover : null, fnThumbnailHoverOut : null, fnThumbnailDisplayEffect : null,
    fnThumbnailOpen : null,
    fnViewerInfo : null,
    fnImgToolbarCustInit : null, fnImgToolbarCustDisplay : null, fnImgToolbarCustClick : null,
    fnProcessData : null,
    fnChangeSelectMode : null,
    fnInitGallery : null,
    touchAnimation : true, touchAutoOpenDelay : 0,
    useTags : false,
    preset : 'none',
    locationHash : true,
    demoViewportWidth : 0,
    slideshowDelay : 3000, slideshowAutoStart : false,
    photoSorting : '', albumSorting : '', dataSorting : '',
    albumMax: 0,
    lazyBuild : 'none', lazyBuildTreshold : 150,
    debugMode: false,
    i18n : {
      'breadcrumbHome' : 'Galleries', 'breadcrumbHome_FR' : 'Galeries',
      'paginationPrevious' : 'Previous', 'paginationPrevious_FR' : 'Pr&eacute;c&eacute;dent', 'paginationPrevious_DE' : 'Zur&uuml;ck', 'paginationPrevious_IT' : 'Indietro',
      'paginationNext' : 'Next', 'paginationNext_FR' : 'Suivant', 'paginationNext_DE' : 'Weiter', 'paginationNext_IT' : 'Avanti',
      'thumbnailLabelItemsCountPart1' : '', //'| ',
      'thumbnailLabelItemsCountPart2' : '', //' photos', 'thumbnailLabelItemsCountPart2_DE' : ' Fotos',
      'thumbnailImageTitle' : '', 'thumbnailAlbumTitle' : '',
      'thumbnailImageDescription' : '', 'thumbnailAlbumDescription' : '',
      'infoBoxPhoto' : 'Photo', 'infoBoxDate' : 'Date', 'infoBoxAlbum' : 'Album', 'infoBoxDimensions' : 'Dimensions', 'infoBoxFilename' : 'Filename', 'infoBoxFileSize' : 'File size', 'infoBoxCamera' : 'Camera', 'infoBoxFocalLength' : 'Focal length', 'infoBoxExposure' : 'Exposure', 'infoBoxFNumber' : 'F Number', 'infoBoxISO' : 'ISO', 'infoBoxMake' : 'Make', 'infoBoxFlash' : 'Flash', 'infoBoxViews' : 'Views', 'infoBoxComments' : 'Comments'
    }
  };

  jQuery.fn.nanoGallery = function (args, option, value) {
    // jQuery.fn.nanoGallery = function(options){
    // if( typeof(options) !== 'undefined'){
    if( typeof $(this).data('nanoGallery') === 'undefined'){
      return this.each( function(){
        (new $.nanoGallery(this, args));
      });
    }
    else {
      // no options -->
      // This function breaks the chain, but provides some API methods

      switch(args){
        case 'reload':
          $(this).data('nanoGallery').nG.ReloadAlbum();
          return $(this);
          break;
        case 'refreshSize':
          $(this).data('nanoGallery').nG.RefreshSize();
          return $(this);
          break;
        case 'getSelectedItems':
          return $(this).data('nanoGallery').nG.GetSelectedItems();
          break;
        case 'selectItems':
          $(this).data('nanoGallery').nG.SetSelectedItems(option);
          break;
        case 'unselectItems':
          $(this).data('nanoGallery').nG.SetUnselectedItems(option);
          break;
        case 'setSelectMode':
          if(option === true || option === false || option === 'image' || option === 'album'){
            $(this).data('nanoGallery').nG.SetSelectMode(option);
          }
          break;
        case 'getSelectMode':
          return $(this).data('nanoGallery').nG.GetSelectMode();
          break;
        case 'getItem':
          return $(this).data('nanoGallery').nG.GetItem(option);
          break;
        case 'getItems':
          return $(this).data('nanoGallery').nG.GetItems();
          break;
        case 'getItemsIndex':
          return $(this).data('nanoGallery').nG.GetItemsIndex(option);
          break;
        case 'option':
          if(typeof value === 'undefined'){
            return $(this).data('nanoGallery').nG.Get(option);
          }else{
            $(this).data('nanoGallery').nG.Set(option,value);
            if( option == 'demoViewportWidth' ) {
              // force resize event -> for demo purposes
              $(window).trigger('resize');
            }
          }
          break;
        case 'destroy':
          $(this).data('nanoGallery').nG.$E.base.text('');
          $(this).removeData();
          break;
        case 'closeViewer':
          $(this).data('nanoGallery').nG.closeViewer();
          break;
        case 'minimizeToolbar':
          $(this).data('nanoGallery').nG.minimizeToolbar();
          break;
        case 'maximizeToolbar':
          $(this).data('nanoGallery').nG.maximizeToolbar();
          break;
        case 'displayItem':
          $(this).data('nanoGallery').nG.displayItem(option);
          break;
        case 'paginationPreviousPage':
          $(this).data('nanoGallery').nG.paginationPreviousPage();
          break;
        case 'paginationNextPage':
          $(this).data('nanoGallery').nG.paginationNextPage();
          break;
        case 'paginationGotoPage':
          $(this).data('nanoGallery').nG.paginationGotoPage(option);
          break;
        case 'paginationCountPages':
          return $(this).data('nanoGallery').nG.paginationCountPages();
          break;
        case 'getCurrentViewedItem':
          return $(this).data('nanoGallery').nG.GetCurrentViewedItem();
          break;
        case 'getCurrentViewedItemIdx':
          return $(this).data('nanoGallery').nG.GetCurrentViewedItemIdx();
          break;
        case 'moveToNextAlbum':
          return $(this).data('nanoGallery').nG.moveToNextAlbum();
          break;
        case 'moveToPreviousAlbum':
          return $(this).data('nanoGallery').nG.moveToPreviousAlbum();
          break;
        case 'galleryCountImages':
          return $(this).data('nanoGallery').nG.galleryCountImages();
          break;
      }
      return $(this);

    }
  };


  // ##############################
  // ##### nanoGALLERY script #####
  // ##############################

  function privateTest() {
    alert('privateTest');
    console.dir(G);
  }


  function nanoGALLERY() {

    /**
    * Force reload the current album, if provided by Json
    */
    this.ReloadAlbum = function(){
      if( G.O.kind === '' ) {
        throw 'Not supported for this kind.';
      }

      var l=G.I.length;
      var albumIdx =-1;
      // find current album index
      for( var j=0; j<l ; j++) {
        if( G.lastOpenAlbumID == G.I[j].GetID() ) {
          albumIdx=j;
          break;
        }
      }
      if( albumIdx == -1 ) {
        throw ('Current album not found.');
      }

      // unselect everything & remove link to album (=logical delete)
      if(G.O.keepSelection === false){
        G.selectedItems=[];
      }
      for( var i=0; i < l ; i++ ) {
        if(G.O.keepSelection === false){
          G.I[i].selected = false;
        }
        if( G.I[i].albumID == albumIdx ) {
          G.I[i].albumID = -1;    // remove link to parent album
        }
      }

      G.I[albumIdx].contentIsLoaded = false;

      G.lastOpenAlbumID = -1;
      switch(G.O.kind) {
        case 'json':
          return JsonProcessItems(albumIdx, false, -1, false, true);
        case 'flickr':
          return FlickrProcessItems(albumIdx, false, -1, false, true);
        case 'picasa':
        default:
          return PicasaProcessItems(albumIdx, false, -1, false, true);
      }

    };

    /**
    * When in Album view, moves to next album
    */
    this.moveToNextAlbum = function () {
      DisplayNextAlbum();
    }

    /**
    * When in Album view, moves to previous album
    */
    this.moveToPreviousAlbum = function () {
      DisplayPreviousAlbum();
    }


    // Closes the image viewer
    this.closeViewer = function () {
      CloseInternalViewer(true);
      return false;
    };

    // Toggle Toolbar between standard and minimized
    this.minimizeToolbar = function () {
      ToolbarVisibilityMin();
      return false;
    };

    // Toggle Toolbar between standard and minimized
    this.maximizeToolbar = function () {
      ToolbarVisibilityStd();
      return false;
    };

    /**
    * Force recheck of container size and resize accordingly
    */
    this.RefreshSize = function(){
      ResizeGallery();
    }

    // Display one item
    // itemID syntax:
    //    - albumID --> display one album
    //    - albumID/imageID --> display one image
    this.displayItem = function( itemID ){
      return OpenItem( false, itemID, true );
    };


    // manage gallery pagination

    // Pagination - goto previous page
    this.paginationPreviousPage = function () {
      paginationPreviousPage();
    };
    // Pagination - goto next page
    this.paginationNextPage = function () {
      paginationNextPage();
    };
    // Pagination - goto specific page
    this.paginationGotoPage = function ( page ) {
      var aIdx=G.$E.conPagin.data('galleryIdx');
      if( !inViewportVert(G.$E.base, 0) ) {
        $('html, body').animate({scrollTop: G.$E.base.offset().top}, 200);
      }
      if( page > 1 ) { page--; }
      renderGallery(aIdx, page);
    };
    // Pagination - count number of pages
    this.paginationCountPages = function () {
      var aIdx=G.$E.conPagin.data('galleryIdx'),
      n1=0;

      // pagination - max lines per page mode
      if( G.pgMaxLinesPerPage > 0 ) {
        n1=G.I[aIdx].contentLength / (G.pgMaxLinesPerPage * G.pgMaxNbThumbnailsPerRow);
      }
      n2=Math.ceil(n1);
      return n2;
    };

    // Viewer - Count number of images
    this.galleryCountImages = function () {
      return galleryCountImages();
    }

    /**
     * Get an item by its index
     * @param {int} index
     * @returns {object}
     */
    this.GetItem = function(index){
      if(isNaN(index)){
        throw 'index must be a number';
      }
      return G.I[index];
    };

    /**
     * Get an array of every items handled by nanoGallery
     * @returns {nanoGALLERY.G.I|Array}
     */
    this.GetItems = function(){
      return G.I;
    };

    /**
     * Get the index of an item in the G.I array
     * @param {object} items
     * @returns {array}
     */
    this.GetItemsIndex = function( items ){
      var indexes = [];
      var l=items.length;
      for( var j=0; j<l ; j++) {
        if( isNaN(items[j]) ) {
          index = G.I.indexOf(items[j]);
        }
        else {
          index = items[j];
        }
        if( isNaN(index) ){
          throw 'This item does not exists';
        }
        indexes.push(index);
      }
      return indexes;
    };

    /**
     * Set one or several items selected
     * @param {array} items
     */
    this.SetSelectedItems = function(items){
      var l=items.length;
      for( var j=0; j<l ; j++) {
        if( items[j].$elt !== null ) {
          thumbnailSelection(items[j], true);
        }
      }
    };

    /**
     * Set one or several items unselected
     * @param {array} items
     */
    this.SetUnselectedItems = function(items){
      var l=items.length;
      for( var j=0; j<l ; j++) {
        if( items[j].$elt !== null ) {
          thumbnailSelection(items[j], false);
        }
      }
    };

    /**
     * Returns an array of selected items
     * @returns {Array}
     */
    this.GetSelectedItems = function(){
      return G.selectedItems;
    };

    /**
     * Returns current item of image in viewer
     * @returns {int}
     */
    this.GetCurrentViewedItem = function(){
      if( G.containerViewerDisplayed ) {
        return G.I[G.viewerCurrentItemIdx];
      }
      else {
        return null;
      }
    };
    /**
     * Returns current index of image in viewer
     * @returns {int}
     */
    this.GetCurrentViewedItemIdx = function(){
      if( G.containerViewerDisplayed ) {
        return G.viewerCurrentItemIdx;
      }
      else {
        return -1;
      }
    };

    /**
     * Returns the value of an option
     * @param {string} option
     * @returns {nanoGALLERY.G.O}
     */
    this.Get = function(option){
        return G.O[option];
    };

    /**
     * Set a new value for a defined option
     * @param {string} option
     */
    this.Set = function(option,value){
        G.O[option] = value;
    };

    this.SetSelectMode = function(value){
      if(typeof value == 'undefined'){
        if(G.selectModeForce === true){
          value = G.selectMode;
        }
      }
      if(value === true || value === false || value === 'image' ||
                  value === 'album'){
        G.selectModeForce = (value!==false);
        G.selectMode = value;
        if(value === 'album' || value == 'image'){
          G.$E.base.find('.nanoGalleryThumbnailContainer').each(function(){
            if(($(this).hasClass('album') && value === 'image') ||
                (!$(this).hasClass('album') && value === 'album')){
              $(this).addClass('unselectable');
            }else{
              $(this).removeClass('unselectable');
            }
          });
        }else{
          G.$E.base.find('.nanoGalleryThumbnailContainer').removeClass('unselectable');
        }
        if(G.O.keepSelection === false || value === false){
          this.SetUnselectedItems(G.I);
        }
        if (typeof G.O.fnChangeSelectMode === 'function'){
          G.O.fnChangeSelectMode(G.selectMode);
        }
      }
    };

    this.GetSelectMode = function(){
      return G.selectMode;
    };

    // Global data for this nanoGALLERY instance
    var G=this;
    G.I = [];                   // gallery items
    G.O = null;                 // user options
    G.$E = {
      base: null,             // $g_baseControl = null,
      conTnParent: null,      // $g_containerThumbnailsParent
      conLoadingB: null,      // loading bar - nanoGalleryLBarOff
      conConsole: null,       // $g_containerConsole
      conTn: null,            // $g_containerThumbnails
      conTnHid: null,         // $g_containerThumbnailsHidden
      conPagin: null,         // $g_containerPagination
      conBC: null,            // $g_containerBreadcrumb
      conNavB: null,          // $g_containerNavigationbar
      conNavBCon: null,       // $g_containerNavigationbarCont
      conNavBFullpage: null,  // breadcrumb fullpage button
      conVwCon: null,         // $g_containerViewerContainer
      conVw: null,            // $g_containerViewer
      conVwTb: null,          // $g_containerViewerToolbar
      vwImgP: null,           // $g_ViewerImagePrevious
      vwImgN: null,           // $g_ViewerImageNext
      vwImgC: null,           // $g_ViewerImageCurrent
      vwContent: null,        // $g_containerViewerContent
      vwLogo: null            // $g_containerViewerLogo
    };
    G.i18nTranslations = {'paginationPrevious':'Previous', 'paginationNext':'Next', 'breadcrumbHome':'List of Albums', 'thumbnailImageTitle':'', 'thumbnailAlbumTitle':'', 'thumbnailImageDescription':'', 'thumbnailAlbumDescription':'' }
    G.$currentTouchedThumbnail = null;  // currently touched thumbnail
    G.baseEltID = null;
    G.containerTags = null;
    G.containerNavigationbarContDisplayed = false;
    G.containerViewerDisplayed = false;
    G.containerThumbnailsDisplayed = false;
    G.tn = {                          // GENERAL THUMBNAILS PROPERTIES
      displayInterval: 30,            // delay between 2 thumbnails display
      lazyLoadTreshold: 100,          // image lazy load treshold in pixel
      scale: 1,                       // image scale depending of the hover effect
      borderWidth: 0,                 // thumbnail container border width
      borderHeight: 0,                // thumbnail container border height
      imgcBorderHeight: 0,            // image container border height
      imgcBorderWidth:0 ,             // image container border width
      labelHeight: {                  // in case label on bottom, otherwise=0
        l1:0, lN:0,
        get: function() {
          return G.tn.labelHeight[G.curNavLevel];
        }
      },
      outerWidth: {                   // default thumbnail outerWidths (not used in case thumbnailWidth='auto'
        l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 },
        get: function() {
          return G.tn.outerWidth[G.curNavLevel][G.curWidth];
        }
      },
      outerHeight: {                  // default thumbnail outerHeights (not used in case thumbnailHeight='auto'
        l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 },
        get: function() {
          return G.tn.outerHeight[G.curNavLevel][G.curWidth];
        }
      },
      settings: {                     // user defined width/height to display depending on the screen size
        width: {  l1 : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' },
                  lN : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' } },
        height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' },
                  lN : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' } },
        getH: function() {
          return G.tn.settings.height[G.curNavLevel][G.curWidth];
        },
        getW: function() {
          return G.tn.settings.width[G.curNavLevel][G.curWidth];
        }
      },
      getHE: function() {
        if( G.curNavLevel == 'l1' && G.tnL1HE.length !== 0 ) {
          return G.tnL1HE;
        }
        return G.tnHE;
      },
      styleFTitle: '', styleITitle: '', styleDesc: '', styleLabelImage: '',
      styleL1FTitle: '', styleL1ITitle: '', styleL1Desc: '', styleL1LabelImage: ''
    };
    G.tnHE = [];                      // Thumbnail hover effects
    G.tnL1HE = [];                    // Thumbnail hover effects - Level 1
    G.L = {                           // Layout informations
      nbMaxTnPerRow: 0
    };
    G.blackList = null;
    G.whiteList = null;
    G.albumList = null;
    G.galleryItemsCount = 0;
    G.toolbarMode = 'std';            // image toolbar display mode
    G.playSlideshow = false;          // slideshow mode
    G.playSlideshowTimerID = 0;       // slideshow mode timer ID
    G.slideshowDelay = 3000;          // slideshow mode delay
    G.touchAutoOpenDelayTimerID = 0;
    G.supportFullscreenAPI = false;


    G.viewerIsFullscreen = false;
    G.bodyOverflowInitial = null;
    G.i18nLang = '';
    G.timeImgChanged = 0;
    G.timeLastTouchStart = 0;
    G.pgMaxNbThumbnailsPerRow = 1;
    G.pgMaxLinesPerPage = 0;
    G.lastOpenAlbumID = -1;
    G.lastLocationHash = '';
    G.touchSelectTO = null;
    G.viewerImageIsChanged = false;
    G.viewerResizeTimerID = -1;
    G.viewerResizeTimerLastRun = -1;
    G.viewerCurrentItemIdx = -1;
    G.imageSwipePosX = 0;
    G.albumIdxToOpenOnViewerClose = -1;
    G.custGlobals = {};
    G.delayedAlbumIdx = -1;
    G.curAlbumIdx = -1;
    G.delayedSetLocationHash = false;
    G.viewerSwipe = null;
    G.isShiftPressed = false;
    G.isAltPressed = false;
    G.isCtrlPressed = false;
    G.isMetaPressed = false;
    G.selectedItems = [];
    G.aengine = 'animate';      // animation engine
    G.scrollTimeOut = 0;
    G.maxAlbums = 1000000;
    G.maxPhotos = 1000000;
    G.curNavLevel = 'l1';
    G.curWidth = 'me';
    G.gallerySwipeInitDone = false;
    G.emptyGif = 'data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH5BAEKAAEALAAAAAAQABAAAAIOjI+py+0Po5y02ouzPgUAOw==';
    G.CSStransformName = FirstSupportedPropertyName(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]);
    G.CSStransformStyle = FirstSupportedPropertyName(["transformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle", "OTransformStyle"]);
    G.CSSperspective = FirstSupportedPropertyName(["perspective", "msPerspective", "MozPerspective", "WebkitPerspective", "OPerspective"]);
    G.CSSbackfaceVisibilityName = FirstSupportedPropertyName(["backfaceVisibility", "msBackfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "OBackfaceVisibility"]);
    G.CSStransitionName = FirstSupportedPropertyName(["transition", "msTransition", "MozTransition", "WebkitTransition", "OTransition"]);
    G.CSSanimationName = FirstSupportedPropertyName(["animation", "msAnimation", "MozAnimation", "WebkitAnimation", "OAnimation"]);
    /* IE detection. Copyright Julian Shapiro - Gist: https://gist.github.com/julianshapiro/9098609 */
    G.IE = (function() {
      if (document.documentMode) {
        return document.documentMode;
      }
      else {
        for (var i = 7; i > 4; i--) {
          var div = document.createElement("div");
          div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
          if (div.getElementsByTagName("span").length) {
            div = null;
            return i;
          }
        }
      }
      return undefined;
    })();
    G.IOSversion = (function() {
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
      }
    })();

    G.isIOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
    G.isGingerbread= /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
    G.openNoDelay= false,
    G.startDateTime= new Date(),
    G.toRender= [];

    // ### Picasa/Google+
    // square format : 32, 48, 64, 72, 104, 144, 150, 160 (cropped)
    // details: https://developers.google.com/picasa-web/docs/2.0/reference
    G.picasa = {
      url: function() {
        // return (location.protocol=='https:' ? 'https://picasaweb.google.com/data/feed/api/' : 'https://picasaweb.google.com/data/feed/api/');
        return ( G.O.picasaUseUrlCrossDomain ? 'https://photos.googleapis.com/data/feed/api/' : 'https://picasaweb.google.com/data/feed/api/');
      },
      thumbSize:64,
      thumbAvailableSizes : new Array(32, 48, 64, 72, 94, 104, 110, 128, 144, 150, 160, 200, 220, 288, 320, 400, 512, 576, 640, 720, 800, 912, 1024, 1152, 1280, 1440, 1600),
      thumbAvailableSizesCropped : ' 32 48 64 72 104 144 150 160 '
    };

    // ### Flickr
    // Details: http://www.flickr.com/services/api/misc.urls.html
    G.flickr = {
      url: function() {
        // Flickr API Going SSL-Only on June 27th, 2014
        return 'https://api.flickr.com/services/rest/';
      },
      thumbSize:'sq',
      thumbSizeX2 : 'sq',
      thumbAvailableSizes : new Array(75,100,150,240,500,640),
      thumbAvailableSizesStr : new Array('sq','t','q','s','m','z'),
      photoSize : 'sq',
      photoAvailableSizes : new Array(75,100,150,240,500,640,1024,1024,1600,2048),
      photoAvailableSizesStr : new Array('sq','t','q','s','m','z','b','l','h','k'),
      ApiKey : "2f0e634b471fdb47446abcb9c5afebdc"
    };

    // Color schemes - Gallery
    G.colorScheme_default = {
      navigationbar : { background:'none', borderTop:'1px solid #555', borderBottom:'1px solid #555', borderRight:'', borderLeft:'', color:'#ccc', colorHover:'#fff' },
      thumbnail : { background:'#000', border:'1px solid #000', labelBackground:'rgba(34, 34, 34, 0.75)', titleColor:'#eee', titleShadow:'', descriptionColor:'#ccc', descriptionShadow:'', paginationDotBorder:'2px solid #fff', paginationDotBack:'#444', paginationDotSelBack:'#fff'}    };
    G.colorScheme_darkRed = {
      // #ffa3a3 #ff7373 #ff4040 #ff0000 #a60000
      navigationbar : { background:'#a60000', border:'1px dotted #ff0000', color:'#ccc', colorHover:'#fff' },
      thumbnail : { background:'#a60000', border:'1px solid #ff0000', labelBackground:'rgba(134, 0, 0, 0.75)', titleColor:'#eee', titleShadow:'', descriptionColor:'#ccc', descriptionShadow:'', paginationDotBorder:'2px solid #d00', paginationDotBack:'#400', paginationDotSelBack:'#d00'}    };
    G.colorScheme_darkGreen = {
      // #97e697 #67e667 #39e639 #00cc00 #008500
      navigationbar : { background:'#008500', border:'1px dotted #00cc00', color:'#ccc', colorHover:'#fff' },
      thumbnail : { background:'#008500', border:'1px solid #00cc00', labelBackground:'rgba(0, 105, 0, 0.75)', titleColor:'#eee', titleShadow:'', descriptionColor:'#ccc', descriptionShadow:'', paginationDotBorder:'2px solid #0c0', paginationDotBack:'#008500', paginationDotSelBack:'#0c0'}    };
    G.colorScheme_darkBlue = {
      // #a0b0d7 #7080d7 #4a60d7 #162ea2 #071871
      navigationbar : { background:'#071871', border:'1px dotted #162ea2', color:'#ccc', colorHover:'#fff' },
      thumbnail : { background:'#071871', border:'1px solid #162ea2', labelBackground:'rgba(7, 8, 81, 0.75)', titleColor:'#eee', titleShadow:'', descriptionColor:'#ccc', descriptionShadow:'', paginationDotBorder:'2px solid #162ea2', paginationDotBack:'#071871', paginationDotSelBack:'#162ea2'}    };
    G.colorScheme_darkOrange = {
      // #ffd7b7 #ffd773 #ffc840 #ffb600 #a67600
      navigationbar : { background:'#a67600', border:'1px dotted #ffb600', color:'#ccc', colorHover:'#fff' },
      thumbnail : { background:'#a67600', border:'1px solid #ffb600', labelBackground:'rgba(134, 86, 0, 0.75)', titleColor:'#eee', titleShadow:'', descriptionColor:'#ccc', descriptionShadow:'', paginationDotBorder:'2px solid #ffb600', paginationDotBack:'#a67600', paginationDotSelBack:'#ffb600'}    };
    G.colorScheme_light = {
      navigationbar : { background:'none', borderTop:'1px solid #ddd', borderBottom:'1px solid #ddd', borderRight:'', borderLeft:'', color:'#777', colorHover:'#eee' },
      thumbnail : { background:'#fff', border:'1px solid #fff', labelBackground:'rgba(60, 60, 60, 0.75)', titleColor:'#fff', titleShadow:'none', descriptionColor:'#eee', descriptionShadow:'none', paginationDotBorder:'2px solid #555', paginationDotBack:'#888', paginationDotSelBack:'#555'}    };
    G.colorScheme_lightBackground = {
      navigationbar : { background:'none', border:'', color:'#000', colorHover:'#444' },
      thumbnail : { background:'#000', border:'1px solid #000', labelBackground:'rgba(34, 34, 34, 0.85)', titleColor:'#fff', titleShadow:'', descriptionColor:'#eee', descriptionShadow:'', paginationDotBorder:'2px solid #555', paginationDotBack:'#888', paginationDotSelBack:'#555'}    };

    // Color schemes - lightbox
    G.colorSchemeViewer_default = {
      background:'#000', imageBorder:'4px solid #000', imageBoxShadow:'#888 0px 0px 0px', barBackground:'rgba(4, 4, 4, 0.7)', barBorder:'0px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'
      //background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #f8f8f8', imageBoxShadow:'#888 0px 0px 20px', barBackground:'rgba(4, 4, 4, 0.7)', barBorder:'0px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'
    };
    G.colorSchemeViewer_dark = {
      background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #f8f8f8', imageBoxShadow:'#888 0px 0px 20px', barBackground:'rgba(4, 4, 4, 0.7)', barBorder:'0px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };
    G.colorSchemeViewer_darkRed = {
      // #ffa3a3 #ff7373 #ff4040 #ff0000 #a60000
      background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #ffa3a3', imageBoxShadow:'#ff0000 0px 0px 20px', barBackground:'#a60000', barBorder:'2px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };
    G.colorSchemeViewer_darkGreen = {
      // #97e697 #67e667 #39e639 #00cc00 #008500
      background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #97e697', imageBoxShadow:'#00cc00 0px 0px 20px', barBackground:'#008500', barBorder:'2px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };
    G.colorSchemeViewer_darkBlue = {
      // #a0b0d7 #7080d7 #4a60d7 #162ea2 #071871
      background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #a0b0d7', imageBoxShadow:'#162ea2 0px 0px 20px', barBackground:'#071871', barBorder:'2px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };
    G.colorSchemeViewer_darkOrange = {
      // #ffd7b7 #ffd773 #ffc840 #ffb600 #a67600
      background:'rgba(1, 1, 1, 0.75)', imageBorder:'4px solid #ffd7b7', imageBoxShadow:'#ffb600 0px 0px 20px', barBackground:'#a67600', barBorder:'2px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };
    G.colorSchemeViewer_light = {
      background:'rgba(187, 187, 187, 0.75)', imageBorder:'none', imageBoxShadow:'#888 0px 0px 0px', barBackground:'rgba(4, 4, 4, 0.7)', barBorder:'0px solid #111', barColor:'#eee', barDescriptionColor:'#aaa'    };




    /* ##### THUMBNAIL ELEMENT STRUCTURE #####

    +--------------------------+  -> G.tn.borderHeight/2        -+
    |                          |                                 | G.tn.outerHeight
    |+------------------------+|  -> =0 (always)            -+   | item.thumbFullHeight
    || subcontainer           ||                             |   |
    ||                        ||                             |   |
    || +--------------------+ ||  -> G.tn.imgcBorderHeight/2
    || | imgContainer       | ||
    || |+-------------------+ ||
    || || image             | ||
    || |+-------------------+ ||
    || +--------------------+ ||
    ||                        ||
    || +--------------------+ ||  -+ --> G.tn.labelBorderHeight
    || | labelImage         | ||   | G.tn.labelHeight
    || |+------------------+| ||   | (=0 --> overImage)
    || || labelTitle       || ||   | item.thumbLabelHeight
    || |+------------------+| ||   |
    || || labelDescription || ||
    || |+------------------+| ||
    || +--------------------+ ||
    ||                        ||
    |+------------------------+|
    +--------------------------+

    */
    // **************************************************************************************
    // Class to store one item (= one thumbnail)
    // **************************************************************************************
    var NGItems = (function () {
      var nextId = 1;                   // private static --> all instances

      // constructor
      function NGItems( paramTitle, paramID ) {
        var ID = 0;                     // private

        // public (this instance only)
        if( paramID === undefined || paramID === null ) {
          ID = nextId++;
        }
        else {
          ID = paramID;
        }
        this.GetID = function () { return ID; };

        // public
        this.title = paramTitle;        // image title
        this.description = '';          // image description
        this.src = '';                  // full sized image URL
        this.width = 0;                 // image width
        this.height = 0;                // image height
        this.destinationURL = '';       // thumbnail destination URL --> open URL instead of displaying image
        this.kind = '';                 // 'image' or 'album'
        this.author = '';               // image author
        this.thumbFullWidth = 0;        // thumbnail full width
        this.thumbFullHeight = 0;       // thumbnail full height
        this.thumbLabelWidth = 0;
        this.thumbLabelHeight = 0;
        this.thumbSizes = {};           // store URLs for all available thumbnail sizes (flickr)
        this.thumbs = {                 // URLs and sizes for user defined
          url: { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
          width: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
          height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
        }
        this.picasaThumbs = null;         // store URLs and sizes
        this.hovered = false;           // is the thumbnail currently hovered?
        this.hoverInitDone = false;
        this.contentIsLoaded = false;   // album: are items already loaded?
        this.contentLength = 0;         // album: number of items
        this.imageNumber = 0;           // image number in the album
        this.eltTransform = {};
        this.albumID = 0;               // ID of the parent album
        this.paginationLastPage = 0;
        this.paginationLastWidth = 0;
        this.customData = {};
        this.selected = false;
        this.$elt = null;               // pointer to the corresponding DOM element
        this.$Elts = [];                // cached pointers to the thumbnail content -> to avoid jQuery().find()
      }

      // public static
      NGItems.get_nextId = function () {
        return nextId;
      };

      // public (shared across instances)
      NGItems.prototype = {

        // cached sub elements
        $getElt: function( elt, forceRefresh ) {
          if( this.$Elts[elt] !== undefined && !forceRefresh == true ) {
            return this.$Elts[elt];
          }
          else {
          this.$Elts[elt]=this.$elt.find(elt);
            return this.$Elts[elt];
          }
        },

        // set thumbnail image real height for current level/resolution, and for all others level/resolutions having the same settings
        thumbSetImgHeight: function(h) {
          var lst=['xs','sm','me','la','xl'];
          for( var i=0; i< lst.length; i++ ) {
            if( G.tn.settings.height.l1[lst[i]] == G.tn.settings.getH() && G.tn.settings.width.l1[lst[i]] == G.tn.settings.getW() ) {
              this.thumbs.height.l1[lst[i]]=h;
            }
          }
          for( var i=0; i< lst.length; i++ ) {
            if( G.tn.settings.height.lN[lst[i]] == G.tn.settings.getH() && G.tn.settings.width.l1[lst[i]] == G.tn.settings.getW() ) {
              this.thumbs.height.lN[lst[i]]=h;
            }
          }
        },

        // set thumbnail image real width for current level/resolution, and for all others level/resolutions having the same settings
        thumbSetImgWidth: function(w) {
          var lst=['xs','sm','me','la','xl'];
          for( var i=0; i< lst.length; i++ ) {
            if( G.tn.settings.height.l1[lst[i]] == G.tn.settings.getH() && G.tn.settings.width.l1[lst[i]] == G.tn.settings.getW() ) {
              this.thumbs.width.l1[lst[i]]=w;
            }
          }
          for( var i=0; i< lst.length; i++ ) {
            if( G.tn.settings.height.lN[lst[i]] == G.tn.settings.getH() && G.tn.settings.width.l1[lst[i]] == G.tn.settings.getW() ) {
              this.thumbs.width.lN[lst[i]]=w;
            }
          }
        },

        // Returns Thumbnail image
        thumbImg: function () {
          var tnImg = { src:'', width:0, height:0 };

          if( this.title == 'dummydummydummy' ) {
            tnImg.src=G.emptyGif;
            return tnImg;
          }
          tnImg.src=this.thumbs.url[G.curNavLevel][G.curWidth];
          tnImg.width=this.thumbs.width[G.curNavLevel][G.curWidth];
          tnImg.height=this.thumbs.height[G.curNavLevel][G.curWidth];
          return tnImg;
        },

        // for future use...
        responsiveURL: function () {
          var url = '';
          switch(G.O.kind) {
            case '':
              url = this.src;
              break;
            case 'flickr':
              url = this.src;
              break;
            case 'picasa':
            default:
              url = this.src;
              break;
          }
          return url;
        }
      };
      return NGItems;
    })();


    // ##########################
    // ##### INITIALIZATION #####
    // ##########################
    this.Initiate = function( element, params ) {
      "use strict";


      G.O = params;
      // thumbnails - label
      G.O.thumbnailLabel.get = function( opt ) {
        if( G.curNavLevel == 'l1' && G.O.thumbnailL1Label !== undefined && G.O.thumbnailL1Label[opt] !== undefined ) {
          return G.O.thumbnailL1Label[opt];
        }
        else {
          return G.O.thumbnailLabel[opt];
        }
      };
      G.O.thumbnailLabel.set = function( opt, value ) {
        if( G.curNavLevel == 'l1' && G.O.thumbnailL1Label !== undefined && G.O.thumbnailL1Label[opt] !== undefined ) {
          G.O.thumbnailL1Label[opt]=value;
        }
        else {
          G.O.thumbnailLabel[opt]=value;
        }
      };

      G.$E.base = jQuery(element);
      G.baseEltID = G.$E.base.attr('id');
      G.bodyOverflowInitial=jQuery('body').css('overflow');

      //    [TODO] deep linking support only once per page
      //    if( G.O.locationHash ) {
      //      alert(location.hash);
      //      if( location.hash.length > 0 && location.hash.indexOf('#nanogallery/'+G.baseEltID) === 0 ) {
      //        G.O.locationHash=false;
      //        nanoConsoleLog('locationHash has been disabled in:' + G.baseEltID +'. This option can only be used for one nanoGALLERY per page.');
      //      }
      //    }

      // POLYFILL FOR BIND function --> for older Safari mobile
      // found on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
      if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
          if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          }

          var aArgs = Array.prototype.slice.call(arguments, 1),
              fToBind = this,
              fNOP = function () {},
              fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                       ? this
                       : oThis,
                       aArgs.concat(Array.prototype.slice.call(arguments)));
              };

          fNOP.prototype = this.prototype;
          fBound.prototype = new fNOP();

          return fBound;
        };
      }

      String.prototype.replaceAll = function(search, replace) {
      if (replace === undefined) {
          return this.toString();
      }
      return this.split(search).join(replace);
  }
      // Detect the animation engine
      // default is jQuery
      if( toType(jQuery.velocity) == 'object' ) {
        // Velocity.js
        G.aengine='velocity';
      }
      else
        // Transit.js
        // if( jQuery.support.transition ) {    // conflict with bootstrap
        if( toType(jQuery.transit) == 'object' ) {
          G.aengine='transition';
        }

      // Set theme and colorScheme
      jQuery(element).addClass('nanogallery_theme_'+G.O.theme);
      SetColorScheme(element);

      // Hide icons (thumbnails and breadcrumb)
      if( G.O.thumbnailLabel.get('hideIcons') ) {
        var s1 = '.nanogallery_thumbnails_icons_off ',
        s = s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImageTitle:before { display:none !important; }'+'\n';
        s += s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelFolderTitle:before { display:none !important; }'+'\n';
        jQuery('head').append('<style>'+s+'</style>');
        jQuery(element).addClass('nanogallery_thumbnails_icons_off');
      }
      if( G.O.galleryToolbarHideIcons ) {
        var s1 = '.nanogallery_breadcrumb_icons_off ',
        s=s1+'.nanoGalleryNavigationbar .folderHome:before { display:none !important; }'+'\n';
        s += s1+'.nanoGalleryNavigationbar .folder:before { display:none !important; }'+'\n';
        jQuery('head').append('<style>'+s+'</style>');
        jQuery(element).addClass('nanogallery_breadcrumb_icons_off');
      }

      if( G.O.thumbnailLabel.get('align') == 'right' ) {
        var s1 = '.nanogallery_thumbnails_label_align_right ',
        s = s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : right !important; }'+'\n';
        jQuery('head').append('<style>'+s+'</style>');
        jQuery(element).addClass('nanogallery_thumbnails_label_align_right');
      }

      if( G.O.thumbnailLabel.get('align') == 'center' ) {
        var s1 = '.nanogallery_thumbnails_label_align_center ',
        s = s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : center !important; }'+'\n';
        jQuery('head').append('<style>'+s+'</style>');
        jQuery(element).addClass('nanogallery_thumbnails_label_align_center');
      }

      if( G.O.thumbnailLabel.get('align') == 'left' ) {
        var s1 = '.nanogallery_thumbnails_label_align_left ',
        s = s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : left !important; }'+'\n';
        jQuery('head').append('<style>'+s+'</style>');
        jQuery(element).addClass('nanogallery_thumbnails_label_align_left');
      }

      // Build the gallery structure - add the containers
      G.$E.conNavBCon=jQuery('<div class="nanoGalleryNavigationbarContainer"></div>').appendTo(element);
      G.$E.conNavBCon.hide();//css('visibility','hidden');
      G.$E.conNavB=jQuery('<div class="nanoGalleryNavigationbar"></div>').appendTo(G.$E.conNavBCon);

      var sRTL='';
      if( G.O.RTL ) {
        sRTL='style="text-align:right;direction:rtl;"';
      }
      G.$E.conBC=jQuery('<div class="nanoGalleryBreadcrumb" '+sRTL+'></div>').appendTo(G.$E.conNavB);
      G.$E.conLoadingB=jQuery('<div class="nanoGalleryLBarOff"><div></div><div></div><div></div><div></div><div></div></div>').appendTo(element);
      G.$E.conTnParent=jQuery('<div class="nanoGalleryContainerParent"></div>').appendTo(element);
      G.$E.conTn=jQuery('<div class="nanoGalleryContainer nGEvent"></div>').appendTo(G.$E.conTnParent);
      G.$E.conConsole=jQuery('<div class="nanoGalleryConsoleParent"></div>').appendTo(element);
      switch( G.O.thumbnailAlignment ) {
        case 'left':
          G.$E.conTnParent.css({'text-align':'left'});
          G.$E.conNavBCon.css({'margin-left':0 });
          break;
        case 'right':
          G.$E.conTnParent.css({'text-align':'right'});
          G.$E.conNavBCon.css({ 'margin-right':0});
          break;
      }

      jQuery('head').append('<style>.nanogalleryHideElement {position: absolute !important; top: -9999px !important; left: -9999px !important;}</style>');
      var t1=jQuery('<div class="nanogalleryHideElement '+jQuery(element).attr('class')+'"></div>').appendTo('body'),
      t2=jQuery('<div class="nanoGalleryContainerParent"></div>').appendTo(t1);
      G.$E.conTnHid=jQuery('<div class="nanoGalleryContainer"></div>').appendTo(t2);

      if( G.O.supportIE8 ) {
        // POLYFILL FOR addEventListener/removeEventListener function --> for IE8
        // found on https://gist.github.com/jonathantneal/3748027
        try {
          !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
            WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
              var target = this;

              registry.unshift([target, type, listener, function (event) {
                event.currentTarget = target;
                event.preventDefault = function () { event.returnValue = false };
                event.stopPropagation = function () { event.cancelBubble = true };
                event.target = event.srcElement || target;

                listener.call(target, event);
              }]);

              this.attachEvent("on" + type, registry[0][3]);
            };

            WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
              for (var index = 0, register; register = registry[index]; ++index) {
                if (register[0] == this && register[1] == type && register[2] == listener) {
                  return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
                }
              }
            };

            WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
              return this.fireEvent("on" + eventObject.type, eventObject);
            };
          })(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
        }
        catch (e) {
          BrowserNotification();
          return false;
        }
      }
      else {
        if( G.IE <= 8 ) {
          BrowserNotification();
          return false;
        }
      }

      // check parameters consistency
      checkPluginParameters();

      // pagination container
      var sRTL2='';
      if( G.O.RTL ) {
        sRTL2='style="direction:rtl;"';
      }
      G.$E.conPagin=jQuery('<div class="nanoGalleryPagination'+(G.O.paginationDots? 'Dot':'' )+'" '+sRTL2+'></div>').appendTo(G.$E.conTnParent);
      G.$E.conPagin.hide();

      // attach events
      var t= new userEventsGallery(G.$E.conTn[0] );

      // i18n translations
      i18n();

      // fullscreen API support
      if( document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled || document.mozFullScreenEnabled) {
        G.supportFullscreenAPI=true;
      } else {
        nanoConsoleLog('Your browser does not support the fullscreen API. Fullscreen button will not be displayed.');
      }

      // cache some thumbnails data (sizes, styles...)
      ThumbnailDefCaches();

      G.L.nbMaxTnPerRow=NbThumbnailsPerRow();

      // display an image on start and in fullscreen
      if( G.O.viewerFullscreen && G.O.openOnStart.indexOf('/') > 0 ) {
        ngscreenfull.request();
      }

      // lazy build the gallery
      if( G.O.lazyBuild != 'loadData' ) { NGFinalize(); }

      // GLOBAL EVENT MANAGEMENT
      // Page resize
      var resizeTimeOut=0;
      jQuery(window).resize( function() {
        if( resizeTimeOut ) clearTimeout(resizeTimeOut);
        if( G.containerViewerDisplayed ) {
            ResizeInternalViewer();
        }
        else {
          resizeTimeOut = setTimeout(function () {
            var nw=RetrieveCurWidth();
            // if( G.curAlbumIdx != -1 && G.curWidth != nw ) {
            if( G.curAlbumIdx != -1 &&
                  ( G.tn.settings.getH() != G.tn.settings.height[G.curNavLevel][nw] ||
                  G.tn.settings.getW() != G.tn.settings.width[G.curNavLevel][nw] ) ) {
              // thumbnail size changed --> render the gallery with the new sizes
              G.curWidth=nw;
              renderGallery( G.curAlbumIdx, 0 );
            }
            else {
              ResizeGallery();
            }
            return;
          }, 50);
        }
      });

      // Event page scrolled
      G.$E.base.on('scroll', function () {
        OnScroll();
      });
      jQuery(window).on('scroll', function () {
        OnScroll();
      });
    }

    function OnScroll() {
      if( G.scrollTimeOut ) clearTimeout(G.scrollTimeOut);
      G.scrollTimeOut = setTimeout(function () {

        if( !G.containerViewerDisplayed ) {
          if( G.O.lazyBuild == 'loadData' ) {
            if( inViewportVert(G.$E.conTnParent,G.O.lazyBuildTreshold) ){
              G.O.lazyBuild='none';
              NGFinalize();
            }
          }

          if( G.delayedAlbumIdx != -1 && inViewportVert(G.$E.conTnParent,G.O.lazyBuildTreshold) ){
            DisplayAlbumFinalize( G.delayedAlbumIdx, G.delayedSetLocationHash );
          }

          thumbnailsLazySetSrc();
          return;
        }
      }, 100);
    }


    function getSpecialKeysPressed(e){
      G.isShiftPressed = e.shiftKey;
      G.isAltPressed = e.altKey;
      G.isCtrlPressed = e.ctrlKey;
      G.isMetaPressed = e.metaKey;
    }

    // exposed objects for callbacks
    function ExposedObjects() {
      return {
        animationEngine:G.aengine,
        t:'test'
      };
    }

    // Message for unsupported browser
    function BrowserNotification() {
      var m='Your browser version is not supported anymore. The image gallery cannot be displayed. <br><br>Please update to a more recent one. Download:<br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.google.com/chrome/">Chrome</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.mozilla.com/firefox/">Firefox</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Internet Explorer</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.apple.com/safari/download/">Safari</a>';
      nanoAlert(m, false);
    }

    // Original author : John Hrvatin, Lead Program Manager, Internet Explorer - http://blogs.msdn.com/b/ie/archive/2011/10/28/a-best-practice-for-programming-with-vendor-prefixes.aspx
    function FirstSupportedPropertyName(prefixedPropertyNames) {
      var tempDiv = document.createElement("div");
      for (var i = 0; i < prefixedPropertyNames.length; ++i) {
        if (typeof tempDiv.style[prefixedPropertyNames[i]] != 'undefined')
          return prefixedPropertyNames[i];
      }
      return null;
    }

    // #####
    // Finalize initialization
    // #####
    function NGFinalize() {

      var sizeImageMax=Math.max(window.screen.width, window.screen.height);
      if( window.devicePixelRatio != undefined ) {
        if( window.devicePixelRatio > 1 ) {
          sizeImageMax=sizeImageMax*window.devicePixelRatio;
        }
      }

      for( var j=0; j<G.tn.getHE().length; j++) {
        switch(G.tn.getHE()[j].name ) {
          case 'imageScale150':
          case 'imageScale150Outside':
          case 'imageScaleIn80':
          case 'imageSlide2Up':
          case 'imageSlide2Down':
          case 'imageSlide2Left':
          case 'imageSlide2Right':
          case 'imageSlide2UpRight':
          case 'imageSlide2UpLeft':
          case 'imageSlide2DownRight':
          case 'imageSlide2DownLeft':
          case 'imageSlide2Random':
            G.tn.scale=Math.max(G.tn.scale, 1.5);
            break;
          case 'scale120':
            G.tn.scale=Math.max(G.tn.scale, 1.2);
            break;
        }
      }
      var si=0;
      if( G.O.itemsBaseURL.length >0 ) {G.O.itemsBaseURL+='/';}

      switch(G.O.kind) {
        // MARKUP / API
        case '':
          NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', '0', '-1' );

          if( G.O.items !== undefined && G.O.items !== null ) {
            ProcessItemOption();
            if( !ProcessLocationHash(false) ) {
              DisplayAlbum(0,false);
            }
          }
          else {
            var elements=jQuery(G.$E.base).children('a');
            if( elements.length > 0 ) {
              ProcessHREF(elements);
              if( !ProcessLocationHash(false) ) {
                DisplayAlbum(0,false);
              }
            }
            else
              nanoAlert('error: no image to process.');
          }
          break;

        // FLICKR STORAGE
        case 'flickr':
          if( !G.O.flickrSkipOriginal ) {
            G.flickr.photoAvailableSizes.push(10000);
            G.flickr.photoAvailableSizesStr.push('o');
          }
          for( i=0; i<G.flickr.photoAvailableSizes.length; i++) {
            G.flickr.photoSize=i; //G.flickr.photoAvailableSizesStr[i];
            if( sizeImageMax <= G.flickr.photoAvailableSizes[i] ) {
              break;
            }
          }
          NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', G.O.photoset.length > 0 ? G.O.photoset : '0', '-1' );
          FlickrProcessItems(0,true,-1,false);
          break;

        // CUSTOM STORAGE
        case 'json':
          NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', '0', '-1' );
          JsonProcessItems(0,true,-1,false);
          break;


        // PICASA/GOOGLE+ STORAGE
        case 'picasa':
        default:
          if( G.O.album.length > 0 ) {
            var p=G.O.album.indexOf('&authkey=');
            if( p >= 0 ) {
              var albumId=G.O.album.substring(0,p),
              opt=G.O.album.substring(p);
              if( opt.indexOf('Gv1sRg') == -1 ) {
                opt='&authkey=Gv1sRg'+opt.substring(9);
              }
              var newItem=NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', albumId, '-1' );
              newItem.customData.authkey=opt;
            }
            else {
              NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', G.O.album, '-1' );
            }


          }
          else {
            NGAddItem(G.i18nTranslations.breadcrumbHome, '', '', '', '', 'album', '', '0', '-1' );
          }
          PicasaProcessItems(0,true,-1,false);
          break;
      }


      // Keyboard management --> Image Viewer
      // Keyboard management --> Album Viewer (Else section)
      jQuery(document).keyup(function(e) {
        getSpecialKeysPressed(e);
        if( G.containerViewerDisplayed ) {
          switch( e.keyCode) {
            case 27:    // Esc key
              CloseInternalViewer(true);
              break;
            case 32:    // SPACE
            case 13:    // ENTER
              SlideshowToggle();
              break;
            case 38:    // UP
            case 39:    // RIGHT
            case 33:    // PAGE UP
              DisplayNextImagePart1();
              break;
            case 40:    // DOWN
            case 37:    // LEFT
            case 34:    // PAGE DOWN
              DisplayPreviousImage();
              break;
            case 35:    // END
            case 36:    // BEGIN
          }
        } else if ( !G.containerViewerDisplayed && G.curAlbumIdx > 0 && G.O.galleryEnableKeyboard ) {
          switch( e.keyCode) {
            case 27:    // Esc key
              DisplayAlbum(0, 'false');
              break;
            case 38:    // UP
            case 39:    // RIGHT
            case 33:    // PAGE UP
              DisplayNextAlbum();
              break;
            case 40:    // DOWN
            case 37:    // LEFT
            case 34:    // PAGE DOWN
              DisplayPreviousAlbum();
              break;
            case 32:    // SPACE
            case 13:    // ENTER
            case 35:    // END
            case 36:    // BEGIN
          }
        }
      });

      // TODO:
      jQuery(window).click(getSpecialKeysPressed);
      jQuery(window).mousemove(getSpecialKeysPressed);


      // browser back-button to close the image currently displayed
      if( G.O.locationHash ) {
        jQuery(window).bind( 'hashchange', function() {
          ProcessLocationHash(true);
        });
      }

      // gallery fullpage
      if( G.O.galleryFullpageButton ) {
        if( G.O.RTL ) {
          G.$E.conNavBFullpage =jQuery('<div class="nanoGalleryFullpage setFullPageButton"></div>').prependTo(G.$E.conNavB);
        }
        else {
          G.$E.conNavBFullpage =jQuery('<div class="nanoGalleryFullpage setFullPageButton"></div>').appendTo(G.$E.conNavB);
        }
        G.$E.conNavBFullpage.on('click', function(e){
          if( G.$E.conNavBFullpage.hasClass('setFullPageButton') ) {
            // switch to fullpage display mode
            if( G.containerViewerDisplayed ) { return; }
            if( G.O.maxWidth > 0 ) {
              jQuery(G.$E.base).css({'maxWidth':''});
            }
            G.$E.conNavBFullpage.removeClass('setFullPageButton').addClass('removeFullPageButton');
            setElementOnTop('', G.$E.base);

            for( j=0; j<G.tn.getHE().length; j++) {
              if( /scale120|imageScale150Outside|overScaleOutside|imageFlipHorizontal|imageFlipVertical/i.test(G.tn.getHE()[j].name) ) {
                G.$E.base.css({overflow: 'auto'});
              }
            }

            G.$E.base.addClass('fullpage');
            jQuery('body').css({overflow:'hidden'});
            ResizeGallery();
          }
          else {
            // switch off fullpage mode
            if( G.containerViewerDisplayed ) { return; }
            G.$E.conNavBFullpage.removeClass('removeFullPageButton').addClass('setFullPageButton');
            if( G.O.maxWidth > 0 ) {
              jQuery(G.$E.base).css({'maxWidth':G.O.maxWidth});
            }
            G.$E.base.removeClass('fullpage');
            for( j=0; j<G.tn.getHE().length; j++) {
              if( /scale120|imageScale150Outside|overScaleOutside|imageFlipHorizontal|imageFlipVertical/i.test(G.tn.getHE()[j].name) ) {
                G.$E.base.css({overflow: 'visible'});
              }
            }
            ScrollbarSetVisible();
            ResizeGallery();
          }
        });
       }

    }


    function ScrollbarSetVisible() {
      //jQuery('body').css({overflow:'initial'});
     jQuery('body').css({overflow:'visible'});
     return;
      if( G.bodyOverflowInitial != null && G.bodyOverflowInitial != undefined ) {
        jQuery('body').css({overflow:G.bodyOverflowInitial});
      }
      else {
        jQuery('body').css({overflow:'auto'});
      }
    }


    function ElementTranslateX( element, posX ) {
      jQuery(element).css({ 'left': posX });

      // [TODO] - translateX needs some code refactoring...
      //var transformStyle = 'translateX('+posX+'px)';
      //element.style.msTransform = transformStyle;
      //element.style.MozTransform = transformStyle;
      //element.style.webkitTransform = transformStyle;
      //element.style.transform = transformStyle;
    }


    // ##### USER EVENTS HANDLING ON GALLERY (click, hover, swipe, drag)
    // based on "Implement Custom Gestures" from Google
    // https://developers.google.com/web/fundamentals/input/touch-input/touchevents/
    function userEventsGallery(element) {

      var elementToSwipe=element,
      isAnimating=false,
      initialTouchPos=null,
      lastTouchPos=null,
      currentXPosition=0,
      onlyX=false,
      startViewport=null;

      var initialViewport=0;

      function OpenThumbnail( n ) {
        if( n == undefined ) { return; }

        if( G.$currentTouchedThumbnail != null) { ThumbnailHoverOut(G.$currentTouchedThumbnail); }
        G.$currentTouchedThumbnail=null;


        if( typeof G.O.fnThumbnailClicked === 'function'){
          if( !G.O.fnThumbnailClicked(G.I[n].$elt, G.I[n]) ) { return; }
        }

        // open URL
        if( G.I[n].destinationURL !== undefined && G.I[n].destinationURL.length >0 ) {
          window.location = G.I[n].destinationURL;
          return;
        }

        G.openNoDelay=false;
        if( G.I[n].kind == 'album' ) {
          OpenAlbum(n, false, -1, true);
        }
        else {
          // Display image
          DisplayImage(n,false);
        }
      }


      // Handle the start of gestures -->  click event
      this.handleGestureStartNoDelay = function(e) {
        // delay to ignore click event after touchstart event
        var eType=(jQuery(e.target).get(0).tagName).toUpperCase();
        // class customEventHandler --> disable standard event handler
        if( G.containerViewerDisplayed || eType == 'A' || eType == 'INPUT' || jQuery(e.target).hasClass('customEventHandler') ) {     // detect click on custom element
          // selection checkbox clicked
          if( jQuery(e.target).hasClass('ngChekbox') ) {
            var n=jQuery(e.target).parent().data('index');
            if( n != undefined ) {
              thumbnailSelection(G.I[n], undefined, false);
            }
          }
          e.stopPropagation();
          //e.eventDefault();
          return false;
        }

        getSpecialKeysPressed(e);

        // if items are selectable, cannot limit on user speed
        if( (new Date().getTime()) - G.timeLastTouchStart < 400 && G.O.itemsSelectable !== true ) {
          return;
        }
        G.openNoDelay=true;
        this.handleGestureStart(e);
      }.bind(this);

      // Handle the start of gestures
      this.handleGestureStart = function(e) {
        var eType=(jQuery(e.target).get(0).tagName).toUpperCase();
        // class customEventHandler --> disable standard event handler
        if( G.containerViewerDisplayed || eType == 'A' || eType == 'INPUT' || jQuery(e.target).hasClass('customEventHandler') ) {     // detect click on custom element
          e.stopPropagation();
          //e.eventDefault();
          return false;
        }

        if( (new Date().getTime()) - G.timeImgChanged < 400 && G.O.itemsSelectable !== true ) {
          return;
        }

        if( (new Date().getTime()) - G.timeLastTouchStart < 400 && G.O.itemsSelectable !== true ) {
          return;
        }
        G.timeLastTouchStart=new Date().getTime();

        var target = e.target || e.srcElement;
        var found=false;
        while( target != G.$E.conTn[0] ) {       // go element parent up to find the thumbnail element
          // if( target.getAttribute('class') == 'nanoGalleryThumbnailContainer' ) {
          if( jQuery(target).hasClass('nanoGalleryThumbnailContainer') ) {
            if( G.$currentTouchedThumbnail != null && !G.$currentTouchedThumbnail.is(jQuery(target)) ) {
              ThumbnailHoverOutAll();
            }
            G.$currentTouchedThumbnail=jQuery(target);
            found=true;
          }
          target = target.parentNode;
        }

        if( !found ) { return; }

        // handle thumbnail selection
        if(G.O.itemsSelectable === true){
          if(G.isShiftPressed || G.isCtrlPressed || G.isMetaPressed || e.target.nodeName.toLowerCase() === 'input'){
            thumbnailSelection( G.I[G.$currentTouchedThumbnail.data('index')] );
            return false;
          }
          if (G.selectMode === true) {
            thumbnailSelection( G.I[G.$currentTouchedThumbnail.data('index')] );
            return false;
          }
          if (G.I[G.$currentTouchedThumbnail.data('index')].kind === G.selectMode) {
            thumbnailSelection( G.I[G.$currentTouchedThumbnail.data('index')] );
            return false;
          }
          var idxctt = G.$currentTouchedThumbnail.data('index');
          G.touchSelectTO = setTimeout(function(){
            thumbnailSelection( G.I[idxctt] );
          },500);
        }


        initialViewport=getViewport();

        //if(e.touches && e.touches.length > 1) { return; }
        initialTouchPos = getGesturePointFromEvent(e);

        initialOffsetTop=getViewport().t;

        //if( G.gallerySwipeInitDone ) { return; }

        // Add the move and end listeners
        if (window.navigator.msPointerEnabled) {
          // Pointer events are supported.
          document.addEventListener('MSPointerMove', this.handleGestureMove, true);
          document.addEventListener('MSPointerUp', this.handleGestureEnd, true);
        } else {
          // Add Touch Listeners
          document.addEventListener('touchmove', this.handleGestureMove, true);
          document.addEventListener('touchend', this.handleGestureEnd, true);
          document.addEventListener('touchcancel', this.handleGestureEnd, true);

          // Add Mouse Listeners
          document.addEventListener('mousemove', this.handleGestureMove, true);
          document.addEventListener('mouseup', this.handleGestureEnd, true);
        }

        // makes content unselectable --> avoid image drag during 'mouse swipe'
        G.$E.base.addClass('unselectable').find('*').attr('draggable', 'false').attr('unselectable', 'on');
        G.gallerySwipeInitDone=true;

      }.bind(this);

      // Handle move gestures
      this.handleGestureMove = function (e) {
        //e.preventDefault(); // --> uncomment this to avoid viewport scrolling on touchscreen
        lastTouchPos = getGesturePointFromEvent(e);

        if( isAnimating ) { return; }

        if( G.O.paginationSwipe ) {
          if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto' ) {
            if( Math.abs(initialTouchPos.x - lastTouchPos.x) > 15 || onlyX ) {
              e.preventDefault(); // if swipe horizontaly the gallery, avoid moving page also
              onlyX=true;
              isAnimating = true;
              window.requestAnimationFrame(onAnimFrame);
            }
          }
        }

      }.bind(this);


      // Handle end gestures
      this.handleGestureEnd = function(e) {
        if( e.cancelable ) { e.preventDefault(); }
        e.stopPropagation();

        // if(e.touches && e.touches.length > 0) {
        //   return;
        // }
        isAnimating = false;
        onlyX=false;

        // Remove Event Listeners
        if (window.navigator.msPointerEnabled) {
          // Remove Pointer Event Listeners
          document.removeEventListener('MSPointerMove', this.handleGestureMove, true);
          document.removeEventListener('MSPointerUp', this.handleGestureEnd, true);
        } else {
          // Remove Touch Listeners
          document.removeEventListener('touchmove', this.handleGestureMove, true);
          document.removeEventListener('touchend', this.handleGestureEnd, true);
          document.removeEventListener('touchcancel', this.handleGestureEnd, true);

          // Remove Mouse Listeners
          document.removeEventListener('mousemove', this.handleGestureMove, true);
          document.removeEventListener('mouseup', this.handleGestureEnd, true);
        }

        if(G.O.itemsSelectable === true){
          if((new Date().getTime() - G.timeLastTouchStart) > 500 ){
            return false;
          }else{
            clearTimeout(G.touchSelectTO);
          }
        }

        // allow text + image selection again
        G.$E.base.addClass('unselectable').find('*').attr('draggable', 'true').attr('unselectable', 'off');

        updateSwipeRestPosition();

        initialTouchPos=null;
        lastTouchPos=null;
        currentXPosition=0;
        onlyX=false;
        startViewport=null;

      }.bind(this);


      function OpenTouchedThumbnail() {
        currentXPosition=0;
        initialTouchPos=null;
        lastTouchPos=null;
        ElementTranslateX(G.$E.conTn[0],0);

        if( G.containerViewerDisplayed ) {
          G.$currentTouchedThumbnail=null;
          G.openNoDelay=false;
        }
        else {
          if( G.$currentTouchedThumbnail != null ) {

            if( Math.abs(initialViewport.t-getViewport().t) > 10 ) {
              // viewport has been scrolled (touchscreen)--> open is cancelled
              ThumbnailHoverOut(G.$currentTouchedThumbnail);
              G.$currentTouchedThumbnail=null;
              G.openNoDelay=false;
              return;
            }

            var $t=G.$currentTouchedThumbnail;
            var n=$t.data('index');
            if( n == undefined ) { return; }

            if( ( G.curNavLevel == 'l1' && G.O.touchAnimationL1 !== undefined ? G.O.touchAnimationL1: G.O.touchAnimation) && !G.openNoDelay ) {
              // automatically opens the touched thumbnail (to disply an image or to open an album)
              if( G.O.touchAutoOpenDelay > 0 ) {
                ThumbnailHoverOutAll();
                ThumbnailHover($t);
                window.clearInterval(G.touchAutoOpenDelayTimerID);
                G.touchAutoOpenDelayTimerID=window.setInterval(function(){
                  window.clearInterval(G.touchAutoOpenDelayTimerID);
                  if( Math.abs(initialViewport.t-getViewport().t) > 10 ) {
                    // viewport has been scrolled after hover effect delay (touchscreen)--> open is cancelled
                    G.openNoDelay=false;
                    G.$currentTouchedThumbnail=null;
                    ThumbnailHoverOut($t);
                  }
                  else {
                    OpenThumbnail(n);
                  }
                }, G.O.touchAutoOpenDelay);
              }
              else {
                // 2 touch scenario
                if( !G.I[n].hovered ) {
                  // first touch
                  ThumbnailHoverOutAll();
                  ThumbnailHover($t);
                }
                else {
                  // second touch
                  OpenThumbnail(n);
                }
              }
            }
            else {
              OpenThumbnail(n);
            }

          }
          else {
            G.openNoDelay=false;
          }
        }
        return;
      }

      function updateSwipeRestPosition() {

        if( lastTouchPos == null || initialTouchPos == null ) {      // touchend without touchmove
          // currentXPosition=0;
          // initialTouchPos=null;
          OpenTouchedThumbnail();
          return;
        }

        var differenceInX = initialTouchPos.x - lastTouchPos.x;
        var differenceInY = initialTouchPos.y - lastTouchPos.y;
        currentXPosition = currentXPosition - differenceInX;
        if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto' ) {
          // pagination
          // if( Math.abs(differenceInX) > 30) {
          if( G.O.paginationSwipe && (Math.abs(differenceInX) > 40 && Math.abs(initialViewport.t-getViewport().t) <= 10) ) {
            G.$currentTouchedThumbnail=null;
            currentXPosition=0;
            initialTouchPos=null;
            lastTouchPos=null;
            ThumbnailHoverOutAll();
            if( differenceInX < -40 ) {
              paginationPreviousPage();
            }
            else {
              paginationNextPage();
            }
          }
          else {
            OpenTouchedThumbnail();
          }
        }
        else {
          // no pagination
          OpenTouchedThumbnail();
        }

        return;
      }

      function getGesturePointFromEvent(e) {
        var point = {};

        if(e.targetTouches) {
          point.x = e.targetTouches[0].clientX;
          point.y = e.targetTouches[0].clientY;
        } else {
          // Either Mouse event or Pointer Event
          point.x = e.clientX;
          point.y = e.clientY;
        }

        return point;
      }

      function onAnimFrame() {
        if(!isAnimating) { return; }

        if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto'  ) {
          var differenceInX = initialTouchPos.x - lastTouchPos.x;
          ElementTranslateX(elementToSwipe,currentXPosition - differenceInX);
        }

        isAnimating = false;
      }

      function ThumbnailOnMouseenter(e) {
        if( G.containerViewerDisplayed ) { return; }
        var target = e.target || e.srcElement;
        // if( target.getAttribute('class') == 'nanoGalleryThumbnailContainer' ) {
        if( jQuery(target).hasClass('nanoGalleryThumbnailContainer') ) {
          //if( G.$currentTouchedThumbnail == null ) {
            ThumbnailHover(jQuery(target));
          //}
        }
      }

      function ThumbnailOnMouseleave(e) {
        var target = e.target || e.srcElement;
        if( jQuery(target).hasClass('nanoGalleryThumbnailContainer') ) {
        // if( target.getAttribute('class') == 'nanoGalleryThumbnailContainer' ) {
          ThumbnailHoverOut(jQuery(target));
        }
      }


      // Check if MS pointer events are supported.
      if (window.navigator.msPointerEnabled) {
        // Add Pointer Event Listener
        elementToSwipe.addEventListener('MSPointerDown', this.handleGestureStartNoDelay, true);
      }
      else {
        // Add Touch Listener
        elementToSwipe.addEventListener('touchstart', this.handleGestureStart, true);

        // Add Mouse Listener
        if( !G.isIOS ) {
          var thatObject = this;
          elementToSwipe.addEventListener('mousedown', function(e){
              // filter : if the user uses the right click,
              // do not do anything
              if(e.button != 2){
                thatObject.handleGestureStartNoDelay(e);
            }
          }, true);
        }
      }

      // MOUSE OVER
      elementToSwipe.addEventListener('mouseenter', ThumbnailOnMouseenter, true);
      elementToSwipe.addEventListener('mouseleave', ThumbnailOnMouseleave, true);

    }



    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // MIT license
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                       || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());


    // ##### CHECK PLUGIN PARAMETERS CONSISTENCY
    function checkPluginParameters() {

      if( G.O.viewer == 'fancybox' ) {
        if( typeof(jQuery.fancybox) === 'undefined' ) {
          G.O.viewer = 'internal';
          nanoConsoleLog('Fancybox could not be found. Fallback to internal viewer. Please check the files included in the HTML page.');
        }
      }

      if( G.O.userID.toUpperCase() == 'CBRISBOIS@GMAIL.COM' || G.O.userID == '111186676244625461692' ) {
        if( G.O.blackList == '' || G.O.blackList.toUpperCase() == 'SCRAPBOOK|PROFIL' ) { G.O.blackList='profil|scrapbook|forhomepage'; }
      }

      if( G.O.blackList != '' ) { G.blackList=G.O.blackList.toUpperCase().split('|'); }
      if( G.O.whiteList != '' ) { G.whiteList=G.O.whiteList.toUpperCase().split('|'); }
      if( G.O.albumList != '' ) { G.albumList=G.O.albumList.toUpperCase().split('|'); }

      if( G.O.kind == 'picasa' || G.O.kind == 'flickr' ) {
        G.O.displayBreadcrumb=true;
      }
      // flickr
      if( G.O.photoset !== undefined ) {
        if( G.O.photoset.length > 0) { G.O.displayBreadcrumb=false; }
      }
      else { G.O.photoset=''; }
      // picasa
      if( G.O.album !== undefined ) {
        if( G.O.album.length > 0 ) { G.O.displayBreadcrumb=false; }
      }
      else { G.O.album=''; }

      if( G.O.maxWidth > 0 ) {
        jQuery(G.$E.base).css({'maxWidth':G.O.maxWidth});
        jQuery(G.$E.base).css({'margin-left':'auto'});
        jQuery(G.$E.base).css({'margin-right':'auto'});
      }

      if( toType(G.O.slideshowDelay) == 'number' && G.O.slideshowDelay >= 2000 ) {
        G.slideshowDelay=G.O.slideshowDelay;
      }
      else {
        nanoConsoleLog('Parameter "slideshowDelay" must be an integer >= 2000 ms.');
      }

      if( toType(G.O.thumbnailDisplayInterval) == 'number' && G.O.thumbnailDisplayInterval >= 0 ) {
        G.tn.displayInterval=G.O.thumbnailDisplayInterval;
      }
      else {
        nanoConsoleLog('Parameter "thumbnailDisplayInterval" must be an integer.');
      }

      if( toType(G.O.thumbnailLazyLoadTreshold) == 'number' && G.O.thumbnailLazyLoadTreshold >= 0 ) {
        G.tn.lazyLoadTreshold=G.O.thumbnailLazyLoadTreshold;
      }
      else {
        nanoConsoleLog('Parameter "thumbnailLazyLoadTreshold" must be an integer.');
      }

      if( toType(G.O.paginationMaxLinesPerPage) == 'number' && G.O.paginationMaxLinesPerPage >= 0 ) {
        G.pgMaxLinesPerPage=G.O.paginationMaxLinesPerPage;
      }
      else {
        nanoConsoleLog('Parameter "paginationMaxLinesPerPage" must be an integer.');
      }

      // resolution breakpoints --> convert old syntax to new one
      if( G.O.thumbnailSizeSM !== undefined ) { G.O.breakpointSizeSM=G.O.thumbnailSizeSM; }
      if( G.O.thumbnailSizeME !== undefined ) { G.O.breakpointSizeME=G.O.thumbnailSizeME; }
      if( G.O.thumbnailSizeLA !== undefined ) { G.O.breakpointSizeLA=G.O.thumbnailSizeLA; }
      if( G.O.thumbnailSizeXL !== undefined ) { G.O.breakpointSizeXL=G.O.thumbnailSizeXL; }


      /*
      if( G.tn.settings.getH() == 'auto' || G.tn.settings.getW() == 'auto' ) {
        if( G.O.paginationMaxLinesPerPage >0 ) {
          nanoConsoleLog('Parameters "paginationMaxLinesPerPage" and "thumbnailWidth/thumbnailHeight" value "auto" are not compatible.');
        }
        G.pgMaxLinesPerPage=0;

      }
      */

      // random sorting
      var s1=G.O.albumSorting.toUpperCase();
      if( s1.indexOf('RANDOM') == 0 && s1.length > 6 ) {
        n= parseInt(s1.substring(6));
        if( n > 0 ) {
          G.maxAlbums=n;
        }
        G.O.albumSorting='random';
      }
      var s2=G.O.photoSorting.toUpperCase();
      if( s2.indexOf('RANDOM') == 0 && s2.length > 6 ) {
        n= parseInt(s2.substring(6));
        if( n > 0 ) {
          G.maxPhotos=n;
        }
        G.O.photoSorting='random';
      }
      
      var mA=parseInt(G.O.albumMax);
      if( mA > 0 ) {
        G.maxAlbums=n;
      }


      // thumbnails hover effects - Level1
      var tL1HE=G.O.thumbnailL1HoverEffect;
      if( tL1HE !== undefined ) {
        switch( toType(tL1HE) ) {
          case 'string':
            var tmp=tL1HE.split(',');
            for(var i=0; i<tmp.length; i++) {
              if( tmp[i] != 'none' && isAEngineSupported(tmp[i]) ) {
                var oDef=NewTHoverEffect();
                oDef.name=tmp[i];
                G.tnL1HE.push(oDef);
              }
            }
            break;
          case 'object':
            if( tL1HE.name != 'none' && isAEngineSupported(tL1HE.name) ) {
              var oDef=NewTHoverEffect();
              G.tnL1HE.push(jQuery.extend(oDef,tL1HE));
            }
            break;
          case 'array':
            for(var i=0; i<tL1HE.length; i++) {
              if( tL1HE[i].name != 'none' && isAEngineSupported(tL1HE[i].name) ) {
                var oDef=NewTHoverEffect();
                G.tnL1HE.push(jQuery.extend(oDef,tL1HE[i]));
              }
            }
            break;
          case 'null':
            break;
          default:
            nanoAlert('incorrect parameter for "thumbnailL1HoverEffect".');
        }
      }

      // thumbnails hover effects - other levels
      var tHE=G.O.thumbnailHoverEffect;
      switch( toType(tHE) ) {
        case 'string':
          var tmp=tHE.split(',');
          for(var i=0; i<tmp.length; i++) {
            if( tmp[i] != 'none' && isAEngineSupported(tmp[i]) ) {
              var oDef=NewTHoverEffect();
              oDef.name=tmp[i];
              G.tnHE.push(oDef);
            }
          }
          break;
        case 'object':
          if( tHE.name != 'none' && isAEngineSupported(tHE.name) ) {
            var oDef=NewTHoverEffect();
            G.tnHE.push(jQuery.extend(oDef,tHE));
          }
          break;
        case 'array':
          for(var i=0; i<tHE.length; i++) {
            if( tHE[i].name != 'none' && isAEngineSupported(tHE[i].name) ) {
              var oDef=NewTHoverEffect();
              G.tnHE.push(jQuery.extend(oDef,tHE[i]));
            }
          }
          break;
        case 'null':
          break;
        default:
          nanoAlert('incorrect parameter for "thumbnailHoverEffect".');
      }


      if( G.tnHE.length == 0 ) {
        if( G.tnL1HE.length == 0 ) {
          G.O.touchAnimationL1=false;
        }
        G.O.touchAnimation=false;
      }


      // management of screen width
      G.curWidth=RetrieveCurWidth();

      // RETRIEVE ALL THUMBNAIL SIZES
      if( toType(G.O.thumbnailWidth) == 'number' ) {
        ThumbnailsDefaultSize( 'width', 'l1', G.O.thumbnailWidth, 'u');
        ThumbnailsDefaultSize( 'width', 'lN', G.O.thumbnailWidth, 'u');
      }
      else {
        var ws=G.O.thumbnailWidth.split(' ');
        var v='auto';
        if( ws[0].substring(0,4) != 'auto' ) { v=parseInt(ws[0]); }
        var c='u';
        if( ws[0].charAt(ws[0].length - 1) == 'C' ) { c='c'; }
        ThumbnailsDefaultSize( 'width', 'l1', v, c );   // default value for all resolutions and navigation levels
        ThumbnailsDefaultSize( 'width', 'lN', v, c );
        for( var i=1; i<ws.length; i++ ) {
          var r=ws[i].substring(0,2).toLowerCase();
          if( /xs|sm|me|la|xl/i.test(r) ) {
            var w=ws[i].substring(2);
            var v='auto';
            if( w.substring(0,4) != 'auto' ) { v=parseInt(w); }
            var c='u';
            if( w.charAt(w.length - 1) == 'C' ) { c='c'; }
            G.tn.settings.width['l1'][r]=v;
            G.tn.settings.width['lN'][r]=v;
            G.tn.settings.width['l1'][r+'c']=c;
            G.tn.settings.width['lN'][r+'c']=c;
          }
        }
      }
      if( G.O.thumbnailL1Width != undefined ) {
        if( toType(G.O.thumbnailL1Width) == 'number' ) {
          ThumbnailsDefaultSize( 'width', 'l1', G.O.thumbnailL1Width, 'u');
        }
        else {
          var ws=G.O.thumbnailL1Width.split(' ');
          var v='auto';
          if( ws[0].substring(0,4) != 'auto' ) { v=parseInt(ws[0]); }
          var c='u';
          if( ws[0].charAt(ws[0].length - 1) == 'C' ) { c='c'; }
          ThumbnailsDefaultSize( 'width', 'l1', v, c );
          for( var i=1; i<ws.length; i++ ) {
            var r=ws[i].substring(0,2).toLowerCase();
            if( /xs|sm|me|la|xl/i.test(r) ) {
              var w=ws[i].substring(2);
              var v='auto';
              if( w.substring(0,4) != 'auto' ) { v=parseInt(w); }
              var c='u';
              if( w.charAt(w.length - 1) == 'C' ) { c='c'; }
              G.tn.settings.width['l1'][r]=v;
              G.tn.settings.width['l1'][r+'c']=c;
            }
          }
        }
      }


      if( toType(G.O.thumbnailHeight) == 'number' ) {
        ThumbnailsDefaultSize( 'height', 'l1', G.O.thumbnailHeight, 'u');
        ThumbnailsDefaultSize( 'height', 'lN', G.O.thumbnailHeight, 'u');
      }
      else {
        var ws=G.O.thumbnailHeight.split(' ');
        var v='auto';
        if( ws[0].substring(0,4) != 'auto' ) { v=parseInt(ws[0]); }
        var c='u';
        if( ws[0].charAt(ws[0].length - 1) == 'C' ) { c='c'; }
        ThumbnailsDefaultSize( 'height', 'l1', v, c );   // default value for all resolutions and navigation levels
        ThumbnailsDefaultSize( 'height', 'lN', v, c );
        for( var i=1; i<ws.length; i++ ) {
          var r=ws[i].substring(0,2).toLowerCase();
          if( /xs|sm|me|la|xl/i.test(r) ) {
            var w=ws[i].substring(2);
            var v='auto';
            if( w.substring(0,4) != 'auto' ) { v=parseInt(w); }
            var c='u';
            if( w.charAt(w.length - 1) == 'C' ) { c='c'; }
            G.tn.settings.height['l1'][r]=v;
            G.tn.settings.height['lN'][r]=v;
            G.tn.settings.height['l1'][r+'c']=c;
            G.tn.settings.height['lN'][r+'c']=c;
          }
        }
      }
      if( G.O.thumbnailL1Height != undefined ) {
        if( toType(G.O.thumbnailL1Height) == 'number' ) {
          ThumbnailsDefaultSize( 'height', 'l1', G.O.thumbnailL1Height, 'u');
        }
        else {
          var ws=G.O.thumbnailL1Height.split(' ');
          var v='auto';
          if( ws[0].substring(0,4) != 'auto' ) { v=parseInt(ws[0]); }
          var c='u';
          if( ws[0].charAt(ws[0].length - 1) == 'C' ) { c='c'; }
          ThumbnailsDefaultSize( 'height', 'l1', v, c );
          for( var i=1; i<ws.length; i++ ) {
            var r=ws[i].substring(0,2).toLowerCase();
            if( /xs|sm|me|la|xl/i.test(r) ) {
              var w=ws[i].substring(2);
              var v='auto';
              if( w.substring(0,4) != 'auto' ) { v=parseInt(w); }
              var c='u';
              if( w.charAt(w.length - 1) == 'C' ) { c='c'; }
              G.tn.settings.height['l1'][r]=v;
              G.tn.settings.height['l1'][r+'c']=c;
            }
          }
        }
      }
    }


    // ##### THUMBNAIL SIZE MANAGEMENT
    function ThumbnailsDefaultSize( dir, level, v, crop ) {
      G.tn.settings[dir][level]['xs']=v;
      G.tn.settings[dir][level]['sm']=v;
      G.tn.settings[dir][level]['me']=v;
      G.tn.settings[dir][level]['la']=v;
      G.tn.settings[dir][level]['xl']=v;
      G.tn.settings[dir][level]['xsc']=crop;
      G.tn.settings[dir][level]['smc']=crop;
      G.tn.settings[dir][level]['mec']=crop;
      G.tn.settings[dir][level]['lac']=crop;
      G.tn.settings[dir][level]['xlc']=crop;
    }

    function RetrieveCurWidth() {

      var vpW= getViewport().w;

      if( G.O.breakpointSizeSM > 0 && vpW < G.O.breakpointSizeSM) { return 'xs'; }
      if( G.O.breakpointSizeME > 0 && vpW < G.O.breakpointSizeME) { return 'sm'; }
      if( G.O.breakpointSizeLA > 0 && vpW < G.O.breakpointSizeLA) { return 'me'; }
      if( G.O.breakpointSizeXL > 0 && vpW < G.O.breakpointSizeXL) { return 'la'; }

      return 'xl';
    }

    function RetrieveMaxWidth() {
      var vpW= Math.max(getViewport().w, getViewport().h);

      if( G.O.breakpointSizeSM > 0 && vpW < G.O.breakpointSizeSM) { return 'xs'; }
      if( G.O.breakpointSizeME > 0 && vpW < G.O.breakpointSizeME) { return 'sm'; }
      if( G.O.breakpointSizeLA > 0 && vpW < G.O.breakpointSizeLA) { return 'me'; }
      if( G.O.breakpointSizeXL > 0 && vpW < G.O.breakpointSizeXL) { return 'la'; }

      return 'xl';
    }


    // HOVER EFFECTS
    function NewTHoverEffect() {
      // easing : jQuery supports only 'swing' and 'linear'
      var oDef={'delay':0, 'delayBack':0, 'duration':400, 'durationBack':200, 'easing':'swing', 'easingBack': 'swing', 'animParam':null };
      if( G.aengine != 'animate' ) {
        oDef.easing='ease';
        oDef.easingBack='ease';
      }
      return oDef;
    }


    // check if effect is compatible with the used animation engine
    // check also consistency of thumbnail configuration with hover effect
    function isAEngineSupported( effect ) {

      // var isBasic = /labelOpacity50|borderLighter|borderDarker/i.test(effect),
      var isBasic = /labelOpacity50|borderLighter|borderDarker/i.test(effect),
      // isStd = /imageFlipVertical|imageFlipHorizontal|imageRotateCornerBR|imageRotateCornerBL|rotateCornerBL|rotateCornerBR|imageScale150|overScale|overScaleOutside|imageScaleIn80|imageScale150Outside|scale120|scaleLabelOverImage|slideUp|slideDown|slideLeft|slideRight|imageSlideUp|imageSlideDown|imageSlideLeft|imageSlideRight|labelAppear|labelAppear75|descriptionAppear|labelSlideDown|labelSlideUp|labelSlideUpTop|imageInvisible|imageOpacity50|descriptionSlideUp|labelSplitVert|labelSplit4|labelAppearSplitVert|labelAppearSplit4|imageSplitVert|imageSplit4|imageSlide2Up|imageSlide2Down|imageSlide2Left|imageSlide2Right|imageSlide2Random|imageSlide2UpRight|imageSlide2UpLeft|imageSlide2DownRight|imageSlide2DownLeft/i.test(effect),
      isStd = /imageFlipVertical|imageFlipHorizontal|imageRotateCornerBR|imageRotateCornerBL|rotateCornerBL|rotateCornerBR|imageScale150|overScale|overScaleOutside|imageScaleIn80|imageScale150Outside|scale120|scaleLabelOverImage|slideUp|slideDown|slideLeft|slideRight|imageSlideUp|imageSlideDown|imageSlideLeft|imageSlideRight|labelAppear|labelAppear75|descriptionAppear|labelSlideDown|labelSlideUp|labelSlideUpTop|imageInvisible|imageOpacity50|descriptionSlideUp|labelSplitVert|labelSplit4|labelAppearSplitVert|labelAppearSplit4|imageSplitVert|imageSplit4/i.test(effect),
      // isAdv = /imageScaleIn80|imageScale150|imageScale150Outside|scale120|overScale|overScaleOutside|scaleLabelOverImage|imageFlipHorizontal|imageFlipVertical|rotateCornerBR|rotateCornerBL|imageRotateCornerBR|imageRotateCornerBL|imageExplode/i.test(effect);
      isAdv = /imageExplode/i.test(effect);

      G.O.touchAutoOpenDelay= parseInt(G.O.touchAutoOpenDelay);
      if( G.O.touchAutoOpenDelay == 0 ) {
        G.O.touchAutoOpenDelay=1000;
      }


      if( !isBasic && !isStd && !isAdv ) {
        nanoAlert('Unknow parameter value: thumbnailHoverEffect="'+effect+'".');
        return false;
      }

      if( G.O.thumbnailLabel.get('position') == 'onBottom' && !/borderLighter|borderDarker|imageOpacity50|imageScale150|imageScaleIn80|imageSlide2Up|imageSlide2Down|imageSlide2Left|imageSlide2Right|imageSlide2Random|imageSlide2UpRight|imageSlide2UpLeft|imageSlide2DownRight|imageSlide2DownLeft|imageScale150Outside|scale120/i.test(effect) ) {
        nanoAlert('The parameter combination thumbnailHoverEffect="'+effect+'" and thumbnailLabel.position="onBottom" is not supported.');
        return false;
      }

      if( (isAdv && (G.aengine == 'animate' || G.CSStransformName == null) ) ) {
        nanoConsoleLog('Parameter thumbnailHoverEffect="'+effect+'" requires one of the additionals jQuery plugins "Velocity" or "Transit".');
        return false;
      }

      return true;

    }


    // I18N : define text translations
    function i18n() {

      // browser language
      G.i18nLang = (navigator.language || navigator.userLanguage).toUpperCase();
      if( G.i18nLang === 'UNDEFINED') { G.i18nLang=''; }

      var llang=-('_'+G.i18nLang).length;

      if( toType(G.O.i18n) == 'object' ){

        for( var key in G.O.i18n ) {
          //var value = G.O.i18n[key];
          var s=key.substr(llang);
          if( s == ('_'+G.i18nLang) ) {
            G.i18nTranslations[key.substr(0,key.length-s.length)]=G.O.i18n[key];
          }
          else {
            G.i18nTranslations[key]=G.O.i18n[key];
          }
        }
      }
    }


    // Location Hash
    function ProcessLocationHash(isTriggeredByEvent) {

      // special use case -> openOnStart can be processed like location hash, only once (on start)
      if( G.O.openOnStart != '' ) {
        var ID=G.O.openOnStart;
        G.O.openOnStart='';
        return OpenItem( false, ID, true );
      }

      // standard use case -> location hash processing
      if( !G.O.locationHash ) { return false; }

      var albumID=null,
      imageID=null,
      curGal='#nanogallery/'+G.baseEltID+'/',
      hash=location.hash;

      if( hash == G.lastLocationHash ) { return; }

      if( hash == '' ) {
        if( G.lastOpenAlbumID != -1 ) {
          // back button and no hash --> display first album
          G.lastLocationHash='';
          OpenAlbum(0,false,-1,false);
          return true;
        }
      }

      if( hash.indexOf(curGal) == 0 ) {
        var ID=hash.substring(curGal.length);
        return OpenItem( isTriggeredByEvent, ID, !isTriggeredByEvent );
      }

      //return {albumID:albID, imageID:imgID};
    }

    function OpenItem( isTriggeredByEvent, ID, openAlbumOnViewerClose ) {
      var albumID=null,
      imageID=null,
      p=ID.indexOf('/'),
      albumIdx=-1,
      imageIdx=-1,
      l=G.I.length;

      if( p > 0 ) {
        albumID=ID.substring(0,p);
        imageID=ID.substring(p+1);
        for(var i=0; i<l; i++ ) {
          if( G.I[i].kind == 'image' && G.I[i].GetID() == imageID ) {
            imageIdx=i;
            break;
          }
        }
      }
      else {
        albumID=ID;
      }
      for(var i=0; i<l; i++ ) {
        if( G.I[i].kind == 'album' && G.I[i].GetID() == albumID ) {
          albumIdx=i;
          break;
        }
      }

      if( imageID !== null ) {
        // process IMAGE
        // if( !isTriggeredByEvent ) {
        if( openAlbumOnViewerClose ) {
          G.albumIdxToOpenOnViewerClose=albumIdx;
        }
        if( G.O.kind == '' ) {
          DisplayImage(imageIdx);
        }
        else {
          if( imageIdx == -1 ) {
            // first load the album
            if( G.O.viewerFullscreen ) {
              // activate fullscreen before ajax call, because it can be done only on user interaction
              ngscreenfull.request();
            }
            OpenAlbum(albumIdx,false,imageID,isTriggeredByEvent);
          }
          else {
            // album is already loaded
            DisplayImage(imageIdx);
          }
        }
        return true;

      }
      else {
        // process ALBUM
        OpenAlbum(albumIdx,false,-1,isTriggeredByEvent);
        return true;
      }

    }





    // build a dummy thumbnail to get different sizes and to cache them
    function ThumbnailDefCaches() {
      G.I=[];

      // var desc='';
      // if( G.O.thumbnailLabel.displayDescription ) { desc='d'; }
      // var item=NGAddItem('dummydummydummy', G.emptyGif, G.emptyGif, desc, '', 'image', '', '1', '0' ),
      // $newDiv=thumbnailBuild(item, 0, false).e$;

      // G.tn.borderWidth=$newDiv.outerWidth(true)-$newDiv.width();
      // G.tn.borderHeight=$newDiv.outerHeight(true)-$newDiv.height();

      // G.tn.imgcBorderWidth=$newDiv.find('.imgContainer').outerWidth(true)-$newDiv.find('.imgContainer').width();
      // G.tn.imgcBorderHeight=$newDiv.find('.imgContainer').outerHeight(true)-$newDiv.find('.imgContainer').height();

      // G.tn.labelBorderHeight=$newDiv.find('.labelImage').outerHeight(true)-$newDiv.find('.labelImage').height();
      // G.tn.labelBorderWidth=$newDiv.find('.labelImage').outerWidth(true)-$newDiv.find('.labelImage').width();

      // if( G.O.thumbnailLabel.position == 'onBottom' ) {
        // G.tn.labelHeight=$newDiv.find('.labelImage').outerHeight(true);
      // }

      // var lst=['xs','sm','me','la','xl'];
      // for( var i=0; i< lst.length; i++ ) {
        // var w=G.tn.settings.width['l1'][lst[i]];
        // if( w != 'auto' ) {
          // G.tn.outerWidth['l1'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        // }
        // else {
          // G.tn.outerWidth['l1'][lst[i]]=0;
        // }
        // w=G.tn.settings.width['lN'][lst[i]];
        // if( w != 'auto' ) {
          // G.tn.outerWidth['lN'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        // }
        // else {
          // G.tn.outerWidth['lN'][lst[i]]=0;
        // }
      // }
      // for( var i=0; i< lst.length; i++ ) {
        // var h=G.tn.settings.height['l1'][lst[i]];
        // if( h != 'auto' ) {
          // G.tn.outerHeight['l1'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight;
        // }
        // else {
          // G.tn.outerHeight['l1'][lst[i]]=0;
        // }
        // h=G.tn.settings.height['lN'][lst[i]];
        // if( h != 'auto' ) {
          // G.tn.outerHeight['lN'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight;
        // }
        // else {
          // G.tn.outerHeight['lN'][lst[i]]=0;
        // }
      // }



      // Retrieve LN
      G.curNavLevel='lN';
      var desc='';
      if( G.O.thumbnailLabel.get('displayDescription') ) { desc='d'; }
      var item=NGAddItem('dummydummydummy', G.emptyGif, G.emptyGif, desc, '', 'image', '', '1', '0' ),
      $newDiv=thumbnailBuild(item, 0, false).e$;

      G.tn.borderWidth=$newDiv.outerWidth(true)-$newDiv.width();
      G.tn.borderHeight=$newDiv.outerHeight(true)-$newDiv.height();

      G.tn.imgcBorderWidth=$newDiv.find('.imgContainer').outerWidth(true)-$newDiv.find('.imgContainer').width();
      G.tn.imgcBorderHeight=$newDiv.find('.imgContainer').outerHeight(true)-$newDiv.find('.imgContainer').height();

      G.tn.labelBorderHeight=$newDiv.find('.labelImage').outerHeight(true)-$newDiv.find('.labelImage').height();
      G.tn.labelBorderWidth=$newDiv.find('.labelImage').outerWidth(true)-$newDiv.find('.labelImage').width();

      if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
        G.tn.labelHeight.lN=$newDiv.find('.labelImage').outerHeight(true);
        G.tn.labelHeight.l1=G.tn.labelHeight.lN;
      }

      var lst=['xs','sm','me','la','xl'];
      for( var i=0; i< lst.length; i++ ) {
        //var w=G.tn.settings.width['l1'][lst[i]];
        //if( w != 'auto' ) {
        //  G.tn.outerWidth['l1'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        //}
        //else {
        //  G.tn.outerWidth['l1'][lst[i]]=0;
        //}
        w=G.tn.settings.width['lN'][lst[i]];
        //w=G.tn.settings.width['l1'][lst[i]];
        if( w != 'auto' ) {
          G.tn.outerWidth['lN'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
          G.tn.outerWidth['l1'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        }
        else {
          G.tn.outerWidth['lN'][lst[i]]=0;
          G.tn.outerWidth['l1'][lst[i]]=0;
        }
      }
      for( var i=0; i< lst.length; i++ ) {
        //var h=G.tn.settings.height['l1'][lst[i]];
        //if( h != 'auto' ) {
        //  G.tn.outerHeight['l1'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight;
        //}
        //else {
        //  G.tn.outerHeight['l1'][lst[i]]=0;
        //}
        h=G.tn.settings.height['lN'][lst[i]];
        //h=G.tn.settings.height['l1'][lst[i]];
        if( h != 'auto' ) {
          G.tn.outerHeight['lN'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight.get();
          G.tn.outerHeight['l1'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight.get();
        }
        else {
          G.tn.outerHeight['lN'][lst[i]]=0;
          G.tn.outerHeight['l1'][lst[i]]=0;
        }
      }


      // Retrieve L1
      G.I=[];
      G.curNavLevel='l1';
      desc='';
      if( G.O.thumbnailLabel.get('displayDescription') ) { desc='d'; }
      item=NGAddItem('dummydummydummy', G.emptyGif, G.emptyGif, desc, '', 'image', '', '1', '0' );
      $newDiv=thumbnailBuild(item, 0, false).e$;

      G.tn.borderWidth=$newDiv.outerWidth(true)-$newDiv.width();
      G.tn.borderHeight=$newDiv.outerHeight(true)-$newDiv.height();

      G.tn.imgcBorderWidth=$newDiv.find('.imgContainer').outerWidth(true)-$newDiv.find('.imgContainer').width();
      G.tn.imgcBorderHeight=$newDiv.find('.imgContainer').outerHeight(true)-$newDiv.find('.imgContainer').height();

      G.tn.labelBorderHeight=$newDiv.find('.labelImage').outerHeight(true)-$newDiv.find('.labelImage').height();
      G.tn.labelBorderWidth=$newDiv.find('.labelImage').outerWidth(true)-$newDiv.find('.labelImage').width();

      if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
        G.tn.labelHeight.l1=$newDiv.find('.labelImage').outerHeight(true);
      }

      var lst=['xs','sm','me','la','xl'];
      for( var i=0; i< lst.length; i++ ) {
        var w=G.tn.settings.width['l1'][lst[i]];
        if( w != 'auto' ) {
          G.tn.outerWidth['l1'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        }
        else {
          G.tn.outerWidth['l1'][lst[i]]=0;
        }
        //w=G.tn.settings.width['lN'][lst[i]];
        //if( w != 'auto' ) {
        //  G.tn.outerWidth['lN'][lst[i]]=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
        //}
        //else {
        //  G.tn.outerWidth['lN'][lst[i]]=0;
        //}
      }
      for( var i=0; i< lst.length; i++ ) {
        var h=G.tn.settings.height['l1'][lst[i]];
        if( h != 'auto' ) {
          G.tn.outerHeight['l1'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight.get();
        }
        else {
          G.tn.outerHeight['l1'][lst[i]]=0;
        }
        //h=G.tn.settings.height['lN'][lst[i]];
        //if( h != 'auto' ) {
        //  G.tn.outerHeight['lN'][lst[i]]=h+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight.get();
        //}
        //else {
        //  G.tn.outerHeight['lN'][lst[i]]=0;
        //}
      }


      // pagination
      G.pgMaxNbThumbnailsPerRow=NbThumbnailsPerRow();

      // backup values used in animations/transitions
      G.custGlobals.oldBorderColor=$newDiv.css('border-color-top');
      if( G.custGlobals.oldBorderColor == '' || G.custGlobals.oldBorderColor == null || G.custGlobals.oldBorderColor == undefined ) { G.custGlobals.oldBorderColor='#000'; }
      G.custGlobals.oldLabelOpacity=$newDiv.find('.labelImage').css('opacity');
      var c=jQuery.Color($newDiv.find('.labelImage'),'backgroundColor');
      if( c == 'transparent' ) {
        G.custGlobals.oldLabelRed=0;
        G.custGlobals.oldLabelGreen=0;
        G.custGlobals.oldLabelBlue=0;
      }
      else {
        G.custGlobals.oldLabelRed=c.red();
        G.custGlobals.oldLabelGreen=c.green();
        G.custGlobals.oldLabelBlue=c.blue();
      }

      G.I=[];

      // thumbnail content CSS styles
      if( G.O.thumbnailLabel.display ) {
        switch( G.O.thumbnailLabel.position ){
          case 'onBottom':
            G.tn.styleLabelImage='top:0; position:relative; left:0; right:0;';
            G.tn.styleL1LabelImage='top:0; position:relative; left:0; right:0;';
            if( G.tn.settings.getH() == 'auto' ) {
              // line break
              G.tn.styleFTitle='white-space:normal;';
              G.tn.styleL1FTitle='white-space:normal;';
              G.tn.styleITitle='white-space:normal;';
              G.tn.styleL1ITitle='white-space:normal;';
              G.tn.styleDesc='white-space:normal;';
              G.tn.styleL1Desc='white-space:normal;';
            }
            else {
              // no line break
              G.tn.styleFTitle='white-space:nowrap;';
              G.tn.styleL1FTitle='white-space:nowrap;';
              G.tn.styleITitle='white-space:nowrap;';
              G.tn.styleL1ITitle='white-space:nowrap;';
              G.tn.styleDesc='white-space:nowrap;';
              G.tn.styleL1Desc='white-space:nowrap;';
            }
            break;
          case 'overImageOnTop':
            G.tn.styleLabelImage='top:0; bottom:0; left:0; right:0;';
            G.tn.styleL1LabelImage='top:0; bottom:0; left:0; right:0;';
            break;
          case 'overImageOnMiddle':
            G.tn.styleLabelImage='top:0; bottom:0; left:0; right:0;';
            G.tn.styleL1LabelImage='top:0; bottom:0; left:0; right:0;';
            G.tn.styleFTitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleL1FTitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleITitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleL1ITitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleDesc='left:0; right:0; position:absolute; top:50%;';
            G.tn.styleL1Desc='left:0; right:0; position:absolute; top:50%;';
            break;
          case 'custom':
            break;
          case 'overImageOnBottom':
          default :
            G.O.thumbnailLabel.position='overImageOnBottom';
            G.tn.styleLabelImage='bottom:0; left:0; right:0;';
            G.tn.styleL1LabelImage='bottom:0; left:0; right:0;';
            break;
        }
      }
      if( G.O.thumbnailL1Label && G.O.thumbnailL1Label.display ) {
        switch( G.O.thumbnailL1Label.position ){
          case 'onBottom':
            G.tn.styleL1LabelImage='top:0; position:relative; left:0; right:0;';
            if( G.tn.settings.getH() == 'auto' ) {
              // line break
              G.tn.styleL1FTitle='white-space:normal;';
              G.tn.styleL1ITitle='white-space:normal;';
              G.tn.styleL1Desc='white-space:normal;';
            }
            else {
              // no line break
              G.tn.styleL1FTitle='white-space:nowrap;';
              G.tn.styleL1ITitle='white-space:nowrap;';
              G.tn.styleL1Desc='white-space:nowrap;';
            }
            break;
          case 'overImageOnTop':
            G.tn.styleL1LabelImage='top:0; bottom:0; left:0; right:0;';
            break;
          case 'overImageOnMiddle':
            G.tn.styleL1LabelImage='top:0; bottom:0; left:0; right:0;';
            G.tn.styleL1FTitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleL1ITitle='left:0; right:0; position:absolute; bottom:50%;';
            G.tn.styleL1Desc='left:0; right:0; position:absolute; top:50%;';
            break;
          case 'custom':
            G.tn.styleL1LabelImage='';
            break;
          case 'overImageOnBottom':
          default :
            G.O.thumbnailL1Label.position='overImageOnBottom';
            G.tn.styleL1LabelImage='bottom:0; left:0; right:0;';
            break;
        }
      }
    }

    function GetI18nItem( item, property ) {
      var s='';
      if( G.i18nLang != '' ) {
        if( item[property+'_'+G.i18nLang] !== undefined && item[property+'_'+G.i18nLang].length>0 ) {
          s=item[property+'_'+G.i18nLang];
          return s;
        }
      }
      s=item[property];
      return s;
    }



    // ####################################
    // ##### LIST OF ITEMS IN OPTIONS #####
    // ####################################

    function GetImageTitle( imageSRC ) {
      if( G.O.thumbnailLabel.get('title') == '%filename' ) {
        return (imageSRC.split('/').pop()).replace('_',' ');
      }

      if( G.O.thumbnailLabel.get('title') == '%filenameNoExt' ) {
        var s=imageSRC.split('/').pop();
        return (s.split('.').shift()).replace('_',' ');
      }
      return imageSRC;
    }

    function ProcessItemOption() {

      var foundAlbumID=false;

      if( typeof G.O.dataSorting !== 'undefined' ) {
        if( G.O.dataSorting == 'random' ) {
          G.O.items=AreaShuffle(G.O.items);
        }else if( G.O.dataSorting == 'reversed' ) {
          G.O.items=G.O.items.reverse();
        }
      }

      jQuery.each(G.O.items, function(i,item){

        var title='';
        title=GetI18nItem(item,'title');
        if( title === undefined ) { title=''; }

        var src=G.O.itemsBaseURL;
        if( item['src'+RetrieveMaxWidth().toUpperCase()] !== undefined ) {
          src+=item['src'+RetrieveMaxWidth().toUpperCase()];
        }
        else {
          src+=item.src;
        }

        var thumbsrc='';
        if( item.srct !== undefined && item.srct.length>0 ) {
          thumbsrc=G.O.itemsBaseURL+item.srct;
        }
        else {
          thumbsrc=src;
        }

        var thumbsrcX2='';
        if( item.srct2x !== undefined && item.srct2x.length>0 ) {
          thumbsrcX2=G.O.itemsBaseURL+item.srct2x;
        }
        else {
          if( thumbsrc != '' ) {
            thumbsrcX2=thumbsrc;
          }
          else {
            thumbsrcX2=src;
          }
        }


        if( G.O.thumbnailLabel.get('title') != '' ) {
          title=GetImageTitle(src);
        }

        var description='';     //'&nbsp;';
        description=GetI18nItem(item,'description');
        if( description === undefined ) { description=''; }
        //if( toType(item.description) == 'string' ) {
        //  description=item.description;
        //}

        var destinationURL='';
        if( item.destURL !== undefined && item.destURL.length>0 ) {
          destinationURL=item.destURL;
        }

        //if( item.tags !== undefined && item.tags.length>0 ) {
        //  tags=item.tags;
        //}
        var tags=GetI18nItem(item,'tags');
        if( tags === undefined ) { tags=''; }

        var albumID=0;
        if( item.albumID !== undefined  ) {
          albumID=item.albumID;
          foundAlbumID=true;
        }
        var ID=null;
        if( item.ID !== undefined ) {
          ID=item.ID;
        }
        var kind='image';
        if( item.kind !== undefined && item.kind.length>0 ) {
          kind=item.kind;
        }

        var newItem=NGAddItem(title, thumbsrc, src, description, destinationURL, kind, tags, ID, albumID );

        // thumbnail image size
        var tw=0;
        if( item.imgtWidth !== undefined && item.imgtWidth>0 ) {
          tw=item.imgtWidth;
          //newItem.thumbImgWidth=tw;
        }
        var th=0;
        if( item.imgtHeight !== undefined && item.imgtHeight>0 ) {
          th=item.imgtHeight;
          //newItem.thumbImgHeight=th;
        }

        newItem.thumbs = {
          url: { l1 : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc }, lN : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc } },
          width: { l1 : { xs:tw, sm:tw, me:tw, la:tw, xl:tw }, lN : { xs:tw, sm:tw, me:tw, la:tw, xl:tw } },
          height: { l1 : { xs:th, sm:th, me:th, la:th, xl:th }, lN : { xs:th, sm:th, me:th, la:th, xl:th } }
        };

        // custom data
        if( item.customData !== null ) {
          newItem.customData=cloneJSObject(item.customData);
        }

        if( typeof G.O.fnProcessData == 'function' ) {
          G.O.fnProcessData(newItem, 'api', null);
        }
      });

      if( foundAlbumID ) {
        G.O.displayBreadcrumb=true;
      }

      // get the number of images per album for all the items
      var l=G.I.length,
      nb=0,
      nbImages=0;
      for( var i=0; i<l; i++ ){
        nb=0;
        nbImages=0;
        for( var j=0; j<l; j++ ){
          if( i!=j && G.I[i].GetID() == G.I[j].albumID ) {
            nb++;
            if( G.I[j].kind == 'image' ) {
              G.I[j].imageNumber=nbImages++;
            }
          }
        }
        G.I[i].contentLength=nb;
      }

    }

    function cloneJSObject( obj ) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      var temp = obj.constructor(); // give temp the original obj's constructor
      for (var key in obj) {
          temp[key] = cloneJSObject(obj[key]);
      }
      return temp;
    }


    // ###################################
    // ##### LIST OF HREF ATTRIBUTES #####
    // ###################################

    function ProcessHREF(elements) {
      var foundAlbumID=false;

      if( typeof G.O.dataSorting !== 'undefined' ) {
        if( G.O.dataSorting == 'random' ) {
          elements=AreaShuffle(elements);
        }else if( G.O.dataSorting == 'reversed' ) {
          jQuery.fn.reverse = [].reverse;
          elements=elements.reverse();
        }
      }


      jQuery.each(elements, function(i,item){
        var thumbsrc='';
        if( jQuery(item).attr('data-ngthumb') !== undefined && jQuery(item).attr('data-ngthumb').length>0 ) {
          thumbsrc=G.O.itemsBaseURL+jQuery(item).attr('data-ngthumb');
        }
        if( jQuery(item).attr('data-ngThumb') !== undefined && jQuery(item).attr('data-ngThumb').length>0 ) {
          thumbsrc=G.O.itemsBaseURL+jQuery(item).attr('data-ngThumb');
        }
        var thumbsrcX2='';
        if( jQuery(item).attr('data-ngthumb2x') !== undefined && jQuery(item).attr('data-ngthumb2x').length>0 ) {
          thumbsrcX2=G.O.itemsBaseURL+jQuery(item).attr('data-ngthumb2x');
        }
        if( jQuery(item).attr('data-ngThumb2x') !== undefined && jQuery(item).attr('data-ngThumb2x').length>0 ) {
          thumbsrcX2=G.O.itemsBaseURL+jQuery(item).attr('data-ngThumb2x');
        }

        // responsive image source
        var src='',
        st=RetrieveMaxWidth().toUpperCase();
        if( jQuery(item).attr('data-ngsrc'+st) !== undefined && jQuery(item).attr('data-ngsrc'+st).length>0 ) {
          src=G.O.itemsBaseURL+jQuery(item).attr('data-ngsrc'+st);
        }
        if( jQuery(item).attr('data-ngSrc'+st) !== undefined && jQuery(item).attr('data-ngSrc'+st).length>0 ) {
          src=G.O.itemsBaseURL+jQuery(item).attr('data-ngSrc'+st);
        }
        if( src == '' ) {
          src=G.O.itemsBaseURL+jQuery(item).attr('href');
        }

        //newObj.description=jQuery(item).attr('data-ngdesc');
        var description='';
        if( jQuery(item).attr('data-ngdesc') !== undefined && jQuery(item).attr('data-ngdesc').length>0 ) {
          description=jQuery(item).attr('data-ngdesc');
        }
        if( jQuery(item).attr('data-ngDesc') !== undefined && jQuery(item).attr('data-ngDesc').length>0 ) {
          description=jQuery(item).attr('data-ngDesc');
        }

        var destURL='';
        if( jQuery(item).attr('data-ngdest') !== undefined && jQuery(item).attr('data-ngdest').length>0 ) {
          destURL=jQuery(item).attr('data-ngdest');
        }
        if( jQuery(item).attr('data-ngDest') !== undefined && jQuery(item).attr('data-ngDest').length>0 ) {
          destURL=jQuery(item).attr('data-ngDest');
        }

        var albumID=0;
        if( jQuery(item).attr('data-ngalbumid') !== undefined ) {
          albumID=jQuery(item).attr('data-ngalbumid');
          foundAlbumID=true;
        }
        if( jQuery(item).attr('data-ngAlbumID') !== undefined ) {
          albumID=jQuery(item).attr('data-ngAlbumID');
          foundAlbumID=true;
        }

        var ID=null;
        if( jQuery(item).attr('data-ngid') !== undefined ) {
          ID=jQuery(item).attr('data-ngid');
        }
        if( jQuery(item).attr('data-ngID') !== undefined ) {
          ID=jQuery(item).attr('data-ngID');
        }

        var kind='image';
        if( jQuery(item).attr('data-ngkind') !== undefined && jQuery(item).attr('data-ngkind').length>0 ) {
          kind=jQuery(item).attr('data-ngkind');
        }
        if( jQuery(item).attr('data-ngKind') !== undefined && jQuery(item).attr('data-ngKind').length>0 ) {
          kind=jQuery(item).attr('data-ngKind');
        }

        var title=jQuery(item).text();
        if( !(G.O.thumbnailLabel.get('title') == '' || G.O.thumbnailLabel.get('title') == undefined) ) {
          title=GetImageTitle(src);
        }

        var newItem=NGAddItem(title, thumbsrc, src, description, destURL, kind, '', ID, albumID );

        // thumbnail image size
        var tw=0;
        if( jQuery(item).attr('data-ngthumbImgWidth') !== undefined && jQuery(item).attr('data-ngthumbImgWidth').length>0 ) {
          tw=jQuery(item).attr('data-ngthumbImgWidth');
          //newItem.thumbImgWidth=tw;
        }
        var th=0;
        if( jQuery(item).attr('data-ngthumbImgHeight') !== undefined && jQuery(item).attr('data-ngthumbImgHeight').length>0 ) {
          th=jQuery(item).attr('data-ngthumbImgHeight');
          //newItem.thumbImgHeight=th;
        }

        newItem.thumbs = {
          url: { l1 : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc }, lN : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc } },
          width: { l1 : { xs:tw, sm:tw, me:tw, la:tw, xl:tw }, lN : { xs:tw, sm:tw, me:tw, la:tw, xl:tw } },
          height: { l1 : { xs:th, sm:th, me:th, la:th, xl:th }, lN : { xs:th, sm:th, me:th, la:th, xl:th } }
        };

        // custom data
        if( jQuery(item).data('customdata') !== undefined ) {
          newItem.customData=cloneJSObject(jQuery(item).data('customdata'));
        }


        if( typeof G.O.fnProcessData == 'function' ) {
          G.O.fnProcessData(newItem, 'markup', null);
        }

      });

      jQuery.each(elements, function(i,item){ jQuery(item).remove(); });

      if( foundAlbumID ) {
        G.O.displayBreadcrumb=true;
      }

      // get the number of images per album for all the items
      var l=G.I.length,
      nb=0,
      nbImages=0;
      for( var i=0; i<l; i++ ){
        nb=0;
        nbImages=0;
        for( var j=0; j<l; j++ ){
          if( i!=j && G.I[i].GetID() == G.I[j].albumID ) {
            nb++;
            if( G.I[j].kind == 'image' ) {
              G.I[j].imageNumber=nbImages++;
            }
          }
        }
        G.I[i].contentLength=nb;
      }

    }


    // ##########################
    // ##### CUSTOM STORAGE #####
    // ##########################

    function JsonProcessItems( albumIdx, processLocationHash, imageID, setLocationHash ) {

      manageGalleryToolbar(albumIdx);

      if( G.I[albumIdx].contentIsLoaded ) {    // already loaded?
        DisplayAlbum(albumIdx,setLocationHash);
        return;
      }

      var url = G.O.jsonProvider + '?albumID='+encodeURIComponent(G.I[albumIdx].GetID());
      PreloaderShow();

      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;

      var tId = setTimeout( function() {
        // workaround to handle JSONP (cross-domain) errors
        PreloaderHide();
        nanoAlert('Could not retrieve Custom data...');
      }, 60000 );
      jQuery.getJSON(url, function(data, status, xhr) {
        clearTimeout(tId);
        PreloaderHide();

        JsonParseData(albumIdx, data);

        if( processLocationHash || G.O.openOnStart != '') {
          if( !ProcessLocationHash(false) ) {
            DisplayAlbum(albumIdx,setLocationHash);
          }
        }
        else {
          if( imageID != -1 ) {
            var imageIdx=-1,
            l=G.I.length;
            for(var i=0; i<l; i++ ) {
              if( G.I[i].kind == 'image' && G.I[i].GetID() == imageID ) {
                imageIdx=i;
                break;
              }
            }
            DisplayImage(imageIdx,true);
          }
          else {
            DisplayAlbum(albumIdx,setLocationHash);
          }
        }
      })
      .fail( function(jqxhr, textStatus, error) {
        clearTimeout(tId);
        PreloaderHide();
        var err = textStatus + ', ' + error;
        nanoAlert("Could not retrieve JSON items list (jQuery): " + err);
      });

    }

    function JsonConvertCharset( str ) {
      
      return decodeURIComponent(str);


      // Pb %C3%A9 --> %E9
      // in UTF-8: \u00e9=\xe9 (e9 = hex value)
      switch( G.O.jsonCharset.toUpperCase() ) {
        case 'UTF-8':     // Apache Windows
          return decodeURI(str);      // do not use decodeURIComponent (would convert slash also)
          break;
        case 'Latin':     // Apache Linux
        default :
          return escape(str);
          break;
      }
    }

    function JsonParseData(albumIdx, data) {
      var foundAlbumID=false;
      var nb=0;
      jQuery.each(data, function(i,item){

        var title='';
        title=GetI18nItem(item,'title');
        if( title === undefined ) { title=''; }

        var baseURL=G.O.jsonProvider.substring(0, G.O.jsonProvider.indexOf('nanoPhotosProvider.php'));

        var src=baseURL+JsonConvertCharset(item.src);
        var thumbsrc=baseURL+JsonConvertCharset(item.srct);

        if( G.O.thumbnailLabel.get('title') != '' ) {
          title=GetImageTitle((item.src));
        }

        var description='';     //'&nbsp;';
        description=GetI18nItem(item,'description');
        if( description === undefined ) { description=''; }

        var destinationURL='';

        var albumID=0;
        if( item.albumID !== undefined  ) {
          albumID=(item.albumID);
          foundAlbumID=true;
        }
        var ID=null;
        if( item.ID !== undefined ) {
          ID=(item.ID);
        }

        var kind='image';
        if( item.kind !== undefined && item.kind.length>0 ) {
          kind=item.kind;
        }

        var newItem=NGAddItem(title, thumbsrc, src, description, destinationURL, kind, '', ID, albumID );
        // thumbnail image size
        var tw=item.imgtWidth;
        var th=item.imgtHeight;

        newItem.thumbs = {
          url: { l1 : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc }, lN : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc } },
          width: { l1 : { xs:tw, sm:tw, me:tw, la:tw, xl:tw }, lN : { xs:tw, sm:tw, me:tw, la:tw, xl:tw } },
          height: { l1 : { xs:th, sm:th, me:th, la:th, xl:th }, lN : { xs:th, sm:th, me:th, la:th, xl:th } }
        };

        if( typeof G.O.fnProcessData == 'function' ) {
          G.O.fnProcessData(newItem, 'api', null);
        }

        if( kind == 'image' ) {
          newItem.imageNumber=nb;
          nb++;
          if( nb >= G.maxAlbums ) {
            return false;
          }
        }
      });

      if( foundAlbumID ) {
        G.O.displayBreadcrumb=true;
      }

      G.I[albumIdx].contentIsLoaded=true;
      G.I[albumIdx].contentLength=nb;

    }


    // ##########################
    // ##### FLICKR STORAGE #####
    // ##########################

    function FlickrProcessItems( albumIdx, processLocationHash, imageID, setLocationHash) {

      manageGalleryToolbar(albumIdx);

      if( G.I[albumIdx].contentIsLoaded ) {    // already loaded?
        DisplayAlbum(albumIdx,setLocationHash);
        return;
      }

      var url = '',
      kind='album';
      if( G.I[albumIdx].GetID() == 0 ) {
        // albums
        //url = G.flickr.url() + "?&method=flickr.photosets.getList&api_key=" + G.flickr.ApiKey + "&user_id="+G.O.userID+"&primary_photo_extras=url_"+G.flickr.thumbSize+"&format=json&jsoncallback=?";
        url = G.flickr.url() + "?&method=flickr.photosets.getList&api_key=" + G.flickr.ApiKey + "&user_id="+G.O.userID+"&per_page=500&primary_photo_extras=url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json&jsoncallback=?";
      }
      else {
        // photos
        if( G.I[albumIdx].GetID() == 'none' ) {
          // get photos from full photostream
          url = G.flickr.url() + "?&method=flickr.people.getPublicPhotos&api_key=" + G.flickr.ApiKey + "&user_id="+G.O.userID+"&extras=description,views,url_o,url_sq,url_t,url_q,url_s,url_m,url_z,url_b,url_h,url_k&per_page=500&format=json&jsoncallback=?";
        }
        else {
          // photos from one specific photoset
          //url = G.flickr.url() + "?&method=flickr.photosets.getPhotos&api_key=" + G.flickr.ApiKey + "&photoset_id="+G.I[albumIdx].GetID()+"&extras=description,views,url_o,url_z,url_"+G.flickr.photoSize+",url_"+G.flickr.thumbSize+"&format=json&jsoncallback=?";
          url = G.flickr.url() + "?&method=flickr.photosets.getPhotos&api_key=" + G.flickr.ApiKey + "&photoset_id="+G.I[albumIdx].GetID()+"&extras=description,views,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json&jsoncallback=?";
        }
        kind='image';
      }
      PreloaderShow();

      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;

      var tId = setTimeout( function() {
        // workaround to handle JSONP (cross-domain) errors
        PreloaderHide();
        nanoAlert('Could not retrieve Flickr data...');
      }, 60000 );
      jQuery.getJSON(url, function(data, status, xhr) {
        clearTimeout(tId);
        PreloaderHide();
        if( kind == 'album' ) {
          FlickrParsePhotoSets(albumIdx, data);
        }
        else {
          FlickrParsePhotos(albumIdx, data);
        }
        if( processLocationHash || G.O.openOnStart != '' ) {
          if( !ProcessLocationHash(false) ) {
            DisplayAlbum(albumIdx,setLocationHash);
          }
        }
        else {
          if( imageID != -1 ) {
            var imageIdx=-1,
            l=G.I.length;
            for(var i=0; i<l; i++ ) {
              if( G.I[i].kind == 'image' && G.I[i].GetID() == imageID ) {
                imageIdx=i;
                break;
              }
            }
            DisplayImage(imageIdx,true);
          }
          else {
            DisplayAlbum(albumIdx,setLocationHash);
          }
        }
      })
      .fail( function(jqxhr, textStatus, error) {
        clearTimeout(tId);
        PreloaderHide();
        var err = textStatus + ', ' + error;
        nanoAlert("Could not retrieve Flickr photoset list (jQuery): " + err);
      });

    }


    function FlickrParsePhotoSets( albumIdx, data ) {
      var ok=true;
      if( data.stat !== undefined ) {
        if( data.stat === 'fail' ) {
          nanoAlert("Could not retrieve Flickr photoset list: " + data.message + " (code: "+data.code+").");
          ok=false;
        }
      }

      if( ok ) {
        var nb=0;

        var source = data.photosets.photoset;
        switch( G.O.albumSorting ) {
          case 'random':
            source = AreaShuffle(source);
            break;
          case 'reversed':
            source = source.reverse();
            break;
          case 'titleAsc':
            source.sort(function (a, b) {
              var x = a.title._content.toUpperCase();
              var y =  b.title._content.toUpperCase();
              return( (x < y) ? -1 : ((x > y) ? 1 : 0) );
            });
            break;
          case 'titleDesc':
            source.sort(function (a, b) {
              var x = a.title._content.toUpperCase();
              var y =  b.title._content.toUpperCase();
              return( (x > y) ? -1 : ((x < y) ? 1 : 0) );
            });
        }

        jQuery.each(source, function(i,item){
          //Get the title
          itemTitle = item.title._content;

          if( CheckAlbumName(itemTitle, item.id) ) {
            itemID=item.id;
            //Get the description
            itemDescription='';
            if (item.description._content != undefined) {
              itemDescription=item.description._content;
            }

            var sizes = {};
            for (var p in item.primary_photo_extras) {
              sizes[p]=item.primary_photo_extras[p];
            }
            tags='';
            if( item.primary_photo_extras !== undefined ) {
              if( item.primary_photo_extras.tags !== undefined ) {
                tags=item.primary_photo_extras.tags;
              }
            }

            var newItem=NGAddItem(itemTitle, '', '', itemDescription, '', 'album', tags, itemID, G.I[albumIdx].GetID() );
            //newItem.thumbImgWidth=item.primary_photo_extras['width_'+G.flickr.thumbSize];
            //newItem.thumbImgHeight=item.primary_photo_extras['height_'+G.flickr.thumbSize];
            newItem.contentLength=item.photos;
            newItem.thumbSizes=sizes;

            var tn = {
              url: { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
              width: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
              height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
            };
            tn=FlickrRetrieveImages(tn, item.primary_photo_extras, 'l1' );
            tn=FlickrRetrieveImages(tn, item.primary_photo_extras, 'lN' );
            newItem.thumbs=tn;

            nb++;
            if( nb >= G.maxAlbums ) {
              return false;
            }
          }
        });

        G.I[albumIdx].contentIsLoaded=true;
        G.I[albumIdx].contentLength=nb;
      }
    }

    function FlickrRetrieveImages(tn, item, level ) {
      var sizes=['xs','sm','me','la','xl'];
      for(var i=0; i<sizes.length; i++ ) {
        if( G.tn.settings.width[level][sizes[i]] == 'auto' ) {
          var sdir='height_';
          var tsize=Math.ceil(G.tn.settings.height[level][sizes[i]]*G.tn.scale);
          var one=FlickrRetrieveOneImage(sdir, tsize, item );
          tn.url[level][sizes[i]]=one.url;
          tn.width[level][sizes[i]]=one.width;
          tn.height[level][sizes[i]]=one.height;
        }
        else
          if( G.tn.settings.height[level][sizes[i]] == 'auto' ) {
            var sdir='width_';
            var tsize=Math.ceil(G.tn.settings.width[level][sizes[i]]*G.tn.scale);
            var one=FlickrRetrieveOneImage(sdir, tsize, item );
            tn.url[level][sizes[i]]=one.url;
            tn.width[level][sizes[i]]=one.width;
            tn.height[level][sizes[i]]=one.height;
          }
          else {
            var sdir='height_';
            var tsize=Math.ceil(G.tn.settings.height[level][sizes[i]]*G.tn.scale);
            if( G.tn.settings.width[level][sizes[i]] > G.tn.settings.height[level][sizes[i]] ) {
              sdir='width_';
              tsize=Math.ceil(G.tn.settings.width[level][sizes[i]]*G.tn.scale);
            }
            var one=FlickrRetrieveOneImage(sdir, tsize, item );
            tn.url[level][sizes[i]]=one.url;
            tn.width[level][sizes[i]]=one.width;
            tn.height[level][sizes[i]]=one.height;
          }
      }
      return tn;
    }

    function FlickrRetrieveOneImage(sdir, tsize, item ) {
      var one={ url:'', width:0, height:0 };
      var tnIndex=0;
      for(var j=0; j<G.flickr.thumbAvailableSizes.length; j++ ) {
        var size=item[sdir+G.flickr.photoAvailableSizesStr[j]];
        if(  size != undefined ) {
          tnIndex=j;
          if( size >= tsize ) {
            break;
          }
        }
      }
      var fSize=G.flickr.photoAvailableSizesStr[tnIndex];
      one.url= item['url_'+fSize];
      one.width= parseInt(item['width_'+fSize]);
      one.height=parseInt(item['height_'+fSize]);
      return one;
    }

    function FlickrParsePhotos( albumIdx, data ) {
      var source = '';
      if( G.I[albumIdx].GetID() == 'none' ) {
        source = data.photos.photo;
      }
      else {
        source = data.photoset.photo;
      }

      switch( G.O.photoSorting ) {
        case 'random':
          source = AreaShuffle(source);
          break;
        case 'reversed':
          source = source.reverse();
          break;
        case 'titleAsc':
          source.sort(function (a, b) {
            // var x = a.title.toUpperCase();
            // var y =  b.title.toUpperCase();
            var x='', y='';
            if( G.O.thumbnailLabel.get('title') != '' ) {
              x=GetImageTitle(a.url_sq);
              y=GetImageTitle(b.url_sq);
            }
            else {
              x = a.title.toUpperCase();
              y =  b.title.toUpperCase();
            }
            return( (x < y) ? -1 : ((x > y) ? 1 : 0) );
          });
          break;
        case 'titleDesc':
          source.sort(function (a, b) {
            // var x = a.title.toUpperCase();
            // var y =  b.title.toUpperCase();
            var x='', y='';
            if( G.O.thumbnailLabel.get('title') != '' ) {
              x=GetImageTitle(a.url_sq);
              y=GetImageTitle(b.url_sq);
            }
            else {
              x = a.title.toUpperCase();
              y =  b.title.toUpperCase();
            }
            return( (x > y) ? -1 : ((x < y) ? 1 : 0) );
          });
          break;
      }

      var albumID=G.I[albumIdx].GetID(),
      nb=0;
      jQuery.each(source, function(i,item){
        //Get the title
        var itemTitle = item.title,
        itemID=item.id,
        itemDescription=item.description._content;    // Get the description

        var imgUrl=item.url_sq;  //fallback size
        for(var i=G.flickr.photoSize; i>=0; i-- ) {
          if( item['url_'+G.flickr.photoAvailableSizesStr[i]] != undefined ) {
            imgUrl=item['url_'+G.flickr.photoAvailableSizesStr[i]];
            break;
          }
        }

        var sizes = {};
        for (var p in item) {
          if( p.indexOf('height_') == 0 || p.indexOf('width_') == 0 || p.indexOf('url_') == 0 ) {
            sizes[p]=item[p];
          }
        }

        if( G.O.thumbnailLabel.get('title') != '' ) {
          itemTitle=GetImageTitle(imgUrl);
        }

        var newItem=NGAddItem(itemTitle, '', imgUrl, itemDescription, '', 'image', '', itemID, albumID );
        newItem.imageNumber=nb;
        if( item.url_o !== undefined ) {
          newItem.width=item.width_o;
          newItem.height=item.height_o;
        }
        else {
          newItem.width=item.width_z;
          newItem.height=item.height_z;
        }
        //newItem.thumbImgWidth=item['width_'+G.flickr.photoAvailableSizesStr[tnIndex]];
        //newItem.thumbImgHeight=item['height_'+G.flickr.photoAvailableSizesStr[tnIndex]];
  //      newItem.thumbSizes=sizes;


          var tn = {
            url: { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
            width: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
            height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
          };
          tn=FlickrRetrieveImages(tn, item, 'l1' );
          tn=FlickrRetrieveImages(tn, item, 'lN' );
          newItem.thumbs=tn;

        nb++;
        if( nb >= G.maxPhotos ) {
          return false;
        }

      });
      G.I[albumIdx].contentIsLoaded=true;
      G.I[albumIdx].contentLength=nb;

    }




    // ##########################
    // ##### PICASA STORAGE #####
    // ##########################

    function AddOneThumbSize(thumbSizes, v1, v2, c1, c2 ) {
      var v=Math.ceil(v2*G.tn.scale)+c2;
      if( v1 == 'auto' ) {
        v=Math.ceil(v2*G.tn.scale)+c2;
      }
      else if( v2 == 'auto' ) {
          v=Math.ceil(v1*G.tn.scale)+c1;
        }
        else if( v1 > v2 ) {
          v=Math.ceil(v1*G.tn.scale)+c1;
        }

      if( thumbSizes.length > 0 ) {
        thumbSizes+=',';
      }
      thumbSizes+=v;
      return thumbSizes;
    }

    function PicasaProcessItems( albumIdx, processLocationHash, imageID, setLocationHash ) {
      manageGalleryToolbar(albumIdx);

      if( G.I[albumIdx].contentIsLoaded ) {    // already loaded?
        //renderGallery(albumIdx,0);
        DisplayAlbum(albumIdx,setLocationHash);
        return;
      }

      var url='',
      kind='album';

      var thumbSizes='';
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.l1.xs, G.tn.settings.height.l1.xs, G.tn.settings.width.l1.xsc, G.tn.settings.height.l1.xsc );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.l1.sm, G.tn.settings.height.l1.sm, G.tn.settings.width.l1.smc, G.tn.settings.height.l1.smc );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.l1.me, G.tn.settings.height.l1.me, G.tn.settings.width.l1.mec, G.tn.settings.height.l1.mec );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.l1.la, G.tn.settings.height.l1.la, G.tn.settings.width.l1.lac, G.tn.settings.height.l1.lac );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.l1.xl, G.tn.settings.height.l1.xl, G.tn.settings.width.l1.xlc, G.tn.settings.height.l1.xlc );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.lN.xs, G.tn.settings.height.lN.xs, G.tn.settings.width.lN.xsc, G.tn.settings.height.lN.xsc );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.lN.sm, G.tn.settings.height.lN.sm, G.tn.settings.width.lN.smc, G.tn.settings.height.lN.smc );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.lN.me, G.tn.settings.height.lN.me, G.tn.settings.width.lN.mec, G.tn.settings.height.lN.mec );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.lN.la, G.tn.settings.height.lN.la, G.tn.settings.width.lN.lac, G.tn.settings.height.lN.lac );
      thumbSizes=AddOneThumbSize(thumbSizes, G.tn.settings.width.lN.xl, G.tn.settings.height.lN.xl, G.tn.settings.width.lN.xlc, G.tn.settings.height.lN.xlc );


      if( G.I[albumIdx].GetID() == 0 ) {
        // albums
        //url = G.picasa.url() + 'user/'+G.O.userID+'?alt=json&kind=album&imgmax=d&thumbsize='+G.picasa.thumbSize;
        // url = G.picasa.url() + 'user/'+G.O.userID+'?alt=json&kind=album&imgmax=d&thumbsize=320';
        // url = G.picasa.url() + 'user/'+G.O.userID+'?alt=json&kind=album&imgmax=d&thumbsize='+thumbSizes;
        // url = G.picasa.url() + 'user/'+G.O.userID+'?alt=json&kind=album&access=public&thumbsize='+thumbSizes+'&rnd=' + (new Date().getTime());
        url = G.picasa.url() + 'user/'+G.O.userID+'?alt=json&kind=album&thumbsize='+thumbSizes+'&rnd=' + (new Date().getTime());
      }
      else {
        // photos
        var opt='';
        if( typeof G.I[albumIdx].customData.authkey !== 'undefined' ) { opt=G.I[albumIdx].customData.authkey; }
        // url = G.picasa.url() + 'user/'+G.O.userID+'/albumid/'+G.I[albumIdx].GetID()+'?alt=json&kind=photo'+opt+'&thumbsize='+G.picasa.thumbSize+'&imgmax=d';
        url = G.picasa.url() + 'user/'+G.O.userID+'/albumid/'+G.I[albumIdx].GetID()+'?alt=json&kind=photo'+opt+'&thumbsize='+thumbSizes+'&imgmax=d';
        // url = G.picasa.url() + 'user/'+G.O.userID+'/albumid/'+G.I[albumIdx].GetID()+'?alt=json&kind=photo'+opt+'&thumbsize=320&imgmax=d';
        kind='image';
      }
      //A    url = url + "&callback=?";
      PreloaderShow();

      // get the content and display it
      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;
      var tId = setTimeout( function() {
        // workaround to handle JSONP (cross-domain) errors
        PreloaderHide();
        nanoAlert('Could not retrieve Picasa/Google+ data...');
      }, 60000 );
//      jQuery.getJSON(url, 'callback=?', function(data) {

      var gi_getJSONfinished = function(data){
        clearTimeout(tId);
        PreloaderHide();
        PicasaParseData(albumIdx,data,kind);
        //renderGallery(albumIdx,0);
        if( processLocationHash || G.O.openOnStart != '' ) {
          if( !ProcessLocationHash(false) ) {
            DisplayAlbum(albumIdx,setLocationHash);
          }
        }
        else {
          if( imageID != -1 ) {
              var imageIdx=-1,
              l=G.I.length;
              for(var i=0; i<l; i++ ) {
                if( G.I[i].kind == 'image' && G.I[i].GetID() == imageID ) {
                  imageIdx=i;
                  break;
                }
              }
              DisplayImage(imageIdx,true);
            }
            else {
              DisplayAlbum(albumIdx,setLocationHash);
            }
          }
      };

      var gi_data_loaded = null;

      var gi_loadJSON = function(url,start_index){
      jQuery.getJSON(url+"&start-index="+start_index, 'callback=?', function(data) {

				if (gi_data_loaded===null){
					gi_data_loaded = data;
				}else{
					gi_data_loaded.feed.entry=gi_data_loaded.feed.entry.concat(data.feed.entry);
				}

				if (data.feed.openSearch$startIndex.$t+data.feed.openSearch$itemsPerPage.$t>=data.feed.openSearch$totalResults.$t){
					//ok finito
					gi_getJSONfinished(gi_data_loaded);
				}else{
					//ce ne sono ancora da caricare
					//altra chiamata per il rimanente
					gi_loadJSON(url,data.feed.openSearch$startIndex.$t+data.feed.openSearch$itemsPerPage.$t);
				}

			  })
			  .fail( function(jqxhr, textStatus, error) {
				clearTimeout(tId);
				PreloaderHide();


				//alertObject(jqxhr);
				var k=''
				for(var key in jqxhr) {
				  k+= key + '=' + jqxhr[key] +'<br>';

				}
				var err = textStatus + ', ' + error + ' ' + k + '<br><br>URL:'+url;
				nanoAlert("Could not retrieve Picasa/Google+ data. Error: " + err);

			  });
      };

      gi_loadJSON(url,1);


//      })
      // .fail( function(jqxhr, textStatus, error) {
        // clearTimeout(tId);
        // PreloaderHide();

        //alertObject(jqxhr);
        // var k=''
        // for(var key in jqxhr) {
          // k+= key + '=' + jqxhr[key] +'<br>';
        // }
        // var err = textStatus + ', ' + error + ' ' + k + '<br><br>URL:'+url;
        // nanoAlert("Could not retrieve Picasa/Google+ data. Error: " + err);
      // });

    }

    function PicasaParseData( albumIdx, data, kind ) {
      var nb=0,
      albumID=G.I[albumIdx].GetID();

      var source = data.feed.entry;
      var sortOrder=G.O.albumSorting;
      if (kind =='image'){
        sortOrder=G.O.photoSorting;
      }

      switch( sortOrder ) {
        case 'random':
          source = AreaShuffle(source);
          break;
        case 'reversed':
          source = source.reverse();
          break;
        case 'titleAsc':
          source.sort(function (a, b) {
            // var x =  kind == 'image' ? a.media$group.media$description.$t.toUpperCase() : a.media$group.media$title.$t.toUpperCase();
            // var y =  kind == 'image' ? b.media$group.media$description.$t.toUpperCase() : b.media$group.media$title.$t.toUpperCase();
            var x='', y='';
            if( kind == 'image' ) {
              if( G.O.thumbnailLabel.get('title') != '' ) {
                x=GetImageTitle(unescape(unescape(unescape(unescape(a.media$group.media$content[0].url)))));
                y=GetImageTitle(unescape(unescape(unescape(unescape(b.media$group.media$content[0].url)))));
              }
              else {
                x = a.media$group.media$description.$t.toUpperCase();
                y = b.media$group.media$description.$t.toUpperCase();
              }
            }
            else {
              x = a.media$group.media$title.$t.toUpperCase();
              y = b.media$group.media$title.$t.toUpperCase();
            }
            return( (x < y) ? -1 : ((x > y) ? 1 : 0) );
          });
          break;
        case 'titleDesc':
          source.sort(function (a, b) {
            // var x =  kind == 'image' ? a.media$group.media$description.$t.toUpperCase() : a.media$group.media$title.$t.toUpperCase();
            // var y =  kind == 'image' ? b.media$group.media$description.$t.toUpperCase() : b.media$group.media$title.$t.toUpperCase();
            var x='', y='';
            if( kind == 'image' ) {
              if( G.O.thumbnailLabel.get('title') != '' ) {
                x=GetImageTitle(unescape(unescape(unescape(unescape(a.media$group.media$content[0].url)))));
                y=GetImageTitle(unescape(unescape(unescape(unescape(b.media$group.media$content[0].url)))));
              }
              else {
                x = a.media$group.media$description.$t.toUpperCase();
                y = b.media$group.media$description.$t.toUpperCase();
              }
            }
            else {
              x = a.media$group.media$title.$t.toUpperCase();
              y = b.media$group.media$title.$t.toUpperCase();
            }
            return( (x > y) ? -1 : ((x < y) ? 1 : 0) );
          });
          break;
      }

      jQuery.each(source, function(i,data){

        //Get the title
        var itemTitle = data.media$group.media$title.$t;
        //Get the URL of the thumbnail
        var itemThumbURL = data.media$group.media$thumbnail[0].url;
        //Get the ID
        var itemID = data.gphoto$id.$t;
        //Get the description
        var filename='';
        var itemDescription = data.media$group.media$description.$t;
        if( kind == 'image') {
          filename=itemTitle;
          itemTitle=itemDescription;
          itemDescription='';
        }

        var imgUrl=data.media$group.media$content[0].url;

        if( kind == 'image') {
          if( G.O.thumbnailLabel.get('title') != '' ) {
            itemTitle=GetImageTitle(unescape(unescape(unescape(unescape(imgUrl)))));
          }
        }

        var ok=true;
        if( kind == 'album' ) {
          if( !CheckAlbumName(itemTitle, itemID) ) { ok=false; }
        }

        var tags='';

        if( ok ) {

          var picasaThumbBaseURL='';
          // var picasaThumbBaseURL=itemThumbURL.substring(0, itemThumbURL.lastIndexOf('/'));
          // picasaThumbBaseURL=picasaThumbBaseURL.substring(0, picasaThumbBaseURL.lastIndexOf('/')) + '/';

          var src='';
          if( kind == 'album' ) {
            src=itemID;
          }
          else {
            src=imgUrl;
            var s=imgUrl.substring(0, imgUrl.lastIndexOf('/'));
            s=s.substring(0, s.lastIndexOf('/')) + '/';

            if( window.screen.width >  window.screen.height ) {
              src=s+'w'+window.screen.width+'/'+filename;
            }
            else {
              src=s+'h'+window.screen.height+'/'+filename;
              }
          }
          var newItem= NGAddItem(itemTitle, itemThumbURL, src, itemDescription, '', kind, tags, itemID, albumID );
          newItem.picasaThumbBaseURL=picasaThumbBaseURL;
          newItem.imageNumber=nb;
          if( kind == 'album' ) {
            newItem.author=data.author[0].name.$t;
            newItem.contentLength=data.gphoto$numphotos.$t;
          }


          // OLD METHOD
          /*
          if( kind == 'image' ) {
          newItem.width=data.gphoto$width.$t;
            newItem.height=data.gphoto$height.$t;
            newItem.thumbImgWidth=data.media$group.media$thumbnail[0].width;
            newItem.thumbImgHeight=data.media$group.media$thumbnail[0].height;
          }
          else {
            if( G.tn.settings.getH() == 'auto' ) {
              newItem.thumbImgWidth=G.picasa.thumbSize;
            }
            else
              if( G.tn.settings.getW() == 'auto' ) {
                newItem.thumbImgHeight=G.picasa.thumbSize;
              }
              else {
                newItem.thumbImgWidth=G.picasa.thumbSize;
                newItem.thumbImgHeight=G.picasa.thumbSize;
              }
          }
          */

          // NEW METHOD
          var tn = {
            url: { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
            width: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
            height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
          };
          tn=PicasaThumbSetSizes('l1', 0, tn, data, kind );
          tn=PicasaThumbSetSizes('lN', 5, tn, data, kind );
          /* for test purposes
          tn.width.l1.xs=0;
          tn.width.l1.sm=0;
          tn.width.l1.me=0;
          tn.width.l1.la=0;
          tn.width.l1.xl=0;
          tn.width.lN.xs=0;
          tn.width.lN.sm=0;
          tn.width.lN.me=0;
          tn.width.lN.la=0;
          tn.width.lN.xl=0;
          tn.height.l1.xs=0;
          tn.height.l1.sm=0;
          tn.height.l1.me=0;
          tn.height.l1.la=0;
          tn.height.l1.xl=0;
          tn.height.lN.xs=0;
          tn.height.lN.sm=0;
          tn.height.lN.me=0;
          tn.height.lN.la=0;
          tn.height.lN.xl=0;
          */
          newItem.thumbs=tn;

          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, 'picasa', data);
          }

          nb++;
          if( nb >= (kind == 'album' ? G.maxAlbums : G.maxPhotos) ) {
            return false;
          }

        }

      });

      G.I[albumIdx].contentIsLoaded=true;
      G.I[albumIdx].contentLength=nb;

    }

    function PicasaThumbSetSizes(level, startI, tn, data, kind ) {
      var sizes=['xs','sm','me','la','xl'];
      for(var i=0; i<sizes.length; i++ ) {
        tn.url[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].url;
        if( kind == 'image' ) {
          tn.width[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].width;
          tn.height[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].height;

          var gw=data.media$group.media$thumbnail[startI+i].width;
          var gh=data.media$group.media$thumbnail[startI+i].height;
          if( G.tn.settings.width[level][sizes[i]] == 'auto' ) {
            if( gh < G.tn.settings.height[level][sizes[i]] ) {
              // calculate new h/w and change URL
              var ratio=gw/gh;
              tn.width[level][sizes[i]]=gw*ratio;
              tn.height[level][sizes[i]]=gh*ratio;
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'h'+G.tn.settings.height[level][sizes[i]]+'/';
            }
          }
          if( G.tn.settings.height[level][sizes[i]] == 'auto' ) {
            if( gw < G.tn.settings.width[level][sizes[i]] ) {
              // calculate new h/w and change URL
              var ratio=gh/gw;
              tn.height[level][sizes[i]]=gh*ratio;
              tn.width[level][sizes[i]]=gw*ratio;
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'w'+G.tn.settings.width[level][sizes[i]]+'/';
            }
          }
        }
        else {
          if( G.tn.settings.width[level][sizes[i]] != 'auto' ) {
            tn.width[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].width;
          }
          else {
            var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
            url=url.substring(0, url.lastIndexOf('/')) + '/';
            tn.url[level][sizes[i]]=url+'h'+G.tn.settings.height[level][sizes[i]]+'/';
          }
          if( G.tn.settings.height[level][sizes[i]] != 'auto' ) {
            tn.height[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].height;
          }
          else {
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'w'+G.tn.settings.width[level][sizes[i]]+'/';
          }
        }
        // if( kind == 'image' || G.tn.settings.width.l1[sizes[i]] != 'auto' ) { tn.width.l1[sizes[i]]=data.media$group.media$thumbnail[i].width; }
        // if( kind == 'image' || G.tn.settings.height.l1[sizes[i]] != 'auto' ) { tn.height.l1[sizes[i]]=data.media$group.media$thumbnail[i].height; }
      }
      return tn;
    }




    // ################################
    // ##### NGITEMS MANIPULATION #####
    // ################################

    function NGAddItem(title, thumbSrc, imageSrc, description, destinationURL, kind, tags, ID, albumID ) {
      var item=GetNGItem(ID);
      var isNew=false;
      if( item === null ){
        item=new NGItems(title,ID);
        isNew=true;
      }else{
          item.title = title;
      }
      item.src=imageSrc;
      item.description=description;
      item.destinationURL=destinationURL;
      item.kind=kind;
      item.albumID=albumID;
      if( tags.length == 0 ) {
        item.tags=null;
      }
      else {
        item.tags=tags.split(' ');
      }

      if( isNew ) {
        item.title=title;
        G.I.push(item);
      }
      return item;
    }

    function GetNGItem( ID ) {
      var l=G.I.length;
      for( var i=0; i<l; i++ ) {
        if( G.I[i].GetID() == ID ) {
          return G.I[i];
        }
      }
      return null;
    }

    // check album name - blackList/whiteList
    function CheckAlbumName( title, ID) {
      var s=title.toUpperCase();

      if( G.albumList !== null ) {
        for( var j=0; j<G.albumList.length; j++) {
          if( s == G.albumList[j].toUpperCase() || ID == G.albumList[j] ) {
            return true;
          }
        }
      }
      else {
        var found=false;
        if( G.whiteList !== null ) {
          //whiteList : authorize only album cointaining one of the specified keyword in the title
          for( var j=0; j<G.whiteList.length; j++) {
            if( s.indexOf(G.whiteList[j]) !== -1 ) {
              found=true;
            }
          }
          if( !found ) { return false; }
        }


        if( G.blackList !== null ) {
          //blackList : ignore album cointaining one of the specified keyword in the title
          for( var j=0; j<G.blackList.length; j++) {
            if( s.indexOf(G.blackList[j]) !== -1 ) {
              return false;
            }
          }
        }

        return true;
      }
    }

    // ###########################
    // ##### GALLERY TOOLBAR #####
    // ###########################

    function DisplayAlbum( albumIdx, setLocationHash ) {
      if( G.O.lazyBuild == 'display' ) {
        if( inViewportVert(G.$E.conTnParent,G.O.lazyBuildTreshold) ){
          DisplayAlbumFinalize( albumIdx, setLocationHash );
        }
        else {
          G.delayedAlbumIdx=albumIdx;
          G.delayedSetLocationHash=setLocationHash;
        }
      }
      else{
        DisplayAlbumFinalize( albumIdx, setLocationHash );
      }
    }


    function DisplayAlbumFinalize( albumIdx, setLocationHash ) {
      G.O.lazyBuild='none';
      G.delayedAlbumIdx=-1;
      G.albumIdxToOpenOnViewerClose=-1;

      if( G.O.thumbnailAlbumDisplayImage && albumIdx != 0 ) {
        // find first image of the album
        var l=G.I.length;
        for( var i=0; i<l; i++ ) {
          if( G.I[i].albumID == G.I[albumIdx].GetID() ) {
            DisplayImage( i );
            break;
          }
        }
        return;
      }

      if( G.containerViewerDisplayed ) {
        CloseInternalViewer(false);
      }

      if( albumIdx == G.lastOpenAlbumID ) {
        return;
      }

      if( G.O.locationHash ) {
        if( setLocationHash ) {
          var s='nanogallery/'+G.baseEltID+'/'+G.I[albumIdx].GetID();
          G.lastLocationHash='#'+s;
          try {
            top.location.hash=s;
          }
          catch(e) {
            G.O.locationHash=false;
          }
        }
      }
      G.lastOpenAlbumID=G.I[albumIdx].GetID();
      manageGalleryToolbar(albumIdx);

      var p=0;
      if( G.I[albumIdx].paginationLastPage > 0 && G.I[albumIdx].paginationLastWidth == G.$E.conTnParent.width()) {
        p=G.I[albumIdx].paginationLastPage;
      }
      renderGallery(albumIdx,p);

    }

    // Display next album
    function DisplayNextAlbum() {
      var newAlbumIdx=GetNextAlbumIdx(G.curAlbumIdx);
      var setLocationHash = newAlbumIdx > 0;

      // DisplayAlbum(newAlbumIdx, setLocationHash);
      OpenAlbum(newAlbumIdx, false, -1, setLocationHash);
    };

    // Display previous album
    function DisplayPreviousAlbum() {
      var newAlbumIdx=GetPreviousAlbumIdx(G.curAlbumIdx);
      var setLocationHash = newAlbumIdx > 0;

      // DisplayAlbum(newAlbumIdx, setLocationHash);
      OpenAlbum(newAlbumIdx, false, -1, setLocationHash);
    };

    function GetNextAlbumIdx( curAlbumIdx ) {
      var l=G.I.length;
      var newAlbumIdx=-1;

      for(var i=curAlbumIdx+1; i<l; i++ ){
        if( G.I[i].albumID == G.I[curAlbumIdx].albumID && G.I[i].kind == 'album' ) {
          newAlbumIdx=i;
          break;
        }
      }
      if( newAlbumIdx == -1 ) {
        for(var i=0; i<=curAlbumIdx; i++ ){
          if( G.I[i].albumID == G.I[curAlbumIdx].albumID && G.I[i].kind == 'album' ) {
            newAlbumIdx=i;
            break;
          }
        }
      }

      return newAlbumIdx;
    }

    function GetPreviousAlbumIdx( curAlbumIdx ) {
      var l=G.I.length;
      var newAlbumIdx=-1;

      for(var i=curAlbumIdx-1; i>=0; i-- ){
        if( G.I[i].albumID == G.I[curAlbumIdx].albumID && G.I[i].kind == 'album' ) {
          newAlbumIdx=i;
          break;
        }
      }
      if( newAlbumIdx == -1 ) {
        for(var i=G.I.length-1; i>=curAlbumIdx; i-- ){
          if( G.I[i].albumID == G.I[curAlbumIdx].albumID && G.I[i].kind == 'album' ) {
            newAlbumIdx=i;
            break;
          }
        }
      }

      return newAlbumIdx;
    }

    // add album to breadcrumb
    function breadcrumbAdd( albumIdx ) {

      var cl="folder";
      if(albumIdx == 0 ) {
        cl="folderHome";
      }
      var $newDiv =jQuery('<div class="'+cl+' oneFolder">'+G.I[albumIdx].title+'</div>').appendTo(G.$E.conBC);
      jQuery($newDiv).data('albumIdx',albumIdx);
      $newDiv.click(function() {
        var cAlbumIdx=jQuery(this).data('albumIdx');
        jQuery(this).nextAll().remove();
        OpenAlbum(cAlbumIdx, false, -1, true);
        return;
      });
    }

    // add separator to breadcrumb
    function breadcrumbAddSeparator( lastAlbumID ) {
      var $newSep=jQuery('<div class="separator'+(G.O.RTL ? 'RTL' : '')+'"></div>').appendTo(G.$E.conBC);
      jQuery($newSep).data('albumIdx',lastAlbumID);
      $newSep.click(function() {
        var sepAlbumIdx=jQuery(this).data('albumIdx');
        jQuery(this).nextAll().remove();
        jQuery(this).remove();
        OpenAlbum(sepAlbumIdx, false, -1, true);
        return;
      });
    }


    function manageGalleryToolbar( albumIdx ) {
      var displayToolbar=false;

      // Breadcrumb
      if( G.O.displayBreadcrumb == true && !G.O.thumbnailAlbumDisplayImage ) {
        if( G.$E.conBC.children().length == 0 ) {
          G.$E.conNavBCon.css({opacity:0, 'max-height':'0px'});
        }

        displayToolbar=true;

        // G.$E.conBC.children().not(':first').remove();
        G.$E.conBC.children().remove();
        breadcrumbAdd(0);
        if( albumIdx != 0 ) {
          var l=G.I.length,
          parentID=0,
          lstItems=[];

          lstItems.push(albumIdx);
          var curIdx=albumIdx;

          while( G.I[curIdx].albumID != 0 && G.I[curIdx].albumID != -1) {
            for(i=1; i < l; i++ ) {
              if( G.I[i].GetID() == G.I[curIdx].albumID ) {
                curIdx=i;
                lstItems.push(curIdx);
                break;
              }
            }
          }

          breadcrumbAddSeparator(0);
          for( i=lstItems.length-1; i>=0 ; i-- ) {
            breadcrumbAdd(lstItems[i]);
            if( i > 0 ) {
              breadcrumbAddSeparator(lstItems[i-1]);
            }
          }
        }

        var bcItems=G.$E.conBC.children(),
        l1=bcItems.length;
        if( l1 == 0 ) {
          G.curNavLevel='l1';
          if( G.O.breadcrumbAutoHideTopLevel ) {
            G.$E.conNavBCon.css({opacity:0, 'max-height':'0px'});
            displayToolbar=false;
          }
          //breadcrumbAdd(0);
        }
        else {
          if( l1 == 1 ) {
            G.curNavLevel='l1';
          }
          else {
            G.curNavLevel='lN';
          }
          if( l1 == 1 && G.O.breadcrumbAutoHideTopLevel ) {
            //G.$E.conNavBCon.animate({'opacity':'0','max-height':'0px'});
            var tweenable = new NGTweenable();
            tweenable.tween({
              from: {'opacity':G.$E.conNavBCon.css('opacity'),'max-height':G.$E.conNavBCon.css('max-height')},
              to: {'opacity':'0','max-height':'0px'},
              attachment: { $e:G.$E.conNavBCon },
              duration: 200,
              step: function (state, att) {
                att.$e.css(state);
              },
              finish: function (state, att) {
                att.$e.css({'opacity':'0','max-height':'0px'});
              }
            });
          }
          else {
            //G.$E.conNavBCon.animate({'opacity':'1','max-height':'50px'});
            if( G.O.breadcrumbAutoHideTopLevel ) {
              var tweenable = new NGTweenable();
              tweenable.tween({
                from: {'opacity':G.$E.conNavBCon.css('opacity'),'max-height':G.$E.conNavBCon.css('max-height')},
                to: {'opacity':'1','max-height':'50px'},
                attachment: { $e:G.$E.conNavBCon },
                duration: 200,
                step: function (state, att) {
                  att.$e.css(state);
                },
                finish: function (state, att) {
                  att.$e.css({'opacity':'1','max-height':'50px'});
                }
              });
            }
            else {
              G.$E.conNavBCon.css({opacity:1, 'max-height':'50px'});
            }
            //G.$E.conBC.children().not(':first').remove();
          }
        }
        G.pgMaxNbThumbnailsPerRow=NbThumbnailsPerRow();
      }

      // Tag-bar
      if( G.O.useTags ) {
        displayToolbar=true;
        if( G.containerTags == null ) {
          G.containerTags =jQuery('<div class="nanoGalleryTags"></div>').appendTo(G.$E.conNavB);
        }
      }

      if( G.O.galleryFullpageButton ) { displayToolbar=true; }

      if( !G.containerNavigationbarContDisplayed && displayToolbar ) {
        G.containerNavigationbarContDisplayed=true;
        G.$E.conNavBCon.show();
      }

    }

    function PreloaderShow() {
      //if( G.O.displayBreadcrumb == true ) { G.$E.conBC.find('.oneFolder').last().addClass('loading'); }
      // G.$E.conLoadingB.css({visibility:'visible'});
      G.$E.conLoadingB.addClass('nanoGalleryLBar').removeClass('nanoGalleryLBarOff');
    }

    function PreloaderHide() {
      //if( G.O.displayBreadcrumb == true ) { G.$E.conBC.find('.oneFolder').last().removeClass('loading'); }
      // G.$E.conLoadingB.css({visibility:'hidden'});
      G.$E.conLoadingB.removeClass('nanoGalleryLBar').addClass('nanoGalleryLBarOff');
    }


    // ##### Open one album
    function OpenAlbum ( albumIdx, processLocationHash, imageID, setLocationHash ) {

      // unselect everything
      if( G.O.itemsSelectable && G.O.keepSelection === false ) {
        G.selectedItems=[];
        var l=G.I.length;
        for( var i=0; i < l ; i++ ) {
          G.I[i].selected=false;
        }
      }

      switch(G.O.kind) {
        case '':
          //renderGallery(albumIdx,0);
          DisplayAlbum(albumIdx,setLocationHash);
          break;
        case 'flickr':
          FlickrProcessItems(albumIdx, processLocationHash, imageID, setLocationHash);
          break;
        case 'json':
          JsonProcessItems(albumIdx, processLocationHash, imageID, setLocationHash);
          break;
        case 'picasa':
        default:
          PicasaProcessItems(albumIdx, processLocationHash, imageID, setLocationHash);
          break;
      }
    }


    // ##### REPOSITION THUMBNAILS ON SCREEN RESIZE EVENT
    function ResizeGallery() {
      if( G.tn.settings.getH() == 'auto' ) {
        ResizeGalleryHeightAuto();
      }
      else
        if ( G.tn.settings.getW() == 'auto' ) {
          ResizeGalleryWidthtAuto();
        }
        else {
          ResizeGalleryGrid();
        }

      thumbnailsLazySetSrc();
      setGalleryToolbarWidth(0);
    }

    // CASCADING LAYOUT
    function ResizeGalleryHeightAuto() {
      var areaW=G.$E.conTnParent.width(),
      curCol=0,
      curRow=0,
      cnt=0,
      colHeight=[],
      maxCol=NbThumbnailsPerRow(),      //parseInt(areaW/G.tn.defaultFullWidth);
      gutterWidth=0,
      gutterHeight=G.O.thumbnailGutterHeight,
      tnW=G.tn.outerWidth.get(),
      $thumbnails=G.$E.conTn.find('.nanoGalleryThumbnailContainer');

      if( G.O.thumbnailAlignment == 'justified' ) {
        maxCol=Math.min(maxCol,$thumbnails.length);
        gutterWidth=(maxCol==1?0:(areaW-(maxCol*tnW))/(maxCol-1));
      }
      else {
        gutterWidth=G.O.thumbnailGutterWidth;
      }

      var nbCol=0;
      // first loop to retrieve the width of the area
      $thumbnails.each(function() {
        var $this=jQuery(this),
        n=$this.data("index");

        if( n !== undefined ) {
          var curPosX=0,
          curPosY=0;

          if( curRow == 0 ) {
            curPosX=curCol*(G.tn.outerWidth.get()+gutterWidth);
            colHeight[curCol]=G.I[n].thumbFullHeight+gutterHeight;

            curCol++;
            nbCol++;
            if( curCol >= maxCol ) {
              curCol=0;
              curRow++;
            }
          }
          else {
            return false;   // exit loop after first row
          }

          cnt++;
        }
      });
      var w=(((colHeight.length)*(tnW+gutterWidth))-gutterWidth);
      curRow=0;
      curCol=0;

      // second loop to position the thumbnails
      $thumbnails.each(function() {
        var $this=jQuery(this),
        n=$this.data("index");

        if( n !== undefined ) {
          if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
            setThumbnailSize($this,G.I[n]);      // [TODO] remove --> this should not be here but issue on labelHeight
          }
          var curPosX=0,
          curPosY=0;

          if( curRow == 0 ) {
            curPosX=curCol*(G.tn.outerWidth.get()+gutterWidth);
            colHeight[curCol]=G.I[n].thumbFullHeight+gutterHeight;

            curCol++;
            if( curCol >= maxCol ) {
              curCol=0;
              curRow++;
            }
          }
          else {
            var c=0,
            minColHeight=colHeight[0];
            for( i=1; i<maxCol; i++) {
              if( (colHeight[i]+5) < minColHeight ) {     // +5 --> threshold
                minColHeight=colHeight[i];
                c=i;
                break;
              }
            }
            curPosY=colHeight[c];
            curPosX=c*(G.tn.outerWidth.get()+gutterWidth);
            colHeight[c]=curPosY+G.I[n].thumbFullHeight+gutterHeight;
          }

          var x=curPosX;
          if( G.O.RTL) {
            x=w-curPosX-G.tn.outerWidth.get();
          }

          $this.css({ top: curPosY, left: x });
          ThumbnailAppear($this, G.I[n], cnt);

          cnt++;
        }
      });

      var h=colHeight[0];
      for(i=1;i<nbCol;i++) {
        h=Math.max(h, colHeight[i]);
      }
      G.$E.conTn.width(w).height(h);

    }

    // JUSTIFIED LAYOUT
    function ResizeGalleryWidthtAuto() {
      var areaW=G.$E.conTnParent.width(),
      curWidth=0,
      lastPosX=0,
      curPosY=0,
      rowLastItem=[],
      rowNum=0,
      rowHeight=[],
      bNewRow=false,
      cnt=0,
      tnFeaturedH=0,
      tnFeaturedW=0,
      tnFeaturedW2=0,
      gutterWidth=G.O.thumbnailGutterWidth,
      gutterHeight=G.O.thumbnailGutterHeight;
      // by grief-of-these-days
      var maxRowHeightVertical=0;     // max height of a row with vertical thumbs
      var maxRowHeightHorizontal=0;   // max height of a row with horizontal thumbs
      var rowHasVertical=false;       // current row has vertical thumbs
      var rowHasHorizontal=false;     // current row has horizontal thumbs

      var $thumbnails=G.$E.conTn.find('.nanoGalleryThumbnailContainer');
      $thumbnails.each(function() {
        var n=jQuery(this).data("index");
        if( n !== undefined && G.I[n] != undefined ) {
          if( G.I[n].thumbImg().width > 0 && G.I[n].thumbImg().height > 0 ) {
            var item=G.I[n],
            w=Math.floor(item.thumbImg().width/item.thumbImg().height*G.tn.settings.getH())+ G.tn.borderWidth+G.tn.imgcBorderWidth; // +gutterWidth;
            if( G.O.thumbnailFeatured && cnt == 0 ) {
              w=w*2;
              tnFeaturedW=w;
            }

            if( bNewRow ) {
              bNewRow=false;
              rowNum++;
              curWidth=0;
              rowHasVertical=false;
              rowHasHorizontal=false;
              if( rowNum == 1 && tnFeaturedW > 0 ) {
                curWidth=tnFeaturedW;
                tnFeaturedW=0;
              }
            }

            // by grief-of-these-days
            if( item.thumbImg().height > item.thumbImg().width ) {
              rowHasVertical = true;
            }
            else {
              rowHasHorizontal = true;
            }

            // down scale image resolution
            if( (curWidth + w + gutterWidth) < areaW ) {
              // last row
              curWidth+=w+gutterWidth;
              rowHeight[rowNum]=G.tn.settings.getH();
              // rowHeight[rowNum]=item.thumbFullHeight;

              // prevent incomplete row from being heigher than the previous ones.
              // by grief-of-these-days
              var rowHeightLimit=Math.max(rowHasVertical ? maxRowHeightVertical : 0, rowHasHorizontal ? maxRowHeightHorizontal : 0);
              if( G.O.thumbnailAdjustLastRowHeight && rowHeightLimit > 0 ) {
                rowHeight[rowNum]=Math.min(rowHeight[rowNum],rowHeightLimit);
              }

              rowLastItem[rowNum]=n;
            }
            else {
              // new row after current item
              curWidth+=w;
              var rH=Math.floor(G.tn.settings.getH()*areaW/curWidth);
              // var rH=Math.floor(item.thumbFullHeight*areaW/curWidth);
              rowHeight[rowNum]=rH;

              // save the max row height for each thumb orientation.
              // by grief-of-these-days
              if( rowHasVertical ) {
                maxRowHeightVertical=Math.max(maxRowHeightVertical,rH);
              }
              if( rowHasHorizontal ) {
                maxRowHeightHorizontal=Math.max(maxRowHeightHorizontal,rH);
              }

              rowLastItem[rowNum]=n;
              bNewRow=true;
            }

          cnt++;
          }
          else {
            // exit to conserve display order, and avoid displaying thumbnail before an existing one
            return false;
          }
        }

      });

      rowNum=0;
      curPosY=0;
      lastPosX=0;
      cnt=0;
      $thumbnails.each(function() {
        var $this=jQuery(this),
        n=$this.data("index");
        if( n !== undefined && G.I[n] != undefined ) {
          if( G.I[n].thumbImg().width > 0 && G.I[n].thumbImg().height > 0 ) {
            var item=G.I[n],
            // w=Math.ceil(item.thumbImgWidth/item.thumbImg().height*rowHeight[rowNum]);//+G.tn.borderWidth+G.tn.imgContBorderWidth;
            w=Math.floor(item.thumbImg().width/item.thumbImg().height*rowHeight[rowNum]);//+G.tn.borderWidth+G.tn.imgContBorderWidth;

            if( cnt == 0 && G.O.thumbnailFeatured ) {
              w=w*2;
              if( rowHeight.length == 1 ) {
                // only 1 row
                tnFeaturedH=parseInt(rowHeight[0])*2;
              }
              else {
                tnFeaturedH=parseInt(rowHeight[0])+parseInt(rowHeight[1])+G.tn.borderHeight+G.tn.imgcBorderHeight;
              }
            }

            if( n == rowLastItem[rowNum] ) {
              // last row item
              if( rowLastItem.length != (rowNum+1) ) {
                w=areaW-lastPosX- G.tn.borderWidth-G.tn.imgcBorderWidth;//-gutterWidth;
              }
              else {
                // very last item
                if( (lastPosX+w + G.tn.borderWidth+G.tn.imgcBorderWidth +gutterWidth) > areaW ) {
                  // reduce size
                  w=areaW-lastPosX-G.tn.borderWidth-G.tn.imgcBorderWidth;//-gutterWidth;
                }
              }
            }

            var rh=0;
            if( cnt == 0 && G.O.thumbnailFeatured ) {
            //  rh=tnFeaturedH;
            //  tnFeaturedW2= w + G.tn.borderWidth + G.tn.imgcBorderWidth;
            //  item.customData.featured=true;
            //  $this.find('img').attr('src', item.thumbX2src);
            }
            else {
              rh=rowHeight[rowNum];
            }

            rh=parseInt(rh);
            w=parseInt(w);
            $this.width(w+G.tn.imgcBorderWidth).height(rh+G.tn.imgcBorderHeight+G.tn.labelHeight.get());
            item.$getElt('.imgContainer').height(rh).width(w);
            $this.find('img').css({'max-height':rh+2, 'max-width':w+2});
            $this.find('.subcontainer').width(w+G.tn.imgcBorderWidth).height(rh+G.tn.imgcBorderHeight+G.tn.labelHeight.get());
            //$this.find('.labelImage').css({left:0, right:0});
            var x=lastPosX;
            if( G.O.RTL) {
              x=areaW - lastPosX - ( w + G.tn.borderWidth + G.tn.imgcBorderWidth );
            }
            $this.css({ top: curPosY , left: x });
            item.thumbFullWidth=w+G.tn.borderWidth+G.tn.imgcBorderWidth;
            item.thumbFullHeight=rh+G.tn.borderHeight+G.tn.imgcBorderHeight+G.tn.labelHeight.get();
            ThumbnailOverResize($this);
            ThumbnailAppear($this, item, cnt);

            lastPosX+=w+G.tn.borderWidth+G.tn.imgcBorderWidth+gutterWidth;

            if( n == rowLastItem[rowNum] ) {
              // curPosY+=rowHeight[rowNum]+G.tn.outerHeight+G.tn.labelHeight.get()+gutterHeight;
              curPosY+=rowHeight[rowNum]+G.tn.labelHeight.get()+gutterHeight+G.tn.imgcBorderHeight+G.tn.borderHeight;
              rowNum++;
              lastPosX=0;
              if( rowNum == 1 && tnFeaturedW2 > 0 ) {
                lastPosX= tnFeaturedW2;
                tnFeaturedW2=0;
              }
            }
            cnt++;
          }
          else {
            return false;
          }
        }
      });

      if( rowNum > 0 ) {
        curPosY-=gutterHeight;
      }
      tnFeaturedH=tnFeaturedH+G.tn.outerHeight.get()+G.tn.labelHeight.get();
      G.$E.conTn.width(areaW).height(curPosY>tnFeaturedH?curPosY:tnFeaturedH);  //+G.O.thumbnailHeight);
    }


    // Maximum number of thumbnails in one row
    function NbThumbnailsPerRow() {

      var tnW=G.tn.settings.getW()+G.tn.borderWidth+G.tn.imgcBorderWidth;
      var areaW=G.$E.conTnParent.width();

      var nbMaxTn=0;
      if( G.O.thumbnailAlignment == 'justified' ) {
        nbMaxTn=Math.floor((areaW)/(tnW));
      }
      else {
        nbMaxTn=Math.floor((areaW+G.O.thumbnailGutterWidth)/(tnW+G.O.thumbnailGutterWidth));
      }

      if(  G.O.maxItemsPerLine >0 && nbMaxTn >  G.O.maxItemsPerLine ) {
        nbMaxTn=G.O.maxItemsPerLine;
      }

      if( nbMaxTn < 1 ) { nbMaxTn=1; }

      return nbMaxTn
    }


    // GRID LAYOUT
    function ResizeGalleryGrid() {
      var curPosX=0,
      curPosY=0,
      gutterWidth=0,
      gutterHeight=G.O.thumbnailGutterHeight,
      areaW=G.$E.conTnParent.width(),
      maxCol=NbThumbnailsPerRow(),
      cnt=0,
      h=0,
      w=0,
      cols=[],
      curCol=0;

      G.L.nbMaxTnPerRow=NbThumbnailsPerRow();
      var d=new Date();

      // pagination - max lines per page mode
      if( G.pgMaxLinesPerPage > 0 ) {
        if( G.tn.outerWidth.get() > 0 ) {
          if( maxCol != G.pgMaxNbThumbnailsPerRow ) {   // max number of thumbnails per line has changed --> render the gallery again
            G.pgMaxNbThumbnailsPerRow=maxCol;
            var aIdx=G.$E.conPagin.data('galleryIdx');
            renderGallery(aIdx,0);
            return;
          }
        }
      }

      var $thumbnails=G.$E.conTn.find('.nanoGalleryThumbnailContainer'),
      nbTn=$thumbnails.length;

      if( G.O.thumbnailAlignment == 'justified' ) {
        maxCol=Math.min(maxCol,nbTn);
        gutterWidth=(maxCol==1?0:(areaW-(maxCol*G.tn.outerWidth.get()))/(maxCol-1));
      }
      else {
        gutterWidth=G.O.thumbnailGutterWidth;
      }

      if( G.O.RTL ) {
        // first loop to retrieve the width of the area
        $thumbnails.each(function() {
          var $this=jQuery(this);

          var n=$this.data("index");
          if( n !== undefined ) {
            if( curPosY == 0 ) {
              curPosX=curCol*(G.tn.outerWidth.get()+gutterWidth);
              cols[curCol]=curPosX;
              w=curPosX;
            }
            else {
              return false;
            }

            curCol++;
            if( curCol >= maxCol ){
              curCol=0;
              curPosY+=G.tn.outerHeight.get()+gutterHeight;
            }
          }
        });
        areaW=w+G.tn.outerWidth.get();
        curPosY=0;
        curCol=0;
      }


      var batch=[];

      var lastN=0;
      $thumbnails.each(function() {
        var $this=jQuery(this);

        var n=$this.data("index");
        if( n !== undefined ) {
          lastN=n;
          if( curPosY == 0 ) {
            curPosX=curCol*(G.tn.outerWidth.get()+gutterWidth)
            cols[curCol]=curPosX;
            w=curPosX;
          }
          else {
            curPosX=cols[curCol];
            h=curPosY;
          }

          var x=curPosX;
          if( G.O.RTL ) {
            x=parseInt(areaW)-curPosX-G.tn.outerWidth.get();
          }
          batch.push({$e:$this, t:curPosY, l:x, item:G.I[n]});
          // $this.css({ top: curPosY , left: x });
          // ThumbnailAppear($this, G.I[n], cnt);

          curCol++;
          if( curCol >= maxCol ){
            curCol=0;
            curPosY+=G.tn.outerHeight.get()+gutterHeight;
          }
          cnt++;
        }
      });

      // window.requestAnimationFrame( function(d,w) {
        var n=batch.length;
        var h=0
        for( var i=0; i<n; i++ ) {
          batch[i].$e.css({ top: batch[i].t , left: batch[i].l });
          ThumbnailAppear(batch[i].$e, batch[i].item, i);
          h=batch[i].t;
        }
        batch=[];
        G.$E.conTn.width(w+G.tn.outerWidth.get()).height(h+G.tn.outerHeight.get());
        if( G.O.debugMode ) {
          console.log('ResizeGalleryGrid: '+ (new Date()-d));
        }
      // });
    }

    function ThumbnailAppear($this, item, n) {
      // if( $this.css('opacity') == 0 ) {    // ==> DO NOT USE / TOO SLOW
      if( $this.hasClass('nanogalleryHideElement') ) {
        $this.removeClass('nanogalleryHideElement');
        if( G.O.thumbnailDisplayTransition ) {
          if( typeof G.O.fnThumbnailDisplayEffect == 'function' ) {
            G.O.fnThumbnailDisplayEffect($this, item, 0);
          }
          else {
            // $this.delay(n*G.tn.displayInterval).fadeTo(150, 1);
            // $this.fadeTo(200, 1);
             // FadeToAppear($this,1);
            setTimeout(function() {
              window.requestAnimationFrame( function() {
                FadeToAppear($this);
              });
            }, n*G.tn.displayInterval);
          }
        }
        else {
          $this.css({opacity:1});
        }
      }
    }


    function FadeToAppear( $elt ) {
      var tweenable = new NGTweenable();
      tweenable.tween({
        from:     { 'o': 0  },
        to:       { 'o': 1 },
        duration: 200,
        step: function (state) {
          $elt.css({opacity: state.o});
        },
        finish: function (state) {
          $elt.css({opacity: state.o});
        }
      });
    }


    function setGalleryToolbarWidth(pageNumber) {
      if( G.O.galleryToolbarWidthAligned ) {
        if( G.$E.conNavBCon !== undefined ) {
          var w=G.$E.conTn.outerWidth(true);
          //if( pageNumber > 0 ) {
            if( G.$E.conNavBCon.width() < w ) {
              G.$E.conNavBCon.width(w);
            }
          //}
          else {
            G.$E.conNavBCon.width(w);
          }
        }
      }
    }

    // thumbnail image lazy load
    function thumbnailsLazySetSrc() {
      var $eltInViewport=G.$E.conTn.find('.nanoGalleryThumbnailContainer').filter(function() {
         return inViewport(jQuery(this), G.tn.lazyLoadTreshold);
      });

      jQuery($eltInViewport).each(function(){
        var $image=jQuery(this).find('img');
        if( $image.attr('src') == G.emptyGif ) {
          var idx=jQuery(this).data('index');
          if( idx == undefined || G.I[idx] == undefined ) { return; }
          $image.attr('src','');
          $image.attr('src',G.I[idx].thumbImg().src);
        }
      });
    }



    // ###################
    // ##### GALLERY #####
    // ###################

    // Display pagination
    function managePagination( albumIdx, pageNumber ) {
      if( G.$E.conPagin == undefined ) return;

      G.$E.conPagin.children().remove();

      //if( G.tn.settings.getH() == 'auto' || G.tn.settings.getW() == 'auto' ) { return; }
      if( G.pgMaxLinesPerPage == 0 || G.tn.settings.getH() == 'auto' || G.tn.settings.getW() == 'auto' ) {
        // Hide pagination container, if not used.
        G.$E.conPagin.hide();
        return;
      }

      // Must show the container for width calculation to work.
      G.$E.conPagin.show();

      G.$E.conPagin.data('galleryIdx',albumIdx);
      G.$E.conPagin.data('currentPageNumber',pageNumber);
      var n2=0,
      w=0;
      if( !G.O.paginationDots && pageNumber > 0 ) {
        var eltPrev=jQuery('<div class="paginationPrev">'+(G.O.paginationDots? '':G.i18nTranslations.paginationPrevious)+'</div>').appendTo(G.$E.conPagin);
        w+=jQuery(eltPrev).outerWidth(true);
        eltPrev.click(function(e) {
          paginationPreviousPage();
        });
      }

      var firstPage=0;
      // pagination - max lines per page mode
      if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto' ) {
        n2=Math.ceil(G.I[albumIdx].contentLength/(G.pgMaxLinesPerPage*G.pgMaxNbThumbnailsPerRow));
      }

      // no previous/next
      if( G.O.paginationDots ) {
        firstPage=0;
      }
      else {
        if( pageNumber >= 5 ) {
          firstPage=pageNumber-5;
          if( n2 > pageNumber+6 ) {
            n2=pageNumber+6;
          }
        }
        else {
          if( n2 > 10 ) {
            n2=10;
          }
        }
      }

      // only one page -> do not display anything
      // if( n2==1 ) { return; }
      if( n2==1 ) {
        // Hide pagination container, if not used.
        G.$E.conPagin.hide ();
        return;
      }

      for(var i=firstPage; i < n2; i++ ) {
        var c='';
        if( i == pageNumber ) { c=' currentPage'; }
        var elt$=jQuery('<div class="paginationItem'+c+'">'+(G.O.paginationDots? '':(i+1))+'</div>').appendTo(G.$E.conPagin);
        elt$.data('pageNumber',i);
        w+=elt$.outerWidth(true);
        elt$.click(function(e) {
          var aIdx=G.$E.conPagin.data('galleryIdx'),
          pn=jQuery(this).data('pageNumber');
          if( !inViewportVert(G.$E.base, 0) ) {
            $('html, body').animate({scrollTop: G.$E.base.offset().top}, 200);
          }
          renderGallery(aIdx,pn);
        });

      }

      if( !G.O.paginationDots && (pageNumber+1) < n2 ) {
        var $eltNext=jQuery('<div class="paginationNext">'+(G.O.paginationDots? '':G.i18nTranslations.paginationNext)+'</div>').appendTo(G.$E.conPagin);
        w+=$eltNext.outerWidth(true);
        $eltNext.click(function(e) {
          paginationNextPage();
        });
      }

      G.$E.conPagin.width(w);

    }

    function paginationNextPage() {
      var aIdx=G.$E.conPagin.data('galleryIdx'),
      n1=0;

      // pagination - max lines per page mode
      if( G.pgMaxLinesPerPage > 0 ) {
        n1=G.I[aIdx].contentLength / (G.pgMaxLinesPerPage * G.pgMaxNbThumbnailsPerRow);
      }
      n2=Math.ceil(n1);

      var pn=G.$E.conPagin.data('currentPageNumber');
      if( pn < (n2-1) ) {
        pn++;
      }
      else {
        pn=0;
      }

      if( !inViewportVert(G.$E.base, 0) ) {
        $('html, body').animate({scrollTop: G.$E.base.offset().top }, 200);
      }

      renderGallery(aIdx,pn);
    }

    function paginationPreviousPage() {
      var aIdx=G.$E.conPagin.data('galleryIdx'),
      n1=0;

      // pagination - max lines per page mode
      if( G.pgMaxLinesPerPage > 0 ) {
        n1=G.I[aIdx].contentLength / (G.pgMaxLinesPerPage * G.pgMaxNbThumbnailsPerRow);
      }
      n2=Math.ceil(n1);

      var pn=G.$E.conPagin.data('currentPageNumber');
      if( pn > 0 ) {
        pn--;
      }
      else {
        pn=n2-1;
      }

      if( !inViewportVert(G.$E.base, 0) ) {
        $('html, body').animate({scrollTop: G.$E.base.offset().top }, 250);
      }

      renderGallery(aIdx,pn);
    }

    function galleryCountImages (imageIdx) {
      var l=G.I.length;
      var images = 0;
      var currentItemIdx = imageIdx || G.GetCurrentViewedItemIdx();

      if (currentItemIdx !== -1) {
        for( var i=0; i <  l ; i++ ) {
          if( G.I[i].albumID == G.I[currentItemIdx].albumID && G.I[i].kind == 'image' ) {
            images++;
          }
        }
        return images;
      } else {
        return 0;
      }
    }

    function renderGallery( albumIdx, pageNumber ) {
      G.curAlbumIdx=-1;

      if( G.$E.conPagin == undefined ) {
        G.$E.conPagin.children().remove();
      }

      var $elt=G.$E.conTn.parent();

      var tweenable = new NGTweenable();
      tweenable.tween({
        to:     {'opacity': 0 },
        from:       {'opacity': 1 },
        attachment: { $e:$elt },
        duration: 150,
        step: function (state, att) {
          att.$e.css(state);
        },
        finish: function (state, att) {
          att.$e.css({'opacity': 0 });
          G.containerThumbnailsDisplayed=false;
          //      G.$E.conTn.off().empty();
          G.$E.conTn.hide(0).off().show(0).html('');
          var l=G.I.length;
          for( var i=0; i < l ; i++ ) {

            G.I[i].$Elts = [];
            G.I[i].$elt = null;
            G.I[i].hoverInitDone=false;
            G.I[i].hovered=false;
          }

          G.$E.conTnParent.css({ left:0, opacity:1 });
          ElementTranslateX(G.$E.conTn[0],0);

          renderGallery2(albumIdx, pageNumber, renderGallery2Complete);
        }
      });

      return;


      // TODO: remove following
      $elt.animate({opacity: 0}, 100).promise().done(function(){

        // remove gallery elements
        G.containerThumbnailsDisplayed=false;
        //      G.$E.conTn.off().empty();
        G.$E.conTn.hide(0).off().show(0).html('');
        var l=G.I.length;
        for( var i=0; i < l ; i++ ) {
          G.I[i].hovered=false;
        }

        G.$E.conTnParent.css({ left:0, opacity:1 });
        ElementTranslateX(G.$E.conTn[0],0);

        renderGallery2(albumIdx, pageNumber, renderGallery2Complete);
      });
    }


    function renderGallery2( albumIdx, pageNumber, onComplete ) {
      if( G.O.debugMode && console.timeline ) {
        console.timeline('nanoGALLERY');
      }
      G.startDateTime= new Date();

      if( albumIdx == -1 || G.I[albumIdx] == undefined) { return; }

      G.I[albumIdx].paginationLastPage=pageNumber;
      G.I[albumIdx].paginationLastWidth=G.$E.conTnParent.width();


      var l=G.I.length;
      // if one description is defined then put a value to those without
      var foundDesc=false;
      /*if( G.O.thumbnailLabel.get('position') == 'onBottom'  ) {
        for(var i=0; i<l; i++ ) {
          if( G.I[i].albumID == G.I[albumIdx].albumID && G.I[i].description.length > 0 ) { foundDesc=true; }
        }
      }*/
      // var G.galleryItemsCount=0;
      G.galleryItemsCount=0;
      var currentCounter=0,
      firstCounter=0,
      lastCounter=0;

      if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto' ) {
        firstCounter=pageNumber*G.pgMaxLinesPerPage*G.pgMaxNbThumbnailsPerRow;
        lastCounter=firstCounter+G.pgMaxLinesPerPage*G.pgMaxNbThumbnailsPerRow;
      }

      PreloaderHide();

      var endInViewportTest=false,
      startInViewportTest=false,
      idx=0;
      (function(){

        G.toRender=[];
        for( var i=0; i<G.O.galleryRenderStep; i++ ) {
          if( idx >= l ) {
            onComplete(albumIdx, pageNumber);
            return;
          }
          var item=G.I[idx];
          if( item.albumID == G.I[albumIdx].GetID() ) {
            currentCounter++;

            // pagination - max lines per page mode
            if( G.pgMaxLinesPerPage > 0 && G.tn.settings.getH() != 'auto' && G.tn.settings.getW() != 'auto' ) {
              if( (G.galleryItemsCount+1) > (G.pgMaxLinesPerPage*G.pgMaxNbThumbnailsPerRow) ) {
                onComplete(albumIdx, pageNumber);
                return;
              }
            }

            if( currentCounter > firstCounter ) {
              G.galleryItemsCount++;

              // If the item is does not exists anymore
              var r=thumbnailBuild(item, idx, foundDesc);
              var $newDiv=r.e$;

              // image lazy load
              if( G.O.thumbnailLazyLoad && !r.cIS ) {
                if( !endInViewportTest ) {
                  if( inViewport($newDiv, G.tn.lazyLoadTreshold) ) {
                    item.$getElt('img').attr('src','');   // firefox bug workaround
                    item.$getElt('img').attr('src',item.thumbImg().src);
                    startInViewportTest=true;
                  }
                  else {
                    if( startInViewportTest ) { endInViewportTest=true; }
                  }
                }
              }
            }
          }
          idx++;
        }

        var n=G.toRender.length;
        if( n > 0 ) {
          for(var i=0; i<n; i++ ) {
            // ThumbnailOverInit(G.toRender[i].$e);     // init hover effects
            // setThumbnailSize(G.toRender[i].$e, G.toRender[i].i);
            // ThumbnailOverResize(G.toRender[i].$e);
          }
        }

        if( idx < l ) {
          //setGalleryToolbarWidth(pageNumber);
          setTimeout(arguments.callee,2);
        }
        else {
          onComplete(albumIdx, pageNumber);
        }
      })();
    }

    function renderGallery2Complete( albumIdx, pageNumber ) {
      //if( G.O.thumbnailHeight == 'auto' || G.O.thumbnailWidth == 'auto' || G.O.thumbnailWidth == 'autoUpScale' ) {
        ResizeGallery();
      //}

      // SetGalleryWidth(pageNumber);
      //setGalleryToolbarWidth(pageNumber);
      managePagination(albumIdx,pageNumber);
      G.containerThumbnailsDisplayed=true;
      G.curAlbumIdx=albumIdx;

      if(typeof G.O.fnInitGallery === 'function'){
          G.O.fnInitGallery(albumIdx, pageNumber);
      }

      if( G.O.debugMode && console.timeline ) {
        console.log('End-render: ' + (new Date() - G.startDateTime));
        console.timelineEnd('nanoGALLERY');
      }

      // Refresh select mode
      G.SetSelectMode();
    }


    function thumbnailBuild( item, idx, foundDesc ) {
      var newElt=[],
      newEltIdx=0;

      item.$Elts=[];

      var pos='';
      var ch=' nanogalleryHideElement'
      if( G.O.thumbnailLazyLoad && G.tn.settings.getW() == 'auto' ) {
        pos='top:0px;left:0px;';
//        ch='';
      }
      newElt[newEltIdx++]='<div class="nanoGalleryThumbnailContainer'+ch+' nGEvent" style="display:block;opacity:0;'+pos+'" ><div class="subcontainer nGEvent" style="display:block;">';

      var checkImageSize=false,
      src=G.emptyGif;
      if( (G.tn.settings.getH() == 'auto' && G.I[idx].thumbImg().height == 0) || (G.tn.settings.getW() == 'auto' && G.I[idx].thumbImg().width == 0) ) { checkImageSize=true; }
      if( !G.O.thumbnailLazyLoad || checkImageSize) {
        src=item.thumbImg().src;
      }
      var sTitle=getThumbnailTitle(item),
      sDesc=getTumbnailDescription(item);

      if( G.tn.settings.getH() == 'auto' ) {
        newElt[newEltIdx++]='<div class="imgContainer nGEvent" style="width:'+G.tn.settings.getW()+'px;"><img class="image nGEvent" src="'+src+'" alt="'+sTitle+'" style="max-width:'+G.tn.settings.getW()+'px;"></div>';
      }
      else if( G.tn.settings.getW() == 'auto' ) {
          newElt[newEltIdx++]='<div class="imgContainer nGEvent" style="height:'+G.tn.settings.getH()+'px;"><img class="image nGEvent" src="'+src+'" alt="'+sTitle+'" style="max-height:'+G.tn.settings.getH()+'px;" ></div>';
        }
        else {
          newElt[newEltIdx++]='<div class="imgContainer nGEvent" style="width:'+G.tn.settings.getW()+'px;height:'+G.tn.settings.getH()+'px;"><img class="image nGEvent" src="'+src+'" alt="'+sTitle+'" style="max-width:'+G.tn.settings.getW()+'px;max-height:'+G.tn.settings.getH()+'px;" ></div>';
        }

      if( item.kind == 'album' ) {
        // ALBUM
        if( G.O.thumbnailLabel.get('display') == true ) {
          var imageCount='';
          if( item.contentLength > 0 ) {
            // display content counter
            switch( G.O.thumbnailLabel.get('itemsCount') ) {
              case 'title':
                sTitle +=  ' ' + G.i18nTranslations.thumbnailLabelItemsCountPart1 + '<span class="nGEvent">' +item.contentLength + '</span>' +G.i18nTranslations.thumbnailLabelItemsCountPart2;
                break;
              case 'description':
                sDesc += ' ' + G.i18nTranslations.thumbnailLabelItemsCountPart1 + '<span class="nGEvent">' + item.contentLength + '</span>' + G.i18nTranslations.thumbnailLabelItemsCountPart2;
                break;
            }
          }
          newElt[newEltIdx++]='<div class="labelImage nGEvent" style="width:'+G.tn.settings.getW()+'px;'+(G.O.RTL ? "direction:RTL;" :"")+(G.curNavLevel == 'l1' ? G.tn.styleL1LabelImage : G.tn.styleLabelImage)+'"><div class="labelFolderTitle labelTitle nGEvent" style="'+(G.curNavLevel == 'l1' ? G.tn.styleL1FTitle:G.tn.styleFTitle)+'">'+sTitle+'</div><div class="labelDescription nGEvent" style="'+(G.curNavLevel == 'l1' ? G.tn.styleL1Desc:G.tn.styleDesc)+'">'+sDesc+'</div></div>';
        }
      }
      else {
        // IMAGE
        if( G.O.thumbnailLabel.get('display') == true ) {
          if( foundDesc && sDesc.length == 0 && G.O.thumbnailLabel.get('position') == 'onBottom' ) { sDesc='&nbsp;'; }
          newElt[newEltIdx++]='<div class="labelImage nGEvent" style="width:'+G.tn.settings.getW()+'px;'+(G.O.RTL ? "direction:RTL;" :"")+(G.curNavLevel == 'l1' ? G.tn.styleL1LabelImage:G.tn.styleLabelImage)+'"><div class="labelImageTitle labelTitle nGEvent" style="'+(G.curNavLevel == 'l1' ? G.tn.styleL1ITitle:G.tn.styleITitle)+'">'+sTitle+'</div><div class="labelDescription nGEvent" style="'+(G.curNavLevel == 'l1' ? G.tn.styleL1Desc:G.tn.styleDesc)+'">'+sDesc+'</div></div>';
        }
      }

      newElt[newEltIdx++]='</div>';

      // checkbox for selection
      if( G.O.itemsSelectable ){

        item.selected = false;
        if(G.O.keepSelection === true){
            for (it in G.selectedItems){
                if(G.selectedItems[it].GetID() === item.GetID()){
                  item.selected = true;
                }
            }
        }
        if(G.O.showCheckboxes){
          checked = '';
          if(item.selected){
              checked = 'checked';
          }
          newElt[newEltIdx++]='<input class="ngChekbox" type="checkbox" '+checked+' style="position:absolute;z-index:999;'+G.O.checkboxStyle+'">';
        }
      }

      newElt[newEltIdx++]='</div>';

      // var $newDiv =jQuery(newElt.join('')).appendTo(G.$E.conTnHid); //.animate({ opacity: 1},1000, 'swing');  //.show('slow'); //.fadeIn('slow').slideDown('slow');
      var $newDiv =jQuery(newElt.join('')).appendTo(G.$E.conTnHid); //.animate({ opacity: 1},1000, 'swing');  //.show('slow'); //.fadeIn('slow').slideDown('slow');
      if(typeof item.selected !== 'undefined' && item.selected === true){
          $newDiv.find('.subcontainer').addClass('selected');
      }
      item.$elt=$newDiv;
      $newDiv.data('index',idx);
      item.$getElt('img').data('index',idx);


      // Custom init function
      if( typeof G.O.fnThumbnailInit == 'function' ) {
        G.O.fnThumbnailInit($newDiv, item, ExposedObjects());
      }

      var $p=$newDiv.detach();
      $p.appendTo( G.$E.conTn );



      if( checkImageSize ) {
        // ThumbnailOverInit($newDiv);     // init hover effects
        var gi_imgLoad = ngimagesLoaded( $newDiv );
        //$newDiv.ngimagesLoaded().always( function( instance ) {
        gi_imgLoad.on( 'always', function( instance ) {
          var item=G.I[jQuery(instance.images[0].img).data('index')];
          if( item == undefined || instance.images[0].img.src == G.emptyGif ) { return; }    // warning: also fired for blank image --> ignore
          var b=false;
          if( item.thumbImg().height != instance.images[0].img.naturalHeight ) {
            item.thumbSetImgHeight(instance.images[0].img.naturalHeight);
            item.thumbSetImgWidth(instance.images[0].img.naturalWidth);
            b=true;
          }
          if( item.thumbImg().width != instance.images[0].img.naturalWidth ) {
            item.thumbSetImgHeight(instance.images[0].img.naturalHeight);
            item.thumbSetImgWidth(instance.images[0].img.naturalWidth);
            b=true;
          }

          if( b ) {
            ThumbnailOverInit(item.$elt);     // init hover effects
            setThumbnailSize(item.$elt, item);
            ThumbnailOverResize(item.$elt);
            ResizeGallery();      // [TODO] optimization to avoid too much resizing
          }
        });
      }
      else {
        //G.toRender.push({ $e:$newDiv, i:item });
        ThumbnailOverInit($newDiv);     // init hover effects
        setThumbnailSize($newDiv, item);
        ThumbnailOverResize($newDiv);
      }

      return { e$:$newDiv, cIS:checkImageSize };
    }

    function getThumbnailTitle( item ) {

      var sTitle=item.title;
      if( G.O.thumbnailLabel.get('display') == true ) {
        if( sTitle === undefined || sTitle.length == 0 ) { sTitle='&nbsp;'; }

        if( G.i18nTranslations.thumbnailImageTitle != '' ) {
          sTitle=G.i18nTranslations.thumbnailImageTitle;
        }
        if( G.O.thumbnailLabel.get('titleMaxLength') > 3 && sTitle.length > G.O.thumbnailLabel.get('titleMaxLength') ){
          sTitle=sTitle.substring(0,G.O.thumbnailLabel.get('titleMaxLength'))+'...';
        }
      }

      return sTitle;
    }

    function getTumbnailDescription( item ) {
      var sDesc='';
      if( G.O.thumbnailLabel.get('displayDescription') == true ) {
        if( item.kind == 'album' ) {
          if( G.i18nTranslations.thumbnailImageDescription != '' ) {
            sDesc=G.i18nTranslations.thumbnailAlbumDescription;
          }
          else {
            sDesc=item.description;
          }
        }
        else {
          if( G.i18nTranslations.thumbnailImageDescription != '' ) {
            sDesc=G.i18nTranslations.thumbnailImageDescription;
          }
          else {
            sDesc=item.description;
          }
        }
        if( G.O.thumbnailLabel.get('descriptionMaxLength') > 3 && sDesc.length > G.O.thumbnailLabel.get('descriptionMaxLength') ){
          sDesc=sDesc.substring(0,G.O.thumbnailLabel.get('descriptionMaxLength'))+'...';
        }
      }

      return sDesc;
    }


    function thumbnailSelection(item, forceValue, refrehElt){
      var $e=item.$elt;
      var thumbnailCheckbox = $e.find('input[type=checkbox]');

      if((G.selectMode === 'image' || G.selectMode === 'album') && item.kind !== G.selectMode ){
          item.selected = false;
          thumbnailCheckbox.prop('checked',false );
          item.$getElt('.subcontainer').removeClass('selected');
      }else{
        if( typeof forceValue === 'undefined' ){
          item.selected=!item.selected;
        }else{
          item.selected = forceValue;
        }
        if( refrehElt !== false ) {
          thumbnailCheckbox.prop('checked',item.selected );
        }
        if( item.selected ) {
          item.$getElt('.subcontainer').addClass('selected');
        } else {
          item.$getElt('.subcontainer').removeClass('selected');
        }
      }
      thumbnailSelectionEnd();
      if(typeof G.O.fnThumbnailSelection === 'function'){
        G.O.fnThumbnailSelection($e, item);
      }
    }

    function thumbnailSelectionEnd(){
      var oldSelection;
      if(G.O.keepSelection === true){
        oldSelection = G.selectedItems.slice(0);
      }
      G.selectedItems = [];
      var l=G.I.length;
      for( var j=0; j<l ; j++) {
        if(G.I[j].selected === true) {
          G.selectedItems.push(G.I[j]);
        }
      }
      if(G.O.keepSelection === true){
        for(j in oldSelection) {
          alreadyExists = false;
          for( var k=0; k<l ; k++) {
            if(G.I[k].GetID() === oldSelection[j].GetID()) {
              alreadyExists = true;
            }
          }
          if(alreadyExists === false){
            G.selectedItems.push(oldSelection[j]);
          }
        }
        oldSelection = [];
      }

      if (G.selectedItems.length > 0 || G.selectModeForce == true) {
        G.I.forEach(function (it) {
          if(it.$elt !== null && !it.$elt.hasClass('selectable')){
            if((G.selectModeForce == true && it.kind === G.selectMode) || G.selectMode == true){
                it.$elt.addClass('selectable');
            }
          }
        });
        if(G.selectMode !== true && G.selectMode !== 'image' &&
                G.selectMode !== 'album'){
          G.selectMode = true;
        }
      }else {
        G.I.forEach(function (it) {
          if(it.$elt !== null){
            it.$elt.removeClass('selectable');
          }
        });
        G.selectMode = false;
      }

      if (typeof G.O.fnChangeSelectMode === 'function'){
        G.O.fnChangeSelectMode(G.selectMode);
      }
    }

    function setThumbnailSize( $elt, item ) {

      if( G.tn.settings.getH() == 'auto' ) {
        // CASCADING LAYOUT
        if( item.thumbImg().height > 0 ) {
          var ratio=item.thumbImg().height/item.thumbImg().width;
          item.$getElt('.imgContainer').height(G.tn.settings.getW()*ratio); //.css({'overflow':'hidden'});
          if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
            item.thumbLabelHeight=item.$getElt('.labelImage').outerHeight(true);
            item.thumbFullHeight=G.tn.settings.getW()*ratio + item.thumbLabelHeight + G.tn.borderHeight+G.tn.imgcBorderHeight;
            $elt.width(G.tn.outerWidth.get()-G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight);
            item.$getElt('.labelImage').css({'position':'absolute', 'top':'', 'bottom':'0px'});
          }
          else {
            item.thumbFullHeight=G.tn.settings.getW()*ratio + item.thumbLabelHeight + G.tn.borderHeight+G.tn.imgcBorderHeight;
            $elt.width(G.tn.outerWidth.get() - G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight);
          }
        }
        item.thumbFullWidth=G.tn.outerWidth.get();
        item.$getElt('.subcontainer').width(G.tn.outerWidth.get()-G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight); //.css({'overflow':'hidden'});
      }
      else

        // JUSTIFIED LAYOUT
        if( G.tn.settings.getW() == 'auto' ) {
          return;

          // everything is done in ResizeGalleryWidthtAuto()
          if( item.thumbImg().width > 0 ) {
            // var ratio=item.thumbImg().height/item.thumbImg().width;
            var ratio=item.thumbImg().width/item.thumbImg().height;
            item.$getElt('.imgContainer').width(G.tn.settings.getH()*ratio).css({overflow:'hidden'});
            if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
              item.thumbFullWidth=G.tn.settings.getH()*ratio + G.tn.borderWidth+G.tn.imgcBorderWidth ;
              $elt.width(item.thumbFullWidth).height(G.tn.outerHeight.get()+G.tn.labelHeight.get()-G.tn.outerHeight.get());
            }
            else {
            }
          }
          item.thumbFullHeight=G.tn.outerHeight.get()+G.tn.labelHeight.get();
          $elt.find('.subcontainer').width(item.thumbFullWidth-G.tn.borderWidth).height(G.tn.outerHeight.get()-G.tn.borderHeight); //.css({'overflow':'hidden'});
        }

        else {
          // GRID LAYOUT
          item.thumbFullHeight=G.tn.outerHeight.get();  //+G.tn.labelHeight.get();  //G.tn.defaultFullHeight;
          item.thumbFullWidth=G.tn.outerWidth.get();   //G.tn.defaultFullWidth;
          if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
            $elt.width(item.thumbFullWidth-G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight);
            //item.$getElt('.labelImage').height(G.tn.labelHeight.get()-G.tn.labelBorderHeight).css({overflow:'hidden'});
          }
          else {
            $elt.width(item.thumbFullWidth-G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight);
          }
          item.$getElt('.subcontainer').width(item.thumbFullWidth-G.tn.borderWidth).height(item.thumbFullHeight-G.tn.borderHeight); //.css({'overflow':'hidden'});
        }
    }


    // TODO --> REMOVE
    function thumbnailPositionContentOLD( $e, item ) {

      if(G.O.itemsSelectable === true && G.O.showCheckboxes === true){
        thumbnailCheckbox = $('<input>')
          .attr('type', 'checkbox')
          .css({
            'position' : 'absolute',
            'top' : G.O.checkboxPosition.top,
            'left' : G.O.checkboxPosition.left,
            'z-index' : 999
          }).click(function(){
            thumbnailSelection(item);
          });
        $e.append(thumbnailCheckbox);
        $e.data('selected',false);
      }

      if( typeof G.O.fnThumbnailInit == 'function' ) {
        G.O.fnThumbnailInit($e, item, ExposedObjects());
        return;
      }

      return;

      if( !G.O.thumbnailLabel.get('display') ) { return; }


      switch( G.O.thumbnailLabel.get('position') ){
        case 'onBottom':
          item.$getElt('.labelImage').css({top:0, position:'relative', left:0, right:0});
          if( G.tn.settings.getH() == 'auto' ) {
            // line break
            if( item.kind == 'album' ) {
              item.$getElt('.labelFolderTitle').css({'white-space':'normal'});
            }
            else {
              item.$getElt('.labelImageTitle').css({'white-space':'normal'});
            }
            item.$getElt('.labelDescription').css({'white-space':'normal'});
          }
          else {
            // no line break
            if( item.kind == 'album' ) {
              item.$getElt('.labelFolderTitle').css({'white-space':'nowrap'});
            }
            else {
              item.$getElt('.labelImageTitle').css({'white-space':'nowrap'});
            }
            item.$getElt('.labelDescription').css({'white-space':'nowrap'});
          }
          break;
        case 'overImageOnTop':
          item.$getElt('.labelImage').css({top:0, bottom:0, left:0, right:0 });
          break;
        case 'overImageOnMiddle':
          item.$getElt('.labelImage').css({top:0, bottom:0, left:0, right:0});
          if( item.kind == 'album' ) {
            item.$getElt('.labelFolderTitle').css({left:0, right:0, position:'absolute', bottom:'50%'});
          }
          else {
            item.$getElt('.labelImageTitle').css({left:0, right:0, position:'absolute', bottom:'50%'});
          }
          item.$getElt('.labelDescription').css({left:0, right:0, position:'absolute', top:'50%'});
          break;
        case 'custom':
          // Don't apply any style
          break;
        case 'overImageOnBottom':
        default :
          G.O.thumbnailLabel.set('position', 'overImageOnBottom');
          item.$getElt('.labelImage').css({bottom:0, left:0, right:0});
          break;
      }
    }

    function ThumbnailHoverOutAll() {
    // [TODO] --> only check displayed items
      var l=G.I.length;
      for( var i=0; i < l ; i++ ) {
        if( G.I[i].hovered ) {
          ThumbnailHoverOut(G.I[i].$elt);
        }
      }
    }

    // init hover effects
    function ThumbnailOverInit( $e ) {
      var n=$e.data("index");
      if( n == undefined ) { return; }    // required because can be fired on ghost elements
      var item=G.I[n];
      if( typeof G.O.fnThumbnailHoverInit == 'function' ) {
        G.O.fnThumbnailHoverInit($e, item, ExposedObjects() );
      }
      removeCSSTransform(item);

      for( j=0; j<G.tn.getHE().length; j++) {
        switch( G.tn.getHE()[j].name ) {

          case 'imageSplit4':
            var $subCon=item.$getElt('.subcontainer'),
            $lI=item.$getElt('.labelImage'),
            $iC=item.$getElt('.imgContainer');
            $iC.css({position:'absolute'});
            $subCon.css({overflow:'hidden', position:'relative', width:'100%', height:'100%'});
            $subCon.prepend($iC.clone());
            $subCon.prepend(item.$getElt('.imgContainer', true).clone());
            $iC=item.$getElt('.imgContainer', true);
            setElementOnTop('', $iC);

            newCSSTransform(item, 'imgContainer0', $iC.eq(0));
            SetCSSTransform(item, 'imgContainer0');
            newCSSTransform(item, 'imgContainer1', $iC.eq(1));
            SetCSSTransform(item, 'imgContainer1');
            newCSSTransform(item, 'imgContainer2', $iC.eq(2));
            SetCSSTransform(item, 'imgContainer2');
            newCSSTransform(item, 'imgContainer3', $iC.eq(3));
            SetCSSTransform(item, 'imgContainer3');
            break;

          case 'imageSplitVert':
            var $subCon=item.$getElt('.subcontainer'),
            $iC=item.$getElt('.imgContainer');
            $iC.css({position:'absolute'});
            $subCon.css({overflow:'hidden', position:'relative'});  //, width:'100%', height:'100%'});
            $subCon.prepend($iC.clone());
            $iC=item.$getElt('.imgContainer', true);
            setElementOnTop('', $iC);

            newCSSTransform(item, 'imgContainer0', $iC.eq(0));
            SetCSSTransform(item, 'imgContainer0');
            newCSSTransform(item, 'imgContainer1', $iC.eq(1));
            SetCSSTransform(item, 'imgContainer1');
            break;

          case 'labelSplit4':
            var $subCon=item.$getElt('.subcontainer'),
            $lI=item.$getElt('.labelImage').css({top:0, bottom:0});
            $subCon.css({overflow:'hidden', position:'relative'});
            $lI.clone().appendTo($subCon);
            item.$getElt('.labelImage',true).clone().appendTo($subCon);
            $lI=item.$getElt('.labelImage',true);

            newCSSTransform(item, 'labelImage0', $lI.eq(0));
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'labelImage1', $lI.eq(1));
            SetCSSTransform(item, 'labelImage1');
            newCSSTransform(item, 'labelImage2', $lI.eq(2));
            SetCSSTransform(item, 'labelImage2');
            newCSSTransform(item, 'labelImage3', $lI.eq(3));
            SetCSSTransform(item, 'labelImage3');

            break;

          case 'labelSplitVert':
            var $subCon=item.$getElt('.subcontainer'),
            $lI=item.$getElt('.labelImage');
            $subCon.css({overflow:'hidden', position:'relative'});
            $lI.clone().appendTo($subCon);
            $lI=item.$getElt('.labelImage',true);

            newCSSTransform(item, 'labelImage0', $lI.eq(0));
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'labelImage1', $lI.eq(1));
            SetCSSTransform(item, 'labelImage1');
            break;

          case 'labelAppearSplit4':
            var $subCon=item.$getElt('.subcontainer');
            $lI=item.$getElt('.labelImage'),
            $lI.css({left:0, top:0, right:0, bottom:0});
            $subCon.css({overflow:'hidden', position:'relative'});
            $lI.clone().appendTo($subCon);
            item.$getElt('.labelImage',true).clone().appendTo($subCon);
            $lI=item.$getElt('.labelImage',true);

            var o=newCSSTransform(item, 'labelImage0', $lI.eq(0));
            o.translateX=-item.thumbFullWidth/2;
            o.translateY=-item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage0');
            o=newCSSTransform(item, 'labelImage1', $lI.eq(1));
            o.translateX=item.thumbFullWidth/2;
            o.translateY=-item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage1');
            o=newCSSTransform(item, 'labelImage2', $lI.eq(2));
            o.translateX=item.thumbFullWidth/2;
            o.translateY=item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage2');
            o=newCSSTransform(item, 'labelImage3', $lI.eq(3));
            o.translateX=-item.thumbFullWidth/2;
            o.translateY=item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage3');

            break;

          case 'labelAppearSplitVert':
            var $subCon=item.$getElt('.subcontainer'),
            $lI=item.$getElt('.labelImage');
            $subCon.css({overflow:'hidden', position:'relative'});
            $lI.clone().appendTo($subCon);
            $lI=item.$getElt('.labelImage',true);

            newCSSTransform(item, 'labelImage0', $lI.eq(0)).translateX=-item.thumbFullWidth/2;
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'labelImage1', $lI.eq(1)).translateX=item.thumbFullWidth/2;
            SetCSSTransform(item, 'labelImage1');
            break;

          case 'imageScale150Outside':
            G.$E.base.css({overflow: 'visible'});
            G.$E.conTn.css({overflow: 'visible'});
            $e.css({overflow: 'visible'});
            item.$getElt('.subcontainer').css({overflow: 'visible'});
            item.$getElt('.imgContainer').css({overflow: 'visible'});
            newCSSTransform(item, 'img0', item.$getElt('img'));
            SetCSSTransform(item, 'img0');
            setElementOnTop(item.$getElt('.imgContainer'), item.$getElt('.labelImage'));
            break;

          case 'scale120':
            if( !G.$E.base.hasClass('fullpage') ) {
              G.$E.base.css({overflow: 'visible'});
            }
            G.$E.conTn.css({overflow: 'visible'});
            newCSSTransform(item, 'base', $e);
            SetCSSTransform(item, 'base');
            break;

          case 'scaleLabelOverImage':
            var $t=item.$getElt('.imgContainer');
            var $l=item.$getElt('.labelImage');
            setElementOnTop($t, $l);
            $l.css({opacity:0});

            newCSSTransform(item, 'labelImage0', $l).scale=50;
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'overScale':
            $e.css({overflow: 'hidden'});
            var $t=item.$getElt('.imgContainer');
            var $l=item.$getElt('.labelImage');
            setElementOnTop('', $l);
            $l.css({opacity:0});
            $t.css({ opacity: 1});

            newCSSTransform(item, 'labelImage0', $l).scale=150;
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'overScaleOutside':
            if( !G.$E.base.hasClass('fullpage') ) {
              G.$E.base.css({overflow: 'visible'});
            }
            G.$E.conTn.css({overflow: 'visible'});
            $e.css({overflow: 'visible'});
            var $t=item.$getElt('.imgContainer');
            var $l=item.$getElt('.labelImage');
            setElementOnTop('', $l);
            $l.css({opacity:0 });
            $t.css({ opacity: 1});

            newCSSTransform(item, 'labelImage0', $l).scale=150;
            SetCSSTransform(item, 'labelImage0');
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'rotateCornerBL':
            $e.css({overflow: 'hidden'});
            var $t=item.$getElt('.labelImage');
            $t.css({opacity:1});
            $t[0].style[G.CSStransformName+'Origin'] = '100% 100%';
            newCSSTransform(item, 'labelImage0', $t).rotateZ=-90;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t[0].style[G.CSStransformName+'Origin'] = '100% 100%';;
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'rotateCornerBR':
            $e.css({overflow: 'hidden'});
            var $t=item.$getElt('.labelImage');
            $t.css({opacity:1});
            $t[0].style[G.CSStransformName+'Origin'] = '0% 100%';
            newCSSTransform(item, 'labelImage0', $t).rotateZ=90;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t[0].style[G.CSStransformName+'Origin'] = '0 100%';
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'imageRotateCornerBL':
            var $t=item.$getElt('.imgContainer');
            setElementOnTop($e, $t);
            $e.css({overflow: 'hidden'});
            item.$getElt('.labelImage').css({opacity: 1});
            $t[0].style[G.CSStransformName+'Origin'] = 'bottom right';
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'imageRotateCornerBR':
            var $t=item.$getElt('.imgContainer');
            setElementOnTop($e, $t);
            $e.css({overflow: 'hidden'});
            item.$getElt('.labelImage').css({opacity: 1});
            $t[0].style[G.CSStransformName+'Origin'] = '0 100%';
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'slideUp':
            $e.css({overflow: 'hidden'});
            $t=item.$getElt('.labelImage');
            $t.css({opacity:1, top:0});
            newCSSTransform(item, 'labelImage0',$t).translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t.css({left:0, top:0});
            newCSSTransform(item, 'imgContainer0',$t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'slideDown':
            $e.css({overflow: 'hidden'});
            $t=item.$getElt('.labelImage');
            $t.css({opacity:1, top:0});
            newCSSTransform(item, 'labelImage0',$t).translateY=-item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t.css({left:0, top:0});
            newCSSTransform(item, 'imgContainer0',$t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'slideRight':
            $e.css({overflow: 'hidden'});
            $t=item.$getElt('.labelImage');
            $t.css({opacity:1, top:0});
            newCSSTransform(item, 'labelImage0',$t).translateX=-item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t.css({left:0, top:0});
            newCSSTransform(item, 'imgContainer0',$t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'slideLeft':
            $e.css({overflow: 'hidden'});
            $t=item.$getElt('.labelImage');
            $t.css({opacity:1, top:0});
            newCSSTransform(item, 'labelImage0',$t).translateX=item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            $t=item.$getElt('.imgContainer');
            $t.css({left:0, top:0});
            newCSSTransform(item, 'imgContainer0',$t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'imageSlideUp':
          case 'imageSlideDown':
          case 'imageSlideRight':
          case 'imageSlideLeft':
            $t=item.$getElt('.imgContainer');
            setElementOnTop($e, $t);
            $e.css({overflow: 'visible'});
            item.$getElt('.labelImage').css({opacity: 1});
            $t.css({left:0, top:0});
            newCSSTransform(item, 'imgContainer0',$t);
            SetCSSTransform(item, 'imgContainer0');
            break;

          case 'labelAppear':
          case 'labelAppear75':
            var c='rgb('+G.custGlobals.oldLabelRed+','+G.custGlobals.oldLabelGreen+','+G.custGlobals.oldLabelBlue+',0.01)';
            item.$getElt('.labelImage').css({backgroundColor: c});
            //item.$getElt('.labelImage')[0].style.setProperty( 'backgroundColor',c, 'important' );
            if( item.kind == 'album' ) {
              item.$getElt('.labelFolderTitle').css({opacity: 0});
            }
            else {
              item.$getElt('.labelImageTitle').css({opacity: 0});
            }
            item.$getElt('.labelDescription').css({opacity: 0});
            break;

          case 'descriptionAppear':
            item.$getElt('.labelDescription').css({opacity: 0});
            break;

          case 'labelSlideUpTop':
            $e.css({overflow: 'hidden'});
            item.$getElt('.labelImage').css({top:0, bottom:0});
            newCSSTransform(item, 'labelImage0',item.$getElt('.labelImage')).translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'labelSlideUp':
            $e.css({overflow: 'hidden'});
            newCSSTransform(item, 'labelImage0',item.$getElt('.labelImage')).translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'labelSlideDown':
            $e.css({overflow: 'hidden'});
            newCSSTransform(item, 'labelImage0',item.$getElt('.labelImage')).translateY=-item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'descriptionSlideUp':
            $e.css({overflow: 'hidden'});
            var lh=(item.kind == 'album' ? item.$getElt('.labelFolderTitle').outerHeight(true) : item.$getElt('.labelImageTitle').outerHeight(true));
            item.$getElt('.labelDescription').css({opacity:0});
            item.$getElt('.labelImage').css({height:lh});
            newCSSTransform(item, 'labelImage0',item.$getElt('.labelImage'));//.translateY=-lh;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'imageExplode':
            // G.$E.base.css('overflow', 'visible');
            // G.$E.conTn.css('overflow', 'visible');
            // $e.css('overflow', 'visible');

            setElementOnTop( '', $e);
            setElementOnTop( item.$getElt('.labelImage'), item.$getElt('.imgContainer'));
            var $subCon=item.$getElt('.subcontainer'),
            n=7,
            th=item.thumbFullHeight,      //$e.outerHeight(true);
            $iC=item.$getElt('.imgContainer'),
            w=$iC.outerWidth(true)/n,
            h=$iC.outerHeight(true),
            h=$iC.outerHeight(true)/n;
            for(var r=0; r<n; r++ ) {
              for(var c=0; c<n; c++ ) {
                var s='rect('+h*r+'px, '+w*(c+1)+'px, '+h*(r+1)+'px, '+w*c+'px)';
                $iC.clone().appendTo($subCon).css({top:0, scale:1, clip:s, left:0, position:'absolute'}).data('ngScale',1);
              }
            }
            $iC.remove();
            break;

          case 'imageFlipHorizontal':
            switch( G.O.thumbnailLabel.get('position') ){
              case 'overImageOnTop':
                item.$getElt('.labelImage').css({top:-G.tn.imgcBorderHeight/2, bottom:G.tn.imgcBorderWidth/2, left:0, right:0 });
                break;
              case 'overImageOnMiddle':
                item.$getElt('.labelImage').css({top:-G.tn.imgcBorderHeight/2, bottom:G.tn.imgcBorderWidth/2, left:0, right:0});
                break;
              case 'overImageOnBottom':
              default :
                item.$getElt('.labelImage').css({bottom:G.tn.imgcBorderWidth/2, left:0, right:0});
                break;
            }
            if( !G.$E.base.hasClass('fullpage') ) {
              G.$E.base.css({overflow: 'visible'});
            }
            G.$E.conTn.css({overflow: 'visible'});
            $e.css({overflow: 'visible'});
            setElementOnTop( '', $e);
            setElementOnTop( item.$getElt('.labelImage'), item.$getElt('.imgContainer'));
            var $t=item.$getElt('.subcontainer');
            $t.css({overflow: 'visible'});
            $t[0].style[G.CSStransformStyle] = 'preserve-3d'
            var n= Math.round(item.thumbFullHeight*1.2) + 'px';
            $t[0].style[G.CSSperspective] = n;


            // item.$getElt('.imgContainer').data('ngRotateX','0');
            $t=item.$getElt('.imgContainer');
            $t[0].style[G.CSSbackfaceVisibilityName]= 'hidden';
            // $t[0].style[G.CSStransformName]= 'rotateX:(0deg)';
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');

            $e.find('.image')[0].style[G.CSSbackfaceVisibilityName] = 'hidden';

            // item.$getElt('.labelImage').data('ngRotateX','180');
            $t=item.$getElt('.labelImage');
            $t[0].style[G.CSSbackfaceVisibilityName] = 'hidden';
            // $t[0].style[G.CSStransformName] = 'rotateX(180deg)';
            newCSSTransform(item, 'labelImage0',$t).rotateX=180;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'imageFlipVertical':
            switch( G.O.thumbnailLabel.get('position') ){
              case 'overImageOnTop':
                item.$getElt('.labelImage').css({top:-G.tn.imgcBorderHeight/2, bottom:G.tn.imgcBorderWidth/2, left:0, right:0 });
                break;
              case 'overImageOnMiddle':
                item.$getElt('.labelImage').css({top:-G.tn.imgcBorderHeight/2, bottom:G.tn.imgcBorderWidth/2, left:0, right:0});
                break;
              case 'overImageOnBottom':
              default :
                item.$getElt('.labelImage').css({bottom:G.tn.imgcBorderWidth/2, left:0, right:0});
                break;
            }
            if( !G.$E.base.hasClass('fullpage') ) {
              G.$E.base.css({overflow: 'visible'});
            }
            G.$E.conTn.css({overflow: 'visible'});
            $e.css({overflow: 'visible'});
            setElementOnTop( '', $e);
            setElementOnTop( item.$getElt('.labelImage'), item.$getElt('.imgContainer'));
            var $t=item.$getElt('.subcontainer');
            $t.css({overflow: 'visible'});
            $t[0].style[G.CSStransformStyle] = 'preserve-3d'
            var n= Math.round(item.thumbFullWidth*1.2) + 'px';
            $t[0].style[G.CSSperspective] = n;

            $t=item.$getElt('.imgContainer');
            $t[0].style[G.CSSbackfaceVisibilityName]= 'hidden';
            newCSSTransform(item, 'imgContainer0', $t);
            SetCSSTransform(item, 'imgContainer0');

            $e.find('.image')[0].style[G.CSSbackfaceVisibilityName] = 'hidden';

            $t=item.$getElt('.labelImage');
            $t[0].style[G.CSSbackfaceVisibilityName] = 'hidden';
            newCSSTransform(item, 'labelImage0',$t).rotateY=180;
            SetCSSTransform(item, 'labelImage0');

            break;

          // case 'flipHorizontal':  // ONLY TO TEST --> hover issue
            // var n= Math.round(item.thumbFullHeight*1.2) + 'px';
            // item.$getElt('.labelImage').css({ perspective: n, rotateX: '180deg', 'backface-visibility': 'hidden', 'opacity':'1', 'height':'100%' });
            // break;

          // case 'flipVertical':  // OONLY TO TEST --> hover issue
            // var n= Math.round(item.thumbFullWidth*1.2) + 'px';
            // item.$getElt('.subcontainer').css({ perspective: n, rotateY: '0deg'});
            // item.$getElt('.labelImage').css({ perspective: n, rotateY: '180deg', 'backface-visibility': 'hidden', 'opacity':'1', 'height':'100%' });
            // break;

          case 'imageScale150':
            $e.css({overflow: 'hidden'});
            newCSSTransform(item, 'img0', item.$getElt('img'));
            SetCSSTransform(item, 'img0');
            break;

          case 'imageScaleIn80':
            $e.css({overflow: 'hidden'});
            newCSSTransform(item, 'img0', item.$getElt('img')).scale=120;
            SetCSSTransform(item, 'img0');
            break;

          case 'imageSlide2Up':
          case 'imageSlide2Down':
          case 'imageSlide2Left':
          case 'imageSlide2Right':
          case 'imageSlide2UpRight':
          case 'imageSlide2UpLeft':
          case 'imageSlide2DownRight':
          case 'imageSlide2DownLeft':
            $e.css({overflow:'hidden'});
            item.customData.hoverEffectRDir=G.tn.getHE()[j].name;
            ThumbnailInitImageSlide($e, item);
            break;

          case 'imageSlide2Random':
            $e.css({overflow:'hidden'});
            var dir= ['imageSlide2Up','imageSlide2Down','imageSlide2Left','imageSlide2Left','imageSlide2UpRight','imageSlide2UpLeft','imageSlide2DownRight','imageSlide2DownLeft'];
            item.customData.hoverEffectRDir=dir[Math.floor(Math.random()*dir.length)];
            ThumbnailInitImageSlide($e, item);
            break;
        }
      }
      item.hoverInitDone=true;

    }

    function ThumbnailInitImageSlide( $e, item ) {
      // var w=item.thumbImgWidth;    //$e.outerWidth(true),
      // h=item.thumbImg().height,       //$e.outerHeight(true);
      var w=item.thumbFullWidth,    //$e.outerWidth(true),
      h=item.thumbFullHeight,       //$e.outerHeight(true);
      c=null;
      var t=newCSSTransform(item, 'img0', item.$getElt('img'));
      t.scale=140;
      switch( item.customData.hoverEffectRDir ){
        case 'imageSlide2Up':
          // c={top:h*.1, left: -w*.1};
          // t.translateY=h*.1;
          // t.translateX=-w*.1;
          t.translateY= item.thumbFullHeight < (item.thumbImg().height*1.4) ? ((item.thumbImg().height*1.4)-item.thumbFullHeight)/2 : 0;
          t.translateX= item.thumbFullWidth < (item.thumbImg().width*1.4) ? -((item.thumbImg().width*1.4)-item.thumbFullWidth)/2 : 0;
          break;
        case 'imageSlide2Down':
          // c={top:-h*.1, left: -w*.1};
          // t.translateY=-h*.1;
          var tY=item.thumbFullHeight < (item.thumbImg().height*1.4) ? Math.min(((item.thumbImg().height*1.4)-item.thumbFullHeight)/2*.1,h*.1) : 0;
          t.translateY = -tY;
          var tX=item.thumbFullWidth < (item.thumbImg().width*1.4) ? Math.min(((item.thumbImg().width*1.4)-item.thumbFullWidth)/2*.1,w*.1) : 0;
          t.translateX = tX;
          break;
        case 'imageSlide2Left':
          // c={top:-h*.1, left: w*.1};
          t.translateY=-h*.1;
          t.translateX=w*.1;
          break;
        case 'imageSlide2Right':
          // c={top:-h*.1, left: -w*.1};
          t.translateY=-h*.1;
          t.translateX=-w*.1;
          break;

        case 'imageSlide2UpRight':
          // c={top:h*.05, left: -w*.05};
          t.translateY=h*.05;
          t.translateX=-w*.05;
          break;
        case 'imageSlide2UpLeft':
          // c={top:h*.05, left: w*.05};
          t.translateY=h*.05;
          t.translateX=w*.05;
          break;
        case 'imageSlide2DownRight':
          // c={top:-h*.05, left: -w*.05};
          t.translateY=-h*.05;
          t.translateX=-w*.05;
          break;
        case 'imageSlide2DownLeft':
          // c={top:-h*.05, left: w*.05};
          t.translateY=-h*.05;
          t.translateX=w*.05;
          break;
      }
      SetCSSTransform(item, 'img0');
      //item.$getElt('.subcontainer').width(w).height(h);
      // $e.find('img').css({'max-width':w*1.5, 'max-height':h*1.5});
      // $e.find('img')[0].style[G.CSStransformName] = 'scale(1.4)';
      // $e.find('img').css(c);  //.css({'width':w*1.5, 'height':h*1.5});
      //item.$getElt('.imgContainer').css(c).css({'width':w*1.5, 'height':h*1.5});
    }


    function ThumbnailOverResize( $e ) {
      var n=$e.data("index");
      if( n == undefined ) { return; }    // required because can be fired on ghost elements
      var item=G.I[n];
      if( !item.hoverInitDone ) {
        ThumbnailOverInit($e);
        return;
      }
      if( typeof G.O.fnThumbnailHoverResize == 'function' ) {
        G.O.fnThumbnailHoverResize($e, item, ExposedObjects() );
      }
      for( j=0; j<G.tn.getHE().length; j++) {
        switch( G.tn.getHE()[j].name ) {
          case 'imageSplit4':
            var w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight,
            $iC=item.$getElt('.imgContainer'),
            s='rect(0px, '+Math.ceil(w/2)+'px, '+Math.ceil(h/2)+'px, 0px)';
            $iC.eq(0).css({ clip:s});
            s='rect(0px, '+w+'px, '+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px)';
            $iC.eq(1).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $iC.eq(2).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $iC.eq(3).css({ clip:s });
            break;

          case 'imageSplitVert':
            var $iC=item.$getElt('.imgContainer'),
            w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight,
            s='rect(0px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $iC.eq(0).css({ clip:s });
            s='rect(0px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $iC.eq(1).css({clip:s });
            break;

          case 'labelSplit4':
            var w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight,
            $lI=item.$getElt('.labelImage');
            s='rect(0px, '+Math.ceil(w/2)+'px, '+Math.ceil(h/2)+'px, 0px)',
            $lI.eq(0).css({ clip:s });
            s='rect(0px, '+w+'px, '+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(1).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(2).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $lI.eq(3).css({ clip:s });
            break;

          case 'labelSplitVert':
            var w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight,
            $lI=item.$getElt('.labelImage');
            var s='rect(0px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $lI.eq(0).css({ clip:s});
            s='rect(0px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(1).css({ clip:s});
            break;

          case 'labelAppearSplit4':
            var w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight;
            $lI=item.$getElt('.labelImage');
            var s='rect(0px, '+Math.ceil(w/2)+'px, '+Math.ceil(h/2)+'px, 0px)';
            $lI.eq(0).css({ clip:s });
            s='rect(0px, '+w+'px, '+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(1).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(2).css({ clip:s });
            s='rect('+Math.ceil(h/2)+'px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $lI.eq(3).css({ clip:s });


            item.eltTransform['labelImage0'].translateX=-item.thumbFullWidth/2;
            item.eltTransform['labelImage0'].translateY=-item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage0');
            item.eltTransform['labelImage1'].translateX=item.thumbFullWidth/2;
            item.eltTransform['labelImage1'].translateY=-item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage1');
            item.eltTransform['labelImage2'].translateX=item.thumbFullWidth/2;
            item.eltTransform['labelImage2'].translateY=item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage2');
            item.eltTransform['labelImage3'].translateX=-item.thumbFullWidth/2;
            item.eltTransform['labelImage3'].translateY=item.thumbFullHeight/2;
            SetCSSTransform(item, 'labelImage3');
            break;

          case 'labelAppearSplitVert':
            var w=item.thumbFullWidth-G.tn.borderWidth-G.tn.imgcBorderWidth,
            h=item.thumbFullHeight-G.tn.borderHeight-G.tn.imgcBorderHeight;
            $lI=item.$getElt('.labelImage');
            var s='rect(0px, '+Math.ceil(w/2)+'px, '+h+'px, 0px)';
            $lI.eq(0).css({ clip:s});
            s='rect(0px, '+w+'px, '+h+'px, '+Math.ceil(w/2)+'px)';
            $lI.eq(1).css({ clip:s});
            item.eltTransform['labelImage0'].translateX=-item.thumbFullWidth/2;
            SetCSSTransform(item, 'labelImage0');
            item.eltTransform['labelImage1'].translateX=item.thumbFullWidth/2;
            SetCSSTransform(item, 'labelImage1');

            break;
            item.transformLabelImage[0].translateX=-item.thumbFullWidth/2;
            SetCSSTransform($lI.eq(0),item.transformLabelImage[0]);
            item.transformLabelImage[1].translateX=item.thumbFullWidth/2;
            SetCSSTransform($lI.eq(1),item.transformLabelImage[1]);
            break;

          case 'slideUp':
            // item.$getElt('.labelImage').css({top:item.thumbFullHeight});
            item.eltTransform['labelImage0'].translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'slideDown':
            // item.$getElt('.labelImage').css({bottom:item.thumbFullHeight});  //, 'background':'none'});
            item.eltTransform['labelImage0'].translateY=-item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'slideRight':
            // item.$getElt('.labelImage').css({left:-item.thumbFullWidth});
            item.eltTransform['labelImage0'].translateX=-item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'slideLeft':
            // item.$getElt('.labelImage').css({left:item.thumbFullWidth});
            item.eltTransform['labelImage0'].translateX=item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'imageExplode':
            var $subCon=item.$getElt('.subcontainer'),
            $iC=item.$getElt('.imgContainer'),
            n=Math.sqrt($iC.length),
            w=$iC.eq(0).outerWidth(true)/n,
            h=$iC.eq(0).outerHeight(true)/n,
            i=0;
            for(var r=0; r<n; r++ ) {
              for(var c=0; c<n; c++ ) {
                var s='rect('+h*r+'px, '+w*(c+1)+'px, '+h*(r+1)+'px, '+w*c+'px)';
                //$iC.eq(i++).css({ 'clip':s });
              }
            }
            break;

          case 'imageFlipHorizontal':
            var $t=item.$getElt('.subcontainer');
            var n= Math.round(item.thumbFullHeight*1.2) + 'px';
            $t[0].style[G.CSSperspective] = n;
            // item.$getElt('.imgContainer').css({perspective: n, rotateX: '0deg', 'backface-visibility': 'hidden'});
            // item.$getElt('.labelImage').css({ perspective: n, rotateX: '180deg', 'backface-visibility': 'hidden','height':item.thumbFullHeight,'opacity':'1' });
            break;

          case 'imageFlipVertical':
            var $t=item.$getElt('.subcontainer');
            var n= Math.round(item.thumbFullWidth*1.2) + 'px';
            $t[0].style[G.CSSperspective] = n;
            //item.$getElt('.imgContainer').css({perspective: n, rotateY: '0deg', 'backface-visibility': 'hidden'});
            //item.$getElt('.labelImage').css({ perspective: n, rotateY: '180deg', 'backface-visibility': 'hidden','height':item.thumbFullHeight,'opacity':'1' });
            break;

          case 'imageSlide2Up':
          case 'imageSlide2Down':
          case 'imageSlide2Left':
          case 'imageSlide2Right':
          case 'imageSlide2UpRight':
          case 'imageSlide2UpLeft':
          case 'imageSlide2DownRight':
          case 'imageSlide2DownLeft':
          case 'imageSlide2Random':
            ThumbnailInitImageSlide($e, item );
            break;

          case 'slideUp':
            item.eltTransform['labelImage0'].translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;
          case 'slideDown':
            item.eltTransform['labelImage0'].translateY=-item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;
          case 'slideRight':
            item.eltTransform['labelImage0'].translateX=-item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            break;
          case 'slideLeft':
            item.eltTransform['labelImage0'].translateX=item.thumbFullWidth;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'labelSlideUpTop':
          case 'labelSlideUp':
            item.eltTransform['labelImage0'].translateY=item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'labelSlideDown':
            $e.css({overflow: 'hidden'});
            // item.$getElt('.labelImage').css({top:-item.thumbFullHeight, bottom:''});
            item.eltTransform['labelImage0'].translateY=-item.thumbFullHeight;
            SetCSSTransform(item, 'labelImage0');
            break;

          case 'descriptionSlideUp':
            // var lh=(item.kind == 'album' ? item.$getElt('.labelFolderTitle').outerHeight(true) : item.$getElt('.labelImageTitle').outerHeight(true));
            // var p=item.thumbFullHeight - lh -G.tn.borderHeight-G.tn.imgcBorderHeight;
            // var lh2=item.$getElt('.labelDescription').outerHeight(true);
            //item.eltTransform['labelImage0'].translateY=lh2;
            //SetCSSTransform(item, 'labelImage0');


        }
      }

    };



    function newCSSTransform(item, eltClass, $e) {
      if( item.eltTransform[eltClass] == undefined ) {
        item.eltTransform[eltClass]=InitCSSTransform();
        item.eltTransform[eltClass].$elt=$e;
      }
      return item.eltTransform[eltClass];
    }

    function removeCSSTransform(item) {
       for (var p in item.eltTransform) {
          delete item.eltTransform[p];
       }
    }

    function InitCSSTransform() {
      var obj={translateX:0, translateY:0, rotateX:0, rotateY:0, rotateZ:0, scale:100};
      return obj;
    }

    function SetCSSTransform(item, objClass) {
      var obj=item.eltTransform[objClass];
      // var v = 'translateX('+obj.translateX+'px) translateY('+obj.translateY+'px)  scale('+obj.scale/100+')';
      var v = 'translateX('+obj.translateX+'px) translateY('+obj.translateY+'px) scale('+obj.scale/100+')';
      if( !(G.IE <= 9) && !G.isGingerbread ) {
        v += ' rotateX('+obj.rotateX+'deg) rotateY('+obj.rotateY+'deg) rotateZ('+obj.rotateZ+'deg)';
      }
      else {
        v += ' rotate('+obj.rotateZ+'deg)';
      }
      if( obj.$elt[0] != undefined ) {
        obj.$elt[0].style[G.CSStransformName]= v;
      }
    }


    // ANIMATION OF ONE THUMBNAIL ELEMENT
    function TnAni( $e, n, anime, item, eltClass) {

      // STEP 1: animate CSS transform
      var transform=['translateX','translateY', 'scale', 'rotateX', 'rotateY', 'rotateZ'];
      if( G.aengine == 'animate' ) {
        for( var i=0; i<transform.length; i++ ) {
          var tf=transform[i];
          if( typeof  anime[tf] !== 'undefined' ) {
            var tweenable = new NGTweenable();
            var to=parseInt(anime[tf]);
            tweenable.tween({
              attachment: { it: item, eC: eltClass, t:tf, f:to},
              from: { 'v': parseInt(item.eltTransform[eltClass][tf])  },
              to: { 'v': to },
              duration: G.tn.getHE()[n].duration,
              delay: G.tn.getHE()[n].delay,
              step: function (state, att) {
                if( att.it.hovered ) {
                  att.it.eltTransform[att.eC][att.t]=state.v;
                  SetCSSTransform(att.it, att.eC);
                }
              },
              finish: function (state, att) {
                if( att.it.hovered ) {
                  att.it.eltTransform[att.eC][att.t]=att.f;
                  SetCSSTransform(att.it, att.eC);
                }
              }
            });
            delete anime[tf];
          }
        }
      }

      // is there something else to animate?
      var l = 0;
      for( var key in anime ) {
        if( anime.hasOwnProperty(key) ) {
          l++;
          break;
        }
      }
      if( l == 0 ) {
        return;
      }

      // STEP 2: remaining animations
      if( G.aengine != 'transition' ) {
        // retrieve the 'from' values
        var fr={};
        for( var key in anime) {
          if( key == 'borderColor' ) {
            // borderColor is not supported in Firefox
            fr[key]=$e.css('borderTopColor');
          }
          else {
            fr[key]=$e.css(key);
          }
          if( fr[key] == 'transparent' ) {  // some browser return "transparent" as rgba(0,0,0,0),
            if( $e.hasClass('labelImage') ) {
              fr[key]='rgb('+G.custGlobals.oldLabelRed+','+G.custGlobals.oldLabelGreen+','+G.custGlobals.oldLabelBlue+',0.01)';
            }
            else {
              fr[key]='rgba(0,0,0,0)';
            }
          }
        }
        var tweenable = new NGTweenable();
        tweenable.tween({
          attachment: { $e:$e, it:item, to:anime},
          from: fr,
          to: anime,
          duration: G.tn.getHE()[n].duration,
          delay: G.tn.getHE()[n].delay,
          step: function (state, att) {
            if( att.it.hovered ) {
              att.$e.css(state);
            }
          },
          finish: function (state, att) {
            if( att.it.hovered ) {
              att.$e.css(anime);
            }
          }
        });
      }
      else {
        if( G.tn.getHE()[n].delay > 0 ) {
          // transit has a bug on queue --> we do not use it
          $e.delay(G.tn.getHE()[n].delay)[G.aengine](anime, G.tn.getHE()[n].duration , G.tn.getHE()[n].easing );
        }
        else {
          // transit has a bug on queue --> we do not use it
          //anime.queue=false;
          //anime.duration=5000;
          $e[G.aengine](anime, G.tn.getHE()[n].duration, G.tn.getHE()[n].easing );
        }
      }
    }


    function ThumbnailHover( $e ) {

      var n=$e.data('index');
      if( n == undefined ) { return; }    // required because can be fired on ghost elements
      if( G.aengine == 'velocity' ) {
        $e.find('*').velocity('stop', true);
      }
      else {
        $e.find('*').stop(true,false);
      }
      var item=G.I[n];
      item.hovered=true;
      var dscale=(G.aengine == 'animate' ? 1 : 100);

      if( typeof G.O.fnThumbnailHover == 'function' ) {
        G.O.fnThumbnailHover($e, item, ExposedObjects());
      }

      try {
        for( j=0; j<G.tn.getHE().length; j++) {
          switch(G.tn.getHE()[j].name ) {
            case 'imageSplit4':
              var $t=item.$getElt('.imgContainer');
              TnAni($t.eq(0), j, {translateX:-item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'imgContainer0' );
              TnAni($t.eq(1), j, {translateX:item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'imgContainer1' );
              TnAni($t.eq(2), j, {translateX:item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'imgContainer2' );
              TnAni($t.eq(3), j, {translateX:-item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'imgContainer3' );
              break;

            case 'imageSplitVert':
              var $t=item.$getElt('.imgContainer');
              TnAni($t.eq(0), j, {translateX:-item.thumbFullWidth/2}, item, 'imgContainer0' );
              TnAni($t.eq(1), j, {translateX:item.thumbFullWidth/2}, item, 'imgContainer1' );
              break;

            case 'labelSplit4':
              var $t=item.$getElt('.labelImage');
              TnAni($t.eq(0), j, {translateX:-item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'labelImage0' );
              TnAni($t.eq(1), j, {translateX:item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'labelImage1' );
              TnAni($t.eq(2), j, {translateX:item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'labelImage2' );
              TnAni($t.eq(3), j, {translateX:-item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'labelImage3' );
              break;

            case 'labelSplitVert':
              var $t=item.$getElt('.labelImage');
              TnAni($t.eq(0), j, {translateX:-item.thumbFullWidth/2}, item, 'labelImage0' );
              TnAni($t.eq(1), j, {translateX:item.thumbFullWidth/2}, item, 'labelImage1' );
              break;

            case 'labelAppearSplit4':
              var $t=item.$getElt('.labelImage');
              TnAni($t.eq(0), j, {translateX:0, translateY:0}, item, 'labelImage0' );
              TnAni($t.eq(1), j, {translateX:0, translateY:0}, item, 'labelImage1' );
              TnAni($t.eq(2), j, {translateX:0, translateY:0}, item, 'labelImage2' );
              TnAni($t.eq(3), j, {translateX:0, translateY:0}, item, 'labelImage3' );
              break;

            case 'labelAppearSplitVert':
              var $t=item.$getElt('.labelImage');
              TnAni($t.eq(0), j, {translateX:0}, item, 'labelImage0' );
              TnAni($t.eq(1), j, {translateX:0}, item, 'labelImage1' );
              break;

            case 'scaleLabelOverImage':
              TnAni(item.$getElt('.labelImage'), j, { scale:100/dscale, opacity: '1'}, item, 'labelImage0' );
              TnAni(item.$getElt('.imgContainer'), j, { scale:50/dscale}, item, 'imgContainer0' );
              break;

            case 'overScale':
            case 'overScaleOutside':
              TnAni(item.$getElt('.labelImage'), j, { opacity: '1', scale:100/dscale}, item, 'labelImage0' );
              TnAni(item.$getElt('.imgContainer'), j, { opacity: '0', scale:50/dscale}, item, 'imgContainer0' );
              break;

            case 'imageInvisible':
              TnAni(item.$getElt('.imgContainer'), j, { opacity: '0'}, item );
              break;

            case 'rotateCornerBL':
              var r=(G.aengine=='transition'?{rotate:'0deg'}:{rotateZ:'0'});
              TnAni(item.$getElt('.labelImage'), j, r, item, 'labelImage0' );
              r=(G.aengine=='transition'?{rotate:'90deg'}:{rotateZ:'90'});
              TnAni(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'rotateCornerBR':
              var r=(G.aengine=='transition'?{rotate:'0deg'}:{rotateZ:'0'});
              TnAni(item.$getElt('.labelImage'), j, r, item, 'labelImage0' );
              r=(G.aengine=='transition'?{rotate:'-90deg'}:{rotateZ:'-90'});
              TnAni(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'imageRotateCornerBL':
              var r=(G.aengine=='transition'?{rotate:'90deg'}:{rotateZ:'90'});
              TnAni(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'imageRotateCornerBR':
              var r=(G.aengine=='transition'?{rotate:'-90deg'}:{rotateZ:'-90'});
              TnAni(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'slideUp':
              TnAni(item.$getElt('.imgContainer'), j, { translateY: -item.thumbFullHeight}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { translateY: 0}, item, 'labelImage0' );
              break;

            case 'slideDown':
              TnAni(item.$getElt('.imgContainer'), j, { translateY: item.thumbFullHeight}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { translateY: 0}, item, 'labelImage0' );
              break;

            case 'slideRight':
              TnAni(item.$getElt('.imgContainer'), j, { translateX: item.thumbFullWidth}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { translateX: 0}, item, 'labelImage0' );
              break;

            case 'slideLeft':
              TnAni(item.$getElt('.imgContainer'), j, { translateX: -item.thumbFullWidth}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { translateX: 0}, item, 'labelImage0' );
              break;

            case 'imageSlideUp':
              TnAni(item.$getElt('.imgContainer'), j, { translateY: -item.thumbFullHeight }, item, 'imgContainer0' );
              break;

            case 'imageSlideDown':
              TnAni(item.$getElt('.imgContainer'), j, { translateY: item.thumbFullHeight }, item, 'imgContainer0' );
              break;

            case 'imageSlideLeft':
              TnAni(item.$getElt('.imgContainer'), j, { translateX: -item.thumbFullWidth }, item, 'imgContainer0' );
              break;

            case 'imageSlideRight':
              TnAni(item.$getElt('.imgContainer'), j, { translateX: item.thumbFullWidth }, item, 'imgContainer0' );
              break;

            case 'labelAppear':
              if( G.aengine == 'velocity' ) {
                TnAni(item.$getElt('.labelImage'), j, { backgroundColorRed:G.custGlobals.oldLabelRed, backgroundColorGreen:G.custGlobals.oldLabelGreen, backgroundColorBlue:G.custGlobals.oldLabelBlue, backgroundColorAlpha:1 }, item );
              }
              else {
                var c='rgba('+G.custGlobals.oldLabelRed+','+G.custGlobals.oldLabelGreen+','+G.custGlobals.oldLabelBlue+',0.99)';    // use 0.99 instead of 1 for opacity because 1=no transparency so jQuery would return RGB instead of RGBA
                TnAni(item.$getElt('.labelImage'), j, { backgroundColor: c}, item );
              }
              if( item.kind == 'album' ) {
                 TnAni(item.$getElt('.labelFolderTitle'), j, { opacity: '1'}, item );
              }
              else {
                TnAni(item.$getElt('.labelImageTitle'), j, { opacity: '1'}, item );
              }
              TnAni(item.$getElt('.labelDescription'), j, { opacity: '1'}, item );
              break;

            case 'labelAppear75':
              if( G.aengine == 'velocity' ) {
                TnAni(item.$getElt('.labelImage'), j, { backgroundColorRed:G.custGlobals.oldLabelRed, backgroundColorGreen:G.custGlobals.oldLabelGreen, backgroundColorBlue:G.custGlobals.oldLabelBlue, backgroundColorAlpha:0.75 }, item );
              }
              else {
                var c='rgba('+G.custGlobals.oldLabelRed+','+G.custGlobals.oldLabelGreen+','+G.custGlobals.oldLabelBlue+',0.75)';
                TnAni(item.$getElt('.labelImage'), j, { backgroundColor: c}, item );
              }
              if( item.kind == 'album' ) {
                TnAni(item.$getElt('.labelFolderTitle'), j, { opacity: '1'}, item );
              }
              else {
                TnAni(item.$getElt('.labelImageTitle'), j, { opacity: '1'}, item );
              }
              TnAni(item.$getElt('.labelDescription'), j, { opacity: '1'}, item );
              break;

            case 'descriptionAppear':
              TnAni(item.$getElt('.labelDescription'), j, { opacity: '1'}, item );
              break;

            case 'labelSlideDown':
              TnAni(item.$getElt('.labelImage'), j, { translateY: 0}, item, 'labelImage0' );
              break;

            case 'labelSlideUpTop':
            case 'labelSlideUp':
              TnAni(item.$getElt('.labelImage'), j, { translateY: 0}, item, 'labelImage0' );
              break;

            case 'descriptionSlideUp':
              var lh=(item.kind == 'album' ? item.$getElt('.labelFolderTitle').outerHeight(true) : item.$getElt('.labelImageTitle').outerHeight(true));
              var lh2=item.$getElt('.labelDescription').outerHeight(true);
              var p=item.thumbFullHeight - lh -lh2;
              if( p<0 ) { p=0; }
              TnAni(item.$getElt('.labelImage'), j, { translateY:0, height:lh+lh2 }, item, 'labelImage0' );
              TnAni(item.$getElt('.labelDescription'), j, { opacity: '1'}, item );
              break;

            case 'labelOpacity50':
              TnAni(item.$getElt('.labelImage'), j, { opacity: '0.5' }, item );
              break;

            case 'imageOpacity50':
              TnAni(item.$getElt('.imgContainer'), j, { opacity: '0.5' }, item );
              break;

            case 'borderLighter':
              if( G.aengine == 'velocity' ) {
                var colorString=lighterColor(G.custGlobals.oldBorderColor,0.5),
                co = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
                TnAni($e, j, { borderColorRed:co[0], borderColorGreen:co[1], borderColorBlue:co[2], colorAlpha:co[3] }, item );
              }
              else {
                // TnAni($e, j, { borderColor: lighterColor(G.custGlobals.oldBorderColor,0.5) }, item );
                var c=$e.css('borderTopColor');
                $e.data('ngcache_borderColor',c);
                TnAni($e, j, { borderColor: lighterColor(c,0.5) }, item );
              }
              break;

            case 'borderDarker':
              if( G.aengine == 'velocity' ) {
                var colorString=darkerColor(G.custGlobals.oldBorderColor,0.5),
                co = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
                TnAni($e, j, { borderColorRed:co[0], borderColorGreen:co[1], borderColorBlue:co[2], colorAlpha:co[3] }, item );
              }
              else {
                // TnAni($e, j, { borderColor: darkerColor(G.custGlobals.oldBorderColor,0.5) }, item );
                var c=$e.css('borderTopColor');
                $e.data('ngcache_borderColor',c);
                TnAni($e, j, { borderColor: darkerColor(c,0.5) }, item );
              }
              break;

            case 'imageScale150':
              TnAni(item.$getElt('img'), j, { scale: 150/dscale }, item, 'img0' );
              break;

            case 'imageScaleIn80':
              TnAni(item.$getElt('img'), j, { scale: 100/dscale }, item, 'img0' );
              break;

            case 'imageSlide2Up':
            case 'imageSlide2Down':
            case 'imageSlide2Left':
            case 'imageSlide2Right':
            case 'imageSlide2UpRight':
            case 'imageSlide2UpLeft':
            case 'imageSlide2DownRight':
            case 'imageSlide2DownLeft':
            case 'imageSlide2Random':
              switch(item.customData.hoverEffectRDir) {
                case 'imageSlide2Up':
                  var tY=item.thumbFullHeight < (item.imgHeight*1.4) ? ((item.imgHeight*1.4)-item.thumbFullHeight)/2 : 0;
                  TnAni(item.$getElt('img'), j, { translateY: -tY }, item, 'img0' );
                  break;
                case 'imageSlide2Down':
                  var tY=item.thumbFullHeight < (item.imgHeight*1.4) ? ((item.imgHeight*1.4)-item.thumbFullHeight)/2 : 0;
                  TnAni(item.$getElt('img'), j, { translateY: tY }, item, 'img0' );
                  break;
                case 'imageSlide2Left':
                  TnAni(item.$getElt('img'), j, { translateX: -item.thumbFullWidth*.1 }, item, 'img0' );
                  break;
                case 'imageSlide2Right':
                  TnAni(item.$getElt('img'), j, { translateX: item.thumbFullWidth*.1 }, item, 'img0' );
                  break;

                case 'imageSlide2UpRight':
                  TnAni(item.$getElt('img'), j, { translateY: -item.thumbFullHeight*.05, translateX: item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2UpLeft':
                  TnAni(item.$getElt('img'), j, { translateY: -item.thumbFullHeight*.05, translateX: -item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2DownRight':
                  TnAni(item.$getElt('img'), j, { translateY: item.thumbFullHeight*.05, translateX: item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2DownLeft':
                  TnAni(item.$getElt('img'), j, { translateY: item.thumbFullHeight*.05, translateX: -item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
              }
              break;

            case 'imageScale150Outside':
              setElementOnTop('', $e);
              TnAni(item.$getElt('img'), j, { scale: 150/dscale }, item, 'img0');
              break;

            case 'scale120':
              setElementOnTop('', $e);
              TnAni($e, j, { scale: 120/dscale }, item, 'base' );
              break;

            case 'imageExplode':
              setElementOnTop('', $e);
              var $iC=item.$getElt('.imgContainer');
              n=Math.sqrt($iC.length);
              var l = [];
              for(var i=0; i<=Math.PI; i+=Math.PI/(n-1) ){
                l.push(Math.sin(i));
              }
              var w=$iC.outerWidth(true)/n,
              h=$iC.outerHeight(true)/n,
              i=0;
              for(var r=0; r<n; r++ ) {
               for(var c=0; c<n; c++ ) {
                  TnAni($iC.eq(i++), j, { top:((-h*n/3)+h*r-h)*l[c], left:((-w*n/3)+w*c-w)*l[r], scale:1.5, opacity:0}, item );
                }
              }
              break;

            case 'imageFlipHorizontal':
              setElementOnTop('', $e);
              TnAni(item.$getElt('.imgContainer'), j, { rotateX: 180}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { rotateX: 360}, item, 'labelImage0' );
              break;

            case 'imageFlipVertical':
              setElementOnTop('', $e);
              TnAni(item.$getElt('.imgContainer'), j, { rotateY: 180}, item, 'imgContainer0' );
              TnAni(item.$getElt('.labelImage'), j, { rotateY: 360}, item, 'labelImage0' );
              break;

            // case 'flipHorizontal':
              // setElementOnTop('', $e);
              // var n= Math.round(item.thumbFullHeight*1.2) + 'px';
              // TnAni($e, j, { perspective: n, rotateX: '180deg'}, item );
              // break;

            // case 'flipVertical':
              // setElementOnTop('', $e);
              // var n= Math.round(item.thumbFullWidth*1.2) + 'px';
              // TnAni($e, j, { perspective: n, rotateY: '180deg'}, item );
              // break;

            case 'TEST':
              //item.$getElt('img').stop(true, true);
              // TnAni(item.$getElt('.subcontainer'), j, { scale: 80//dscale }, item );
              break;
          }
        }
      }
      catch (e) {
        nanoAlert( 'error on hover ' +e.message );
      }
    };



    function TnAniO( $e, n, anime, item, eltClass) {

      // STEP 1: animate CSS transform
      var transform=['translateX', 'translateY', 'scale', 'rotateX', 'rotateY', 'rotateZ'];
      if( G.aengine == 'animate' ) {
        for( var i=0; i<transform.length; i++ ) {
          var tf=transform[i];
          if( typeof  anime[tf] !== 'undefined' ) {
            var tweenable = new NGTweenable();
            var to=parseInt(anime[tf]);
            tweenable.tween({
              attachment: { it: item, eC: eltClass, t:tf, f:to},
              from: { 'v': parseInt(item.eltTransform[eltClass][tf])  },
              to: { 'v': to },
              duration: G.tn.getHE()[n].durationBack,
              delay: G.tn.getHE()[n].delayBack,
              step: function (state, att) {
                att.it.eltTransform[att.eC][att.t]=state.v;
                SetCSSTransform(att.it, att.eC);
              },
              finish: function (state, att) {
                att.it.eltTransform[att.eC][att.t]=att.f;
                SetCSSTransform(att.it, att.eC);
              }
            });
            delete anime[tf];
          }
        }
      }

      // is there something else to animate?
      var l = 0;
      for( var key in anime ) {
        if( anime.hasOwnProperty(key) ) {
          l++;
          break;
        }
      }
      if( l == 0 ) {
        return;
      }

      // STEP 2: remaining animations
       if( G.aengine != 'transition' ) {
        // retrieve the 'from' values
        var fr={};
        for( var key in anime) {
          if( key == 'borderColor' ) {
            // borderColor is not supported in Firefox
            fr[key]=$e.css('borderTopColor');
          }
          else {
            fr[key]=$e.css(key);
            if( fr[key] == 'transparent' ) {  // some browser return "transparent" as rgba(0,0,0,0)
              fr[key]='rgba(0,0,0,0.01)';
            }
          }
        }
        var tweenable = new NGTweenable();
        tweenable.tween({
          attachment: { $e:$e, it:item, to:anime},
          from: fr,
          to: anime,
          duration: G.tn.getHE()[n].durationBack,
          delay: G.tn.getHE()[n].delayBack,
          step: function (state, att) {
            att.$e.css(state);
          },
          finish: function (state, att) {
            att.$e.css(att.to);
          }
        });
      }
      else {
        if( G.tn.getHE()[n].delay > 0 ) {
          // transit has a bug on queue --> we do not use it
          $e.delay(G.tn.getHE()[n].delay)[G.aengine](anime, G.tn.getHE()[n].durationBack , G.tn.getHE()[n].easingBack );
        }
        else {
          // transit has a bug on queue --> we do not use it
          //anime.queue=false;
          //anime.duration=5000;
          $e[G.aengine](anime, G.tn.getHE()[n].durationBack, G.tn.getHE()[n].easingBack );
        }
      }
    }


    function ThumbnailHoverOut( $e ) {
      if( G.containerViewerDisplayed ) { return; }

      var n=$e.data("index");
      if( n == undefined ) { return; }    // required because can be fired on ghost elements

      if( G.aengine == 'velocity' ) {
        $e.find('*').velocity('stop', true);
      }
      else {
        $e.find('*').filter(":animated").stop(true,false);
      }
      var item=G.I[n];

      item.hovered=false;
      var dscale=(G.aengine == 'animate' ? 1 : 100);

      if( typeof G.O.fnThumbnailHoverOut == 'function' ) {
        G.O.fnThumbnailHoverOut($e, item, ExposedObjects());
      }

      try {
        for( j=0; j<G.tn.getHE().length; j++) {
          switch(G.tn.getHE()[j].name ) {
            case 'imageSplit4':
              var $t=item.$getElt('.imgContainer');
              TnAniO($t.eq(0), j, {translateX:0, translateY:0}, item, 'imgContainer0' );
              TnAniO($t.eq(1), j, {translateX:0, translateY:0}, item, 'imgContainer1' );
              TnAniO($t.eq(2), j, {translateX:0, translateY:0}, item, 'imgContainer2' );
              TnAniO($t.eq(3), j, {translateX:0, translateY:0}, item, 'imgContainer3' );
              break;
              TnAniO($t.eq(0), j, {right:'0%', top:'0%'} );
              TnAniO($t.eq(1), j, {left:'0%', top:'0%'} );
              TnAniO($t.eq(2), j, {left:'0%', bottom:'0%'} );
              TnAniO($t.eq(3), j, {right:'0%', bottom:'0%'} );
              break;

            case 'imageSplitVert':
              var $t=item.$getElt('.imgContainer');
              TnAniO($t.eq(0), j, {translateX:0}, item, 'imgContainer0' );
              TnAniO($t.eq(1), j, {translateX:0}, item, 'imgContainer1' );
              break;

            case 'labelSplit4':
              var $t=item.$getElt('.labelImage');
              TnAniO($t.eq(0), j, {translateX:0, translateY:0}, item, 'labelImage0' );
              TnAniO($t.eq(1), j, {translateX:0, translateY:0}, item, 'labelImage1' );
              TnAniO($t.eq(2), j, {translateX:0, translateY:0}, item, 'labelImage2' );
              TnAniO($t.eq(3), j, {translateX:0, translateY:0}, item, 'labelImage3' );
              break;

            case 'labelSplitVert':
              var $t=item.$getElt('.labelImage');
              TnAniO($t.eq(0), j, {translateX:0}, item, 'labelImage0' );
              TnAniO($t.eq(1), j, {translateX:0}, item, 'labelImage1' );
              break;

            case 'labelAppearSplit4':
              var $t=item.$getElt('.labelImage');
              TnAniO($t.eq(0), j, {translateX:-item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'labelImage0' );
              TnAniO($t.eq(1), j, {translateX:item.thumbFullWidth/2, translateY:-item.thumbFullHeight/2}, item, 'labelImage1' );
              TnAniO($t.eq(2), j, {translateX:item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'labelImage2' );
              TnAniO($t.eq(3), j, {translateX:-item.thumbFullWidth/2, translateY:item.thumbFullHeight/2}, item, 'labelImage3' );
              break;

            case 'labelAppearSplitVert':
              var $t=item.$getElt('.labelImage');
              TnAniO($t.eq(0), j, {translateX:-item.thumbFullWidth/2}, item, 'labelImage0' );
              TnAniO($t.eq(1), j, {translateX:item.thumbFullWidth/2}, item, 'labelImage1' );
              break;

            case 'scaleLabelOverImage':
              TnAniO(item.$getElt('.labelImage'), j, { opacity: '0', scale: 50/dscale}, item, 'labelImage0' );
              TnAniO(item.$getElt('.imgContainer'), j, { scale: 100/dscale }, item, 'imgContainer0' );
              break;

            case 'overScale':
            case 'overScaleOutside':
              TnAniO(item.$getElt('.labelImage'), j, { opacity: '0', scale:150/dscale}, item, 'labelImage0' );
              TnAniO(item.$getElt('.imgContainer'), j, { opacity: '1', scale:100/dscale}, item, 'imgContainer0' );
              break;

            case 'imageInvisible':
              TnAniO(item.$getElt('.imgContainer'), j, { opacity: '1'} );
              break;

            case 'rotateCornerBL':
              var r=(G.aengine=='transition'?{rotate:'-90deg'}:{rotateZ:'-90'});
              TnAniO(item.$getElt('.labelImage'), j, r, item, 'labelImage0' );
              r=(G.aengine=='transition'?{rotate:'0deg'}:{rotateZ:'0'});
              TnAniO(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'rotateCornerBR':
              var r=(G.aengine=='transition'?{rotate:'90deg'}:{rotateZ:'90'});
              TnAniO(item.$getElt('.labelImage'), j, r, item, 'labelImage0' );
              r=(G.aengine=='transition'?{rotate:'0deg'}:{rotateZ:'0'});
              TnAniO(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'imageRotateCornerBL':
            case 'imageRotateCornerBR':
              var r=(G.aengine=='transition'?{rotate:'0deg'}:{rotateZ:'0'});
              TnAniO(item.$getElt('.imgContainer'), j, r, item, 'imgContainer0' );
              break;

            case 'slideUp':
              TnAniO(item.$getElt('.imgContainer'), j, { translateY: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { translateY: item.thumbFullHeight}, item, 'labelImage0' );
              break;

            case 'slideDown':
              TnAniO(item.$getElt('.imgContainer'), j, { translateY: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { translateY: -item.thumbFullHeight}, item, 'labelImage0' );
              break;

            case 'slideRight':
              TnAniO(item.$getElt('.imgContainer'), j, { translateX: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { translateX: -item.thumbFullWidth}, item, 'labelImage0' );
              break;

            case 'slideLeft':
              TnAniO(item.$getElt('.imgContainer'), j, { translateX: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { translateX: item.thumbFullWidth}, item, 'labelImage0' );
              break;

            case 'imageSlideUp':
            case 'imageSlideDown':
              TnAniO(item.$getElt('.imgContainer'), j, { translateY: 0 }, item, 'imgContainer0' );
              break;

            case 'imageSlideLeft':
            case 'imageSlideRight':
              TnAniO(item.$getElt('.imgContainer'), j, { translateX: 0 }, item, 'imgContainer0' );
              break;

            case 'labelAppear':
            case 'labelAppear75':
              if( G.aengine == 'velocity' ) {
                TnAniO(item.$getElt('.labelImage'), j, { backgroundColorRed:G.custGlobals.oldLabelRed, backgroundColorGreen:G.custGlobals.oldLabelGreen, backgroundColorBlue:G.custGlobals.oldLabelBlue, backgroundColorAlpha:0 } );
              }
              else {
                var c='rgba('+G.custGlobals.oldLabelRed+','+G.custGlobals.oldLabelGreen+','+G.custGlobals.oldLabelBlue+',0.01)';
                TnAniO(item.$getElt('.labelImage'), j, { backgroundColor: c} );
              }
              if( item.kind == 'album' ) {
                TnAniO(item.$getElt('.labelFolderTitle'), j, { opacity: '0' } );
              }
              else {
                TnAniO(item.$getElt('.labelImageTitle'), j, { opacity: '0' } );
              }
              TnAniO(item.$getElt('.labelDescription'), j, { opacity: '0' } );
              break;

            case 'descriptionAppear':
              TnAniO(item.$getElt('.labelDescription'), j, { opacity: '0' } );
              break;

            case 'labelSlideDown':
              TnAniO(item.$getElt('.labelImage'), j, { translateY:-item.thumbFullHeight}, item, 'labelImage0' );
              break;

            case 'labelSlideUpTop':
            case 'labelSlideUp':
              TnAniO(item.$getElt('.labelImage'), j, { translateY: item.thumbFullHeight}, item, 'labelImage0' );
              break;

            case 'descriptionSlideUp':
              var lh=(item.kind == 'album' ? item.$getElt('.labelFolderTitle').outerHeight(true) : item.$getElt('.labelImageTitle').outerHeight(true));
              var p=item.thumbFullHeight - lh -G.tn.borderHeight-G.tn.imgcBorderHeight;
              TnAniO(item.$getElt('.labelImage'), j, {translateY:0, height:lh}, item, 'labelImage0' );
              break;


            case 'labelOpacity50':
              TnAniO(item.$getElt('.labelImage'), j, { opacity: G.custGlobals.oldLabelOpacity } );
              break;

            case 'imageOpacity50':
              TnAniO(item.$getElt('.imgContainer'), j, { opacity: '1' } );
              break;

            case 'borderLighter':
            case 'borderDarker':
              if( G.aengine == 'velocity' ) {
                var colorString=G.custGlobals.oldBorderColor;
                var co = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
                TnAniO($e, j, { borderColorRed:co[0], borderColorGreen:co[1], borderColorBlue:co[2], colorAlpha:co[3] } );
              }
              else {
                // TnAniO($e, j, { borderColor: G.custGlobals.oldBorderColor } );
                TnAniO($e, j, { borderColor: $e.data('ngcache_borderColor') } );
              }
              break;

            case 'imageScale150':
            case 'imageScale150Outside':
              TnAniO(item.$getElt('img'), j, { scale: 100/dscale }, item, 'img0');
              break;

            case 'imageScaleIn80':
              TnAniO(item.$getElt('img'), j, { scale: 120/dscale }, item, 'img0');
              break;

            case 'imageSlide2Up':
            case 'imageSlide2Down':
            case 'imageSlide2Left':
            case 'imageSlide2Right':
            case 'imageSlide2UpRight':
            case 'imageSlide2UpLeft':
            case 'imageSlide2DownRight':
            case 'imageSlide2DownLeft':
            case 'imageSlide2Random':
              switch(item.customData.hoverEffectRDir) {
                case 'imageSlide2Up':
                  var tY=item.thumbFullHeight < (item.imgHeight*1.4) ? ((item.imgHeight*1.4)-item.thumbFullHeight)/2 : 0;
                  TnAniO(item.$getElt('img'), j, { translateY: tY }, item, 'img0' );
                  break;
                case 'imageSlide2Down':
                  var tY=item.thumbFullHeight < (item.imgHeight*1.4) ? ((item.imgHeight*1.4)-item.thumbFullHeight)/2 : 0;
                  TnAniO(item.$getElt('img'), j, { translateY: -tY }, item, 'img0' );
                  break;
                case 'imageSlide2Left':
                  TnAniO(item.$getElt('img'), j, { translateX: item.thumbFullWidth*.1 }, item, 'img0' );
                  break;
                case 'imageSlide2Right':
                  TnAniO(item.$getElt('img'), j, { translateX: -item.thumbFullWidth*.1 }, item, 'img0' );
                  break;

                case 'imageSlide2UpRight':
                  TnAniO(item.$getElt('img'), j, { translateY: item.thumbFullHeight*.05, translateX: -item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2UpLeft':
                  TnAniO(item.$getElt('img'), j, { translateY: item.thumbFullHeight*.05, translateX: item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2DownRight':
                  TnAniO(item.$getElt('img'), j, { translateY: -item.thumbFullHeight*.05, translateX: -item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
                case 'imageSlide2DownLeft':
                  TnAniO(item.$getElt('img'), j, { translateY: -item.thumbFullHeight*.05, translateX: item.thumbFullWidth*.05 }, item, 'img0' );
                  break;
              }
              break;



            case 'scale120':
              TnAniO($e, j, { scale: 100/dscale }, item, 'base' );
              break;

            case 'imageExplode':
              var $iC=item.$getElt('.imgContainer');
              n=Math.sqrt($iC.length);
              var i=0;
              for(var r=0; r<n; r++ ) {
                for(var c=0; c<n; c++ ) {
                  TnAniO($iC.eq(i++), j, { top:'0', left:'0', scale:'1', opacity:'1'} );
                }
              }
              break;


            case 'imageFlipHorizontal':
              // var n= Math.round(item.thumbFullHeight*1.2) + 'px';
              TnAniO(item.$getElt('.imgContainer'), j, { rotateX: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { rotateX: 180}, item, 'labelImage0' );
              break;

            case 'imageFlipVertical':
              // var n= Math.round(item.thumbFullWidth*1.2) + 'px';
              TnAniO(item.$getElt('.imgContainer'), j, { rotateY: 0}, item, 'imgContainer0' );
              TnAniO(item.$getElt('.labelImage'), j, { rotateY: 180}, item, 'labelImage0' );
              break;

            // case 'flipHorizontal':
              // var n= Math.round(item.thumbFullHeigh*1.2) + 'px';
              // TnAniO($e, j, { rotateX: '0deg'} );
              // break;

            // case 'flipVertical':
              // var n= Math.round(item.thumbFullWidth*1.2) + 'px';
              // TnAniO($e, j, { rotateY: '0deg'} );
              // break;

            case 'TEST':
              // TnAniO(item.$getElt('.subcontainer'), j, { scale: 0.85 } );
              break;
          }
        }
      }
      catch (e) {
        nanoAlert( 'error on hoverOut ' +e.message );
      }
    };



    // #########################
    // ##### IMAGE DISPLAY #####
    // #########################

    function DisplayImage( imageIdx ) {

      if( !G.O.thumbnailOpenImage ) { return; }

      if( typeof G.O.fnThumbnailOpen == 'function' ) {
        OpenImageCustomViewer(imageIdx);
        return;
      }

      if( G.O.viewer == 'fancybox' ) {
        OpenFancyBox(imageIdx);
      }
      else {
        if( !G.containerViewerDisplayed ) {
          OpenInternalViewer(imageIdx);
        }
        else {
          DisplayInternalViewer(imageIdx, '');
        }
      }
    };

    function OpenInternalViewer( imageIdx ) {

      //if( !G.O.locationHash ) {
      //  top.location.hash='nanogallery/'+G.baseEltID+'/v';
      //}
      // if( G.O.viewerScrollBarHidden ) {
        jQuery('body').css({overflow:'hidden'});  //avoid scrollbars
      // }

      G.containerViewerDisplayed=true;

      G.$E.conVwCon=jQuery('<div  class="nanoGalleryViewerContainer" style="visibility:visible"></div>').appendTo('body');
      G.$E.conVwCon.addClass('nanogallery_theme_'+G.O.theme);
      SetColorSchemeViewer(G.$E.conVwCon);

      G.$E.conVw=jQuery('<div  id="nanoGalleryViewer" class="nanoGalleryViewer" style="visibility:visible" itemscope itemtype="http://schema.org/ImageObject"></div>').appendTo(G.$E.conVwCon);
      G.$E.conVw.css({
        visibility:'visible',
        position: 'fixed'    //"absolute",
      });

      // avoid pinch zoom
      G.$E.conVw.css({msTouchAction:'none', touchAction:'none'});

      var sImg='',
      l=G.I.length;

      sImg+='<img class="image nGEvent" src="'+G.I[imageIdx].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';
      sImg+='<img class="image nGEvent" src="'+G.I[imageIdx].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';
      sImg+='<img class="image nGEvent" src="'+G.I[imageIdx].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';
// sImg+='<img class="image nGEvent" src="" alt=" " style="background-image:url('+G.I[imageIdx].responsiveURL()+');visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';
// sImg+='<img class="image nGEvent" src="" alt=" " style="background-image:url('+G.I[imageIdx].responsiveURL()+');visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';
// sImg+='<img class="image nGEvent" src="" alt=" " style="background-image:url('+G.I[imageIdx].responsiveURL()+');visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">';

      G.$E.vwContent=jQuery('<div class="content nGEvent">'+sImg+'<div class="contentAreaPrevious nGEvent"></div><div class="contentAreaNext nGEvent"></div></div>').appendTo(G.$E.conVw);
      G.$E.vwImgP=G.$E.conVw.find('.image').eq(0);
      G.$E.vwImgC=G.$E.conVw.find('.image').eq(1);
      G.$E.vwImgN=G.$E.conVw.find('.image').eq(2);

      // makes content unselectable --> avoid image drag effect during 'mouse swipe'
      G.$E.conVwCon.find('*').attr('draggable', 'false').attr('unselectable', 'on');

      var $closeB=jQuery('<div class="closeButtonFloating nGEvent"></div>').appendTo(G.$E.conVw);
      $closeB.on("touchstart click",function(e){
      // $closeB.on( (G.isIOS ? "touchstart" : "click") ,function(e){     // IPAD
        e.preventDefault();
        e.stopPropagation();
        if( (new Date().getTime()) - G.timeImgChanged < 400 ) { return; }
        CloseInternalViewer(true);
        return false;
      });

      // build image toolbar
      var sTB='<div class="toolbarContainer nGEvent" style="visibility:'+(G.O.viewerToolbar.display ? "visible" : "hidden")+';"><div class="toolbar nGEvent">';
      var tstd = G.O.viewerToolbar.standard.split(',');
      for( var i=0, lstd=tstd.length; i<lstd; i++) {
        sTB+=ToolbarAddElt( tstd[i] );
      }
      var tmin = G.O.viewerToolbar.minimized.split(',');
      for( var i=0, lmin=tmin.length; i<lmin; i++) {
        if( G.O.viewerToolbar.standard.indexOf(tmin[i]) == -1 ) {
          sTB+=ToolbarAddElt( tmin[i] );
        }
      }
      sTB+='</div></div>';
      G.$E.conVwTb=jQuery(sTB).appendTo(G.$E.conVw);

      if( G.toolbarMode == 'min' || (G.O.viewerToolbar.autoMinimize > 0 && G.O.viewerToolbar.autoMinimize >= getViewport().w) ) {
        ToolbarVisibilityMin();
      }
      else {
        ToolbarVisibilityStd();
      }

      if( G.O.viewerFullscreen ) {
        G.viewerIsFullscreen=true;
        G.$E.conVwTb.find('.fullscreenButton').removeClass('setFullscreenButton').addClass('removeFullscreenButton');
        ngscreenfull.request();
      }


      if( G.O.viewerDisplayLogo ) {
        G.$E.vwLogo=jQuery('<div class="nanoLogo"></div>').appendTo(G.$E.conVw);
      }

      setElementOnTop('',G.$E.conVw);
      setElementOnTop(G.$E.conVw,$closeB);
      ResizeInternalViewer();

      G.timeImgChanged=new Date().getTime();

      G.$E.conVwTb.find('.closeButton').on("touchstart click",function(e){
        e.preventDefault();
        e.stopPropagation();
        if( (new Date().getTime()) - G.timeImgChanged < 400 ) { return; }
        CloseInternalViewer(true);
      });


      G.$E.conVwTb.find('.playPauseButton').on("touchstart click",function(e){
        e.stopPropagation();
        SlideshowToggle();
      });

      G.$E.conVwTb.find('.minimizeButton').on("touchstart click",function(e){
        e.stopPropagation();
        ToolbarVisibilityToggle();
      });

      G.$E.conVwTb.find('.fullscreenButton').on("touchstart click",function(e){
        e.stopPropagation();
        ViewerFullscreenToggle();
      });

      G.$E.conVwTb.find('.infoButton').on("touchstart click",function(e){
        e.stopPropagation();
        if( typeof G.O.fnViewerInfo == 'function' ) {
          G.O.fnViewerInfo(G.I[G.viewerCurrentItemIdx], ExposedObjects());
        }
      });


      // custom button click
      G.$E.conVwTb.find('.ngCustomBtn').on("touchstart click",function(e){

        e.stopPropagation();
        if( typeof G.O.fnImgToolbarCustClick == 'function' ) {
          var target = e.target || e.srcElement;
          while( target == null || target.getAttribute('class') == null || target.getAttribute('class').indexOf('ngCustomBtn') == -1 ) {       // go element parent up to find the custom element
            target = target.parentNode;
          }
          var v=target.getAttribute('class');
          if( v.indexOf('ngCustomBtn') >=0 ) {
            var vs=v.split(' ');
            for( var i=0, l=vs.length; i<l; i++) {
              if( vs[i].indexOf('custom') == 0 ) {
                G.O.fnImgToolbarCustClick(vs[i], jQuery(target), G.I[G.viewerCurrentItemIdx], ExposedObjects())
              }
            }
          }
        }
      });


      G.$E.conVwTb.find('.linkOriginalButton').on("touchstart click",function(e){
        e.stopPropagation();
        if( G.O.kind == 'picasa') {
          var sU='https://plus.google.com/photos/'+G.O.userID+'/albums/'+G.I[G.viewerCurrentItemIdx].albumID+'/'+G.I[G.viewerCurrentItemIdx].GetID();
          window.open(sU,'_blank');
        }

        if( G.O.kind == 'flickr') {
          var sU='https://www.flickr.com/photos/'+G.O.userID+'/'+G.I[G.viewerCurrentItemIdx].GetID();
          window.open(sU,'_blank');
        }
      });

      G.$E.conVwTb.find('.nextButton').on("touchstart click",function(e){ e.stopPropagation(); DisplayNextImagePart1(); });
      G.$E.conVwTb.find('.previousButton').on("touchstart click",function(e){ e.stopPropagation(); DisplayPreviousImage(); });
      G.$E.vwContent.find('.contentAreaNext').on("touchstart click",function(e){ e.stopPropagation(); DisplayNextImagePart1(); });
      G.$E.vwContent.find('.contentAreaPrevious').on("touchstart click",function(e){ e.stopPropagation(); DisplayPreviousImage(); });

      G.$E.vwContent.on("click",function(e){
        if( (new Date().getTime()) - G.timeImgChanged < 400 ) { return; }
        e.preventDefault();
        e.stopPropagation();
        CloseInternalViewer(true);
        return false;
      });

      // makes images unselectable (avoid blue overlay)
      G.$E.conVw.find('.image').attr('draggable', 'false').attr('unselectable', 'on').css({ '-moz-user-select':'none', '-khtml-user-select': 'none', '-webkit-user-select': 'none', '-o-user-select': 'none', 'user-select': 'none'});

      DisplayInternalViewer(imageIdx, '');

      if( G.viewerSwipe == null ) {
        G.viewerSwipe = new ViewerSwipeSupport(G.$E.conVwCon[0]);
      }

      if( G.O.slideshowAutoStart ) {
        G.playSlideshow=true;
        G.$E.conVwTb.find('.playPauseButton').removeClass('playButton').addClass('pauseButton');
        DisplayNextImage();
        G.playSlideshowTimerID=window.setInterval(function(){DisplayNextImage();},G.slideshowDelay);
      }

    };


    function ToolbarAddElt( elt ) {
      var r='',
      e=elt.replace(/^\s+|\s+$/g, '');    // remove trailing/leading whitespace
      switch( e ) {
        case 'minimizeButton':
          r='<div class="ngbt minimizeButton hideToolbarButton nGEvent"></div>';
          break;
        case 'previousButton':
          r='<div class="ngbt previousButton nGEvent"></div>';
          break;
        case 'pageCounter':
          r='<div class="pageCounter nGEvent"></div>';
          break;
        case 'nextButton':
          r='<div class="ngbt nextButton nGEvent"></div>';
          break;
        case 'playPauseButton':
          r='<div class="ngbt playButton playPauseButton nGEvent"></div>';
          break;
        case 'fullscreenButton':
          if( G.supportFullscreenAPI ) {
            r='<div class="ngbt setFullscreenButton fullscreenButton nGEvent"></div>';
          }
          break;
        case 'infoButton':
          if( typeof G.O.fnViewerInfo == 'function' ) {
            r='<div class="ngbt infoButton nGEvent"></div>';
          }
          break;
        case 'linkOriginalButton':
          if( G.O.kind == 'flickr' || G.O.kind == 'picasa' ) {
            r='<div class="ngbt linkOriginalButton nGEvent"></div>';
          }
          break;
        case 'closeButton':
          r='<div class="ngbt closeButton nGEvent"></div>';
          break;
        case 'label':
          r='<div class="label"><div class="title nGEvent" itemprop="name"></div><div class="description nGEvent" itemprop="description"></div></div>';
          break;
        default:
          if( e.indexOf('custom') == 0 ) {
            r='<div class="ngbt ngCustomBtn '+e+' nGEvent">' + (typeof G.O.fnImgToolbarCustInit == 'function' ? G.O.fnImgToolbarCustInit(e) : '') + '</div>';
          }
          break;
      }
      return r;
    }

    // based on "Implement Custom Gestures" from Google
    // https://developers.google.com/web/fundamentals/input/touch-input/touchevents/
    function ViewerSwipeSupport(element) {
      var elementToSwipe=element,
      isAnimating=false,
      initialTouchPos=null,
      lastTouchPos=null,
      currentXPosition=0,
      me=this;



      function handleGestureStart(e) {
        if( !G.containerViewerDisplayed ) { return; }

        G.timeLastTouchStart=new Date().getTime();
        e.preventDefault();

        if(e.touches && e.touches.length > 1) { return; }

        initialTouchPos = getGesturePointFromEvent(e);

        // Add the move and end listeners
        if (window.navigator.msPointerEnabled) {
          // Pointer events are supported.
          document.addEventListener('MSPointerMove', handleGestureMove, true);
          document.addEventListener('MSPointerUp', handleGestureEnd, true);
        } else {
          // Add Touch Listeners
          document.addEventListener('touchmove', handleGestureMove, true);
          document.addEventListener('touchend', handleGestureEnd, true);
          document.addEventListener('touchcancel', handleGestureEnd, true);

          // Add Mouse Listeners
          document.addEventListener('mousemove', handleGestureMove, true);
          document.addEventListener('mouseup', handleGestureEnd, true);
        }
      }

      function handleGestureMove(e) {
        e.preventDefault();

        lastTouchPos = getGesturePointFromEvent(e);

        if(isAnimating) { return; }

        isAnimating = true;

        // window.requestAnimFrame(onAnimFrame);
        window.requestAnimationFrame(onAnimFrame);
      }


      // Handle end gestures
      function handleGestureEnd(e) {
        if( e.cancelable ) { e.preventDefault(); }
        if(e.touches && e.touches.length > 0) { return; }

        isAnimating = false;

        // Remove Event Listeners
        if (window.navigator.msPointerEnabled) {
          // Remove Pointer Event Listeners
          document.removeEventListener('MSPointerMove', handleGestureMove, true);
          document.removeEventListener('MSPointerUp', handleGestureEnd, true);
        } else {
        // Remove Touch Listeners
          document.removeEventListener('touchmove', handleGestureMove, true);
          document.removeEventListener('touchend', handleGestureEnd, true);
          document.removeEventListener('touchcancel', handleGestureEnd, true);

          // Remove Mouse Listeners
          document.removeEventListener('mousemove', handleGestureMove, true);
          document.removeEventListener('mouseup', handleGestureEnd, true);
        }

        updateSwipeRestPosition();
      }

      // function updateSwipeRestPositionOLD(me) {
      function updateSwipeRestPosition() {
        if( lastTouchPos == null ) {      // touchend without touchmove
          currentXPosition=0;
          initialTouchPos=null;
          return;
        }

        var differenceInX = initialTouchPos.x - lastTouchPos.x;
        currentXPosition = currentXPosition - differenceInX;

        if( differenceInX < -50 ) {
          DisplayPreviousImage();
        }
        if( differenceInX > 50 ) {
          DisplayNextImagePart1();
        }
        currentXPosition=0;
        initialTouchPos=null;
        lastTouchPos=null;

        if(Math.abs(differenceInX) < 50) {
          ImageSwipeTranslateX(currentXPosition);
        }
        return;
      }


      function getGesturePointFromEvent(e) {
        var point = {};

        if(e.targetTouches) {
          point.x = e.targetTouches[0].clientX;
          point.y = e.targetTouches[0].clientY;
        } else {
          // Either Mouse event or Pointer Event
          point.x = e.clientX;
          point.y = e.clientY;
        }

        return point;
      }


      function onAnimFrame() {
        if(!isAnimating) { return; }

        var differenceInX = initialTouchPos.x - lastTouchPos.x;

        ImageSwipeTranslateX(currentXPosition - differenceInX);

        isAnimating = false;
      }

      this.removeEventListeners = function() {
        // we need to remove all the event listeners (becauase of an issue with the close button)
        if (window.navigator.msPointerEnabled) {
          elementToSwipe.removeEventListener('MSPointerDown', handleGestureStart, true);
          document.removeEventListener('MSPointerMove', handleGestureMove, true);
          document.removeEventListener('MSPointerUp', handleGestureEnd, true);
        }
        else {
          // Remove Touch Listeners
          elementToSwipe.removeEventListener('touchstart', handleGestureStart, true);
          document.removeEventListener('touchmove', handleGestureMove, true);
          document.removeEventListener('touchend', handleGestureEnd, true);
          document.removeEventListener('touchcancel', handleGestureEnd, true);

          // Remove Mouse Listeners
          document.removeEventListener('mousemove', handleGestureMove, true);
          document.removeEventListener('mouseup', handleGestureEnd, true);
          //elementToSwipe.removeEventListener('mousedown', this.handleGestureStart, true);
        }
      }

      // Check if pointer events are supported.
      if (window.navigator.msPointerEnabled) {
        // Add Pointer Event Listener
        // elementToSwipe.addEventListener('MSPointerDown', this.handleGestureStart, true);
        elementToSwipe.addEventListener('MSPointerDown', handleGestureStart, true);
      }
      else {
        // Add Touch Listener
        // elementToSwipe.addEventListener('touchstart', this.handleGestureStart, true);
        elementToSwipe.addEventListener('touchstart', handleGestureStart, true);

        // Add Mouse Listener
        //elementToSwipe.addEventListener('mousedown', this.handleGestureStart, true);
      }

    }

    function ImageSwipeTranslateX( posX ) {
      G.imageSwipePosX=posX;
      if( G.CSStransformName == null ) {
        G.$E.vwImgC.css({ left: posX });
      }
      else {
        G.$E.vwImgC[0].style[G.CSStransformName]= 'translateX('+posX+'px)';
        if(  G.O.imageTransition == 'slide' ) {
          if( posX > 0 ) {
            var $new=G.$E.vwImgP;
            var dir=getViewport().w;
            G.$E.vwImgP.css({visibility:'visible', left:0, opacity:1});
            G.$E.vwImgP[0].style[G.CSStransformName]= 'translateX('+(-dir+posX)+'px) '
            G.$E.vwImgN[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
          }
          else {
            var $new=G.$E.vwImgN;
            var dir=-getViewport().w;
            G.$E.vwImgN.css({visibility:'visible', left:0, opacity:1});
            G.$E.vwImgN[0].style[G.CSStransformName]= 'translateX('+(-dir+posX)+'px) '
            G.$E.vwImgP[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
          }
        }
      }
    }

    // Toggle viewer fullscreen mode on/off
    function ViewerFullscreenToggle(){
      if( ngscreenfull.enabled ) {
        // ngscreenfull.toggle(G.$E.conVwCon[0]);    // --> issue on scrollbar visibility
        ngscreenfull.toggle();
        if( G.viewerIsFullscreen ) {
          G.viewerIsFullscreen=false;
          G.$E.conVwTb.find('.fullscreenButton').removeClass('removeFullscreenButton').addClass('setFullscreenButton');
        }
        else {
          G.viewerIsFullscreen=true;
          G.$E.conVwTb.find('.fullscreenButton').removeClass('setFullscreenButton').addClass('removeFullscreenButton');
        }
      }
    }


    // toggle slideshow mode on/off
    function SlideshowToggle(){
      if( G.playSlideshow ) {
        window.clearInterval(G.playSlideshowTimerID);
        G.playSlideshow=false;
        G.$E.conVwTb.find('.playPauseButton').removeClass('pauseButton').addClass('playButton');
      }
      else {
        G.playSlideshow=true;
        G.$E.conVwTb.find('.playPauseButton').removeClass('playButton').addClass('pauseButton');
        DisplayNextImage();
        G.playSlideshowTimerID=window.setInterval(function(){DisplayNextImage();},G.slideshowDelay);
      }
    }

    // toggle toolbar visibility
    function ToolbarVisibilityToggle(){
      if( G.toolbarMode == 'std' ) {
        ToolbarVisibilityMin();
      }
      else {
        ToolbarVisibilityStd();
      }
    }

    function ToolbarVisibilityStd() {
      G.toolbarMode='std';
      G.$E.conVwTb.find('.minimizeButton').removeClass('viewToolbarButton').addClass('hideToolbarButton');
      ToolbarSetItemsVisibility('std');
      ResizeInternalViewer();
    }
    function ToolbarVisibilityMin() {
      G.toolbarMode='min';
      G.$E.conVwTb.find('.minimizeButton').removeClass('hideToolbarButton').addClass('viewToolbarButton');
      ToolbarSetItemsVisibility('min');
      ResizeInternalViewer();
    }

    function ToolbarSetItemsVisibility( curMode ) {
      var t=G.O.viewerToolbar;
      var t= ( curMode == 'std' ? G.O.viewerToolbar.standard : G.O.viewerToolbar.minimized);

      // standard elements
      var v=['minimizeButton', 'previousButton', 'pageCounter', 'nextButton', 'playPauseButton', 'fullscreenButton', 'infoButton', 'linkOriginalButton', 'closeButton', 'label'];
      for( var i=0, l=v.length; i<l; i++) {
        if( v[i] == 'label' ) {
          if( G.$E.conVwTb.find('.title').text() == '' && G.$E.conVwTb.find('.description').text() == '' ) {
            G.$E.conVwTb.find('.'+v[i]).css({ display: 'none' });
          }
          else {
            G.$E.conVwTb.find('.'+v[i]).css({ display:( t.indexOf(v[i]) >= 0 ? 'table-cell' : 'none') });
          }
        }
        else {
          G.$E.conVwTb.find('.'+v[i]).css({ display:( t.indexOf(v[i]) >= 0 ? 'table-cell' : 'none') });
        }
      }

      // custom elements
      G.$E.conVwTb.find('.ngCustomBtn').css({ display: 'none' });
      var vC=t.split(',');
      for( var i=0, l=vC.length; i<l; i++) {
        var vCT=vC[i].replace(/^\s+|\s+$/g, '');     // remove trailing/leading whitespace
        if( vCT.indexOf('custom') == 0 ) {
          G.$E.conVwTb.find('.'+vCT).css({ display: 'table-cell' });
        }
      }
    }


    // Display next image
    function DisplayNextImagePart1() {
      if( G.playSlideshow ) {
        window.clearInterval(G.playSlideshowTimerID);
        G.playSlideshowTimerID=window.setInterval(function(){DisplayNextImage();},G.slideshowDelay);
      }
      DisplayNextImage();
    }
    function DisplayNextImage() {
      if( G.viewerImageIsChanged ) { return; }
      if( (new Date().getTime()) - G.timeImgChanged < 300 ) { return; }
      var l=G.I.length;

      var newImageIdx=GetNextImageIdx(G.viewerCurrentItemIdx);
      DisplayInternalViewer(newImageIdx, 'nextImage');
    };

    // Display previous image
    function DisplayPreviousImage() {
      if( G.viewerImageIsChanged ) { return; }
      if( (new Date().getTime()) - G.timeImgChanged < 300 ) { return; }
      if( G.playSlideshow ) {
        SlideshowToggle();
      }

      var newImageIdx=GetPreviousImageIdx(G.viewerCurrentItemIdx);
      DisplayInternalViewer(newImageIdx, 'previousImage');
    };

    // Display image (and run animation)
    function DisplayInternalViewer( imageIdx, displayType ) {
      G.timeImgChanged=new Date().getTime();
      G.viewerImageIsChanged=true;
      var displayNext=true;

      if( G.O.locationHash ) {
        var s ='nanogallery/'+G.baseEltID+'/'+G.I[imageIdx].albumID+"/"+G.I[imageIdx].GetID();
        if( ('#'+s) != location.hash ) {
          G.lastLocationHash='#'+s;
          try {
            top.location.hash=s;
          }
          catch(e) {
            G.O.locationHash=false;
          }
        }
        else {
          try {
            G.lastLocationHash=top.location.hash;
          }
          catch(e) {
            G.O.locationHash=false;
          }
        }
      }

      if( G.O.debugMode && console.timeline ) {
        console.timeline('nanoGALLERYviewer');
      }

      // G.viewerResizeTimerID=window.setInterval( function() { ResizeInternalViewer() }, 100);
      G.viewerResizeTimerID=window.setTimeout( ResizeInternalViewer, 100);

      G.viewerCurrentItemIdx=imageIdx;

      if( displayType == '' ) {
        // first image --> just appear / no slide animation
        G.$E.vwImgC.css({ opacity:0, left:0, visibility: 'visible'}).attr('src',G.emptyGif).attr('src',G.I[imageIdx].responsiveURL());
        // G.$E.vwImgC.css({ opacity:0, left:0, visibility: 'visible', 'background-image':'url('+G.I[imageIdx].responsiveURL()+')'}).attr('src',G.emptyGif);
        var tweenable = new NGTweenable();
        tweenable.tween({
          from: { o: 0  },
          to: { o: 1 },
          attachment: { idx:imageIdx, dT:displayType },
          duration: 400,
          step: function (state, att) {
            G.$E.vwImgC.css({ opacity: state.o });
          },
          finish: function (state, att) {
            G.$E.vwImgC.css({ opacity: 1});
            DisplayInternalViewerComplete(att.idx, att.dT);
          }
        });
      }
      else {
        // animate image change
        switch( G.O.imageTransition ) {
          case 'fade':
            var $new=(displayType == 'nextImage' ? G.$E.vwImgN : G.$E.vwImgP);
            $new.css({ opacity:0, left:0, visibility:'visible'});
            var tweenable = new NGTweenable();
            tweenable.tween({
              from: { o: 0  },
              to: { o: 1 },
              attachment: { idx:imageIdx, dT:displayType, $e:$new },
              duration: 300,
              step: function (state, att) {
                G.$E.vwImgC.css({ opacity: 1-state.o });
                att.$e.css({ opacity: state.o });
              },
              finish: function (state, att) {
                G.$E.vwImgC.css({ opacity: 0 });
                att.$e.css({ opacity: 1 });
                DisplayInternalViewerComplete(att.idx, att.dT);
              }
            });
            break;

          case 'slideBETA':
            var $new=(displayType == 'nextImage' ? G.$E.vwImgN : G.$E.vwImgP);
            $new.css({ opacity:1, left:0, visibility:'visible'});
            if( G.CSStransformName == null ) {
              // animate LEFT
              jQuery.when(
                G.$E.vwImgC.animate({ left: (displayType == 'nextImage' ? -getViewport().w : getViewport().w)+'px', opacity: 0 }, 500),
                $new.animate({ opacity: 1 }, 300)
              ).done(function () {
                DisplayInternalViewerComplete(imageIdx, displayType);
              });
            }
            else {
              // animate TRANSLATEX
              var dir=(displayType == 'nextImage' ? - getViewport().w : getViewport().w);
              $new[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
              var from = {v: G.imageSwipePosX };
              var to = {v: (displayType == 'nextImage' ? - getViewport().w : getViewport().w)};
              jQuery(from).animate(to, { duration:500, step: function(currentValue) {
                  G.$E.vwImgC[0].style[G.CSStransformName]= 'translateX('+currentValue+'px)';
                  G.$E.vwImgC.css({ opacity: (1-Math.abs(currentValue/dir)) });
                  $new[0].style[G.CSStransformName]= 'translateX('+(-dir+currentValue)+'px) '
                }, complete: function() {
                  G.$E.vwImgC[0].style[G.CSStransformName]= '';
                  G.$E.vwImgC.css({ opacity:0 });
                  DisplayInternalViewerComplete(imageIdx, displayType);
                }
              });
            }
            break;

          case 'slideOLD':
            var $new=(displayType == 'nextImage' ? G.$E.vwImgN : G.$E.vwImgP);
            // if( G.CSStransformName == null || ( G.isIOS && G.IOSversion < 6 ) ) {
            if( G.CSStransformName == null  ) {
              // animate LEFT
              $new.css({ opacity:0, left:0, visibility:'visible'});
              jQuery.when(
                G.$E.vwImgC.animate({ left: (displayType == 'nextImage' ? -getViewport().w : getViewport().w)+'px' }, 500),
                $new.animate({ opacity: 1 }, 300)
              ).done(function () {
                DisplayInternalViewerComplete(imageIdx, displayType);
              });
            }
            else {
              // animate using TRANSLATEX
              $new.css({ opacity:1, left:0, visibility:'visible'});
              var dir=(displayType == 'nextImage' ? - getViewport().w : getViewport().w);
              $new[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
              var from = {v: G.imageSwipePosX };
              var to = {v: (displayType == 'nextImage' ? - getViewport().w : getViewport().w)};
              jQuery(from).animate(to, { duration:400, easing:'linear', step: function(currentValue) {
                  window.requestAnimationFrame( function() {
                    G.$E.vwImgC[0].style[G.CSStransformName]= 'translateX('+currentValue+'px)';
                    //G.$E.vwImgC.css({ opacity: (1-Math.abs(currentValue/dir)) });
                    $new[0].style[G.CSStransformName]= 'translateX('+(-dir+currentValue)+'px) '
                  });
                }, complete: function() {
                  window.requestAnimationFrame( function() {
                    G.$E.vwImgC[0].style[G.CSStransformName]= '';
                    //G.$E.vwImgC.css({ opacity:0 });
                    DisplayInternalViewerComplete(imageIdx, displayType);
                  });
                }
              });
            }
            break;

          case 'slide':
            var $new=(displayType == 'nextImage' ? G.$E.vwImgN : G.$E.vwImgP);
            // if( G.CSStransformName == null || ( G.isIOS && G.IOSversion < 6 ) ) {
            if( G.CSStransformName == null  ) {
              // animate LEFT
              $new.css({ opacity:0, left:0, visibility:'visible'});
              jQuery.when(
                G.$E.vwImgC.animate({ left: ((displayType == 'nextImage' ? -getViewport().w : getViewport().w)*2)+'px' }, 500),
                $new.animate({ opacity: 1 }, 300)
              ).done(function () {
                DisplayInternalViewerComplete(imageIdx, displayType);
              });
            }
            else {
              // animate using TRANSLATEX
              var dir=(displayType == 'nextImage' ? - getViewport().w : getViewport().w);
              $new.css({ opacity:1, left:0, visibility:'visible'});
              $new[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
              var tweenable = new NGTweenable();
              tweenable.tween({
                from: { t: G.imageSwipePosX  },
                to: { t: (displayType == 'nextImage' ? - getViewport().w : getViewport().w) },
                attachment: { idx:imageIdx, dT:displayType, $e:$new, dir:dir },
                duration: 300,
                step: function (state, att) {
                  G.$E.vwImgC[0].style[G.CSStransformName]= 'translateX('+state.t+'px)';
                  att.$e[0].style[G.CSStransformName]= 'translateX('+(-att.dir+state.t)+'px) ';
                },
                finish: function (state, att) {
                  G.$E.vwImgC[0].style[G.CSStransformName]= '';
                  att.$e[0].style[G.CSStransformName]= '';
                  DisplayInternalViewerComplete(att.idx, att.dT);
                }
              });
            }
            break;

          case 'slideAppear':
          default:
            var dir= getViewport().w+'px';
            var $new=G.$E.vwImgP;
            if( displayType == 'nextImage' ) {
              dir='-'+dir;
              $new=G.$E.vwImgN;
            }
            $new.css({ opacity:0, left:0, visibility:'visible'});
            jQuery.when(
              G.$E.vwImgC.animate({ left: dir, opacity: 0 }, 500),
              $new.animate({ opacity: 1 }, 300)
            ).done(function () {
              ImageSwipeTranslateX(0);
              DisplayInternalViewerComplete(imageIdx, displayType);
            });
            break;
        }
      }
    }


    function DisplayInternalViewerComplete( imageIdx, displayType ) {
      DisplayInternalViewerToolbar(imageIdx);
      if( G.O.debugMode && console.timeline ) {
        console.timelineEnd('nanoGALLERYviewer');
      }

      if( typeof G.O.fnImgDisplayed === 'function'){
        if( !G.O.fnImgDisplayed(G.I[imageIdx].$elt, G.I[imageIdx]) ) { return; }
      }

      G.imageSwipePosX=0;

      G.$E.vwImgC.off("click");
      G.$E.vwImgC.removeClass('imgCurrent');

      var $tmp=G.$E.vwImgC;
      switch( displayType ) {
        case 'nextImage':
          G.$E.vwImgC=G.$E.vwImgN;
          G.$E.vwImgN=$tmp;
          break;
        case 'previousImage':
          G.$E.vwImgC=G.$E.vwImgP;
          G.$E.vwImgP=$tmp;
          break;
      }
      G.$E.vwImgC.addClass('imgCurrent');

      G.$E.vwImgN.css({ opacity:0, left:0, visibility:'hidden' }).attr('src',G.emptyGif).attr('src',G.I[GetNextImageIdx(imageIdx)].responsiveURL());
      // G.$E.vwImgN.css({ opacity:0, left:0, visibility:'hidden', 'background-image':'url('+G.I[GetNextImageIdx(imageIdx)].responsiveURL()+')' }).attr('src',G.emptyGif);
      G.$E.vwImgP.css({ opacity:0, left:0, visibility:'hidden'}).attr('src',G.emptyGif).attr('src',G.I[GetPreviousImageIdx(imageIdx)].responsiveURL());
      // G.$E.vwImgP.css({ opacity:0, left:0, visibility:'hidden', 'background-image':'url('+G.I[GetPreviousImageIdx(imageIdx)].responsiveURL()+')'}).attr('src',G.emptyGif);

      G.$E.vwImgC.on("click",function(e){
        e.stopPropagation();
        if( e.pageX < (jQuery(window).width()/2) ) {
          DisplayPreviousImage();
        }
        else {
          DisplayNextImagePart1();
        }
      });

      ResizeInternalViewer();

      // TODO: this code does not work
      //jQuery(G.containerViewerContent).item.$getElt('img').on('resize', function(){
      //  ResizeInternalViewer('.imgCurrent');
      //  console.log('resized');
      //});

      G.viewerImageIsChanged=false;
    }

    function GetNextImageIdx( imageIdx ) {
      var l=G.I.length;
      var newImageIdx=-1;

      for(var i=imageIdx+1; i<l; i++ ){
        if( G.I[i].albumID == G.I[imageIdx].albumID && G.I[i].kind == 'image' ) {
          newImageIdx=i;
          break;
        }
      }
      if( newImageIdx == -1 ) {
        for(var i=0; i<=imageIdx; i++ ){
          if( G.I[i].albumID == G.I[imageIdx].albumID && G.I[i].kind == 'image' ) {
            newImageIdx=i;
            break;
          }
        }
      }

      return newImageIdx;
    }

    function GetPreviousImageIdx( imageIdx ) {
      var newImageIdx=-1;
      for(var i=imageIdx-1; i>=0; i-- ){
        if( G.I[i].albumID == G.I[imageIdx].albumID && G.I[i].kind == 'image' ) {
          newImageIdx=i;
          break;
        }
      }
      if( newImageIdx == -1 ) {
        for(var i=G.I.length-1; i>=imageIdx; i-- ){
          if( G.I[i].albumID == G.I[imageIdx].albumID && G.I[i].kind == 'image' ) {
            newImageIdx=i;
            break;
          }
        }
      }

      return newImageIdx;
    }

    function HideInternalViewerToolbar() {
      G.$E.conVwTb.css({'visibility':'hidden'});
    }

    function DisplayInternalViewerToolbar( imageIdx ) {

      if( !G.O.viewerToolbar.display ) { return; }

      G.$E.conVwTb.css({'visibility':'visible'});
      var setTxt=false;
      // set title
      if( G.I[imageIdx].title !== undefined && G.I[imageIdx].title != '' ) {
        G.$E.conVwTb.find('.title').html(G.I[imageIdx].title);
        setTxt=true;
      }
      else {
        G.$E.conVwTb.find('.title').html('');
      }
      // set description
      if( G.I[imageIdx].description !== undefined && G.I[imageIdx].description != '' ) {
        G.$E.conVwTb.find('.description').html(G.I[imageIdx].description);
        setTxt=true;
      }
      else {
        G.$E.conVwTb.find('.description').html('');
      }

      // custom elements
      var $cu=G.$E.conVwTb.find('.ngCustomBtn');
      if( $cu.length > 0 && typeof G.O.fnImgToolbarCustDisplay == 'function' ) {
        G.O.fnImgToolbarCustDisplay( $cu, G.I[imageIdx], ExposedObjects());
      }

      // if( setTxt && (G.O.viewerToolbar.label == 'always' || G.O.viewerToolbar.label == G.toolbarMode) ) {
      if( setTxt && (G.toolbarMode == 'std' ? G.O.viewerToolbar.standard : G.O.viewerToolbar.minimized).indexOf('label') >= 0 ) {
        G.$E.conVwTb.find('.label').show();
      }
      else {
        G.$E.conVwTb.find('.label').hide();
      }

      // set page number
      var viewerMaxImages= galleryCountImages();
      if( viewerMaxImages > 0 ) {
        G.$E.conVwTb.find('.pageCounter').html((G.I[imageIdx].imageNumber+1)+'/'+viewerMaxImages);
      }

      //ResizeInternalViewer();
    }

    function CloseInternalViewer( setLocationHash ) {

      if( G.viewerImageIsChanged ) {
        G.$E.vwContent.find('*').stop(true,true);
        //return;
      }
      G.viewerImageIsChanged=false;

      if( G.containerViewerDisplayed ) {

        // window.clearInterval(G.viewerResizeTimerID);
        window.clearTimeout(G.viewerResizeTimerID);

        if( G.playSlideshow ) {
          window.clearInterval(G.playSlideshowTimerID);
          G.playSlideshow=false;
        }

        G.viewerSwipe.removeEventListeners();
        G.viewerSwipe=null;

        if( !(G.O.galleryFullpageButton && G.$E.base.hasClass('fullpage')) ) {      // avoid displaying scrollbar when gallery is in fullpage mode
          ScrollbarSetVisible();
        }

        if( G.viewerIsFullscreen ) {
          G.viewerIsFullscreen=false;
          ngscreenfull.exit();
        }

        G.$E.conVwCon.hide(0).off().show(0).html('').remove();

        G.containerViewerDisplayed=false;
        if( G.albumIdxToOpenOnViewerClose != -1 ) {
          DisplayAlbum(G.albumIdxToOpenOnViewerClose,true);
        }
        else {
          if( G.O.locationHash && setLocationHash ) {
            var albumID=G.I[G.viewerCurrentItemIdx].albumID,
            s='nanogallery/'+G.baseEltID+'/'+albumID;
            G.lastLocationHash='#'+s;
            try {
              top.location.hash=s;
            }
            catch(e) {
              G.O.locationHash=false;
            }
          }
          ThumbnailHoverOutAll();
        }
        G.timeImgChanged=new Date().getTime();
      }
    };


    function ResizeInternalViewer() {

      if( !G.containerViewerDisplayed ) { return; }

      if( (new Date().getTime()) - G.viewerResizeTimerLastRun < 100 ) { return; }


      //window.clearInterval(G.viewerResizeTimerID);
      //G.viewerResizeTimerID=window.setInterval(function(){ResizeInternalViewer()},200);

      window.requestAnimationFrame( function() {
        var windowsW=G.$E.conVw.width();
        var windowsH=G.$E.conVw.height();

        var $elt=G.$E.vwImgC,
        vwImgC_H=$elt.height(),
        vwImgC_W=$elt.width(),
        vwImgC_OHt=$elt.outerHeight(true),
        vwImgC_OHf=$elt.outerHeight(false);

        var $tb=G.$E.conVwTb.find('.toolbar'),
        tb_OHt=$tb.outerHeight(true);

        if( vwImgC_H <= 40 || !G.O.viewerToolbar.display ) {
          G.$E.conVwTb.css({visibility:'hidden'});
        }
        else {
          G.$E.conVwTb.css({visibility:'visible'});
        }

        var contentOuterWidthV=Math.abs(G.$E.vwContent.outerHeight(true)-G.$E.vwContent.height()),  // vertical margin+border+padding
        contentOuterWidthH=Math.abs(G.$E.vwContent.outerWidth(true)-G.$E.vwContent.width()),  // horizontal margin+border+padding
        imgBorderV=vwImgC_OHf-$elt.innerHeight(),
        imgBorderH=Math.abs($elt.outerWidth(false)-$elt.innerWidth()),
        imgPaddingV=Math.abs($elt.innerHeight()-vwImgC_H),
        imgPaddingH=Math.abs($elt.innerWidth()-vwImgC_W),
        tV=imgBorderV+imgPaddingV,  //+tmargin;
        tH=imgBorderH+imgPaddingH,  //+tmargin;
        toolbarH=0;
        if( G.O.viewerToolbar.style != 'innerImage' ) {
          toolbarH=tb_OHt;
        }
        var h=windowsH-toolbarH-contentOuterWidthV,
        w=windowsW-contentOuterWidthH;

        switch( G.O.viewerToolbar.position ) {
          case 'top':
            G.$E.vwContent.css({height:h, width:w, top:toolbarH  });
            var posY=0;
            if( G.O.viewerToolbar.style == 'innerImage' ) {
              posY= Math.abs(vwImgC_OHt-vwImgC_H)/2 +5;
            }
            if( G.O.viewerToolbar.style == 'stuckImage' ) {
              posY= Math.abs(vwImgC_OHt-vwImgC_H)/2 -tV;
            }
            G.$E.conVwTb.css({top: posY});
            break;

          case 'bottom':
          default:
            G.$E.vwContent.css({height:h, width:w });
            var posY=0;
            if( G.O.viewerToolbar.style == 'innerImage' ) {
              posY= Math.abs(vwImgC_OHt-vwImgC_H)/2 +5;//- G.$E.conVwTb.outerHeight(true) ;
            }
            if( G.O.viewerToolbar.style == 'stuckImage' ) {
              posY= Math.abs(vwImgC_OHt-vwImgC_H)/2 -tV;
            }
            G.$E.conVwTb.css({bottom: posY});
            break;
        }

        if( G.O.viewerToolbar.style == 'innerImage' ) {
          $tb.css({'max-width': vwImgC_W});
        }

        if( G.O.viewerToolbar.style == 'fullWidth' ) {
          $tb.css({width: w});
        }

        G.$E.conVwTb.css({ height: tb_OHt });   // resize toolbar container to toolbar size
        
        
        G.$E.vwContent.children('img').css({'max-width':(w-tH), 'max-height':(h-tV) });
        // G.$E.vwContent.children('img').css({'width':'100%', 'height':'100%' });
        // G.$E.vwContent.children('img').css({'background-size':'contain', 'background-position':'center', 'background-repeat':'no-repeat' });
        G.$E.vwContent.children('img').css({'object-fit':'contain' });

        G.viewerResizeTimerID=window.setTimeout( ResizeInternalViewer, 100);
        G.viewerResizeTimerLastRun=new Date().getTime();

      });
    }



    function OpenImageCustomViewer( imageIdx ) {
      var n=imageIdx,
      items=[],
      current=0;

      items.push(G.I[n]);

      var l=G.I.length;
      for( var j=n+1; j<l ; j++) {
        if( G.I[j].kind == 'image' && G.I[j].albumID == G.I[imageIdx].albumID && G.I[j].destinationURL == '' ) {
          current++;
          items.push(G.I[j]);
        }
      }
      for( var j=0; j<n; j++) {
        if( G.I[j].kind == 'image' && G.I[j].albumID == G.I[imageIdx].albumID && G.I[j].destinationURL == '' ) {
          current++;
          items.push(G.I[j]);
        }
      }
      G.O.fnThumbnailOpen(items);
    }


    function OpenFancyBox( imageIdx ) {
      var n=imageIdx,
      lstImages=[],
      current=0;

      lstImages[current]=new Object;
      lstImages[current].href=G.I[n].responsiveURL();
      lstImages[current].title=G.I[n].title;

      var l=G.I.length;
      for( var j=n+1; j<l ; j++) {
        if( G.I[j].kind == 'image' && G.I[j].albumID == G.I[imageIdx].albumID && G.I[j].destinationURL == '' ) {
          current++;
          lstImages[current]=new Object;
          lstImages[current].href=G.I[j].responsiveURL();
          lstImages[current].title=G.I[j].title;
        }
      }
      for( var j=0; j<n; j++) {
        if( G.I[j].kind == 'image' && G.I[j].albumID == G.I[imageIdx].albumID && G.I[j].destinationURL == '' ) {
          current++;
          lstImages[current]=new Object;
          lstImages[current].href=G.I[j].responsiveURL();
          lstImages[current].title=G.I[j].title;
        }
      }
      if( G.O.fancyBoxOptions != null ) {
        jQuery.fancybox(lstImages, G.O.fancyBoxOptions);
      }
      else {
        jQuery.fancybox(lstImages,{'autoPlay':false, 'nextEffect':'fade', 'prevEffect':'fade','scrolling':'no',
          helpers    : {  buttons  : { 'position' : 'bottom'} }
        });
      }
    };

    // ##### BREADCRUMB/THUMBNAIL COLOR SCHEME #####
    function SetColorScheme( element ) {
      var cs=null;
      switch(toType(G.O.colorScheme)) {
        case 'object':    // user custom color scheme object
          cs=G.colorScheme_default;
          jQuery.extend(true,cs,G.O.colorScheme);
          G.colorSchemeLabel='nanogallery_colorscheme_custom_'+G.baseEltID;
          break;
        case 'string':    // name of an internal defined color scheme
          switch( G.O.colorScheme ) {
            case 'none':
              return;
              break;
            case 'light':
              cs=G.colorScheme_light;
              G.colorSchemeLabel='nanogallery_colorscheme_light';
              break;
            case 'lightBackground':
              cs=G.colorScheme_lightBackground;
              G.colorSchemeLabel='nanogallery_colorscheme_lightBackground';
              break;
            case 'darkRed':
              cs=G.colorScheme_darkRed;
              G.colorSchemeLabel='nanogallery_colorscheme_darkred';
              break;
            case 'darkGreen':
              cs=G.colorScheme_darkGreen;
              G.colorSchemeLabel='nanogallery_colorscheme_darkgreen';
              break;
            case 'darkBlue':
              cs=G.colorScheme_darkBlue;
              G.colorSchemeLabel='nanogallery_colorscheme_darkblue';
              break;
            case 'darkOrange':
              cs=G.colorScheme_darkOrange;
              G.colorSchemeLabel='nanogallery_colorscheme_darkorange';
              break;
            case 'default':
            case 'dark':
            default:
              cs=G.colorScheme_default;
              G.colorSchemeLabel='nanogallery_colorscheme_default';
          }
          break;
        default:
          nanoAlert('Error in colorScheme parameter.');
          return;
      }




      //var s1='.nanogallery_theme_'+G.O.theme+' ';
      var s1='.' + G.colorSchemeLabel + ' ';
      var s=s1+'.nanoGalleryNavigationbar { background:'+cs.navigationbar.background+' !important; }'+'\n';
      if( cs.navigationbar.border !== undefined ) { s+=s1+'.nanoGalleryNavigationbar { border:'+cs.navigationbar.border+' !important; }'+'\n'; }
      if( cs.navigationbar.borderTop !== undefined ) { s+=s1+'.nanoGalleryNavigationbar { border-top:'+cs.navigationbar.borderTop+' !important; }'+'\n'; }
      if( cs.navigationbar.borderBottom !== undefined ) { s+=s1+'.nanoGalleryNavigationbar { border-bottom:'+cs.navigationbar.borderBottom+' !important; }'+'\n'; }
      if( cs.navigationbar.borderRight !== undefined ) { s+=s1+'.nanoGalleryNavigationbar { border-right:'+cs.navigationbar.borderRight+' !important; }'+'\n'; }
      if( cs.navigationbar.borderLeft !== undefined ) { s+=s1+'.nanoGalleryNavigationbar { border-left:'+cs.navigationbar.borderLeft+' !important; }'+'\n'; }
      s+=s1+'.nanoGalleryNavigationbar .oneFolder  { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .separator  { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .separatorRTL  { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .nanoGalleryTags { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .setFullPageButton { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .removeFullPageButton { color:'+cs.navigationbar.color+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .oneFolder:hover { color:'+cs.navigationbar.colorHover+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .separatorRTL:hover { color:'+cs.navigationbar.colorHover+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .nanoGalleryTags:hover { color:'+cs.navigationbar.colorHover+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .setFullPageButton:hover { color:'+cs.navigationbar.colorHover+' !important; }'+'\n';
      s+=s1+'.nanoGalleryNavigationbar .removeFullPageButton:hover { color:'+cs.navigationbar.colorHover+' !important; }'+'\n';

      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer { background:'+cs.thumbnail.background+' !important; border:'+cs.thumbnail.border+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .imgContainer { background:'+cs.thumbnail.background+' !important; }'+'\n';
      // s+=s1+'.nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { background:'+cs.thumbnail.labelBackground+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImage{ background:'+cs.thumbnail.labelBackground+' ; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImageTitle  { color:'+cs.thumbnail.titleColor+' !important; Text-Shadow:'+cs.thumbnail.titleShadow+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImageTitle:before { color:'+cs.thumbnail.titleColor+' !important; Text-Shadow:'+cs.thumbnail.titleShadow+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle { color:'+cs.thumbnail.titleColor+' !important; Text-Shadow:'+cs.thumbnail.titleShadow+' !important; }'+'\n';
      var c=cs.thumbnail.labelBackground;
      if( c == 'transparent' ) { c=''; }
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle > span { background-color:'+cs.thumbnail.titleColor+' !important; color:'+c+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle:before { color:'+cs.thumbnail.titleColor+' !important; Text-Shadow:'+cs.thumbnail.titleShadow+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelDescription { color:'+cs.thumbnail.descriptionColor+' !important; Text-Shadow:'+cs.thumbnail.descriptionShadow+' !important; }'+'\n';
      s+=s1+'.nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelDescription > span { background-color:'+cs.thumbnail.titleColor+' !important; color:'+c+' !important; }'+'\n';
      // s+='.' + G.colorSchemeLabel +'.fullpage { background:'+G.O.galleryFullpageBgColor+' !important; }'+'\n';

      // pagination dot based
      if( G.O.paginationDots ) {
        s+=s1+'.nanoGalleryPaginationDot > .paginationItem { border:'+cs.thumbnail.paginationDotBorder+' !important; background:'+cs.thumbnail.paginationDotBack+' !important;}'+'\n';
        s+=s1+'.nanoGalleryPaginationDot > .currentPage { background:'+cs.thumbnail.paginationDotSelBack+' !important;}'+'\n';
      }

      // gallery fullpage background color
      var gbg='nanogallery_galleryfullpage_bgcolor_'+G.baseEltID;
      s+='.' + gbg +'.fullpage { background:'+G.O.galleryFullpageBgColor+' !important; }'+'\n';

      jQuery('head').append('<style>'+s+'</style>');
      jQuery(element).addClass(G.colorSchemeLabel);
      jQuery(element).addClass(gbg);

    };

    // ##### VIEWER COLOR SCHEME #####
    function SetColorSchemeViewer( element ) {

      var cs=null;
      switch(toType(G.O.colorSchemeViewer)) {
        case 'object':    // user custom color scheme object
          cs=G.colorSchemeViewer_default;
          jQuery.extend(true,cs,G.O.colorSchemeViewer);
          G.colorSchemeLabel='nanogallery_colorschemeviewer_custom';
          break;
        case 'string':    // name of an internal defined color scheme
          switch( G.O.colorSchemeViewer ) {
            case 'none':
              return;
              break;
            case 'light':
              cs=G.colorSchemeViewer_light;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_light';
              break;
            case 'darkRed':
              cs=G.colorSchemeViewer_darkRed;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_darkred';
              break;
            case 'darkGreen':
              cs=G.colorSchemeViewer_darkGreen;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_darkgreen';
              break;
            case 'darkBlue':
              cs=G.colorSchemeViewer_darkBlue;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_darkblue';
              break;
            case 'darkOrange':
              cs=G.colorSchemeViewer_darkOrange;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_darkorange';
              break;
            case 'dark':
              cs=G.colorSchemeViewer_dark;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_dark';
              break;
            case 'default':
            default:
              cs=G.colorSchemeViewer_default;
              G.colorSchemeLabel='nanogallery_colorschemeviewer_default';
          }
          break;
        default:
          nanoAlert('Error in colorSchemeViewer parameter.');
          return;
      }


      //var s1='.nanogallery_theme_'+G.O.theme+' ';
      var s1='.' + G.colorSchemeLabel + ' ';
      var s=s1+'.nanoGalleryViewer { background:'+cs.background+' !important; }'+'\n';
      //s+=s1+'.nanoGalleryViewer { background:'+cs.viewer.background+'; color:'+cs.viewer.color+'; }'+'\n';
      s+=s1+'.nanoGalleryViewer .content img { border:'+cs.imageBorder+' !important; box-shadow:'+cs.imageBoxShadow+' !important; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar { background:'+cs.barBackground+' !important; border:'+cs.barBorder+' !important; color:'+cs.barColor+' !important; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar .previousButton:after { color:'+cs.barColor+' !important; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar .nextButton:after { color:'+cs.barColor+' !important; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar .closeButton:after { color:'+cs.barColor+' !important; }'+'\n';
      //s+=s1+'.nanoGalleryViewer .toolbar .label { background:'+cs.barBackground+'; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar .label .title { color:'+cs.barColor+' !important; }'+'\n';
      s+=s1+'.nanoGalleryViewer .toolbar .label .description { color:'+cs.barDescriptionColor+' !important; }'+'\n';
      jQuery('head').append('<style>'+s+'</style>');
      jQuery(element).addClass(G.colorSchemeLabel);
    };



    // #################
    // ##### TOOLS #####
    // #################

    // Display a message
    function nanoAlert( msg, verbose ) {
      nanoConsoleLog(msg);
      if( G.$E.conConsole != null ) {
        G.$E.conConsole.css({visibility:'visible', height:'auto'});
        if( verbose == false ) {
          G.$E.conConsole.append('<p>'+ msg + '</p>');
        }
        else {
          G.$E.conConsole.append('<p>nanoGALLERY: '+msg+ ' ['+G.baseEltID+']</p>');
        }
        //alert('nanoGALLERY: ' + msg);
      }
    };

    // write to console log
    function nanoConsoleLog( msg ) {
      if (window.console) { console.log('nanoGALLERY: ' + msg + ' ['+G.baseEltID+']'); }
    };

    // get viewport coordinates and size
    function getViewport() {
      var $win = jQuery(window);

      // to simulate smaller device screen width
      vpW=$win.width();
      if( G.O.demoViewportWidth > 0 ) {
        if( G.O.demoViewportWidth < vpW) {
          vpW=G.O.demoViewportWidth;
        }
        G.O.maxWidth=vpW;
        jQuery(G.$E.base).css({'width':G.O.maxWidth});
        jQuery(G.$E.base).css({'margin-left':'auto'});
        jQuery(G.$E.base).css({'margin-right':'auto'});
      }


      return {
        l: $win.scrollLeft(),
        t: $win.scrollTop(),
        w: vpW,
        h: $win.height()
      }
    }


    function inViewport( $elt, threshold ) {
      var wp=getViewport(),
      eltOS=$elt.offset(),
      th=$elt.outerHeight(true),
      tw=$elt.outerWidth(true);
      if( eltOS.top >= (wp.t-threshold)
        && (eltOS.top+th) <= (wp.t+wp.h+threshold)
        && eltOS.left >= (wp.l-threshold)
        && (eltOS.left+tw) <= (wp.l+wp.w+threshold) ) {
        return true;
      }
      else {
        return false;
      }
    }

    function inViewportVert( $elt, threshold ) {
      var wp=getViewport(),
      eltOS=$elt.offset(),
      th=$elt.outerHeight(true),
      tw=$elt.outerWidth(true);

      if( wp.t == 0 && (eltOS.top) <= (wp.t+wp.h ) ) { return true; }

      if( eltOS.top >= (wp.t)
        && (eltOS.top+th) <= (wp.t+wp.h-threshold) ) {
          return true;
      }
      else {
        return false;
      }
    }


    // set z-index to display element on top of all others
    function setElementOnTop( start, elt ) {
      var highest_index = 0;
      if( start=='' ) { start= '*'; }
      jQuery(start).each(function() {
        var cur = parseInt(jQuery(this).css('z-index'));
        highest_index = cur > highest_index ? cur : highest_index;
      });
      highest_index++;
      jQuery(elt).css('z-index',highest_index);
    };

    // set z-index to display 2 elements on top of all others
    function set2ElementsOnTop( start, elt1, elt2 ) {
      var highest_index = 0;
      if( start=='' ) { start= '*'; }
      jQuery(start).each(function() {
        var cur = parseInt(jQuery(this).css('z-index'));
        highest_index = cur > highest_index ? cur : highest_index;
      });
      highest_index++;
      jQuery(elt2).css('z-index',highest_index+1);
      jQuery(elt1).css('z-index',highest_index);
    };


    // return the real type of the object
    var toType = function( obj ) {
      // by Angus Croll - http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    };


    // return true if current jQuery version match the minimum required
    function jQueryMinVersion( version ) {
      var $vrs = window.jQuery.fn.jquery.split('.'),
      min = version.split('.');
      for (var i=0, len=$vrs.length; i<len; i++) {
        if (min[i] && (+$vrs[i]) < (+min[i])) {
          return false;
        }
      }
      return true;
    };


    //+ Jonas Raoni Soares Silva
    //@ http://jsfromhell.com/array/shuffle [v1.0]
    function AreaShuffle(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };


    // color lighter or darker
    // found on http://stackoverflow.com/questions/1507931/generate-lighter-darker-color-in-css-using-javascript/5747818#5747818
    // Ratio is between 0 and 1
    var changeColor = function( color, ratio, darker ) {
      // Trim trailing/leading whitespace
      color = color.replace(/^\s*|\s*$/, '');

      // Expand three-digit hex
      color = color.replace(
        /^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        '#$1$1$2$2$3$3'
      );

      // Calculate ratio
      var difference = Math.round(ratio * 256) * (darker ? -1 : 1),
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
          '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
          '\\s*,\\s*' +
          '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
          '\\s*,\\s*' +
          '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
          '(?:\\s*,\\s*' +
          '(0|1|0?\\.\\d+))?' +
          '\\s*\\)$'
        , 'i')),
        alpha = !!rgb && rgb[4] != null ? rgb[4] : null,

        // Convert hex to decimal
        decimal = !!rgb? [rgb[1], rgb[2], rgb[3]] : color.replace(
          /^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,
          function() {
            return parseInt(arguments[1], 16) + ',' +
              parseInt(arguments[2], 16) + ',' +
              parseInt(arguments[3], 16);
          }
        ).split(/,/),
        returnValue;

      // Return RGB(A)
      return !!rgb ?
        'rgb' + (alpha !== null ? 'a' : '') + '(' +
          Math[darker ? 'max' : 'min'](
            parseInt(decimal[0], 10) + difference, darker ? 0 : 255
          ) + ', ' +
          Math[darker ? 'max' : 'min'](
            parseInt(decimal[1], 10) + difference, darker ? 0 : 255
          ) + ', ' +
          Math[darker ? 'max' : 'min'](
            parseInt(decimal[2], 10) + difference, darker ? 0 : 255
          ) +
          (alpha !== null ? ', ' + alpha : '') +
          ')' :
        // Return hex
        [
          '#',
          pad(Math[darker ? 'max' : 'min'](
            parseInt(decimal[0], 10) + difference, darker ? 0 : 255
          ).toString(16), 2),
          pad(Math[darker ? 'max' : 'min'](
            parseInt(decimal[1], 10) + difference, darker ? 0 : 255
          ).toString(16), 2),
          pad(Math[darker ? 'max' : 'min'](
            parseInt(decimal[2], 10) + difference, darker ? 0 : 255
          ).toString(16), 2)
        ].join('');
    };
    var lighterColor = function(color, ratio) {
      return changeColor(color, ratio, false);
    };
    var darkerColor = function(color, ratio) {
      return changeColor(color, ratio, true);
    };
    var pad = function(num, totalChars) {
      var pad = '0';
      num = num + '';
      while (num.length < totalChars) {
        num = pad + num;
      }
      return num;
    };

  }

// END NANOGALLERY
//}( jQuery ));
});

// ##########################################
// #####        END NANOGALLERY         #####
// ##########################################










/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function( jQuery, undefined ) {

  var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

  // plusequals test for += 100 -= 100
  rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
  // a set of RE's that can match strings and generate color tuples.
  stringParsers = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function( execResult ) {
        return [
          execResult[ 1 ],
          execResult[ 2 ],
          execResult[ 3 ],
          execResult[ 4 ]
        ];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function( execResult ) {
        return [
          execResult[ 1 ] * 2.55,
          execResult[ 2 ] * 2.55,
          execResult[ 3 ] * 2.55,
          execResult[ 4 ]
        ];
      }
    }, {
      // this regex ignores A-F because it's compared against an already lowercased string
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function( execResult ) {
        return [
          parseInt( execResult[ 1 ], 16 ),
          parseInt( execResult[ 2 ], 16 ),
          parseInt( execResult[ 3 ], 16 )
        ];
      }
    }, {
      // this regex ignores A-F because it's compared against an already lowercased string
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function( execResult ) {
        return [
          parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
          parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
          parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
        ];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function( execResult ) {
        return [
          execResult[ 1 ],
          execResult[ 2 ] / 100,
          execResult[ 3 ] / 100,
          execResult[ 4 ]
        ];
      }
    }],

  // jQuery.Color( )
  color = jQuery.Color = function( color, green, blue, alpha ) {
    return new jQuery.Color.fn.parse( color, green, blue, alpha );
  },
  spaces = {
    rgba: {
      props: {
        red: {
          idx: 0,
          type: "byte"
        },
        green: {
          idx: 1,
          type: "byte"
        },
        blue: {
          idx: 2,
          type: "byte"
        }
      }
    },

    hsla: {
      props: {
        hue: {
          idx: 0,
          type: "degrees"
        },
        saturation: {
          idx: 1,
          type: "percent"
        },
        lightness: {
          idx: 2,
          type: "percent"
        }
      }
    }
  },
  propTypes = {
    "byte": {
      floor: true,
      max: 255
    },
    "percent": {
      max: 1
    },
    "degrees": {
      mod: 360,
      floor: true
    }
  },
  support = color.support = {},

  // element for support tests
  supportElem = jQuery( "<p>" )[ 0 ],

  // colors = jQuery.Color.names
  colors,

  // local aliases of functions called often
  each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
  space.cache = "_" + spaceName;
  space.props.alpha = {
    idx: 3,
    type: "percent",
    def: 1
  };
});

function clamp( value, prop, allowEmpty ) {
  var type = propTypes[ prop.type ] || {};

  if ( value == null ) {
    return (allowEmpty || !prop.def) ? null : prop.def;
  }

  // ~~ is an short way of doing floor for positive numbers
  value = type.floor ? ~~value : parseFloat( value );

  // IE will pass in empty strings as value for alpha,
  // which will hit this case
  if ( isNaN( value ) ) {
    return prop.def;
  }

  if ( type.mod ) {
    // we add mod before modding to make sure that negatives values
    // get converted properly: -10 -> 350
    return (value + type.mod) % type.mod;
  }

  // for now all property types without mod have min and max
  return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
  var inst = color(),
    rgba = inst._rgba = [];

  string = string.toLowerCase();

  each( stringParsers, function( i, parser ) {
    var parsed,
      match = parser.re.exec( string ),
      values = match && parser.parse( match ),
      spaceName = parser.space || "rgba";

    if ( values ) {
      parsed = inst[ spaceName ]( values );

      // if this was an rgba parse the assignment might happen twice
      // oh well....
      inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
      rgba = inst._rgba = parsed._rgba;

      // exit each( stringParsers ) here because we matched
      return false;
    }
  });

  // Found a stringParser that handled it
  if ( rgba.length ) {

    // if this came from a parsed string, force "transparent" when alpha is 0
    // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
    if ( rgba.join() === "0,0,0,0" ) {
      jQuery.extend( rgba, colors.transparent );
    }
    return inst;
  }

  // named colors
  return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
  parse: function( red, green, blue, alpha ) {
    if ( red === undefined ) {
      this._rgba = [ null, null, null, null ];
      return this;
    }
    if ( red.jquery || red.nodeType ) {
      red = jQuery( red ).css( green );
      green = undefined;
    }

    var inst = this,
      type = jQuery.type( red ),
      rgba = this._rgba = [];

    // more than 1 argument specified - assume ( red, green, blue, alpha )
    if ( green !== undefined ) {
      red = [ red, green, blue, alpha ];
      type = "array";
    }

    if ( type === "string" ) {
      return this.parse( stringParse( red ) || colors._default );
    }

    if ( type === "array" ) {
      each( spaces.rgba.props, function( key, prop ) {
        rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
      });
      return this;
    }

    if ( type === "object" ) {
      if ( red instanceof color ) {
        each( spaces, function( spaceName, space ) {
          if ( red[ space.cache ] ) {
            inst[ space.cache ] = red[ space.cache ].slice();
          }
        });
      } else {
        each( spaces, function( spaceName, space ) {
          var cache = space.cache;
          each( space.props, function( key, prop ) {

            // if the cache doesn't exist, and we know how to convert
            if ( !inst[ cache ] && space.to ) {

              // if the value was null, we don't need to copy it
              // if the key was alpha, we don't need to copy it either
              if ( key === "alpha" || red[ key ] == null ) {
                return;
              }
              inst[ cache ] = space.to( inst._rgba );
            }

            // this is the only case where we allow nulls for ALL properties.
            // call clamp with alwaysAllowEmpty
            inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
          });

          // everything defined but alpha?
          if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
            // use the default of 1
            inst[ cache ][ 3 ] = 1;
            if ( space.from ) {
              inst._rgba = space.from( inst[ cache ] );
            }
          }
        });
      }
      return this;
    }
  },
  is: function( compare ) {
    var is = color( compare ),
      same = true,
      inst = this;

    each( spaces, function( _, space ) {
      var localCache,
        isCache = is[ space.cache ];
      if (isCache) {
        localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
        each( space.props, function( _, prop ) {
          if ( isCache[ prop.idx ] != null ) {
            same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
            return same;
          }
        });
      }
      return same;
    });
    return same;
  },
  _space: function() {
    var used = [],
      inst = this;
    each( spaces, function( spaceName, space ) {
      if ( inst[ space.cache ] ) {
        used.push( spaceName );
      }
    });
    return used.pop();
  },
  transition: function( other, distance ) {
    var end = color( other ),
      spaceName = end._space(),
      space = spaces[ spaceName ],
      startColor = this.alpha() === 0 ? color( "transparent" ) : this,
      start = startColor[ space.cache ] || space.to( startColor._rgba ),
      result = start.slice();

    end = end[ space.cache ];
    each( space.props, function( key, prop ) {
      var index = prop.idx,
        startValue = start[ index ],
        endValue = end[ index ],
        type = propTypes[ prop.type ] || {};

      // if null, don't override start value
      if ( endValue === null ) {
        return;
      }
      // if null - use end
      if ( startValue === null ) {
        result[ index ] = endValue;
      } else {
        if ( type.mod ) {
          if ( endValue - startValue > type.mod / 2 ) {
            startValue += type.mod;
          } else if ( startValue - endValue > type.mod / 2 ) {
            startValue -= type.mod;
          }
        }
        result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
      }
    });
    return this[ spaceName ]( result );
  },
  blend: function( opaque ) {
    // if we are already opaque - return ourself
    if ( this._rgba[ 3 ] === 1 ) {
      return this;
    }

    var rgb = this._rgba.slice(),
      a = rgb.pop(),
      blend = color( opaque )._rgba;

    return color( jQuery.map( rgb, function( v, i ) {
      return ( 1 - a ) * blend[ i ] + a * v;
    }));
  },
  toRgbaString: function() {
    var prefix = "rgba(",
      rgba = jQuery.map( this._rgba, function( v, i ) {
        return v == null ? ( i > 2 ? 1 : 0 ) : v;
      });

    if ( rgba[ 3 ] === 1 ) {
      rgba.pop();
      prefix = "rgb(";
    }

    return prefix + rgba.join() + ")";
  },
  toHslaString: function() {
    var prefix = "hsla(",
      hsla = jQuery.map( this.hsla(), function( v, i ) {
        if ( v == null ) {
          v = i > 2 ? 1 : 0;
        }

        // catch 1 and 2
        if ( i && i < 3 ) {
          v = Math.round( v * 100 ) + "%";
        }
        return v;
      });

    if ( hsla[ 3 ] === 1 ) {
      hsla.pop();
      prefix = "hsl(";
    }
    return prefix + hsla.join() + ")";
  },
  toHexString: function( includeAlpha ) {
    var rgba = this._rgba.slice(),
      alpha = rgba.pop();

    if ( includeAlpha ) {
      rgba.push( ~~( alpha * 255 ) );
    }

    return "#" + jQuery.map( rgba, function( v ) {

      // default to 0 when nulls exist
      v = ( v || 0 ).toString( 16 );
      return v.length === 1 ? "0" + v : v;
    }).join("");
  },
  toString: function() {
    return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
  }
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
  h = ( h + 1 ) % 1;
  if ( h * 6 < 1 ) {
    return p + (q - p) * h * 6;
  }
  if ( h * 2 < 1) {
    return q;
  }
  if ( h * 3 < 2 ) {
    return p + (q - p) * ((2/3) - h) * 6;
  }
  return p;
}

spaces.hsla.to = function ( rgba ) {
  if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
    return [ null, null, null, rgba[ 3 ] ];
  }
  var r = rgba[ 0 ] / 255,
    g = rgba[ 1 ] / 255,
    b = rgba[ 2 ] / 255,
    a = rgba[ 3 ],
    max = Math.max( r, g, b ),
    min = Math.min( r, g, b ),
    diff = max - min,
    add = max + min,
    l = add * 0.5,
    h, s;

  if ( min === max ) {
    h = 0;
  } else if ( r === max ) {
    h = ( 60 * ( g - b ) / diff ) + 360;
  } else if ( g === max ) {
    h = ( 60 * ( b - r ) / diff ) + 120;
  } else {
    h = ( 60 * ( r - g ) / diff ) + 240;
  }

  // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
  // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
  if ( diff === 0 ) {
    s = 0;
  } else if ( l <= 0.5 ) {
    s = diff / add;
  } else {
    s = diff / ( 2 - add );
  }
  return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function ( hsla ) {
  if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
    return [ null, null, null, hsla[ 3 ] ];
  }
  var h = hsla[ 0 ] / 360,
    s = hsla[ 1 ],
    l = hsla[ 2 ],
    a = hsla[ 3 ],
    q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
    p = 2 * l - q;

  return [
    Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
    Math.round( hue2rgb( p, q, h ) * 255 ),
    Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
    a
  ];
};


each( spaces, function( spaceName, space ) {
  var props = space.props,
    cache = space.cache,
    to = space.to,
    from = space.from;

  // makes rgba() and hsla()
  color.fn[ spaceName ] = function( value ) {

    // generate a cache for this space if it doesn't exist
    if ( to && !this[ cache ] ) {
      this[ cache ] = to( this._rgba );
    }
    if ( value === undefined ) {
      return this[ cache ].slice();
    }

    var ret,
      type = jQuery.type( value ),
      arr = ( type === "array" || type === "object" ) ? value : arguments,
      local = this[ cache ].slice();

    each( props, function( key, prop ) {
      var val = arr[ type === "object" ? key : prop.idx ];
      if ( val == null ) {
        val = local[ prop.idx ];
      }
      local[ prop.idx ] = clamp( val, prop );
    });

    if ( from ) {
      ret = color( from( local ) );
      ret[ cache ] = local;
      return ret;
    } else {
      return color( local );
    }
  };

  // makes red() green() blue() alpha() hue() saturation() lightness()
  each( props, function( key, prop ) {
    // alpha is included in more than one space
    if ( color.fn[ key ] ) {
      return;
    }
    color.fn[ key ] = function( value ) {
      var vtype = jQuery.type( value ),
        fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
        local = this[ fn ](),
        cur = local[ prop.idx ],
        match;

      if ( vtype === "undefined" ) {
        return cur;
      }

      if ( vtype === "function" ) {
        value = value.call( this, cur );
        vtype = jQuery.type( value );
      }
      if ( value == null && prop.empty ) {
        return this;
      }
      if ( vtype === "string" ) {
        match = rplusequals.exec( value );
        if ( match ) {
          value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
        }
      }
      local[ prop.idx ] = value;
      return this[ fn ]( local );
    };
  });
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
  var hooks = hook.split( " " );
  each( hooks, function( i, hook ) {
    jQuery.cssHooks[ hook ] = {
      set: function( elem, value ) {
        var parsed, curElem,
          backgroundColor = "";

        if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
          value = color( parsed || value );
          if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
            while (
              (backgroundColor === "" || backgroundColor === "transparent") &&
              curElem && curElem.style
            ) {
              try {
                backgroundColor = jQuery.css( curElem, "backgroundColor" );
                curElem = curElem.parentNode;
              } catch ( e ) {
              }
            }

            value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
              backgroundColor :
              "_default" );
          }

          value = value.toRgbaString();
        }
        try {
          elem.style[ hook ] = value;
        } catch( e ) {
          // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
        }
      }
    };
    jQuery.fx.step[ hook ] = function( fx ) {
      if ( !fx.colorInit ) {
        fx.start = color( fx.elem, hook );
        fx.end = color( fx.end );
        fx.colorInit = true;
      }
      jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
    };
  });

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
  expand: function( value ) {
    var expanded = {};

    each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
      expanded[ "border" + part + "Color" ] = value;
    });
    return expanded;
  }
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
  // 4.1. Basic color keywords
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",

  // 4.2.3. "transparent" color keyword
  transparent: [ null, null, null, 0 ],

  _default: "#ffffff"
};

})( jQuery );



/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {


	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class ngEventEmitter Manages event registering and emitting.
	 */
	function ngEventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = ngEventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.ngEventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link ngEventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting ngEventEmitter class.
	 */
	ngEventEmitter.noConflict = function noConflict() {
		exports.ngEventEmitter = originalGlobalValue;
		return ngEventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('ngEventEmitter/ngEventEmitter',[],function () {
			return ngEventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = ngEventEmitter;
	}
	else {
		this.ngEventEmitter = ngEventEmitter;
	}
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) {
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
      'ngEventEmitter/ngEventEmitter',
      'eventie/eventie'
    ], function( ngEventEmitter, eventie ) {
      return factory( window, ngEventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.ngimagesLoaded = factory(
      window,
      window.ngEventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, ngEventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ngImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ngImagesLoaded ) ) {
      return new ngImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ngImagesLoaded.prototype = new ngEventEmitter();

  ngImagesLoaded.prototype.options = {};

  ngImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ngImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ngImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ngImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ngImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.ngimagesLoaded = function( options, callback ) {
      var instance = new ngImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new ngEventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new ngEventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ngImagesLoaded;

});





// screenfull.js
// v1.1.0
// by sindresorhus - https://github.com/sindresorhus
// from: https://github.com/sindresorhus/screenfull.js

(function () {
	'use strict';

	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;
		var valLength;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0, valLength = val.length; i < valLength; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var ngscreenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function () {},
		onerror: function () {},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.ngscreenfull = false;
		}

		return;
	}

	Object.defineProperties(ngscreenfull, {
		isFullscreen: {
			get: function () {
				return !!document[fn.fullscreenElement];
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return !!document[fn.fullscreenEnabled];
			}
		}
	});

	document.addEventListener(fn.fullscreenchange, function (e) {
		ngscreenfull.onchange.call(ngscreenfull, e);
	});

	document.addEventListener(fn.fullscreenerror, function (e) {
		ngscreenfull.onerror.call(ngscreenfull, e);
	});

	if (isCommonjs) {
		module.exports = ngscreenfull;
	} else {
		window.ngscreenfull = ngscreenfull;
	}
})();





