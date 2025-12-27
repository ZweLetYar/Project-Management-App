export default function ProgressBar({
  value,
  color,
}: {
  value: number;
  color?: string;
}) {
  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between mb-1 text-sm font-medium ">
        <span className="ml-auto">{value}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${
            color || "orange"
          }-300 rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
