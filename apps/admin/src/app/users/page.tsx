import type { Metadata } from "next";
export const metadata: Metadata = { title: "Users" };
const MOCK_USERS = [
  { id: "u001", email: "james.t@example.com", age: 31, verified: true, sub: "Premium", joined: "Dec 1, 2024" },
  { id: "u002", email: "sophia.ny@example.com", age: 25, verified: true, sub: "VIP", joined: "Nov 28, 2024" },
  { id: "u003", email: "priya.s@example.com", age: 28, verified: false, sub: "Free", joined: "Nov 15, 2024" },
  { id: "u004", email: "marcus.b@example.com", age: 31, verified: true, sub: "Premium", joined: "Oct 30, 2024" },
  { id: "u005", email: "camille.m@example.com", age: 30, verified: true, sub: "Free", joined: "Oct 12, 2024" },
];
export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h2>
        <input type="search" placeholder="Search users..." className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500" />
      </div>
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800/50">
            <tr>
              {["ID","Email","Age","Verified","Subscription","Joined","Actions"].map(h => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {MOCK_USERS.map(u => (
              <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                <td className="px-4 py-3 font-mono text-xs text-gray-500">{u.id}</td>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{u.email}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{u.age}</td>
                <td className="px-4 py-3">
                  <span className={"rounded-full px-2 py-0.5 text-xs font-semibold " + (u.verified ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-500")}>{u.verified ? "Yes" : "No"}</span>
                </td>
                <td className="px-4 py-3">
                  <span className={"rounded-full px-2 py-0.5 text-xs font-semibold " + (u.sub === "VIP" ? "bg-purple-100 text-purple-700" : u.sub === "Premium" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>{u.sub}</span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{u.joined}</td>
                <td className="px-4 py-3">
                  <button className="text-xs text-purple-600 hover:underline mr-3">View</button>
                  <button className="text-xs text-red-500 hover:underline">Ban</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm text-gray-500">Showing 5 of 52,341 users</span>
          <div className="flex gap-2">
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 disabled:opacity-50" disabled>Previous</button>
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
