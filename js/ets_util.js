//version 1.2

// function QueryString() {
//   this.array = [];
//      this.parse = function (queryString) {
//          this.queryString = queryString;
//          var parts = this.queryString.split("&");
//          for (var i = 0; i < parts.length; i++) {
//              var subParts = parts[i].split("=");
//              if (subParts[0]) {
//                  this.array[this.array.length] = { key: subParts[0], value: subParts[1] }
//              }
//          }
//      }

//      this.setValuesBySelectors = function(inputSelectors){  //inputs should have names
//          for (var i = 0; i < inputSelectors.length; i++) {
//              var $input = $(inputSelectors[i]);            
//              this.array[this.array.length] = { key: $input.attr("name"), value: $input.val() };
//          }
//      }

//     this.setValue = function (key, val) {
//          this.array[this.array.length] = {key:key, value:val}
//      }

//      this.removeKey = function (key) {                
//          var newArray = [];         
//          for (var i = 0; i < this.array.length; i++) {            
//              if (this.array[i].key.trim() != key.trim()) {                
//                  newArray[newArray.length] = this.array[i];
//              }
//          }        
//          this.array = newArray;        
//      }

//      this.toQueryString = function () {  //Does not start with an ampersand
//          var ret = "";
//          for (var i = 0; i < this.array.length; i++) {
//              var and = "";
//              if (i != 0) and = "&";            
//              ret = ret + and + this.array[i].key + "=" + this.array[i].value;
//          }
//          return ret;
//      }

//      this.getValueByKey = function (key) {
//          for (var i = 0; i < this.array.length; i++) {
//              if (this.array[i].key.trim() == key.trim())
//                 return this.array[i].value;
//          }
//      }

//      this.canSearch = function () {
//          var hasYear = false;
//          var hasTable = false;
//          var hasSubject = false;        
//          for (var i = 0; i < this.array.length; i++) {
//              if (this.array[i].key == "Year") hasYear = true;
//              if (this.array[i].key == "Table") hasTable = true;
//              if (this.array[i].key == "Subject") hasSubject = true;
//          }        
//          if (hasYear && hasTable) return true;
//          if (hasTable && hasSubject) return true;
//          if (hasYear && hasSubject) return true;
//         return false;
//     }
//  }//QueryString

function DecorateAssociativeArray(array){
    array.getValueByKey = function(returnKey, searchKey, searchValue){
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] == searchValue){
                return this[i][returnKey];
            }
        }
    }

    array.getHighestValue = function(searchKey){
        var ret = -1;
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] > ret){
                ret = this[i][searchKey];
            }
        }
        return ret;
    }

    array.getLowestValue = function(searchKey){
        var ret = -1;
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] < ret){
                ret = this[i][searchKey];
            }
        }
        return ret;
    }
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  }
};
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

    Array.prototype.map = function(callback/*, thisArg*/) {

        var T, A, k;

        if (this == null) {
        throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling ToObject passing the |this| 
        //    value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get internal 
        //    method of O with the argument "length".
        // 3. Let len be ToUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If IsCallable(callback) is false, throw a TypeError exception.
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 1) {
        T = arguments[1];
        }

        // 6. Let A be a new array created as if by the expression new Array(len) 
        //    where Array is the standard built-in constructor with that name and 
        //    len is the value of len.
        A = new Array(len);

        // 7. Let k be 0
        k = 0;

        // 8. Repeat, while k < len
        while (k < len) {

        var kValue, mappedValue;

        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the HasProperty internal 
        //    method of O with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        if (k in O) {

            // i. Let kValue be the result of calling the Get internal 
            //    method of O with argument Pk.
            kValue = O[k];

            // ii. Let mappedValue be the result of calling the Call internal 
            //     method of callback with T as the this value and argument 
            //     list containing kValue, k, and O.
            mappedValue = callback.call(T, kValue, k, O);

            // iii. Call the DefineOwnProperty internal method of A with arguments
            // Pk, Property Descriptor
            // { Value: mappedValue,
            //   Writable: true,
            //   Enumerable: true,
            //   Configurable: true },
            // and false.

            // In browsers that support Object.defineProperty, use the following:
            // Object.defineProperty(A, k, {
            //   value: mappedValue,
            //   writable: true,
            //   enumerable: true,
            //   configurable: true
            // });

            // For best browser support, use the following:
            A[k] = mappedValue;
        }
        // d. Increase k by 1.
        k++;
        }

        // 9. return A
        return A;
    };
}

// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError( 'Array.prototype.reduce ' + 
          'called on null or undefined' );
      }
      if (typeof callback !== 'function') {
        throw new TypeError( callback +
          ' is not a function');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0; 

      // Steps 3, 4, 5, 6, 7      
      var k = 0; 
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++; 
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError( 'Reduce of empty array ' +
            'with no initial value' );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.      
        k++;
      }

      // 9. Return accumulator.
      return value;
    }
  });
}

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

var ETSUtil = function(){
  var functions =  {
    runScriptsAndRequestJson : function(scriptsToRun, requests, block){
      functions.runScripts(scriptsToRun, function(){
        scriptsDone = true;
        runRequests();
      });
      
      function runRequests(){
        functions.requestJSON(requests, function(data){
          block(data);
        })
      }
    },

    runScripts : function(scriptsToRun, block){
      var numberScriptsRun = 0;
      for(var i = 0; i < scriptsToRun.length; i++){
          $.getScript( scriptsToRun[i], function( data, textStatus, jqxhr ) {
              numberScriptsRun += 1;
              if(numberScriptsRun >= scriptsToRun.length){
                  block();
              }
          }).fail(function( jqxhr, textStatus, error){
            alert("script failed to run" + error);
          });
      }
    },
    
    requestJSON : function(requests, block){ //requests: [{String:String}]
      var dataSets = {};
      for (var dataName in requests) {
        makeCall(dataName);
      }

      function makeCall(dataName){  //function here to get dataName by value
        $.getJSON( requests[dataName], function( data ) {
            dataSets[dataName] = data;
            if (callsDone()) {                
                block(dataSets);
            }
        }).fail(function(){
          dataSets[dataName] = [];
          if (callsDone()) {                
              block(dataSets);
          }
        });
      }

      function callsDone() {
        for (var dataName in requests) {
          if (!dataSets[dataName]) {
            return false;
          }
        }
        return true;
      }
    },

    createQueryString : function(keyValueObject){
      var ret = "";
      for (key in keyValueObject) {
        ret += key + "=" + keyValueObject[key] + "&";
      }
      return ret.substring(0, ret.length - 1);
    },

    createRequestUrl : function(url, keyValueObject){
      return url + "?" + functions.createQueryString(keyValueObject);
    },

    cartesian : function() {
      var r = [], arg = arguments, max = arg.length-1;
      function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
          var a = arr.slice(0); // clone arr
          a.push(arg[i][j]);
          if (i==max)
            r.push(a);
          else
            helper(a, i+1);
        }
      }
      helper([], 0);
      return r;
    },

    combination : function(array1, array2) {
        var ret = []
        array1.forEach(function(element1){
            array2.forEach(function(element2){
                ret.push(element1 + element2);
            });
        });
        return ret;
    }
  }

  return functions;
}();
