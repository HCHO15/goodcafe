// data.js
// --------------------------------------
// キャラ情報
// --------------------------------------
const characters = [
  { id: 1, name: "アイリ" },
  { id: 2, name: "アイリ（バンド）" },
  { id: 3, name: "アオバ" },
  { id: 4, name: "アカネ（制服）" },
  { id: 5, name: "アカネ（バニーガール）" },
  { id: 6, name: "アカリ（正月）" },
  { id: 7, name: "アコ" },
  { id: 8, name: "アコ（ドレス）" },
  { id: 9, name: "アズサ（水着）" },
  { id: 10, name: "アスナ（バニーガール）" },
  { id: 11, name: "アスナ（制服）" },
  { id: 12, name: "アツコ" },
  { id: 13, name: "アツコ（水着）" },
  { id: 14, name: "アヤネ" },
  { id: 15, name: "アヤネ（水着）" },
  { id: 16, name: "アリス" },
  { id: 17, name: "アリス（メイド）" },
  { id: 18, name: "アリス（臨戦）" },
  { id: 19, name: "アル（正月）" },
  { id: 20, name: "アル（ドレス）" },
  { id: 21, name: "イズナ" },
  { id: 22, name: "イズナ（水着）" },
  { id: 23, name: "イズミ（正月）" },
  { id: 24, name: "イチカ" },
  { id: 25, name: "イチカ（水着）" },
  { id: 26, name: "イブキ" },
  { id: 27, name: "イロハ" },
  { id: 28, name: "ウイ" },
  { id: 29, name: "ウイ（水着）" },
  { id: 30, name: "ウタハ（応援団）" },
  { id: 31, name: "ウミカ" },
  { id: 32, name: "エイミ（水着）" },
  { id: 33, name: "エイミ（臨戦）" },
  { id: 34, name: "エリ" },
  { id: 35, name: "カエデ" },
  { id: 36, name: "カズサ" },
  { id: 37, name: "カズサ（バンド）" },
  { id: 38, name: "カスミ" },
  { id: 39, name: "カノエ" },
  { id: 40, name: "カホ" },
  { id: 41, name: "カヨコ（ドレス）" },
  { id: 42, name: "カヨコ（正月）" },
  { id: 43, name: "カリン（バニーガール）" },
  { id: 44, name: "カリン（制服）" },
  { id: 45, name: "カンナ" },
  { id: 46, name: "カンナ（水着）" },
  { id: 47, name: "キキョウ" },
  { id: 48, name: "キキョウ（水着）" },
  { id: 49, name: "キサキ" },
  { id: 50, name: "キララ" },
  { id: 51, name: "キリノ（水着）" },
  { id: 52, name: "ケイ" },
  { id: 53, name: "ココナ" },
  { id: 54, name: "コタマ（キャンプ）" },
  { id: 55, name: "コトリ（応援団）" },
  { id: 56, name: "コノカ" },
  { id: 57, name: "コハル（水着）" },
  { id: 58, name: "コユキ" },
  { id: 59, name: "コユキ（パジャマ）" },
  { id: 60, name: "サオリ" },
  { id: 61, name: "サオリ（ドレス）" },
  { id: 62, name: "サオリ（水着）" },
  { id: 63, name: "サキ" },
  { id: 64, name: "サキ（水着）" },
  { id: 65, name: "サクラコ" },
  { id: 66, name: "サクラコ（アイドル）" },
  { id: 67, name: "サツキ" },
  { id: 68, name: "シグレ" },
  { id: 69, name: "シグレ（温泉）" },
  { id: 70, name: "シズコ" },
  { id: 71, name: "シズコ（水着）" },
  { id: 72, name: "ジュリ（アルバイト）" },
  { id: 73, name: "ジュンコ" },
  { id: 74, name: "ジュンコ（正月）" },
  { id: 75, name: "シロコ" },
  { id: 76, name: "シロコ（ライディング）" },
  { id: 77, name: "シロコ（水着）" },
  { id: 78, name: "シロコ＊テラー" },
  { id: 79, name: "スズミ（マジカル）" },
  { id: 80, name: "スバル" },
  { id: 81, name: "スミレ（アルバイト）" },
  { id: 82, name: "セイア" },
  { id: 83, name: "セイア（水着）" },
  { id: 84, name: "セナ" },
  { id: 85, name: "セナ（私服）" },
  { id: 86, name: "セリカ" },
  { id: 87, name: "セリカ（正月）" },
  { id: 88, name: "セリカ（水着）" },
  { id: 89, name: "セリナ（クリスマス）" },
  { id: 90, name: "タカネ" },
  { id: 91, name: "チアキ" },
  { id: 92, name: "チェリノ（温泉）" },
  { id: 93, name: "チセ（水着）" },
  { id: 94, name: "チナツ（温泉）" },
  { id: 95, name: "チヒロ" },
  { id: 96, name: "ツクヨ" },
  { id: 97, name: "ツクヨ（ドレス）" },
  { id: 98, name: "ツバキ（ガイド）" },
  { id: 99, name: "ツルギ（水着）" },
  { id: 100, name: "トキ" },
  { id: 101, name: "トキ（バニーガール）" },
  { id: 102, name: "トキ（臨戦）" },
  { id: 103, name: "トモエ" },
  { id: 104, name: "トモエ（チーパオ）" },
  { id: 105, name: "ナギサ" },
  { id: 106, name: "ナギサ（水着）" },
  { id: 107, name: "ナグサ" },
  { id: 108, name: "ナツ" },
  { id: 109, name: "ナツ（バンド）" },
  { id: 110, name: "ニヤ" },
  { id: 111, name: "ネル" },
  { id: 112, name: "ネル（バニーガール）" },
  { id: 113, name: "ネル（制服）" },
  { id: 114, name: "ノア" },
  { id: 115, name: "ノア（パジャマ）" },
  { id: 116, name: "ノゾミ" },
  { id: 117, name: "ノドカ（温泉）" },
  { id: 118, name: "ノノミ" },
  { id: 119, name: "ノノミ（水着）" },
  { id: 120, name: "ハスミ（体操服）" },
  { id: 121, name: "ハスミ（水着）" },
  { id: 122, name: "ハナエ（クリスマス）" },
  { id: 123, name: "ハナコ（水着）" },
  { id: 124, name: "ハルカ" },
  { id: 125, name: "ハルカ（正月）" },
  { id: 126, name: "ハルナ（正月）" },
  { id: 127, name: "ハルナ（体操服）" },
  { id: 128, name: "ハレ（キャンプ）" },
  { id: 129, name: "ヒカリ" },
  { id: 130, name: "ヒナ（ドレス）" },
  { id: 131, name: "ヒナ（水着）" },
  { id: 132, name: "ヒナタ" },
  { id: 133, name: "ヒナタ（水着）" },
  { id: 134, name: "ヒビキ（応援団）" },
  { id: 135, name: "ヒマリ" },
  { id: 136, name: "ヒマリ（臨戦）" },
  { id: 137, name: "ヒヨリ" },
  { id: 138, name: "ヒヨリ（水着）" },
  { id: 139, name: "フィーナ" },
  { id: 140, name: "フィーナ（ガイド）" },
  { id: 141, name: "フウカ（正月）" },
  { id: 142, name: "フブキ" },
  { id: 143, name: "フブキ（水着）" },
  { id: 144, name: "フユ" },
  { id: 145, name: "ホシノ" },
  { id: 146, name: "ホシノ（水着）" },
  { id: 147, name: "ホシノ（臨戦）" },
  { id: 148, name: "マキ（キャンプ）" },
  { id: 149, name: "マコト" },
  { id: 150, name: "マシロ（水着）" },
  { id: 151, name: "マリー" },
  { id: 152, name: "マリー（アイドル）" },
  { id: 153, name: "マリー（体操服）" },
  { id: 154, name: "マリナ" },
  { id: 155, name: "マリナ（チーパオ）" },
  { id: 156, name: "ミカ" },
  { id: 157, name: "ミカ（水着）" },
  { id: 158, name: "ミサキ" },
  { id: 159, name: "ミサキ（水着）" },
  { id: 160, name: "ミチル" },
  { id: 161, name: "ミチル（ドレス）" },
  { id: 162, name: "ミドリ" },
  { id: 163, name: "ミドリ（メイド）" },
  { id: 164, name: "ミナ" },
  { id: 165, name: "ミネ" },
  { id: 166, name: "ミネ（アイドル）" },
  { id: 167, name: "ミノリ" },
  { id: 168, name: "ミモリ" },
  { id: 169, name: "ミモリ（水着）" },
  { id: 170, name: "ミヤコ" },
  { id: 171, name: "ミヤコ（水着）" },
  { id: 172, name: "ミユ" },
  { id: 173, name: "ミユ（水着）" },
  { id: 174, name: "ミヨ" },
  { id: 175, name: "ムツキ（正月）" },
  { id: 176, name: "メグ" },
  { id: 177, name: "メル" },
  { id: 178, name: "モエ" },
  { id: 179, name: "モエ（水着）" },
  { id: 180, name: "モミジ" },
  { id: 181, name: "モモイ" },
  { id: 182, name: "モモイ（メイド）" },
  { id: 183, name: "ヤクモ" },
  { id: 184, name: "ユウカ（体操服）" },
  { id: 185, name: "ユウカ（パジャマ）" },
  { id: 186, name: "ユカリ" },
  { id: 187, name: "ユカリ（水着）" },
  { id: 188, name: "ユズ" },
  { id: 189, name: "ユズ（メイド）" },
  { id: 190, name: "ユズ（臨戦）" },
  { id: 191, name: "ヨシミ（バンド）" },
  { id: 192, name: "ラブ" },
  { id: 193, name: "リオ" },
  { id: 194, name: "リオ（臨戦）" },
  { id: 195, name: "リツ" },
  { id: 196, name: "ルミ" },
  { id: 197, name: "レイ" },
  { id: 198, name: "レイサ" },
  { id: 199, name: "レイサ（マジカル）" },
  { id: 200, name: "レイジョ" },
  { id: 201, name: "レナ" },
  { id: 202, name: "レンゲ" },
  { id: 203, name: "レンゲ（水着）" },
  { id: 204, name: "ワカモ" },
  { id: 205, name: "ワカモ（水着）" },
  { id: 206, name: "御坂美琴" },
  { id: 207, name: "佐天涙子" },
  { id: 208, name: "食蜂操祈" },
];

// --------------------------------------
// 家具情報
// --------------------------------------
const furnitures = [
  { id: 1,  name: "ハロウィーンのパンプキンバーカウンター", rarity: 2 },
  { id: 2,  name: "ベーシック・エレクトリックキーボード", rarity: 3 },
  { id: 3,  name: "ハイランダー自動改札機", rarity: 3 },
  { id: 4,  name: "ミレニアム製電子ゲート", rarity: 3 },
  { id: 5,  name: "カウンターチェア・ゴールドブラック", rarity: 1 },
  { id: 6,  name: "臼と杵", rarity: 3 },
  { id: 7,  name: "カラーのシングルチェア", rarity: 1 },
  { id: 8,  name: "クラシックソファテーブルセット", rarity: 3 },
  { id: 9,  name: "天蓋付きリゾートソファ", rarity: 3 },
  { id: 10, name: "カウンターチェア・シルバーネオンブルー", rarity: 1 },
  { id: 11, name: "2人用ミレニアムデスク", rarity: 3 },
  { id: 12, name: "ロイヤルダイヤチェア", rarity: 3 },
  { id: 13, name: "サンシャイン・フラワー噴水", rarity: 2 },
  { id: 14, name: "アビドス教室のメガネが置かれた机", rarity: 2 },
  { id: 15, name: "海へのお出かけセット", rarity: 1 },
  { id: 16, name: "格闘ゲーム機", rarity: 3 },
  { id: 17, name: "ゲーム開発部のソファー", rarity: 2 },
  { id: 18, name: "水色のシングルソファ", rarity: 3 },
  { id: 19, name: "輸送船の窓", rarity: 3 },
  { id: 20, name: "メンテナンスステーション", rarity: 3 },
  { id: 21, name: "書初め用のテーブル", rarity: 2 },
  { id: 22, name: "最高級役員用デスク", rarity: 3 },
  { id: 23, name: "伝統的な格子の掃き出し窓", rarity: 3 },
  { id: 24, name: "チル&クールアイスクリーム冷蔵庫", rarity: 3 },
  { id: 25, name: "おせち料理セットテーブル", rarity: 3 },
  { id: 26, name: "大運動会の審判席", rarity: 2 },
  { id: 27, name: "スイカ割りセット", rarity: 3 },
  { id: 28, name: "イブキのお勉強セット", rarity: 3 },
  { id: 29, name: "スチール製の雑誌スタンド", rarity: 1 },
  { id: 30, name: "アンティークな収納付きウッドデスク", rarity: 3 },
  { id: 31, name: "クラシックパターンスーツケース", rarity: 3 },
  { id: 32, name: "大運動会の応援スタンド", rarity: 3 },
  { id: 33, name: "お祭りお面陳列台", rarity: 3 },
  { id: 34, name: "アイスプール", rarity: 3 },
  { id: 35, name: "万能テーブル", rarity: 3 },
  { id: 36, name: "魔法の絨毯＆サーキュレーター", rarity: 3 },
  { id: 37, name: "温泉カピバラのガチャガチャ", rarity: 1 },
  { id: 38, name: "バレンタインの収納セット", rarity: 1 },
  { id: 39, name: "原木のテラステーブル", rarity: 1 },
  { id: 40, name: "怪しげな大釜", rarity: 3 },
  { id: 41, name: "百鬼夜行グッズの飾り棚", rarity: 3 },
  { id: 42, name: "バイオレットパーティーテーブルセット", rarity: 3 },
  { id: 43, name: "お正月の座布団", rarity: 1 },
  { id: 44, name: "カウンターチェア・ダークバイオレット", rarity: 1 },
  { id: 45, name: "取調室のテーブル", rarity: 3 },
  { id: 46, name: "水難救命ボックス", rarity: 3 },
  { id: 47, name: "リラックスチェア", rarity: 3 },
  { id: 48, name: "どこでもばしゃばしゃプール", rarity: 3 },
  { id: 49, name: "玄龍門の玉座", rarity: 3 },
  { id: 50, name: "セルフィーブース", rarity: 3 },
  { id: 51, name: "ライフセーバー用椅子", rarity: 3 },
  { id: 52, name: "過ぎ去りし思い出", rarity: 3 },
  { id: 53, name: "白いコーヒーテーブル", rarity: 1 },
  { id: 54, name: "アウトドアパーテーション", rarity: 3 },
  { id: 55, name: "大運動会のマット・ブルー", rarity: 1 },
  { id: 56, name: "散らかったデスク", rarity: 3 },
  { id: 57, name: "アイスクリームテーブル", rarity: 3 },
  { id: 58, name: "ゼリーズのクレーンゲーム", rarity: 2 },
  { id: 59, name: "真夜中のプレイゾーン", rarity: 3 },
  { id: 60, name: "ガラスの窓", rarity: 1 },
  { id: 61, name: "豪華な姿見", rarity: 3 },
  { id: 62, name: "DJライブステージ", rarity: 3 },
  { id: 63, name: "ミリタリーチェア・イエロー", rarity: 1 },
  { id: 64, name: "スキューバダイビングギア保管ラック", rarity: 3 },
  { id: 65, name: "大聖堂の長椅子", rarity: 3 },
  { id: 66, name: "ライブステージ", rarity: 3 },
  { id: 67, name: "万魔殿のデスク", rarity: 3 },
  { id: 68, name: "爽やかなフルーツバー", rarity: 1 },
  { id: 69, name: "檜の浴槽", rarity: 3 },
  { id: 70, name: "百夜堂の出張屋台", rarity: 3 },
  { id: 71, name: "甘くて涼しいかき氷バー", rarity: 3 },
  { id: 72, name: "パンケーキ・ティーテーブル", rarity: 3 },
  { id: 73, name: "ハロウィーンのパンプキンデザートテーブル", rarity: 2 },
  { id: 74, name: "おせち料理のテーブル", rarity: 2 },
  { id: 75, name: "アビドス教室の覆面が置かれた机", rarity: 2 },
  { id: 76, name: "アビドス教室の自転車", rarity: 3 },
  { id: 77, name: "バタバタカジキの展示台", rarity: 3 },
  { id: 78, name: "アビドス自転車整備スタンド", rarity: 3 },
  { id: 79, name: "フリーボックス", rarity: 3 },
  { id: 80, name: "ジュークボックス", rarity: 3 },
  { id: 81, name: "アシストプルアップマシン", rarity: 3 },
  { id: 82, name: "ティーパーティーテーブル", rarity: 3 },
  { id: 83, name: "セイアのオープンカー", rarity: 3 },
  { id: 84, name: "原木の大型テーブル", rarity: 1 },
  { id: 85, name: "救急箱ホワイトテーブル", rarity: 3 },
  { id: 86, name: "アビドス教室のリボンと手袋が置かれた机", rarity: 2 },
  { id: 87, name: "お正月のこたつ", rarity: 3 },
  { id: 88, name: "バーベキューグリル", rarity: 3 },
  { id: 89, name: "軽快な譜面台", rarity: 3 },
  { id: 90, name: "販売用の机", rarity: 3 },
  { id: 91, name: "万魔殿の掲示板", rarity: 3 },
  { id: 92, name: "保温庫", rarity: 2 },
  { id: 93, name: "ビーチサイドのクーリング扇風機", rarity: 2 },
  { id: 94, name: "マッサージチェア", rarity: 2 },
  { id: 95, name: "カラーのマルチテレビ", rarity: 2 },
  { id: 96, name: "モンステラの白い植木鉢", rarity: 1 },
  { id: 97, name: "簡易更衣室", rarity: 3 },
  { id: 98, name: "デパートのデザイナーソファ", rarity: 1 },
  { id: 99, name: "カラフルな大型プール", rarity: 3 },
  { id: 100, name: "レースゲーム機", rarity: 3 },
  { id: 101, name: "カウンターチェア・ディープブルー", rarity: 1 },
  { id: 102, name: "ゲーム開発部のスペース", rarity: 3 },
  { id: 103, name: "波模様の座椅子", rarity: 1 },
  { id: 104, name: "演説用の机", rarity: 3 },
  { id: 105, name: "スイングチェア", rarity: 3 },
  { id: 106, name: "百花繚乱専用ガンスタンド", rarity: 1 },
  { id: 107, name: "バレンタインのティーテーブル", rarity: 3 },
  { id: 108, name: "リズムの導き手", rarity: 3 },
  { id: 109, name: "陰陽部室の座卓", rarity: 3 },
  { id: 110, name: "格闘ゲーム機（ネル）", rarity: 3 },
  { id: 111, name: "カウンターチェア・ゴールドレッドワイン", rarity: 1 },
  { id: 112, name: "ミレニアムタワーラウンジのエスカレーター", rarity: 3 },
  { id: 113, name: "大運動会の器具保管箱", rarity: 3 },
  { id: 114, name: "ダメにするソファ・白", rarity: 3 },
  { id: 115, name: "しゅっしゅっぽっぽ！ミニ列車セット", rarity: 3 },
  { id: 116, name: "抹茶セット付きの座卓", rarity: 2 },
  { id: 117, name: "アビドス教室のカーディガンが置かれた机", rarity: 2 },
  { id: 118, name: "折りたたみ式リゾートテーブル", rarity: 1 },
  { id: 119, name: "大運動会のパン食い競走用スタンド", rarity: 3 },
  { id: 120, name: "暖かなクリスマス暖炉", rarity: 3 },
  { id: 121, name: "サンシャインレモンツリー", rarity: 3 },
  { id: 122, name: "植物棚", rarity: 3 },
  { id: 123, name: "休憩用のベンチテーブル", rarity: 3 },
  { id: 124, name: "アウトドアコーヒーテーブル", rarity: 3 },
  { id: 125, name: "グランドピアノ", rarity: 3 },
  { id: 126, name: "浮き輪付きの小型プール", rarity: 3 },
  { id: 127, name: "白いシンプルソファー", rarity: 1 },
  { id: 128, name: "ミニスツールとサンベッド", rarity: 3 },
  { id: 129, name: "カラフルな自販機", rarity: 2 },
  { id: 130, name: "ミニキッチン", rarity: 3 },
  { id: 131, name: "原木の収納ケース", rarity: 1 },
  { id: 132, name: "ビーチフェスティバル用椅子", rarity: 3 },
  { id: 133, name: "灯油ストーブと切り餅", rarity: 1 },
  { id: 134, name: "テレビデオ", rarity: 3 },
  { id: 135, name: "お正月の衣桁", rarity: 2 },
  { id: 136, name: "カラーの長椅子", rarity: 1 },
  { id: 137, name: "ジャイアントプールフロート", rarity: 3 },
  { id: 138, name: "芸術家の初作品", rarity: 3 },
  { id: 139, name: "アビドス教室のクジラ人形が置かれた机", rarity: 2 },
  { id: 140, name: "ビーチサイドのふわふわ浮き輪", rarity: 3 },
  { id: 141, name: "エキスパート向け移動標的", rarity: 3 },
  { id: 142, name: "ミリタリーキャンプボードの設置物", rarity: 3 },
  { id: 143, name: "威厳の役員用デスク", rarity: 3 },
  { id: 144, name: "夏のパラソルセット", rarity: 2 },
  { id: 145, name: "カラーの二段植木鉢", rarity: 1 },
  { id: 146, name: "大運動会の休憩テント", rarity: 3 },
  { id: 147, name: "バレンタインのシングルチェア", rarity: 1 },
  { id: 148, name: "木人椿", rarity: 3 },
  { id: 149, name: "ビーチのブランコ", rarity: 3 },
  { id: 150, name: "ラグジュアリービーチベッド", rarity: 3 },
  { id: 151, name: "ビーチサンベッドとミニテーブル", rarity: 1 },
  { id: 152, name: "お正月の提灯", rarity: 1 },
  { id: 153, name: "ラーメンテーブル", rarity: 3 },
  { id: 154, name: "エアホッケーゲーム機", rarity: 3 },
  { id: 155, name: "ゲーム機用のウッドモニター", rarity: 3 },
  { id: 156, name: "カフェ用ベッド", rarity: 3 },
  { id: 157, name: "中華風の椅子", rarity: 3 },
  { id: 158, name: "豪奢な装飾のティーテーブル", rarity: 3 },
  { id: 159, name: "木工作業台", rarity: 3 },
  { id: 160, name: "お正月の和傘", rarity: 1 },
  { id: 161, name: "レモンパラソルホワイトテーブル", rarity: 2 },
  { id: 162, name: "ミリタリーチェア・ピンク", rarity: 1 },
  { id: 163, name: "ミリタリーチェア・グリーン", rarity: 1 },
  { id: 164, name: "新鮮！魚箱", rarity: 3 },
  { id: 165, name: "タイプライターデスク", rarity: 3 },
  { id: 166, name: "お正月のけん玉セットテーブル", rarity: 1 },
  { id: 167, name: "檜の浴槽（メグ）", rarity: 3 },
  { id: 168, name: "原稿用の机", rarity: 3 },
  { id: 169, name: "ミリタリーチェア・ブルー", rarity: 1 },
  { id: 170, name: "メッシュハンモック", rarity: 3 },
  { id: 171, name: "図書館のクラシックな椅子", rarity: 3 },
  { id: 172, name: "エアホッケーゲーム機（モモイ）", rarity: 3 },
  { id: 173, name: "ゲーム機用のウッドモニター（モモイ）", rarity: 3 },
  { id: 174, name: "カフェ用ベッド（モモイ）", rarity: 3 },
  { id: 175, name: "販売用の机（ヤクモ）", rarity: 3 },
  { id: 176, name: "大運動会のマット・スカイブルー", rarity: 1 },
  { id: 177, name: "ダメにするソファ・青", rarity: 3 },
  { id: 178, name: "折り紙テーブル", rarity: 3 },
  { id: 179, name: "サンシャイン・フラワープール", rarity: 3 },
  { id: 180, name: "ゲーム開発部のロッカー", rarity: 3 },
  { id: 181, name: "鉄製引き戸ロッカー", rarity: 3 },
  { id: 182, name: "自動出入口パターン1", rarity: 1 },
  { id: 183, name: "ピンク色のエレクトリックギター", rarity: 3 },
  { id: 184, name: "ヘルメット掃除キット", rarity: 3 },
  { id: 185, name: "原初のアバンギャルド", rarity: 3 },
  { id: 186, name: "彫刻の作業台", rarity: 3 },
  { id: 187, name: "中華風ホットショーケース", rarity: 3 },
  { id: 188, name: "ミレニアム製ピッチングマシン", rarity: 3 },
  { id: 189, name: "原木のテラステーブル（レイサ）", rarity: 1 },
  { id: 190, name: "フリーボックス（レイサ）", rarity: 3 },
  { id: 191, name: "木人椿（レイジョ）", rarity: 3 },
  { id: 192, name: "芸術家の頭の中", rarity: 3 },
  { id: 193, name: "古風な調理台", rarity: 3 },
  { id: 194, name: "夏色の水鉄砲スタンド", rarity: 3 },
  { id: 195, name: "バレンタインのクッキーソファー", rarity: 1 },
  { id: 196, name: "レトロな三段積みアンプ", rarity: 2 },
  { id: 197, name: "モモフレンズのグッズ台", rarity: 3 },
  { id: 198, name: "タロットテーブル", rarity: 3 },
  { id: 199, name: "フレッシュショップテーブル", rarity: 3 },
];

const furnitureCharacterMap = [
  { characterId: 1, furnitureId: 1 },   // アイリ → ハロウィーンのパンプキンバーカウンター
  { characterId: 2, furnitureId: 2 },   // アイリ（バンド） → ベーシック・エレクトリックキーボード
  { characterId: 3, furnitureId: 3 },   // アオバ → ハイランダー自動改札機
  { characterId: 4, furnitureId: 4 },   // アカネ（制服） → ミレニアム製電子ゲート
  { characterId: 5, furnitureId: 5 },   // アカネ（バニーガール） → カウンターチェア・ゴールドブラック
  { characterId: 6, furnitureId: 6 },   // アカリ（正月） → 臼と杵
  { characterId: 7, furnitureId: 7 },   // アコ → カラーのシングルチェア
  { characterId: 8, furnitureId: 8 },   // アコ（ドレス） → クラシックソファテーブルセット
  { characterId: 9, furnitureId: 9 },   // アズサ（水着） → 天蓋付きリゾートソファ
  { characterId: 10, furnitureId: 10 }, // アスナ（バニーガール） → カウンターチェア・シルバーネオンブルー
  { characterId: 11, furnitureId: 11 }, // アスナ（制服） → 2人用ミレニアムデスク
  { characterId: 12, furnitureId: 12 }, // アツコ → ロイヤルダイヤチェア
  { characterId: 13, furnitureId: 13 }, // アツコ（水着） → サンシャイン・フラワー噴水
  { characterId: 14, furnitureId: 14 }, // アヤネ → アビドス教室のメガネが置かれた机
  { characterId: 15, furnitureId: 15 }, // アヤネ（水着） → 海へのお出かけセット
  { characterId: 16, furnitureId: 16 }, // アリス → 格闘ゲーム機
  { characterId: 16, furnitureId: 17 }, // アリス → ゲーム開発部のソファー
  { characterId: 17, furnitureId: 18 }, // アリス（メイド） → 水色のシングルソファ
  { characterId: 18, furnitureId: 19 }, // アリス（臨戦） → 輸送船の窓
  { characterId: 18, furnitureId: 20 }, // アリス（臨戦） → メンテナンスステーション
  { characterId: 19, furnitureId: 21 }, // アル（正月） → 書初め用のテーブル
  { characterId: 20, furnitureId: 22 }, // アル（ドレス） → 最高級役員用デスク
  { characterId: 21, furnitureId: 23 }, // イズナ → 伝統的な格子の掃き出し窓
  { characterId: 22, furnitureId: 24 }, // イズナ（水着） → チル&クールアイスクリーム冷蔵庫
  { characterId: 23, furnitureId: 25 }, // イズミ（正月） → おせち料理セットテーブル
  { characterId: 24, furnitureId: 26 }, // イチカ → 大運動会の審判席
  { characterId: 25, furnitureId: 27 }, // イチカ（水着） → スイカ割りセット
  { characterId: 26, furnitureId: 28 }, // イブキ → イブキのお勉強セット
  { characterId: 27, furnitureId: 29 }, // イロハ → スチール製の雑誌スタンド
  { characterId: 28, furnitureId: 30 }, // ウイ → アンティークな収納付きウッドデスク
  { characterId: 29, furnitureId: 31 }, // ウイ（水着） → クラシックパターンスーツケース
  { characterId: 30, furnitureId: 32 }, // ウタハ（応援団） → 大運動会の応援スタンド
  { characterId: 31, furnitureId: 33 }, // ウミカ → お祭りお面陳列台
  { characterId: 32, furnitureId: 34 }, // エイミ（水着） → アイスプール
  { characterId: 33, furnitureId: 35 }, // エイミ（臨戦） → 万能テーブル
  { characterId: 34, furnitureId: 36 }, // エリ → 魔法の絨毯＆サーキュレーター
  { characterId: 35, furnitureId: 37 }, // カエデ → 温泉カピバラのガチャガチャ
  { characterId: 36, furnitureId: 38 }, // カズサ → バレンタインの収納セット
  { characterId: 37, furnitureId: 39 }, // カズサ（バンド） → 原木のテラステーブル
  { characterId: 38, furnitureId: 40 }, // カスミ → 怪しげな大釜
  { characterId: 39, furnitureId: 41 }, // カノエ → 百鬼夜行グッズの飾り棚
  { characterId: 40, furnitureId: 42 }, // カホ → バイオレットパーティーテーブルセット
  { characterId: 41, furnitureId: 42 }, // カヨコ（ドレス） → バイオレットパーティーテーブルセット
  { characterId: 41, furnitureId: 22 }, // カヨコ（ドレス） → 最高級役員用デスク
  { characterId: 42, furnitureId: 43 }, // カヨコ（正月） → お正月の座布団
  { characterId: 43, furnitureId: 44 }, // カリン（バニーガール） → カウンターチェア・ダークバイオレット
  { characterId: 44, furnitureId: 11 }, // カリン（制服） → 2人用ミレニアムデスク
  { characterId: 45, furnitureId: 45 }, // カンナ → 取調室のテーブル
  { characterId: 46, furnitureId: 46 }, // カンナ（水着） → 水難救命ボックス
  { characterId: 47, furnitureId: 47 }, // キキョウ → リラックスチェア
  { characterId: 48, furnitureId: 48 }, // キキョウ（水着） → どこでもばしゃばしゃプール
  { characterId: 49, furnitureId: 49 }, // キサキ → 玄龍門の玉座
  { characterId: 50, furnitureId: 50 }, // キララ → セルフィーブース
    { characterId: 51, furnitureId: 51 },   // キリノ（水着） → ライフセーバー用椅子
  { characterId: 52, furnitureId: 52 },   // ケイ → 過ぎ去りし思い出
  { characterId: 53, furnitureId: 53 },   // ココナ → 白いコーヒーテーブル
  { characterId: 54, furnitureId: 54 },   // コタマ（キャンプ） → アウトドアパーテーション
  { characterId: 55, furnitureId: 55 },   // コトリ（応援団） → 大運動会のマット・ブルー
  { characterId: 56, furnitureId: 56 },   // コノカ → 散らかったデスク
  { characterId: 57, furnitureId: 57 },   // コハル（水着） → アイスクリームテーブル
  { characterId: 58, furnitureId: 58 },   // コユキ → ゼリーズのクレーンゲーム
  { characterId: 59, furnitureId: 59 },   // コユキ（パジャマ） → 真夜中のプレイゾーン
  { characterId: 60, furnitureId: 60 },   // サオリ → ガラスの窓
  { characterId: 61, furnitureId: 61 },   // サオリ（ドレス） → 豪華な姿見
  { characterId: 62, furnitureId: 62 },   // サオリ（水着） → DJライブステージ
  { characterId: 63, furnitureId: 63 },   // サキ → ミリタリーチェア・イエロー
  { characterId: 64, furnitureId: 64 },   // サキ（水着） → スキューバダイビングギア保管ラック
  { characterId: 65, furnitureId: 65 },   // サクラコ → 大聖堂の長椅子
  { characterId: 66, furnitureId: 66 },   // サクラコ（アイドル） → ライブステージ
  { characterId: 67, furnitureId: 67 },   // サツキ → 万魔殿のデスク
  { characterId: 68, furnitureId: 68 },   // シグレ → 爽やかなフルーツバー
  { characterId: 69, furnitureId: 69 },   // シグレ（温泉） → 檜の浴槽
  { characterId: 70, furnitureId: 70 },   // シズコ → 百夜堂の出張屋台
  { characterId: 71, furnitureId: 71 },   // シズコ（水着） → 甘くて涼しいかき氷バー
  { characterId: 72, furnitureId: 72 },   // ジュリ（アルバイト） → パンケーキ・ティーテーブル
  { characterId: 73, furnitureId: 73 },   // ジュンコ → ハロウィーンのパンプキンデザートテーブル
  { characterId: 74, furnitureId: 74 },   // ジュンコ（正月） → おせち料理のテーブル
  { characterId: 75, furnitureId: 75 },   // シロコ → アビドス教室の覆面が置かれた机
  { characterId: 76, furnitureId: 76 },   // シロコ（ライディング） → アビドス教室の自転車
  { characterId: 77, furnitureId: 77 },   // シロコ（水着） → バタバタカジキの展示台
  { characterId: 78, furnitureId: 78 },   // シロコ＊テラー → アビドス自転車整備スタンド
  { characterId: 79, furnitureId: 79 },   // スズミ（マジカル） → フリーボックス
  { characterId: 80, furnitureId: 80 },   // スバル → ジュークボックス
  { characterId: 81, furnitureId: 81 },   // スミレ（アルバイト） → アシストプルアップマシン
  { characterId: 82, furnitureId: 82 },   // セイア → ティーパーティーテーブル
  { characterId: 83, furnitureId: 83 },   // セイア（水着） → セイアのオープンカー
  { characterId: 84, furnitureId: 84 },   // セナ → 原木の大型テーブル
  { characterId: 85, furnitureId: 85 },   // セナ（私服） → 救急箱ホワイトテーブル
  { characterId: 86, furnitureId: 86 },   // セリカ → アビドス教室のリボンと手袋が置かれた机
  { characterId: 87, furnitureId: 87 },   // セリカ（正月） → お正月のこたつ
  { characterId: 88, furnitureId: 88 },   // セリカ（水着） → バーベキューグリル
  { characterId: 89, furnitureId: 89 },   // セリナ（クリスマス） → 軽快な譜面台
  { characterId: 90, furnitureId: 90 },   // タカネ → 販売用の机
  { characterId: 91, furnitureId: 91 },   // チアキ → 万魔殿の掲示板
  { characterId: 92, furnitureId: 92 },   // チェリノ（温泉） → 保温庫
  { characterId: 93, furnitureId: 93 },   // チセ（水着） → ビーチサイドのクーリング扇風機
  { characterId: 94, furnitureId: 94 },   // チナツ（温泉） → マッサージチェア
  { characterId: 95, furnitureId: 95 },   // チヒロ → カラーのマルチテレビ
  { characterId: 96, furnitureId: 96 },   // ツクヨ → モンステラの白い植木鉢
  { characterId: 97, furnitureId: 97 },   // ツクヨ（ドレス） → 簡易更衣室
  { characterId: 98, furnitureId: 98 },   // ツバキ（ガイド） → デパートのデザイナーソファ
  { characterId: 99, furnitureId: 99 },   // ツルギ（水着） → カラフルな大型プール
  { characterId: 100, furnitureId: 100 }, // トキ → レースゲーム機
  { characterId: 101, furnitureId: 101 }, // トキ（バニーガール） → カウンターチェア・ディープブルー
  { characterId: 102, furnitureId: 102 }, // トキ（臨戦） → ゲーム開発部のスペース
    { characterId: 101, furnitureId: 101 }, // トキ（バニーガール） → カウンターチェア・ディープブルー
  { characterId: 102, furnitureId: 102 }, // トキ（臨戦） → ゲーム開発部のスペース
  { characterId: 103, furnitureId: 103 }, // トモエ → 波模様の座椅子
  { characterId: 104, furnitureId: 104 }, // トモエ（チーパオ） → 演説用の机
  { characterId: 105, furnitureId: 82 },  // ナギサ → ティーパーティーテーブル
  { characterId: 106, furnitureId: 105 }, // ナギサ（水着） → スイングチェア
  { characterId: 107, furnitureId: 106 }, // ナグサ → 百花繚乱専用ガンスタンド
  { characterId: 108, furnitureId: 107 }, // ナツ → バレンタインのティーテーブル
  { characterId: 109, furnitureId: 108 }, // ナツ（バンド） → リズムの導き手
  { characterId: 110, furnitureId: 109 }, // ニヤ → 陰陽部室の座卓
  { characterId: 111, furnitureId: 110 }, // ネル → 格闘ゲーム機（ネル）
  { characterId: 111, furnitureId: 100 }, // ネル → レースゲーム機（ネル）
  { characterId: 112, furnitureId: 111 }, // ネル（バニーガール） → カウンターチェア・ゴールドレッドワイン
  { characterId: 113, furnitureId: 112 }, // ネル（制服） → ミレニアムタワーラウンジのエスカレーター
  { characterId: 114, furnitureId: 113 }, // ノア → 大運動会の器具保管箱
  { characterId: 115, furnitureId: 114 }, // ノア（パジャマ） → ダメにするソファ・白
  { characterId: 116, furnitureId: 115 }, // ノゾミ → しゅっしゅっぽっぽ！ミニ列車セット
  { characterId: 117, furnitureId: 116 }, // ノドカ（温泉） → 抹茶セット付きの座卓
  { characterId: 118, furnitureId: 117 }, // ノノミ → アビドス教室のカーディガンが置かれた机
  { characterId: 119, furnitureId: 118 }, // ノノミ（水着） → 折りたたみ式リゾートテーブル
  { characterId: 120, furnitureId: 119 }, // ハスミ（体操服） → 大運動会のパン食い競走用スタンド
  { characterId: 121, furnitureId: 27 },  // ハスミ（水着） → スイカ割りセット
  { characterId: 122, furnitureId: 120 }, // ハナエ（クリスマス） → 暖かなクリスマス暖炉
  { characterId: 123, furnitureId: 121 }, // ハナコ（水着） → サンシャインレモンツリー
  { characterId: 123, furnitureId: 57 },  // ハナコ（水着） → アイスクリームテーブル
  { characterId: 124, furnitureId: 122 }, // ハルカ → 植物棚
  { characterId: 125, furnitureId: 122 }, // ハルカ（正月） → 植物棚
  { characterId: 126, furnitureId: 74 },  // ハルナ（正月） → おせち料理のテーブル
  { characterId: 127, furnitureId: 123 }, // ハルナ（体操服） → 休憩用のベンチテーブル
  { characterId: 128, furnitureId: 124 }, // ハレ（キャンプ） → アウトドアコーヒーテーブル
  { characterId: 129, furnitureId: 115 }, // ヒカリ → しゅっしゅっぽっぽ！ミニ列車セット
  { characterId: 130, furnitureId: 125 }, // ヒナ（ドレス） → グランドピアノ
  { characterId: 130, furnitureId: 8 },   // ヒナ（ドレス） → クラシックソファテーブルセット
  { characterId: 131, furnitureId: 126 }, // ヒナ（水着） → 浮き輪付きの小型プール
  { characterId: 132, furnitureId: 127 }, // ヒナタ → 白いシンプルソファー
  { characterId: 132, furnitureId: 65 },  // ヒナタ → 大聖堂の長椅子
  { characterId: 133, furnitureId: 128 }, // ヒナタ（水着） → ミニスツールとサンベッド
  { characterId: 134, furnitureId: 32 },  // ヒビキ（応援団） → 大運動会の応援スタンド
  { characterId: 135, furnitureId: 129 }, // ヒマリ → カラフルな自販機
  { characterId: 136, furnitureId: 130 }, // ヒマリ（臨戦） → ミニキッチン
  { characterId: 137, furnitureId: 131 }, // ヒヨリ → 原木の収納ケース
  { characterId: 138, furnitureId: 132 }, // ヒヨリ（水着） → ビーチフェスティバル用椅子
  { characterId: 139, furnitureId: 133 }, // フィーナ → 灯油ストーブと切り餅
  { characterId: 140, furnitureId: 134 }, // フィーナ（ガイド） → テレビデオ
  { characterId: 141, furnitureId: 135 }, // フウカ（正月） → お正月の衣桁
  { characterId: 142, furnitureId: 136 }, // フブキ → カラーの長椅子
  { characterId: 143, furnitureId: 137 }, // フブキ（水着） → ジャイアントプールフロート
  { characterId: 144, furnitureId: 138 }, // フユ → 芸術家の初作品
  { characterId: 145, furnitureId: 139 }, // ホシノ → アビドス教室のクジラ人形が置かれた机
  { characterId: 146, furnitureId: 140 }, // ホシノ（水着） → ビーチサイドのふわふわ浮き輪
  { characterId: 147, furnitureId: 141 }, // ホシノ（臨戦） → エキスパート向け移動標的
  { characterId: 148, furnitureId: 142 }, // マキ（キャンプ） → ミリタリーキャンプボードの設置物
  { characterId: 149, furnitureId: 143 }, // マコト → 威厳の役員用デスク
  { characterId: 150, furnitureId: 144 }, // マシロ（水着） → 夏のパラソルセット
    { characterId: 151, furnitureId: 65 },   // マリー → 大聖堂の長椅子
  { characterId: 152, furnitureId: 66 },   // マリー（アイドル） → ライブステージ
  { characterId: 153, furnitureId: 146 },  // マリー（体操服） → 大運動会の休憩テント
  { characterId: 154, furnitureId: 147 },  // マリナ → バレンタインのシングルチェア
  { characterId: 155, furnitureId: 148 },  // マリナ（チーパオ） → 木人椿
  { characterId: 156, furnitureId: 82 },   // ミカ → ティーパーティーテーブル
  { characterId: 157, furnitureId: 149 },  // ミカ（水着） → ビーチのブランコ
  { characterId: 157, furnitureId: 150 },  // ミカ（水着） → ラグジュアリービーチベッド
  { characterId: 158, furnitureId: 60 },   // ミサキ → ガラスの窓
  { characterId: 159, furnitureId: 151 },  // ミサキ（水着） → ビーチサンベッドとミニテーブル
  { characterId: 160, furnitureId: 152 },  // ミチル → お正月の提灯
  { characterId: 161, furnitureId: 153 },  // ミチル（ドレス） → ラーメンテーブル
  { characterId: 162, furnitureId: 154 },  // ミドリ → エアホッケーゲーム機
  { characterId: 162, furnitureId: 155 },  // ミドリ → ゲーム機用のウッドモニター
  { characterId: 163, furnitureId: 156 },  // ミドリ（メイド） → カフェ用ベッド
  { characterId: 164, furnitureId: 157 },  // ミナ → 中華風の椅子
  { characterId: 165, furnitureId: 158 },  // ミネ → 豪奢な装飾のティーテーブル
  { characterId: 166, furnitureId: 66 },   // ミネ（アイドル） → ライブステージ
  { characterId: 167, furnitureId: 159 },  // ミノリ → 木工作業台
  { characterId: 168, furnitureId: 160 },  // ミモリ → お正月の和傘
  { characterId: 169, furnitureId: 161 },  // ミモリ（水着） → レモンパラソルホワイトテーブル
  { characterId: 170, furnitureId: 162 },  // ミヤコ → ミリタリーチェア・ピンク
  { characterId: 171, furnitureId: 163 },  // ミヤコ（水着） → ミリタリーチェア・グリーン
  { characterId: 172, furnitureId: 164 },  // ミユ → 新鮮！魚箱
  { characterId: 173, furnitureId: 164 },  // ミユ（水着） → 新鮮！魚箱
  { characterId: 174, furnitureId: 165 },  // ミヨ → タイプライターデスク
  { characterId: 175, furnitureId: 166 },  // ムツキ（正月） → お正月のけん玉セットテーブル
  { characterId: 176, furnitureId: 167 },  // メグ → 檜の浴槽（メグ）
  { characterId: 177, furnitureId: 168 },  // メル → 原稿用の机
  { characterId: 178, furnitureId: 169 },  // モエ → ミリタリーチェア・ブルー
  { characterId: 179, furnitureId: 170 },  // モエ（水着） → メッシュハンモック
  { characterId: 180, furnitureId: 171 },  // モミジ → 図書館のクラシックな椅子
  { characterId: 181, furnitureId: 172 },  // モモイ → エアホッケーゲーム機（モモイ）
  { characterId: 181, furnitureId: 173 },  // モモイ → ゲーム機用のウッドモニター（モモイ）
  { characterId: 182, furnitureId: 174 },  // モモイ（メイド） → カフェ用ベッド（モモイ）
  { characterId: 183, furnitureId: 175 },  // ヤクモ → 販売用の机（ヤクモ）
  { characterId: 184, furnitureId: 176 },  // ユウカ（体操服） → 大運動会のマット・スカイブルー
  { characterId: 185, furnitureId: 177 },  // ユウカ（パジャマ） → ダメにするソファ・青
  { characterId: 186, furnitureId: 178 },  // ユカリ → 折り紙テーブル
  { characterId: 187, furnitureId: 179 },  // ユカリ（水着） → サンシャイン・フラワープール
  { characterId: 188, furnitureId: 180 },  // ユズ → ゲーム開発部のロッカー
  { characterId: 189, furnitureId: 181 },  // ユズ（メイド） → 鉄製引き戸ロッカー
  { characterId: 190, furnitureId: 182 },  // ユズ（臨戦） → 自動出入口パターン1
  { characterId: 191, furnitureId: 183 },  // ヨシミ（バンド） → ピンク色のエレクトリックギター
  { characterId: 192, furnitureId: 184 },  // ラブ → ヘルメット掃除キット
  { characterId: 193, furnitureId: 185 },  // リオ → 原初のアバンギャルド
  { characterId: 194, furnitureId: 102 },  // リオ（臨戦） → ゲーム開発部のスペース
  { characterId: 195, furnitureId: 186 },  // リツ → 彫刻の作業台
  { characterId: 196, furnitureId: 187 },  // ルミ → 中華風ホットショーケース
  { characterId: 197, furnitureId: 188 },  // レイ → ミレニアム製ピッチングマシン
  { characterId: 198, furnitureId: 189 },  // レイサ → 原木のテラステーブル（レイサ）
  { characterId: 199, furnitureId: 190 },  // レイサ（マジカル） → フリーボックス（レイサ）
  { characterId: 200, furnitureId: 191 },  // レイジョ → 木人椿（レイジョ）
  { characterId: 201, furnitureId: 192 },  // レナ → 芸術家の頭の中
  { characterId: 202, furnitureId: 193 },  // レンゲ → 古風な調理台
  { characterId: 203, furnitureId: 194 },  // レンゲ（水着） → 夏色の水鉄砲スタンド
  { characterId: 204, furnitureId: 195 },  // ワカモ → バレンタインのクッキーソファー
  { characterId: 205, furnitureId: 196 },  // ワカモ（水着） → レトロな三段積みアンプ
  { characterId: 206, furnitureId: 197 },  // 御坂美琴 → モモフレンズのグッズ台
  { characterId: 207, furnitureId: 198 },  // 佐天涙子 → タロットテーブル
  { characterId: 208, furnitureId: 199 },  // 食蜂操祈 → フレッシュショップテーブル
];


