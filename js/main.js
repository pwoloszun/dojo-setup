require([
  'dojo/dom',
  "dojo/ready"
], function(dom, ready) {
  ready(function() {
    var el = dom.byId("greeting");
    el.innerHTML = "Hi!";
  });
});
