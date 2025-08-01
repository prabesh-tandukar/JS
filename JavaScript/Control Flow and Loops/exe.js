// Conceptual Questions:

// When would you use a for loop vs a while loop vs a for...of loop? Give CRM examples for each.
//I would use for loop when i have to iterate through a certain iterative  data structure like arrays, objects, string with a counter. Then i would use a while loop when i have to keep running the same code until i meet a certain case. and a for of loop when iterating through iterable values like arrays and string and i have to modify or do something with each of the item of such value. the simple for loop and for..of are very similar and from what i understans is if i am sure i need each value from the iterable then i will use for..of loop but if i am not sure and its a general looping task then i will use the for loop.
//I know there is more difference so please provide a detailed answer.

// What's the difference between break and continue? Create a scenario where you'd use each in a customer processing function.
//A break completely breaks out of the loop where as continue break out of the current iteration and continues to the next iteration. In a customer processing function i would use break if crucial information about the customer is not given and make the user to enter the values again and i would use continue if optional information are not given just pass over with continue and move on.

// Why should you always use try/catch when processing external data (like API responses or user input)?
//We always use try/catch with external data because most of the time there maybe some irregularities with data and the data may not be the same as we have anticipated so we need to use try catch.

//Code Practice Questions

//4. FIx this infinite loop

function countActiveCustomers(customers) {
  let count = 0;
  let i = 0;

  while (i < customers.length) {
    if (customers[i].isActive) {
      count++;
    }
    i++;
  }

  return count;
}

//5. Complete this customer validation function
function validateCustomers(customers) {
  const results = [];

  // TODO: Loop through customers
  // TODO: For each customer, validate:
  //       - Name exists and is not empty
  //       - Email exists and contains @
  //       - Age is a number between 13 and 120
  // TODO: Use try/catch for error handling
  // TODO: Skip invalid customers but continue processing
  // TODO: Return array of valid customers

  for (let customer in customers) {
    try {
      if (!customer.name) {
        throw new Error("Customer name required");
      }
      if (!customer.email || !customer.email.includes("@")) {
        throw new Error("Valid email is required");
      }
      if (customer.age < 13 || customer.age > 120) {
        throw new Error("Valid age is required");
      }

      results.push(customer);
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      continue;
    }
  }

  return results;
}

// Build a customer search function:

function searchCustomers(customers, searchTerm) {
  // TODO: Search through customers array
  // TODO: Check if searchTerm matches name, email, or phone
  // TODO: Return first matching customer
  // TODO: Use appropriate loop type
  // TODO: Handle case-insensitive search
  for (let customer of customers) {
    let result =
      customer.email.includes(searchTerm) ||
      customer.name.includes(searchTerm) ||
      customer.phone.includes(phone);
  }

  return result; // Replace with your implementation
}
