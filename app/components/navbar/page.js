export default function Navbar() {
  const userInfo = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <div className="bg-cyan-950 text-white p-4 rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <span className="font-bold">Welcome, {userInfo.name}</span>
        </div>
        <div>
          <span className="mr-4">{userInfo.email}</span>
          {/* Add more user information or navigation links as needed */}
          {/* Example navigation link */}
          <button
            className="text-white hover:text-gray-200"
            onClick={() => router.push("/")}
          >
            My Account
          </button>
        </div>
      </div>
    </div>
  );
}
