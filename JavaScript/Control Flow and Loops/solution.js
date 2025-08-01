// Excellent work on the infinite loop fix! Let me give you detailed feedback and complete solutions:

// ## 📝 **Feedback on Your Answers**

// ### **Conceptual Questions - Good foundation, let me expand:**

// 1. **Loop Types - You're on the right track! Here's the complete picture:**
//    - **`for` loop**: Best when you need the index AND the value, or when you need precise control over iteration
//    - **`while` loop**: Best for conditions that aren't directly related to array/object iteration
//    - **`for...of` loop**: Best when you only need the values from iterables, cleaner syntax
//    - **`for...in` loop**: Best for object properties (avoid for arrays)

// 2. **break vs continue**: Good understanding! Your examples are practical.

// 3. **try/catch**: Correct! External data is unpredictable and can crash your application.

// ### **Code Issues to Fix:**

// **Question 5**: Several bugs - you used `for...in` on arrays (gives indices, not objects), and `return` in `catch` exits the entire function.

// **Question 6**: Logic incomplete - the loop doesn't actually return the found customer.

// ---

// ## 🔧 **Complete Solutions**

// ### **Detailed Loop Type Explanation:**

const customers = [
  { id: 1, name: "John", email: "john@email.com", orders: 5 },
  { id: 2, name: "Jane", email: "jane@email.com", orders: 3 },
  { id: 3, name: "Bob", email: "bob@email.com", orders: 8 },
];

// USE FOR LOOP when you need index AND value
function findCustomerByPosition(customers, position) {
  for (let i = 0; i < customers.length; i++) {
    console.log(`Position ${i}: ${customers[i].name}`);
    if (i === position) {
      return customers[i];
    }
  }
}

// USE WHILE LOOP for condition-based iteration
function processUntilQuota(customers) {
  let totalOrders = 0;
  let i = 0;
  const quota = 15;

  while (totalOrders < quota && i < customers.length) {
    totalOrders += customers[i].orders;
    console.log(`Processed ${customers[i].name}, total orders: ${totalOrders}`);
    i++;
  }

  return totalOrders;
}

// USE FOR...OF when you only need the values
function sendWelcomeEmails(customers) {
  for (let customer of customers) {
    console.log(`Sending email to ${customer.email}`);
    // No need for index here
  }
}

// USE FOR...IN for object properties
function displayCustomerInfo(customer) {
  for (let property in customer) {
    console.log(`${property}: ${customer[property]}`);
  }
}

// ### **Solution 4**: ✅ **Perfect!** You correctly added `i++`

// ### **Solution 5**: **Customer Validation Function**

function validateCustomers(customers) {
  const results = [];

  // Use for...of to iterate through array elements
  for (let customer of customers) {
    try {
      // Validate name
      if (!customer.name || customer.name.trim() === "") {
        throw new Error(`Customer missing name`);
      }

      // Validate email
      if (!customer.email || !customer.email.includes("@")) {
        throw new Error(`Customer ${customer.name} has invalid email`);
      }

      // Validate age
      const age = Number(customer.age);
      if (isNaN(age) || age < 13 || age > 120) {
        throw new Error(
          `Customer ${customer.name} has invalid age: ${customer.age}`
        );
      }

      // If all validations pass, add to results
      results.push(customer);
    } catch (error) {
      console.log(`Skipping invalid customer: ${error.message}`);
      // continue is implicit - just don't add to results
    }
  }

  return results;
}

// Test it:
const testCustomers = [
  { name: "John Doe", email: "john@email.com", age: 25 },
  { name: "", email: "invalid", age: 30 }, // Invalid name and email
  { name: "Jane Smith", email: "jane@email.com", age: 15 },
  { name: "Bob Johnson", email: "bob@email.com", age: 150 }, // Invalid age
];

console.log(validateCustomers(testCustomers)); // Only valid customers

// ### **Solution 6**: **Customer Search Function**

function searchCustomers(customers, searchTerm) {
  // Convert search term to lowercase for case-insensitive search
  const lowerSearchTerm = searchTerm.toLowerCase();

  // Use for...of since we need to check each customer
  for (let customer of customers) {
    // Check name, email, and phone (case-insensitive)
    const nameMatch = customer.name.toLowerCase().includes(lowerSearchTerm);
    const emailMatch = customer.email.toLowerCase().includes(lowerSearchTerm);
    const phoneMatch =
      customer.phone && customer.phone.includes(lowerSearchTerm);

    if (nameMatch || emailMatch || phoneMatch) {
      return customer; // Return first match
    }
  }

  return null; // No match found
}

// Test it:
const customerss = [
  { name: "John Doe", email: "john@email.com", phone: "555-1234" },
  { name: "Jane Smith", email: "jane@email.com", phone: "555-5678" },
  { name: "Bob Johnson", email: "bob@email.com", phone: "555-9012" },
];

console.log(searchCustomers(customerss, "john")); // Finds John Doe
console.log(searchCustomers(customerss, "JANE")); // Finds Jane Smith (case-insensitive)
console.log(searchCustomers(customerss, "555-5678")); // Finds Jane Smith by phone
console.log(searchCustomers(customerss, "xyz")); // Returns null

// ### **Solution 7**: **Subscription Renewal System**

function processSubscriptionRenewals(customers) {
  const renewalActions = [];
  const currentDate = new Date();

  for (let customer of customers) {
    try {
      // Skip if no subscription data
      if (!customer.subscriptionExpiry) {
        continue;
      }

      const expiryDate = new Date(customer.subscriptionExpiry);
      const daysUntilExpiry = Math.ceil(
        (expiryDate - currentDate) / (1000 * 60 * 60 * 24)
      );

      let action = null;

      if (daysUntilExpiry < 0) {
        // Already expired - skip
        continue;
      } else if (daysUntilExpiry === 0) {
        action = {
          customerId: customer.id,
          customerName: customer.name,
          message: "Expired: Please renew",
          priority: "urgent",
          daysUntilExpiry: 0,
        };
      } else if (daysUntilExpiry <= 7) {
        action = {
          customerId: customer.id,
          customerName: customer.name,
          message: "Urgent: Renewing soon",
          priority: "high",
          daysUntilExpiry: daysUntilExpiry,
        };
      } else if (daysUntilExpiry <= 30) {
        action = {
          customerId: customer.id,
          customerName: customer.name,
          message: "Renewal coming up",
          priority: "medium",
          daysUntilExpiry: daysUntilExpiry,
        };
      }

      if (action) {
        renewalActions.push(action);
        console.log(
          `${action.customerName}: ${action.message} (${daysUntilExpiry} days)`
        );
      }
    } catch (error) {
      console.error(
        `Error processing customer ${customer.name}: ${error.message}`
      );
      continue;
    }
  }

  return renewalActions;
}

// ### **Solution 8**: **Optimized Duplicate Finder**

// SLOW VERSION (O(n²) - your original)
function findDuplicateCustomersSlow(customers) {
  const duplicates = [];

  for (let i = 0; i < customers.length; i++) {
    for (let j = i + 1; j < customers.length; j++) {
      // Start from i+1 to avoid self-comparison
      if (customers[i].email === customers[j].email) {
        if (!duplicates.includes(customers[i])) {
          duplicates.push(customers[i]);
        }
        if (!duplicates.includes(customers[j])) {
          duplicates.push(customers[j]);
        }
      }
    }
  }

  return duplicates;
}

// OPTIMIZED VERSION (O(n) - much faster!)
function findDuplicateCustomers(customers) {
  const emailMap = {};
  const duplicates = [];

  // Single pass through customers
  for (let customer of customers) {
    const email = customer.email.toLowerCase();

    if (emailMap[email]) {
      // This email already exists
      if (emailMap[email].count === 1) {
        // First time we found a duplicate
        duplicates.push(emailMap[email].customer);
      }
      duplicates.push(customer);
      emailMap[email].count++;
    } else {
      // First time seeing this email
      emailMap[email] = {
        customer: customer,
        count: 1,
      };
    }
  }

  return duplicates;
}

// Even better - return grouped duplicates
function findDuplicateCustomersGrouped(customers) {
  const emailMap = {};

  for (let customer of customers) {
    const email = customer.email.toLowerCase();

    if (!emailMap[email]) {
      emailMap[email] = [];
    }
    emailMap[email].push(customer);
  }

  // Return only emails with duplicates
  const duplicateGroups = {};
  for (let email in emailMap) {
    if (emailMap[email].length > 1) {
      duplicateGroups[email] = emailMap[email];
    }
  }

  return duplicateGroups;
}

// ## 🎯 **Key Takeaways from Solutions:**

// 1. **Use the right loop for the job** - `for...of` for values, `for` for indices, `while` for conditions
// 2. **Handle errors gracefully** - don't let one bad record crash your entire process
// 3. **Always consider performance** - nested loops can be very slow with large datasets
// 4. **Case-insensitive searches** - users don't always type exactly what you expect
// 5. **Validate input thoroughly** - external data is unpredictable
