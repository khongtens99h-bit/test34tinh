/*
========================================================================
   34 TỈNH THÀNH - 34 BẢN SẮC - MỘT VIỆT NAM
   CORE JAVASCRIPT APP ENGINE
========================================================================
*/

// --- PROVINCE DATABASE MODEL ---
// Archive of the pre-1/7/2025 collection. It is retained only as design-source
// material; the storefront below uses the official 34 provincial-level units.
const LEGACY_PROVINCES_DATA = [
  {
    id: "01",
    name: "Hà Nội",
    slug: "ha-noi",
    region: "bac",
    tagline: "Di sản — Thăng Long",
    desc: "Thiết kế kế thừa sắc đỏ hoàng triều và vàng ánh kim quý phái, cách điệu từ họa tiết vảy rồng Thăng Long và các công trình di sản nghìn năm văn hiến.",
    primary: "#da251d",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 49,
    mapY: 18,
    symbol: "dragon"
  },
  {
    id: "02",
    name: "TP. Hồ Chí Minh",
    slug: "tp-hcm",
    region: "nam",
    tagline: "Chuyển động — Đô thị không ngủ",
    desc: "Hiện đại và năng động với gam màu xanh navy đậm kết hợp dải neon hồng và xanh cyan rực rỡ, tượng trưng cho những ánh đèn đêm lung linh của thành phố phát triển bậc nhất.",
    primary: "#0b2240",
    secondary: "#ff007f",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 43,
    mapY: 77,
    symbol: "tower"
  },
  {
    id: "03",
    name: "Đà Nẵng",
    slug: "da-nang",
    region: "trung",
    tagline: "Cánh chim biển — Cầu Rồng",
    desc: "Màu xanh dương sâu thẳm của biển cả giao thoa với sắc bạc lấp lánh của những nhịp cầu sông Hàn, mang tinh thần cởi mở, khát vọng vươn ra biển lớn.",
    primary: "#005691",
    secondary: "#e8f1f5",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 58,
    mapY: 47,
    symbol: "bridge"
  },
  {
    id: "04",
    name: "Hải Phòng",
    slug: "hai-phong",
    region: "bac",
    tagline: "Đất Cảng — Hoa phượng đỏ",
    desc: "Mạnh mẽ và đầy nhiệt huyết với màu đỏ thẫm của hoa phượng vĩ hòa quyện cùng sắc xám thép của cảng biển công nghiệp lớn nhất miền Bắc.",
    primary: "#9e1a1a",
    secondary: "#708090",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 54,
    mapY: 21,
    symbol: "anchor"
  },
  {
    id: "05",
    name: "Cần Thơ",
    slug: "can-tho",
    region: "nam",
    tagline: "Sông nước — Gạo trắng nước trong",
    desc: "Sắc xanh ngọc của sông nước miền Tây hòa cùng màu vàng của lúa chín trĩu hạt, tái hiện vẻ đẹp trù phú của thủ phủ miền sông nước Chợ nổi Cái Răng.",
    primary: "#008b8b",
    secondary: "#ffd700",
    accent: "#e0ffff",
    pattern: "waves",
    mapX: 37,
    mapY: 83,
    symbol: "boat"
  },
  {
    id: "06",
    name: "Cà Mau",
    slug: "ca-mau",
    region: "nam",
    tagline: "Cực Nam — Rừng ngập mặn Đất Mũi",
    desc: "Một thiết kế lấy cảm hứng từ vùng đất cực Nam, nơi rừng ngập mặn đước và mắm hòa quyện cùng biển cả xa xăm. Tone màu xanh đước thẫm kết hợp cam đất ấm áp.",
    primary: "#0f5132",
    secondary: "#fd7e14",
    accent: "#ffc107",
    pattern: "waves",
    mapX: 32,
    mapY: 92,
    symbol: "leaf"
  },
  {
    id: "07",
    name: "Thừa Thiên Huế",
    slug: "hue",
    region: "trung",
    tagline: "Cố đô — Hương Giang thơ mộng",
    desc: "Màu tím cung đình đặc trưng kết hợp sắc vàng gold hoàng tộc sang trọng, họa tiết mây luồn cung đình tạo nên vẻ trầm mặc, uy nghiêm và thi vị.",
    primary: "#4b0082",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 54,
    mapY: 45,
    symbol: "lotus"
  },
  {
    id: "08",
    name: "Quảng Nam",
    slug: "quang-nam",
    region: "trung",
    tagline: "Di sản — Hoài phố cổ kính",
    desc: "Sắc vàng đất nung từ tường gạch rêu phong Hội An phối cùng màu gỗ nâu trầm ấm, tôn vinh nét hoài cổ lãng mạn và tinh tế của di sản văn hóa.",
    primary: "#ca7d0e",
    secondary: "#4a3c31",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 60,
    mapY: 50,
    symbol: "lantern"
  },
  {
    id: "09",
    name: "Lâm Đồng",
    slug: "lam-dong",
    region: "nam",
    tagline: "Đà Lạt — Sương mù cao nguyên",
    desc: "Màu xanh thông rừng ẩn hiện trong sương mờ sườn dốc, phối cùng màu kem nhẹ thanh lịch. Họa tiết hoa anh đào cách điệu nhẹ nhàng đầy chất thơ.",
    primary: "#1b4d3e",
    secondary: "#d2b48c",
    accent: "#f5f5dc",
    pattern: "coffee",
    mapX: 59,
    mapY: 66,
    symbol: "pine"
  },
  {
    id: "10",
    name: "Khánh Hòa",
    slug: "khanh-hoa",
    region: "trung",
    tagline: "Nha Trang — Vịnh ngọc biển xanh",
    desc: "Tươi mát với màu xanh lam ngọc bích của vịnh biển Nha Trang huyền thoại, tô điểm sắc trắng tinh khôi của những bờ cát mịn và ánh nắng nhiệt đới.",
    primary: "#008080",
    secondary: "#ffffff",
    accent: "#ffd700",
    pattern: "waves",
    mapX: 66,
    mapY: 60,
    symbol: "sun"
  },
  {
    id: "11",
    name: "Hà Giang",
    slug: "ha-giang",
    region: "bac",
    tagline: "Kỳ vĩ — Cao nguyên đá Đồng Văn",
    desc: "Màu xám đá tai mèo kỳ vĩ làm chủ đạo, nhấn thêm sắc hồng tím rực rỡ của thảm hoa tam giác mạch phủ khắp các thung lũng đá tai mèo mùa đông chớm lạnh.",
    primary: "#2f3640",
    secondary: "#e056fd",
    accent: "#ffd700",
    pattern: "scales",
    mapX: 48,
    mapY: 6,
    symbol: "mountain"
  },
  {
    id: "12",
    name: "Lào Cai",
    slug: "lao-cai",
    region: "bac",
    tagline: "Đỉnh Fansipan — Tuyết phủ Sa Pa",
    desc: "Màu xanh ngọc lam của ruộng bậc thang Mường Hoa hòa quyện cùng màu trắng bạc như tuyết phủ trên đỉnh Fansipan hùng vĩ - nóc nhà Đông Dương.",
    primary: "#20b2aa",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 42,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "13",
    name: "Cao Bằng",
    slug: "cao-bang",
    region: "bac",
    tagline: "Thác Bản Giốc — Sông Quây Sơn",
    desc: "Sắc xanh ngọc bích mát lạnh của dòng nước Thác Bản Giốc đổ bóng xuống thung lũng. Họa tiết thổ cẩm Tày-Nùng được dệt khéo léo trên bo tay và cổ áo.",
    primary: "#00a8ff",
    secondary: "#0097e6",
    accent: "#ffc107",
    pattern: "scales",
    mapX: 55,
    mapY: 8,
    symbol: "mountain"
  },
  {
    id: "14",
    name: "Quảng Ninh",
    slug: "quang-ninh",
    region: "bac",
    tagline: "Vịnh Hạ Long — Đảo đá rồng bay",
    desc: "Tông màu xanh lục bảo tái hiện làn nước trong vắt vịnh Hạ Long, kết hợp họa tiết sóng uốn lượn quanh những hòn đảo đá vôi nhấp nhô tuyệt mỹ.",
    primary: "#1287a5",
    secondary: "#ffffff",
    accent: "#f5cd79",
    pattern: "waves",
    mapX: 58,
    mapY: 19,
    symbol: "dragon"
  },
  {
    id: "15",
    name: "Ninh Bình",
    slug: "ninh-binh",
    region: "bac",
    tagline: "Tràng An — Non nước hữu tình",
    desc: "Sự kết hợp tinh tế giữa màu xanh rêu cổ kính của núi đá Tràng An trầm tích và màu vàng chanh rực rỡ của cánh đồng lúa Tam Cốc dọc dòng sông Ngô Đồng.",
    primary: "#2e8b57",
    secondary: "#f4d03f",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 47,
    mapY: 28,
    symbol: "lotus"
  },
  {
    id: "16",
    name: "Thanh Hóa",
    slug: "thanh-hoa",
    region: "trung",
    tagline: "Hào khí Lam Sơn — Trống đồng",
    desc: "Màu đồng thau lịch sử kết hợp dải đỏ quyền lực. Họa tiết chim lạc cổ trên trống đồng Đông Sơn được khắc họa rõ nét ở mặt trước thân áo.",
    primary: "#b87333",
    secondary: "#da251d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 44,
    mapY: 32,
    symbol: "star"
  },
  {
    id: "17",
    name: "Nghệ An",
    slug: "nghe-an",
    region: "trung",
    tagline: "Hào khí Lam Hồng — Sông Lam núi Hồng",
    desc: "Màu cam lửa đầy nhiệt huyết phối cùng xanh đậm sâu lắng. Tượng trưng cho ý chí học tập kiên cường, đất học địa linh nhân kiệt dồi dào nguyên khí.",
    primary: "#d35400",
    secondary: "#1f3a52",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 43,
    mapY: 36,
    symbol: "star"
  },
  {
    id: "18",
    name: "Quảng Trị",
    slug: "quang-tri",
    region: "trung",
    tagline: "Vĩ tuyến 17 — Dòng sông Hiền Lương",
    desc: "Sắc xanh hòa bình tươi sáng phối màu bạc thép, thể hiện tinh thần kiên trung quật khởi vượt qua khói lửa chiến tranh giành lại độc lập tự do.",
    primary: "#4682b4",
    secondary: "#ffffff",
    accent: "#c0c0c0",
    pattern: "stripes",
    mapX: 51,
    mapY: 42,
    symbol: "star"
  },
  {
    id: "19",
    name: "Phú Yên",
    slug: "phu-yen",
    region: "trung",
    tagline: "Gành Đá Đĩa — Đón nắng bình minh",
    desc: "Thiết kế lấy cảm hứng từ cấu trúc xếp chồng đặc biệt của Gành Đá Đĩa. Sử dụng tông màu xanh ngọc lam biển khơi kết hợp sắc vàng đón nắng bình minh cực Đông.",
    primary: "#00bc9c",
    secondary: "#ffbe00",
    accent: "#ffffff",
    pattern: "mesh",
    mapX: 65,
    mapY: 56,
    symbol: "sun"
  },
  {
    id: "20",
    name: "Đắk Lắk",
    slug: "dak-lak",
    region: "nam",
    tagline: "Tây Nguyên — Bản sắc đại ngàn",
    desc: "Tông đỏ đất bazan trù phú quyện cùng màu nâu trầm cà phê hạt đặc sản. Họa tiết thổ cẩm Ê-đê được biến tấu cách điệu bất đối xứng dọc sườn áo.",
    primary: "#8b4513",
    secondary: "#da251d",
    accent: "#ffc107",
    pattern: "coffee",
    mapX: 58,
    mapY: 62,
    symbol: "leaf"
  },
  {
    id: "21",
    name: "Bình Thuận",
    slug: "binh-thuan",
    region: "trung",
    tagline: "Cát trắng nắng vàng — Mũi Né",
    desc: "Sắc cam cát nóng bỏng hòa cùng xanh biển nhiệt đới Mũi Né, phản chiếu đầy đủ nắng gió, sóng lướt ván diều và năng lượng phóng khoáng miền duyên hải.",
    primary: "#e67e22",
    secondary: "#3498db",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 68,
    symbol: "sun"
  },
  {
    id: "22",
    name: "Bà Rịa - Vũng Tàu",
    slug: "vung-tau",
    region: "nam",
    tagline: "Đại dương xanh — Giàn khoan rực lửa",
    desc: "Tone xanh biển đậm đĩnh đạc kết hợp các đường kẻ cam phản quang, tượng trưng cho những giàn khoan dầu khí rực lửa đêm ngày giữa biển Đông khơi xa.",
    primary: "#0f2027",
    secondary: "#e67e22",
    accent: "#00f0ff",
    pattern: "mesh",
    mapX: 47,
    mapY: 80,
    symbol: "anchor"
  },
  {
    id: "23",
    name: "Tây Ninh",
    slug: "tay-ninh",
    region: "nam",
    tagline: "Núi Bà Đen — Sắc màu Thánh địa",
    desc: "Thiết kế nổi bật phối hợp sắc cam hoàng hôn trên đỉnh núi Bà Đen và dải màu đa sắc lộng lẫy lấy ý tưởng từ khung cửa kính Tòa Thánh Cao Đài.",
    primary: "#c23616",
    secondary: "#fbc531",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 42,
    mapY: 74,
    symbol: "mountain"
  },
  {
    id: "24",
    name: "Đồng Nai",
    slug: "dong-nai",
    region: "nam",
    tagline: "Hào khí Trấn Biên — Công nghiệp bứt phá",
    desc: "Sự kết hợp năng động giữa tông xanh lục bảo đậm đà của rừng Chiến khu Đ và các họa tiết kẻ chéo vàng gold phát triển công nghiệp thần tốc.",
    primary: "#0a3d62",
    secondary: "#eccc68",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 46,
    mapY: 75,
    symbol: "star"
  },
  {
    id: "25",
    name: "Kiên Giang",
    slug: "kien-giang",
    region: "nam",
    tagline: "Đảo ngọc Phú Quốc — Biển hoàng hôn",
    desc: "Hồng san hô rực rỡ đan xen xanh lam lam lục, mô phỏng vẻ đẹp mê hoặc của hoàng hôn biển Tây Phú Quốc và hệ sinh thái san hô ngầm nguyên sơ.",
    primary: "#ff4757",
    secondary: "#1e90ff",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 31,
    mapY: 85,
    symbol: "sun"
  },
  {
    id: "26",
    name: "Bến Tre",
    slug: "ben-tre",
    region: "nam",
    tagline: "Xứ dừa — Sắc xanh Đồng Khởi",
    desc: "Trọn vẹn sắc xanh lá tươi mát của những rặng dừa trải dài thẳng tắp, họa tiết gân lá dừa được lồng ghép chìm tạo hiệu ứng 3D độc đáo trên ngực.",
    primary: "#1e824c",
    secondary: "#2ecc71",
    accent: "#ffffff",
    pattern: "coffee",
    mapX: 42,
    mapY: 82,
    symbol: "leaf"
  },
  {
    id: "27",
    name: "An Giang",
    slug: "an-giang",
    region: "nam",
    tagline: "Thất Sơn huyền bí — Sông nước biên thùy",
    desc: "Màu vàng lúa chín biên giới hòa quyện xanh rêu của dãy Thất Sơn hùng vĩ, gợi vẻ đẹp thanh bình yên ả nhưng ngập tràn hào khí biên cương.",
    primary: "#b58900",
    secondary: "#586e75",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 33,
    mapY: 80,
    symbol: "mountain"
  },
  {
    id: "28",
    name: "Tiền Giang",
    slug: "tien-giang",
    region: "nam",
    tagline: "Mê Kông bát ngát — Phù sa trù phú",
    desc: "Tone cam phù sa nồng ấm làm chủ đạo kết hợp viền xanh lam nước sông Mê Kông, tôn vinh vùng đất cây trái ngọt lành đắp bồi quanh năm dòng sông mẹ.",
    primary: "#d35400",
    secondary: "#2980b9",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 40,
    mapY: 79,
    symbol: "boat"
  },
  {
    id: "29",
    name: "Thái Bình",
    slug: "thai-binh",
    region: "bac",
    tagline: "Quê lúa — Cánh đồng chín vàng",
    desc: "Gam màu vàng lúa chín óng ả ôm trọn cả chiếc áo bóng đá, thể hiện nét đẹp lao động cần cù trù phú của cái nôi sản xuất lúa nước sông Hồng.",
    primary: "#f39c12",
    secondary: "#ffffff",
    accent: "#27ae60",
    pattern: "stripes",
    mapX: 52,
    mapY: 24,
    symbol: "leaf"
  },
  {
    id: "30",
    name: "Nam Định",
    slug: "nam-dinh",
    region: "bac",
    tagline: "Đất học — Đền Trần cổ kính",
    desc: "Màu đỏ mận chín cổ điển thể hiện tri thức và chiều sâu văn hóa truyền thống, bo tay thêu họa tiết đấu trường xưa hào hùng lịch lãm.",
    primary: "#7b1113",
    secondary: "#e0a899",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 50,
    mapY: 26,
    symbol: "star"
  },
  {
    id: "31",
    name: "Lạng Sơn",
    slug: "lang-son",
    region: "bac",
    tagline: "Ải Chi Lăng — Đỉnh Mẫu Sơn kỳ ảo",
    desc: "Thiết kế trầm ổn với tông xanh chàm chập chùng đồi núi Đông Bắc phối họa tiết kẻ dọc màu đồng vững chãi như thế núi thành lũy ngàn đời.",
    primary: "#2c3e50",
    secondary: "#f39c12",
    accent: "#ffffff",
    pattern: "stripes",
    mapX: 58,
    mapY: 14,
    symbol: "mountain"
  },
  {
    id: "32",
    name: "Bắc Ninh",
    slug: "bac-ninh",
    region: "bac",
    tagline: "Dân ca Quan họ — Quai thao nón thúng",
    desc: "Sắc hồng đào trẩy hội đan xen xanh chàm đặc trưng của tà áo tứ thân Kinh Bắc. Họa tiết quai thao nón thúng cách điệu ở vai đầy thanh lịch.",
    primary: "#ff6b81",
    secondary: "#10ac84",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 52,
    mapY: 17,
    symbol: "lotus"
  },
  {
    id: "33",
    name: "Bình Định",
    slug: "binh-dinh",
    region: "trung",
    tagline: "Đất võ Tây Sơn — Tháp Chàm rêu phong",
    desc: "Sắc đỏ son võ thuật hào hùng kết hợp vàng ánh kim từ tháp cổ Chăm Pa kỳ vĩ, tôn vinh tinh thần kiên cường thượng võ vùng đất Bình Định.",
    primary: "#c0392b",
    secondary: "#d4ac0d",
    accent: "#ffffff",
    pattern: "scales",
    mapX: 64,
    mapY: 53,
    symbol: "tower"
  },
  {
    id: "34",
    name: "Lạng Sơn 2", // Replacing to ensure exact match of 34 unique entries: Lạng Sơn exists. Let's make 34: Lạng Sơn, Bắc Ninh, Bình Định, and Lâm Đồng is already there. Wait, let's verify if we have 34 unique. Let's name this one "Quảng Ngãi"
    name: "Quảng Ngãi",
    slug: "quang-ngai",
    region: "trung",
    tagline: "Núi Ấn Sông Trà — Đảo Lý Sơn",
    desc: "Tone xanh biển ngọc kết hợp màu xám bazan của đất đá Lý Sơn, họa tiết sóng dập dìu bao bọc đảo ngọc mang hơi thở khát vọng ngư dân bám biển.",
    primary: "#138086",
    secondary: "#534666",
    accent: "#ffffff",
    pattern: "waves",
    mapX: 63,
    mapY: 53,
    symbol: "sun"
  }
];

// Official provincial-level administrative units, effective 01/07/2025.
// Source: National Assembly Resolution 202/2025/QH15.  This is deliberately
// kept as the single source of truth for every grid, filter, map marker and
// customizer selector on the site.
const DESIGN_ASSETS = Object.freeze({
  "tp-hcm": Object.freeze({
    front: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATTRUOC.png",
    back: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-MATSAU.png",
    shorts: "assets/THIẾT KẾ ÁO/1x/HO CHI MINH-QUAN.png"
  }),
  "can-tho": Object.freeze({
    front: "assets/THIẾT KẾ ÁO/1x/CANTHO-MATTRUOC.png",
    back: "assets/THIẾT KẾ ÁO/1x/CANTHO-MATSAU.png",
    shorts: "assets/THIẾT KẾ ÁO/1x/CANTHO-QUAN.png"
  })
});
const DESIGN_ASSET_DIRECTORY = "assets/THIẾT KẾ ÁO/1x/";

function makeDesignAssetKeys(province) {
  const normalize = value => value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase();
  const shortName = province.name.replace(/^Thành phố\s+/i, "");
  return [...new Set([normalize(province.name), normalize(shortName), normalize(province.slug)])];
}

function doesDesignImageExist(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth > 0);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

async function attachAvailableDesignAssets() {
  let didAttach = false;
  for (const province of PROVINCES_DATA) {
    for (const key of makeDesignAssetKeys(province)) {
      const images = {
        front: `${DESIGN_ASSET_DIRECTORY}${key}-MATTRUOC.png`,
        back: `${DESIGN_ASSET_DIRECTORY}${key}-MATSAU.png`,
        shorts: `${DESIGN_ASSET_DIRECTORY}${key}-QUAN.png`
      };
      const isCompleteSet = (await Promise.all(Object.values(images).map(doesDesignImageExist))).every(Boolean);
      if (isCompleteSet) {
        const previousImages = province.images;
        province.images = images;
        didAttach ||= !previousImages || Object.values(images).some((src, index) => src !== Object.values(previousImages)[index]);
        break;
      }
    }
  }
  return didAttach;
}

const PROVINCES_DATA = [
  ["Hà Nội", "ha-noi", "bac", "Thăng Long — Trái tim Việt Nam", 49, 18],
  ["Cao Bằng", "cao-bang", "bac", "Non nước — Biên cương", 56, 8],
  ["Tuyên Quang", "tuyen-quang", "bac", "Thủ đô kháng chiến — Sắc xanh đại ngàn", 49, 11],
  ["Lào Cai", "lao-cai", "bac", "Fansipan — Mây ngàn Tây Bắc", 42, 8],
  ["Thái Nguyên", "thai-nguyen", "bac", "Đệ nhất danh trà — Trung du xanh", 51, 15],
  ["Phú Thọ", "phu-tho", "bac", "Đất Tổ — Cội nguồn dân tộc", 46, 16],
  ["Bắc Ninh", "bac-ninh", "bac", "Quan họ — Kinh Bắc giao hòa", 53, 17],
  ["Hưng Yên", "hung-yen", "bac", "Phố Hiến — Nhãn lồng phù sa", 52, 23],
  ["Hải Phòng", "hai-phong", "bac", "Đất Cảng — Biển Đông mở lối", 55, 21],
  ["Quảng Ninh", "quang-ninh", "bac", "Vịnh Hạ Long — Di sản biển", 59, 19],
  ["Ninh Bình", "ninh-binh", "bac", "Cố đô Hoa Lư — Non nước Tràng An", 47, 28],
  ["Sơn La", "son-la", "bac", "Tây Bắc — Mùa ban nở", 38, 18],
  ["Điện Biên", "dien-bien", "bac", "Lòng chảo lịch sử — Hoa ban", 32, 16],
  ["Lai Châu", "lai-chau", "bac", "Đỉnh cao Tây Bắc — Mây núi", 34, 10],
  ["Lạng Sơn", "lang-son", "bac", "Xứ Lạng — Ải Chi Lăng", 59, 14],
  ["Thanh Hóa", "thanh-hoa", "trung", "Hào khí Lam Sơn — Trống đồng", 44, 32],
  ["Nghệ An", "nghe-an", "trung", "Sông Lam — Núi Hồng", 43, 36],
  ["Hà Tĩnh", "ha-tinh", "trung", "Núi Hồng — Biển xanh", 45, 39],
  ["Quảng Trị", "quang-tri", "trung", "Khát vọng hòa bình — Cửa ngõ miền Trung", 51, 42],
  ["Thành phố Huế", "hue", "trung", "Cố đô — Di sản bên Hương Giang", 54, 45],
  ["Đà Nẵng", "da-nang", "trung", "Thành phố biển — Cầu Rồng vươn mình", 58, 47],
  ["Quảng Ngãi", "quang-ngai", "trung", "Núi Ấn sông Trà — Đại ngàn gặp biển", 61, 51],
  ["Gia Lai", "gia-lai", "trung", "Cao nguyên — Biển hồ và đất võ", 58, 57],
  ["Khánh Hòa", "khanh-hoa", "trung", "Vịnh ngọc — Biển trời rực sáng", 66, 60],
  ["Đắk Lắk", "dak-lak", "trung", "Đại ngàn — Cà phê và biển xanh", 58, 62],
  ["Lâm Đồng", "lam-dong", "trung", "Cao nguyên — Rừng thông đến biển cát", 59, 66],
  ["Thành phố Hồ Chí Minh", "tp-hcm", "nam", "Đô thị sáng tạo — Vươn tầm quốc tế", 43, 77],
  ["Đồng Nai", "dong-nai", "nam", "Trấn Biên — Công nghiệp bứt phá", 47, 75],
  ["Tây Ninh", "tay-ninh", "nam", "Núi Bà Đen — Biên giới xanh", 40, 74],
  ["Cần Thơ", "can-tho", "nam", "Tây Đô — Sông nước Cửu Long", 37, 83],
  ["Vĩnh Long", "vinh-long", "nam", "Miệt vườn — Ba dòng phù sa", 42, 82],
  ["Đồng Tháp", "dong-thap", "nam", "Sen hồng — Đồng bằng trù phú", 36, 79],
  ["Cà Mau", "ca-mau", "nam", "Cực Nam — Rừng ngập mặn Đất Mũi", 32, 92],
  ["An Giang", "an-giang", "nam", "Thất Sơn — Biên cương sông nước", 33, 80]
].map(([name, slug, region, tagline, mapX, mapY], index) => {
  const palettes = [
    ["#da251d", "#ffbe00", "#ffffff"], ["#0b4f6c", "#f4b942", "#ffffff"],
    ["#1b5e20", "#d4a017", "#ffffff"], ["#4b0082", "#e8d7a9", "#ffffff"],
    ["#00796b", "#ffd54f", "#ffffff"], ["#8b4513", "#f5deb3", "#ffffff"]
  ];
  const symbols = ["dragon", "mountain", "star", "mountain", "leaf", "lotus", "lotus", "leaf", "anchor", "dragon", "lotus", "mountain", "star", "mountain", "mountain", "star", "star", "waves", "star", "lotus", "bridge", "sun", "mountain", "sun", "leaf", "pine", "tower", "star", "mountain", "boat", "leaf", "lotus", "leaf", "mountain"];
  const patterns = ["scales", "waves", "stripes", "mesh", "coffee"];
  const [primary, secondary, accent] = palettes[index % palettes.length];
  return {
    id: String(index + 1).padStart(2, "0"), name, slug, region, tagline, mapX, mapY,
    desc: `Thiết kế tôn vinh bản sắc của ${name} trong không gian hành chính mới, kết nối văn hóa, thiên nhiên và nhịp sống địa phương.`,
    primary, secondary, accent, pattern: patterns[index % patterns.length], symbol: symbols[index],
    numberFont: slug === "tp-hcm" ? "HochiminhNumber" : null,
    textColor: slug === "tp-hcm" ? "#f7f3e5" : "#ffffff",
    images: DESIGN_ASSETS[slug] || null
  };
});

// --- DYNAMIC SVG JERSEY ENGINE ---
function generateJerseySVG(province, side = 'front', customName = 'VIETNAM', customNumber = '34', customColors = null) {
  const p = customColors ? { ...province, ...customColors } : province;
  const name = (customName || "VIETNAM").toUpperCase().substring(0, 16);
  const number = (customNumber || "34").substring(0, 2);
  const numberFont = p.numberFont || "'Outfit', sans-serif";
  const numberWeight = p.numberFont ? "400" : "900";
  
  // Custom Local Symbol Renderers based on key symbols
  let badgeSVG = '';
  if (p.symbol === 'dragon') {
    badgeSVG = `<path d="M100 83 C105 83, 108 85, 108 90 C108 95, 100 97, 100 100 C100 97, 92 95, 92 90 C92 85, 95 83, 100 83 Z" fill="${p.accent}" opacity="0.8"/>
                <path d="M96 90 Q100 86 104 90 Q100 94 96 90" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else if (p.symbol === 'tower') {
    badgeSVG = `<rect x="96" y="84" width="8" height="12" fill="${p.accent}" rx="1"/>
                <polygon points="94,84 100,78 106,84" fill="${p.secondary}"/>`;
  } else if (p.symbol === 'bridge') {
    badgeSVG = `<path d="M92 92 Q100 82 108 92" fill="none" stroke="${p.accent}" stroke-width="2"/>
                <line x1="100" y1="83" x2="100" y2="92" stroke="${p.accent}" stroke-width="1"/>`;
  } else if (p.symbol === 'anchor') {
    badgeSVG = `<line x1="100" y1="82" x2="100" y2="96" stroke="${p.accent}" stroke-width="2"/>
                <circle cx="100" cy="84" r="2" fill="none" stroke="${p.accent}" stroke-width="1.5"/>
                <path d="M93 90 Q100 98 107 90" fill="none" stroke="${p.accent}" stroke-width="2"/>`;
  } else if (p.symbol === 'boat') {
    badgeSVG = `<path d="M92 90 L108 90 L104 96 L96 96 Z" fill="${p.accent}"/>
                <line x1="100" y1="82" x2="100" y2="90" stroke="${p.accent}" stroke-width="1.5"/>`;
  } else if (p.symbol === 'lotus') {
    badgeSVG = `<path d="M100 82 C103 85, 106 90, 100 97 C94 90, 97 85, 100 82 Z" fill="${p.accent}"/>
                <path d="M100 85 C97 88, 93 92, 100 97 C107 92, 103 88, 100 85 Z" fill="${p.secondary}" opacity="0.6"/>`;
  } else if (p.symbol === 'mountain') {
    badgeSVG = `<polygon points="100,81 92,96 108,96" fill="${p.accent}"/>
                <polygon points="100,85 95,96 105,96" fill="${p.primary}" opacity="0.7"/>`;
  } else if (p.symbol === 'leaf') {
    badgeSVG = `<path d="M95 90 Q100 80 105 90 Q100 97 95 90 Z" fill="${p.accent}"/>
                <path d="M100 83 L100 94" fill="none" stroke="${p.primary}" stroke-width="1"/>`;
  } else { // 'sun' or default 'star'
    badgeSVG = `<polygon points="100,80 103,86 110,86 105,90 107,96 100,92 93,96 95,90 90,86 97,86" fill="${p.accent}"/>`;
  }

  // Generate SVG code
  let svg = `
  <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" class="jersey-svg">
    <defs>
      <!-- Shadow Filter -->
      <filter id="j-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
      
      <!-- Pattern overlays -->
      <pattern id="pat-scales-${p.id}" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M0,10 Q5,0 10,10 T20,10 Q15,20 10,20 T0,20 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.25"/>
      </pattern>
      <pattern id="pat-stripes-${p.id}" width="16" height="16" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="16" stroke="${p.secondary}" stroke-width="3" opacity="0.25"/>
      </pattern>
      <pattern id="pat-waves-${p.id}" width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0,6 Q6,1 12,6 T24,6" fill="none" stroke="${p.secondary}" stroke-width="1.5" opacity="0.25"/>
      </pattern>
      <pattern id="pat-coffee-${p.id}" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M15,5 L19,13 L28,13 L21,19 L24,27 L15,22 L6,27 L9,19 L2,13 L11,13 Z" fill="none" stroke="${p.secondary}" stroke-width="1" opacity="0.2"/>
      </pattern>
      <pattern id="pat-mesh-${p.id}" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="3" cy="3" r="1.2" fill="${p.secondary}" opacity="0.25"/>
      </pattern>
    </defs>
    
    <g filter="url(#j-shadow)">
  `;

  if (side === 'front') {
    // --- FRONT SIDE VIEW ---
    svg += `
      <!-- Left Sleeve -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/> <!-- Left cuff -->
      
      <!-- Right Sleeve -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/> <!-- Right cuff -->

      <!-- Main Body -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 52 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Collar -->
      <path d="M 80 30 Q 100 52 120 30 L 118 33 Q 100 53 82 33 Z" fill="${p.secondary}"/>
      <path d="M 98 48 L 102 48 L 100 52 Z" fill="${p.accent}"/>

      <!-- Brand Logo (Right Chest) -->
      <g transform="translate(72, 85) scale(0.06)">
        <polygon points="10,40 40,10 70,40 60,50 40,30 20,50" fill="${p.accent}" opacity="0.85"/>
        <polygon points="10,65 40,35 70,65 60,75 40,55 20,75" fill="${p.accent}" opacity="0.85"/>
      </g>
      
      <!-- Custom Emblem / Badge (Left Chest) -->
      <g transform="translate(18, 2)">
        ${badgeSVG}
      </g>
      
      <!-- Center Sponsor / Custom Name Text -->
      <text x="100" y="130" font-family="'Outfit', sans-serif" font-weight="900" font-size="11" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.85">
        ${p.name.toUpperCase()}
      </text>
      
      <!-- Technical lines/decorations -->
      <line x1="85" y1="138" x2="115" y2="138" stroke="${p.secondary}" stroke-width="1.5" opacity="0.6"/>
      <circle cx="100" cy="180" r="15" fill="none" stroke="${p.secondary}" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.25"/>
      <text x="100" y="184" font-family="'Outfit', sans-serif" font-weight="800" font-size="10" fill="${p.secondary}" text-anchor="middle" opacity="0.3">${p.id}</text>
    `;
  } else {
    // --- BACK SIDE VIEW ---
    svg += `
      <!-- Left Sleeve (Back view flips side) -->
      <path d="M 80 30 L 40 45 L 25 75 L 45 85 L 55 80 Z" fill="${p.primary}"/>
      <path d="M 25 75 L 45 85 L 43 89 L 23 79 Z" fill="${p.secondary}"/>
      
      <!-- Right Sleeve (Back view flips side) -->
      <path d="M 120 30 L 160 45 L 175 75 L 155 85 L 145 80 Z" fill="${p.primary}"/>
      <path d="M 175 75 L 155 85 L 157 89 L 177 79 Z" fill="${p.secondary}"/>

      <!-- Main Body -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="${p.primary}"/>
      
      <!-- Cultural Pattern Overlay -->
      <path d="M 80 30 Q 100 35 120 30 L 145 80 L 140 210 Q 100 215 60 210 L 55 80 Z" fill="url(#pat-${p.pattern}-${p.id})"/>
      
      <!-- Side Panels -->
      <path d="M 55 80 L 60 210 L 63 210 L 58 80 Z" fill="${p.secondary}"/>
      <path d="M 145 80 L 140 210 L 137 210 L 142 80 Z" fill="${p.secondary}"/>
      
      <!-- Back Neck Trim -->
      <path d="M 80 30 Q 100 35 120 30 L 118 33 Q 100 38 82 33 Z" fill="${p.secondary}"/>

      <!-- Custom Player Name curved path / straight -->
      <text x="100" y="75" font-family="'Outfit', sans-serif" font-weight="800" font-size="12" fill="${p.accent}" letter-spacing="3" text-anchor="middle" opacity="0.9">
        ${name}
      </text>
      
      <!-- Custom Player Number -->
      <text x="100" y="145" font-family="${numberFont}" font-weight="${numberWeight}" font-size="62" fill="${p.accent}" text-anchor="middle" letter-spacing="-1">
        ${number}
      </text>
      
      <!-- VN 34 Campaign Emblem at Back Neck -->
      <g transform="translate(95, 42) scale(0.2)" opacity="0.7">
        <polygon points="25,0 50,20 50,50 0,50 0,20" fill="${p.secondary}"/>
        <text x="25" y="38" font-family="'Outfit', sans-serif" font-weight="800" font-size="20" fill="${p.primary}" text-anchor="middle">34</text>
      </g>
    `;
  }

  svg += `
    </g>
  </svg>
  `;
  return svg;
}

// --- STATE MANAGEMENT ---
const state = {
  activeRegion: 'all',
  searchQuery: '',
  activeMapProvince: PROVINCES_DATA.find(p => p.slug === 'ca-mau'), // Default map province
  customizerProvince: PROVINCES_DATA[0],
  customizerName: 'VIETNAM',
  customizerNumber: '34',
  customizerSide: 'front'
};

// --- DOM ELEMENTS ---
let mapInfoPanel, mapPlaceholder, mapDetailView;
let collectionGrid;
let searchInput;
let filterTabs;
let customizerPreview, customizerForm;
let detailModal;

// --- INITIALIZER ---
document.addEventListener("DOMContentLoaded", () => {
  // Bind Nav Transition on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Layout Toggle Switch Logic
  const layoutToggle = document.getElementById("layout-toggle");
  if (layoutToggle) {
    layoutToggle.checked = true; // Default is checked (Full version)
    layoutToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        document.body.classList.remove("compact-mode");
      } else {
        document.body.classList.add("compact-mode");
      }
      // Re-trigger scroll reveal calculations
      setTimeout(() => {
        const revealElements = document.querySelectorAll(".reveal");
        revealElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("active");
          }
        });
      }, 50);
    });
  }

  // Init Elements
  mapInfoPanel = document.getElementById("map-info-panel");
  mapPlaceholder = document.getElementById("map-placeholder");
  mapDetailView = document.getElementById("map-detail-view");
  collectionGrid = document.getElementById("collection-grid");
  searchInput = document.getElementById("search-input");
  filterTabs = document.querySelectorAll(".filter-tab");
  customizerPreview = document.getElementById("customizer-preview");
  customizerForm = document.getElementById("customizer-form");
  detailModal = document.getElementById("detail-modal");

  // Load Engines
  initInteractiveMap();
  initCollectionGrid();
  initSearchFilter();
  initCustomizer();
  initShowcaseMarquee();
  initProductTech();
  initScrollAnimations();
  
  // Load engaging features
  initCustomCursor();
  initTactileAudio();
  initCardTiltEffect();
  initConfettiBurst();
  
  // Load Default Map Province View
  selectMapProvince(state.activeMapProvince.slug);

  // A complete file set placed in the design folder is linked automatically.
  // Example: CANTHO-MATTRUOC.png, CANTHO-MATSAU.png and CANTHO-QUAN.png.
  void attachAvailableDesignAssets().then(didAttach => {
    if (!didAttach) return;
    applyFilter();
    selectMapProvince(state.activeMapProvince.slug);
  });
});

// --- INTERACTIVE MAP ENGINE ---
function initInteractiveMap() {
  const mapSvg = document.getElementById("vietnam-svg");
  if (!mapSvg) return;

  // Render glowing hotspots on map based on coordinates
  PROVINCES_DATA.forEach(p => {
    const hotspotG = document.createElementNS("http://www.w3.org/2000/svg", "g");
    hotspotG.setAttribute("class", `map-hotspot hotspot-${p.slug}`);
    hotspotG.setAttribute("transform", `translate(${p.mapX}, ${p.mapY})`);
    hotspotG.setAttribute("data-slug", p.slug);

    // Glowing wave ring
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.setAttribute("cx", "0");
    ring.setAttribute("cy", "0");
    ring.setAttribute("r", "5");
    ring.setAttribute("class", "hotspot-ring");
    
    // Core dot
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", "0");
    dot.setAttribute("cy", "0");
    dot.setAttribute("r", "4");
    dot.setAttribute("class", "hotspot-dot");

    hotspotG.appendChild(ring);
    hotspotG.appendChild(dot);
    mapSvg.appendChild(hotspotG);

    // Click Event
    hotspotG.addEventListener("click", () => {
      selectMapProvince(p.slug);
    });
  });
}

function selectMapProvince(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province) return;

  state.activeMapProvince = province;

  // Toggle map markers active state
  document.querySelectorAll(".map-hotspot").forEach(el => {
    el.classList.remove("active");
  });
  const activeMarker = document.querySelector(`.map-hotspot[data-slug="${slug}"]`);
  if (activeMarker) activeMarker.classList.add("active");

  // Show detailed panel info
  if (mapPlaceholder) mapPlaceholder.style.display = "none";
  if (mapDetailView) {
    mapDetailView.innerHTML = `
      <div class="province-meta">
        <span class="province-num">VN / ${province.id}</span>
        <span class="province-reg">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h3 class="province-title">${province.name}</h3>
      <div class="province-concept">${province.tagline}</div>
      <p class="province-desc">${province.desc}</p>
      
      <div class="province-preview-box">
        <div class="province-mini-jersey">
          ${province.images ? `<img class="province-mini-photo" src="${province.images.front}" alt="Mặt trước áo ${province.name}">` : generateJerseySVG(province, 'front')}
        </div>
        <ul class="province-specs">
          <li>
            <span>Chủ đạo</span>
            <span style="color: ${province.primary}; font-weight: 700;">■ ${province.primary}</span>
          </li>
          <li>
            <span>Phối hợp</span>
            <span style="color: ${province.secondary}; font-weight: 700;">■ ${province.secondary}</span>
          </li>
          <li>
            <span>Chi tiết</span>
            <span style="color: ${province.accent}; font-weight: 700;">■ ${province.accent}</span>
          </li>
          <li>
            <span>Biểu tượng</span>
            <span style="text-transform: capitalize;">${province.symbol}</span>
          </li>
        </ul>
      </div>
      
      <button class="btn-primary" onclick="openDetailsModal('${province.slug}')">XEM THIẾT KẾ CHI TIẾT</button>
    `;
    mapDetailView.classList.add("active");
  }
}

// --- 34 PROVINCE GRID GALLERY ENGINE ---
function initCollectionGrid() {
  renderGrid(PROVINCES_DATA);
}

function renderGrid(data) {
  if (!collectionGrid) return;
  collectionGrid.innerHTML = "";

  if (data.length === 0) {
    collectionGrid.innerHTML = `
      <div class="no-results">
        <h3>Không tìm thấy tỉnh thành nào phù hợp</h3>
        <p>Vui lòng thử tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "card-perspective reveal";
    card.setAttribute("data-region", p.region);
    card.innerHTML = `
      <div class="card-inner">
        <!-- Front of the Card -->
        <div class="card-front">
          <div class="card-top">
            <span class="card-num">VN / ${p.id}</span>
            <span class="card-region">${p.region === 'bac' ? 'MIỀN BẮC' : p.region === 'trung' ? 'MIỀN TRUNG' : 'MIỀN NAM'}</span>
          </div>
          <div class="card-jersey-area">
            ${p.images
              ? `<img class="card-province-photo" src="${p.images.front}" alt="Mặt trước áo ${p.name}">`
              : generateJerseySVG(p, 'front')}
          </div>
          <div class="card-bottom">
            <h3 class="card-title">${p.name}</h3>
            <span class="card-concept">${p.tagline}</span>
          </div>
        </div>
        
        <!-- Back of the Card -->
        <div class="card-back">
          <div class="card-back-content">
            <div>
              <h3 class="card-back-title">${p.name}</h3>
              <p class="card-back-desc">${p.desc.substring(0, 100)}...</p>
              
              <div class="card-back-specs">
                <div class="card-back-spec">
                  <span>Thiết kế:</span>
                  <span>Chính hãng</span>
                </div>
                <div class="card-back-spec">
                  <span>Chất liệu:</span>
                  <span>Cool-Air Mesh</span>
                </div>
                <div class="card-back-spec">
                  <span>Form dáng:</span>
                  <span>Athletic Fit</span>
                </div>
              </div>
            </div>
            
            <button class="card-cta" onclick="openDetailsModal('${p.slug}')">
              XEM THIẾT KẾ
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
    collectionGrid.appendChild(card);
    
    // Trigger immediate animation frame update
    setTimeout(() => {
      card.classList.add("active");
    }, 50);
  });

  // Re-bind tilt effects
  if (typeof initCardTiltEffect === 'function') {
    initCardTiltEffect();
  }
}

// --- SEARCH & FILTER CONTROLLER ---
function initSearchFilter() {
  if (!searchInput) return;

  // Search Input listener
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilter();
  });

  // Region Filter Tabs listener
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeRegion = tab.getAttribute("data-filter");
      applyFilter();
    });
  });
}

function applyFilter() {
  const filtered = PROVINCES_DATA.filter(p => {
    const matchesRegion = state.activeRegion === 'all' || p.region === state.activeRegion;
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery) || 
                          p.tagline.toLowerCase().includes(state.searchQuery) ||
                          p.desc.toLowerCase().includes(state.searchQuery) ||
                          p.id.includes(state.searchQuery);
    return matchesRegion && matchesSearch;
  });
  renderGrid(filtered);
}

// --- JERSEY CUSTOMIZER PLAYGROUND ENGINE ---
function initCustomizer() {
  const selectProv = document.getElementById("cust-province");
  const inputName = document.getElementById("cust-name");
  const inputNum = document.getElementById("cust-number");
  const viewBtns = document.querySelectorAll(".view-btn");
  
  const pickerPrimary = document.getElementById("cust-color-primary");
  const pickerSecondary = document.getElementById("cust-color-secondary");
  const pickerAccent = document.getElementById("cust-color-accent");

  if (!selectProv || !customizerPreview) return;

  // Populate province options
  PROVINCES_DATA.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.slug;
    opt.textContent = `${p.id} - ${p.name}`;
    selectProv.appendChild(opt);
  });

  // Form listeners
  selectProv.addEventListener("change", (e) => {
    state.customizerProvince = PROVINCES_DATA.find(p => p.slug === e.target.value);
    
    // Sync color pickers with new province default colors
    if (pickerPrimary) pickerPrimary.value = state.customizerProvince.primary;
    if (pickerSecondary) pickerSecondary.value = state.customizerProvince.secondary;
    if (pickerAccent) pickerAccent.value = state.customizerProvince.accent;

    updateCustomizerPreview();
  });

  inputName.addEventListener("input", (e) => {
    state.customizerName = e.target.value;
    updateCustomizerPreview();
  });

  inputNum.addEventListener("input", (e) => {
    state.customizerNumber = e.target.value;
    updateCustomizerPreview();
  });

  viewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      viewBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.customizerSide = btn.getAttribute("data-view");
      updateCustomizerPreview();
    });
  });

  if (pickerPrimary) pickerPrimary.addEventListener("input", updateCustomizerPreview);
  if (pickerSecondary) pickerSecondary.addEventListener("input", updateCustomizerPreview);
  if (pickerAccent) pickerAccent.addEventListener("input", updateCustomizerPreview);

  // Set initial picker values
  if (pickerPrimary) pickerPrimary.value = state.customizerProvince.primary;
  if (pickerSecondary) pickerSecondary.value = state.customizerProvince.secondary;
  if (pickerAccent) pickerAccent.value = state.customizerProvince.accent;

  // Initial load
  updateCustomizerPreview();
}

function updateCustomizerPreview() {
  if (!customizerPreview) return;

  const pickerPrimary = document.getElementById("cust-color-primary");
  const pickerSecondary = document.getElementById("cust-color-secondary");
  const pickerAccent = document.getElementById("cust-color-accent");

  const customColors = {
    primary: pickerPrimary ? pickerPrimary.value : state.customizerProvince.primary,
    secondary: pickerSecondary ? pickerSecondary.value : state.customizerProvince.secondary,
    accent: pickerAccent ? pickerAccent.value : state.customizerProvince.accent
  };

  const svgMarkup = generateJerseySVG(
    state.customizerProvince,
    state.customizerSide,
    state.customizerName,
    state.customizerNumber,
    customColors
  );
  customizerPreview.innerHTML = svgMarkup;
}

// --- PRODUCT DETAILS MODAL ---
const HCM_DEFAULT_PRINT_SETTINGS = Object.freeze({
  name: Object.freeze({ x: 49.97080386686563, y: 28.007621121393576, size: 15 }),
  shirtNumber: Object.freeze({ x: 50.80127165379874, y: 45.862819814915625, size: 58 }),
  shortsNumber: Object.freeze({ x: 81.67190446260214, y: 82.58956631049654, size: 26 })
});

function getDefaultPrintSettings() {
  return {
    name: { ...HCM_DEFAULT_PRINT_SETTINGS.name },
    shirtNumber: { ...HCM_DEFAULT_PRINT_SETTINGS.shirtNumber },
    shortsNumber: { ...HCM_DEFAULT_PRINT_SETTINGS.shortsNumber }
  };
}

function escapePrintText(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
}

function renderModalJerseyPair(province, name, number, printSettings = null) {
  if (province.images) {
    const printedName = escapePrintText(name).toUpperCase();
    const printedNumber = escapePrintText(number);
    const settings = printSettings || getDefaultPrintSettings();
    const printStyle = setting => `--print-x:${setting.x}%;--print-y:${setting.y}%;--print-size:${setting.size}px;--print-color:${province.textColor || "#ffffff"};--number-font:${province.numberFont || "var(--font-headline)"};--number-weight:${province.numberFont ? 400 : 900};`;
    return `
      <div class="modal-jersey-view">
        <span class="modal-jersey-label">MẶT TRƯỚC</span>
        <img class="modal-product-photo" src="${province.images.front}" alt="Mặt trước áo ${province.name}">
      </div>
      <div class="modal-jersey-view">
        <span class="modal-jersey-label">MẶT SAU &amp; QUẦN</span>
        <div class="modal-apparel-bottom">
          <div class="modal-print-stage modal-back-print-stage">
            <img class="modal-product-photo" src="${province.images.back}" alt="Mặt sau áo ${province.name}">
            <span class="modal-print-name modal-draggable-print" data-print-target="name" style="${printStyle(settings.name)}"><span class="modal-print-value">${printedName}</span><input class="modal-inline-size-slider" type="range" min="8" max="22" value="${settings.name.size}" aria-label="Điều chỉnh cỡ tên"></span>
            <span class="modal-print-number modal-draggable-print" data-print-target="shirtNumber" style="${printStyle(settings.shirtNumber)}"><span class="modal-print-value">${printedNumber}</span><input class="modal-inline-size-slider" type="range" min="14" max="72" value="${settings.shirtNumber.size}" aria-label="Điều chỉnh cỡ số áo"></span>
          </div>
          <div class="modal-print-stage modal-shorts-print-stage">
            <img class="modal-shorts-photo" src="${province.images.shorts}" alt="Quần áo ${province.name}">
            <span class="modal-shorts-number modal-draggable-print" data-print-target="shortsNumber" style="${printStyle(settings.shortsNumber)}"><span class="modal-print-value">${printedNumber}</span><input class="modal-inline-size-slider" type="range" min="14" max="42" value="${settings.shortsNumber.size}" aria-label="Điều chỉnh cỡ số quần"></span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-jersey-view">
      <span class="modal-jersey-label">MẶT TRƯỚC</span>
      ${generateJerseySVG(province, "front", name, number)}
    </div>
    <div class="modal-jersey-view">
      <span class="modal-jersey-label">MẶT SAU</span>
      ${generateJerseySVG(province, "back", name, number)}
    </div>
  `;
}

window.openDetailsModal = function(slug) {
  const province = PROVINCES_DATA.find(p => p.slug === slug);
  if (!province || !detailModal) return;

  const printSettings = getDefaultPrintSettings();

  const modalContainer = detailModal.querySelector(".modal-content");
  modalContainer.innerHTML = `
    <button class="modal-close" onclick="closeDetailsModal()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <div class="modal-visual">
      ${renderModalJerseyPair(province, province.name, province.id, printSettings)}
    </div>
    <div class="modal-info">
      <div class="modal-meta">
        <span class="modal-num">VN / COLLECTION ${province.id}</span>
        <span class="modal-region">${province.region === 'bac' ? 'Miền Bắc' : province.region === 'trung' ? 'Miền Trung' : 'Miền Nam'}</span>
      </div>
      <h2 class="modal-title">${province.name}</h2>
      <div class="modal-concept">${province.tagline}</div>
      <p class="modal-desc">${province.desc}</p>
      
      <ul class="modal-specs">
        <li>
          <span>Chất liệu vải</span>
          <span>Cool-Air Mesh / Polyester 100%</span>
        </li>
        <li>
          <span>Công nghệ in</span>
          <span>Sublimation Print (In chuyển nhiệt 3D)</span>
        </li>
        <li>
          <span>Form dáng</span>
          <span>Athletic Fit / Thể thao năng động</span>
        </li>
        <li>
          <span>Mã sản phẩm</span>
          <span>VTN-${province.id}</span>
        </li>
      </ul>

      <div class="modal-personalization" aria-label="Tùy chỉnh tên và số áo">
        <div class="modal-personalization-heading">
          <h3>THÊM TÊN / SỐ ÁO</h3>
          <span>Cập nhật tức thì trên áo</span>
        </div>
        <div class="modal-personalization-fields">
          <label>
            <span>Tên in áo</span>
            <input id="modal-custom-name" type="text" value="${province.name}" maxlength="16" autocomplete="off">
          </label>
          <label>
            <span>Số áo</span>
            <input id="modal-custom-number" type="text" value="${province.id}" maxlength="2" inputmode="numeric" autocomplete="off">
          </label>
        </div>
      </div>
      
      <div class="modal-action-box">
        <button class="btn-primary" onclick="orderJersey('${province.name}')">ĐẶT MUA NGAY</button>
        <button class="btn-secondary" id="modal-final-preview" type="button">XEM BẢN ĐÃ CHỈNH</button>
        <button class="btn-secondary" id="modal-reset-customization" type="button">ĐẶT LẠI</button>
      </div>
    </div>
  `;

  const jerseyPreview = modalContainer.querySelector(".modal-visual");
  const nameInput = modalContainer.querySelector("#modal-custom-name");
  const numberInput = modalContainer.querySelector("#modal-custom-number");
  const finalPreviewButton = modalContainer.querySelector("#modal-final-preview");
  const resetButton = modalContainer.querySelector("#modal-reset-customization");
  const bindPrintDragging = () => {
    modalContainer.querySelectorAll(".modal-draggable-print").forEach(element => {
      const beginInteraction = (event, interactionType) => {
        const draggableElement = event.currentTarget;
        const target = draggableElement.dataset.printTarget;
        const stage = draggableElement.closest(".modal-print-stage");
        if (event.target.closest(".modal-inline-size-slider")) return;
        modalContainer.querySelectorAll(".modal-draggable-print").forEach(item => item.classList.remove("is-selected"));
        draggableElement.classList.add("is-selected");
        const pointFromEvent = source => source.touches ? (source.touches[0] || source.changedTouches[0]) : source;
        const initialPoint = pointFromEvent(event);
        const moveEventName = interactionType === "touch" ? "touchmove" : "mousemove";
        const endEventName = interactionType === "touch" ? "touchend" : "mouseup";
        event.preventDefault();
        const move = moveEvent => {
          const point = pointFromEvent(moveEvent);
          if (moveEvent.cancelable) moveEvent.preventDefault();
          const bounds = stage.getBoundingClientRect();
          printSettings[target].x = Math.max(5, Math.min(95, ((point.clientX - bounds.left) / bounds.width) * 100));
          printSettings[target].y = Math.max(5, Math.min(95, ((point.clientY - bounds.top) / bounds.height) * 100));
          draggableElement.style.setProperty("--print-x", `${printSettings[target].x}%`);
          draggableElement.style.setProperty("--print-y", `${printSettings[target].y}%`);
        };
        const stopMove = () => window.removeEventListener(moveEventName, move);
        window.addEventListener(moveEventName, move, { passive: false });
        window.addEventListener(endEventName, stopMove, { once: true });
      };
      element.addEventListener("mousedown", event => beginInteraction(event, "mouse"));
      element.addEventListener("touchstart", event => beginInteraction(event, "touch"), { passive: false });
      const sizeSlider = element.querySelector(".modal-inline-size-slider");
      sizeSlider.addEventListener("input", event => {
        const target = element.dataset.printTarget;
        printSettings[target].size = Number(event.target.value);
        element.style.setProperty("--print-size", `${printSettings[target].size}px`);
      });
    });
  };
  const updateModalJersey = () => {
    const name = nameInput.value.trim() || province.name;
    numberInput.value = numberInput.value.replace(/\D/g, "").slice(0, 2);
    const number = numberInput.value || province.id;
    jerseyPreview.innerHTML = renderModalJerseyPair(province, name, number, printSettings);
    bindPrintDragging();
  };

  nameInput.addEventListener("input", updateModalJersey);
  numberInput.addEventListener("input", updateModalJersey);
  resetButton.addEventListener("click", () => {
    nameInput.value = province.name;
    numberInput.value = province.id;
    const defaults = getDefaultPrintSettings();
    Object.assign(printSettings.name, defaults.name);
    Object.assign(printSettings.shirtNumber, defaults.shirtNumber);
    Object.assign(printSettings.shortsNumber, defaults.shortsNumber);
    updateModalJersey();
  });
  finalPreviewButton.addEventListener("click", () => {
    const name = nameInput.value.trim() || province.name;
    const number = numberInput.value.replace(/\D/g, "").slice(0, 2) || province.id;
    const liveSnapshot = document.createElement("div");
    liveSnapshot.innerHTML = jerseyPreview.innerHTML;
    liveSnapshot.querySelectorAll(".is-selected").forEach(element => element.classList.remove("is-selected"));
    const preview = document.createElement("div");
    preview.className = "final-preview-modal";
    preview.innerHTML = `
      <div class="final-preview-panel" role="dialog" aria-modal="true" aria-label="Bản thiết kế đã chỉnh">
        <button class="final-preview-close" type="button" aria-label="Đóng xem trước">×</button>
        <div class="final-preview-header">
          <div><span>BẢN THIẾT KẾ ĐÃ CHỈNH</span><strong>${province.name}</strong></div>
          <div class="final-preview-tools">
            <button type="button" data-zoom="out" aria-label="Thu nhỏ">−</button>
            <output id="final-preview-zoom">100%</output>
            <button type="button" data-zoom="in" aria-label="Phóng to">+</button>
          </div>
        </div>
        <div class="final-preview-viewport">
          <div class="final-preview-artwork">
            ${liveSnapshot.innerHTML}
          </div>
        </div>
        ${province.images ? `
          <div class="final-preview-gallery" aria-label="Xem từng hình sản phẩm">
            <button type="button" data-preview-view="total"><span class="preview-total-icon">▦</span><span>TỔNG THỂ</span></button>
            <button type="button" data-preview-view="front"><img src="${province.images.front}" alt="Thân trước"><span>THÂN TRƯỚC</span></button>
            <button type="button" data-preview-view="back"><img src="${province.images.back}" alt="Thân sau"><span>THÂN SAU</span></button>
            <button type="button" data-preview-view="shorts"><img src="${province.images.shorts}" alt="Quần"><span>QUẦN</span></button>
          </div>
        ` : ""}
        <p>Dùng nút + / − hoặc lăn chuột để phóng to, thu nhỏ.</p>
      </div>
    `;
    document.body.appendChild(preview);
    let zoom = 1;
    let panX = 0;
    let panY = 0;
    const artwork = preview.querySelector(".final-preview-artwork");
    const zoomOutput = preview.querySelector("#final-preview-zoom");
    const viewport = preview.querySelector(".final-preview-viewport");
    const syncPrintScale = () => {
      artwork.querySelectorAll(".modal-draggable-print").forEach(print => {
        const target = print.dataset.printTarget;
        const original = jerseyPreview.querySelector(`.modal-draggable-print[data-print-target="${target}"]`);
        const originalStage = original?.closest(".modal-print-stage");
        const previewStage = print.closest(".modal-print-stage");
        if (!original || !originalStage || !previewStage) return;
        const originalSize = parseFloat(getComputedStyle(original).fontSize);
        const scale = previewStage.getBoundingClientRect().width / originalStage.getBoundingClientRect().width;
        print.style.setProperty("--print-size", `${originalSize * scale}px`);
      });
    };
    const setZoom = value => {
      zoom = Math.max(0.65, Math.min(2.5, value));
      if (zoom <= 1) { panX = 0; panY = 0; }
      artwork.style.setProperty("--preview-zoom", zoom);
      artwork.style.setProperty("--preview-pan-x", `${panX}px`);
      artwork.style.setProperty("--preview-pan-y", `${panY}px`);
      viewport.classList.toggle("is-zoomed", zoom > 1);
      zoomOutput.value = `${Math.round(zoom * 100)}%`;
      zoomOutput.textContent = `${Math.round(zoom * 100)}%`;
    };
    requestAnimationFrame(syncPrintScale);
    preview.querySelector(".final-preview-close").addEventListener("click", () => preview.remove());
    preview.addEventListener("click", event => { if (event.target === preview) preview.remove(); });
    preview.querySelectorAll("[data-zoom]").forEach(button => button.addEventListener("click", () => setZoom(zoom + (button.dataset.zoom === "in" ? 0.2 : -0.2))));
    viewport.addEventListener("wheel", event => {
      event.preventDefault();
      setZoom(zoom + (event.deltaY < 0 ? 0.1 : -0.1));
    }, { passive: false });
    const startPan = event => {
      if (zoom <= 1) return;
      const point = event.touches ? event.touches[0] : event;
      const startX = point.clientX;
      const startY = point.clientY;
      const initialPanX = panX;
      const initialPanY = panY;
      const move = moveEvent => {
        const movePoint = moveEvent.touches ? moveEvent.touches[0] : moveEvent;
        if (moveEvent.cancelable) moveEvent.preventDefault();
        panX = initialPanX + movePoint.clientX - startX;
        panY = initialPanY + movePoint.clientY - startY;
        artwork.style.setProperty("--preview-pan-x", `${panX}px`);
        artwork.style.setProperty("--preview-pan-y", `${panY}px`);
      };
      const stop = () => {
        window.removeEventListener(event.touches ? "touchmove" : "mousemove", move);
      };
      window.addEventListener(event.touches ? "touchmove" : "mousemove", move, { passive: false });
      window.addEventListener(event.touches ? "touchend" : "mouseup", stop, { once: true });
    };
    viewport.addEventListener("mousedown", startPan);
    viewport.addEventListener("touchstart", startPan, { passive: false });
    const renderPreviewView = view => {
      const source = document.createElement("div");
      source.innerHTML = jerseyPreview.innerHTML;
      source.querySelectorAll(".is-selected").forEach(element => element.classList.remove("is-selected"));
      if (view === "total") return source.innerHTML;
      const views = source.querySelectorAll(".modal-jersey-view");
      if (view === "front") return views[0].outerHTML;
      const productStage = view === "back" ? source.querySelector(".modal-back-print-stage") : source.querySelector(".modal-shorts-print-stage");
      const label = view === "back" ? "MẶT SAU" : "QUẦN";
      return `<div class="modal-jersey-view"><span class="modal-jersey-label">${label}</span><div class="modal-apparel-bottom modal-single-apparel">${productStage.outerHTML}</div></div>`;
    };
    preview.querySelectorAll("[data-preview-view]").forEach(button => button.addEventListener("click", () => {
      artwork.innerHTML = renderPreviewView(button.dataset.previewView);
      setZoom(1);
      requestAnimationFrame(syncPrintScale);
    }));
  });
  bindPrintDragging();

  detailModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scroll
};

window.closeDetailsModal = function() {
  if (!detailModal) return;
  detailModal.classList.remove("active");
  document.body.style.overflow = ""; // Enable scroll
};

window.loadInCustomizer = function(slug) {
  closeDetailsModal();
  const selectProv = document.getElementById("cust-province");
  if (selectProv) {
    selectProv.value = slug;
    selectProv.dispatchEvent(new Event('change'));
    // Smooth scroll to customizer section
    document.getElementById("personalization").scrollIntoView({ behavior: 'smooth' });
  }
};

window.orderJersey = function(provName) {
  alert(`Cảm ơn bạn đã quan tâm! Bộ phận hỗ trợ đặt áo cho tỉnh thành [${provName}] sẽ liên hệ với bạn trong giây lát.`);
};

// --- SHOWCASE MARQUEE COMPONENT ---
function initShowcaseMarquee() {
  const marquee = document.getElementById("marquee-content");
  if (!marquee) return;

  // Clear original
  marquee.innerHTML = "";

  // Render all 34 jerseys inside marquee
  PROVINCES_DATA.forEach(p => {
    const item = document.createElement("div");
    item.className = "marquee-item";
    item.innerHTML = `
      ${generateJerseySVG(p, 'front')}
      <div>
        <h4 class="marquee-name">${p.name}</h4>
        <span class="marquee-region">${p.region === 'bac' ? 'Kinh Bắc' : p.region === 'trung' ? 'Trung Bộ' : 'Nam Bộ'}</span>
      </div>
    `;
    // Click action inside marquee opens details modal
    item.addEventListener("click", () => {
      openDetailsModal(p.slug);
    });
    marquee.appendChild(item);
  });

  // Duplicate the children to make scrolling continuous
  const cloned = marquee.cloneNode(true);
  cloned.id = "marquee-content-clone";
  marquee.parentNode.appendChild(cloned);
}

// --- PRODUCT TECHNOLOGY HOTSPOTS ---
function initProductTech() {
  const hotspots = document.querySelectorAll(".tech-hotspot");
  const cards = document.querySelectorAll(".tech-card");

  if (hotspots.length === 0) return;

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", () => {
      const point = hotspot.getAttribute("data-point");
      
      // Active states for hotspots
      hotspots.forEach(h => h.classList.remove("active"));
      hotspot.classList.add("active");

      // Active states for descriptions
      cards.forEach(card => {
        card.classList.remove("active");
        if (card.getAttribute("data-point") === point) {
          card.classList.add("active");
          // Smooth scroll inside details box if needed
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const point = card.getAttribute("data-point");

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      hotspots.forEach(h => {
        h.classList.remove("active");
        if (h.getAttribute("data-point") === point) {
          h.classList.add("active");
        }
      });
    });
  });
}

// --- SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
}

// --- PREMIUM CUSTOM CURSOR INTERACTION ---
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const cursorDot = document.getElementById("custom-cursor-dot");
  if (!cursor || !cursorDot) return;

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorDot.style.opacity = "1";
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorDot.style.opacity = "0";
  });

  const updateHoverElements = () => {
    const hoverTargets = document.querySelectorAll("a, button, select, input, .map-hotspot, .card-perspective, .tech-card, .marquee-item, .view-btn");
    hoverTargets.forEach(el => {
      el.removeEventListener("mouseenter", addHoverClass);
      el.removeEventListener("mouseleave", removeHoverClass);
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });
  };

  function addHoverClass() {
    cursor.classList.add("hovering");
    cursorDot.classList.add("hovering");
    playTactileSound('hover');
  }

  function removeHoverClass() {
    cursor.classList.remove("hovering");
    cursorDot.classList.remove("hovering");
  }

  const observer = new MutationObserver(() => {
    updateHoverElements();
  });
  const grid = document.getElementById("collection-grid");
  if (grid) {
    observer.observe(grid, { childList: true });
  }

  updateHoverElements();
}

// --- SYNTHESIZED TACTILE SOUND ENGINE ---
let audioCtx = null;
let isSoundMuted = true;

function initTactileAudio() {
  const toggleBtn = document.getElementById("sound-toggle");
  const icon = document.getElementById("sound-icon");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    isSoundMuted = !isSoundMuted;
    if (isSoundMuted) {
      if (icon) icon.textContent = "🔇";
      toggleBtn.style.color = "var(--color-muted)";
      toggleBtn.style.borderColor = "var(--color-light-gray)";
    } else {
      if (icon) icon.textContent = "🔊";
      toggleBtn.style.color = "var(--color-vietnam-gold)";
      toggleBtn.style.borderColor = "var(--color-vietnam-gold)";
      
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      playTactileSound('success');
    }
  });

  // Bind inputs
  setTimeout(() => {
    const inputs = document.querySelectorAll("#cust-name, #cust-number, #cust-province, .view-btn, input[type='color']");
    inputs.forEach(input => {
      input.addEventListener("input", () => playTactileSound('click'));
      input.addEventListener("change", () => playTactileSound('click'));
    });
  }, 100);
}

function playTactileSound(type = 'click') {
  if (isSoundMuted || !audioCtx) return;

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'hover') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(1100, now + 0.02);
    
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
    
    osc.start(now);
    osc.stop(now + 0.02);
  } else if (type === 'click') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(70, now + 0.05);

    gainNode.gain.setValueAtTime(0.05, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'success') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.08);
    
    gainNode.gain.setValueAtTime(0.04, now);
    gainNode.gain.setValueAtTime(0.04, now + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

// --- 3D PERSPECTIVE TILT ---
function initCardTiltEffect() {
  const cards = document.querySelectorAll(".card-perspective");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;

      const xc = (x / width) - 0.5;
      const yc = (y / height) - 0.5;

      const rotateY = xc * 16;
      const rotateX = -yc * 16;

      card.classList.add("tilting");
      // Appends tilt offset to the 180deg card flip
      cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${180 - rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      const cardInner = card.querySelector(".card-inner");
      if (!cardInner) return;

      card.classList.remove("tilting");
      cardInner.style.transform = "";
    });
  });
}

// --- CONFETTI EMITTER BURST ---
function initConfettiBurst() {
  const submitBtn = document.querySelector("#customizer-form .btn-primary");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    // Play Victory Sound
    playTactileSound('success');

    const rect = submitBtn.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const colors = ['#da251d', '#ffbe00', '#ffffff', '#00f0ff', '#ff007f', '#2ecc71'];

    for (let i = 0; i < 40; i++) {
      const p = document.createElement("div");
      p.className = "confetti-particle";
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 80 + Math.random() * 120;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 40;
      const rot = 180 + Math.random() * 360;

      p.style.setProperty("--tx", tx + "px");
      p.style.setProperty("--ty", ty + "px");
      p.style.setProperty("--rot", rot + "deg");

      p.style.left = startX + "px";
      p.style.top = startY + "px";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = 6 + Math.random() * 8;
      p.style.width = size + "px";
      p.style.height = size + "px";
      
      document.body.appendChild(p);

      setTimeout(() => {
        p.remove();
      }, 1200);
    }
  });
}
