document.addEventListener("DOMContentLoaded", () => {
  // Updated university data with a new 'scholarships' field for each entry.
  const universityData = [
    {
      name: "Hokkaido University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers the Integrated Science Program (ISP) with majors in science and engineering fields, and the Modern Japanese Studies Program (MJSP). Focuses on fostering global leaders.",
      website:
        "https://www.global.hokudai.ac.jp/admissions/undergraduate-admissions/",
      programCategories: ["Science", "Engineering", "Social Sciences"],
      scholarships:
        "Various scholarships available, including the Monbukagakusho (MEXT) scholarship and internal university-funded programs for high-achieving international students. Eligibility is often based on academic performance and need.",
      location: "Hokkaido",
    },
    {
      name: "Tohoku University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Future Global Leadership (FGL) program includes degrees in Applied Marine Biology, Molecular Chemistry, and Mechanical and Aerospace Engineering, all taught in English.",
      website: "https://www.tohoku.ac.jp/en/admissions/",
      programCategories: ["Science", "Engineering"],
      scholarships:
        "Offers the MEXT scholarship and a tuition reduction for top students. Students can also apply for scholarships from private foundations after enrollment.",
      location: "Tohoku",
    },
    {
      name: "University of Tokyo",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Programs in English at Komaba (PEAK) offers two tracks: International Program on Japan in East Asia and International Program on Environmental Sciences.",
      website: "https://peak.c.u-tokyo.ac.jp/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "The PEAK program offers its own scholarship system, providing a full tuition exemption and a stipend. Other scholarships from the Japan Student Services Organization (JASSO) and private groups are also an option.",
      location: "Tokyo",
    },
    {
      name: "Kyoto University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Kyoto iUP (International Undergraduate Program) and an International Course Program in Civil Engineering. Aims to educate students with a global perspective.",
      website: "https://www.iup.kyoto-u.ac.jp/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "The Kyoto iUP offers a comprehensive scholarship that covers tuition, admission fees, and a monthly stipend for living expenses. The scholarship is awarded to all accepted students.",
      location: "Kyoto",
    },
    {
      name: "Kyushu University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers English-taught programs in Engineering (Aerospace, Mechanical, etc.) and Bioresource and Bioenvironment.",
      website: "https://www.isc.kyushu-u.ac.jp/g30/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "Supports MEXT scholarships and has its own Kyushu University International Student Scholarship, which provides a tuition waiver and monthly allowance. Applications are competitive.",
      location: "Fukuoka",
    },
    {
      name: "Nagoya University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Global 30 International Programs cover a wide range including Automotive Engineering, Physics, Chemistry, Biological Science, Social Sciences, and Japan-in-Asia Cultural Studies.",
      website: "https://admissions.g30.nagoya-u.ac.jp/",
      programCategories: ["Engineering", "Science", "Social Sciences"],
      scholarships:
        "A limited number of MEXT scholarships are available. The university also has a program to reduce or waive tuition fees for a certain number of students each year based on academic merit.",
      location: "Nagoya",
    },
    {
      name: "Osaka University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Features the Human Sciences International Undergraduate Degree Program and various engineering programs taught in English. Known for its strong industry connections.",
      website: "https://www.osaka-u.ac.jp/en/admissions/intl-students/",
      programCategories: ["Social Sciences", "Engineering"],
      scholarships:
        "Applicants for the Human Sciences program can apply for a full tuition exemption and a stipend. Other options include JASSO and private scholarships.",
      location: "Osaka",
    },
    {
      name: "University of Tsukuba",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers several English-taught programs including Life and Environmental Sciences, International Social Sciences, and Medical Sciences.",
      website: "https://www.global.tsukuba.ac.jp/",
      programCategories: ["Science", "Social Sciences"],
      scholarships:
        "Offers a special scholarship for international students that provides a tuition waiver for the first year. Additional scholarship opportunities are available upon enrollment.",
      location: "Tsukuba",
    },
    {
      name: "Akita International University",
      type: "Local Public",
      tuition: 696000,
      admissionFee: 282000,
      programs:
        "A liberal arts university where all classes are taught in English. Offers majors in Global Business and Global Studies. Strong focus on study abroad.",
      website: "https://web.aiu.ac.jp/en/admissions/undergraduate/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Several scholarships are available, including a tuition waiver scholarship for international students and a living stipend for those with a high GPA.",
      location: "Akita",
    },
    {
      name: "Hiroshima University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Integrated Global Studies (IGS) program provides an interdisciplinary curriculum covering humanities, social sciences, and natural sciences.",
      website: "https://www.hiroshima-u.ac.jp/en/igs",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "The IGS program offers a scholarship that covers both the tuition and admission fees for all four years, provided students maintain a strong academic record.",
      location: "Hiroshima",
    },
    {
      name: "Tokyo Institute of Technology",
      type: "National",
      tuition: 635400,
      admissionFee: 282000,
      programs:
        "The Global Scientists and Engineers Program (GSEP) is an undergraduate engineering degree for international students. Focuses on transdisciplinary science and engineering.",
      website:
        "https://www.titech.ac.jp/english/admissions/prospective-students/undergraduate-majors/gsep",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "A small number of high-achieving international students are offered the Tokyo Tech International Scholarship, which covers tuition and living expenses for the duration of the program.",
      location: "Tokyo",
    },
    {
      name: "Fukushima Medical University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The School of Nursing offers courses and clinical training opportunities for international students in English.",
      website: "https://www.fmu.ac.jp/en/admissions/",
      programCategories: ["Science"],
      scholarships:
        "The university provides information on scholarships from various private foundations that are available for international students in the medical field.",
      location: "Fukushima",
    },
    {
      name: "Gunma Prefectural Women's University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Department of International Communication provides a program focused on global communication and cultural understanding, with many courses taught in English.",
      website: "https://www.gpwu.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Scholarships are available through the Gunma Prefectural Government and other external organizations. The university assists students with the application process after enrollment.",
      location: "Gunma",
    },
    {
      name: "Kyoto University of Advanced Science",
      type: "Local Public",
      tuition: 1460000,
      admissionFee: 200000,
      programs:
        "The Faculty of Engineering offers a comprehensive program fully in English, covering fields like mechanical and electrical engineering.",
      website: "https://www.kuas.ac.jp/en/faculty-of-engineering/",
      programCategories: ["Engineering"],
      scholarships:
        "Offers a highly competitive scholarship system, including a full tuition waiver and a monthly stipend for the duration of the program. Recipients are selected based on their academic and personal achievements.",
      location: "Kyoto",
    },
    {
      name: "Tokyo Metropolitan University",
      type: "Local Public",
      tuition: 661800,
      admissionFee: 282000,
      programs:
        "While most programs are in Japanese, the Faculty of Science offers some advanced courses and research opportunities in English for international students.",
      website: "https://www.tmu.ac.jp/english/admissions/undergraduate.html",
      programCategories: ["Science"],
      scholarships:
        "Information on a wide range of scholarships, including those from the Tokyo Metropolitan Government and various private organizations, is provided on their website.",
      location: "Tokyo",
    },
    {
      name: "University of Kitakyushu",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Foreign Studies has a department focusing on English language, literature, and cross-cultural communication.",
      website: "https://www.kitakyu-u.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Provides details on scholarships from foundations and local governments, which often include a tuition reduction or a monthly stipend.",
      location: "Kitakyushu",
    },
    {
      name: "Prefectural University of Kumamoto",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Language and Literature offers a program focused on English literature and linguistics, aimed at fostering international perspectives.",
      website: "https://www.pu-kumamoto.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university assists with applications for external scholarships from the Kumamoto Prefectural Government and other private organizations. Merit-based scholarships are also available.",
      location: "Kumamoto",
    },
    {
      name: "Aichi Prefectural University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Department of Global Communication and the Department of Global Culture and Communication offer English-taught programs.",
      website: "https://www.aichi-pu.ac.jp/international/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Various scholarships are available for international students, including a tuition exemption program based on academic performance after the first semester.",
      location: "Aichi",
    },
    {
      name: "University of Hyogo",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The School of Economics and Management offers an international program with a focus on global business and economics, taught entirely in English.",
      website: "https://www.u-hyogo.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university has an internal scholarship program for students in the international program, offering a monthly stipend and a possible tuition reduction.",
      location: "Hyogo",
    },
    {
      name: "Yokohama City University",
      type: "Local Public",
      tuition: 573000,
      admissionFee: 282000,
      programs:
        "The Faculty of International Arts and Sciences offers some interdisciplinary courses in English, particularly within its global studies cluster.",
      website: "https://www.ycu.ac.jp/english/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "The university offers a scholarship for international students that can cover a portion of tuition and provides a monthly living allowance. Eligibility is based on academic merit.",
      location: "Yokohama",
    },
    {
      name: "Eikei University of Hiroshima",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Eikei Program is an innovative global liberal arts program fully taught in English, focusing on global leadership, innovation, and cross-cultural problem-solving.",
      website: "https://www.eikei.ac.jp/e/admission/eikeiprogram/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "Eikei offers a tuition reduction for international students with excellent academic records. Students are also eligible for scholarships from the Japan Student Services Organization (JASSO) and other private foundations.",
      location: "Hiroshima",
    },
    {
      name: "Muroran Institute of Technology",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers an international program in engineering, focusing on creating innovative solutions for global challenges in science and technology.",
      website: "https://www.muroran-it.ac.jp/intl/en/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "A limited number of tuition waivers are available for international students. Students can also apply for scholarships from private foundations after being accepted.",
      location: "Hokkaido",
    },
    {
      name: "University of the Ryukyus",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers an international program in the Faculty of Engineering and Agriculture, focusing on subjects relevant to subtropical and island environments.",
      website: "https://www.u-ryukyu.ac.jp/en/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "Offers a full tuition waiver for international students in select programs. This scholarship is highly competitive and is awarded to students with a strong academic background.",
      location: "Okinawa",
    },
    {
      name: "Chiba University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Japan Program at Chiba (J-PAC) offers courses in English on Japanese culture, society, and language for international students.",
      website:
        "https://www.chiba-u.ac.jp/e/admissions/undergraduate/index.html",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university provides information and assistance for international students to apply for various external scholarships, including those from the Japanese government and private organizations.",
      location: "Chiba",
    },
    {
      name: "Gifu University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Applied Biological Sciences has some English-taught courses related to life sciences and environmental studies, often part of exchange programs.",
      website: "https://www.gifu-u.ac.jp/en/admissions/",
      programCategories: ["Science"],
      scholarships:
        "Information on MEXT scholarships and other government-funded programs is available through the university's international office. A small number of internal scholarships are also offered.",
      location: "Gifu",
    },
    {
      name: "Okayama University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Discovery Program for Global Learners offers a liberal arts curriculum taught in English, allowing students to design their own major.",
      website: "https://discovery.okayama-u.ac.jp/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "The Discovery Program offers a variety of scholarships, including merit-based tuition reductions and a living stipend for students with a high GPA.",
      location: "Okayama",
    },
    {
      name: "Kobe University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers some English-taught courses in maritime sciences, economics, and business administration, primarily for exchange students but accessible to degree-seekers.",
      website: "https://www.kobe-u.ac.jp/en/study-in-kobe/admission/index.html",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university provides a list of recommended scholarships from external organizations, and some internal financial aid may be available for enrolled international students.",
      location: "Kobe",
    },
    {
      name: "Kanazawa University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers several international programs taught in English, including courses in Human and Social Sciences, and Science and Engineering.",
      website: "https://www.kanazawa-u.ac.jp/e/abroad/index.html",
      programCategories: ["Social Sciences", "Science", "Engineering"],
      scholarships:
        "The university offers a scholarship program for international students, which can include a tuition exemption and a monthly stipend. The application is competitive.",
      location: "Kanazawa",
    },
    {
      name: "Hosei University",
      type: "National",
      tuition: 660000,
      admissionFee: 282000,
      programs:
        "The GIS Program offers courses on Global and Intercultural Studies, primarily focused on social sciences and international relations.",
      website: "https://www.hosei.ac.jp/en/admissions/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Hosei University offers its own scholarships specifically for students in the GIS program. These scholarships are awarded based on academic merit and financial need.",
      location: "Tokyo",
    },
    {
      name: "Kyoto Institute of Technology",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The department of Architecture and Design offers courses for international students in English, focusing on sustainable urban development.",
      website: "https://www.kit.ac.jp/en/admissions/",
      programCategories: ["Engineering"],
      scholarships:
        "The university provides assistance to international students in applying for scholarships from external foundations and local governments.",
      location: "Kyoto",
    },
    {
      name: "Gifu Pharmaceutical University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers an international program in pharmaceutical sciences, focusing on drug discovery and development with courses taught in English.",
      website: "https://www.gifu-pu.ac.jp/english/",
      programCategories: ["Science"],
      scholarships:
        "Scholarships for international students are available, including a tuition waiver for the first year based on academic performance in high school.",
      location: "Gifu",
    },
    {
      name: "Mie University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers an international program in the Faculty of Bioresources, with a strong focus on sustainable agriculture and environmental science.",
      website: "https://www.mie-u.ac.jp/en/",
      programCategories: ["Science"],
      scholarships:
        "The university provides information on various scholarships from private foundations and organizations. A small number of internal scholarships are also available.",
      location: "Mie",
    },
    {
      name: "Kumamoto University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The College of Cross-Cultural and Interdisciplinary Studies offers courses in English covering fields like global business and Japanese culture.",
      website: "https://www.kumamoto-u.ac.jp/kokusaikoryu/en/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Offers a tuition waiver program for international students with excellent academic records. Students can also apply for scholarships from external organizations after being accepted.",
      location: "Kumamoto",
    },
    {
      name: "Nagasaki University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The International Course in Marine Science and Technology offers English-taught programs focusing on marine biology and oceanography.",
      website: "https://www.nagasaki-u.ac.jp/en/",
      programCategories: ["Science", "Engineering"],
      scholarships:
        "Offers a limited number of scholarships that cover tuition and provide a monthly stipend. The university also assists with applications for external scholarships.",
      location: "Nagasaki",
    },
    {
      name: "Shizuoka University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The College of Engineering and Faculty of Informatics offer a variety of courses and research projects in English for international students.",
      website: "https://www.shizuoka.ac.jp/english/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "A tuition waiver program is available for international students who demonstrate financial need or high academic merit. The university also offers a variety of private scholarships.",
      location: "Shizuoka",
    },
    {
      name: "Yamagata University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Engineering provides English-taught research programs in fields like chemical engineering and material science.",
      website: "https://www.yamagata-u.ac.jp/en/",
      programCategories: ["Engineering", "Science"],
      scholarships:
        "The university offers a variety of scholarships from private organizations and foundations. A limited number of internal scholarships are also available for international students.",
      location: "Yamagata",
    },
    {
      name: "Okayama Prefectural University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers some English-taught courses in the Faculty of Health and Welfare, with a focus on global health issues and practices.",
      website: "https://www.oka-pu.ac.jp/english/",
      programCategories: ["Science"],
      scholarships:
        "The university provides information on scholarships from private foundations and local governments, which often include a tuition reduction or a monthly stipend.",
      location: "Okayama",
    },
    {
      name: "Saitama University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers English-taught programs in Environmental Science and Engineering for international students.",
      website: "https://en.saitama-u.ac.jp/",
      programCategories: ["Science", "Engineering"],
      scholarships:
        "The university offers a variety of scholarships, including a tuition waiver for students with a high academic performance.",
      location: "Saitama",
    },
    {
      name: "Yokohama National University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The College of Urban Sciences offers an English-taught program on urban planning and sustainability.",
      website: "https://www.ynu.ac.jp/english/admissions/foreign/ug_eng/",
      programCategories: ["Social Sciences", "Engineering"],
      scholarships:
        "Offers a limited number of scholarships for international students, including a tuition waiver and a monthly stipend.",
      location: "Yokohama",
    },
    {
      name: "Niigata University",
      type: "National",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Engineering offers a program focused on global education and research, with a variety of courses in English.",
      website: "https://www.niigata-u.ac.jp/en/",
      programCategories: ["Engineering"],
      scholarships:
        "Provides assistance in applying for scholarships from the Japanese government and other private organizations.",
      location: "Niigata",
    },
    {
      name: "University of Shizuoka",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "Offers a program in the Faculty of International Relations that includes courses on political science, economics, and culture, all taught in English.",
      website: "https://www.u-shizuoka-ken.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university provides information on scholarships from local and national governments, which often include a tuition reduction or a monthly stipend.",
      location: "Shizuoka",
    },
    {
      name: "Fukushima University",
      type: "Local Public",
      tuition: 535800,
      admissionFee: 282000,
      programs:
        "The Faculty of Symbiotic Systems Science offers some advanced courses in English for international students, focusing on environmental and information science.",
      website: "https://www.fukushima-u.ac.jp/en/",
      programCategories: ["Science", "Engineering"],
      scholarships:
        "Information on various scholarships, including those from the Fukushima Prefectural Government, is available through the university's international office.",
      location: "Fukushima",
    },
    {
      name: "Temple University, Japan Campus",
      type: "Private",
      tuition: 1550000,
      admissionFee: 200000,
      programs:
        "The first foreign university in Japan, offering a full American curriculum in English with majors in fields like International Business, Psychology, and Communications.",
      website: "https://www.tuj.ac.jp/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Temple University, Japan Campus, offers a variety of scholarships for both new and continuing students. These are awarded based on academic merit and financial need.",
      location: "Tokyo",
    },
    {
      name: "Musashino University",
      type: "Private",
      tuition: 1200000,
      admissionFee: 250000,
      programs:
        "The Global Business Program offers a comprehensive curriculum in international business, with a focus on leadership and innovation.",
      website: "https://www.musashino-u.ac.jp/en/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Offers a number of scholarships for international students, including tuition waivers and a monthly stipend. The scholarships are awarded based on academic merit and financial need.",
      location: "Tokyo",
    },
    {
      name: "Gakushuin University",
      type: "Private",
      tuition: 1100000,
      admissionFee: 200000,
      programs:
        "The Faculty of International Social Sciences offers a program in English focusing on interdisciplinary studies.",
      website: "https://www.gakushuin.ac.jp/univ/intl/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university offers a limited number of scholarships for international students, including a tuition waiver and a monthly stipend. The scholarships are awarded based on a comprehensive assessment of the student's academic and personal achievements.",
      location: "Tokyo",
    },
    {
      name: "Kansai Gaidai University",
      type: "Private",
      tuition: 1300000,
      admissionFee: 200000,
      programs:
        "The Asian Studies Program offers a wide range of courses in English on Asian culture, society, and politics.",
      website: "https://www.kansaigaidai.ac.jp/asp/prospective/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Kansai Gaidai University offers a number of scholarships for international students, including a tuition waiver and a monthly stipend. The scholarships are awarded based on academic merit.",
      location: "Osaka",
    },
    {
      name: "Kansai University",
      type: "Private",
      tuition: 1100000,
      admissionFee: 200000,
      programs:
        "The Faculty of Informatics offers a program in English focusing on data science, AI, and information technology.",
      website: "https://www.kansai-u.ac.jp/english/admission/",
      programCategories: ["Science"],
      scholarships:
        "Offers a variety of scholarships for international students, including a tuition waiver and a monthly stipend. The scholarships are awarded based on a competitive application process.",
      location: "Osaka",
    },
    {
      name: "Waseda University",
      type: "Private",
      tuition: 1100000,
      admissionFee: 282000,
      programs:
        "Offers various English-taught programs including in the School of Social Sciences and School of International Liberal Studies.",
      website: "https://www.waseda.jp/inst/admissions/en/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Waseda University has a number of scholarships for international students, including tuition waivers and stipends. Some are based on academic merit, while others are based on financial need.",
      location: "Tokyo",
    },
    {
      name: "Sophia University",
      type: "Private",
      tuition: 1100000,
      admissionFee: 300000,
      programs:
        "Known for its liberal arts programs. The Faculty of Liberal Arts, Science and Technology, and Sophia Program for Sustainable Futures are taught in English.",
      website: "https://www.sophia.ac.jp/eng/admissions/ug/index.html",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "Sophia University offers numerous scholarships, including a tuition reduction for international students and a stipend for those who demonstrate financial need. There are also scholarships from various foundations.",
      location: "Tokyo",
    },
    {
      name: "Keio University",
      type: "Private",
      tuition: 1100000,
      admissionFee: 282000,
      programs:
        "The GIGA Program (Global Information and Governance Academic Program) at the Shonan Fujisawa Campus offers degrees in English on Information Science and Policy Management.",
      website: "https://www.keio.ac.jp/en/admissions/undergraduate/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "Keio University offers a number of scholarships for international students, including the Keio Gakuji Shogakukin (scholarship), which can cover a portion of tuition and provide a monthly stipend.",
      location: "Tokyo",
    },
    {
      name: "International Christian University",
      type: "Private",
      tuition: 1000000,
      admissionFee: 300000,
      programs:
        "A liberal arts college where all majors can be studied in English. Offers a wide range of humanities, social sciences, and natural sciences courses.",
      website: "https://www.icu.ac.jp/en/admissions/undergraduate/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "ICU offers a wide range of scholarships, including a tuition reduction for international students and a monthly stipend. Some scholarships are based on academic performance, while others are based on financial need.",
      location: "Tokyo",
    },
    {
      name: "Ritsumeikan Asia Pacific University (APU)",
      type: "Private",
      tuition: 1400000,
      admissionFee: 200000,
      programs:
        "Offers programs in English and Japanese. The College of International Management and College of Asia Pacific Studies are entirely English-based.",
      website: "https://en.apu.ac.jp/",
      programCategories: ["Social Sciences"],
      scholarships:
        "APU offers a variety of scholarships, including a tuition waiver of up to 100% for international students. The scholarship is awarded based on a comprehensive assessment of the student's academic and personal achievements.",
      location: "Oita",
    },
    {
      name: "Doshisha University",
      type: "Private",
      tuition: 900000,
      admissionFee: 200000,
      programs:
        "The Institute for the Liberal Arts (ILA) offers a liberal arts curriculum in English with a focus on Japanese and global studies.",
      website: "https://ila.doshisha.ac.jp/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university has an extensive scholarship program for students in the ILA, with options for a tuition waiver of up to 100% and a monthly stipend. Awards are based on a competitive application process.",
      location: "Kyoto",
    },
    {
      name: "Meiji University",
      type: "Private",
      tuition: 1200000,
      admissionFee: 200000,
      programs:
        "Offers the School of Global Japanese Studies (GSJS), where all core classes are taught in English.",
      website: "https://www.meiji.ac.jp/cip/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Meiji University provides a range of scholarships for international students, including a tuition reduction and a monthly stipend. Eligibility is based on academic performance and financial need.",
      location: "Tokyo",
    },
    {
      name: "Kyushu Sangyo University",
      type: "Private",
      tuition: 1300000,
      admissionFee: 250000,
      programs:
        "The Faculty of International Arts and Sciences provides a program focused on global communication and culture, with many courses in English.",
      website: "https://www.kyusan-u.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "The university offers a number of scholarships, including a tuition waiver for a limited number of students. The scholarship is awarded based on a comprehensive assessment of the student's academic and personal achievements.",
      location: "Fukuoka",
    },
    {
      name: "Toyo University",
      type: "Private",
      tuition: 1200000,
      admissionFee: 200000,
      programs:
        "The Global and Regional Studies Program offers courses in English focusing on social issues, economics, and international relations.",
      website: "https://www.toyo.ac.jp/english/",
      programCategories: ["Social Sciences"],
      scholarships:
        "Toyo University offers a variety of scholarships for international students, including a tuition waiver and a monthly stipend. The scholarship is awarded based on academic merit.",
      location: "Tokyo",
    },
    {
      name: "Yamanashi Gakuin University",
      type: "Private",
      tuition: 1000000,
      admissionFee: 200000,
      programs:
        "Offers the International College of Liberal Arts (iCLA), a liberal arts program with a wide range of majors including Japanese Arts, Business, and Political Science, all taught in English.",
      website: "https://www.icla.ygu.ac.jp/",
      programCategories: ["Social Sciences", "Science"],
      scholarships:
        "The iCLA offers a comprehensive scholarship program for international students, including a tuition waiver of up to 100% and a monthly stipend. The scholarship is awarded based on a competitive application process.",
      location: "Yamanashi",
    },
  ];

  const nationalGrid = document.getElementById("national-grid");
  const localPublicGrid = document.getElementById("local-public-grid");
  const privateGrid = document.getElementById("private-grid");
  const selectedUniversitiesGrid = document.getElementById(
    "selected-universities-grid"
  );
  const selectedUniversitiesSection = document.getElementById(
    "selected-universities-section"
  );
  const modal = document.getElementById("university-modal");
  const modalBody = document.getElementById("modal-body");
  const closeModalBtn = document.getElementById("close-modal");
  const searchInput = document.getElementById("search-input");
  const searchName = document.getElementById("search-name");
  const tuitionSlider = document.getElementById("tuition-slider");
  const tuitionValue = document.getElementById("tuition-value");
  const typeFilterBtns = document.querySelectorAll(".type-filter-btn");
  const programFilterBtns = document.querySelectorAll(".program-filter-btn");
  const resultsCount = document.getElementById("results-count");
  const noResults = document.getElementById("no-results");
  const nationalSection = document.getElementById("national-section");
  const localPublicSection = document.getElementById("local-public-section");
  const privateSection = document.getElementById("private-section");
  const autocompleteList = document.getElementById("autocomplete-list");

  let currentTypeFilter = "all";
  let activeProgramFilters = new Set();
  let selectedUniversities = new Set();
  let currentAutocompleteIndex = -1;

  const formatYen = (num) => `¥${num.toLocaleString("ja-JP")}`;

  const renderUniversities = () => {
    const selectedLocation = searchInput.value.toLowerCase();
    const searchNameValue = searchName.value.toLowerCase();
    const maxTuition = parseInt(tuitionSlider.value);
    const isProgramFilterActive = activeProgramFilters.size > 0;

    const filteredUniversities = universityData.filter((uni) => {
      const matchesType =
        currentTypeFilter === "all" || uni.type === currentTypeFilter;
      const matchesLocation =
        !selectedLocation ||
        uni.location.toLowerCase().includes(selectedLocation);
      const matchesName =
        !searchNameValue || uni.name.toLowerCase().includes(searchNameValue);
      const matchesTuition = uni.tuition <= maxTuition;
      const matchesProgram =
        !isProgramFilterActive ||
        uni.programCategories.some((cat) => activeProgramFilters.has(cat));

      return (
        matchesType &&
        matchesLocation &&
        matchesName &&
        matchesTuition &&
        matchesProgram
      );
    });

    const nationalUnis = filteredUniversities.filter(
      (uni) => uni.type === "National"
    );
    const localPublicUnis = filteredUniversities.filter(
      (uni) => uni.type === "Local Public"
    );
    const privateUnis = filteredUniversities.filter(
      (uni) => uni.type === "Private"
    );

    nationalGrid.innerHTML = "";
    localPublicGrid.innerHTML = "";
    privateGrid.innerHTML = "";

    nationalSection.classList.add("hidden");
    localPublicSection.classList.add("hidden");
    privateSection.classList.add("hidden");

    if (
      nationalUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "National")
    ) {
      nationalSection.classList.remove("hidden");
      nationalUnis.forEach((uni, index) => {
        nationalGrid.appendChild(createCard(uni, index));
      });
    }

    if (
      localPublicUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "Local Public")
    ) {
      localPublicSection.classList.remove("hidden");
      localPublicUnis.forEach((uni, index) => {
        localPublicGrid.appendChild(createCard(uni, index));
      });
    }

    if (
      privateUnis.length > 0 &&
      (currentTypeFilter === "all" || currentTypeFilter === "Private")
    ) {
      privateSection.classList.remove("hidden");
      privateUnis.forEach((uni, index) => {
        privateGrid.appendChild(createCard(uni, index));
      });
    }

    const totalFiltered =
      nationalUnis.length + localPublicUnis.length + privateUnis.length;
    if (totalFiltered === 0) {
      noResults.classList.remove("hidden");
      resultsCount.textContent = "";
    } else {
      noResults.classList.add("hidden");
      resultsCount.textContent = `Showing ${totalFiltered} of ${universityData.length} universities.`;
    }
  };

  const createCard = (uni, index) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md flex flex-col transform hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden";
    card.dataset.name = uni.name;

    const isSelected = selectedUniversities.has(uni.name);

    card.innerHTML = `
              <span class="card-number">${index + 1}</span>
              <div class="flex-grow p-6">
                  <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    uni.type === "National"
                      ? "bg-blue-100 text-blue-800"
                      : uni.type === "Local Public"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }">${uni.type}</span>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">${
                    uni.name
                  }</h3>
                  <p class="text-gray-600 text-sm mb-4">Annual Tuition: <span class="font-semibold text-gray-800">${formatYen(
                    uni.tuition
                  )}</span></p>
              </div>
              <div class="mt-auto p-6 pt-0 flex gap-4">
                  <button class="view-details bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">View Details</button>
                  <button class="select-university flex-1 text-center px-4 py-2 rounded-xl transition font-semibold ${
                    isSelected
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }">
                      ${isSelected ? "Unselect" : "Select"}
                  </button>
              </div>
          `;

    card
      .querySelector(".view-details")
      .addEventListener("click", () => showModal(uni));
    card.querySelector(".select-university").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleUniversitySelection(uni);
    });

    return card;
  };

  const toggleUniversitySelection = (uni) => {
    if (selectedUniversities.has(uni.name)) {
      selectedUniversities.delete(uni.name);
    } else {
      selectedUniversities.add(uni.name);
    }
    renderSelectedUniversities();
    renderUniversities();
  };

  const renderSelectedUniversities = () => {
    selectedUniversitiesGrid.innerHTML = "";
    if (selectedUniversities.size > 0) {
      selectedUniversitiesSection.classList.remove("hidden");
      Array.from(selectedUniversities).forEach((uniName) => {
        const uni = universityData.find((u) => u.name === uniName);
        if (uni) {
          const card = createSelectedCard(uni);
          selectedUniversitiesGrid.appendChild(card);
        }
      });
    } else {
      selectedUniversitiesSection.classList.add("hidden");
    }
  };

  const createSelectedCard = (uni) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-md flex flex-col relative overflow-hidden";
    card.innerHTML = `
              <div class="flex-grow p-6">
                  <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    uni.type === "National"
                      ? "bg-blue-100 text-blue-800"
                      : uni.type === "Local Public"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }">${uni.type}</span>
                  <h3 class="text-xl font-bold mb-2 text-gray-900">${
                    uni.name
                  }</h3>
                  <p class="text-gray-600 text-sm mb-4">Annual Tuition: <span class="font-semibold text-gray-800">${formatYen(
                    uni.tuition
                  )}</span></p>
              </div>
              <div class="mt-auto p-6 pt-0 flex gap-4">
                  <button class="view-details bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">View Details</button>
                  <button class="remove-selected flex-1 text-center px-4 py-2 rounded-lg transition font-semibold bg-red-500 text-white hover:bg-red-600">
                      Remove
                  </button>
              </div>
          `;

    card
      .querySelector(".view-details")
      .addEventListener("click", () => showModal(uni));
    card.querySelector(".remove-selected").addEventListener("click", () => {
      selectedUniversities.delete(uni.name);
      renderSelectedUniversities();
      renderUniversities();
    });

    return card;
  };

  const showModal = (uni) => {
    const totalFirstYearCost = uni.tuition + uni.admissionFee;

    modalBody.innerHTML = `
              <h2 class="text-3xl font-bold mb-2">${uni.name}</h2>
              <span class="inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 ${
                uni.type === "National"
                  ? "bg-blue-100 text-blue-800"
                  : uni.type === "Local Public"
                  ? "bg-green-100 text-green-800"
                  : "bg-orange-100 text-orange-800"
              }">${uni.type} University</span>
              <div class="flex flex-wrap gap-2 mt-2">
                  ${uni.programCategories
                    .map(
                      (cat) =>
                        `<span class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-700">${cat}</span>`
                    )
                    .join("")}
              </div>
              <div class="space-y-4 text-gray-700 mt-4">
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Program Information</h4>
                      <p>${uni.programs}</p>
                  </div>
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Cost Breakdown & Fees</h4>
                      <ul class="list-disc list-inside">
                          <li>Annual Tuition: <span class="font-medium">${formatYen(
                            uni.tuition
                          )}</span></li>
                          <li>One-time Admission Fee: <span class="font-medium">${formatYen(
                            uni.admissionFee
                          )}</span></li>
                          <li><strong>Estimated First-Year Cost:</strong> <span class="font-bold">${formatYen(
                            totalFirstYearCost
                          )}</span></li>
                      </ul>
                  </div>
                  <div>
                      <h4 class="font-semibold text-lg text-gray-900">Scholarship Opportunities</h4>
                      <p>${uni.scholarships}</p>
                  </div>
                  <div class="mt-6">
                      <a href="${
                        uni.website
                      }" target="_blank" rel="noopener noreferrer" class="inline-block w-full sm:w-auto bg-gradient-to-r from-red-500 to-yellow-600 hover:from-red-500 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2">Visit Website →</a>
                  </div>
              </div>
          `;
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.querySelector(".modal-content").classList.remove("scale-95");
    document.body.style.overflow = "hidden";
  };

  const hideModal = () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.querySelector(".modal-content").classList.add("scale-95");
    document.body.style.overflow = "";
  };

  const renderTuitionChart = () => {
    const ctx = document.getElementById("tuition-chart").getContext("2d");
    const nationalUnis = universityData.filter((u) => u.type === "National");
    const localPublicUnis = universityData.filter(
      (u) => u.type === "Local Public"
    );
    const privateUnis = universityData.filter((u) => u.type === "Private");

    const avgNational =
      nationalUnis.reduce((acc, u) => acc + u.tuition, 0) / nationalUnis.length;
    const avgLocal =
      localPublicUnis.reduce((acc, u) => acc + u.tuition, 0) /
      localPublicUnis.length;
    const avgPrivate =
      privateUnis.reduce((acc, u) => acc + u.tuition, 0) / privateUnis.length;

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["National", "Local Public", "Private"],
        datasets: [
          {
            label: "Average Annual Tuition (JPY)",
            data: [avgNational, avgLocal, avgPrivate],
            backgroundColor: [
              "rgba(59, 131, 246, 1)",
              "rgba(16, 185, 129, 1)",
              "rgba(255, 166, 0, 1)",
            ],
            borderColor: [
              "rgba(59, 130, 246, 1)",
              "rgba(16, 185, 129, 1)",
              "rgba(255, 165, 0, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += formatYen(context.parsed.y);
                }
                return label;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return "¥" + value / 1000 + "k";
              },
            },
          },
        },
      },
    });
  };

  const updateAutocomplete = () => {
    const searchTerm = searchName.value.toLowerCase();
    autocompleteList.innerHTML = "";
    currentAutocompleteIndex = -1;

    if (searchTerm === "") {
      autocompleteList.classList.add("hidden");
      return;
    }

    const filtered = universityData.filter((uni) =>
      uni.name.toLowerCase().includes(searchTerm)
    );

    if (filtered.length > 0) {
      autocompleteList.classList.remove("hidden");
      filtered.forEach((uni) => {
        const item = document.createElement("div");
        item.className = "autocomplete-item";
        const matchText = uni.name.replace(
          new RegExp(searchTerm, "gi"),
          (match) => `<strong>${match}</strong>`
        );
        item.innerHTML = `${matchText}<div class="text-gray-500 text-sm">${uni.location}</div>`;
        item.addEventListener("click", () => {
          searchName.value = uni.name;
          autocompleteList.classList.add("hidden");
          renderUniversities();
        });
        autocompleteList.appendChild(item);
      });
    } else {
      autocompleteList.classList.add("hidden");
    }
  };

  // Event listeners for autocomplete functionality
  searchName.addEventListener("input", updateAutocomplete);
  searchName.addEventListener("focus", updateAutocomplete);
  searchName.addEventListener("keydown", (e) => {
    const items = autocompleteList.querySelectorAll(".autocomplete-item");
    if (e.key === "ArrowDown") {
      currentAutocompleteIndex = (currentAutocompleteIndex + 1) % items.length;
      highlightItem(items, currentAutocompleteIndex);
    } else if (e.key === "ArrowUp") {
      currentAutocompleteIndex =
        (currentAutocompleteIndex - 1 + items.length) % items.length;
      highlightItem(items, currentAutocompleteIndex);
    } else if (e.key === "Enter") {
      if (currentAutocompleteIndex > -1) {
        items[currentAutocompleteIndex].click();
      } else {
        renderUniversities();
      }
    }
  });

  const highlightItem = (items, index) => {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("active");
      }
    });
  };

  // Hide autocomplete when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchName.parentElement.contains(e.target)) {
      autocompleteList.classList.add("hidden");
    }
  });

  // Populate the location select dropdown
  const locations = [
    ...new Set(universityData.map((uni) => uni.location)),
  ].sort();
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location.toLowerCase();
    option.textContent = location;
    searchInput.appendChild(option);
  });

  typeFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      typeFilterBtns.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      currentTypeFilter = btn.dataset.filter;
      renderUniversities();
    });
  });

  programFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active-filter");
      const program = btn.dataset.program;
      if (activeProgramFilters.has(program)) {
        activeProgramFilters.delete(program);
      } else {
        activeProgramFilters.add(program);
      }
      renderUniversities();
    });
  });

  searchInput.addEventListener("change", renderUniversities);
  tuitionSlider.addEventListener("input", () => {
    tuitionValue.textContent = formatYen(tuitionSlider.value);
    renderUniversities();
  });

  closeModalBtn.addEventListener("click", hideModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  tuitionValue.textContent = formatYen(tuitionSlider.value);
  renderUniversities();
  renderTuitionChart();
  renderSelectedUniversities();
});
