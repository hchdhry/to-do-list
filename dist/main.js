/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ (() => {



/***/ }),

/***/ "./src/yee.js":
/*!********************!*\
  !*** ./src/yee.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
class task{
  constructor(title, description, dueDate,priority,list){
    this.title=title
    this.description=description
    this.dueDate=dueDate
    this.priority=priority 
    }
    
  }





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yee */ "./src/yee.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./src/array.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_array__WEBPACK_IMPORTED_MODULE_1__);



const button = document.querySelector("button");
const project = document.getElementById("project-list");

const array = [];

// Event listener for the button click
button.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due date').value;
  const priority = document.getElementById('priority').value;
  
  const yee = new _yee__WEBPACK_IMPORTED_MODULE_0__.task(title, description, dueDate, priority);
  array.push(yee);
  createtask(yee);
});

// Event listener for the DOMContentLoaded event
window.addEventListener("DOMContentLoaded", function () {
  // Retrieve the task data from local storage and populate the project list
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("title")) {
      const title = localStorage.getItem(key);
      const description = localStorage.getItem(`description${key.slice(5)}`);
      const dueDate = localStorage.getItem(`due date${key.slice(5)}`);
      const priority = localStorage.getItem(`priority${key.slice(5)}`);
      const yee = new _yee__WEBPACK_IMPORTED_MODULE_0__.task(title, description, dueDate, priority);
      array.push(yee);
      createtask(yee);
    }
  }
});

function createtask(activity) {
  const row = document.createElement('tr');
  const tcell = document.createElement('td');
  const dcell = document.createElement('td');
  const ucell = document.createElement('td');
  const pcell = document.createElement('td');

  project.appendChild(row);
  row.appendChild(tcell);
  row.appendChild(dcell);
  row.appendChild(ucell);
  row.appendChild(pcell);

  const i = array.length - 1;

  localStorage.setItem(`title${i}`, activity.title);
  localStorage.setItem(`description${i}`, activity.description);
  localStorage.setItem(`due date${i}`, activity.dueDate);
  localStorage.setItem(`priority${i}`, activity.priority);

  function display(i) {
    tcell.textContent = localStorage.getItem(`title${i}`);
    dcell.textContent = localStorage.getItem(`description${i}`);
    ucell.textContent = localStorage.getItem(`due date${i}`);
    pcell.textContent = localStorage.getItem(`priority${i}`);
  }

  display(i);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWTs7Ozs7Ozs7O1VDVFo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ042QjtBQUNGOztBQUUzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNDQUFJO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGFBQWE7QUFDMUUsc0RBQXNELGFBQWE7QUFDbkUsdURBQXVELGFBQWE7QUFDcEUsc0JBQXNCLHNDQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrQkFBK0IsRUFBRTtBQUNqQyxxQ0FBcUMsRUFBRTtBQUN2QyxrQ0FBa0MsRUFBRTtBQUNwQyxrQ0FBa0MsRUFBRTs7QUFFcEM7QUFDQSxxREFBcUQsRUFBRTtBQUN2RCwyREFBMkQsRUFBRTtBQUM3RCx3REFBd0QsRUFBRTtBQUMxRCx3REFBd0QsRUFBRTtBQUMxRDs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3llZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiIsImNsYXNzIHRhc2t7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSxwcmlvcml0eSxsaXN0KXtcbiAgICB0aGlzLnRpdGxlPXRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZT1kdWVEYXRlXG4gICAgdGhpcy5wcmlvcml0eT1wcmlvcml0eSBcbiAgICB9XG4gICAgXG4gIH1cbmV4cG9ydHt0YXNrfVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrIH0gZnJvbSBcIi4veWVlXCI7XG5pbXBvcnQgbWFrZSBmcm9tIFwiLi9hcnJheVwiO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuXG5jb25zdCBhcnJheSA9IFtdO1xuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgdGhlIGJ1dHRvbiBjbGlja1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZSBkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gIFxuICBjb25zdCB5ZWUgPSBuZXcgdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgYXJyYXkucHVzaCh5ZWUpO1xuICBjcmVhdGV0YXNrKHllZSk7XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBET01Db250ZW50TG9hZGVkIGV2ZW50XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyBSZXRyaWV2ZSB0aGUgdGFzayBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgcG9wdWxhdGUgdGhlIHByb2plY3QgbGlzdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKFwidGl0bGVcIikpIHtcbiAgICAgIGNvbnN0IHRpdGxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGRlc2NyaXB0aW9uJHtrZXkuc2xpY2UoNSl9YCk7XG4gICAgICBjb25zdCBkdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGR1ZSBkYXRlJHtrZXkuc2xpY2UoNSl9YCk7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcmlvcml0eSR7a2V5LnNsaWNlKDUpfWApO1xuICAgICAgY29uc3QgeWVlID0gbmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICBhcnJheS5wdXNoKHllZSk7XG4gICAgICBjcmVhdGV0YXNrKHllZSk7XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRldGFzayhhY3Rpdml0eSkge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBjb25zdCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGNvbnN0IGRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgY29uc3QgdWNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBwY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgcHJvamVjdC5hcHBlbmRDaGlsZChyb3cpO1xuICByb3cuYXBwZW5kQ2hpbGQodGNlbGwpO1xuICByb3cuYXBwZW5kQ2hpbGQoZGNlbGwpO1xuICByb3cuYXBwZW5kQ2hpbGQodWNlbGwpO1xuICByb3cuYXBwZW5kQ2hpbGQocGNlbGwpO1xuXG4gIGNvbnN0IGkgPSBhcnJheS5sZW5ndGggLSAxO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aXRsZSR7aX1gLCBhY3Rpdml0eS50aXRsZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBkZXNjcmlwdGlvbiR7aX1gLCBhY3Rpdml0eS5kZXNjcmlwdGlvbik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBkdWUgZGF0ZSR7aX1gLCBhY3Rpdml0eS5kdWVEYXRlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByaW9yaXR5JHtpfWAsIGFjdGl2aXR5LnByaW9yaXR5KTtcblxuICBmdW5jdGlvbiBkaXNwbGF5KGkpIHtcbiAgICB0Y2VsbC50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGB0aXRsZSR7aX1gKTtcbiAgICBkY2VsbC50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkZXNjcmlwdGlvbiR7aX1gKTtcbiAgICB1Y2VsbC50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkdWUgZGF0ZSR7aX1gKTtcbiAgICBwY2VsbC50ZXh0Q29udGVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcmlvcml0eSR7aX1gKTtcbiAgfVxuXG4gIGRpc3BsYXkoaSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=