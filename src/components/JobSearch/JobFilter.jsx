const filters = ["הכול", "סטודנטים", "התמחות", "ללא ניסיון"];

const JobFilter = ({ selected, onChange }) => {
    return (
        <div className="flex gap-2 mb-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onChange(filter)}
                    className={`px-4 py-2 rounded-full border transition ${
                        selected === filter
                            ? "bg-red-600 text-white border-red-600"
                            : "bg-white text-gray-800 border-gray-300"
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default JobFilter;
