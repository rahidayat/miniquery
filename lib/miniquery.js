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

    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        obj.success(resp)
      } else {
        obj.fail()
        // We reached our target server, but it returned an error
      }
    };

    request.onerror = function() {
      obj.fail()
      // There was a connection error of some sort
    };

    request.send();
  }

}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
