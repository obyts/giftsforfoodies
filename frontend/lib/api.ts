const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function fetchMeals(params?: Record<string, string>) {
  const searchParams = params ? new URLSearchParams(params).toString() : '';
  const url = `${API_URL}/meals${searchParams ? `?${searchParams}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch meals');
  return res.json();
}
