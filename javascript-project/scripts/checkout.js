import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import "../data/cart-class.js"; runs code inside file wihtout importing anything//
//import "../data/backend-practice.js";

async function loadPage() {
  try {
    //throw "error1";
    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      //throw "error2";
      loadCart(() => {
        //reject("error3");
        resolve("value3");
      });
    });
  } catch (error) {
    console.error("Failed to load products. Please try again later.");
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(), 
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
  .then((valu) => {
    console.log(valu);

    return 
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
