const JobSearchBar = ({ query, onChange }) => {
    return (
        <div className="w-full mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => onChange(e.target.value)}
                placeholder="חפש לפי תפקיד, תחום או מיקום..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
        </div>
    );
};

export default JobSearchBar;
