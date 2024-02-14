export function Button({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-1"
    >
      {label}
    </button>
  );
}

export function RedButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full mt-1"
    >
      {label}
    </button>
  );
}
