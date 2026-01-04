import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({
    invoiceNo: "",
    client: "",
    date: "",
    amount: "",
    status: "Pending",
  });

  const submit = (e) => {
    e.preventDefault();
    if (!invoice.invoiceNo || !invoice.client || !invoice.amount) {
      alert("All fields required");
      return;
    }

    const invoices = JSON.parse(localStorage.getItem("invoices")) || [];
    invoices.push(invoice);
    localStorage.setItem("invoices", JSON.stringify(invoices));
    navigate("/home");
  };

  return (
    <div className="container">
      <h2>Add Invoice</h2>
      <form onSubmit={submit}>
        <input placeholder="Invoice No" onChange={(e)=>setInvoice({...invoice,invoiceNo:e.target.value})}/>
        <input placeholder="Client Name" onChange={(e)=>setInvoice({...invoice,client:e.target.value})}/>
        <input type="date" onChange={(e)=>setInvoice({...invoice,date:e.target.value})}/>
        <input placeholder="Amount" onChange={(e)=>setInvoice({...invoice,amount:e.target.value})}/>
        <select onChange={(e)=>setInvoice({...invoice,status:e.target.value})}>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Pending</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
}

export default InvoiceForm;
