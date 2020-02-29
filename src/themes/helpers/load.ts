export function Load(key: string, fallback?: any) {
  const data = localStorage.getItem(key)!;
  return data?.includes("{") ? JSON.parse(data) : data || fallback;
}
