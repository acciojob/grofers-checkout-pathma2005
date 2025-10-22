  // Create a button to calculate total
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  const prices = document.querySelectorAll(".prices");

  // Calculate total price
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Remove previous total row if it exists (for updates)
  const existingTotal = document.querySelector(".total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create new row for total
  const table = document.querySelector("#groceries");
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";
  totalCell.style.backgroundColor = "#f0f0f0";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Attach click event to button
getSumBtn.addEventListener("click", getSum);
