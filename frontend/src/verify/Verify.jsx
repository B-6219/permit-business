
import React from "react"
import { useParams } from "react-router-dom"
import "./verify.css"

const clientData = [
    {
        id: "12345",
        ownerName: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        nationalId: "987654321",
        business: {
            name: "John's Widgets",
            licenseNumber: "AB123456",
            location: "New York, USA",
            status: "Active"
        }
    },
    {
        id: "67890",
        ownerName: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+1 987 654 321",
        nationalId: "123456789",
        business: {
            name: "Smith Electronics",
            licenseNumber: "CD789101",
            location: "Los Angeles, USA",
            status: "Active"
        }
    },
    {
        id: "62196219",
        ownerName: "Brian Technologies",
        email: "briantech@example.com",
        phone: "+254791948411",
        nationalId: "123456789",
        business: {
            name: "Golden Technologies",
            licenseNumber: "CD789101",
            location: "Kiganjo, Thika",
            status: "Active"
        }
    },
    {
        id: "aaaa",
        ownerName: "Rigathi Kasongo",
        email: "kasongo@example.com",
        phone: "+254700122324",
        nationalId: "123456789",
        business: {
            name: "Mwizi wa Pesa Ventures",
            licenseNumber: "CD789101",
            location: "Nairobi, Kenya",
            status: "Not Verified"
        }
    },
    {
        id: "bbbb",
        ownerName: "Muthoni Wanjiku",
        email: "muthoni@email.com",
        business: {
            name: "WinTech Elecricals",
            licenseNumber: "UWT171438",
            location: "2ND FLOOR PILOT BUILDING, NAIROBI",
            effectiveDate: "16 February 2026",
            expiryDate: "15 February 2027",
            status: "Active",
            unit: 'A10'
        }
    },
    {
        id: "cccc",
        ownerName: "Shaggy",
        email: "shaggy@email.com",
        business: {
            name: "ShaggyElecricals",
            licenseNumber: "UWT171438",
            location: "2ND FLOOR PILOT BUILDING, NAIROBI",
            effectiveDate: "16 February 2026",
            expiryDate: "15 February 2027",
            status: "Active",
            unit: 'A10'
        }
    },

]

const Verify = () => {
    const { id } = useParams()
    const client = clientData.find((c) => c.id === id)

    if (!client) {
        return (
            <div className="verify-container">
                <div className="not-found-card">
                    ❌ Record Not Found
                </div>
            </div>
        )
    }

    const isVerified = client.business.status === "Active"

    return (
        <div className="verify-container">
            <div className="verify-card">

                <div className="header">
                    <h1>Official Business Verification</h1>
                    <span className={`status-badge ${isVerified ? "verified" : "not-verified"}`}>
                        {isVerified ? "✔ Verified & Active" : "⚠ Not Verified"}
                    </span>
                </div>

                <div className="divider" />

                <div className="info-grid">
                    {/* <div>
                        <h3>Owner Details</h3>
                        <p><strong>Name:</strong> {client.ownerName}</p>
                        <p><strong>Email:</strong> {client.email}</p>
                        <p><strong>Phone:</strong> {client.phone}</p>
                        <p><strong>National ID:</strong> {client.nationalId}</p>
                    </div> */}

                    <div>
                        <h3>Business Details</h3>
                        <p><strong>Business Name:</strong> {client.business.name}</p>
                        <p><strong>License Number:</strong> {client.business.licenseNumber}</p>
                        <p><strong>Location:</strong> {client.business.location}</p>
                        <p><strong>Unit:</strong> {client.business.unit}</p>
                        {client.business.effectiveDate && (
                            <p><strong>Effective Date:</strong> {client.business.effectiveDate}</p>
                        )}
                        {client.business.expiryDate && (
                            <p><strong>Expiry Date:</strong> {client.business.expiryDate}</p>
                        )}
                    </div>
                </div>

                <div className="divider" />

                <div className="security-footer">
                    This verification result was generated securely.
                    <br />
                    Scan authenticity powered by Digital Registry Authority.
                </div>

            </div>
        </div>
    )
}

export default Verify