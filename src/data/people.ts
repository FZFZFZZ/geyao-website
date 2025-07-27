export interface Person {
  id: string;
  name: string;
  photo?: string;
  description?: string;
  contact?: {
    email?: string;
    phone?: string;
    social?: {
      instagram?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  role?: string;
  roles?: string[];
  department?: string | string[];
  bands?: string[]; // Array of band IDs
  social?: {
    wechat?: string;
    instagram?: string;
    telegram?: string;
  };
  casualTalk?: string; // Random thoughts/casual talk
  topAlbums?: string[]; // Top 6 favorite albums
  recruitmentNeeds?: string; // What they need to recruit for their projects/collaborations
}

export const peopleData: Person[] = [
  {
    id: "1",
    name: "Ge Siyuan",
    photo: "/photos/Ge_Siyuan.jpeg",
    roles: ["Guitar"],
    department: ["Performer"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "Sh1ki_i",
      telegram: "@Sh1ki_i"
    },
    casualTalk: "I extremely hate mandopop. Actually listen to hip-hop more than band music.",
    topAlbums: [
      "Rust in Peace - Megadeth",
      "Periphery III",
      "Around the Fur - Deftones",
      "Augment - Erra",
      "A Great Chaos - Ken Carson",
      "Whole Lotta Red - Playboi Carti"
    ],
    recruitmentNeeds: "Looking for a metal drummer and a singer. Contact me for direct audition."
  },
  {
    id: "2",
    name: "Wang Qiulin | 大岛老师",
    photo: "/photos/Wang_Qiulin.jpg",
    roles: ["Keys"],
    department: ["Performer"],
    bands: ["1"],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@JuliantheWang"
    },
    casualTalk: "An INFJ whom can be found drinking coffee or alcohol most of the time, while listening to anything other than pop music 99% of the time.",
    topAlbums: [
      "丑奴儿 - 草东没有派对",
      "瓦合 - 草东没有派对",
      "Go Slow - deca joins",
      "Chopin: Piano Concertos No.1 & 2 - Polish Festial Orchestra, Krystian Zimerman",
      "吾日三省吾身 - 老王乐队",
      "Opus - Ryuichi Sakamoto"
    ],
    recruitmentNeeds: "I am looking for a good electric bassist / double bass player to work on some jazz genres. Contact me for direct audition."
  },
  {
    id: "3",
    name: "Zhao Jiajun | PointLeZzZ",
    photo: "/photos/Zhao_Jiajun.jpeg",
    roles: ["Rap"],
    department: ["Performer"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "4",
    name: "赵李修齐",
    photo: "/photos/Zhao_Lixiuqi.jpg",
    roles: ["Drums", "Bass"],
    department: "Performer",
    bands: ["3", "4", "5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "alex_go_sleep",
      telegram: "@alexgosleep"
    },
    casualTalk: "V我50",
    topAlbums: [
      "David Tao (陶喆同名专辑)",
      "15",
      "Appetite For Destruction",
      "Voodoo",
      "Slipknot",
      "阿密特意识专辑"
    ],
  },
  {
    id: "5",
    name: "Nie Xinyi Cynthia | 麻薯猫Moko",
    photo: "/photos/Nie_Xinyi.jpg",
    description: "Keyboardist and electronic music producer. Specializes in synthesizers and digital music production, bringing modern electronic elements to our sound.",
    roles: ["Violin", "Viola"],
    department: ["Performer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "sinncxynie",
      telegram: "@sinncxynie"
    },
    casualTalk: "🌙",
    topAlbums: [
      "Biitersweet - Polyphia",
      "河北墨麒麟 - 万能青年旅店",
      "Stairway to Heaven - Led Zeppelin",
      "Only One - Natural TV",
      "Sacred Play Secret Place - Matryoshika",
      "Merry Christmas Mr. Lawence - 坂本龙一"
    ],
  },
  {
    id: "6",
    name: "Li Yitong | Nat",
    photo: "/photos/Li_Yitong.jpeg",
    roles: ["Bass"],
    department: "Performer",
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "natalietangli",
      telegram: "@whoisnatalieee"
    },
    casualTalk: "I like metal guitarists :3",
    topAlbums: [
      "Blackwater Park - Opeth",
      "Fatalism - Polaris",
      "The Chosen - Enterprise Earth",
      "Killers - Iron Maiden",
      "In Utero - Nirvana",
      "Ultraviolence - Lana Del Rey"
    ],
    recruitmentNeeds: "Looking for a metal drummer who can play fast double kicks. Contact me for direct audition."
  },
  {
    id: "7",
    name: "Yang Haorui",
    photo: "/photos/Yang_Haorui.jpeg",
    roles: ["Guitar"],
    department: "Performer",
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "Howbayy",
      telegram: "@bhuio612"
    },
    topAlbums: [
      "Bold as love",
      "Cascade",
      "T&C"
    ],
  },
  {
    id: "8",
    name: "Wu Xiangjiekang | Mes",
    photo: "/photos/Wu_Xiangjiekang.jpeg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "mes_kieran",
      telegram: "@MesKieran"
    },
    casualTalk: "intj",
    topAlbums: [
      "丑奴儿",
      "瓦合",
      "1989",
      "冀西南林路行",
      "Bow Down",
    ],
  },
  {
    id: "9",
    name: "Lu Haomeng",
    photo: "/photos/Lu_Haomeng.JPG",
    roles: ["Keys"],
    department: ["Performer", "Technician"],
    bands: ["5", "7"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "lhhhhhhhhhhhhm",
      telegram: "@lhmFZ"
    },
    casualTalk: "我是奶龙",
    topAlbums: [
      "相见恨晚 - 腰",
      "谬误与偏见 - 古田小伙",
      "无能的力量 - 崔健",
      "The Death Defying Unicorn - Motorpsycho",
      "Larks' Tongues in Aspic - King Crimson",
      "B-2 Unit - Ryuichi Sakamoto"
    ],
    recruitmentNeeds: "招一个玩电子音乐与合成器，想长期玩的。直接私信我就好。"
  },
  {
    id: "10",
    name: "梓琛",
    photo: "/photos/Huang_Zichen.jpg",
    roles: ["Guitar"],
    department: "Performer",
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@zimiqi"
    },
    casualTalk: "woshicaibi",
    topAlbums: [
      "For long tomorrow - Toe",
      "Fake Plastic Trees - Radiohead",
      "Sgt.Pepper's lonely heart club band - The Beatles",
      "菊花夜行军 - 交工乐队",
      "空间、事情、时间、事象。",
      "Loveless"
    ],
    recruitmentNeeds: "想要一个一起玩Indie的！"
  },
  {
    id: "11",
    name: "Liu Yuezhang | Anthony",
    photo: "/photos/Liu_Yuezhang.jpg",
    roles: ["Saxophone", "Clarinet"],
    department: ["Performer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "a14yzliu",
    },
    casualTalk: "Me thinks me breathes me lasts me fears.",
    topAlbums: [
      "Mahler Symphony no.3",
      "Tchaikovsky Symphony no.5",
      "Ysaye Violin Sonata no. 3",
      "Tempest by Bob Dylan",
      "三大纪律八项注意",
      "Uralskaya Ryabinushka"
    ],
  },
  {
    id: "12",
    name: "Li Xinyang",
    photo: "/photos/Li_Xinyang.jpg",
    roles: ["Vocal", "Violin", "Viola"],
    department: "Performer",
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "li957293",
    },
    casualTalk: "嘿嘿嘿",
  },
  {
    id: "13",
    name: "Cao Zhijing | Zjay执经",
    photo: "/photos/Cao_Zhijing.jpeg",
    roles: ["Vocal", "Rap"],
    department: ["Performer"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "caozj1108",
      telegram: "@czj1108"
    },
    casualTalk: "I love my 葫芦娃 and MADreamers",
    recruitmentNeeds: "Looking for Chinese rappers that loves positive hiphop music."
  },
  {
    id: "14",
    name: "Wang Yawei | Arvian小艾",
    photo: "/photos/Wang_Yawei.jpeg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: ["1"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "arvian.wyw",
    },
    topAlbums: [
      "黑豹乐队",
      "Under My Skin",
      "八度空间",
      "平凡之路",
      "西湖",
      "Always Remember Us This Way"
    ],
    casualTalk: "Super introvert in person but eager to perform; Believe music can heal souls and touch hearts deeply; Still searching for purpose or how I want to live in life",
    recruitmentNeeds: "Looking for bandmates who like Chinese indie band music who want to play together"
  },
  {
    id: "15",
    name: "Andy | CrayzD",
    photo: "/photos/Andy.jpg",
    roles: ["Vocal", "Rap"],
    department: ["Performer", "Technician"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "lionelandy_21",
      telegram: "@wypcch112"
    },
    topAlbums: [
      "Eternal Atake - lil uzi vert",
      "Rodeo - Travis Scott",
      "The Sailor - Rich Brian",
      "Donda - Kanye West",
      "My Beautiful Dark Twisted Fantasy - Kanye west",
      "Death Race For Love - Juice Wrld"
    ],
    casualTalk: "I like exploring new music and I think all taylor swift's songs sound the same",
    recruitmentNeeds: "Looking for rappers."
  },
  {
    id: "16",
    name: "Wang Hongli Daniel Caesar | Frank Ocean",
    photo: "/photos/Wang_Hongli.jpg",
    roles: ["Vocal"],
    department: ["Performer"],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "whlsdsghhhh",
      telegram: "@ShuaiRen12345"
    },
    topAlbums: [
      "blonde",
      "channel orange",
      "Voodoo",
      "Never Enough",
      "Awaken Mylove",
      "Flower Boy"
    ],
    casualTalk: "I like to sing when im pooping",
  },
  {
    id: "17",
    name: "Zhao Junchuan | Danny",
    photo: "/photos/Zhao_Junchuan.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
    topAlbums: [
      "Nica’s Dream - Dee Dee Bridgewater",
      "Bye Bye Blackbird - Etta Jones",
      "I am what I am - Veronica Swift",
      "Think - Aretha Franklin",
      "You’re not here - Cynthia Erivo",
      "That’s what friends are for - Dionne Warwick"
    ],
    casualTalk: "A Jazzy cat 🎷🐱 (I'm in NUS JazzBand as well~)",
  },
  {
    id: "18",
    name: "Li Jianing",
    department: ["Performer"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "19",
    name: "Liao Tingdong",
    department: ["Performer"],
    bands: ["2"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "20",
    name: "Li Gangwei",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "21",
    name: "Tong Zhongyi",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "22",
    name: "Wu Xiangjiehui",
    department: ["Performer"],
    roles: ["Guitar"],
    bands: ["3", "5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "23",
    name: "Qin Chuqi",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "24",
    name: "Zhao Mingyu",
    department: ["Performer"],
    roles: ["Vocal"],
    bands: ["3", "5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "25",
    name: "Jiang Songting",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "26",
    name: "Pan Xiaodi",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "27",
    name: "Yang Xingyi",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "28",
    name: "德里克",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "29",
    name: "Mike",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "30",
    name: "张泽华",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "31",
    name: "陈潘升",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "32",
    name: "Belle",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "33",
    name: "陈夕",
    department: ["Performer"],
    bands: ["6"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "34",
    name: "周芃睿",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "35",
    name: "王梓莘",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "36",
    name: "季嘉豪",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "37",
    name: "田又予",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "38",
    name: "李霄扬",
    department: ["Performer"],
    roles: ["Guitar"],
    bands: ["7", "5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "39",
    name: "王宇豪",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "40",
    name: "刘现奕",
    department: ["Performer"],
    bands: ["7"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "41",
    name: "Bei Chengyushu",
    department: ["Performer"],
    roles: ["Guitar"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "42",
    name: "Huang Yuqi",
    department: ["Performer"],
    bands: ["5"],
    roles: ["Bass"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "43",
    name: "Li Daoxin",
    department: ["Performer"],
    bands: ["5"],
    roles: ["Bass"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "44",
    name: "Guan Ziwen",
    department: ["Performer"],
    roles: ["Trumpet"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "45",
    name: "Wu jiawei",
    department: ["Performer"],
    roles: ["Viola"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "46",
    name: "Qian Ruiwen",
    department: ["Performer"],
    roles: ["Keys", "Synthesizer"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "47",
    name: "Wang Yuchen",
    department: ["Performer"],
    roles: ["Vocal"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
]; 