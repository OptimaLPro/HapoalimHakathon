import { jobs } from "@/data/jobs.js";

const JobList = ({ query, filter }) => {
    const normalizedQuery = query.toLowerCase();

    const filteredJobs = jobs.filter((job) => {
        const matchQuery =
            job.title.toLowerCase().includes(normalizedQuery) ||
            job.description.toLowerCase().includes(normalizedQuery) ||
            job.location.toLowerCase().includes(normalizedQuery);

        const matchFilter = filter === "הכול" || job.type === filter;

        return matchQuery && matchFilter;
    });

    return (
        <div className="space-y-4">
            {filteredJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4 shadow bg-white">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company} · {job.location}</p>
                    <p className="text-sm text-gray-700 mt-2">{job.description}</p>
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-gray-100 rounded-full">
            {job.type}
          </span>
                </div>
            ))}
            {filteredJobs.length === 0 && (
                <p className="text-center text-gray-500 mt-8">לא נמצאו משרות מתאימות.</p>
            )}
        </div>
    );
};

export default JobList;
