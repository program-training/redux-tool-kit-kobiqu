export const items = [
  { id: 1, name: "Laptop", price: "1200" },
  { id: 2, name: "Smartphone", price: "750" },
  { id: 3, name: "Coffee Maker", price: "50" },
  { id: 4, name: "Camera", price: "500" },
  { id: 5, name: "Headphones", price: "35" },
  { id: 6, name: "Tablet", price: "300" },
  { id: 7, name: "Desk Chair", price: "110" },
  { id: 8, name: "Television", price: "650" },
  { id: 9, name: "Gaming Console", price: "400" },
  { id: 10, name: "Blender", price: "80" },
  { id: 11, name: "Toaster", price: "25" },
  { id: 12, name: "Vacuum Cleaner", price: "150" },
  { id: 13, name: "Hiking Boots", price: "120" },
  { id: 14, name: "Dining Table", price: "300" },
  { id: 15, name: "Refrigerator", price: "800" },
  { id: 16, name: "Microwave Oven", price: "100" },
  { id: 17, name: "Fitness Tracker", price: "60" },
  { id: 18, name: "Sofa", price: "700" },
  { id: 19, name: "Washing Machine", price: "450" },
  { id: 20, name: "Coffee Table", price: "120" },
];

export function SetItems() {
  return (
    <div className="product_page">
      {items.map((i) => (
        <div key={i.id} className="product_card">
          <p className="item_name">{i.name}</p>
          <br />
          <p className="item_price">{i.price}</p>
          <br />
          <button>add to cart</button>
        </div>
      ))}
    </div>
  );
}
