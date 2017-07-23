var assert = {
  isEqual: function(assert, expect, description) {
    if (assert === expect) {
      this.logPass(description)
    }
    else {
      this.logFail(description)
    }
  },
  isTruthy: function(assert, description) {
    if (assert){
      this.logPass(description)
    }
    else {
      this.logFail(description)
    }
  },
  isFalsy: function(assert, description) {
    if (!assert){
      this.logPass(description)
    }
    else {
      this.logFail(description)
    }
  },

  logPass: function (description) {
    console.log("Pass: " + description);
  },
  logFail: function (description) {
    console.error("Fail: " + description);
  }
};
