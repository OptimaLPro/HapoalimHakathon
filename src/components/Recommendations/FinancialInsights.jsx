import { motion } from "framer-motion";
import SpendingCharts from "./SpendingCharts";

const FinancialInsights = ({ balance = -420, avgMonthlySpend = 3200 }) => {
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

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const colorClasses = {
        red: {
            bg: "from-red-50",
            border: "border-red-500",
            text: "text-red-600",
        },
        green: {
            bg: "from-green-50",
            border: "border-green-500",
            text: "text-green-600",
        },
        blue: {
            bg: "from-blue-50",
            border: "border-blue-500",
            text: "text-blue-600",
        },
        purple: {
            bg: "from-purple-50",
            border: "border-purple-500",
            text: "text-purple-600",
        },
    };

    const insights = [
        {
            icon: "📊",
            color: "red",
            title: "יש פוטנציאל לשיפור 💪",
            text: "בקרב סטודנטים בגילך שמשלמים שכר דירה, ממוצע ההוצאות על מזון ובילויים נמוך בכ־15%. לפי הנתונים שלך, ההוצאות על וולט ומסעדות גבוהות מהמקובל — צמצום קל שם יכול להחזיר אותך לאיזון."
        },
        {
            icon: "💡",
            color: "green",
            title: "חיסכון חכם",
            text: `אם תצמצם רק 15 ש״ח בשבוע – תוכל לחסוך ₪${potentialSaving} החודש. קל.`
        },
        {
            icon: "📍",
            color: "blue",
            title: "מה כדאי לעשות עכשיו?",
            text: tip
        },
        {
            icon: "🔍",
            color: "purple",
            title: "תובנות מהשטח",
            text: (
                <>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>רוב הסטודנטים בגילך שחיים בשכירות מצליחים לחסוך לפחות 100 ש"ח בחודש רק על צמצום הזמנות וולט.</li>
                        <li>3 מתוך 4 משתמשים עם פרופיל דומה התחילו לחסוך בעזרת תזכורת שבועית אוטומטית להפקדה לחיסכון.</li>
                        <li>סטודנטים שנרשמו למנוי קבוע בקפיטריה דיווחו על ירידה של כ־20% בהוצאות החודשיות על מזון.</li>
                    </ul>
                    <button className="mt-2 text-sm text-purple-600 underline">הפעל תזכורת חכמה</button>
                </>
            )
        }
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md space-y-5">
            <h2 className="text-xl font-bold">המלצות פיננסיות עבורך</h2>

            {insights.map((item, i) => {
                const style = colorClasses[item.color];
                return (
                    <motion.div
                        key={item.title}
                        custom={i}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className={`bg-gradient-to-r ${style.bg} to-white border-l-4 ${style.border} p-4 rounded shadow flex items-start gap-3`}
                    >
                        <span className={`${style.text} text-xl`}>{item.icon}</span>
                        <div className="text-sm text-gray-800 leading-tight">
                            <p className="font-semibold">{item.title}</p>
                            <p className="mt-1">{item.text}</p>
                        </div>
                    </motion.div>
                );
            })}

            <SpendingCharts />

            <motion.div
                custom={4}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="bg-gray-50 p-4 rounded border leading-tight"
            >
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
            </motion.div>

            <motion.div
                custom={5}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="bg-gray-50 p-4 rounded border leading-tight"
            >
                <p className="text-sm text-gray-600 mb-1">תובנה חכמה</p>
                <p className="text-base text-gray-800">
                    הוצאת מעל ₪1,000 על מזון – אולי שווה לבדוק מנוי בקפיטריה או בישול ביתי. לפעמים שינוי קטן = חיסכון גדול.
                </p>
            </motion.div>

            <motion.button
                custom={6}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
                להפעיל חיסכון חכם
            </motion.button>
        </div>
    );
};

export default FinancialInsights;
