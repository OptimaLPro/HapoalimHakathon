import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data = [
    { name: "מזון", value: 1100 },
    { name: "נסיעות", value: 600 },
    { name: "בילויים", value: 900 },
    { name: "בריאות", value: 600 },
];


const COLORS = ["#b91c1c", "#ef4444", "#fca5a5", "#e5e7eb"];

const renderCustomizedLabel = ({
                                   cx, cy, midAngle, outerRadius, name, value
                               }) => {
    const RADIAN = Math.PI / 180;

    // מרחק בסיס מוגדל
    const baseRadius = outerRadius + 60; // ⬅️ היה 45, עכשיו 60
    const angleFromTop = Math.abs(Math.sin(midAngle * RADIAN));
    const adjustedRadius = baseRadius - angleFromTop * 10;

    const x = cx + adjustedRadius * Math.cos(-midAngle * RADIAN);
    const y = cy + adjustedRadius * Math.sin(-midAngle * RADIAN);

    // הזחה אופקית מוגדלת
    const dx = x > cx ? 16 : -16; // ⬅️ היה 10, עכשיו 16

    return (
        <text
            x={x + dx}
            y={y}
            fill="#111"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
            fontSize="13"
        >
            {`${name} – ₪${value}`}
        </text>
    );
};

const SpendingCharts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pie Chart */}
            <div className="bg-gray-50 p-4 rounded border shadow-sm">
                <p className="text-sm text-gray-700 font-medium mb-2">התפלגות הוצאות</p>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={75}
                            label={renderCustomizedLabel} // 👈 שימוש בפונקציה כאן
                            labelLine={false}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-50 p-4 rounded border shadow-sm">
                <p className="text-sm text-gray-700 font-medium mb-2">הוצאות לפי קטגוריה</p>
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis orientation="left" tick={{ dx: -30 }} />
                        <Tooltip />

                        <Bar dataKey="value" fill="#d13b3b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SpendingCharts;
