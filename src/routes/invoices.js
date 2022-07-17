import { Link } from "react-router-dom"
import { invoices } from "../data"
import '../invoices.css';
export default function Invoices() {

    return (
      <div className="main-div">
        <h1>Invoices</h1>
        <div className="side-navbar">
            {invoices.map((inv) => (
                <Link to={`/invoices/${inv.number}`} key={inv.number}>
                {inv.name}
                </Link>
            ))}
        </div>
      </div>
    );
} 