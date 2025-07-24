// Your Challenge: Complete this CustomerProfileManager
function CustomerProfileManager() {
  // TODO: Declare appropriate variables here
  // // Hint: Think about what should be const vs let
  // // Customer identification (never changes)
  // // TODO: customerId, registrationDate
  const customerId = null;
  const registrationDate = null;
  // // Customer details (can change)
  // // TODO: name, email, phone, status, subscriptionLevel
  let name = null;
  let email = null;
  let phone = null;
  let status = "active";
  let subscriptionLevel = null;
  // // Metrics (change over time)
  // // TODO: totalOrders, lastOrderDate
  let totalOrders = null;
  let lastOrderDate = null;
  // // Methods to implement:
  function updatePersonalInfo(newName, newEmail, newPhone) {
    // TODO: Update the changeable personal information
    // // Remember: some values can change, others cannot!
    name = newName;
    email = newEmail;
    phone = newPhone;

    return name, email, phone;
  }
  function changeSubscription(newLevel) {
    // TODO: Update subscription level
    //  Add validation in this scope
    if (status === "active") {
      subscriptionLevel = newLevel;
    } else {
      return;
    }
  }
  function addOrder() {
    // TODO: Increment total orders
    // // Update last order date
    // // Use proper variable scoping
  }
  function getCustomerSummary() {
    // TODO: Return customer information
    // // Make sure all variables are accessible here
  }
  // Return public methods
  return {
    updatePersonalInfo,
    changeSubscription,
    addOrder,
    getCustomerSummary,
  };
}
// // Test your implementation: const customer = CustomerProfileManager();
