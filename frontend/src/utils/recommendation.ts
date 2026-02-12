export function recommendOrder(
  profit: number,
  prepTime: number
): "ACCEPT" | "DELAY" | "REJECT" {
  if (profit > 200 && prepTime < 25) return "ACCEPT";
  if (profit > 100) return "DELAY";
  return "REJECT";
}
