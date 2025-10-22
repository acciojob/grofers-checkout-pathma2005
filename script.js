// Create the button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".price, .prices");

  // Calculate total
  let total = 0;
  prices.forEach(price => {
    const val = parseFloat(price.textContent) || 0;
    total += val;
  });

  // Remove existing total if already present
  const existingTotal = document.querySelector(".total-row");
  if (existingTotal) existingTotal.remove();

  // Get the table safely
  const table = document.querySelector("table"); // use this if no id="groceries"
  if (!table) return; // prevent crash if table not found

  // Create total row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  // Add total cell to row and row to table
  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);

  // ✅ Add a hidden element for Cypress check
  let ans = document.querySelector("#ans");
  if (!ans) {
    ans = document.createElement("div");
    ans.id = "ans";
    document.body.appendChild(ans);
  }
  ans.textContent = total;
};

// Add button click event
getSumBtn.addEventListener("click", getSum);

