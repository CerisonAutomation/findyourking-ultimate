import type { Metadata } from "next";
export const metadata: Metadata = { title: "Reports" };
const MOCK_REPORTS = [
  { id: "r001", reporter: "marcus.b@example.com", reported: "fake_user99", reason: "fake_profile", status: "open", date: "Dec 5, 2024" },
  { id: "r002", reporter: "priya.s@example.com", reported: "spammer123", reason: "spam", status: "reviewing", date: "Dec 4, 2024" },
  { id: "r003", reporter: "camille.m@example.com", reported: "harasser_x", reason: "harassment", status: "resolved", date: "Dec 3, 2024" },
  { id: "r004", reporter: "james.t@example.com", reported: "badphotos44", reason: "inappropriate_photos", status: "dismissed", date: "Dec 2, 2024" },
];
const statusColors: Record<string, string> = {
  open: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  reviewing: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  resolved: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  dismissed: "bg-gray-100 text-gray-500",
};
export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h2>
        <div className="flex gap-2">
          {["all","open","reviewing","resolved"].map(s => (
            <button key={s} className={"rounded-lg px-3 py-1.5 text-xs font-medium capitalize transition-colors " + (s === "all" ? "bg-purple-600 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50")}>{s}</button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800/50">
            <tr>
              {["Reporter","Reported User","Reason","Status","Date","Actions"].map(h => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {MOCK_REPORTS.map(r => (
              <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40">
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300 text-xs">{r.reporter}</td>
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{r.reported}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400 capitalize">{r.reason.replace("_"," ")}</td>
                <td className="px-4 py-3"><span className={"rounded-full px-2 py-0.5 text-xs font-semibold " + (statusColors[r.status] ?? "")}>{r.status}</span></td>
                <td className="px-4 py-3 text-gray-500 text-xs">{r.date}</td>
                <td className="px-4 py-3">
                  <button className="text-xs text-purple-600 hover:underline mr-2">Review</button>
                  <button className="text-xs text-red-500 hover:underline">Dismiss</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
