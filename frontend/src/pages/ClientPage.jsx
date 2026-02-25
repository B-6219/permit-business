import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ClientCard from "../components/ClientCard";
import Loading from "../components/Loading";

function ClientPage() {
    const { id } = useParams();
    const [client, setClient] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        axios
            .get(`https://your-backend.com/api/client/${id}`)
            .then((res) => setClient(res.data))
            .catch(() => setError("Client not found"));
    }, [id]);

    if (error) return <div className="center">{error}</div>;
    if (!client) return <Loading />;

    return (
        <div className="container">
            <ClientCard client={client} />
        </div>
    );
}

export default ClientPage;