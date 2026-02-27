import type { MealProfile } from '@/lib/gifts-for-foodies-data';

type Props = {
  meal: MealProfile;
};

export function MealMenu({ meal }: Props) {
  const menu = meal.sampleMenu;
  if (!menu || menu.length === 0) return null;

  return (
    <div className="rounded-xl border border-cozy-gray-200 bg-white p-6">
      <h3 className="mb-4 text-lg font-semibold text-cozy-navy">Menu</h3>
      <ul className="space-y-2">
        {menu.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-cozy-gray-700">
            <span className="text-cozy-orange">•</span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-cozy-gray-600">
        Most dietary restrictions can be accommodated if noted prior to the event.
      </p>
    </div>
  );
}
