import SpendingCharts from "./SpendingCharts";

const FinancialInsights = ({ name = "סטודנט/ית", balance = -420, avgMonthlySpend = 3200 }) => {
    const availableCash = balance > 0 ? balance : 0;
    const potentialSaving = Math.max(0, Math.floor((avgMonthlySpend * 0.1) / 10) * 10);

    const tip =
        balance < 0
            ? "אפילו 20 ש\"ח בשבוע זה התחלה מעולה! נתחיל בצעד קטן כדי לצאת מהמינוס."
            : "את/ה שומר/ת על יציבות – זו הזדמנות מצוינת להתחיל לחסוך לעתיד.";

    const categories = [
        { name: "מזון", amount: 1100 },
        { name: "נסיעות", amount: 600 },
        { name: "בילויים", amount: 900 },
        { name: "בריאות", amount: 600 },
    ];

    const total = categories.reduce((sum, c) => sum + c.amount, 0);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-5">
            <h2 className="text-xl font-bold">המלצות פיננסיות עבורך</h2>

            <div className="bg-gray-50 p-4 rounded border space-y-1 leading-tight">
                <p className="text-sm text-gray-600">יתרת חשבון נוכחית</p>
                <p className="text-2xl font-semibold text-green-600 leading-tight">
                    {availableCash > 0 ? (
                        `₪${availableCash}`
                    ) : (
                        <>
                            יש פוטנציאל לשיפור 💪<br />
                            <span className="text-base text-gray-700 font-normal">
                בקרב סטודנטים בגילך שמשלמים שכר דירה, ממוצע ההוצאות על מזון ובילויים נמוך בכ־15%.<br />
                לפי הנתונים שלך, ההוצאות על וולט ומסעדות גבוהות מהמקובל — צמצום קל שם יכול להחזיר אותך לאיזון.
              </span>
                        </>
                    )}
                </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border space-y-1 leading-tight">
                <p className="text-sm text-gray-600">אפשר להתחיל לחסוך</p>
                <p className="text-lg font-medium text-blue-600">
                    ₪{potentialSaving} החודש – זה סכום שניתן להשיג רק בצמצום קטן של הוצאות יומיומיות.
                </p>
            </div>

            <div className="bg-gray-50 p-4 rounded border space-y-1 leading-tight">
                <p className="text-sm text-gray-600">מה כדאי לעשות עכשיו?</p>
                <p className="text-base text-gray-800">{tip}</p>
            </div>

            {/* הוזז למעלה */}
            <div className="bg-gray-50 p-4 rounded border space-y-3 leading-tight">
                <p className="text-sm text-gray-600 mb-1">תובנות מהשטח</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-800 text-sm">
                    <li>
                        רוב הסטודנטים בגילך שחיים בשכירות מצליחים לחסוך לפחות 100 ש"ח בחודש רק על צמצום הזמנות וולט.
                    </li>
                    <li>
                        3 מתוך 4 משתמשים עם פרופיל דומה התחילו לחסוך בעזרת תזכורת שבועית אוטומטית להפקדה לחיסכון.
                    </li>
                    <li>
                        סטודנטים שנרשמו למנוי קבוע בקפיטריה דיווחו על ירידה של כ־20% בהוצאות החודשיות על מזון.
                    </li>
                </ul>
            </div>

            <SpendingCharts />

            <div className="bg-gray-50 p-4 rounded border leading-tight">
                <p className="text-sm text-gray-600 mb-2">פירוט לפי קטגוריות</p>
                <ul className="space-y-1">
                    {categories.map((cat) => (
                        <li key={cat.name} className="flex justify-between text-sm text-gray-800">
                            <span>{cat.name}</span>
                            <span>₪{cat.amount}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-2 text-sm font-semibold text-gray-700 border-t pt-2 flex justify-between">
                    <span>סה״כ</span>
                    <span>₪{total}</span>
                </div>
            </div>

            <div className="bg-gray-50 p-4 rounded border leading-tight">
                <p className="text-sm text-gray-600 mb-1">תובנה חכמה</p>
                <p className="text-base text-gray-800">
                    הוצאת מעל ₪1,000 על מזון – אולי שווה לבדוק מנוי בקפיטריה או בישול ביתי. לפעמים שינוי קטן = חיסכון גדול.
                </p>
            </div>

            <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                להפעיל חיסכון חכם
            </button>
        </div>
    );
};

export default FinancialInsights;
