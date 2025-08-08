//Functions Deep Dive

//Functions are the building blocks of JavaScript applications.

//Function Declarations vs Function Expressions

//Function Declaration

//Function Declaration - Hoisted (can be called before definition)
function calculateCommission(salesAmount, rate) {
  return salesAmount * rate;
}

//Can be called before decclaration due to hoisting
const commission = calculateCommission(1000, 0.05);

//CRM examples
function createCustomer(name, email, phone) {
  return {
    id: generateCustomerId(),
    name: name,
    email: email,
    phone: phone,
    createdAt: new Date(),
    isActive: true,
  };
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function Expression

//Function Expression - Not hoisted (cannot be called before definition)
const calculateDiscount = function (price, percentage) {
  return price * (percentage / 100);
};

//Cannot be called before definition
//calculateDiscount(100, 10); //Error if place here

//CRM Examples
const processOrder = function (customerId, items) {
  const customer = findCustomer(customerId);
  if (!customer) {
    throw new Error("Customer not found");
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);
  return createOrder(customer, items, total);
};

const sendEmail = function (to, subject, body) {
  //Email sending logic
  console.log(`Sending email to ${to}: ${subject}`);
};

//Arrow Functions (ES6)

//Basic Arrow Function Syntax

//Traditional function
const add = function (a, b) {
  return a + b;
};

//Arrow function
const addArrow = (a, b) => {
  return a + b;
};

//Concise arrow function (implicit return)
const addConcise = (a, b) => a + b;

//Single parameter (parentheses optional)
const double = (x) => x * 2;
const greet = (name) => `Hello, ${name}!`;

//No parameters
const getCurrentDate = () => new Date();
const generateId = () => Math.random().toString(36).substr(2, 9);

//CRM Arrow Function Examples

//Customer data processing
const customers = [
  { name: "John", revenue: 5000 },
  { name: "Jane", revenue: 8000 },
  { name: "Bob", reveneue: 3000 },
];

//Filter high-value customers
const highValueCustomers = customers.filter(
  (customer) => customer.revenue > 4000
);

//Calculate total revenue
const totalRevenue = customers.reduce(
  (total, customer) => total + customer.revenue,
  0
);

// Transform customer data
const customerSumamries = customers.map((customer) => ({
  name: customer.name,
  tier: customer.revenue > 5000 ? "Premium" : "Standard",
}));

//Validation functions
const isValidPhone = (phone) => /^\+?[\d\s-()]+$/.test(phone);
const isValidAge = (age) => age >= 13 && age <= 120;
const hasRequiredFields = (customer) =>
  customer.name && customer.mail && customer.phone;

//Function Parameters

//Default Parameters

//ES6 Default Parameters
function createCustomerProfile(
  name,
  email,
  phone,
  country = "USA",
  status = "Active"
) {
  return {
    name: name,
    email: email,
    phone: phone,
    country: country,
    status: status,
    createdAt: new Date(),
  };
}

//Usage
const customer1 = createCustomerProfile("John", "john@email.com", "555-1234");

//country defaults to "USA", status defaults to "Active"
const customer2 = createCustomerProfile(
  "Jane",
  "jane@email.com",
  "555-5678",
  "Canada",
  "Inactive"
);

//CRM API wrapper with defaults
function fetchCustomers(page = 1, limit = 10, sortBy = "name", order = "asc") {
  const url = `/api/customers?page=${page}&limit=${limit}&sort=${sortBy}&order=${order}`;
  return fetch(url).then((response) => response.json());
}

//Rest Parameters

//Rest parameters - collect multiple arguments into an array
function calculateTotal(basePrice, ...fees) {
  const totalFees = fees.reduce((sum, fee) => sum + fee, 0);
  return basePrice + totalFees;
}

//Usage
const total1 = calculateTotal(100, 10, 5, 2); // basePrice = 100, fees = [10, 5, 2]
const total2 = calcualteTotal(200, 15); //basePrice = 200, fees=15

//CRM examples
function sendNotification(message, ...recipients) {
  recipients.forEach((recipient) => {
    console.log(`Sending "${message}" to ${recipient}`);
  });
}

sendNotification(
  "New order received",
  "manager@company.com",
  "sales@company.com"
);

function createOrder(customerId, ...items) {
  const order = {
    id: generateOrderId(),
    customerId: customerId,
    items: items,
    total: items.reduce((sum, item) => sum + item.price, 0),
    createAt: new Date(),
  };
  return order;
}

//Log customer activites
function logActivity(customerId, action, ...details) {
  const logEntry = {
    customerId,
    action,
    details: details.join(""),
    timestamp: new Date(),
  };
  console.log("Activity logged:", logEntry);
}

logActivity("CUST_001", "purchase", "Product A", "Quantity: 2", "Total: $99");

// Destructing parameters

// Object destructuring:  in parameters
function updateCustomer({ id, name, email, phone, ...otherData }) {
  console.log(`Updating customer ${id}`);
  console.log(`Name: ${name}, Email: ${email}, Phone: ${[phone]}`);
}

//Usage
updateCustomer({
  id: "CUST_001",
  name: "John Doe",
  email: "john@email.com",
  phone: "555-1234",
  address: "123 Main St",
  city: "New York",
});

//Array destructuring in parameters
function processOrder([orderId, customerId, total]) {
  console.log(
    `Processing order ${orderId} for customer ${customerId}, total: ${total}`
  );
}

processOrder(["ORD_001", "CUST_001", 99.99]);

//Complex destructring example
function createInvoice({
  customer: { name, email, address },
  order: { id, items, total },
  options = { sendEmail: true, format: "PDF" },
}) {
  const invoice = {
    customerName: name,
    customerEmail: email,
    customerAddress: address,
    orderId: id,
    items: items,
    total: total,
    format: options.format,
    createdAt: new Date(),
  };

  if (options.sendEmail) {
    sendInvoiceEail(email, invoice);
  }

  return invoice;
}

//Function scope and Lexical Scoping

//Function Scope

function outerFunction() {
  const outerVariable = "I'm in outer scope";

  function innerFunction() {
    const innerVariable = "I'm in inner scope";
    console.log(outerVariable); //Can access outer scope
    console.log(innerVariable); //Can access own scope
  }

  innerFunction();
  //console.log(innerVariable); //Error! Cannot access inner scope
}

//CRM Example
function create
