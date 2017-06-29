riot.tag2('navbar', '<div id="navbar"> <nav> <a href="updates.html">Updates</a> <a href="tickets.html">Tickets</a> <a href="line-up.html">Line-up</a> <a href="getting_there.html">Getting There</a> <a href="about.html">About</a> <a href="blog.html">Blog</a> </nav> </div>', '', '', function(opts) {
var _this = this;

this.message = '';

this.sayHello = e => {
  var value = _this.refs.helloInput.value;
  if (value) {
    _this.message = 'Hello ' + value + '!';
  } else {
    _this.message = '';
  }
};
});