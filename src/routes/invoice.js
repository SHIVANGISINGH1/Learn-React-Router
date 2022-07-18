import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export function Invoice() {

    let params = useParams();
    const invoice = getInvoice(params.invoiceId);
    console.log(invoice);

    return (
        <div>
            <h2>{invoice.name}</h2>
            <h2>{invoice.number}</h2>
        </div>
    )
} 