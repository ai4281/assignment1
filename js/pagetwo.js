/** Application page two component. */
var PageTwoContent = React.createClass({
  displayName: 'PageTwoContent',

  render: function() {
    return React.DOM.div(null,
      React.DOM.h2(null, 'Two'),
      React.DOM.p(null, 'I have an id of "two" on my page container. I\'m the second page container in this multi-page template.'),
      React.DOM.p(null, 'Notice that the theme is different for this page because we\'ve added a few ',
        React.DOM.code(null, 'data-theme'),
        ' swatch assigments here to show off how flexible it is. You can add any content or widget to these pages, but we\'re keeping these simple.'),
      JQueryMobileButton({href:'#home', 'data-direction':'reverse', className:'ui-btn ui-shadow ui-corner-all ui-btn-b'}, 'Back to page "one"')
    );
  }
});