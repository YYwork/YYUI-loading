'use strict';

$.loading =

  hideLoading: ()->
    objLoading = $("#loading")
    if objLoading != null
      $('.yyui-loading').remove()

  showLoading: (div)->
    div.append(
      '<div class="yyui-loading">'\
      +'<div class="yyui-loading01">'\
      +'  <div class="yyui-loading1"></div>'\
      +'  <div class="yyui-loading2"></div>'\
      +'  <div class="yyui-loading3"></div>'\
      +'  <div class="yyui-loading4"></div>'\
      +'  <div class="yyui-loading5"></div>'\
      +'</div>'\
      +'</div>')

$ ->
  $.loading.showLoading($('body'))
  loadingInit = setInterval(()->
    window.onload = $.loading.hideLoading()
    window.clearInterval(loadingInit)
    return
  , 10000)

