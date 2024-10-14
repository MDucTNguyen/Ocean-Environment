import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Biển đóng vai trò gì trong hệ sinh thái?",
      choose: [
        "Cung cấp oxy và điều hòa khí hậu.",
        "Chỉ là nơi để bơi lội.",
        "Không có vai trò gì quan trọng.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Tại sao rác thải nhựa là mối đe dọa lớn đối với biển?",
      choose: [
        "Gây hại cho sinh vật biển và mất hàng trăm năm để phân hủy.",
        "Nhựa dễ phân hủy trong nước biển.",
        "Nhựa không ảnh hưởng đến biển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Loài sinh vật nào thường bị ảnh hưởng bởi ô nhiễm nhựa?",
      choose: [
        "Rùa biển và cá voi.",
        "Chim sẻ và mèo nhà.",
        "Chỉ có động vật trên cạn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Biển có vai trò gì trong việc điều hòa khí hậu?",
      choose: [
        "Hấp thụ CO2 và điều hòa nhiệt độ toàn cầu.",
        "Không ảnh hưởng đến khí hậu.",
        "Chỉ làm tăng nhiệt độ.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Tại sao san hô quan trọng đối với biển?",
      choose: [
        "Cung cấp nơi cư trú cho nhiều loài sinh vật biển.",
        "Chỉ là vật trang trí dưới nước.",
        "Không có giá trị gì.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Biển có thể bị ảnh hưởng bởi biến đổi khí hậu như thế nào?",
      choose: [
        "Tăng nhiệt độ nước và mực nước biển dâng cao.",
        "Giảm nhiệt độ nước.",
        "Không có ảnh hưởng gì.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Tại sao bảo vệ đa dạng sinh học biển là quan trọng?",
      choose: [
        "Giúp duy trì sự cân bằng sinh thái và bảo vệ các loài.",
        "Không quan trọng.",
        "Chỉ bảo vệ các loài cá lớn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Hành động nào giúp bảo vệ môi trường biển?",
      choose: [
        "Giảm sử dụng nhựa và tham gia dọn dẹp bãi biển.",
        "Xả rác thải nhựa xuống biển.",
        "Không làm gì cả.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Tại sao chúng ta cần bảo vệ rạn san hô?",
      choose: [
        "Rạn san hô là nơi sinh sống của nhiều loài sinh vật biển.",
        "Rạn san hô không có giá trị gì.",
        "Chỉ để làm đẹp cho biển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean1.jpeg"),
      ques: "Biển có thể cung cấp nguồn năng lượng nào?",
      choose: [
        "Năng lượng gió và thủy triều.",
        "Năng lượng từ than đá.",
        "Không có nguồn năng lượng nào.",
      ],
      ans: 0,
    },
  ],
  medium: [
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Biến đổi khí hậu ảnh hưởng như thế nào đến mực nước biển?",
      choose: [
        "Làm tăng mực nước biển do băng tan.",
        "Làm giảm mực nước biển.",
        "Không ảnh hưởng gì.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Tại sao axit hóa đại dương là vấn đề nghiêm trọng?",
      choose: [
        "Gây hại cho sinh vật có vỏ canxi như san hô và sò.",
        "Không ảnh hưởng gì.",
        "Giúp sinh vật biển phát triển tốt hơn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Loài sinh vật nào có nguy cơ tuyệt chủng do biến đổi khí hậu?",
      choose: ["Gấu Bắc Cực", "Cá voi xanh", "Chim sẻ"],
      ans: 1,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Tại sao việc đánh bắt quá mức là mối đe dọa cho biển?",
      choose: [
        "Làm giảm số lượng cá và phá vỡ cân bằng sinh thái.",
        "Giúp tăng số lượng cá.",
        "Không ảnh hưởng gì.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Biển có thể bị ô nhiễm bởi những nguồn nào?",
      choose: [
        "Rác thải nhựa, dầu tràn và hóa chất.",
        "Chỉ có rác thải nhựa.",
        "Không có nguồn ô nhiễm nào.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Tại sao bảo vệ rạn san hô là quan trọng?",
      choose: [
        "Rạn san hô là nơi sinh sống của nhiều loài sinh vật biển.",
        "Rạn san hô không có giá trị gì.",
        "Chỉ để làm đẹp cho biển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Biển có thể cung cấp nguồn năng lượng nào?",
      choose: [
        "Năng lượng gió và thủy triều.",
        "Năng lượng từ than đá.",
        "Không có nguồn năng lượng nào.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Tại sao chúng ta cần bảo vệ đa dạng sinh học biển?",
      choose: [
        "Giúp duy trì sự cân bằng sinh thái và bảo vệ các loài.",
        "Không quan trọng.",
        "Chỉ bảo vệ các loài cá lớn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Hành động nào giúp bảo vệ môi trường biển?",
      choose: [
        "Giảm sử dụng nhựa và tham gia dọn dẹp bãi biển.",
        "Xả rác thải nhựa xuống biển.",
        "Không làm gì cả.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean2.jpeg"),
      ques: "Tại sao chúng ta cần bảo vệ rạn san hô?",
      choose: [
        "Rạn san hô là nơi sinh sống của nhiều loài sinh vật biển.",
        "Rạn san hô không có giá trị gì.",
        "Chỉ để làm đẹp cho biển.",
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Axit hóa đại dương ảnh hưởng như thế nào đến sinh vật biển?",
      choose: [
        "Gây hại cho sinh vật có vỏ canxi như san hô và sò.",
        "Không ảnh hưởng gì.",
        "Giúp sinh vật biển phát triển tốt hơn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Tại sao bảo vệ đa dạng sinh học biển là quan trọng?",
      choose: [
        "Giúp duy trì sự cân bằng sinh thái và bảo vệ các loài.",
        "Không quan trọng.",
        "Chỉ bảo vệ các loài cá lớn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Tại sao việc đánh bắt quá mức là mối đe dọa cho biển?",
      choose: [
        "Làm giảm số lượng cá và phá vỡ cân bằng sinh thái.",
        "Giúp tăng số lượng cá.",
        "Không ảnh hưởng gì.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Biển có thể bị ô nhiễm bởi những nguồn nào?",
      choose: [
        "Rác thải nhựa, dầu tràn và hóa chất.",
        "Chỉ có rác thải nhựa.",
        "Không có nguồn ô nhiễm nào.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Tại sao bảo vệ rạn san hô là quan trọng?",
      choose: [
        "Rạn san hô là nơi sinh sống của nhiều loài sinh vật biển.",
        "Rạn san hô không có giá trị gì.",
        "Chỉ để làm đẹp cho biển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Biển có thể cung cấp nguồn năng lượng nào?",
      choose: [
        "Năng lượng gió và thủy triều.",
        "Năng lượng từ than đá.",
        "Không có nguồn năng lượng nào.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Tại sao chúng ta cần bảo vệ đa dạng sinh học biển?",
      choose: [
        "Giúp duy trì sự cân bằng sinh thái và bảo vệ các loài.",
        "Không quan trọng.",
        "Chỉ bảo vệ các loài cá lớn.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Hành động nào giúp bảo vệ môi trường biển?",
      choose: [
        "Giảm sử dụng nhựa và tham gia dọn dẹp bãi biển.",
        "Xả rác thải nhựa xuống biển.",
        "Không làm gì cả.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Tại sao chúng ta cần bảo vệ rạn san hô?",
      choose: [
        "Rạn san hô là nơi sinh sống của nhiều loài sinh vật biển.",
        "Rạn san hô không có giá trị gì.",
        "Chỉ để làm đẹp cho biển.",
      ],
      ans: 0,
    },
    {
      image: require("../assets/env/ocean3.jpeg"),
      ques: "Biển có thể cung cấp nguồn năng lượng nào?",
      choose: [
        "Năng lượng gió và thủy triều.",
        "Năng lượng từ than đá.",
        "Không có nguồn năng lượng nào.",
      ],
      ans: 0,
    },
  ],
};
