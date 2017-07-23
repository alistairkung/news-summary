var htmlGen = {
  createForm: function (target, args = {id: "form"}) {
    var form = document.createElement("form");
    this._addAttributes(form, args);
    target.appendChild(form);
    return form;
  },
  createButton: function (target, args = {id: "btn", innerHTML: "Submit"}) {
    var btn = document.createElement("button");
    this._addAttributes(btn, args)
    target.appendChild(btn)
  },
  createTextarea: function (target, args = {id: "input"}) {
    var textarea = document.createElement("textarea");
    this._addAttributes(textarea, args)
    target.appendChild(textarea)
  },
  createHeader: function (target, args = {id: "main-header", innerHTML: "News Summary App"}) {
    var createdHeader = document.createElement("h1");
    this._addAttributes(createdHeader, args);
    target.appendChild(createdHeader);
  },
  createList: function (target, args = {id: "ls"}) {
    var list = document.createElement("ul");
    this._addAttributes(list, args);
    document.body.appendChild(list);
  },
  createListItem: function (label, args = {href: "#"}) {
    var listItem = document.createElement("li");
    var anchor = document.createElement("a");
    anchor.innerHTML = label;
    this._addAttributes(anchor, args)
    listItem.appendChild(anchor)
    document.getElementById("ls").appendChild(listItem);
  },
  createDiv: function(target = document.body, args = {id: "notes"}){
    var div = document.createElement("div");
    this._addAttributes(div, args);
    target.appendChild(div);
  },
  _addAttributes: function(item, args) {
    for (var property in args) {
      eval("item" + "." + property + " = " + "'" + args[property] + "'")
    }
  }
}
