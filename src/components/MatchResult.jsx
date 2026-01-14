export default function MatchResult({ score }) {
  return (
    <div className="mt-4 p-4 rounded-xl bg-gray-50 border text-center">
      <p className="text-sm text-gray-600">Match Confidence</p>
      <p className="text-2xl font-semibold text-black">{score}%</p>
    </div>
  );
}
