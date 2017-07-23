function Controller() {
  this.articles = new Articles();
  this.view = new ViewModel();
  this.articles.setHeadlines();
  this.urlListener();
};

Controller.prototype.displayHeadlines = function () {
  headlines = this.articles.getHeadlines();
  this.view.createHeadlinesList(headlines);
}

Controller.prototype.urlListener = function () {
  var self = this;
  window.addEventListener("hashchange", function(){
    self.view.showArticleOnPage()
  });
}
