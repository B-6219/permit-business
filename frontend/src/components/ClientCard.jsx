import React from "react";
function ClientCard({ client }) {
    return (
        <div className="card">
            <h1>{client.full_name}</h1>
            <div className="info">
                <p><strong>Phone:</strong> {client.phone}</p>
                <p><strong>Email:</strong> {client.email}</p>
                <p><strong>Company:</strong> {client.company}</p>
            </div>
        </div>
    );
}

export default ClientCard;