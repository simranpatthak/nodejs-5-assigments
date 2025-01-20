export default function About() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">About This Project</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Route Protection - Secure access to protected routes</li>
            <li>Authentication - JWT-based user authentication</li>
            <li>Role-based Authorization - Admin-specific actions</li>
            <li>User Management - CRUD operations for user data</li>
            <li>Redux Integration - State management using Redux Toolkit</li>
            <li>Modal Dialogs - Interactive user interfaces</li>
            <li>Responsive Design - Mobile-friendly UI with Tailwind CSS</li>
            <li>Error Handling - Comprehensive error management</li>
            <li>Token Management - Secure token storage and handling</li>
          </ul>
        </div>
      </div>
    );
  }