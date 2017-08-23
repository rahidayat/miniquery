/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
   constructor() {}

   static select(string) {
     if(string[0] == '#') { //pasti id
       return document.querySelector(string)
     } else {
       return document.querySelectorAll(string)
     }
   }
 } //end of Class


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  constructor() {}

  static hide(string) {
    let element = document.querySelectorAll(string)
    element.forEach(el => {
      el.style.display = "none"
    })
  }

  static show(string) {
    let element = document.querySelectorAll(string)
    element.forEach(el => {
      el.style.display = "block"
    })
  }

  static removeClass(class1, class2) {
    let element = document.querySelectorAll(class1)
    element.forEach(el => {
      el.classList.remove(class2)
    })
  }

  static addClass(class1, class2) {
    let element = document.querySelectorAll(class1)
    element.forEach(el => {
      el.classList.add(class2)
    })
  }
} //end of Class

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  constructor() {}

  static on(className, eventName, cb) {
    let element = document.querySelectorAll(className)
    element.forEach(el => {
      el.addEventListener(eventName, cb())
    })
  }

  static trigger(className, eventName) {
    let element = document.querySelectorAll(className)
    element.forEach(el => {
      el.dispatchEvent(eventName)
    })
  }
}//end of Class

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  constructor() {}

  static request(obj) {
    
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
