'use client';
export default function MyQueueSummary({ tickets, count, onRemove, onClear }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">My Queue</h3>
        <span className="text-sm text-gray-600">{count} selected</span>
      </div>
      {tickets.length === 0 ? (
        <p className="text-sm text-gray-500">No tickets queued yet.</p>
      ) : (
        <ul className="space-y-2 mb-3">
          {tickets.map(t => (
            <li key={t.id} className="flex items-start justify-between gap-2">
              <span className="text-sm leading-snug">{t.title}</span>
              <button onClick={() => onRemove(t.id)} className="text-xs text-red-600 hover:underline">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={onClear}
        disabled={tickets.length === 0}
        className={`w-full rounded-xl border px-3 py-2 text-sm ${
          tickets.length === 0 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
      >
        Clear Queue
      </button>
    </div>
  );
}
