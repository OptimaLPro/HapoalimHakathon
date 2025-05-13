import { useState } from "react";
import JobSearchBar from "../components/JobSearch/JobSearchBar";
import JobFilter from "../components/JobSearch/JobFilter";
import JobList from "../components/JobSearch/JobList";

const JobSearchPage = () => {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("הכול");

    return (
        <div className="min-h-screen p-6 bg-gray-50 rtl">
            <h1 className="text-2xl font-bold mb-4">אנחנו מחפשים שותפים למסע, בואו נעבוד ביחד</h1>
            <JobSearchBar query={query} onChange={setQuery} />
            <JobFilter selected={filter} onChange={setFilter} />
            <JobList query={query} filter={filter} />
        </div>
    );
};

export default JobSearchPage;
