import UserTable from "../../components/UserTable"

const Home = () => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">User Management Dashboard</h1>
    <UserTable />
  </div>
  )
}

export default Home