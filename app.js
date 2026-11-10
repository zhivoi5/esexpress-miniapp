// товары и цены из постов канала @esexpresss
const ITEMS = [
  { id: "vanilla-shot", cat: "Парфюм", name: "Olfactive Studio Vanilla Shot", price: 14990, desc: "Ваниль, карамель и тёплые пряные ноты. Цена за 100 мл.", photos: ["1163_0"] },
  { id: "margiela-bomber", cat: "Одежда", name: "Бомбер Maison Margiela", price: 45090, desc: "Кожаный бомбер шоколадного цвета, свободный крой, объёмные накладные карманы.", photos: ["1164_0", "1164_1"], sizes: "clothes" },
  { id: "cos-jacket", cat: "Одежда", name: "Укороченная куртка COS", price: 42490, desc: "Чёрная фактурная куртка с контрастным кожаным воротником.", photos: ["1152_0", "1152_1"], sizes: "clothes" },
  { id: "zara-jeans", cat: "Одежда", name: "Джинсы Zara", price: 10990, desc: "Широкий крой, песочный оттенок, средняя посадка.", photos: ["1161_0", "1161_1"], sizes: "clothes" },
  { id: "terra-cardigan", cat: "Одежда", name: "Кардиган Terra Incognita", price: 10090, desc: "Кардиган шоколадного оттенка с фактурной вязкой.", photos: ["1118_0", "1118_1"], sizes: "clothes" },
  { id: "axel-sneakers", cat: "Обувь", name: "Кеды Axel Arigato", price: 49490, desc: "Низкие кеды из комбинированных материалов.", photos: ["1130_0", "1130_1", "1130_2"], sizes: "shoes" },
  { id: "ami-puffer", cat: "Одежда", name: "Пуховик Ami", price: 56390, desc: "Чёрный укороченный пуховик объёмного кроя.", photos: ["1140_0", "1140_1"], sizes: "clothes" },
  { id: "margesherwood-bag", cat: "Сумки", name: "Сумка Margesherwood", price: 36490, desc: "Длинная горизонтальная форма, мягкая кожа.", photos: ["1121_0", "1121_1", "1121_2"] },
  { id: "mcqueen-glasses", cat: "Аксессуары", name: "Очки Alexander McQueen", price: 24890, desc: "Классическая форма, черепаховая оправа.", photos: ["1103_0", "1103_1", "1103_2"] },
  { id: "ugg-tasman", cat: "Обувь", name: "Ugg Tasman", price: 24490, desc: "Плетёная фактура, мягкая внутренняя отделка.", photos: ["1154_0", "1154_1", "1154_2"], sizes: "shoes" },
  { id: "prada-belt", cat: "Аксессуары", name: "Ремень Prada", price: 53390, desc: "Ремень из премиальной замши.", photos: ["1147_0", "1147_1", "1147_2"] },
  { id: "ferragamo-clutch", cat: "Сумки", name: "Клатч Ferragamo", price: 37490, desc: "Клатч-пошет коричневого цвета.", photos: ["1143_0", "1143_1", "1143_2"] },
  { id: "loewe-hat", cat: "Аксессуары", name: "Шапка Loewe", price: 32890, desc: "Тёплая вязаная шапка.", photos: ["1133_0", "1133_1", "1133_2"] },
  { id: "marni-scarf", cat: "Аксессуары", name: "Шарф Marni", price: 25990, desc: "Мягкий шарф из премиального материала.", photos: ["1125_0", "1125_1", "1125_2"] },
  { id: "mm6-hat", cat: "Аксессуары", name: "Шапка MM6", price: 35190, desc: "Вязаная шапка с цифровым лейблом.", photos: ["1108_0", "1108_1", "1108_2"] },
  { id: "celine-cardholder", cat: "Аксессуары", name: "Кардхолдер Celine", price: 32190, desc: "Кожаный кардхолдер.", photos: ["1111_0", "1111_1", "1111_2"] },
  { id: "roja-burlington", cat: "Парфюм", name: "Roja Dove Burlington 1819", price: 25990, desc: "Цитрусово-ароматический аромат.", photos: ["1142_0"] },
];
const CATS = ["Одежда", "Обувь", "Сумки", "Аксессуары", "Парфюм"];
const SIZES = { clothes: ["XS", "S", "M", "L", "XL"], shoes: ["38", "39", "40", "41", "42", "43", "44"] };
const MANAGER = "https://t.me/EsExpress_Manager";
const LOGO_RATIO = 1742 / 556;

// ноты с картинок канала: интенсивность в долях от самой сильной
const NOTES = {
  "vanilla-shot": [["Амбровые", 1], ["Сладкие", .77], ["Ванильные", .76], ["Тёплые пряные", .71], ["Бальзамические", .65], ["Фруктовые", .57]],
  "roja-burlington": [["Цитрусовые", 1], ["Табачные", .77], ["Свежие пряные", .73], ["Сладкие", .54], ["Свежие", .45]],
};

// где на фото стоит сама вещь: x, y, ширина, высота, размер фото. Посчитано по пикселям, без логотипа внизу
const BOX = {"1103_0":[50,232,704,222,800,669],"1103_1":[39,179,711,304,800,669],"1103_2":[77,184,683,308,800,669],"1108_0":[170,36,460,485,800,669],"1108_1":[177,35,456,492,800,669],"1108_2":[193,72,423,469,800,669],"1111_0":[230,33,337,515,800,669],"1111_1":[112,39,583,511,800,669],"1111_2":[231,31,334,512,800,669],"1118_0":[33,62,543,634,601,800],"1118_1":[35,66,538,627,601,800],"1121_0":[67,51,658,453,800,669],"1121_1":[88,40,643,462,800,669],"1121_2":[233,49,348,487,800,669],"1125_0":[317,8,227,538,800,669],"1125_1":[344,25,124,517,800,669],"1125_2":[257,28,285,509,800,669],"1130_0":[31,152,743,306,800,669],"1130_1":[95,136,614,347,800,669],"1130_2":[274,22,286,517,800,669],"1133_0":[151,37,515,493,800,669],"1133_1":[136,61,538,467,800,669],"1133_2":[131,32,568,505,800,669],"1140_0":[14,97,578,585,601,800],"1140_1":[25,82,560,598,601,800],"1142_0":[62,81,306,447,800,669],"1143_0":[89,107,644,412,800,669],"1143_1":[97,102,632,416,800,669],"1143_2":[192,49,446,505,800,669],"1147_0":[76,268,662,164,800,669],"1147_1":[177,233,467,211,800,669],"1147_2":[228,22,389,524,800,669],"1152_0":[23,84,565,557,601,800],"1152_1":[25,88,561,552,601,800],"1154_0":[65,193,693,257,800,669],"1154_1":[64,184,695,279,800,669],"1154_2":[63,189,696,269,800,669],"1161_0":[130,43,359,646,601,800],"1161_1":[130,44,358,646,601,800],"1163_0":[56,104,325,418,800,669],"1164_0":[39,57,539,624,601,800],"1164_1":[33,67,543,630,601,800]};

// образы из канала: рамка всего образа на фото и вещи на нём. каждая вещь вырезана из того же фото
// по своей рамке (x, y, ширина, высота), цены из поста
const LOOK_DATA = [
  ["1160", "7 ноября", [39, 23, 525, 692, 601, 800], [
    ["Куртка Ur", 10990, "Одежда", [40, 23, 277, 287]], ["Брюки", 52490, "Одежда", [100, 300, 180, 412]],
    ["Очки Tom Ford", 39090, "Аксессуары", [364, 149, 171, 73]], ["Часы Midnite", 43390, "Аксессуары", [378, 249, 43, 112]],
    ["Creed, 100 мл", 30990, "Парфюм", [447, 242, 67, 118]], ["Сумка Longchamp", 17190, "Сумки", [326, 375, 238, 193]],
    ["Лоферы Zara", 16790, "Обувь", [345, 596, 194, 66]]]],
  ["1151", "5 ноября", [29, 37, 551, 678, 601, 800], [
    ["Кардиган Remain", 44890, "Одежда", [51, 40, 207, 228]], ["Куртка Max Mara", 56690, "Одежда", [290, 37, 290, 311]],
    ["Джинсы 7 For All Mankind", 23890, "Одежда", [65, 276, 170, 437]], ["Браслет Gucci", 27690, "Аксессуары", [373, 323, 34, 117]],
    ["Memo, 75 мл", 13490, "Парфюм", [439, 318, 42, 117]], ["Сумка Margesherwood", 36490, "Сумки", [310, 451, 235, 161]],
    ["Лоферы Massimo Dutti", 31690, "Обувь", [312, 635, 222, 76]]]],
  ["1146", "3 ноября", [11, 28, 576, 687, 601, 800], [
    ["Свитер Musinsa", 7909, "Одежда", [12, 37, 284, 268]], ["Куртка", 9390, "Одежда", [305, 28, 282, 320]],
    ["Джинсы Levi’s", 8690, "Одежда", [76, 312, 156, 400]], ["Ремень Orsiani", 21090, "Аксессуары", [381, 364, 131, 56]],
    ["Часы C. Marzio", 22870, "Аксессуары", [378, 445, 45, 125]], ["Creed, 100 мл", 36990, "Парфюм", [445, 438, 74, 136]],
    ["Кеды Maison Margiela", 61090, "Обувь", [344, 606, 194, 81]]]],
  ["1139", "31 октября", [5, 40, 596, 675, 604, 800], [
    ["Футболка", 5090, "Одежда", [5, 45, 289, 275]], ["Куртка Makemore", 14733, "Одежда", [255, 40, 345, 295]],
    ["Джинсы Acne Studios", 35990, "Одежда", [55, 331, 190, 381]], ["Очки Ray-Ban", 16390, "Аксессуары", [344, 356, 175, 59]],
    ["Часы Fossil", 19090, "Аксессуары", [368, 449, 42, 96]], ["Byredo, 100 мл", 35990, "Парфюм", [436, 447, 69, 101]],
    ["Кроссовки Dries Van Noten", 65390, "Обувь", [328, 600, 195, 75]]]],
  ["1129", "29 октября", [13, 37, 585, 678, 601, 800], [
    ["Рубашка Ouyang", 6690, "Одежда", [13, 55, 289, 250]], ["Пальто Nezavisiy", 11090, "Одежда", [295, 38, 300, 295]],
    ["Джинсы Tommy Hilfiger", 10990, "Одежда", [68, 310, 167, 402]], ["Часы Armani", 32290, "Аксессуары", [398, 313, 34, 93]],
    ["Penhaligon’s, 75 мл", 29990, "Парфюм", [448, 308, 36, 104]], ["Сумка Coach", 26590, "Сумки", [358, 438, 178, 188]],
    ["Кеды Alo", 30090, "Обувь", [350, 651, 175, 61]]]],
];
// каждая вещь вырезана из фото образа по своему силуэту в отдельный файл photos/look/<образ>-<номер>.jpg,
// чтобы в кадр не попадали края соседних вещей; рамки выше — откуда её вырезали. здесь размеры этих файлов
const LOOK_SIZE = {"1160-1":[289,299],"1160-2":[192,424],"1160-3":[183,85],"1160-4":[55,124],"1160-5":[79,130],"1160-6":[250,205],"1160-7":[206,78],"1151-1":[219,240],"1151-2":[302,323],"1151-3":[182,449],"1151-4":[46,129],"1151-5":[54,129],"1151-6":[247,173],"1151-7":[234,88],"1146-1":[296,280],"1146-2":[294,332],"1146-3":[168,412],"1146-4":[143,68],"1146-5":[57,137],"1146-6":[86,148],"1146-7":[206,93],"1139-1":[300,287],"1139-2":[355,307],"1139-3":[202,393],"1139-4":[187,71],"1139-5":[54,108],"1139-6":[81,113],"1139-7":[207,87],"1129-1":[301,262],"1129-2":[312,307],"1129-3":[179,414],"1129-4":[46,105],"1129-5":[48,116],"1129-6":[190,200],"1129-7":[187,73]};
const LOOKS = LOOK_DATA.map(([id, date, box, things]) => {
  // рамка образа целиком; «#» значит тонкое поле (~8 px), поэтому логотип ES ниже (с 733 px) в кадр не попадает
  BOX[`${id}_0#look`] = box;
  const items = things.map(([name, price, cat], n) => {
    const key = `look/${id}-${n + 1}#`, [w, h] = LOOK_SIZE[`${id}-${n + 1}`];
    BOX[key] = [0, 0, w, h, w, h];
    return { id: `look-${id}-${n + 1}`, cat, name, price, desc: "Вещь из образа. Цвет и детали уточните у менеджера.", photos: [key],
      sizes: cat === "Одежда" ? "clothes" : cat === "Обувь" ? "shoes" : undefined };
  });
  return { id, date, photo: `${id}_0#look`, items };
});
// все вещи: из каталога и из образов. в каталоге показываем только ITEMS
const ALL = [...ITEMS, ...LOOKS.flatMap((l) => l.items)];

// подразделы одежды — по ассортименту канала (150 постов с конца июля). вещь попадает в подраздел
// по слову в названии, порядок важен: «sweatshirt» должен уйти в свитеры раньше, чем «shirt» в футболки
const SUBS = {
  "Одежда": [
    ["Верхняя одежда", /jacket|coat|trench|puffer|blazer|vest|bomber|куртк|пальто|тренч|пуховик|бомбер|жилет|пиджак|ветровк/],
    ["Свитеры и худи", /sweater|cardigan|jumper|hoodie|sweatshirt|худи|свитшот|свитер|кардиган|джемпер|кофт/],
    ["Футболки и топы", /t-shirt|tee|long-?sleeve|polo|tank|top|shirt|футболк|лонгслив|поло|топ|рубашк|майк/],
    ["Джинсы", /jeans|denim|джинс/],
    ["Брюки и шорты", /pants|trousers|shorts|брюк|штан|шорт/],
  ],
};
const subOf = (item) => (SUBS[item.cat] || []).find(([, re]) => re.test(item.name.toLowerCase()))?.[0] ?? null;
// номер поста зашит в имя фото: чем больше, тем свежее
const postId = (item) => parseInt(item.photos[0], 10) || 0;
const NEWEST = [...ITEMS].sort((a, b) => postId(b) - postId(a));

const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5s-7.5-4.6-7.5-9.7A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4c0 5.1-7.5 9.7-7.5 9.7z"/></svg>';
const rub = (n) => "от " + n.toLocaleString("ru-RU") + " ₽";
const logo =(label) => `<svg viewBox="0 0 1742 556" ${label ? 'role="img" aria-label="ES Express"' : 'aria-hidden="true"'}><use href="logo.svg#logo" width="1742" height="556"/></svg>`;

// вырезаем ровно вещь с небольшим полем, поэтому она всегда стоит по центру;
// --w — её настоящая ширина в пикселях, крупнее фото не растягиваем, иначе видны пиксели
function shot(file, item, eager) {
  const [bx, by, bw, bh, W, H] = BOX[file];
  // у вещей из образа соседи стоят вплотную, поэтому поле почти нулевое
  const pad = Math.max(bw, bh) * (file.includes("#") ? 0.012 : 0.04);
  const x = Math.max(0, bx - pad), y = Math.max(0, by - pad);
  const w = Math.min(W - x, bw + 2 * pad), h = Math.min(H - y, bh + 2 * pad);
  const pct = (v) => (v / w * 100).toFixed(2) + "%";
  return `<span class="crop" style="--r:${(w / h).toFixed(3)};--w:${w.toFixed(0)}px;aspect-ratio:${w.toFixed(0)}/${h.toFixed(0)}"><img src="photos/${file.split("#")[0]}.jpg" width="${W}" height="${H}" style="width:${pct(W)};margin:-${pct(y)} 0 0 -${pct(x)}" alt="${eager ? item.name : ""}"${eager ? "" : ' loading="lazy"'}></span>`;
}

// сердечко — отдельная кнопка рядом со ссылкой: кнопка внутри ссылки не работает нормально
const card = (item) => `
  <div class="card" data-id="${item.id}">
    <a class="card-link" href="product.html?id=${item.id}">
      <span class="cell">${shot(item.photos[0], item)}<span class="in-req">В заявке</span></span>
      <h3>${item.name}</h3>
      <p>${rub(item.price)}</p>
    </a>
    <button class="card-fav" aria-label="В избранное: ${item.name}" aria-pressed="false">${HEART}</button>
  </div>`;

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".card-fav");
  if (!btn) return;
  const id = btn.closest(".card").dataset.id, list = loadFav();
  saveFav(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  updateRequestLinks();
  if (document.body.dataset.page === "favorites") refreshPage();
});

// заявка хранится на устройстве покупателя и уходит менеджеру одним сообщением
function loadRequest() {
  try {
    const list = JSON.parse(localStorage.getItem("es-request")) || [];
    return list.filter((r, i) => list.findIndex((x) => x.id === r.id && x.size === r.size) === i); // старые дубли отбрасываем
  } catch { return []; }
}
let request = loadRequest();
function saveRequest() {
  // одна и та же вещь в одном размере хранится один раз
  request = request.filter((r, i, all) => all.findIndex((x) => x.id === r.id && x.size === r.size) === i);
  try { localStorage.setItem("es-request", JSON.stringify(request)); } catch {}
  updateRequestLinks();
}
// страница могла вернуться кнопкой «Назад» или заявку поменяли в другой вкладке: перечитываем свежую
let refreshPage = () => {};
function syncRequest() {
  request = loadRequest();
  updateRequestLinks();
  refreshPage();
}
addEventListener("pageshow", (e) => e.persisted && syncRequest());
addEventListener("storage", (e) => (e.key === "es-request" || e.key === "es-fav") && syncRequest());
const writeTo = (text) => MANAGER + "?text=" + encodeURIComponent(text);
function managerLink() {
  if (!request.length) return MANAGER;
  const lines = request.map(({ id, size }) => {
    const item = ALL.find((i) => i.id === id);
    return item && `— ${item.name}${size ? ", размер " + size : ""}, ${rub(item.price)}`;
  }).filter(Boolean);
  return writeTo("Здравствуйте! Хочу заказать:\n" + lines.join("\n"));
}
// цифра в шапке коротко «подпрыгивает», когда меняется; вещи из заявки в каталоге помечаются плашкой
let shownCount = null;
function updateRequestLinks() {
  document.querySelectorAll("[data-request]").forEach((a) => (a.href = managerLink()));
  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = request.length;
    el.classList.toggle("zero", request.length === 0);
    if (shownCount !== null && shownCount !== request.length && !matchMedia("(prefers-reduced-motion: reduce)").matches)
      el.animate([{ transform: "scale(1)" }, { transform: "scale(1.6)" }, { transform: "scale(1)" }], { duration: 380, easing: "ease-out" });
  });
  shownCount = request.length;
  const ids = new Set(request.map((r) => r.id));
  const favs = loadFav();
  document.querySelectorAll(".card[data-id]").forEach((c) => {
    c.classList.toggle("in-request", ids.has(c.dataset.id));
    c.querySelector(".card-fav")?.setAttribute("aria-pressed", favs.includes(c.dataset.id));
  });
}

// ссылки на чаты Telegram: внутри мини-приложения открываем их командой Telegram, иначе приложение уходит со страницы
const telegram = () => window.Telegram?.WebApp?.initData ? window.Telegram.WebApp : null;
const openLink = (url) => (telegram() ? telegram().openTelegramLink(url) : (location.href = url));
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="https://t.me/"]');
  if (!a || !telegram() || e.defaultPrevented) return;
  e.preventDefault();
  openLink(a.href);
});

// избранное: просто список id на устройстве покупателя
function loadFav() {
  try { return JSON.parse(localStorage.getItem("es-fav")) || []; } catch { return []; }
}
function saveFav(list) {
  try { localStorage.setItem("es-fav", JSON.stringify(list)); } catch {}
}

// нижняя панель на телефоне: тонкие линейные иконки, подсветка переезжает на активную вкладку
const TABS = [
  ["home", "index.html", "Главная", '<path d="M4 11 12 4.5 20 11v8.5h-5.5v-5h-5v5H4z"/>'],
  ["catalog", "catalog.html", "Каталог", '<rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>'],
  ["favorites", "favorites.html", "Избранное", '<path d="M12 19.5s-7.5-4.6-7.5-9.7A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4c0 5.1-7.5 9.7-7.5 9.7z"/>'],
  ["request", "request.html", "Заявка", '<path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>'],
  ["more", "more.html", "Ещё", '<circle class="dot" cx="6" cy="12" r="1.6"/><circle class="dot" cx="12" cy="12" r="1.6"/><circle class="dot" cx="18" cy="12" r="1.6"/>'],
];

// общие части страницы
const tickerText = ["ES Express", "Доставка включена в стоимость", "Привезём любую вещь под заказ", "Заказ через менеджера в Telegram"]
  .map((t) => `<span>${t}<svg class="mark" viewBox="0 0 359 433" aria-hidden="true"><use href="mark.svg#mark" width="359" height="433"/></svg></span>`).join("");

document.body.insertAdjacentHTML("afterbegin", `
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="whiten" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="1.037 0 0 0 0 0 1.037 0 0 0 0 0 1.09 0 0 0 0 0 1 0"/></filter>
  </svg>
  <div class="ticker" aria-hidden="true"><div class="ticker-track">${tickerText.repeat(6)}</div></div>
  <header class="bar">
    <nav aria-label="Основное меню"><a href="index.html">Главная</a><a href="catalog.html">Каталог</a><a href="favorites.html">Избранное</a><a href="${MANAGER}">Связь</a></nav>
    <a class="bar-request" href="request.html">Заявка (<span data-count>0</span>)</a>
  </header>
  <a class="brand" href="index.html" aria-label="ES Express, на главную">${logo()}${document.querySelector(".hero")
    ? '<img class="chrome" src="photos/logo-chrome.png?v=2" width="2000" height="717" alt="">' : ""}</a>`);

// на странице заявки только шапка и строка; на «Ещё» связь с менеджером и так первой строкой, форма там лишняя
if (!["request", "more"].includes(document.body.dataset.page)) document.body.insertAdjacentHTML("beforeend", `
  <section class="ask">
    <h2>Остались вопросы?</h2>
    <p>Напишите нам, менеджер ответит в Telegram.</p>
    <form id="ask">
      <input name="q" required maxlength="500" placeholder="Ваш вопрос" aria-label="Ваш вопрос">
      <button>Отправить</button>
    </form>
  </section>
  <footer class="foot">
    <nav aria-label="Ссылки">
      <a href="catalog.html">Каталог</a><a href="${MANAGER}">Менеджер</a>
      <a href="https://t.me/esexpresss">Канал</a><a href="https://t.me/EsExpress_reviews">Отзывы</a>
    </nav>
    ${logo(true)}
  </footer>`);

{
  const pageId = document.body.dataset.page;
  const active = Math.max(0, TABS.findIndex(([id]) => id === (pageId === "product" ? "catalog" : pageId)));
  let prev = active;
  try { prev = +(sessionStorage.getItem("es-tab") ?? active); sessionStorage.setItem("es-tab", active); } catch {}
  document.body.insertAdjacentHTML("beforeend", `
    <nav class="tabbar" aria-label="Разделы приложения" style="--i:${prev}">
      <span class="tab-glow" aria-hidden="true"></span>
      ${TABS.map(([id, href, label, icon], i) => `
        <a href="${href}"${i === active ? ' aria-current="page"' : ""}>
          <span class="tab-ico"><svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg>${id === "request" ? '<b class="tab-badge" data-count>0</b>' : ""}</span>
          <span class="tab-label">${label}</span>
        </a>`).join("")}
    </nav>`);
  const tabbar = document.querySelector(".tabbar");
  // подсветка переезжает с прошлой вкладки на текущую
  requestAnimationFrame(() => requestAnimationFrame(() => tabbar.style.setProperty("--i", active)));
  tabbar.addEventListener("click", () => window.Telegram?.WebApp?.HapticFeedback?.selectionChanged?.());
  // при прокрутке вниз панель прячется, при прокрутке вверх возвращается
  let lastY = scrollY;
  addEventListener("scroll", () => {
    const y = scrollY;
    if (y > lastY + 6 && y > 120) tabbar.classList.add("away");
    else if (y < lastY - 6) tabbar.classList.remove("away");
    lastY = y;
  }, { passive: true });
}

document.getElementById("ask")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = e.target.q.value.trim();
  if (q) openLink(writeTo(q));
});

updateRequestLinks();

// логотип уезжает с первого экрана в шапку по мере прокрутки
const hero = document.querySelector(".hero");
const brand = document.querySelector(".brand");
const bar = document.querySelector(".bar");
const calm = matchMedia("(prefers-reduced-motion: reduce)");

// если браузер умеет, движение логотипа ведёт сама прокрутка (CSS scroll-timeline): он едет ровно вместе со страницей.
// раньше позицию считал скрипт на каждом шаге, и на айфоне логотип отставал и дрожал. скрипт остался запасным вариантом
const scrollDriven = !!hero && !calm.matches && CSS.supports?.("animation-timeline: scroll()");
let geo;
function measure() {
  const css = getComputedStyle(document.documentElement);
  const ticker = parseFloat(css.getPropertyValue("--ticker")), header = parseFloat(css.getPropertyValue("--header"));
  const big = Math.min(innerWidth * 0.84, 1200), small = innerWidth < 900 ? 72 : 112;
  const topEnd = ticker + (header - small / LOGO_RATIO) / 2;
  const topStart = hero ? (ticker + hero.offsetHeight) / 2 - big / LOGO_RATIO / 2 : topEnd;
  geo = { big, small, topEnd, topStart, end: hero ? hero.offsetHeight * 0.55 : 0, solidAt: hero ? hero.offsetHeight - ticker - header : 0 };
  brand.style.width = big + "px";
  if (scrollDriven) {
    brand.style.setProperty("--y0", topStart + "px");
    brand.style.setProperty("--y1", topEnd + "px");
    brand.style.setProperty("--s1", (small / big).toFixed(4));
    brand.style.setProperty("--dock-end", geo.end + "px");
    brand.classList.add("scrolly");
  }
  placeBrand();
}
function placeBrand() {
  const { big, small, topEnd, topStart, end, solidAt } = geo;
  if (!scrollDriven) {
    let e = 1;
    if (hero) {
      const p = Math.min(1, Math.max(0, scrollY / end));
      e = calm.matches ? (p < 1 ? 0 : 1) : p * (2 - p);
    }
    brand.style.transform = `translate(-50%, ${topStart + (topEnd - topStart) * e}px) scale(${1 + (small / big - 1) * e})`;
  }
  const solid = !hero || scrollY > solidAt;
  if (solid !== bar.classList.contains("solid")) {
    bar.classList.toggle("solid", solid);
    brand.classList.toggle("dark", solid);
  }
}
let queued = false;
addEventListener("scroll", () => {
  if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; placeBrand(); }); }
}, { passive: true });
addEventListener("resize", measure);
measure();

// страницы
const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;

if (page === "home") {
  // 8 вещей: на компьютере видно 7 (два ряда по 4 с заголовком), на телефоне все 8 (три ряда по 3)
  const cards = NEWEST.slice(0, 8).map(card);
  // третья ячейка первого ряда — заголовок, как на референсе
  cards.splice(2, 0, `<div class="arrivals"><h2>Новые поступления</h2><p>Доставка включена в стоимость</p></div>`);
  document.getElementById("grid").innerHTML = cards.join("");
  updateRequestLinks();
}

const lookTotal = (l) => l.items.reduce((s, i) => s + i.price, 0);
const things = (n) => n + " " + (n % 10 === 1 && n % 100 !== 11 ? "вещь" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? "вещи" : "вещей");

// карусель образов: крутится сама, на компьютере видно три (боковые приглушены), на телефоне один
if (page === "home") {
  const track = document.getElementById("looks"), dots = document.getElementById("dots");
  track.innerHTML = LOOKS.map((l) => `
    <a class="look" href="look.html?id=${l.id}">
      <span class="look-photo">${shot(l.photo, { name: "Образ от " + l.date })}</span>
      <span class="look-cap"><b>Образ от ${l.date}</b><span>${things(l.items.length)}, ${rub(lookTotal(l))}</span></span>
    </a>`).join("");
  dots.innerHTML = LOOKS.map((l, i) => `<button aria-label="Образ ${i + 1}"></button>`).join("");
  const slides = [...track.children], n = slides.length;
  let cur = 0, timer = null;

  function show() {
    slides.forEach((s, i) => {
      let o = ((i - cur) % n + n) % n;
      if (o > n / 2) o -= n; // −2 … 2: слева, по центру, справа
      s.style.setProperty("--o", o);
      s.classList.toggle("center", o === 0);
      s.classList.toggle("far", Math.abs(o) > 1);
      s.tabIndex = o === 0 ? 0 : -1;
      s.setAttribute("aria-hidden", o !== 0);
    });
    [...dots.children].forEach((d, i) => d.setAttribute("aria-current", i === cur));
  }
  const go = (i) => { cur = ((i % n) + n) % n; show(); };
  const play = () => { stop(); if (!calm.matches) timer = setInterval(() => go(cur + 1), 4500); };
  const stop = () => clearInterval(timer);

  // нажатие на боковой образ сначала подвигает его в центр
  track.addEventListener("click", (e) => {
    const s = e.target.closest(".look");
    if (s && !s.classList.contains("center")) { e.preventDefault(); go(slides.indexOf(s)); play(); }
  });
  dots.addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { go([...dots.children].indexOf(b)); play(); } });

  // ручное листание: образ тянется за пальцем или мышкой; отпустил дальше 60 px — переключается на соседний
  let x0 = null, dx = 0, dragged = false;
  track.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    x0 = e.clientX; dx = 0; dragged = false; stop();
  });
  track.addEventListener("pointermove", (e) => {
    if (x0 === null) return;
    dx = e.clientX - x0;
    // захватываем указатель только когда точно тянут, иначе обычный клик не откроет образ
    if (!dragged && Math.abs(dx) > 6) { dragged = true; track.classList.add("dragging"); try { track.setPointerCapture(e.pointerId); } catch {} }
    track.style.setProperty("--drag", dx + "px");
  });
  const release = () => {
    if (x0 === null) return;
    track.classList.remove("dragging");
    track.style.setProperty("--drag", "0px");
    if (Math.abs(dx) > 60) go(cur + (dx < 0 ? 1 : -1));
    x0 = null; play();
  };
  track.addEventListener("pointerup", release);
  track.addEventListener("pointercancel", release);
  // после перетаскивания отпускание не должно открывать образ
  track.addEventListener("click", (e) => { if (dragged) { e.preventDefault(); e.stopImmediatePropagation(); dragged = false; } }, true);
  track.addEventListener("dragstart", (e) => e.preventDefault());

  // свайп двумя пальцами по тачпаду и стрелки на клавиатуре
  let wheelLock = false;
  track.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 25) return;
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true; setTimeout(() => (wheelLock = false), 650);
    go(cur + (e.deltaX > 0 ? 1 : -1)); play();
  }, { passive: false });
  track.closest(".looks").addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") { go(cur + (e.key === "ArrowRight" ? 1 : -1)); play(); }
  });
  document.getElementById("looks-prev").onclick = () => { go(cur - 1); play(); };
  document.getElementById("looks-next").onclick = () => { go(cur + 1); play(); };
  track.addEventListener("mouseenter", stop);
  track.addEventListener("mouseleave", play);
  track.addEventListener("focusin", stop);

  show();
  play();
}

// страница образа: фото сверху, под ним сетка его вещей
if (page === "look") {
  const l = LOOKS.find((x) => x.id === params.get("id"));
  if (!l) location.replace("index.html");
  else {
    document.title = "Образ от " + l.date + " — ES Express";
    document.getElementById("look-photo").innerHTML = shot(l.photo, { name: "Образ от " + l.date }, true);
    document.getElementById("look-title").textContent = "Образ от " + l.date;
    document.getElementById("look-sub").textContent = things(l.items.length) + ", " + rub(lookTotal(l)) + " за всё";
    document.getElementById("grid").innerHTML = l.items.map(card).join("");
    updateRequestLinks();
  }
}

// каталог: сначала новинки, разделы и подразделы, поиск, вещи подгружаются порциями по 24 по мере прокрутки
if (page === "catalog") {
  const cat = CATS.includes(params.get("cat")) ? params.get("cat") : null;
  const inCat = NEWEST.filter((i) => !cat || i.cat === cat);
  const subs = (SUBS[cat] || []).map(([s]) => s).filter((s) => inCat.some((i) => subOf(i) === s)); // пустые не показываем
  const sub = subs.includes(params.get("sub")) ? params.get("sub") : null;
  const link = (c, s) => "catalog.html" + (c ? "?cat=" + encodeURIComponent(c) + (s ? "&sub=" + encodeURIComponent(s) : "") : "");
  const filters = document.getElementById("filters"), subsEl = document.getElementById("subs");
  filters.innerHTML = [null, ...CATS].map((c) => `<a href="${link(c)}"${c === cat ? ' aria-current="page"' : ""}>${c || "Всё"}</a>`).join("");
  subsEl.hidden = subs.length < 2;
  subsEl.innerHTML = subs.length < 2 ? "" : [null, ...subs].map((s) =>
    `<a href="${link(cat, s)}"${s === sub ? ' aria-current="page"' : ""}>${s || "Вся " + cat.toLowerCase()}</a>`).join("");
  // выбранный раздел, если он за краем строки, прокручиваем в видимую часть
  for (const row of [filters, subsEl]) {
    const on = row.querySelector("[aria-current]");
    if (on) row.scrollLeft = on.offsetLeft - (row.clientWidth - on.offsetWidth) / 2;
  }

  const grid = document.getElementById("grid"), empty = document.getElementById("empty");
  const sentinel = document.getElementById("sentinel"), search = document.getElementById("search");
  const PAGE = 24;
  let list = [], shown = 0;
  search.value = params.get("q") || "";

  function addMore() {
    const next = list.slice(shown, shown + PAGE);
    grid.insertAdjacentHTML("beforeend", next.map(card).join(""));
    shown += next.length;
    updateRequestLinks();
    // если экран длинный и конец списка всё ещё виден, догружаем сразу
    requestAnimationFrame(() => {
      if (shown < list.length && sentinel.getBoundingClientRect().top < innerHeight + 600) addMore();
    });
  }
  function apply() {
    const q = search.value.trim().toLowerCase();
    list = inCat.filter((i) => (!sub || subOf(i) === sub) && (!q || i.name.toLowerCase().includes(q)));
    shown = 0;
    grid.innerHTML = "";
    empty.hidden = list.length > 0;
    addMore();
  }
  new IntersectionObserver((e) => { if (e[0].isIntersecting && shown < list.length) addMore(); }, { rootMargin: "600px" }).observe(sentinel);
  search.addEventListener("input", () => {
    apply();
    const u = new URL(location.href);
    search.value.trim() ? u.searchParams.set("q", search.value.trim()) : u.searchParams.delete("q");
    history.replaceState(null, "", u);
  });
  apply();
}

if (page === "favorites") {
  const renderFav = () => {
    const ids = loadFav();
    const list = ALL.filter((i) => ids.includes(i.id));
    document.getElementById("grid").innerHTML = list.map(card).join("");
    document.getElementById("empty").hidden = list.length > 0;
    updateRequestLinks();
  };
  renderFav();
  refreshPage = renderFav;
}

if (page === "request") renderRequest();

// заявка: папка открывается, и вещи карточками разлетаются вокруг неё —
// полукругом сверху на компьютере, кругом на телефоне. крестик на карточке убирает вещь из заявки
function renderRequest() {
  const folder = document.getElementById("folder");
  const ring = document.getElementById("ring");
  const look = document.getElementById("look");
  const send = document.getElementById("send");
  const empty = document.getElementById("empty");

  ring.innerHTML = request.map((r, i) => {
    const item = ALL.find((x) => x.id === r.id);
    return item ? `
      <div class="tile" style="--i:${i}" data-id="${r.id}" data-size="${r.size ?? ""}">
        <a class="tile-body" href="product.html?id=${item.id}" tabindex="-1">
          <span class="tile-photo">${shot(item.photos[0], item)}</span>
          <span class="tile-name">${item.name}</span>
          <span class="tile-price">${r.size ? r.size + ", " : ""}${rub(item.price)}</span>
        </a>
        <button class="tile-x" aria-label="Убрать из заявки: ${item.name}" tabindex="-1">×</button>
      </div>` : "";
  }).join("");

  const tiles = () => [...ring.querySelectorAll(".tile:not(.gone)")];
  const isOpen = () => folder.getAttribute("aria-expanded") === "true";

  // телефон: кругом. компьютер: дугой над папкой, на равном расстоянии друг от друга;
  // центральная карточка стоит ровно, остальные наклоняются наружу, крайние максимум на 50°.
  // радиус растёт с количеством вещей, а если места всё равно мало, карточки уменьшаются
  function place() {
    const phone = innerWidth < 900, list = tiles(), n = list.length;
    let R, k, angle, lift = 0;
    if (phone) {
      R = 142;
      k = Math.min(1, (2 * R * Math.sin(Math.PI / Math.max(n, 2))) / 118);
      angle = (i) => -90 + (360 * i) / n;
    } else {
      const span = Math.min(100, (n - 1) * 25); // ширина дуги в градусах: ±50° у крайних
      const gap = n > 1 ? span / (n - 1) : 0;
      const chord = (r) => 2 * r * Math.sin((gap / 2) * Math.PI / 180);
      // дуга растёт вширь, но не шире экрана
      const maxR = Math.min(720, (innerWidth - 240) / (2 * Math.sin(Math.max(span, 25) / 2 * Math.PI / 180)));
      R = n > 1 ? Math.min(maxR, Math.max(300, 182 / 2 / Math.sin((gap / 2) * Math.PI / 180))) : 300;
      k = n > 1 ? Math.min(1, chord(R) / 182) : 1;
      angle = (i) => -90 - span / 2 + gap * i;
      // дугу опускаем на папку: ближайшая к ней карточка (с учётом наклона) встаёт над папкой с зазором 28 px
      const inner = (n % 2 ? 0 : gap / 2) * Math.PI / 180;
      const halfH = (128 * k * Math.abs(Math.sin(inner)) + 168 * k * Math.cos(inner)) / 2;
      lift = R * Math.cos(inner) - (folder.offsetHeight / 2 + 28 + halfH);
    }
    ring.style.setProperty("--k", k.toFixed(3));
    list.forEach((t, i) => {
      const a = angle(i), rad = (a * Math.PI) / 180;
      t.style.setProperty("--x", (R * Math.cos(rad)).toFixed(1) + "px");
      t.style.setProperty("--y", (R * Math.sin(rad) + lift).toFixed(1) + "px");
      t.style.setProperty("--t", phone ? "0deg" : (a + 90).toFixed(1) + "deg");
    });
  }

  function sync() {
    const open = isOpen(), has = tiles().length > 0;
    ring.classList.toggle("open", open);
    ring.querySelectorAll("a, button").forEach((el) => (el.tabIndex = open ? 0 : -1));
    look.hidden = open || !has;
    send.hidden = !has;
    empty.hidden = has;
  }

  folder.onclick = look.onclick = () => {
    folder.setAttribute("aria-expanded", !isOpen());
    sync();
  };

  ring.addEventListener("click", (e) => {
    const x = e.target.closest(".tile-x");
    if (!x) return;
    const tile = x.closest(".tile");
    request = loadRequest();
    const i = request.findIndex((r) => r.id === tile.dataset.id && (r.size ?? "") === tile.dataset.size);
    if (i >= 0) request.splice(i, 1);
    saveRequest();
    tile.classList.add("gone");
    setTimeout(() => tile.remove(), 300);
    place(); // остальные плавно переезжают на новые места
    sync();
  });

  place();
  addEventListener("resize", place);
  sync();
  refreshPage = () => location.reload(); // заявку поменяли на другой странице — собираем карточки заново
}

if (page === "product") {
  const item = ALL.find((i) => i.id === params.get("id"));
  if (!item) location.replace("catalog.html");
  else renderProduct(item);
}

function renderProduct(item) {
  document.title = item.name + " — ES Express";
  const sizes = SIZES[item.sizes];
  let size = null;

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = item.photos.map((f, n) => `<div class="slide">${shot(f, item, n === 0)}</div>`).join("");
  // на телефоне фото листаются внутри своего окошка вниз, счётчик показывает какое сейчас
  const counter = document.getElementById("counter");
  const count = () => (counter.textContent = item.photos.length > 1
    ? `${Math.round(gallery.scrollTop / gallery.clientHeight) + 1} / ${item.photos.length}` : "");
  gallery.addEventListener("scroll", count, { passive: true });
  count();

  // у парфюма вместо размеров ноты; полоски каждый раз растут с нуля
  const notes = NOTES[item.id];
  if (notes) {
    const box = document.getElementById("notes");
    box.hidden = false;
    box.querySelector("ul").innerHTML = notes.map(([n, v]) =>
      `<li aria-label="${n}, ${Math.round(v * 100)}%"><span>${n}</span><i><b style="width:${v * 100}%"></b></i></li>`).join("");
    const grow = () => {
      if (calm.matches) return;
      box.querySelectorAll("b").forEach((b, i) => b.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
        { duration: 900, delay: 150 + i * 90, easing: "cubic-bezier(.2, .7, .2, 1)", fill: "backwards" }));
    };
    grow();
    addEventListener("pageshow", (e) => e.persisted && grow());
  }

  document.getElementById("name").textContent = item.name;
  document.getElementById("price").textContent = rub(item.price);
  document.getElementById("desc").textContent = item.desc;

  const sizeBox = document.getElementById("sizes");
  if (sizes) {
    sizeBox.hidden = false;
    sizeBox.querySelector("div").innerHTML = sizes.map((s) => `<button aria-pressed="false">${s}</button>`).join("");
    sizeBox.querySelectorAll("button").forEach((b) => (b.onclick = () => {
      size = b.textContent;
      sizeBox.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      render();
    }));
  }

  const add = document.getElementById("add");
  const inRequest = () => request.findIndex((r) => r.id === item.id && r.size === size);
  add.onclick = () => {
    request = loadRequest(); // свежая заявка, а не та, что была при открытии страницы
    const i = inRequest();
    if (i >= 0) request.splice(i, 1); else request.push({ id: item.id, size });
    saveRequest();
    render();
  };
  // вещь уже в заявке — кнопка становится контурной «Убрать из заявки»
  function render() {
    request = loadRequest();
    add.disabled = sizes && !size;
    const inside = !add.disabled && inRequest() >= 0;
    add.classList.toggle("in", inside);
    add.textContent = add.disabled ? "Выберите размер" : inside ? "Убрать из заявки" : "Добавить в заявку";
  }
  render();

  // сердечко: сохранить вещь в избранное, без размера
  const fav = document.getElementById("fav");
  const renderFav = () => {
    const on = loadFav().includes(item.id);
    fav.setAttribute("aria-pressed", on);
    fav.lastChild.textContent = on ? "В избранном" : "В избранное";
  };
  fav.onclick = () => {
    const list = loadFav();
    saveFav(list.includes(item.id) ? list.filter((id) => id !== item.id) : [...list, item.id]);
    renderFav();
  };
  renderFav();
  refreshPage = () => { render(); renderFav(); };

  const more = ITEMS.filter((i) => i.cat === item.cat && i.id !== item.id);
  document.getElementById("more").innerHTML = [...more, ...ITEMS.filter((i) => i.cat !== item.cat)].slice(0, 4).map(card).join("");
  updateRequestLinks();
}

// Telegram: скрипт Telegram грузим только внутри мини-приложения (при запуске оно передаёт tgWebAppData),
// поэтому в обычном браузере сайт его не ждёт. флаг в sessionStorage — для переходов между страницами
let inTelegram = location.hash.includes("tgWebAppData");
try {
  if (inTelegram) sessionStorage.setItem("es-tg", "1");
  else inTelegram = sessionStorage.getItem("es-tg") === "1";
} catch {}
if (inTelegram) {
  const s = document.createElement("script");
  s.src = "https://telegram.org/js/telegram-web-app.js";
  s.onload = initTelegram;
  document.head.append(s);
}
function initTelegram() {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  tg.ready();
  tg.expand(); // сразу на всю высоту, а не на половину экрана
  if (tg.isVersionAtLeast("7.7")) tg.disableVerticalSwipes(); // листание вниз не сворачивает приложение
  if (tg.isVersionAtLeast("6.1")) { tg.setHeaderColor("#ffffff"); tg.setBackgroundColor("#ffffff"); }
  if (tg.isVersionAtLeast("7.10")) tg.setBottomBarColor("#ffffff");
  // кнопка «назад» Telegram ведёт на прошлую страницу сайта, на главной её нет
  if (page !== "home" && tg.isVersionAtLeast("6.1")) {
    tg.BackButton.show();
    tg.BackButton.onClick(() => (history.length > 1 ? history.back() : (location.href = "index.html")));
  }
}
