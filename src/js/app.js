export default function sortingCharacters(data) {
  function dataComparison(a, b) {
    if (a.health > b.health) return -1;
    if (a.health === b.health) return 0;
    return 1;
  }

  return data.sort(dataComparison);
}
