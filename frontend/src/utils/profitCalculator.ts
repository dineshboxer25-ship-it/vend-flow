export function calculateProfit(
  orderValue: number,
  platformFee = 0.1,
  deliveryCost = 40,
  foodCostRatio = 0.45
) {
  const platformCut = orderValue * platformFee;
  const foodCost = orderValue * foodCostRatio;

  const profit = orderValue - (platformCut + foodCost + deliveryCost);

  return Math.round(profit);
}
