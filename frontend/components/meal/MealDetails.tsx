import type { MealProfile } from '@/lib/gifts-for-foodies-data';

type Props = {
  meal: MealProfile;
};

export function MealDetails({ meal }: Props) {
  const items: { label: string; value: string }[] = [];

  if (meal.minGuests != null) {
    items.push({ label: 'Minimum Guests', value: String(meal.minGuests) });
  }
  if (meal.maxGuests != null) {
    items.push({ label: 'Maximum Guests', value: String(meal.maxGuests) });
  }
  if (meal.durationHours != null) {
    items.push({ label: 'Duration', value: `${meal.durationHours} hours` });
  }
  if (meal.location) {
    items.push({ label: 'Location', value: meal.location });
  }

  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-cozy-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-cozy-navy">Details</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex justify-between gap-4">
            <span className="font-medium text-cozy-navy">{item.label}</span>
            <span className="text-cozy-gray-600">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
