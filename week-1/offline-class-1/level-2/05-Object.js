function objectMethods(obj) {
  console.log("Original Object:", obj);

  // key me iterate krne ke liye and retuens array of keys
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  // return values array
  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // return a array of array arr[i][0]=key and arr[i][1]=value
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // if a property name property is there or not
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  // add new key value pair in object
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
