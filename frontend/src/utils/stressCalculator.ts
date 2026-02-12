export function calculateStress(
  activeOrders: number,
  capacity: number
): number {
  if (capacity === 0) return 0;
  return Math.min(100, (activeOrders / capacity) * 100);
}
