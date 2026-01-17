export const Checkbox = ({ label, ...props }: any) => (
  <div className="flex items-start mb-4">
    <input type="checkbox" className="mt-1 mr-2" {...props} />
    <label className="text-sm text-gray-700">{label}</label>
  </div>
);