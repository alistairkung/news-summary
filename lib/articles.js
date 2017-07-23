function Articles() {
  this._articles = []
};

Articles.prototype.getArticles = function () {
  var self = this;
  var xmlhttp = new XMLHttpRequest();
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          self._articles = myArr.response.results;
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};
