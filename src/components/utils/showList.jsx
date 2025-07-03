import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowList = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/contactUs/getList");
        if (response.data.status) {
          setContactList(response.data.data);
        }
      } catch (error) {
        console.error("❌ Error fetching contact list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactList();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us Submissions</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : contactList.length === 0 ? (
        <p className="text-gray-500">No submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead className="bg-gray-100 text-gray-700 text-left">
              <tr>
                <th className="px-4 py-2 border-b">Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Phone</th>
                <th className="px-4 py-2 border-b">Subject</th>
                <th className="px-4 py-2 border-b">Message</th>
                <th className="px-4 py-2 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{contact.contactName}</td>
                  <td className="px-4 py-2 border-b">{contact.contactEmail}</td>
                  <td className="px-4 py-2 border-b">{contact.contactPhoneNo}</td>
                  <td className="px-4 py-2 border-b">{contact.subject}</td>
                  <td className="px-4 py-2 border-b">{contact.message || "-"}</td>
                  <td className="px-4 py-2 border-b text-sm text-gray-500">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShowList;