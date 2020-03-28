'use strict';



;define("covid-azores/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("covid-azores/adapters/application", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ApplicationAdapter extends _jsonApi.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "namespace", 'api');
    }

    buildURL(...args) {
      return `${super.buildURL(...args)}.json`;
    }

  }

  _exports.default = ApplicationAdapter;
});
;define("covid-azores/app", ["exports", "ember-resolver", "ember-load-initializers", "covid-azores/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("covid-azores/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("covid-azores/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("covid-azores/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("covid-azores/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("covid-azores/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("covid-azores/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("covid-azores/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("covid-azores/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("covid-azores/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("covid-azores/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("covid-azores/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("covid-azores/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("covid-azores/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("covid-azores/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("covid-azores/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("covid-azores/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("covid-azores/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("covid-azores/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("covid-azores/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("covid-azores/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("covid-azores/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("covid-azores/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("covid-azores/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("covid-azores/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("covid-azores/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("covid-azores/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("covid-azores/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("covid-azores/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("covid-azores/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("covid-azores/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("covid-azores/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("covid-azores/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("covid-azores/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("covid-azores/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("covid-azores/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("covid-azores/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("covid-azores/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("covid-azores/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("covid-azores/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("covid-azores/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("covid-azores/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("covid-azores/components/cases-chart", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CasesChartComponent = (_dec = Ember.computed('this.data.@each.date'), _dec2 = Ember.computed('this.sortedData.@each.date'), _dec3 = Ember.computed('this.sortedData.@each.total'), _dec4 = Ember.computed('this.sortedData.@each.saoMiguel'), _dec5 = Ember.computed('this.sortedData.@each.santaMaria'), _dec6 = Ember.computed('this.sortedData.@each.faial'), _dec7 = Ember.computed('this.sortedData.@each.terceira'), _dec8 = Ember.computed('this.sortedData.@each.pico'), _dec9 = Ember.computed('this.sortedData.@each.saoJorge'), _dec10 = Ember.computed('this.sortedData.@each.graciosa'), _dec11 = Ember.computed('this.sortedData.@each.flores'), _dec12 = Ember.computed('this.sortedData.@each.corvo'), _dec13 = Ember.computed('this.labels', 'this.totalsDataSet', 'this.saoMiguelDataSet', 'this.santaMariaSataSet', 'this.faialDataSet', 'this.terceiraDataSet', 'this.picoDataSet', 'this.saoJorgeDataSet', 'this.graciosaDataSet', 'this.floresDataSet', 'this.corvoDataSet'), _dec14 = Ember.computed(), (_class = (_temp = class CasesChartComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "constants", _descriptor, this);

      _defineProperty(this, "options", {
        dataSets: {
          totals: 'total',
          saoMiguel: 'saoMiguel',
          santaMaria: 'santaMaria',
          terceira: 'terceira',
          faial: 'faial',
          pico: 'pico',
          saoJorge: 'saoJorge',
          graciosa: 'graciosa',
          flores: 'flores',
          corvo: 'corvo'
        }
      });

      this.type = 'line';
    }

    get sortedData() {
      return this.args.data.sortBy('date');
    }

    get labels() {
      let labels = [];
      this.sortedData.forEach((update, i) => {
        let label = new moment(update.date).format('DD/MM');
        labels.push(label);
      });
      return labels;
    }

    getDataSet(key, label, fill = false, borderColor = '#888') {
      let totalsData = [];
      this.sortedData.forEach((update, i) => {
        totalsData.push(update[key]);
      });
      return {
        label: label,
        data: totalsData,
        fill: fill,
        borderColor: borderColor,
        lineTension: 0.1
      };
    }

    get totalsDataSet() {
      return this.getDataSet(this.options.dataSets.totals, 'Total Cases', true, this.constants.colors.totals);
    }

    get saoMiguelDataSet() {
      return this.getDataSet(this.options.dataSets.saoMiguel, 'São Miguel', false, this.constants.colors.saoMiguel);
    }

    get santaMariaDataSet() {
      return this.getDataSet(this.options.dataSets.santaMaria, 'Santa Maria', false, this.constants.colors.santaMaria);
    }

    get faialDataSet() {
      return this.getDataSet(this.options.dataSets.faial, 'Faial', false, this.constants.colors.faial);
    }

    get terceiraDataSet() {
      return this.getDataSet(this.options.dataSets.terceira, 'Terceira', false, this.constants.colors.terceira);
    }

    get picoDataSet() {
      return this.getDataSet(this.options.dataSets.pico, 'Pico', false, this.constants.colors.pico);
    }

    get saoJorgeDataSet() {
      return this.getDataSet(this.options.dataSets.saoJorge, 'São Jorge', false, this.constants.colors.saoJorge);
    }

    get graciosaDataSet() {
      return this.getDataSet(this.options.dataSets.graciosa, 'Graciosa', false, this.constants.colors.graciosa);
    }

    get floresDataSet() {
      return this.getDataSet(this.options.dataSets.flores, 'Flores', false, this.constants.colors.flores);
    }

    get corvoDataSet() {
      return this.getDataSet(this.options.dataSets.corvo, 'Corvo', false, this.constants.colors.corvo);
    }

    get chartData() {
      return {
        labels: this.labels,
        datasets: [this.totalsDataSet, this.saoMiguelDataSet, this.santaMariaDataSet, this.faialDataSet, this.terceiraDataSet, this.picoDataSet, this.saoJorgeDataSet, this.graciosaDataSet, this.floresDataSet, this.corvoDataSet]
      };
    }

    get options() {
      return {};
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "constants", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "sortedData", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "sortedData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "labels", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "labels"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "totalsDataSet", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "totalsDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saoMiguelDataSet", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "saoMiguelDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "santaMariaDataSet", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "santaMariaDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "faialDataSet", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "faialDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "terceiraDataSet", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "terceiraDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "picoDataSet", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "picoDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saoJorgeDataSet", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "saoJorgeDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "graciosaDataSet", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "graciosaDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "floresDataSet", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "floresDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "corvoDataSet", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "corvoDataSet"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chartData", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "chartData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "options", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "options"), _class.prototype)), _class));
  _exports.default = CasesChartComponent;
});
;define("covid-azores/components/daily-cases-chart", ["exports", "covid-azores/components/cases-chart"], function (_exports, _casesChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h2 class='text-muted'>Daily Cases</h2>
  {{ember-chart type=this.type data=this.chartData options=this.options}}
  
  */
  {
    id: "rsCjSQng",
    block: "{\"symbols\":[],\"statements\":[[9,\"h2\",true],[12,\"class\",\"text-muted\",null],[10],[1,1,0,0,\"Daily Cases\"],[11],[1,1,0,0,\"\\n\"],[1,0,0,0,[31,43,11,[27,[26,0,\"CallHead\"],[]],null,[[\"type\",\"data\",\"options\"],[[27,[24,0],[\"type\"]],[27,[24,0],[\"chartData\"]],[27,[24,0],[\"options\"]]]]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"ember-chart\"]}",
    meta: {
      moduleName: "covid-azores/components/daily-cases-chart.hbs"
    }
  });

  class TotalCasesChartComponent extends _casesChart.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "options", {
        dataSets: {
          totals: 'total',
          saoMiguel: 'saoMiguel',
          santaMaria: 'santaMaria',
          terceira: 'terceira',
          faial: 'faial',
          pico: 'pico',
          saoJorge: 'saoJorge',
          graciosa: 'graciosa',
          flores: 'flores',
          corvo: 'corvo'
        }
      });
    }

  }

  _exports.default = TotalCasesChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TotalCasesChartComponent);
});
;define("covid-azores/components/ember-chart", ["exports", "ember-cli-chart/components/ember-chart"], function (_exports, _emberChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberChart.default;
  _exports.default = _default;
});
;define("covid-azores/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("covid-azores/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("covid-azores/components/snapshot", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <table class='table'>
    <thead>
      <tr>
        <th scope='col' class='snapshot-table-cell'>Total</th>
        <th scope='col' class='text-muted snapshot-table-cell'>São Miguel</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Santa Maria</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Faial</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Terceira</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Pico</th>
        <th scope='col' class='text-muted snapshot-table-cell'>São Jorge</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Graciosa</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Flores</th>
        <th scope='col' class='text-muted snapshot-table-cell'>Corvo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>{{this.total}}</th>
        <td class='text-muted'>{{this.saoMiguel}}</td>
        <td class='text-muted'>{{this.santaMaria}}</td>
        <td class='text-muted'>{{this.faial}}</td>
        <td class='text-muted'>{{this.terceira}}</td>
        <td class='text-muted'>{{this.pico}}</td>
        <td class='text-muted'>{{this.saoJorge}}</td>
        <td class='text-muted'>{{this.graciosa}}</td>
        <td class='text-muted'>{{this.flores}}</td>
        <td class='text-muted'>{{this.corvo}}</td>
      </tr>
    </tbody>
  </table>
  
  */
  {
    id: "bJrCEAX9",
    block: "{\"symbols\":[],\"statements\":[[9,\"table\",true],[12,\"class\",\"table\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"thead\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"tr\",true],[10],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"snapshot-table-cell\",null],[10],[1,1,0,0,\"Total\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"S\xE3o Miguel\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Santa Maria\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Faial\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Terceira\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Pico\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"S\xE3o Jorge\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Graciosa\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Flores\"],[11],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"class\",\"text-muted snapshot-table-cell\",null],[10],[1,1,0,0,\"Corvo\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"tbody\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"tr\",true],[10],[1,1,0,0,\"\\n      \"],[9,\"th\",true],[12,\"scope\",\"row\",null],[10],[1,0,0,0,[27,[24,0],[\"total\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"saoMiguel\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"santaMaria\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"faial\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"terceira\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"pico\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"saoJorge\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"graciosa\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"flores\"]]],[11],[1,1,0,0,\"\\n      \"],[9,\"td\",true],[12,\"class\",\"text-muted\",null],[10],[1,0,0,0,[27,[24,0],[\"corvo\"]]],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "covid-azores/components/snapshot.hbs"
    }
  });

  let SnapshotComponent = (_dec = Ember.computed('this.data.@each.total'), _dec2 = Ember.computed('this.data.@each.saoMiguel'), _dec3 = Ember.computed('this.data.@each.santaMaria'), _dec4 = Ember.computed('this.data.@each.faial'), _dec5 = Ember.computed('this.data.@each.terceira'), _dec6 = Ember.computed('this.data.@each.pico'), _dec7 = Ember.computed('this.data.@each.saoJorge'), _dec8 = Ember.computed('this.data.@each.graciosa'), _dec9 = Ember.computed('this.data.@each.flores'), _dec10 = Ember.computed('this.data.@each.corvo'), (_class = class SnapshotComponent extends _component.default {
    getAggregate(key) {
      let total = 0;
      this.args.data.forEach((update, i) => {
        total += update[key];
      });
      return total;
    }

    get total() {
      return this.getAggregate('total');
    }

    get saoMiguel() {
      return this.getAggregate('saoMiguel');
    }

    get santaMaria() {
      return this.getAggregate('santaMaria');
    }

    get faial() {
      return this.getAggregate('faial');
    }

    get terceira() {
      return this.getAggregate('terceira');
    }

    get pico() {
      return this.getAggregate('pico');
    }

    get saoJorge() {
      return this.getAggregate('saoJorge');
    }

    get graciosa() {
      return this.getAggregate('graciosa');
    }

    get flores() {
      return this.getAggregate('flores');
    }

    get corvo() {
      return this.getAggregate('corvo');
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "total", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "total"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saoMiguel", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "saoMiguel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "santaMaria", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "santaMaria"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "faial", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "faial"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "terceira", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "terceira"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pico", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "pico"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saoJorge", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "saoJorge"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "graciosa", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "graciosa"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "flores", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "flores"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "corvo", [_dec10], Object.getOwnPropertyDescriptor(_class.prototype, "corvo"), _class.prototype)), _class));
  _exports.default = SnapshotComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SnapshotComponent);
});
;define("covid-azores/components/total-cases-chart", ["exports", "covid-azores/components/cases-chart"], function (_exports, _casesChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <h2 class='text-muted'>Total Cases</h2>
  {{ember-chart type=this.type data=this.chartData options=this.options}}
  
  */
  {
    id: "60xfoXhH",
    block: "{\"symbols\":[],\"statements\":[[9,\"h2\",true],[12,\"class\",\"text-muted\",null],[10],[1,1,0,0,\"Total Cases\"],[11],[1,1,0,0,\"\\n\"],[1,0,0,0,[31,43,11,[27,[26,0,\"CallHead\"],[]],null,[[\"type\",\"data\",\"options\"],[[27,[24,0],[\"type\"]],[27,[24,0],[\"chartData\"]],[27,[24,0],[\"options\"]]]]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"ember-chart\"]}",
    meta: {
      moduleName: "covid-azores/components/total-cases-chart.hbs"
    }
  });

  class TotalCasesChartComponent extends _casesChart.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "options", {
        dataSets: {
          totals: 'runningTotal',
          saoMiguel: 'saoMiguelRunningTotal',
          santaMaria: 'santaMariaRunningTotal',
          terceira: 'terceiraRunningTotal',
          faial: 'faialRunningTotal',
          pico: 'picoRunningTotal',
          saoJorge: 'saoJorgeRunningTotal',
          graciosa: 'graciosaRunningTotal',
          flores: 'floresRunningTotal',
          corvo: 'corvoRunningTotal'
        }
      });
    }

  }

  _exports.default = TotalCasesChartComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TotalCasesChartComponent);
});
;define("covid-azores/components/update-table-row", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <tr>
    <td>{{moment-format @update.date 'Do MMM YYYY'}}</td>
    <td>{{@update.total}}</td>
    <td>{{@update.runningTotal}}</td>
    <td>{{@update.easternGroup}}</td>
    <td>{{@update.easternGroupRunningTotal}}</td>
    <td>{{@update.saoMiguel}}</td>
    <td>{{@update.saoMiguelRunningTotal}}</td>
    <td>{{@update.santaMaria}}</td>
    <td>{{@update.santaMariaRunningTotal}}</td>
    <td>{{@update.centralGroup}}</td>
    <td>{{@update.centralGroupRunningTotal}}</td>
    <td>{{@update.faial}}</td>
    <td>{{@update.faialRunningTotal}}</td>
    <td>{{@update.terceira}}</td>
    <td>{{@update.terceiraRunningTotal}}</td>
    <td>{{@update.pico}}</td>
    <td>{{@update.picoRunningTotal}}</td>
    <td>{{@update.saoJorge}}</td>
    <td>{{@update.saoJorgeRunningTotal}}</td>
    <td>{{@update.graciosa}}</td>
    <td>{{@update.graciosaRunningTotal}}</td>
    <td>{{@update.westernGroup}}</td>
    <td>{{@update.westernGroupRunningTotal}}</td>
    <td>{{@update.flores}}</td>
    <td>{{@update.floresRunningTotal}}</td>
    <td>{{@update.corvo}}</td>
    <td>{{@update.corvoRunningTotal}}</td>
  </tr>
  
  */
  {
    id: "TsEKFV6p",
    block: "{\"symbols\":[\"@update\"],\"statements\":[[9,\"tr\",true],[10],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[31,14,13,[27,[26,0,\"CallHead\"],[]],[[27,[24,1],[\"date\"]],\"Do MMM YYYY\"],null]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"total\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"runningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"easternGroup\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"easternGroupRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"saoMiguel\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"saoMiguelRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"santaMaria\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"santaMariaRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"centralGroup\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"centralGroupRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"faial\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"faialRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"terceira\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"terceiraRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"pico\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"picoRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"saoJorge\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"saoJorgeRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"graciosa\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"graciosaRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"westernGroup\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"westernGroupRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"flores\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"floresRunningTotal\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"corvo\"]]],[11],[1,1,0,0,\"\\n  \"],[9,\"td\",true],[10],[1,0,0,0,[27,[24,1],[\"corvoRunningTotal\"]]],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"moment-format\"]}",
    meta: {
      moduleName: "covid-azores/components/update-table-row.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-azores/components/update-table", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <table class='table'>
    <tr>
      <th scope='col'>Date</th>
      <th scope='col' colspan=2>Total</th>
      <th scope='col' colspan=2>Eastern Group</th>
      <th scope='col' colspan=2>Sao Miguel</th>
      <th scope='col' colspan=2>Santa Maria</th>
      <th scope='col' colspan=2>Central Group</th>
      <th scope='col' colspan=2>Faial</th>
      <th scope='col' colspan=2>Terceira</th>
      <th scope='col' colspan=2>Pico</th>
      <th scope='col' colspan=2>Sao Jorge</th>
      <th scope='col' colspan=2>Graciosa</th>
      <th scope='col' colspan=2>Western Group</th>
      <th scope='col' colspan=2>Flores</th>
      <th scope='col' colspan=2>Corvo</th>
    </tr>
    <tr>
      <th></th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
      <th scope='col'>Δ</th>
      <th scope='col'>Σ</th>
    </tr>
    {{#each @updates as |update|}}
      <UpdateTableRow @update={{update}} />
    {{/each}}
  </table>
  
  */
  {
    id: "B8CRACTc",
    block: "{\"symbols\":[\"update\",\"@updates\"],\"statements\":[[9,\"table\",true],[12,\"class\",\"table\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"tr\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"Date\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Total\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Eastern Group\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Sao Miguel\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Santa Maria\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Central Group\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Faial\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Terceira\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Pico\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Sao Jorge\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Graciosa\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Western Group\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Flores\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[12,\"colspan\",\"2\",null],[10],[1,1,0,0,\"Corvo\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n  \"],[9,\"tr\",true],[10],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u0394\"],[11],[1,1,0,0,\"\\n    \"],[9,\"th\",true],[12,\"scope\",\"col\",null],[10],[1,1,0,0,\"\u03A3\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[27,[24,2],[]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[7,\"update-table-row\",[],[[\"@update\"],[[27,[24,1],[]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    meta: {
      moduleName: "covid-azores/components/update-table.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("covid-azores/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("covid-azores/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("covid-azores/helpers/app-version", ["exports", "covid-azores/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("covid-azores/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("covid-azores/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define("covid-azores/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("covid-azores/helpers/is-after", ["exports", "ember-moment/helpers/is-after"], function (_exports, _isAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define("covid-azores/helpers/is-before", ["exports", "ember-moment/helpers/is-before"], function (_exports, _isBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define("covid-azores/helpers/is-between", ["exports", "ember-moment/helpers/is-between"], function (_exports, _isBetween) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define("covid-azores/helpers/is-same-or-after", ["exports", "ember-moment/helpers/is-same-or-after"], function (_exports, _isSameOrAfter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define("covid-azores/helpers/is-same-or-before", ["exports", "ember-moment/helpers/is-same-or-before"], function (_exports, _isSameOrBefore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define("covid-azores/helpers/is-same", ["exports", "ember-moment/helpers/is-same"], function (_exports, _isSame) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define("covid-azores/helpers/moment-add", ["exports", "ember-moment/helpers/moment-add"], function (_exports, _momentAdd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define("covid-azores/helpers/moment-calendar", ["exports", "ember-moment/helpers/moment-calendar"], function (_exports, _momentCalendar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define("covid-azores/helpers/moment-diff", ["exports", "ember-moment/helpers/moment-diff"], function (_exports, _momentDiff) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define("covid-azores/helpers/moment-duration", ["exports", "ember-moment/helpers/moment-duration"], function (_exports, _momentDuration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define("covid-azores/helpers/moment-format", ["exports", "ember-moment/helpers/moment-format"], function (_exports, _momentFormat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define("covid-azores/helpers/moment-from-now", ["exports", "ember-moment/helpers/moment-from-now"], function (_exports, _momentFromNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define("covid-azores/helpers/moment-from", ["exports", "ember-moment/helpers/moment-from"], function (_exports, _momentFrom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define("covid-azores/helpers/moment-subtract", ["exports", "ember-moment/helpers/moment-subtract"], function (_exports, _momentSubtract) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define("covid-azores/helpers/moment-to-date", ["exports", "ember-moment/helpers/moment-to-date"], function (_exports, _momentToDate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define("covid-azores/helpers/moment-to-now", ["exports", "ember-moment/helpers/moment-to-now"], function (_exports, _momentToNow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define("covid-azores/helpers/moment-to", ["exports", "ember-moment/helpers/moment-to"], function (_exports, _momentTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define("covid-azores/helpers/moment-unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("covid-azores/helpers/moment", ["exports", "ember-moment/helpers/moment"], function (_exports, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define("covid-azores/helpers/now", ["exports", "ember-moment/helpers/now"], function (_exports, _now) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("covid-azores/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("covid-azores/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("covid-azores/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("covid-azores/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("covid-azores/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("covid-azores/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("covid-azores/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("covid-azores/helpers/unix", ["exports", "ember-moment/helpers/unix"], function (_exports, _unix) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("covid-azores/helpers/utc", ["exports", "ember-moment/helpers/utc"], function (_exports, _utc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(_exports, "utc", {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define("covid-azores/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "covid-azores/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("covid-azores/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("covid-azores/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("covid-azores/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("covid-azores/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("covid-azores/initializers/export-application-global", ["exports", "covid-azores/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("covid-azores/initializers/load-bootstrap-config", ["exports", "covid-azores/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("covid-azores/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("covid-azores/models/update", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let UpdateModel = (_dec = (0, _model.attr)('date'), _dec2 = (0, _model.attr)('number'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.attr)('number'), _dec6 = (0, _model.attr)('number'), _dec7 = (0, _model.attr)('number'), _dec8 = (0, _model.attr)('number'), _dec9 = (0, _model.attr)('number'), _dec10 = (0, _model.attr)('number'), _dec11 = Ember.computed('saoMiguel', 'santaMaria'), _dec12 = Ember.computed('faial', 'terceira', 'pico', 'saoJorge', 'graciosa'), _dec13 = Ember.computed('flores', 'corvo'), _dec14 = Ember.computed('easternGroup', 'centralGroup', 'westernGroup'), (_class = (_temp = class UpdateModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "date", _descriptor, this);

      _initializerDefineProperty(this, "saoMiguel", _descriptor2, this);

      _initializerDefineProperty(this, "santaMaria", _descriptor3, this);

      _initializerDefineProperty(this, "faial", _descriptor4, this);

      _initializerDefineProperty(this, "terceira", _descriptor5, this);

      _initializerDefineProperty(this, "pico", _descriptor6, this);

      _initializerDefineProperty(this, "saoJorge", _descriptor7, this);

      _initializerDefineProperty(this, "graciosa", _descriptor8, this);

      _initializerDefineProperty(this, "flores", _descriptor9, this);

      _initializerDefineProperty(this, "corvo", _descriptor10, this);
    }

    get easternGroup() {
      return this.saoMiguel + this.santaMaria;
    }

    get centralGroup() {
      return this.faial + this.terceira + this.pico + this.saoJorge + this.graciosa;
    }

    get westernGroup() {
      return this.flores + this.corvo;
    }

    get total() {
      return this.easternGroup + this.centralGroup + this.westernGroup;
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "date", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "saoMiguel", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "santaMaria", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "faial", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "terceira", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "pico", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "saoJorge", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "graciosa", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "flores", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "corvo", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "easternGroup", [_dec11], Object.getOwnPropertyDescriptor(_class.prototype, "easternGroup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "centralGroup", [_dec12], Object.getOwnPropertyDescriptor(_class.prototype, "centralGroup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "westernGroup", [_dec13], Object.getOwnPropertyDescriptor(_class.prototype, "westernGroup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "total", [_dec14], Object.getOwnPropertyDescriptor(_class.prototype, "total"), _class.prototype)), _class));
  _exports.default = UpdateModel;
});
;define("covid-azores/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("covid-azores/modifiers/ref", ["exports", "ember-ref-modifier/modifiers/ref"], function (_exports, _ref) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
;define("covid-azores/router", ["exports", "covid-azores/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("covid-azores/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationRoute = (_class = (_temp = class ApplicationRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async model() {
      return this.store.findAll('update').then(function (results) {
        let saoMiguelRunningTotal = 0;
        let santaMariaRunningTotal = 0;
        let faialRunningTotal = 0;
        let terceiraRunningTotal = 0;
        let picoRunningTotal = 0;
        let saoJorgeRunningTotal = 0;
        let graciosaRunningTotal = 0;
        let floresRunningTotal = 0;
        let corvoRunningTotal = 0;
        let easternGroupRunningTotal = 0;
        let centralGroupRunningTotal = 0;
        let westernGroupRunningTotal = 0;
        let runningTotal = 0;
        results.forEach((result, i) => {
          saoMiguelRunningTotal += result.saoMiguel;
          result.saoMiguelRunningTotal = saoMiguelRunningTotal;
          santaMariaRunningTotal += result.santaMaria;
          result.santaMariaRunningTotal = santaMariaRunningTotal;
          faialRunningTotal += result.faial;
          result.faialRunningTotal = faialRunningTotal;
          terceiraRunningTotal += result.terceira;
          result.terceiraRunningTotal = terceiraRunningTotal;
          picoRunningTotal += result.pico;
          result.picoRunningTotal = picoRunningTotal;
          saoJorgeRunningTotal += result.saoJorge;
          result.saoJorgeRunningTotal = saoJorgeRunningTotal;
          graciosaRunningTotal += result.graciosa;
          result.graciosaRunningTotal = graciosaRunningTotal;
          floresRunningTotal += result.flores;
          result.floresRunningTotal = floresRunningTotal;
          corvoRunningTotal += result.corvo;
          result.corvoRunningTotal = corvoRunningTotal;
          easternGroupRunningTotal += result.easternGroup;
          result.easternGroupRunningTotal = easternGroupRunningTotal;
          centralGroupRunningTotal += result.centralGroup;
          result.centralGroupRunningTotal = centralGroupRunningTotal;
          westernGroupRunningTotal += result.westernGroup;
          result.westernGroupRunningTotal = westernGroupRunningTotal;
          runningTotal += result.total;
          result.runningTotal = runningTotal;
        });
        return results;
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ApplicationRoute;
});
;define("covid-azores/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("covid-azores/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("covid-azores/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("covid-azores/services/constants", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ConstantsService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "colors", {
        totals: '#AAA',
        saoMiguel: '#2E5EAA',
        santaMaria: '#416CB1',
        faial: '#775D77',
        terceira: '#866F86',
        pico: '#684B68',
        saoJorge: '#593959',
        graciosa: '#513451',
        flores: '#76B041',
        corvo: '#82B752'
      });
    }

  }

  _exports.default = ConstantsService;
});
;define("covid-azores/services/moment", ["exports", "ember-moment/services/moment", "covid-azores/config/environment"], function (_exports, _moment, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    get
  } = Ember;

  var _default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });

  _exports.default = _default;
});
;define("covid-azores/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("covid-azores/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yqJSwQHB",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"container\",null],[10],[1,1,0,0,\"\\n  \"],[9,\"h1\",true],[10],[1,1,0,0,\"COVID-19 Azores\"],[11],[1,1,0,0,\"\\n  \"],[9,\"p\",true],[12,\"class\",\"lead\",null],[10],[1,1,0,0,\"\\n      If you have a dry cough and a fever or are experiencing difficulties breathing\\n      please call\\n      \"],[9,\"a\",true],[12,\"href\",\"https://www.azores.gov.pt/Portal/pt/entidades/srs/livres/Linha+Saude+Acores.htm\",null],[10],[1,1,0,0,\"\\n        Linha Saude Acores 808 24 60 24\\n      \"],[11],[1,1,0,0,\"\\n      and isolate yourself.\\n  \"],[11],[1,1,0,0,\"\\n  \"],[7,\"snapshot\",[],[[\"@data\"],[[27,[26,0,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n  \"],[7,\"total-cases-chart\",[],[[\"@data\"],[[27,[26,0,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n  \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n  \"],[7,\"daily-cases-chart\",[],[[\"@data\"],[[27,[26,0,\"AppendSingleId\"],[]]]],null],[1,1,0,0,\"\\n  \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n  \"],[9,\"p\",true],[12,\"class\",\"text-center\",null],[10],[1,1,0,0,\"\\n    \"],[9,\"small\",true],[10],[1,1,0,0,\"\\n      Made by Pete Martin, 2020. If you found this useful please consider \"],[9,\"a\",true],[12,\"href\",\"https://ko-fi.com/ninjatronic\",null],[10],[1,1,0,0,\"buying me a coffee\"],[11],[1,1,0,0,\".\\n    \"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"model\"]}",
    "meta": {
      "moduleName": "covid-azores/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("covid-azores/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("covid-azores/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("covid-azores/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("covid-azores/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("covid-azores/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("covid-azores/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('covid-azores/config/environment', [], function() {
  var prefix = 'covid-azores';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("covid-azores/app")["default"].create({"name":"covid-azores","version":"0.0.0+61d46008"});
          }
        
//# sourceMappingURL=covid-azores.map
