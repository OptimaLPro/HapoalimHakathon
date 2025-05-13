import FinancialInsights from "../components/Recommendations/FinancialInsights";

const FinancialRecommendationsPage = () => {
    return (
        <div className="min-h-screen p-6 bg-gray-100 rtl">
            <h1 className="text-2xl font-bold mb-4">מתנהלים חכם וצוברים נקודות</h1>
            <FinancialInsights name="עדי" balance={-350} avgMonthlySpend={2800} />
        </div>
    );
};

export default FinancialRecommendationsPage;
