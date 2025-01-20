export default function Modal({ user, type, onClose, onConfirm }) {
    const isViewOnly = type === 'view';
    const isDelete = type === 'delete';
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">
            {isDelete ? 'Confirm Delete' : isViewOnly ? 'User Details' : 'Edit User'}
          </h2>
  
          {isDelete ? (
            <p>Are you sure you want to delete user {user.username}?</p>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  defaultValue={user.username}
                  disabled={isViewOnly}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  disabled={isViewOnly}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  defaultValue={user.dateOfBirth}
                  disabled={isViewOnly}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  defaultValue={user.role}
                  disabled={isViewOnly}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  defaultValue={user.location}
                  disabled={isViewOnly}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
            </div>
          )}
  
          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            {!isViewOnly && (
              <button
                onClick={onConfirm}
                className={`px-4 py-2 rounded text-white ${
                  isDelete ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isDelete ? 'Delete' : 'Save'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }