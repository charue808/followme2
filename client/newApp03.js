Template.content.users = function() {
	return Meteor.users.find();
};

Template.content.usercount = function() {
  return Meteor.users.find().count();
};


window.twttr = (function (d, s, id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "http://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = {
        _e: [],
        ready: function (f) {
            t._e.push(f)
        }
    })
}(document, "script", "twitter-wjs"));


