$ = jQuery = require('jquery');
const React = require('react');
const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');
const Header = require('./components/common/header');
const Authors = require('./components/authors/authorPage');

(function(win) {
  "use strict";

  let App = React.createClass({
  render: function() {
    let Child;

    switch (this.props.route) {
      case 'about': Child = About;
        break;
      case 'authors': Child = Authors;
        break;
      default: Child = Home;
    }

    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
});

function render() {
  let route = win.location.hash.substr(1);
  React.render(<App route={route} />, document.getElementById('app'));
}

win.addEventListener('hashchange', render);
render();

})(window);