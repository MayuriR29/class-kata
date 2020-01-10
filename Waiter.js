class Waiter {
  constructor(waiterName = 'Sam') {
    this.waiterName = waiterName;
    this.orders = [];
  }
  welcomeGuests() {
    return `welcome! what can i do for you today?`;
  }
  takeOrder(orders) {
    this.orders = orders;
  }
  repeatOrder(orders) {
    console.log("you have ordered:", this.orders);
  }
}
const jerry = new Waiter('jerry');
const tom=new Waiter('tom');
tom.takeOrder(['tofu','noodles']);
jerry.takeOrder(['rice','mango']);
console.log(tom);
console.log(jerry);

