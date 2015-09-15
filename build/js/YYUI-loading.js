'use strict';
$.loading = {
  hideLoading: function() {
    var objLoading;
    objLoading = $("#loading");
    if (objLoading !== null) {
      return $('.yyui-loading').remove();
    }
  },
  showLoading: function(div) {
    return div.append('<div class="yyui-loading">' + '<div class="yyui-loading01">' + '  <div class="yyui-loading1"></div>' + '  <div class="yyui-loading2"></div>' + '  <div class="yyui-loading3"></div>' + '  <div class="yyui-loading4"></div>' + '  <div class="yyui-loading5"></div>' + '</div>' + '</div>');
  }
};

$(function() {
  var loadingInit;
  $.loading.showLoading($('body'));
  return loadingInit = setInterval(function() {
    window.onload = $.loading.hideLoading();
    window.clearInterval(loadingInit);
  }, 10000);
});
