//Code practice questions

//5. fix this buggy CRM function

function calculateDiscount(price, discountPercent) {
  // User inputs come as strings from forms
  let total = price - (price * discountPercent) / 100;
  return total;
}

// This should return 90, but what does it actually return?
console.log(calculateDiscount("100", "10"));

//Solved

function calculateDiscountSolved(price, discountPercent) {
  // User inputs come as strings from forms
  let numPrice = Number(price);
  let numDicountPer = Number(discountPercent);
  let total = numPrice - (numPrice * numDicountPer) / 100;
  return total;
}

// This should return 90, but what does it actually return?
console.log(calculateDiscountSolved("100", "10"));

// Write a function that safely converts user input to the appropriate data type:

function sanitizeCustomerData(rawData) {
  //   rawData = {
  //     name: "  John Doe  ",
  //     age: "25",
  //     email: "JOHN@EMAIL.COM",
  //     isActive: "true",
  //     phone: "(555) 123-4567",
  //   };

  const cleanData = {
    name: rawData.name.trim(),
    age: parseInt(rawData.age, 10) || null,
    email: rawData.email.toLowerCase().trim(),
    isActive: rawData.isActive === "true",
    phone: rawData.phone.replace(/\D/g, ""),
  };

  return cleanData;

  // TODO: Convert and clean the data
  // Return an object with properly typed values
}

rawData = {
  name: "  John Doe  ",
  age: "25",
  email: "JOHN@EMAIL.COM",
  isActive: "true",
  phone: "(555) 123-4567",
};

data = sanitizeCustomerData(rawData);
console.log(data);

//7. Debug this type coercion issue:

function addCustomers(existing, newOnes) {
  return Number(existing) + Number(newOnes); // Should add numbers, not concatenate
}

// These should add up to 150, but what happens?
console.log(addCustomers("100", "50")); // ?
console.log(addCustomers(100, "50")); // ?
console.log(addCustomers("100", 50)); // ?

//8. Create a robust input validator:

function validateCustomerInput(input, expectedType) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (expectedType === "email") {
    if (String(input).match(emailRegex)) {
      return { isValid: true, value: input };
    } else {
      return { isValid: false, error: "Enter valid email" };
    }
  } else if (expectedType === "string") {
    if (typeof input === typeof "string") {
      return { isValid: true, value: input };
    } else {
      return { isValid: false, error: "Enter valid string" };
    }
  } else if (expectedType === "number") {
    numInput = Number(input);
    if (typeof numInput === typeof 1) {
      return { isValid: true, value: input };
    } else {
      return { isValid: false, error: "Enter valid number" };
    }
  } else if (expectedType === "boolean") {
    if (typeof Boolean(input) === Boolean) {
      return { isValid: true, value: input };
    } else {
      return { isValid: false, error: "Enter valid boolean" };
    }
  } else {
    return { isValid: false, error: "Enter valid value to check" };
  }
}

console.log(validateCustomerInput("john@email.com", "email"));
console.log(validateCustomerInput("johncom", "email"));
console.log(validateCustomerInput("25", "number"));
console.log(validateCustomerInput("abc", "number"));
console.log(validateCustomerInput("john@email.com", "email"));

//solution

function validateCustomerInputSolution(input, expectedType) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  switch (expectedType) {
    case "email":
      if (typeof input === "string" && emailRegex.test(input)) {
        return { isValid: true, value: input.toLowerCase().trim() };
      }
      return { isValid: false, error: "Enter valid email address" };

    case "string":
      if (typeof input === "string" && input.trim().length > 0) {
        return { isValid: true, value: input.trim() };
      }
      return { isValid: false, error: "Enter valid non-empty string" };

    case "number":
      const numValue = Number(input);
      if (!isNaN(numValue) && isFinite(numValue)) {
        return { isValid: true, value: numValue };
      }
      return { isValid: false, error: "Enter valid number" };

    case "boolean":
      if (input === "true" || input === "false" || typeof input === "boolean") {
        return { isValid: true, value: input === "true" || input === true };
      }
      return { isValid: false, error: "Enter true or false" };

    default:
      return { isValid: false, error: "Unsupported validation type" };
  }
}

console.log([] + []); // ?
console.log([] + {}); // ?
console.log({} + []); // ?
