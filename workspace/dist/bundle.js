/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./workspace/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./workspace/src/js/creative.js":
/*!**************************************!*\
  !*** ./workspace/src/js/creative.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  \"use strict\"; // Start of use strict\n\n  // Smooth scrolling using jQuery easing\n\n  $('a.js-scroll-trigger[href*=\"#\"]:not([href=\"#\"])').click(function () {\n    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n      var target = $(this.hash);\n      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');\n      if (target.length) {\n        $('html, body').animate({\n          scrollTop: target.offset().top - 57\n        }, 1000, \"easeInOutExpo\");\n        return false;\n      }\n    }\n  });\n\n  // Closes responsive menu when a scroll trigger link is clicked\n  $('.js-scroll-trigger').click(function () {\n    $('.navbar-collapse').collapse('hide');\n  });\n\n  // Activate scrollspy to add active class to navbar items on scroll\n  $('body').scrollspy({\n    target: '#mainNav',\n    offset: 57\n  });\n\n  // Collapse Navbar\n  var navbarCollapse = function navbarCollapse() {\n    if ($(\"#mainNav\").offset().top > 100) {\n      $(\"#mainNav\").addClass(\"navbar-shrink\");\n    } else {\n      $(\"#mainNav\").removeClass(\"navbar-shrink\");\n    }\n  };\n  // Collapse now if page is not at top\n  navbarCollapse();\n  // Collapse the navbar when page is scrolled\n  $(window).scroll(navbarCollapse);\n\n  // Scroll reveal calls\n  window.sr = ScrollReveal();\n  sr.reveal('.sr-icons', {\n    duration: 600,\n    scale: 0.3,\n    distance: '0px'\n  }, 200);\n  sr.reveal('.sr-button', {\n    duration: 1000,\n    delay: 200\n  });\n  sr.reveal('.sr-contact', {\n    duration: 600,\n    scale: 0.3,\n    distance: '0px'\n  }, 300);\n\n  // Magnific popup calls\n  $('.popup-gallery').magnificPopup({\n    delegate: 'a',\n    type: 'image',\n    tLoading: 'Loading image #%curr%...',\n    mainClass: 'mfp-img-mobile',\n    gallery: {\n      enabled: true,\n      navigateByImgClick: true,\n      preload: [0, 1]\n    },\n    image: {\n      tError: '<a href=\"%url%\">The image #%curr%</a> could not be loaded.'\n    }\n  });\n})(jQuery); // End of use strict\n\n//# sourceURL=webpack:///./workspace/src/js/creative.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./workspace/src/js/creative.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./workspace/src/js/creative.js */\"./workspace/src/js/creative.js\");\n\n\n//# sourceURL=webpack:///multi_./workspace/src/js/creative.js?");

/***/ })

/******/ });