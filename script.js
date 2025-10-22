   const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class 'price'
  const prices = document.querySelectorAll(".price");

  // Convert NodeList to array and calculate sum
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent);
  });

  // Check if a total row already exists — if yes, remove it (to allow updates)
  const existingTotalRow = document.querySelector(".total-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row for the total
  const table = document.querySelector("#groceries");
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; // make cell span both columns
  totalCell.textContent = `Total Price: ₹${total}`;
  totalCell.style.fontWeight = "bold";

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

// Add event listener for button click
getSumBtn.addEventListener("click", getSum);

