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
      "We Like It Here",
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
    casualTalk: "she’s finding her violin bow",
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
    name: "Tong Zhongyi", photo: "",
    department: ["Performer"],
    bands: ["3"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "22",
    name: "Wu Xiangjiehui", photo: "/photos/X.jpg",
    department: ["Performer"],
    roles: ["Guitar"],
    bands: ["3", "5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "23",
    name: "Qin Chuqi", photo: "/photos/Kat_Qin.jpg",
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
    name: "Yang Xingyi", photo: "/photos/Jason_Yang.jpg",
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
    photo: "/photos/Huang_Yuqi.png",
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
    name: "Guan Ziwen", photo: "/photos/ZIWEN_GUAN.jpeg",
    department: ["Performer"],
    roles: ["Trumpet"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "45",
    name: "Wu jiawei", photo: "/photos/Wu_Xiangjiekang.jpeg",
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
    name: "Wang Yuchen", photo: "/photos/Zijian_Wang.jpg",
    department: ["Performer"],
    roles: ["Vocal"],
    bands: ["5"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "48",
    name: "Zhang Huiyan",
    photo: "/photos/Zhang_Huiyan.png",
    department: ["Performer"],
    roles: ["Vocal", "Rap"],
    bands: ["5", "2"],
    social: {
      wechat: "/qr-codes/collection.png",
    },
  },
  {
    id: "49",
    name: "Ann Lem Wey En",
    photo: "/photos/Ann_Wey_En.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@ann04910",
      instagram: "weyyen_"
    },
    topAlbums: [
      "Best Part",
      "可爱女人",
      "Home",
      "知足",
      "慢歌",
      "野狼disco🐺"
    ],
    casualTalk: "ENFP ! 快乐小狗😙 Music made my life💕",
    recruitmentNeeds: "With good vibes !"
  },
  {
    id: "50",
    name: "Guan Jingying Carolina",
    photo: "/photos/Caroline_Guan.jpeg",
    roles: ["Sound Engineer"],
    department: ["Technician"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@notlinaaa"
    },
    topAlbums: [
      "Arctic Monkeys - 505",
      "Chase Atlantic - Chase Atlantic",
      "Tate Mcrae - so close to what",
      "central Cee - wild West",
      "Harry Styles - Harry's home",
      "d4vd - Petals to Thorns"
    ],
    casualTalk: "I like loopy",
    recruitmentNeeds: "i'm into pop music, looking for a good band to record for them"
  },
  {
    id: "51",
    name: "Chen Jiageng",
    photo: "/photos/Chen_Jiageng.jpg",
    roles: ["Vocal", "Rap"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "89417920"
    },
    topAlbums: [
      "数独",
      "天蓝色",
      "晚了一分钟",
      "惬意",
      "多久后",
      "我想要你的爱"
    ],
    casualTalk: "ENFJ",
    recruitmentNeeds: "I'm looking for a crew and some friends to collaborate on rap music."
  },
  {
    id: "52",
    name: "Li Xintian Katie",
    photo: "/photos/Katie_Li.jpeg",
    roles: ["Drums", "Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "86017426",
      instagram: "kt_kazi"
    },
    topAlbums: [
      "门尼II：剧场 - 门尼",
      "Nevermind - Nirvana",
      "I'm Not Okay - My Chemical Romance",
      "IF NOT FOR YOU - Måneskin",
      "野生歌手 - 徐秉龙",
      "Let's Get the Party Started - Tom Morello/Bring Me the Horizon"
    ],
    casualTalk: "INFJ 🧡",
    recruitmentNeeds: "I wanna sing or play the drums on stage!"
  },
  {
    id: "53",
    name: "Zhang Jiahao", photo: "/photos/zhang_jiahao.jpg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@nydcbyxs",
      instagram: "0717_zjh"
    },
    topAlbums: [
      "David Tao",
      "未来 - 方大同",
      "I'm OK",
      "太平盛世",
      "叶惠美",
      "8 mile - Eminem"
    ],
    casualTalk: "说好了组一辈子乐队，就是一辈子。少一天，一分，一秒，都不是一辈子",
    recruitmentNeeds: "I want to have members that can have sparks of thoughts so that we can have creative ideas. 组一辈子乐队的成员可以吗，一休尼"
  },
  {
    id: "54",
    name: "Ye Xinzhi", photo: "/photos/weyen.jpeg",
    roles: ["Keys"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    }
  },
  {
    id: "55",
    name: "Ma Yuehan",
    photo: "/photos/Ma_Yuehan.jpg",
    roles: ["Vocal", "Rap"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@Yizhizhi",
      instagram: "myh_cynthiiia"
    },
    topAlbums: [
      "Masego - Masego",
      "Luv(sic) Hexalogy - Nujabes",
      "When She's Gone - Josh Fudge",
      "Soft Spot - keshi",
      "Mture Opinion (Illuminus Remix) - 西原健一郎"
    ]
  },
  {
    id: "56",
    name: "Zhuang Yuhan",
    photo: "/photos/Zhuang_Yuhan.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@Veronica_yuHan",
      instagram: "notver0n1ca"
    },
    topAlbums: [
      "PORTALS - Melanie Martinez",
      "GUTS - Olivia Rodrigo",
      "橙月 - 方大同",
      "T.I.A. - 袁娅维",
      "颁奖的时候我要缺席 - 裘德",
      "神经志 - 丁世光"
    ],
    casualTalk: "I hate coding n I love elevator shoes",
    recruitmentNeeds: "I can do acoustic, pop, and a bit of RnB, jst looking for people to vibe with on stage HEHEHE would be AWESOME to find ppl that hav same vibe to jam with!!"
  },
  {
    id: "57",
    name: "Li Tianyi Elise",
    photo: "/photos/Li_Tianyi.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@eliseltyyy",
      instagram: "elise.lty"
    },
    topAlbums: [
      "模糊 - 张鑫",
      "不见不离开 - 郑润泽/队长",
      "抗体 - 刘思鉴",
      "手心的蔷薇 - 林俊杰",
      "告白气球 - 周杰伦",
      "我知道 - 李学仕"
    ],
    casualTalk: "I loooveee partying and meeting new people !! My MBTI is ENFJ!",
    recruitmentNeeds: "I'm looking for someone who can dual with me!! And I wanna work with good guitarists/pianists for pop music"
  },
  {
    id: "58",
    name: "Wang Zijian",
    photo: "/photos/Wang_Zijian.jpg",
    roles: ["Keys", "Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@Zijian_W",
      instagram: "zijian_w_w"
    },
    topAlbums: [
      "Blue Moon - 0dB",
      "listen up - SOLOMON",
      "Simon - 丁世光",
      "我不知道 - 梁博",
      "越过山丘 - 杨宗纬",
      "我想 - 余佳运"
    ],
    casualTalk: "Hey! I'm a second-year PhD and a total ENFJ. I love jamming and singing with friends, enjoy the calm sea breeze at night, and can't resist a cool room with aircon on a hot day!",
    recruitmentNeeds: "I'm looking for friends who enjoy pop music and R&B, are open to trying some light rock, love live performances, and are interested in creating original music together."
  },
  {
    id: "59",
    name: "Chen Qixu",
    photo: "/photos/Chen_Qixu.jpeg",
    roles: ["Guitar", "Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "ch_ch_3",
      instagram: "chch__aaaa"
    },
    topAlbums: [
      "爱爱爱 - album",
      "浮世击",
      "Voodoo",
      "David Tao",
      "Prince",
      "一百种生活 - album"
    ],
    casualTalk: "ENFJ/ENFP poor English, Chinese please 🥹 梦想是成为R&B大师哈哈哈哈，找到属于自己的唱歌风格，有个舞台能爽一把。音乐的各个方面还很不成熟，希望在社团里多多向大家学习请教。感谢组织收留，love you guys~",
    recruitmentNeeds: "true R&B enthusiasts"
  },
  {
    id: "60",
    name: "Sun Siting Sistine", photo: "/photos/Siting_Sun.png",
    department: ["Technician"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "si.stine"
    },
    topAlbums: [
      "乐园 - 与非门",
      "WHY - 黄淑惠",
      "Everytime - 爱是唯一",
      "序 - 福禄寿",
      "七天 - 卢广仲",
      "跟着感觉走 - 张震岳"
    ],
    casualTalk: "TMEr，Freshmusic线下活动执行，音乐灵感编辑，乐评编辑，音乐灵感x泡泡岛音乐节项目策划，为华语独立音乐做点事儿。"
  },
  {
    id: "61",
    name: "Wen Yiran",
    photo: "/photos/Wen_Yiran.jpg",
    roles: ["Guitar", "Vocal", "Bass"],
    department: ["Performer", "Technician"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "yiran_wen19"
    },
    topAlbums: [
      "souvlaki",
      "in rainbows",
      "loveless",
      "unknown pleasures",
      "ants from up there"
    ],
    casualTalk: "infj. want to learn composition & arrangement!",
    recruitmentNeeds: "I can be bass/electric guitar/vocal in rock bands. I prefer alternative rock/post punk/shoegaze"
  },
  {
    id: "62",
    name: "Shen Xiangming Bernie", photo: "/photos/Xiangming_Shen.jpg",
    roles: ["Guitar"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    },
    topAlbums: [
      "Ok Computer - Radiohead",
      "冀西南林路行 - 万能青年旅店",
      "大人 - 東京事変",
      "Voodoo - D'Angelo",
      "Blood Sugar Sex Magik - RHCP",
      "安河桥北 - 宋东野"
    ],
    casualTalk: "想要简单模式的人生。。",
    recruitmentNeeds: "teammates who get the musical idea of each other and have good personalities"
  },
  {
    id: "63",
    name: "Yang Yifei Jason",
    photo: "/photos/Yang_Yifei.JPG",
    roles: ["Guitar"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "jasony1013"
    },
    topAlbums: [
      "In your atmosphere - John Mayer",
      "Just the Two of Us - Bill Withers",
      "Glimpse of Us - Joji",
      "红豆 - 方大同",
      "Away - Ichika Nito",
      "默 - 声音玩具"
    ],
    casualTalk: "An INTJ rhythm guitarist who just transferred from acoustic to electric, biggest dog person on this planet, enjoy pop+R&B+soul+jazz+Midwest emo (but my playlist is kinda messed up and includes all kinds of music)",
    recruitmentNeeds: "主要是当了那么久卧室吉他手，想走出来和大家一起玩音乐！队友不嫌我菜的话，想玩什么风格都可以，让我当节奏吉他/主音吉他/唱歌 也都可以"
  },
  {
    id: "64",
    name: "Tang Mingzhi Cody",
    photo: "/photos/Tang_Mingzhi.JPG",
    roles: ["Drums"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "NUSCody",
      instagram: "nuscody"
    },
    topAlbums: [
      "Boulevard of Broken Dreams - Green Day",
      "Heal the World - Michael Jackson",
      "Smooth Criminal - Michael Jackson",
      "I See Fire - Ed Sheeran",
      "Monster - Imagine Dragons",
      "Am I Dreaming - Metro Boomin"
    ],
    casualTalk: "Newbie drummer here! Would love for some pros to show me the ropes."
  },
  {
    id: "65",
    name: "Zhen Yuheng",
    photo: "/photos/Zhen_Yuheng.jpg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@zhenyuheng",
      instagram: "salty.pool"
    },
    topAlbums: [
      "Ride the Lightning",
      "Appetite for Destruction",
      "Babymetal",
      "Follow the Reaper",
      "Rebound",
      "Chinese Football"
    ],
    casualTalk: "I play metal, emo and classic rock, but my favourite music type to listen to is the underground ones.(why hate midwest emo ToT)",
    recruitmentNeeds: "already in a band~ but joining another band playing midwest emo is also ok! hope to have fun and performs on several stages with my band in geyao!"
  },
  {
    id: "66",
    name: "Ma Ye",
    photo: "/photos/Ma_Ye.png",
    roles: ["Keys", "Guitar"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "jazzitmaxio"
    },
    topAlbums: [
      "Abbiamo Tutti Un Blues Da Piangere",
      "In The Wake Of Poseidon",
      "Larks' Tongues in Aspic",
      "Mount Eerie",
      "Duke Ellington & John Coltrane",
      "Kind of Blue"
    ],
    casualTalk: "INFP. I'm fond of jazz music and progressive music. Welcome to make friends with me.",
    recruitmentNeeds: "I'm looking for a jazz drummer and a bassist who can play walking bass."
  },
  {
    id: "67",
    name: "Li Shutong XIII",
    roles: ["Bass"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    },
    topAlbums: [
      "834.194",
      "潜潜話",
      "Neotheater",
      "逆夢",
      "subtitle"
    ],
    casualTalk: "I'm an E(I?)NTJ and I like eating Zaocha.",
    recruitmentNeeds: "Looking for someone likes jpop but don't act like an otaku and cover some songs or make songs together."
  },
  {
    id: "68",
    name: "Shi Hanxu SNEY",
    photo: "/photos/Shi_Hanxu.jpg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "sneysneysney"
    },
    topAlbums: [
      "MBDTF - Kanye West",
      "Graduation",
      "Blonde",
      "2014 Forest Hills Drive",
      "Nothing was the same",
      "Vultures1&2"
    ],
    casualTalk: "thank god and music",
    recruitmentNeeds: "rappers and producers who are passionate about music and can collab with"
  },
  {
    id: "69",
    name: "Qin Katria",
    photo: "/photos/Qin_Katria.JPG",
    roles: ["Keys", "Vocal"],
    department: ["Performer", "Technician"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@Kat_Qin"
    },
    topAlbums: [
      "CASE STUDY 01 - Daniel Caesar",
      "CAPRISONGS - FKA Twigs",
      "333 - Tinashe",
      "Swimming - Mac Miller",
      "好好享受人类的莫名其妙 - 秦凡淇"
    ]
  },
  {
    id: "70",
    name: "Liu Yunfan",
    photo: "/photos/Liu_Yunfan.jpg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "liuyunfan216321"
    },
    topAlbums: [
      "自传 - 五月天",
      "第二人生 - 五月天",
      "人生海海 - 五月天",
      "范特西 - 周杰伦",
      "八度空间 - 周杰伦",
      "心中的日月 - 王力宏"
    ],
    casualTalk: "只有音乐最安全",
    recruitmentNeeds: "I am a new vocal to Geyao:). I enjoy all kinds of music such as pop and rock, especially the works of Mayday. I hope to find a band to jointly perform good Chinese works (including but not limited to the works of Mayday, Jay Chou, Wang Leehom, and other singers). The musicians don't need to be very talented. As long as we have fun together, that's all that matters."
  },
  {
    id: "71",
    name: "Zhang Mengyang",
    photo: "/photos/Zhang_Mengyang.jpeg",
    department: ["Publicity"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    }
  },
  {
    id: "72",
    name: "Yang Puzhao Yang Jie", photo: "/photos/杰.jpg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "13418993556"
    },
    topAlbums: [
      "心中的日月",
      "天外来物",
      "黑色柳丁",
      "八度空间"
    ],
    casualTalk: "ESTJ"
  },
  {
    id: "73",
    name: "Leo",
    roles: ["Keys", "Drums", "Various percussion instruments"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    }
  },
  {
    id: "74",
    name: "Gong Hengzhi ChrisG",
    photo: "/photos/Gong_Hengzhi.jpg",
    roles: ["Keys"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "Chris_yosula",
      instagram: "yosula520"
    }
  },
  {
    id: "75",
    name: "Ji Xiangtian Jee",
    photo: "/photos/Ji_Xiangtian.jpeg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@xiangtianjee",
      instagram: "ki11myse1fsoon"
    },
    topAlbums: [
      "Don't Look Back in Anger - Oasis",
      "Made of Stone - The Stone Roses",
      "These Grey Heavens - Omnium Gatherum",
      "Trash - Suede",
      "Now and Then - The Beatles",
      "Sidewalks - The Weeknd"
    ],
    casualTalk: "I'm cheerful and outgoing, and I've been playing drums for a few years. My MBTI is ENFJ. I don't really have a big dream, but I do hope to find friends who vibe with me and maybe form a fun band together. As for icks, I think I'm quite tolerant, so nothing really bothers me too much.",
    recruitmentNeeds: "I'm looking for friends who share the same passion for music, so that we can form a band that suits my style. I also hope to learn new things from others and have opportunities to perform both on campus and outside of school."
  },
  {
    id: "76",
    name: "Zuo Enpu", photo: "/photos/左恩溥.jpg",
    roles: ["Drums"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "91335106"
    },
    topAlbums: [
      "廉价的酒",
      "就让我坠入海底",
      "杀死那个石家庄人",
      "Skid row",
      "Night train"
    ],
    casualTalk: "I am an ENTP and I enjoy traveling.",
    recruitmentNeeds: "I'm looking for a pop or rock band. I have four years of performance experience and ten years of drumming experience."
  },
  {
    id: "77",
    name: "Ai Bingyue",
    photo: "/photos/Ai_Bingyue.JPG",
    roles: ["Guitar"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "alan_ai_by"
    },
    topAlbums: [
      "Rising Force",
      "Trilogy",
      "The Seventh Sign",
      "Erotic Cakes",
      "Songs in the Key of Life"
    ],
    casualTalk: "Shredder + Jazz Fusion(learning)"
  },
  {
    id: "78",
    name: "Li Boyan",
    photo: "/photos/Li_Boyan.jpg",
    roles: ["Keys", "Guitar", "Vocal", "Bass"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    },
    topAlbums: [
      "The Queen Is Dead - The Smiths",
      "Three Cheers for Sweet Revenge - My Chemical Romance",
      "Around the Fur - Deftones",
      "velocity : design : comfort - Sweet Trip",
      "Quadrophenia - The Who",
      "时代在召唤 - 假假条"
    ],
    casualTalk: "鬼叫吉他手，怪动静与阴间音乐爱好者。I like weird sound made from guitar. And all kinds of edgy music.",
    recruitmentNeeds: "寻找喜欢欧美布鲁斯摇滚、另类摇滚、重金属、（后）朋克的朋友一起玩。Looking for bandmates into blues rock, alt rock, heavy metal, (post-)punk music"
  },
  {
    id: "79",
    name: "Ace Teo",
    photo: "/photos/Ace_Teo.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@spacespades",
      instagram: "azeteo_"
    },
    topAlbums: [
      "勇敢额度",
      "Folklore",
      "心理学",
      "Hit me hard and soft",
      "归零",
      "不同凡想"
    ],
    casualTalk: "Hi, eh I am a 单依纯 fan and I like a wide variety of music genre and styles.",
    recruitmentNeeds: "Looking for a versatile band that can play pop ballads, pop rock and rnb."
  },
  {
    id: "80",
    name: "Chen Kaien", photo: "/photos/Chen_Qixu.jpeg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "@jokaaqi"
    },
    topAlbums: [
      "如也 - 陈粒",
      "署前街少年 - 赵雷",
      "万能青年旅店",
      "安河桥北 - 宋东野",
      "the subway - chappell roan",
      "华丽的冒险 - 陈绮贞"
    ],
    casualTalk: "I get rly excited about music & theatre, because music is the way to drown any sorrows or instantly know if you can vibe with someone. I have extremes, sometimes I need to hear people's stories through 民谣folk, sometimes I just wanna scream and dance to rock.. MBTI between ENFJ and ENTJ I'm usually the most talkative in the group (if i like the people) if not i can be extremely introverted. but if i like u i can be very fun! my frens know me as the entertainer of the group i am always seeking for growth too and nvr afraid to try new things, especially for music i could go on and on but anyw some of the things ive tried before that shaped a part of me are theatre, cross-talk, lots of public speaking and performing oh yea, i have a cute frenchie too :) noisy af but hes a good bass whenever i play the guitar or sing in my room",
    recruitmentNeeds: "I'm into folk, country and rock. Just want a bunch of fun friends to jam with - harmonise tgt and have fun"
  },
  {
    id: "81",
    name: "Ding Zhehao Doc.D",
    photo: "/photos/Ding_Zhehao.jpeg",
    roles: ["Rap"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "dingzh1"
    },
    topAlbums: [
      "My turn - lilbaby",
      "Wont stop - gunna",
      "one of wun - gunna",
      "Its only me - lilbaby",
      "龙年 - 华云龙",
      "钱专 - 河南说唱之神"
    ],
    casualTalk: "I'm ENFP and I love all types of music.",
    recruitmentNeeds: "I am working on an ep project so I want to find someone play this together!"
  },
  {
    id: "82",
    name: "Dai Mingjian Debrick", photo: "/photos/MINGJIAN_DAI.jpg",
    roles: ["Vocal"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png"
    },
    topAlbums: [
      "funeral",
      "ok computer",
      "in the aeroplane over the sea",
      "the velvet underground",
      "blonde",
      "yankee hotel foxtrot"
    ],
    casualTalk: "infp, want to sing on the stage, I like movies and indie music",
    recruitmentNeeds: "I am into indie music so I wanna work with a good mixer with the same vibes."
  },
  {
    id: "83",
    name: "Zhang Yingzhi ZiLO",
    photo: "/photos/Zhang_Yingzhi.JPG",
    roles: ["Rap"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      instagram: "melissa_yingzhi"
    },
    topAlbums: [
      "SOLO",
      "我想",
      "演说家",
      "不用去猜",
      "Xposed",
      "启示录"
    ],
    casualTalk: "ESFP"
  },
  {
    id: "84",
    name: "Zhou Ziqing Yorick Black",
    photo: "/photos/Zhou_Ziqing.jpg",
    roles: ["Bass"],
    department: ["Performer"],
    bands: [],
    social: {
      wechat: "/qr-codes/collection.png",
      telegram: "yorickblack9"
    },
    topAlbums: [
      "Exhibit B：The Human Condition - Exodus",
      "The Atrocity Exhibition：Exhibit A - Exodus",
      "Cafe Tropical - Johannes Linstead",
      "Eternal Melody II - Yoshiki",
      "Ride the Lightning - Metallica",
      "The Evolution of Chaos - Heathen"
    ],
    casualTalk: "沒有簡介",
    recruitmentNeeds: "我喜歡和一個可以向我提供古典和金屬作曲中肯建議的音樂監製人合作。"
  },
]; 