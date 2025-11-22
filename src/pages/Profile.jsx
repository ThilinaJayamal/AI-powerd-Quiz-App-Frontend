import React from "react";
import { useAuthStore } from "../store/authStore";

export default function profile() {

    const { user } = useAuthStore();

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6 pt-20">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Profile</h1>

                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
