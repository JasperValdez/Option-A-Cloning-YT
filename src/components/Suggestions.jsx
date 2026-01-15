export default function Suggestions() {
  return (
    <aside className="w-80 flex flex-col gap-4">
      {[1,2,3,4,5].map(item => (
        <div key={item} className="flex gap-3">
          <div className="w-40 h-24 bg-gray-800 rounded-lg"></div>
          <div className="text-xs">
            <p className="font-semibold">Suggested Video Title</p>
            <p className="text-gray-400">Channel Name</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
