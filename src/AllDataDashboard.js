import React, { useEffect, useState } from "react";
import api from "./api";

function AllDataDashboard() {
  const [foods, setFoods] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    api.get("foods/").then((res) => setFoods(res.data));
    api.get("customers/").then((res) => setCustomers(res.data));
    api.get("orders/").then((res) => setOrders(res.data));
    api.get("feedbacks/").then((res) => setFeedbacks(res.data));
  }, []);

  return (
    <div>
      <h2>Foods</h2>
      <ul>
        {foods.map((f) => (
          <li key={f.id}>
            {f.name} - ${f.price}
          </li>
        ))}
      </ul>

      <h2>Customers</h2>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} ({c.email})
          </li>
        ))}
      </ul>

      <h2>Orders</h2>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>
            Customer ID: {o.customer} ordered Food ID: {o.food}
          </li>
        ))}
      </ul>

      <h2>Feedbacks</h2>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}>
            Order ID: {fb.order} - {fb.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllDataDashboard;
