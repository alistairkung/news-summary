function Articles() {
  this._summaries = []
  this.setContentUrls();
};

Articles.prototype.combineArticle = function (keys, values) {
  var result = {};
      for (var i = 0; i < keys.length; i++)
           result[keys[i]] = values[i];
      return result;
}

Articles.prototype.setAllSummaries = function () {
  var self = this;
  var urls = this.getContentUrls();
  urls.map(function(element){
    return self._getSummary(element)
  });
}

Articles.prototype._getSummary = function (webUrl) {
  var self = this;
  var xmlhttp = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + webUrl;

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          self._summaries.push(myArr.text)
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

Articles.prototype.setContentUrls = function () {
  var self = this;
  var xmlhttp = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          self._contentUrls = myArr.response.results.map(function(element){
            return element.webUrl
          });
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

Articles.prototype.setHeadlines = function () {
  var self = this;
  var xmlhttp = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          self._headlines = myArr.response.results.map(function(element){
            return element.webTitle;
          });
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

Articles.prototype.getHeadlines = function () {
  return this._headlines
}

Articles.prototype.getContentUrls = function () {
  return this._contentUrls
}

Articles.prototype.getAllSummaries = function () {
  return this._summaries
}
