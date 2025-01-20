import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUser } from '../store/slice/userSlice';
import Modal from './Modal';

export default function UserTable() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  const { user: currentUser } = useSelector((state) => state.auth);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);

  const handleDelete = async (userId) => {
    if (currentUser.role !== 'Admin') {
      alert('Only admins can delete users');
      return;
    }
    const result = await dispatch(deleteUser(userId));
    if (deleteUser.fulfilled.match(result)) {
      setModalType(null);
    }
  };

  const handleUpdate = async (userData) => {
    if (currentUser.role !== 'Admin') {
      alert('Only admins can update users');
      return;
    }
    const result = await dispatch(updateUser({ userId: selectedUser.id, userData }));
    if (updateUser.fulfilled.match(result)) {
      setModalType(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Date of Birth</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.dateOfBirth}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.location}</td>
              <td className="px-6 py-4 space-x-2">
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setModalType('view');
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View
                </button>
                {currentUser.role === 'Admin' && (
                  <>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setModalType('edit');
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setModalType('delete');
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalType && (
        <Modal
          user={selectedUser}
          type={modalType}
          onClose={() => {
            setModalType(null);
            setSelectedUser(null);
          }}
          onConfirm={modalType === 'delete' ? () => handleDelete(selectedUser.id) : handleUpdate}
        />
      )}
    </div>
  );
}