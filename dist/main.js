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



const button=document.querySelector("button")
const project= document.getElementById("project-list")




const array=[];
button.addEventListener("click",function(event){
    event.preventDefault();
const title = document.getElementById('title').value;
const description = document.getElementById('description').value;
const dueDate = document.getElementById('due date').value;
const priority = document.getElementById('priority').value;
    const yee =new _yee__WEBPACK_IMPORTED_MODULE_0__.task(title,description,dueDate,priority)
    array.push(yee)
    createtask()
   
})

function createtask(){
    for(let i=array.length-1;i<array.length;i++){
        var activity=array[i];
        console.log(activity);
       
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

        localStorage.setItem(`title${i}`,activity.title)
        localStorage.setItem(`description${i}`,activity.description)
        localStorage.setItem(`due date${i}`,activity.dueDate)
        localStorage.setItem(`priority${i}`,activity.priority)

        
            tcell.textContent=localStorage.getItem(`title${i}`)
            dcell.textContent=localStorage.getItem(`description${i}`)
            ucell.textContent=localStorage.getItem(`due date${i}`)
            pcell.textContent=localStorage.getItem(`priority${i}`)
    
      
        
        
    
    
    
    
    }}
  






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDWTs7Ozs7Ozs7O1VDVFo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QjtBQUNGOztBQUUxQjtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLEVBQUU7QUFDdkMsMkNBQTJDLEVBQUU7QUFDN0Msd0NBQXdDLEVBQUU7QUFDMUMsd0NBQXdDLEVBQUU7O0FBRTFDO0FBQ0EsMkRBQTJELEVBQUU7QUFDN0QsaUVBQWlFLEVBQUU7QUFDbkUsOERBQThELEVBQUU7QUFDaEUsOERBQThELEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMveWVlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiIiwiY2xhc3MgdGFza3tcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLHByaW9yaXR5LGxpc3Qpe1xuICAgIHRoaXMudGl0bGU9dGl0bGVcbiAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlPWR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5PXByaW9yaXR5IFxuICAgIH1cbiAgICBcbiAgfVxuZXhwb3J0e3Rhc2t9XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRhc2sgfSBmcm9tIFwiLi95ZWVcIlxuaW1wb3J0IG1ha2UgZnJvbSBcIi4vYXJyYXlcIlxuXG5jb25zdCBidXR0b249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKVxuY29uc3QgcHJvamVjdD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIilcblxuXG5cblxuY29uc3QgYXJyYXk9W107XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlIGRhdGUnKS52YWx1ZTtcbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3QgeWVlID1uZXcgdGFzayh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KVxuICAgIGFycmF5LnB1c2goeWVlKVxuICAgIGNyZWF0ZXRhc2soKVxuICAgXG59KVxuXG5mdW5jdGlvbiBjcmVhdGV0YXNrKCl7XG4gICAgZm9yKGxldCBpPWFycmF5Lmxlbmd0aC0xO2k8YXJyYXkubGVuZ3RoO2krKyl7XG4gICAgICAgIHZhciBhY3Rpdml0eT1hcnJheVtpXTtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZpdHkpO1xuICAgICAgIFxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjb25zdCB0Y2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNvbnN0IGRjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29uc3QgdWNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBjb25zdCBwY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgXG4gICAgICAgICBcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodGNlbGwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZGNlbGwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQodWNlbGwpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocGNlbGwpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0aXRsZSR7aX1gLGFjdGl2aXR5LnRpdGxlKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZGVzY3JpcHRpb24ke2l9YCxhY3Rpdml0eS5kZXNjcmlwdGlvbilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGR1ZSBkYXRlJHtpfWAsYWN0aXZpdHkuZHVlRGF0ZSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByaW9yaXR5JHtpfWAsYWN0aXZpdHkucHJpb3JpdHkpXG5cbiAgICAgICAgXG4gICAgICAgICAgICB0Y2VsbC50ZXh0Q29udGVudD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGl0bGUke2l9YClcbiAgICAgICAgICAgIGRjZWxsLnRleHRDb250ZW50PWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBkZXNjcmlwdGlvbiR7aX1gKVxuICAgICAgICAgICAgdWNlbGwudGV4dENvbnRlbnQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oYGR1ZSBkYXRlJHtpfWApXG4gICAgICAgICAgICBwY2VsbC50ZXh0Q29udGVudD1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJpb3JpdHkke2l9YClcbiAgICBcbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgfX1cbiAgXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9