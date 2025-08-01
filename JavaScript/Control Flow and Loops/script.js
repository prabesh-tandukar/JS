//CONTROL FLOW AND LOOPS

//Control Flow Statements
// Control flow determines the order in which your code executes. Let's explore each types:

//1. If/Else Statements

//Basic if statement
if (condition) {
  // code runs if condition is true
}

//if/else
if (condition) {
  // code if true
} else {
  //code if false
}

// If/else if/else chain

if (condition1) {
  // code for condition1
} else if (condition2) {
  //code for condition2
} else {
  //code if none are true
}

//examples
function checkCustomerStatus(customer) {
  if (customer.isActive && customer.hasSubscription) {
    return "Premium Active";
  } else if (customer.isActive && !customer.hasSubscription) {
    return "Free Active";
  } else if (!customer.isActive && customer.hasSubscription) {
    return "Suspended Premium";
  } else {
    return "Inactive";
  }
}

//Ternary operator (shorthand)
const status = customer.isActive ? "Active" : "Inactive";
const discount = isPremium ? 0.2 : 0.1;

//SWITCH STATEMENTS
switch (expression) {
  case value1:
    //code for value1
    break;
  case value2:
    //code for value2
    break;
  default:
    //Default code
    break;
}

//Crm example - customer subscription levels
function getSubscriptionFeatures(level) {
  switch (level) {
    case "basic":
      return ["Email Support", "Basic Reports"];
    case "premium":
      return [
        "Email Suppport",
        "Basic Reports",
        "Phone Support",
        "Advanced Reports",
      ];
    case "enterprise":
      return [
        "Email Suppport",
        "Basic Reports",
        "Phone Support",
        "Advanced Reports",
        "Custom Integration",
        "Dedicated Manager",
      ];
    default:
      return ["Limited Access"];
  }
}

//Switch with fall-through (no break)
function getWorkingDays(day) {
  switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
      return "Working Day";
    case "saturday":
    case "sunday":
      return "Weekend";
    default:
      return "Invalid Day";
  }
}

//Loop Statements

//1. For loop

//Basic for loop

for (initialization; condition; increment) {
  //code to repeat
}

//CRM examples
function sendEmailToCustomers(customers) {
  for (let i = 0; i < customers.length; i++) {
    console.log(`Sending email to ${cusotmers[i].name}`);
    //sendEmail(customer[i].email);
  }
}

//Nested loops - finding customer orders
function findCustomerOrders(customers, orders) {
  for (let i = 0; i < customer.length; i++) {
    console.log(`Customer: ${customers[i].name}`);
  }

  for (let j = 0; j < orders.length; j++) {
    if (orders[j].customer.Id === customer[i].id) {
      console.log(` - Order ${orders[j].id}: $${orders[j].amount}`);
    }
  }
}

//2. While loop

//Basic while loop
while (condition) {
  //Code to repeat
  //Must modify condition to avoid infinite loop
}

//CRM example - processing pending orders
function processPendingOrders(orderQueue) {
  while (orderQueue.length > 0) {
    const order = orderQueue.shift(); //Remove first order
    console.log(`Processing order ${order.id}`);
    //processOrder(order)
  }
}

//While loop with counter
function generateCustomerIds(count) {
  let ids = [];
  let i = 0;

  while (i < count) {
    ids.push(`CUST_${String(i + 1).padStart(4, "0")}`);
    i++;
  }

  return ids; // ["CUST_0001", "CUST_0002", ....]
}

//3. Do...While looop

//Executes at least once, then checks condition

do {
  // Code to repeat
} while (condition);

//CRM exmaple - user input validation
function getUserInput() {
  let input;

  do {
    input = prompt("Enter customer email:");
    if (!input || !input.includes("@")) {
      alert("Please enter a valid email address");
    }
  } while (!input || !input.includes("@"));

  return input;
}

//Retry mechanish exmaple
function connectToDatabase() {
  let attempts = 0;
  let connected = false;

  do {
    attempts++;
    console.log(`Connection attempt ${attempts}`);
    //connected = attemptConnection();
    connected = Math.random() > 0.7; //Simulate random success

    if (!connected && attempts < 3) {
      console.log("Connection failed, retrying...");
    }
  } while (!connected && attempts < 3);

  return connected;
}

//4. For..In loop (object properties)

//Iterates over object properties
for (let key in object) {
  //code using key and object[key]
}

//CRM example - display customer info
function displayCustomerInfo(customer) {
  console.log("Customer Information:");

  for (let property in customer) {
    console.log(`${property}: ${customer[property]}`);
  }
}

const customer = {
  id: "CUST_001",
  name: "John Doe",
  email: "john@email.com",
  isActive: true,
};

displayCustomerInfo(customer);
//Output:
//id: CUST_001
//name: John Doe
//email: john@email.com
//isActive: true

//Filtering properties
function getCustomerContactInfo(customer) {
  const contactInfo = {};

  for (let key in customer) {
    if (key === "email" || key === "phone" || key === "address") {
      contactInfo[key] = customer[key];
    }
  }
  return contactInfo;
}

//5. For .... of loop (Iterable values)

//Iterates over iterable values (arrays, strings, etc)
for (let value of iterable) {
  //code using value
}

//CRM examples
function processCustomerEmails(emails) {
  for (let email of emails) {
    console.log(`Processing: ${email}`);
    // validateEmail(email);'
    // sendWelcomeEmail(email);
  }
}

//Working with customer data
function calculateTotalRevenue(orders) {
  let total = 0;

  for (let order of orders) {
    total += order.amount;
  }

  return total;
}

//String iteration
function validateCustomerName(name) {
  for (let char of name) {
    if (!/[a-zA-Z\s-']/.test(char)) {
      return false;
    }
  }
  return true;
}

//Array destructing in for...of
const customers = [
  ["John", "john@email.com"],
  ["Jane", "jane@email.com"],
  ["Bob", "bob@email.com"],
];

for (let [name, email] of customers) {
  console.log(`Name: ${name}, Email:${email}`);
}

//BREAK AND CONTINUE

//Break statement

//Exits the loop entirely
for (let i = 0; i < customers.length; i++) {
  if (customer[i].status === "blocked") {
    console.log("Found blocked customer, stopping process");
    break; //Exit the entire loop
  }
  processCustomerEmails(customers[i]);
}

//Break in nested loops only breaks inner loop
function findCustomerByEmail(customers, targetEmail) {
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    for (let j = 0; j < customer.emails.length; j++) {
      if (customer.emails[j] === targetEmail) {
        console.log(`Found Cusomter: ${customer.name}`);
        break; //Only breaks inner loop
      }
    }
  }
}

//Continue Statement

//Skips current iteration, continue with next
for (let i = 0; i < customers.length; i++) {
  if (!customers[i].isActive) {
    continue; //Skipp inactive customers
  }

  //Process only active customers
  sendNewsletter(cusomters[i]);
}

//Continue in for..of
function processValidOrders(orders) {
  for (let order of orders) {
    if (order.amount <= 0) {
      console.log(`Skipping invalid order: ${order.id}`);
      continue;
    }

    if (!order.customerId) {
      console.log(`Skipping order without customer: ${order.id}`);
      continue;
    }

    //Process valid orders
    fulfillOrder(order);
  }
}

//LABELED STATEMENTS (ADVANCED)

//Label looops for specific break/continue targets
outerLoop: for (let i = 0; i < customers.length; i++) {
  innerLoop: for (let j = 0; j < orders.length; j++) {
    if (
      orders[j].customerId === customers[i].id &&
      orders[j].status === "urgent"
    ) {
      console.log(`Found urgent order for ${customers[i].name}`);
      break outerLoop; //Breaks both loops!
    }
  }
}

//Real CRM example
function findFirstUrgentCustomer(customers) {
  customerSearch: for (let customer of customers) {
    orderCheck: for (let order of customer.orders) {
      if (order.priority === "urgent" && order.status === "pending") {
        console.log(`Urgent order found for: ${customer.name}`);
        return customer; //Better than labeled break in this case
      }
    }
  }
  return null;
}

//ERROR HANDLING WITH TRY/CATCH/FINALLY

//Basic Try/Catch

try {
  //code that might throw an error
  riskyOperation();
} catch (error) {
  //Handle the error
  console.log("An error occurred:", error.message);
} finally {
  //Always runs (optional)
  cleanup();
}

//CRM example - API call error handling
function fetchCustomerData(customerId) {
  try {
    const response = fetch(`/api/customers/${customerId}`);
    const customer = response.json();
    return customer;
  } catch (error) {
    console.error("Failed to fetch customer:", error.message);
    return null;
  } finally {
    console.log("Customer fetch attempt completed");
  }
}

//Throwing Custom Errors

function validateCustomerAge(age) {
  try {
    if (typeof age !== "number") {
      throw new Error("Age must be a number");
    }
    if (age < 0) {
      throw new Error("Age cannot be negative");
    }
    if (age > 150) {
      throw new Error("Age seems unrealistic");
    }

    return true;
  } catch (error) {
    console.log("Validation error:", error.message);
    return false;
  }
}

//CRM Form validation with custom errors
function createCustomer(customerData) {
  try {
    if (!customerData.name) {
      throw new Error("Customer name is required");
    }
    if (!customerData.email || !customerData.email.includes("@")) {
      throw new Error("Valid email is required");
    }

    if (!cusomterData.phone || customerData.phone.length < 10) {
      throw new Error("Valid phone number is required");
    }

    //if we get here, all validations passed
    const customer = saveCustomerToDatabase(customerData);
    return { success: true, customer };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

//Practical CRM examples

//Example 1: Customer Status Processor

function processCustomerStatuses(customers) {
  for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];

    try {
      // Skip if no customer data
      if (!customer) {
        continue;
      }

      // Determine new status based on activity
      let newStatus;
      if (customer.lastLoginDays <= 7) {
        newStatus = "Active";
      } else if (customer.lastLoginDays <= 30) {
        newStatus = "Inactive";
      } else if (customer.lastLoginDays <= 90) {
        newStatus = "Dormant";
      } else {
        newStatus = "Lost";
      }

      // Update if status changed
      if (customer.status !== newStatus) {
        customer.status = newStatus;
        console.log(`Updated ${customer.name} to ${newStatus}`);
      }
    } catch (error) {
      console.error(
        `Error processing customer ${customer?.name || "unknown"}:`,
        error.message
      );
      continue; // Continue with next customer
    }
  }
}

//Example 2 : Order Processing system

function processOrderQueue(orders) {
  let processed = 0;
  let failed = 0;

  orderLoop: for (let order of orders) {
    try {
      // Validate order
      if (!order.customerId) {
        throw new Error("Missing customer ID");
      }

      if (!order.items || order.items.length === 0) {
        throw new Error("No items in order");
      }

      // Process each item
      for (let item of order.items) {
        if (item.quantity <= 0) {
          throw new Error(`Invalid quantity for item ${item.name}`);
        }

        if (!item.price || item.price <= 0) {
          throw new Error(`Invalid price for item ${item.name}`);
        }
      }

      // If we get here, order is valid
      fulfillOrder(order);
      processed++;
    } catch (error) {
      console.error(`Order ${order.id} failed:`, error.message);
      failed++;
      continue; // Continue with next order
    }
  }

  console.log(`Processing complete: ${processed} successful, ${failed} failed`);
  return { processed, failed };
}
