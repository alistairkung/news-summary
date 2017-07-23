function Controller() {
  this.articles = new Articles();
  this.view = new ViewModel();
  this.urlListener();
};

Controller.prototype.urlListener = function () {
  var self = this;
  window.addEventListener("hashchange", function(){
    self.view.showArticleOnPage()
  });
}
