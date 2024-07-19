function addProduct() {
    var productList = document.getElementById("productList");
    var newProduct = document.createElement("div");
    newProduct.classList.add("productItem");
    newProduct.innerHTML = `
      <label for="productName">Product Name:</label>
      <input type="text" class="productName" required>
  
      <label for="date">Date:</label>
      <input type="date" class="date" required>
  
      <label for="price">Price:</label>
      <input type="number" class="price" required>
  
      <label for="quantity">Quantity:</label>
      <input type="number" class="quantity" required>
    `;
    productList.appendChild(newProduct);
  }
  
  function generateInvoice() {
    var productItems = document.querySelectorAll(".productItem");
    var invoiceBody = document.getElementById("invoiceBody");
    invoiceBody.innerHTML = "";
  
    productItems.forEach(function(item) {
      var productName = item.querySelector(".productName").value;
      var date = item.querySelector(".date").value;
      var price = parseFloat(item.querySelector(".price").value);
      var quantity = parseInt(item.querySelector(".quantity").value);
      var tax = 18; 
  
      var total = price * quantity * (1 + tax / 100);
  
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${productName}</td>
        <td>${date}</td>
        <td>${price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${tax}</td>
        <td>${total.toFixed(2)}</td>
      `;
      invoiceBody.appendChild(newRow);
    });
  
    document.getElementById("invoice").style.display = "block";
  }