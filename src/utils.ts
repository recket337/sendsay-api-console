export function validateRequest(request) {
  try {
    JSON.parse(request);
    if (!isNaN(parseInt(request))) {
      throw new Error("Только число");
    }
  } catch (e) {
    return false;
  }
  return true;
}
