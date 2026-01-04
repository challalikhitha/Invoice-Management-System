import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [invoices] = useState(
    JSON.parse(localStorage.getItem("invoices")) || []
  );

  return (
    <div className="container">
      <h2>Invoices</h2>
      <button onClick={() => navigate("/invoice")}>Add Invoice</button>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((i, idx) => (
            <tr key={idx}>
              <td>{i.invoiceNo}</td>
              <td>{i.client}</td>
              <td>{i.amount}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
