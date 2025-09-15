import axios from "axios";
import React, { useEffect, useState } from "react";

export const Referral = () => {
  const [referrals, setReferrals] = useState([]);
  const token = localStorage.getItem("loanToken");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!token || !userId) return;

    axios
      .get(
        `${import.meta.env.VITE_APP_API_BASE_URL}api/user/referrals/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setReferrals(res.data))
      .catch((err) => console.error(err));
  }, [token, userId]);

  return (
    <div className="p-4 mt-20">
      <h2 className="text-2xl font-semibold mb-4">Referral List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left border-b border-gray-200">
                Name
              </th>
              <th className="py-2 px-4 text-left border-b border-gray-200">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {referrals.map((referral, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b border-gray-200">
                  {referral.name}
                </td>
                <td className="py-2 px-4 border-b border-gray-200">
                  {referral.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
