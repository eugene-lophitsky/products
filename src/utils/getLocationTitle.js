export default function getLocationTitle(location) {
  switch (location) {
    case "/cakes":
      return "Пирожные";
    case "/coffee_and_tea":
      return "Кофе и чай";
    case "/street_food":
      return "Street food";
    default:
      return "Пирожные";
  }
}
