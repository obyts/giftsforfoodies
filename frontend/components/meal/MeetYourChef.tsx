import type { MealProfile } from '@/lib/gifts-for-foodies-data';

const DEFAULT_CHEF_IMAGE = 'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,w_80,h_80,f_auto,q_auto/v1578658687/Use_for_Los_angeles_d57pvs.jpg';

type Props = {
  meal: MealProfile;
};

export function MeetYourChef({ meal }: Props) {
  const chefName = meal.chefName ?? 'Your Chef';
  const chefImage = meal.chefImage ?? DEFAULT_CHEF_IMAGE;

  return (
    <div className="rounded-xl border border-cozy-gray-200 bg-white p-6">
      <h3 className="mb-4 text-center text-lg font-semibold text-cozy-navy">
        Meet your chef
      </h3>
      <div className="flex items-center gap-4">
        <img
          src={chefImage}
          alt={chefName}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-cozy-navy">{chefName}</p>
          <p className="flex items-center gap-1.5 text-sm text-cozy-gray-600">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white text-xs">✓</span>
            Verified Chef
          </p>
          <p className="mt-1 text-xs text-cozy-gray-600">Food safety certified</p>
        </div>
      </div>
    </div>
  );
}
