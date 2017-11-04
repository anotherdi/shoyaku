var id = 0;
var answers = [
["ウイキョウ", "ウイキョウ", "セリ科", "果実", "anethole", "健胃"],
["ウワウルシ", "クマコケモモ", "ツツジ科", "葉", "arbutin", "尿路消毒"],
["エンゴサク", "<i>Corydalis turtschaninovii</i>", "ケシ科", "塊茎", "corydaline", "鎮痛"],
["オウギ", "キバナオウギ", "マメ科", "根", "astragaloside", "血圧降下"],
["オウゴン", "コガネバナ", "シソ科", "根", "baicalin", "健胃"],
["オウバク", "キハダ", "ミカン科", "樹皮", "berberine", "健胃"],
["オウレン", "オウレン", "キンポウゲ科", "根茎", "berberine", "健胃"],
["ガジュツ", "ガジュツ", "ショウガ科", "根茎", "curzerenone", "健胃"],
["カッコン", "クズ", "マメ科", "根", "daidzin", "解熱・鎮痙"],
["カンゾウ", "<i>Glycyrrhiza uralensis</i>", "マメ科", "根、ストロン", "glycyrrhizin", "鎮痛"],
["キキョウ", "キキョウ", "キキョウ科", "根", "platycodin", "鎮咳・去痰"],
["キササゲ", "キササゲ", "ノウゼンカズラ科", "果実", "catalposide", "利尿"],
["キジツ", "ダイダイ、ナツミカン", "ミカン科", "未熟果実", "limonene, naringin", "健胃"],
["キョウニン", "ホンアンズ、アンズ", "バラ科", "種子", "amygdalin", "鎮咳・去痰"],
["ケイヒ", "<i>Cinnamomum cassia</i>", "クスノキ科", "樹皮", "cinnamaldehyde", "健胃"],
["ケツメイシ", "エビスグサ", "マメ科", "種子", "chrysophanol", "緩下"],
["ゲンチアナ", "<i>Gentiana lutea</i>", "リンドウ科", "根、根茎", "gentiopicroside", "健胃"],
["ゲンノショウコ", "ゲンノショウコ", "フウロソウ科", "地上部", "geraniin", "整腸"],
["コウカ", "ベニバナ", "キク科", "管状花", "carthamin", "駆オ血"],
["コウジン", "オタネニンジン", "ウコギ科", "根", "ginsenoside", "強壮"],
["コウボク", "ホウノキ", "モクレン科", "樹皮", "magnocurarine", "鎮痙"],
["ゴシュユ", "ゴシュユ", "ミカン科", "果実", "evodiamine", "健胃・鎮痛"],
["ゴミシ", "チョウセンゴミシ", "マツブサ科", "果実", "schizandrin", "鎮咳・肝障害"],
["サイコ", "ミシマサイコ", "セリ科", "根", "saikosaponin", "抗炎症"],
["サフラン", "サフラン", "アヤメ科", "柱頭", "crocin", "鎮静・通経"],
["サンシシ", "クチナシ", "アカネ科", "果実", "geniposide", "鎮静"],
["サンシュユ", "サンシュユ", "ミズキ科", "偽果の果肉", "loganin", "強壮"],
["サンショウ", "サンショウ", "ミカン科", "成熟果皮", "sanshool", "健胃"],
["サンヤク", "ヤマノイモ、ナガイモ", "ヤマノイモ科", "根茎", "starch, diastase", "強壮"],
["ジオウ", "アカヤジオウ", "ゴマノハグサ科", "根", "glutinoside", "強壮"],
["シコン", "ムラサキ", "ムラサキ科", "根", "shikonin", "抗炎症"],
["シャクヤク", "シャクヤク", "ボタン科", "根", "paeoniflorin", "鎮痛"],
["ジュウヤク", "ドクダミ", "ドクダミ科", "地上部", "quercitrin", "利尿"],
["ショウキョウ", "ショウガ", "ショウガ科", "根茎", "zingiberene", "健胃"],
["センキュウ", "センキュウ", "セリ科", "根茎", "ligustilide", "冷え性・貧血"],
["センナ", "<i>Cassia angustifolia</i>", "マメ科", "小葉", "sennoside A, B", "緩下"],
["センブリ", "センブリ", "リンドウ科", "全草", "swertiamarin", "健胃"],
["ダイオウ", "<i>Rheum palmatum</i>", "タデ科", "根茎", "sennoside A, B", "瀉下"],
["タイソウ", "ナツメ", "クロウメモドキ科", "果実", "zizyphus saponin", "鎮静"],
["タクシャ", "サジオモダカ", "オモダカ科", "塊茎", "alisol A", "利尿"],
["チクセツニンジン", "トチバニンジン", "ウコギ科", "根茎", "chikusetsusaponin", "強壮"],
["チョウジ", "チョウジ", "フトモモ科", "つぼみ", "eugenol", "健胃"],
["チョレイ", "チョレイマイタケ", "サルノコシカケ科", "菌核", "ergosterol", "消炎性利尿"],
["チンピ", "ウンシュウミカン", "ミカン科", "成熟果皮", "limonene, hesperidin", "健胃"],
["トウキ", "トウキ、ホッカイトウキ", "セリ科", "根", "ligustilide", "冷え性・貧血"],
["トウニン", "モモ", "バラ科", "種子", "amygdalin", "消炎性駆オ血"],
["トウヒ", "<i>Citrus aurantium</i>、ダイダイ", "ミカン科", "成熟果皮", "limonene, hesperidin", "健胃"],
["ニンジン", "オタネニンジン", "ウコギ科", "根", "ginsenoside", "強壮"],
["バクモンドウ", "ジャノヒゲ", "ユリ科", "根", "ophiopogonin", "鎮咳・去痰"],
["ハッカ", "ハッカ", "シソ科", "地上部", "<i>l</i>-menthol", "健胃・駆風"],
["ハンゲ", "カラスビシャク", "サトイモ科", "塊茎", "homogentigic acid", "鎮静"],
["ビャクジュツ", "オケラ、オオバナオケラ", "キク科", "根茎", "atractylon", "健胃"],
["ブクリョウ", "マツホド", "サルノコシカケ科", "菌核", "eburicoic acid", "利尿・健胃"],
["ボタンピ", "ボタン", "ボタン科", "根皮", "paeonol", "消炎性駆オ血"],
["ボレイ", "カキ", "イタボガキ科", "貝がら", "CaCO<sub>3</sub>", "制酸"],
["マオウ", "<i>Ephedra sinica</i>", "マオウ科", "地上茎", "<i>l</i>-ephedrine", "鎮咳"],
["モクツウ", "アケビ、ミツバアケビ", "アケビ科", "茎", "akeboside", "消炎性利尿"],
["ヨクイニン", "ハトムギ", "イネ科", "種子", "多糖, coixenolide", "いぼとり"],
["ロートコン", "ハシリドコロ", "ナス科", "根茎、根", "(－)-hyoscyamine", "鎮痛・鎮痙"]
];

function flush() {
	for (i = 0; i < 6; i++) {
		document.getElementById("ans" + i).innerHTML = "";
	}
	document.getElementById("photo").src = "img/" + ("00" + id).slice(-3) + ".jpg";
}

function next() {
	if (document.getElementById("order").value == 1) {
		id++;
		if(id > answers.length) {
			id = 1;
		}
	} else {
		id = Math.floor(Math.random() * answers.length) + 1;
	}
	flush();
}

function show(target) {
	document.getElementById("ans" + target).innerHTML = answers[id - 1][target];
}

function showall() {
	for (i = 0; i < 6; i++) {
		document.getElementById("ans" + i).innerHTML = answers[id - 1][i];
	}
}

function init(){
	next();
	var len = answers.length;
	for(i=1; i<=len; i++) {
		var img = document.createElement("img");
		img.src = "img/" + ("00" + i).slice(-3) + ".jpg";
		cache.appendChild(img);
	}
}