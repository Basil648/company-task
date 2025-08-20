import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-slate-600 text-lg">
                Loading users....
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-[#f9f8f4] py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                Our Users
            </h2>

            <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-white shadow-md rounded-xl p-6 w-72 hover:shadow-lg transition"
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Placeholder avatar */}
                            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold mb-4">
                                {user.name.charAt(0)}
                            </div>

                            {/* User details */}
                            <h3 className="text-lg font-semibold text-slate-800">{user.name}</h3>
                            <p className="text-slate-600 text-sm">{user.email}</p>
                            <p className="mt-2 text-slate-500 text-sm">{user.phone}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Users;
