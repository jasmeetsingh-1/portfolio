import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowTestimony = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/api/testimony/getTestimony"
        );
        if (response.data.status) {
          console.log("response data >>>", response.data.data);
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

  const handleToggle = async (uid) => {
    try {
      // Call backend to update isAllowed
      await axios.put(
        `http://localhost:3003/api/testimony/toggleTestimonyVisibility/?uid=${uid}`
      );

      // Update state locally
      setContactList((prevList) =>
        prevList.map((contact) =>
          contact.uid === uid
            ? { ...contact, isAllowed: !contact.isAllowed }
            : contact
        )
      );
    } catch (error) {
      console.error("❌ Error updating isAllowed:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Testimonies Recorded</h2>
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
                <th className="px-4 py-2 border-b">Occupation</th>
                <th className="px-4 py-2 border-b">Company</th>
                <th className="px-4 py-2 border-b">Work Relationship</th>
                <th className="px-4 py-2 border-b">Project Location</th>
                <th className="px-4 py-2 border-b">Testimonial</th>
                <th className="px-4 py-2 border-b">Allowed</th>
                <th className="px-4 py-2 border-b">Created At</th>
              </tr>
            </thead>
            <tbody>
              {contactList.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{contact.name}</td>
                  <td className="px-4 py-2 border-b">{contact.email || "-"}</td>
                  <td className="px-4 py-2 border-b">
                    {contact.occupation || "-"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {contact.company || "-"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {contact.workRelationship || "-"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {contact.projectLocation || "-"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {contact.testimonial || "-"}
                  </td>
                  <td className="px-4 py-2 border-b text-center">
                    <button
                      onClick={() =>
                        handleToggle(contact.uid, contact.isAllowed)
                      }
                      className={`px-3 py-1 rounded ${
                        contact.isAllowed
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {contact.isAllowed ? "Allowed" : "Blocked"}
                    </button>
                  </td>
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

export default ShowTestimony;