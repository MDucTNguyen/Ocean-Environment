import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export enum EDataType {
  BASIC,
  STORY,
  ACTIVITY,
}

export const headerSlideData: MemberImageProps[] = [
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
];

export interface IObjectData {
  [key: string]: IData;
}

export const basic: IObjectData = {
  1: {
    id: 1,
    image: require("../assets/env/ocean_pollution1.png"),
    title: "Ô nhiễm biển",
    description:
      "Ô nhiễm biển là sự xâm nhập của các chất độc hại vào môi trường biển, ảnh hưởng đến sinh vật và hệ sinh thái biển.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm biển",
        body: [
          "Rác thải nhựa: Các sản phẩm nhựa dùng một lần và rác thải nhựa khác bị xả ra biển.",
          "Dầu tràn: Sự cố tràn dầu từ tàu chở dầu và các hoạt động khai thác dầu khí.",
          "Hóa chất: Các hóa chất từ nông nghiệp và công nghiệp bị rửa trôi vào biển.",
          "Nước thải: Nước thải chưa qua xử lý từ các khu dân cư và công nghiệp.",
        ],
        image: require("../assets/env/ocean_pollution2.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm biển",
        body: [
          "Sinh vật biển: Gây hại cho sinh vật biển, làm giảm đa dạng sinh học.",
          "Sức khỏe con người: Các chất độc hại có thể xâm nhập vào chuỗi thực phẩm.",
          "Kinh tế: Ảnh hưởng đến ngành du lịch và ngư nghiệp.",
          "Hệ sinh thái: Phá vỡ cân bằng sinh thái biển.",
        ],
        image: require("../assets/env/ocean_pollution3.png"),
      },
      {
        title: "Biện pháp kiểm soát và phòng ngừa ô nhiễm biển",
        body: [
          "Giảm sử dụng nhựa: Khuyến khích sử dụng sản phẩm tái sử dụng.",
          "Xử lý nước thải: Cải thiện hệ thống xử lý nước thải.",
          "Quản lý dầu tràn: Áp dụng công nghệ và quy trình an toàn trong khai thác dầu khí.",
          "Giáo dục và nâng cao nhận thức: Tuyên truyền về tác hại của ô nhiễm biển.",
        ],
        image: require("../assets/env/ocean_pollution4.png"),
      },
    ],
  },
  2: {
    id: 2,
    image: require("../assets/env/coral_reef1.png"),
    title: "Rạn san hô",
    description:
      "Rạn san hô là hệ sinh thái biển quan trọng, cung cấp nơi cư trú cho nhiều loài sinh vật biển.",
    content: [
      {
        title: "Vai trò của rạn san hô",
        body: [
          "Sinh thái: Cung cấp nơi cư trú và nguồn thức ăn cho nhiều loài.",
          "Kinh tế: Hỗ trợ ngành du lịch và ngư nghiệp.",
          "Bảo vệ bờ biển: Giảm tác động của sóng và bão.",
        ],
        image: require("../assets/env/coral_reef2.png"),
      },
      {
        title: "Mối đe dọa đối với rạn san hô",
        body: [
          "Biến đổi khí hậu: Tăng nhiệt độ nước biển gây tẩy trắng san hô.",
          "Ô nhiễm: Hóa chất và rác thải gây hại cho san hô.",
          "Đánh bắt quá mức: Phá vỡ cân bằng sinh thái rạn san hô.",
        ],
        image: require("../assets/env/coral_reef3.png"),
      },
      {
        title: "Biện pháp bảo vệ rạn san hô",
        body: [
          "Giảm khí thải: Hạn chế biến đổi khí hậu.",
          "Quản lý đánh bắt: Áp dụng quy định bảo vệ rạn san hô.",
          "Giáo dục cộng đồng: Nâng cao nhận thức về bảo vệ san hô.",
        ],
        image: require("../assets/env/coral_reef4.png"),
      },
    ],
  },
  3: {
    id: 3,
    image: require("../assets/env/marine_biodiversity1.png"),
    title: "Đa dạng sinh học biển",
    description:
      "Đa dạng sinh học biển là sự phong phú của các loài sinh vật sống trong môi trường biển.",
    content: [
      {
        title: "Tầm quan trọng của đa dạng sinh học biển",
        body: [
          "Sinh thái: Duy trì cân bằng sinh thái biển.",
          "Kinh tế: Cung cấp nguồn tài nguyên cho con người.",
          "Nghiên cứu: Cung cấp thông tin cho nghiên cứu khoa học.",
        ],
        image: require("../assets/env/marine_biodiversity2.png"),
      },
      {
        title: "Mối đe dọa đối với đa dạng sinh học biển",
        body: [
          "Ô nhiễm: Gây hại cho sinh vật biển.",
          "Biến đổi khí hậu: Ảnh hưởng đến môi trường sống của sinh vật.",
          "Đánh bắt quá mức: Làm giảm số lượng loài.",
        ],
        image: require("../assets/env/marine_biodiversity3.png"),
      },
      {
        title: "Biện pháp bảo vệ đa dạng sinh học biển",
        body: [
          "Bảo tồn: Thiết lập khu bảo tồn biển.",
          "Quản lý tài nguyên: Sử dụng bền vững tài nguyên biển.",
          "Giáo dục: Nâng cao nhận thức về bảo vệ sinh vật biển.",
        ],
        image: require("../assets/env/marine_biodiversity4.png"),
      },
    ],
  },
  4: {
    id: 4,
    image: require("../assets/env/marine_conservation1.png"),
    title: "Bảo tồn biển",
    description:
      "Bảo tồn biển là các hoạt động nhằm bảo vệ và duy trì các hệ sinh thái biển.",
    content: [
      {
        title: "Lợi ích của bảo tồn biển",
        body: [
          "Sinh thái: Bảo vệ môi trường sống của sinh vật biển.",
          "Kinh tế: Hỗ trợ ngành du lịch và ngư nghiệp bền vững.",
          "Xã hội: Cải thiện chất lượng cuộc sống của cộng đồng ven biển.",
        ],
        image: require("../assets/env/marine_conservation2.png"),
      },
      {
        title: "Thách thức trong bảo tồn biển",
        body: [
          "Ô nhiễm: Khó khăn trong việc kiểm soát ô nhiễm biển.",
          "Biến đổi khí hậu: Ảnh hưởng đến các nỗ lực bảo tồn.",
          "Thiếu nguồn lực: Hạn chế về tài chính và nhân lực.",
        ],
        image: require("../assets/env/marine_conservation3.png"),
      },
      {
        title: "Chiến lược bảo tồn biển",
        body: [
          "Hợp tác quốc tế: Phối hợp giữa các quốc gia trong bảo vệ biển.",
          "Công nghệ: Sử dụng công nghệ tiên tiến trong giám sát và bảo vệ biển.",
          "Chính sách: Áp dụng các chính sách bảo vệ môi trường biển.",
        ],
        image: require("../assets/env/marine_conservation4.png"),
      },
    ],
  },
  5: {
    id: 5,
    image: require("../assets/env/marine_pollution1.png"),
    title: "Ô nhiễm nhựa ở biển",
    description:
      "Ô nhiễm nhựa ở biển là vấn đề nghiêm trọng, ảnh hưởng đến sinh vật và hệ sinh thái biển.",
    content: [
      {
        title: "Nguồn gốc của ô nhiễm nhựa",
        body: [
          "Rác thải nhựa: Sản phẩm nhựa dùng một lần bị xả ra biển.",
          "Ngư cụ: Lưới và dụng cụ đánh bắt bị bỏ lại.",
          "Sản phẩm tiêu dùng: Bao bì và chai nhựa.",
        ],
        image: require("../assets/env/marine_pollution2.png"),
      },
      {
        title: "Ảnh hưởng của ô nhiễm nhựa",
        body: [
          "Sinh vật biển: Gây hại cho sinh vật biển, làm giảm đa dạng sinh học.",
          "Sức khỏe con người: Các hạt vi nhựa có thể xâm nhập vào chuỗi thực phẩm.",
          "Kinh tế: Ảnh hưởng đến ngành du lịch và ngư nghiệp.",
        ],
        image: require("../assets/env/marine_pollution3.png"),
      },
      {
        title: "Biện pháp giảm thiểu ô nhiễm nhựa",
        body: [
          "Giảm sử dụng nhựa: Khuyến khích sử dụng sản phẩm tái sử dụng.",
          "Tái chế: Cải thiện hệ thống tái chế nhựa.",
          "Giáo dục: Nâng cao nhận thức về tác hại của nhựa.",
        ],
        image: require("../assets/env/marine_pollution4.png"),
      },
    ],
  },
  6: {
    id: 6,
    image: require("../assets/env/marine_life1.png"),
    title: "Cuộc sống dưới biển",
    description:
      "Cuộc sống dưới biển rất đa dạng và phong phú, với nhiều loài sinh vật độc đáo.",
    content: [
      {
        title: "Đặc điểm của cuộc sống dưới biển",
        body: [
          "Đa dạng loài: Có hàng triệu loài sinh vật biển.",
          "Môi trường sống: Từ vùng nước nông đến sâu thẳm đại dương.",
          "Thích nghi: Sinh vật biển có nhiều đặc điểm thích nghi độc đáo.",
        ],
        image: require("../assets/env/marine_life2.png"),
      },
      {
        title: "Mối đe dọa đối với cuộc sống dưới biển",
        body: [
          "Ô nhiễm: Gây hại cho sinh vật biển.",
          "Biến đổi khí hậu: Ảnh hưởng đến môi trường sống của sinh vật.",
          "Đánh bắt quá mức: Làm giảm số lượng loài.",
        ],
        image: require("../assets/env/marine_life3.png"),
      },
      {
        title: "Bảo vệ cuộc sống dưới biển",
        body: [
          "Bảo tồn: Thiết lập khu bảo tồn biển.",
          "Quản lý tài nguyên: Sử dụng bền vững tài nguyên biển.",
          "Giáo dục: Nâng cao nhận thức về bảo vệ sinh vật biển.",
        ],
        image: require("../assets/env/marine_life4.png"),
      },
    ],
  },
};
export const story: IObjectData = {
  1: {
    id: 1,
    title: "Cuộc chiến chống ô nhiễm nhựa ở biển",
    description:
      "Ô nhiễm nhựa ở biển là vấn đề nghiêm trọng, ảnh hưởng đến sinh vật và hệ sinh thái biển.",
    content: [
      {
        title: "Hành động của cộng đồng ven biển",
        body: [
          "Tại một làng chài nhỏ ven biển, người dân đã chứng kiến sự gia tăng đáng kể của rác thải nhựa trôi dạt vào bờ biển. Những mảnh nhựa nhỏ, chai lọ và túi ni lông không chỉ làm xấu đi cảnh quan mà còn đe dọa đến cuộc sống của các loài sinh vật biển.",
          "Nhận thấy tình hình nghiêm trọng, một nhóm thanh niên trong làng đã quyết định hành động. Họ tổ chức các buổi dọn dẹp bãi biển hàng tuần, kêu gọi sự tham gia của cả cộng đồng. Những ngày cuối tuần, mọi người cùng nhau nhặt rác, phân loại và tái chế những gì có thể.",
          "Không chỉ dừng lại ở việc dọn dẹp, nhóm thanh niên còn tổ chức các buổi hội thảo nhỏ tại làng, chia sẻ kiến thức về tác hại của nhựa đối với môi trường biển và cách giảm thiểu sử dụng nhựa trong cuộc sống hàng ngày.",
          "Nhờ vào những nỗ lực không ngừng nghỉ, bãi biển dần trở nên sạch sẽ hơn, và ý thức bảo vệ môi trường của người dân cũng được nâng cao. Câu chuyện về làng chài này đã trở thành nguồn cảm hứng cho nhiều cộng đồng ven biển khác.",
        ],
        image: require("../assets/env/ocean_story1_1.png"),
      },
    ],
    image: require("../assets/env/ocean_story1.png"),
  },
  2: {
    id: 2,
    title: "Bảo vệ rạn san hô",
    description:
      "Rạn san hô là hệ sinh thái biển quan trọng, cung cấp nơi cư trú cho nhiều loài sinh vật biển.",
    content: [
      {
        title: "Nỗ lực của các nhà khoa học trẻ",
        body: [
          "Một nhóm sinh viên đại học đam mê sinh học biển đã quyết định thực hiện một dự án nghiên cứu về rạn san hô tại một khu bảo tồn biển. Họ nhận thấy rằng rạn san hô đang bị đe dọa nghiêm trọng bởi biến đổi khí hậu và ô nhiễm.",
          "Nhóm đã tiến hành khảo sát và thu thập dữ liệu về tình trạng của san hô, đồng thời hợp tác với các nhà khoa học và tổ chức phi chính phủ để tìm ra giải pháp bảo vệ rạn san hô.",
          "Họ tổ chức các buổi hội thảo và triển lãm để nâng cao nhận thức của cộng đồng về tầm quan trọng của rạn san hô và cách bảo vệ chúng. Các hoạt động này đã thu hút sự quan tâm của nhiều người, từ học sinh, sinh viên đến các nhà quản lý địa phương.",
          "Nhờ vào những nỗ lực của nhóm, một số biện pháp bảo vệ đã được triển khai, như hạn chế hoạt động du lịch không bền vững và tăng cường giám sát môi trường biển.",
        ],
        image: require("../assets/env/ocean_story2_1.png"),
      },
    ],
    image: require("../assets/env/ocean_story2.png"),
  },
  3: {
    id: 3,
    title: "Khám phá đa dạng sinh học biển",
    description:
      "Đa dạng sinh học biển là sự phong phú của các loài sinh vật sống trong môi trường biển.",
    content: [
      {
        title: "Chuyến thám hiểm của các nhà nghiên cứu",
        body: [
          "Một nhóm nhà nghiên cứu từ nhiều quốc gia đã cùng nhau thực hiện một chuyến thám hiểm đến một vùng biển xa xôi để khám phá đa dạng sinh học biển. Họ đã phát hiện ra nhiều loài sinh vật mới và ghi nhận những đặc điểm độc đáo của chúng.",
          "Chuyến thám hiểm không chỉ giúp mở rộng kiến thức về sinh vật biển mà còn nhấn mạnh tầm quan trọng của việc bảo vệ đa dạng sinh học biển trước những mối đe dọa từ con người.",
          "Nhóm nghiên cứu đã công bố các phát hiện của mình qua các bài báo khoa học và tổ chức các buổi hội thảo để chia sẻ kiến thức với cộng đồng. Những thông tin này đã góp phần nâng cao nhận thức về tầm quan trọng của việc bảo tồn đa dạng sinh học biển.",
          "Câu chuyện về chuyến thám hiểm đã truyền cảm hứng cho nhiều nhà khoa học trẻ và khuyến khích họ tham gia vào các dự án nghiên cứu và bảo vệ môi trường biển.",
        ],
        image: require("../assets/env/ocean_story3_1.png"),
      },
    ],
    image: require("../assets/env/ocean_story3.png"),
  },
  4: {
    id: 4,
    title: "Giáo dục bảo vệ môi trường biển",
    description:
      "Giáo dục là chìa khóa để nâng cao nhận thức và hành động bảo vệ môi trường biển.",
    content: [
      {
        title: "Chương trình giáo dục tại trường học",
        body: [
          "Một trường học ven biển đã triển khai chương trình giáo dục đặc biệt về bảo vệ môi trường biển cho học sinh. Chương trình bao gồm các buổi học thực tế tại bãi biển, nơi học sinh có thể trực tiếp quan sát và tìm hiểu về hệ sinh thái biển.",
          "Học sinh được tham gia vào các hoạt động như nhặt rác, trồng cây xanh ven biển và tham gia các cuộc thi tìm hiểu về sinh vật biển. Những hoạt động này không chỉ giúp học sinh hiểu rõ hơn về môi trường biển mà còn khuyến khích họ hành động để bảo vệ nó.",
          "Nhà trường cũng mời các chuyên gia về môi trường biển đến giảng dạy và chia sẻ kinh nghiệm, giúp học sinh có cái nhìn sâu sắc hơn về các vấn đề môi trường hiện nay.",
          "Chương trình giáo dục này đã nhận được sự ủng hộ nhiệt tình từ phụ huynh và cộng đồng, góp phần tạo nên một thế hệ trẻ có ý thức bảo vệ môi trường biển mạnh mẽ.",
        ],
        image: require("../assets/env/ocean_story4_1.png"),
      },
    ],
    image: require("../assets/env/ocean_story4.png"),
  },
};

export interface IActivity {
  id: number;
  title: string;
  target: string;
  image: string;
  material: string[];
  instructions: Array<{
    title: string;
    body: string[];
    image: string;
  }>;
  benefit: string[];
}

export interface IObjectActivity {
  [key: string]: IActivity;
}

export const activity: IObjectActivity = {
  1: {
    id: 1,
    title: "Làm túi vải từ áo thun cũ",
    image: require("../assets/env/activity1.png"),
    target: "Học sinh",
    material: [
      "Áo thun cũ",
      "Kéo",
      "Kim chỉ hoặc máy may",
      "Bút vẽ vải (tuỳ chọn)",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị áo thun",
        body: [
          "Chọn một chiếc áo thun cũ mà bạn không còn sử dụng.",
          "Cắt bỏ phần tay áo và cổ áo để tạo hình túi.",
        ],
        image: "https://example.com/images/step1_tote.jpg",
      },
      {
        title: "Bước 2: May đáy túi",
        body: [
          "Lật ngược áo thun và may kín phần đáy áo để tạo thành túi.",
          "Nếu không có máy may, bạn có thể dùng kim chỉ để khâu tay.",
        ],
        image: "https://example.com/images/step2_tote.jpg",
      },
      {
        title: "Bước 3: Trang trí túi (tuỳ chọn)",
        body: [
          "Sử dụng bút vẽ vải để trang trí túi theo ý thích.",
          "Bạn có thể vẽ các hình ảnh liên quan đến biển như cá, san hô, hoặc sóng biển.",
        ],
        image: "https://example.com/images/step3_tote.jpg",
      },
    ],
    benefit: [
      "Giảm thiểu rác thải: Tái sử dụng áo thun cũ giúp giảm lượng rác thải.",
      "Bảo vệ môi trường biển: Sử dụng túi vải thay cho túi nhựa giúp giảm ô nhiễm nhựa ở biển.",
      "Kỹ năng sáng tạo: Học sinh phát triển kỹ năng sáng tạo và thủ công.",
    ],
  },
  2: {
    id: 2,
    title: "Tạo mô hình rạn san hô từ vật liệu tái chế",
    image: require("../assets/env/activity2.png"),
    target: "Học sinh",
    material: [
      "Giấy bìa cứng",
      "Màu nước hoặc màu acrylic",
      "Kéo",
      "Keo dán",
      "Vỏ sò, đá nhỏ (tuỳ chọn)",
    ],
    instructions: [
      {
        title: "Bước 1: Tạo khung mô hình",
        body: [
          "Cắt giấy bìa cứng thành các hình dạng khác nhau để tạo khung cho rạn san hô.",
          "Dùng keo dán để gắn các mảnh giấy lại với nhau.",
        ],
        image: "https://example.com/images/step1_coral.jpg",
      },
      {
        title: "Bước 2: Trang trí mô hình",
        body: [
          "Sử dụng màu nước hoặc màu acrylic để sơn mô hình theo màu sắc của rạn san hô.",
          "Bạn có thể thêm vỏ sò hoặc đá nhỏ để làm cho mô hình thêm sinh động.",
        ],
        image: "https://example.com/images/step2_coral.jpg",
      },
    ],
    benefit: [
      "Giáo dục về sinh thái biển: Học sinh tìm hiểu về cấu trúc và tầm quan trọng của rạn san hô.",
      "Tái chế sáng tạo: Sử dụng vật liệu tái chế để tạo ra sản phẩm mới.",
      "Kỹ năng thủ công: Phát triển kỹ năng thủ công và sáng tạo.",
    ],
  },
  3: {
    id: 3,
    title: "Tổ chức buổi dọn dẹp bãi biển",
    image: require("../assets/env/activity3.png"),
    target: "Học sinh và cộng đồng",
    material: [
      "Găng tay bảo hộ",
      "Túi rác lớn",
      "Nước uống",
      "Mũ nón và kem chống nắng",
    ],
    instructions: [
      {
        title: "Bước 1: Chuẩn bị và lên kế hoạch",
        body: [
          "Chọn một bãi biển cần dọn dẹp và lên kế hoạch cho buổi hoạt động.",
          "Liên hệ với các tổ chức địa phương để xin phép và hỗ trợ.",
        ],
        image: "https://example.com/images/step1_cleanup.jpg",
      },
      {
        title: "Bước 2: Thực hiện dọn dẹp",
        body: [
          "Phân chia nhóm và khu vực dọn dẹp.",
          "Sử dụng găng tay và túi rác để thu gom rác thải trên bãi biển.",
        ],
        image: "https://example.com/images/step2_cleanup.jpg",
      },
      {
        title: "Bước 3: Phân loại và xử lý rác",
        body: [
          "Phân loại rác thải thành các loại: nhựa, kim loại, giấy, và rác hữu cơ.",
          "Đưa rác thải đến các điểm thu gom hoặc tái chế phù hợp.",
        ],
        image: "https://example.com/images/step3_cleanup.jpg",
      },
    ],
    benefit: [
      "Bảo vệ môi trường biển: Giảm thiểu ô nhiễm và bảo vệ sinh vật biển.",
      "Nâng cao ý thức cộng đồng: Khuyến khích mọi người tham gia bảo vệ môi trường.",
      "Kỹ năng làm việc nhóm: Phát triển kỹ năng hợp tác và làm việc nhóm.",
    ],
  },
  4: {
    id: 4,
    title: "Tạo tranh từ vỏ sò và đá biển",
    image: require("../assets/env/activity4.png"),
    target: "Học sinh",
    material: [
      "Vỏ sò và đá biển",
      "Giấy bìa cứng hoặc khung tranh",
      "Keo dán",
      "Màu nước hoặc màu acrylic",
      "Cọ vẽ",
    ],
    instructions: [
      {
        title: "Bước 1: Thu thập vật liệu",
        body: [
          "Đi dạo trên bãi biển và thu thập vỏ sò và đá biển có hình dạng và kích thước khác nhau.",
          "Rửa sạch và để khô các vật liệu thu thập được.",
        ],
        image: "https://example.com/images/step1_shell.jpg",
      },
      {
        title: "Bước 2: Lên ý tưởng và bố trí",
        body: [
          "Sắp xếp vỏ sò và đá biển trên giấy bìa cứng hoặc khung tranh để tạo thành hình ảnh hoặc hoa văn theo ý thích.",
          "Thử nghiệm với nhiều bố cục khác nhau trước khi dán cố định.",
        ],
        image: "https://example.com/images/step2_shell.jpg",
      },
      {
        title: "Bước 3: Dán và trang trí",
        body: [
          "Sử dụng keo dán để cố định vỏ sò và đá biển vào vị trí đã chọn.",
          "Sử dụng màu nước hoặc màu acrylic để thêm màu sắc và chi tiết cho bức tranh.",
        ],
        image: "https://example.com/images/step3_shell.jpg",
      },
    ],
    benefit: [
      "Tái sử dụng tài nguyên: Sử dụng vỏ sò và đá biển để tạo ra tác phẩm nghệ thuật.",
      "Khuyến khích sáng tạo: Phát triển kỹ năng sáng tạo và nghệ thuật của học sinh.",
      "Giáo dục về môi trường: Nâng cao nhận thức về việc bảo vệ và tận dụng tài nguyên thiên nhiên.",
    ],
  },
};

export const allData = {
  [EDataType.BASIC]: basic,
  [EDataType.ACTIVITY]: activity,
  [EDataType.STORY]: story,
};
