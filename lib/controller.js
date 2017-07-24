function Controller() {
  this.articles = new Articles();
  this.view = new ViewModel();
  this.articles.setHeadlines();
  this.articles.setContentUrls();
  this.urlListener();
};

Controller.prototype.displayHeadlines = function () {
  headlines = this.articles.getHeadlines();
  summaries = this.articles.getAllSummaries();
  content = this.articles.combineArticle(headlines, summaries)
  this.view.createHeadlinesList(headlines, content);
}

Controller.prototype.urlListener = function () {
  var self = this;
  window.addEventListener("hashchange", function(){
    self.view.showArticleOnPage()
  });
}
