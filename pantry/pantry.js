document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('add-item-form');
    const inventoryList = document.getElementById('inventory-list');
  
    let items = [];
  
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const itemName = document.getElementById('item-name').value;
      const quantity = document.getElementById('quantity').value;
  
      const newItem = {
        id: Date.now().toString(),
        name: itemName,
        quantity: parseInt(quantity)
      };
  
      items.push(newItem);
      displayItems();
      addItemForm.reset();
    });
  
    function displayItems() {
      inventoryList.innerHTML = '';
      items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'inventory-item';
        li.innerHTML = `
          ${item.name} - Quantity: ${item.quantity}
          <div>
            <button onclick="updateItem('${item.id}')">Update</button>
            <button onclick="deleteItem('${item.id}')">Delete</button>
          </div>
        `;
        inventoryList.appendChild(li);
      });
    }
  
    window.updateItem = (id) => {
      const item = items.find(item => item.id === id);
      if (item) {
        const newQuantity = prompt(`Update quantity for ${item.name}:`, item.quantity);
        if (newQuantity !== null) {
          item.quantity = parseInt(newQuantity);
          displayItems();
        }
      }
    };
  
    window.deleteItem = (id) => {
      items = items.filter(item => item.id !== id);
      displayItems();
    };
  });
  