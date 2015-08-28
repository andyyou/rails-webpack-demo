'use strict';

import $ from 'jquery';
import path from 'path';
import React from 'react/addons';



$(function() {
  const init = function () {

    /**
     * mount all components in current page
     * behavor similar react_ujs
     */
    $.each($('[data-component]'), (index, element) => {
      const componentName = $(element).data('component');
      const component = require('./components/' + componentName);
      const props = $(element).data('props');
      React.render(React.createElement(component, props), element);

      /**
       * Another way to dynamic to create ReactElement by JSX
       */
      // var Components = {};
      // Components[componentName] = require('./components/' + componentName);
      // React.render(<Components.actulComponentName />, element);
    });
  };


  $(document).on('page:change', () => {
    init();
  });
});

