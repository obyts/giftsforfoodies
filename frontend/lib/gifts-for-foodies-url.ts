export type FilterType = 'f_occasion' | 'f_mealtag' | 'f_recipient';

export function buildGiftsForFoodiesUrl(
  type: FilterType,
  slug: string,
  currentParams?: { f_occasion?: string; f_mealtag?: string; f_recipient?: string }
): string {
  const params = new URLSearchParams();
  params.set(type, slug);
  params.set('filter', '1');
  return `/gifts-for-foodies?${params.toString()}`;
}

export function getActiveFilter(params: { f_occasion?: string; f_mealtag?: string; f_recipient?: string }): {
  type: FilterType;
  slug: string;
} | null {
  if (params.f_occasion) return { type: 'f_occasion', slug: params.f_occasion };
  if (params.f_mealtag) return { type: 'f_mealtag', slug: params.f_mealtag };
  if (params.f_recipient) return { type: 'f_recipient', slug: params.f_recipient };
  return null;
}
