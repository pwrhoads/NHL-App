export function CheckSearchParams(
  categories: string[] | undefined,
  limit: number | undefined
) {
  const params = new URLSearchParams();
  if (categories && categories.length > 0) {
    params.append("categories", categories.join(","));
  }

  if (limit != undefined) {
    params.append("limit", limit.toString());
  }

  return params;
}