// logic.js
import { furnitures } from "./data.js";

// --------------------------------------
// 優先順位計算（ダミー）
// --------------------------------------
export function calculatePriority(selectedCharacters, ownedFurniture, craftLimits, cafeSize) {

  // 本格ロジックは後で実装
  // 今は rarity が高い順に並べるだけのダミー
  const results = furnitures
    .map(f => ({
      name: f.name,
      rarity: f.rarity,
      score: f.rarity * 50, // ダミー計算
    }))
    .sort((a, b) => b.score - a.score);

  return results;
}
