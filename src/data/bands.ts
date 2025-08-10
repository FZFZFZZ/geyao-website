export interface Band {
  id: string;
  name: string;
  photo?: string;
  description?: string;
  genre?: string;
  tags?: string[];
  members?: string[]; // Array of person IDs
  formed?: string;
  social?: {
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
  googleDrive?: {
    url?: string;
    description?: string;
  };
  youtubeVideos?: {
    title: string;
    url: string;
  }[];
  bilibiliVideos?: {
    title: string;
    url: string;
  }[];
  xiaohongshuVideos?: {
    title: string;
    url: string;
  }[];
  recruitmentNeeds?: string; // What the band needs to recruit for their performances/projects
}

export const bandsData: Band[] = [
  {
    id: "1",
    name: "One Minute",
    photo: "/bandphotos/1.png",
    tags: ["流行", "歌剧"],
    members: ["2", "14"],
    formed: "2025",
    googleDrive: {
      url: "https://drive.google.com/drive/folders/1fv5A6fKesd2F2nSwz59mqqk86EPKzU1v?usp=sharing",
    },
  },
  {
    id: "2",
    name: "MADreamers",
    photo: "/bandphotos/2.jpg",
    tags: ["嘻哈", "说唱"],
    members: ["3", "13", "15", "18", "19", "48"],
    formed: "2024",
    social: {
      instagram: "@madreamers_scgs",
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/2Band2_ElectronicPop_Productions",
      description: "电子音乐制作文件、DJ Set录音、合成器音效库和视觉艺术素材"
    },
    youtubeVideos: [
      {
        title: "高，还没富，但帅（live）",
        url: "https://youtu.be/x2vce-WwX74?feature=shared"
      },
      {
        title: "亚洲第一高校CYPHER",
        url: "https://youtu.be/AsIVlaE7uh4?si=Z9_3rcd97al0Fe8z"
      }
    ],
    xiaohongshuVideos: [
      {
        title: "MADNUS",
        url: "http://xhslink.com/m/95328UXZ1KJ"
      },
      {
        title: "Downtown Sunset",
        url: "http://xhslink.com/m/aJgHXHciJU"
      }
    ],
  },
  {
    id: "3",
    name: "水泥幻象",
    photo: "/bandphotos/3.JPG",
    description: "Life is short, so love deeply and forgive quickly.",
    tags: ["独立摇滚", "R&B", "Funk", "Jazz"],
    members: ["4", "8", "20", "21", "22", "23", "24", "25", "26", "27"],
    formed: "2023",
    social: {
      instagram: "concretemirage",
    },
    googleDrive: {
      url: "https://drive.google.com/drive/folders/3Band3_ClassicalCrossover_Scores",
    },
    bilibiliVideos: [
      {
        title: "《爱很简单》现场版 - 陶喆",
        url: "https://www.bilibili.com/video/BV1rE4m1R7gj/?spm_id_from=333.1387.homepage.video_card.click&vd_source=91d8d7841b258b01f0fa5983b24291b6"
      },
      {
        title: "《爱很简单》录音室版 - 陶喆",
        url: "https://www.bilibili.com/video/BV1hN4y1U7D1/?spm_id_from=333.1387.homepage.video_card.click"
      },
      {
        title: "草东合集",
        url: "https://www.bilibili.com/video/BV1B94y1a7kC/?spm_id_from=333.1387.homepage.video_card.click&vd_source=91d8d7841b258b01f0fa5983b24291b6"
      }
    ],
  },
  {
    id: "4",
    name: "余香肉丝",
    members: ["4"],
  },
  {
    id: "5",
    name: "安得万全法",
    photo: "/bandphotos/5.jpg",
    description: "万青一二专都演过。",
    genre: "Electric Prog",
    tags: ["Progressive Rock", "Post-Punk"],
    members: ["5", "8", "9", "11", "24", "22", "42", "4", "38", "41", "43", "44", "45", "46", "47"],
    formed: "2024",
    googleDrive: {
      url: "https://drive.google.com/drive/folders/1ptvikXMb4XXYDSRRoSY7UbPsmuSdbaQZ?usp=sharing",
      description: "民谣歌曲录音、原创故事歌词、吉他指弹教学和篝火音乐会记录"
    },
    youtubeVideos: [
      {
        title: "在这颗行星所有的酒馆 + 永嘉彗星 + 杀死那个石家庄人 (现场内录)",
        url: "https://www.youtube.com/watch?v=KQ25AVExiM0&t=288s&ab_channel=lhm"
      },
    ],
    recruitmentNeeds: "招一个萨克斯手。招一个小号手。招一个吉他手。"
  },
  {
    id: "6",
    name: "きっと、いつか幸せに",
    photo: "/bandphotos/6.jpg",
    description: "A band seeking for happiness. \n“If I were to recount love, if I were to speak of happiness, what hue would that take?” \nSurely someday we will be happy.",
    tags: ["日摇", "jrock", "jpop"],
    members: ["6", "28", "29", "30", "31", "32", "33"],
    formed: "2024",
    googleDrive: {
      url: "https://drive.google.com/drive/folders/15Pe3fzsmYtkx9SgITY40sLc4c3w4viS6?usp=sharing",
      description: "演出视频"
    },
  },
  {
    id: "7",
    name: "Mission Hidden",
    photo: "/bandphotos/7.png",
    description: "主打一个玩的开心的乐队",
    tags: ["流行", "摇滚", "R&B"],
    members: ["9", "34", "35", "36", "37", "38", "39"],
    formed: "2024",
    googleDrive: {
      url: "https://drive.google.com/drive/folders/1CLqk9MdIg2dfyjKPx4hK1phNwe1T2i_Y?usp=sharing",
      description: "演出视频"
    },
  },
  {
    id: "8",
    name: "Maad Cosat",
  }
]; 