function ViewModel() {
  this.addHeader();
  this.addList();
  this.addNoteDiv();
};

ViewModel.prototype.addHeader = function() {
  htmlGen.createHeader(document.body);
};

ViewModel.prototype.addList = function () {
  htmlGen.createList(document.body);
};

ViewModel.prototype.addNoteDiv = function () {
  htmlGen.createDiv();
}

ViewModel.prototype.createHeadlinesList = function (headlines, content) {
  headlines.forEach(function(element){
    var summary = "#" + content[element]
    htmlGen.createListItem(element, {href: summary})
  })
}

ViewModel.prototype.showArticleOnPage = function() {
  if (this.splitHashString(window.location)){
    this.showArticle(this.splitHashString(window.location))
  } else {
    this.showArticle("")
  };
};

ViewModel.prototype.showArticle = function (note) {
  document.getElementById("notes").innerHTML = note
};

ViewModel.prototype.splitHashString = function (location) {
  return location.hash.split("#")[1];
};
