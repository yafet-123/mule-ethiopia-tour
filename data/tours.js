/**
 * Tours catalog for Mule Ethiopia Tour.
 *
 * Live production data shared by the tours listing page, the tour detail
 * pages and the homepage. Each tour carries the full story: hero gallery,
 * highlights, a detailed day-by-day itinerary, inclusions and exclusions.
 */
export const TourSummaryArray = [
  {
    id: "1",
    title: "10 days North, South, Danakil Depression plus Harar Itinerary",
    shortDescription: `Embark on a 10-day journey to uncover the hidden treasures of Ethiopia. This comprehensive tour 
      package takes you on an adventure through the enchanting north and south regions, the fascinating Danakil Depression, 
      and the historic city of Harar.  Unveil the Richness of Ethiopia and experience the best the country has to offer.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "3 Days/ 2 Nights",
    description: [`Immerse yourself in the ancient and diverse wonders of Ethiopia on a journey that unites history, nature, and culture in one 
      unforgettable experience. Begin your adventure by delving into Ethiopia's rich past as you explore the iconic UNESCO World Heritage Sites, 
      including the rock-hewn churches of Lalibela and the medieval castles of Gondar, where centuries-old stories come to life. Venture into the
      surreal landscapes of the Danakil Depression, a geological marvel in the Afar Triangle, where the earth's raw power is on full display with 
      its salt flats, lava lakes, and otherworldly formations. Your journey continues in the Omo Valley, where you'll encounter the vibrant and 
      istinct tribal cultures of the Hamar, Mursi, Karo, and Dassenech people, offering a rare opportunity to engage with Ethiopia’s diverse 
      ethnic groups and witness their unique traditions and rituals. Finally, discover the historic city of Harar, a UNESCO-listed gem where 
      the ancient walled city charms with its colorful alleyways, bustling markets, and the extraordinary hyena feeding ceremony that reflects 
      the rich cultural tapestry of this remarkable region. This comprehensive exploration of Ethiopia promises an enriching experience, filled 
      with moments of awe and discovery, that will leave you with lasting memories of this captivating land.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/danakil/mule-ethiopia-tours-dallol-1.jpg",
      "/images/home/mule-ethiopia-tours-danakil-dallol.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-gaetale-pool.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-3.jpg",
      "/images/home/mule-ethiopia-tours-lalibela-bete-giyorgis.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-1.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-4.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-5.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-timket-1.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-gamo-dancers.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-1.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-5.jpg",
      "/images/home/mule-ethiopia-tours-lake-tana-pelicans.jpg",
    ],
    imagePath: "/images/tours/danakil/mule-ethiopia-tours-dallol-6.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Tour Lalibela",
        subtitle: "4 DAYS NORTH",
        detail: `Depart on an early morning flight to Lalibela (08:00), the most famous of all the Ethiopian historical sites.After lunch, we will start 
          your tour of the rock-hewn churches of Lalibela.You will first visit the Northwestern Cluster of churches, Bet Medhane Alem, Bet Maryam, 
          Bet Meskel, Bet Danaghel, Bet Mikael & Bet Golgotha (entry not permitted for women). We will then visit the Southeastern Cluster of 
          churches, Bet Gabriel Rufael, Bet Merkorios, Bet Amanual, and Bet Abba Libanos. Finally, you will visit the most famous of all the 
          churches, Bet Giyorgis, constructed in honor of the patron saint of Ethiopia, Saint George.
        `,
        posttitle: "",
        overnight: "Lalibela",
      },
      {
        day: 2,
        title: "Fly to Gonder",
        subtitle: "",
        detail: `We will take a morning flight to Gonder.After briefly settling in your hotel, we will tour the city of Gondar, which was once the 
        capital city of Ethiopia.The city tour includes the medieval castles located in the Royal Enclosure, Fasilides Baths, a tour of Ras Gimb’s 
        palace museum and finally the church of Debre Birhan Selassie with its wonderful murals.`,
        posttitle: "",
        overnight: "Gondar",
      },
      {
        day: 3,
        title: "Simien mountains national park(day trip)",
        subtitle: "",
        detail: `Drive from Gonder to  Simien Mountains National Park early in the morning.We will be  trekking  through the park, mostly following 
          a trail at the top for a breathtaking scenery, at the height of the road there is a magnificent view of the strangely eroded foothills of 
          the series, and we will most likely spot a bearded vulture and or  Gelada baboons on this trek tour.We will then drive back to Gonder and 
          continue to Bahir Dar.`,
        posttitle: "",
        overnight: "Bahir Dar",
      },
      {
        day: 4,
        title: "Bahir Dar",
        subtitle: "",
        detail: `After breakfast, we will take a boat trip on Lake Tana to visit a selection of the monasteries hidden on the islands and shores of this sacred lake. 
          We will visit the Zege Peninsula, the monasteries of Azuwa Maryam, Ura Kidane Mehret and the island monastery of Debre Maryam near the outlet of the Blue Nile River.
          We will then return to Bahir Dar, have lunch, and drive to visit the Blue Nile waterfall (32 km away from the town of Bahir Dar).
          Then we will trek through the village side and across a 17th century bridge built by Portuguese explorers which will take  about an hour to reach the waterfall.
          Take time to enjoy the waterfall before driving back to Bahir Dar.
          Finally, take a late flight to Addis.`,
        posttitle: "",
        overnight: "Addis Ababa.",
      },
      {
        day: 5,
        title: "Addis to Semera",
        subtitle: "2 Day’s The Danakil Depression",
        detail: `Take a morning flight from Addis to Semera for Danakil
          We start our day by driving to Erta Ale (which means smoky mountain in Afar language). Erta Ale ranks top as one of the most alluring and physically challenging natural attractions in Ethiopia.
          Erta Ale, which is part of the Afar Triangle, is a basaltic shield volcano, which contains the world’s longest-living lava lake, a lava lake, one of only eight in the world.
          We start early at 9:00 AM, by driving to Dodom (located at the base of Erta Ale). This may be one of the roughest roads in the world. The 80 km distance may take about 6 hrs. passing through a changing landscape of solidified lava, rock, sand, and occasional palm-lined oasis.
        `,
        posttitle: "",
        overnight: "Erta Ale at a campsite",
      },
      {
        day: 6,
        title: "Dallol and lake Afdera",
        subtitle: "",
        detail: `You will be driven through the beautiful lake Afdera and a breathtaking landscape and arrive in Dallol in the afternoon, Dallol (116 meters below sea level, one of the lowest places in the world),with colorful salt mining sites and then visit  lake Asebo.
          Asebo is the place where the salts are mined. You will get to observe the breaking of the salt from the ground, cutting into rectangular pieces and getting loaded onto camels.
          We will then continue to Lake Assal, follow up camel caravans and walk with the Afar people, enjoy the sunset and the beautiful and colorful landscape.
          (No camel caravan in July, August, and early September). 
          After lunch break, we will continue to Lake Afrera. Lake Afrera (in Italian Lake Giulietti) is a hypersaline lake located in Kilbet Rasu, Afar Region, it is one of the lakes of the Danakil Depression.
          We  will finally drive back to Semera to take a late afternoon flight to Addis.`,
        posttitle: "",
        overnight: "Addis",
      },
      {
        day: 7,
        title: "Mursi and Ari tribes",
        subtitle: "3 Days South",
        detail: `Take a morning flight from Addis to Jinka
            After check in, drive through the Mago National Park to a local village of the Mursi tribe. The Mursi are known for their lower lip and earlobe 
            plates.In the afternoon, after returning to Jinka, you will optionally visit the South Omo Museum & Research Center to learn more about the 
            local tribes, or alternatively, take a hike in the surrounding hills to visit a local Ari village.`,
        posttitle: "",
        overnight: "Jinka",
      },
      {
        day: 8,
        title: "Karo and Hamer tribe",
        subtitle: "",
        detail: `After breakfast, in the morning we will drive to Turmi to visit Kara and Hamer tribes.
          The Kara tribe are known for their body decorations .They also have a unique way of life, marriage and eating habits. After that, we will drive 
          back to Turmi .After lunch we will visit Hamar tribes. The Hamer are known for their body decorations and the clay and ochre that is used to 
          create their unique hairstyles.  Turmi is a very small town and nearby we explore a Hamer village and meet some of the locals.`,
        posttitle: "",
        overnight: "Turmi",
      },
      {
        day: 9,
        title: "Excursion to the town of Omorate",
        subtitle: "",
        detail: `In the morning, drive  to Omorate on a journey to visit the Dassenech tribe.  Here you will cross the Omo River by  boat and enter the village of Dassenech.  Afterwards,  we will return to Turmi (Monday is market day) for a visit to a local Hamer village.
          One of the fascinating  
          If there is Jumping over Bulls, rite of passage ceremony, a tradition of the Hamer, that will be visited. Then we will drive back to Turmi and continue to Jinka to take a late afternoon flight to Addis.`,
        posttitle: "",
        overnight: "Addis",
      },
      {
        day: 10,
        title: "Final Trip City of Harar",
        subtitle: "Harar, Babile Addis Ababa",
        detail: `Morning Drive from Harar to Babile Camel Market and Valley of Marvels.
          Babile is the largest Camel Market in the region . It takes place every Monday and Thursdays. Somali and Oromo farmers will walk to Babile to sell 
          their Camels, Goats, and cattle.
          We will then drive further east of Babile, to the Valley of Marvels, the valley with rock towers and pillars carved and stacked in very unusual and 
          intriguing shapes and forms.
          On your way back to Dire Dawa you will visit Koremi.  Koremi is a village older than Harar itself.  Its houses are built of stone in a very old 
          style that depicts the ancient architecture of the area. The People of Koremi plant a mild Narcotic plant called Qat(chat) and coffee.
          Drive back to Dire Dawa airport to fly back to Addis`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "2",
    title: "4 Nights / 5 Days  Omo valley tribal culture tour",
    shortDescription: `Explore the rich tribal culture of Ethiopia's Omo Valley on this 5-day tour, visiting unique indigenous 
    tribes, their customs, and stunning landscapes.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "5 Days/ 4 Nights",
    description: [`This 5-day journey into the Omo Valley takes you through one of the most culturally rich and remote regions 
    of Ethiopia. Discover the lifestyles, traditions, and ceremonies of the diverse tribes living in this fascinating part of 
    Africa. From the weaving artistry of the Dorze to the bull-jumping initiation of the Hamer tribe, this tour offers a deep 
    dive into the unique heritage of Ethiopia's southern tribes. Highlights include visits to UNESCO sites, authentic tribal 
    villages, and the striking landscapes of Mago National Park.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-1.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-2.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-3.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-4.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-5.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-6.jpg",
    ],
    imagePath: "/images/tours/omo/mule-ethiopia-tours-omo-valley-13.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Transfer to the airport and fly to Arbaminch",
        subtitle: "",
        detail: `Transfer to the airport and fly to Arbaminch. On arrival meet your driver and head to Chencha to visit the Dorze 
          people who are known for their weaving culture which is reflected in their beautiful cotton clothes, fences, and beehive 
          shaped bamboo huts.`,
        posttitle: "",
        overnight: "Haile resort",
      },
      {
        day: 2,
        title: "Drive to Jinka",
        subtitle: "",
        detail: `After early breakfast, drive Konso village (UNESCO site) to visit the Konso people and their terrace. Further 
        drive to Mago National Park and visit the Mursi tribe. They are renowned for the strange custom followed by their women 
        who on reaching maturity, have their lower lips slit and circular disks inserted. In the afternoon, if time allows, we 
        will make excursion to the interesting Ari village to experience their culture and way of life demonstrated by members 
        of the village.`,
        posttitle: "",
        overnight: "Eco Omo lodge or Jinka Resort",
      },
      {
        day: 3,
        title: "Drive to Turmi",
        subtitle: "",
        detail: `In the morning, you will make an excursion trip to Murulle, the village of Karo people, who are the tribe with 
        the least in number of members, and known for their body paintings they indulge before important ceremonies. The most 
        striking thing about Karo people's symbolic and ornamental expressions is the painted body and face decorations. 
        In the afternoon, make excursion trip to Omorate, cross the Omo River by boat, to visit the Dasenech people who 
        are known for their body scarification.`,
        posttitle: "",
        overnight: "lodge",
      },
      {
        day: 4,
        title: "Turmi",
        subtitle: "",
        detail: `After breakfast, we will take a boat trip on Lake Tana to visit a selection of the monasteries hidden on the islands and shores of this sacred lake. 
          We will visit the Zege Peninsula, the monasteries of Azuwa Maryam, Ura Kidane Mehret and the island monastery of Debre Maryam near the outlet of the Blue Nile River.
          We will then return to Bahir Dar, have lunch, and drive to visit the Blue Nile waterfall (32 km away from the town of Bahir Dar).
          Then we will trek through the village side and across a 17th century bridge built by Portuguese explorers which will take  about an hour to reach the waterfall.
          Take time to enjoy the waterfall before driving back to Bahir Dar.
          Finally, take a late flight to Addis.`,
        posttitle: "",
        overnight: "lodge",
      },
      {
        day: 5,
        title: "Drive to Arbaminch and fly back to Addis Ababa",
        subtitle: "",
        detail: `After early breakfast, we will head to Arbaminch to take the flight back to Addis Ababa. On arrival in Addis Ababa, 
        make your way to your place.`,
        posttitle: "",
        overnight: "",
      }

    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "3",
    title: "8 days omo valley",
    shortDescription: `Embark on an 8-day journey through Ethiopia's captivating Omo Valley, exploring vibrant tribal cultures, stunning landscapes, 
    and unique traditions. From Addis Ababa to the remote villages of the Mursi, Karo, and Hamer tribes, experience the rich diversity of southern 
    Ethiopia's people and natural wonders.`,
    accommodation: "Hotels/Lodges",
    transportation: "Drive and Flight",
    duration: "8 Days/ 7 Nights",
    description: [`This immersive 8-day tour takes you through the heart of southern Ethiopia, starting in the bustling capital of Addis Ababa before 
    journeying through the Great Rift Valley, with its crater lakes and scenic landscapes. You'll explore the vibrant tribal cultures of the Omo 
    Valley, including the Dorze, Konso, Hamer, Dasenech, Karo, and Mursi tribes. Along the way, you'll experience colorful markets, intricate 
    tribal ceremonies like bull jumping, and the iconic body art and scarification practices that make the Omo Valley unique. From the volcanic 
    Lake Abaya to the untamed beauty of Mago National Park, this adventure offers a deep connection to Ethiopia’s ancient cultures and 
    breathtaking natural surroundings.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-7.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-8.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-9.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-10.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-11.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-dorze-weaver.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-lodge-view.jpg",
    ],
    imagePath: "/images/tours/omo/mule-ethiopia-tours-omo-valley-12.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Arrive In Addis Ababa And Transfer To Hotel And Visit The City’s Highlights",
        subtitle: "",
        detail: `Addis Ababa is founded in 1886 by Menelik II, Addis Ababa is located 2,500m above sea level in the Entoto mountain chain, whereit enjoys an 
        excellent year-round climate, with an average temperature of 25°C. It is a vibrant, developing city that is a pleasure to explore on foot, with 
        wide avenues of jacaranda trees, interesting museums and one of the largest open-air markets in Africa.Depending on the time of your arrival, 
        it may be possible to fit in an afternoon guided tour of the city, taking in the Holy Trinity Cathedral, the National Museum, and the market.`,
        posttitle: "",
        overnight: "Swiss Inn Nexus hote",
      },
      {
        day: 2,
        title: "Drive To Awassa Via The Rift Valley And Crater Lakes",
        subtitle: "Awassa Langano Lake",
        detail: `Drive to Awassa en route visit some of Debrezeit (Bishoftu) crater Lakes such as Hora, Babogaya, and Kuriftu. Continue driving throught 
        the great Rift valley lakes, Langano and Abijatta‐Shalla and the town of Awassa, the capital city of the southern region, which is very popular 
        in fish market and its volcanic lake. The rift contains a marvelous series of lakes, which are teeming with fish and provide a habitat for 
        hundreds of species of birds. On the way we pass 4 of the lakes. Awassa is located on the edge of Lake Awassa, surrounded by mountains.`,
        posttitle: "",
        overnight: "Haile Resort",
      },
      {
        day: 3,
        title: "Drive To Arbaminch And Visit Dorze Market And Tribes",
        subtitle: "Dorze Village and Market",
        detail: `We drive through one of the most colorful and scenic areas of Southern Ethiopia, a land that is inhabited by the people of the Sidamo, 
        the Alaba, who were once nomads but are now farmers. A long section of the road offers magnificent views of Lake Abaya, surrounded by mountains. 
        The lake has volcanic origins and is almost pink in color. Today we visit the Dorze village, one of the many small group of tribes in southern 
        Ethiopia. Once warriors, the Dorze are now turned to farming and weaving to earn a living.`,
        posttitle: "",
        overnight: "Haile Resort",
      },
      {
        day: 4,
        title: "Drive To Turmi, Visit Tsemai In Woito, Konso Village And People",
        subtitle: "Konso Dimeka Market",
        detail: `Drive to Turmi en route meet the people of Konso and their villages. The cornerstone of Konso culture is a highly specialized and 
        successful agricultural economy. Meet the people, take photographs and learn of a culture that has had very little outside influence and 
        continue to Turmi. We will visit the weekly market of the Hamer and Bena in KeyAfer Market (Thursday Market) a highlight of Omo Valley 
        where all the ethnic tribes come to shop. The market is exciting and you may have the opportunity to buy some of the tribal regalia and 
        artifacts.`,
        posttitle: "",
        overnight: "Buska Lodge",
      },
      {
        day: 5,
        title: "Drive To Omorate For Dasenech Tribes",
        subtitle: "Omo River Possibe Bull Jumping cermony",
        detail: `In the morning we drive to Omo Rate crossing the Omo River by boat to visit the Galab village in the bank of the lower Omo valley. One 
        of a small group of the Omo Valley tribes, called Dasanach. In the afternoon we will have an optional bull jumping ceremony, if available for 
        this day or visit one of the Villages of the Hamer tribes.`,
        posttitle: "",
        overnight: "Buska Lodge",
      },
      {
        day: 6,
        title: "Drive To Kangate/Dus For Karo Tribes",
        subtitle: "Kangate for Karo tribes -Jinka",
        posttitle: `Today you venture out to Murelle to visit the Karo people who reside along the banks of the Lower Omo Valley River. The Karo 
        people incorporate a lot of symbolism in the manner in which they dress and their rituals. Ornate body art, intricate headdresses,
        and body scarification are ways that they express status and beauty in their community and one way that they differ from their 
        close neighbors, the Hamer people. They paint themselves with colored ochre, white chalk, yellow mineral rock, charcoal, and 
        iron ore as a means of communicating to each other and decorating themselves. This small tribe numbers around 1,000 and 
        are considered small but are the main non-nomadic agriculturalist group in Lower Omo Valley. Spend some time interacting 
        with the Karo people before driving to Jinka for overnight.`,
        overnight: "Jinka Resort",
      },
      {
        day: 7,
        title: "Drive To Mago National Park And Visit Mursi",
        subtitle: "Mago national park -Arbaminch",
        detail: `Morning drive to Mago National Park located in the eastern bank of the Omo River. From here we will visit the Mursi highlands where 
        the most illustrious of Ethiopia’s unique tribes lives. The Mursis are known for their decorative lip plates that adorn the lower lips 
        of the Mursi women. The various cultural aspects of the tribe will be explained and you will be able to take their photographs and 
        interact with them.`,
        posttitle: "",
        overnight: "Haile Resort",
      },
      {
        day: 8,
        title: "In The Morning Drive To Addis Ababa And End Of Trip",
        subtitle: "Addis Ababa Departure",
        detail: `On arrival in Addis, check into your hotel. This will either be on day room basis or overnight depending on your international flight 
        times.This evening, we will arrange for a farewell dinner in a restaurant with Ethiopian music and dance, or in a good city centre restaurant.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "4",
    title: "3-Day Tigray Rock Churches Adventure: Mekelle to Geralta",
    shortDescription: `3-Day Tigray Rock Churches Exploration Discover the ancient Tigray rock churches on this 3-day tour. 
    Visit the iconic rock-hewn churches of the Teka Tesfa and Geralta clusters, carved into mountain cliffs and dating back 
    to the 6th century. Enjoy breathtaking views, rich history, and unique cultural experiences in Ethiopia's highlands.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "3 Days/ 2 Nights",
    description: [`Discover the timeless beauty and spiritual depth of Tigray's ancient rock-hewn churches on this immersive 3-day 
    journey. From the breathtaking artistry of the sacred interiors to the dramatic landscapes that surround them, you'll explore 
    some of Ethiopia's most remarkable historical treasures. Marvel at the intricate carvings and frescoes of centuries-old churches 
    nestled high in the cliffs, offering unparalleled views of the rugged terrain. Each day presents an opportunity to connect with 
    Ethiopia's rich cultural heritage, as you uncover the stories of the nine saints who brought Christianity to the region. 
    This adventure is not only a pilgrimage through history but also a visual feast of Ethiopia's stunning natural scenery. 
    Your evenings will be spent in the serene beauty of the Tigray highlands, creating memories that blend exploration, 
    spirituality, and cultural discovery into one unforgettable experience.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-2.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-3.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-4.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-5.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-7.jpg",
    ],
    imagePath: "/images/tours/tigray/mule-ethiopia-tours-gheralta-2.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: " Addis Ababa to Mekelle, Teka Tesfa Cluster",
        subtitle: "",
        detail: `Start your adventure with a morning flight from Addis Ababa to Mekelle. Upon arrival, meet your guide and drive to 
        the Teka Tesfa cluster to explore some of Ethiopia’s most unique rock-hewn churches, including Medhanialem Adikesho, known 
        for its stunning interior paintings. Continue to Petros Powlos and Mekalle Mahizenge, taking in the breathtaking landscapes 
        along the way. Enjoy a picnic lunch or stop at a local restaurant before driving to Hawzen, where you'll arrive in the 
        late afternoon. Overnight at a local hotel.`,
        posttitle: "",
        overnight: "local hotel",
      },
      {
        day: 2,
        title: "Geralta Cluster Exploration",
        subtitle: "",
        detail: `After breakfast, head to the Geralta cluster, where you'll visit churches dating back to the 6th and 9th centuries, 
        built by the nine saints who came from Syria. Your day includes visits to Mariam Korkur and the famous Abune Yemata church, 
        a challenging climb but worth it for the panoramic views from the top of the cliff.`,
        posttitle: "",
        overnight: "Geralta Lodge",
      },
      {
        day: 3,
        title: "EXPLORE MORE GERALTA CLUSTER ROCK CHURCHES-DRIVE TO MEKELLE-FLY BACK TO ADDIS ABABA-DEPARTURE",
        subtitle: "",
        detail: `In the morning, explore more of the Geralta rock churches, including Dugume Selase, Abrehawe Atsbha, and Wekro 
        Cherkos, which are easily accessible. Afterward, drive back to Mekelle and transfer to the airport for your flight back 
        to Addis Ababa. Upon arrival, enjoy a farewell cultural dinner with live traditional music and dance performances before 
        your departure.`,
        posttitle: "",
        overnight: "",
      }
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "5",
    title: "Coffee Tour (long trip)",
    shortDescription: `Embark on an 8-day journey through the captivating landscapes of southwestern Ethiopia, exploring the rich 
    coffee culture, historical treasures, and natural beauty of Jimma, Bonga, and Bebeka. Visit the birthplace of coffee, experience 
    traditional Kaffa culture, and uncover the legacy of King Abba Jifar, all while discovering Ethiopia’s oldest coffee plantations.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "8 Days/ 7 Nights",
    description: [`Embark on an exhilarating 8-day journey through Ethiopia's vibrant coffee heartland, where tradition, culture, 
    and natural beauty collide in a unique travel experience. Your adventure begins in Addis Ababa, exploring the capital’s 
    highlights before heading into the scenic Gibe River Valley en route to Jimma. Discover the historical legacy of King Abba 
    Jifar as you explore his palace and the fascinating Jimma Museum. From there, the journey takes you deeper into the lush 
    landscapes of Bonga, the birthplace of coffee Arabica. Experience the rich traditions of the Kaffa people, visit local 
    coffee houses, and be captivated by stunning natural wonders like the Adiyo Falls and the Gurguto Natural Bridge.
    As you trek to Mankira, the very spot where coffee Arabica was first discovered, you'll find yourself immersed in Ethiopia’s 
    ancient coffee culture. The adventure continues in Bebeka, home to Ethiopia's largest and oldest coffee plantation, where 
    you'll witness the complete coffee-growing process and savor the rich flavors of freshly brewed Ethiopian coffee. Take in 
    the peaceful surroundings of the plantation, before heading back to Jimma to revisit its historical gems.
    Your tour culminates in Addis Ababa with a memorable evening of Ethiopian cultural immersion. Indulge in a traditional dinner 
    accompanied by vibrant tribal music and dance, as you reflect on an unforgettable journey through the heartland of Ethiopia's 
    coffee culture. This dynamic and immersive experience offers a perfect blend of history, nature, and cultural richness, 
    showcasing the spirit of Ethiopia in every step.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/coffee/mule-ethiopia-tours-coffee-2.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-3.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-4.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-6.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-9.jpg",
    ],
    imagePath: "/images/tours/coffee/mule-ethiopia-tours-coffee-2.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa",
        subtitle: "",
        detail: `You  will  be  met  upon  arrival  and  transferred  to  your  hotel.  Refresh  and  begin  your sightseeing  of  
        Addis  with  a  drive  up  to  mount  Entoto  for  a  panoramic  view  of  Addis. Descend  down  and  drive  to  National  
        museum  where  you  will  have  a  chance  to  spot  the oldesthominids of ‘Lucy’ fossil. Visit and proceed to the Holy 
        Trinity built during the WWII. Then  proceed  to  Ethnographic  museum,  which  use  to  be  the  palace  of  Emperor 
        Hailesellase.  To  wrap  up  you  drive  to  merkato,  the  biggest  market  in  East  Africa. `,
        posttitle: "",
        overnight: "Addis",
      },
      {
        day: 2,
        title: "Addis Ababa to Jimma",
        subtitle: "",
        detail: `Early In the morning after breakfast, you will drive to Jimma (345 Km from Addis). On the way  you  will  pass  
        through  beautiful  landscapes  as  you  drive  through  the  Gibe  River Valley.  Later,  you  can  visit  Jimma  Museum  
        and King  Abba  Jiffar  Place.  You  will  have dinner and spend the night at the hotel.`,
        posttitle: "",
        overnight: "Honey land hotel",
      },
      {
        day: 3,
        title: "Jimma to Bonga",
        subtitle: "",
        detail: `After an early morning  breakfast  you will drive to Bonga (125 Kms from Jimma) the birth place  of  coffee.  And  
        upon  arrivalat  Bonga,  you  will  visit  to  a  traditional  Kaffa  house  and learn  about  the  culture  of  the  Kaffa  
        people.  You  will  have  lunch  at  Bonga.  After  having lunch  drive  to  Ellelo,  Adiyo  falls,  the  Dadiben  and  Gora  
        Hot  spring.  You  will  have  dinner and spend the nightat the hotel.`,
        posttitle: "",
        overnight: "Kaffa Guest house.",
      },
      {
        day: 4,
        title: "Makira",
        subtitle: "",
        detail: `MakiraAn  early  morning  trek  after  breakfast  will  take  you  to  Mankira,  the  place  where  coffee Arabica  
        was  discovered.  En  route  visit  the  ancient  Adaracha  Medhane  Alem  church  and the  Gurguto  naturalBridge.  You  
        will  have  dinner  and  spend  the  night  at  the  hotel. `,
        posttitle: "",
        overnight: "Kaffa Guest house.",
      },
      {
        day: 5,
        title: "Bebeka",
        subtitle: "",
        detail: `You  will  be  driven  to  Bebeka  (30  km  from  Mizan  Tefari)  right  after  breakfast.  There  you will check 
        into a hotel and after a brief break, you will have lunch. Later you  will  visit the largest Coffee Plantation in Ethiopia 
        (covers some 6,000 hectares  and is the  largest  and oldest  Coffee  Plantation  in  Ethiopia).  In  the  evening,  you  
        will  have  dinner  and  spend the night at the hotel. `,
        posttitle: "",
        overnight: "Bebeka Guest house, or Camping",
      },
      {
        day: 6,
        title: "Bebeka Coffee Plantation",
        subtitle: "",
        detail: `In  the  morning  after  having  breakfast  explores  the  coffee  plantation  from  seedling  to Coffee  Bean.  
        Taste  the  Ethiopian  Coffee  Arabic  at  Bebeka.  Stay  the  day  in  Bebeka.`,
        posttitle: "",
        overnight: "Bebeka Guest house, or Camping",
      },
      {
        day: 7,
        title: "Bebka to Jimma",
        subtitle: "",
        detail: `In  the  morning  after  breakfast  you  drive  back  to  Jimma.  Depending  on  arrival  you  can continue  a  
        visit  to  the  Jimma  attractions.  Visit  the  historical  palace  of  Sultan  Abba  Jifar (1853, 1925)  that  is  
        standingat  Jiren.  Still  stands  with  its  colorful  architectural  beauty. And continue your visit to Jimma museum 
        that displays most of the historical materials of King  Abba  Jifar,  his  kingdom  and  cultural  objects  of  the  
        local  Oromo  people  and  that  of the other ethnic groups around Kaffa. `,
        posttitle: "",
        overnight: "Honey land hotel, Jimma",
      },
      {
        day: 8,
        title: "Jimma Addis Ababa Departure",
        subtitle: "",
        detail: `In  the  morning,  you  will  have  breakfast  and  drive  back  to  Addis  Ababa.  You  will  have lunch  at  
        Woliso.  You  will  arrive  in  Addis  Ababa  late  afternoon  and  you  will  do  some shopping  for  souvenirs.  In  
        the  evening  attend  a  folkloric  dinner  where  you  will  have  a chance to taste several national dishes and watch 
        dances of the various ethnic groups of Ethiopia. The traditional Ethiopian coffee ceremonywill also be served.  Later 
        you will be transferred to the airport for your departure.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "6",
    title: "Coffee Tour (short trip)",
    shortDescription: `Immerse yourself in Ethiopia’s rich coffee culture with this 4-day journey through the southern highlands. 
    Explore the lush coffee plantations of Yirgalem, Wondo, and Yirga Cheffe, visit scenic lakes and vibrant local markets, and 
    enjoy traditional Ethiopian hospitality with folkloric dinners and coffee ceremonies.`,
    accommodation: "Hotels and Lodge",
    transportation: "Drive and Flight",
    duration: "8 Days/ 7 Nights",
    description: [`Experience the soul of Ethiopia’s southern highlands with a 4-day journey that combines stunning landscapes, vibrant 
    culture, and the rich heritage of Ethiopian coffee. Your adventure begins with a scenic drive from Addis Ababa to Yirgalem, 
    passing through the wildlife-rich Awash River and Lake Ziway, where aquatic birds offer a warm welcome. Arriving at the charming 
    Aregash Lodge, you’ll unwind in the heart of nature, surrounded by lush forests and rolling hills. The next day takes you to the 
    famed Wottona Boltuma Coffee Plantation in Aleta Wondo, where you’ll delve into Ethiopia’s coffee history and culture, exploring 
    the coffee fields and the nearby stela park.
    As you continue your journey to the renowned Yirga Cheffe region, you’ll have the opportunity to visit vibrant villages and meet 
    local farmers who have cultivated coffee for generations. Savor lunch in Dilla before traveling to Awassa, where you'll enjoy 
    a peaceful evening on the shores of Lake Awassa. The final day brings a visit to the bustling fish market, followed by a return 
    to Addis Ababa for a memorable folkloric dinner. Indulge in Ethiopia’s diverse national dishes, enjoy traditional music and 
    dance, and take part in the iconic coffee ceremony before heading to the airport. This immersive experience offers a perfect 
    blend of culture, nature, and the heart of Ethiopia’s coffee heritage.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/coffee/mule-ethiopia-tours-coffee-6.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-9.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-3.jpg",
      "/images/tours/coffee/mule-ethiopia-tours-coffee-4.jpg",
    ],
    imagePath: "/images/tours/coffee/mule-ethiopia-tours-coffee-6.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa to Yiregalem",
        subtitle: "",
        detail: `On arrival we will meet you at Bole Int Airport then you will be drive to the southern part of Ethiopia to the town 
        of  Yiregalem (350 Km from Addis) on the way  you will have a stop on Awash River and Lake Ziway to visit aquatic birds then 
        drive to Awassafor Lunch after lunch drive  to Aregash Lodge.  You  will  have  dinner and spend the  night at the Aregash 
        lodge.`,
        posttitle: "",
        overnight: "Aregash Lodge",
      },
      {
        day: 2,
        title: "Wondo and Yirga Cheffe Coffee Plantation",
        subtitle: "",
        detail: `This morning after breakfast, you will be drive to Alet Wondo  to visit the Wottona Boltuma Coffee  plantation  .  
        And  the  stela  park  around  Aleta Wondo.  You  will  have  lunch  in  Aleta Wondo  then  Late  in  the  afternoon  
        drive  back  to  Yiregalem. `,
        posttitle: "",
        overnight: "Aregash Lodge",
      },
      {
        day: 3,
        title: "Yirgalem Yirga Cheffe Coffee Plantation, Awassa",
        subtitle: "",
        detail: `In the morning after  breakfast you will be driven to Yirega Chiefe on the way you will have a  chance  of  
        visiting  one  of  the    interesting  village.  In  Yirega  Chief  &  visit  the  coffee plantation then  You will 
        have lunch in Dilla.In the afternoon youwill be driving back to Awassa for leisure stay in your resort.`,
        posttitle: "",
        overnight: "Awassa",
      },
      {
        day: 4,
        title: "Awassa to Addis Ababa to Departure",
        subtitle: "",
        detail: `In the morning, you will have a chance of seeing the fish market at lake Awassa then we will be driving back to Addis 
        Ababa . In the evening attend a folkloric dinner where you will have  a  chance  to  taste  several  national  dishes  and  
        watch  dances  of  the  various  ethnic groups of Ethiopia. The traditional coffee ceremony will also be served.  Later you 
        will be transferred to the airport for your departure.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "7",
    title: "Simien Mountains",
    shortDescription: `Embark on a 4-day adventure through the breathtaking Simien Mountains National Park, a UNESCO World Heritage 
    site. Trek through dramatic landscapes, encounter wildlife such as Gelada baboons and Walia ibex, and enjoy an immersive 
    cultural experience in Gondar, complete with traditional Ethiopian music, dance, and coffee ceremonies.`,
    accommodation: "Camping",
    transportation: "Drive and Flight",
    duration: "4 Days/ 3 Nights",
    description: [`This 4-day journey offers an unforgettable exploration of one of Ethiopia’s most stunning natural wonders, the 
    Simien Mountains National Park. Start with a flight from Addis Ababa to Gondar, the historical capital, before heading to 
    Sankaber, the gateway to the Simien Mountains, where your adventure truly begins. Over the next two days, you will trek 
    through awe-inspiring landscapes of towering cliffs, deep valleys, and vast plateaus, all while being surrounded by unique 
    wildlife. You’ll cross the Jinnbar River, witness the spectacular waterfalls, and ascend to elevations of 3,600 meters as you 
    make your way to Geech. Along the way, keep an eye out for the iconic Gelada baboons, often seen in large herds, and enjoy 
    the stunning scenery that stretches for miles.
    On the third day, continue your trek along the breathtaking Enatye escarpment, reaching elevations over 4,000 meters before 
    descending to Chenek, where Walia ibex and more Gelada baboons can often be spotted. Each night, you’ll camp under the 
    stars, surrounded by the serene beauty of the mountains. Conclude your adventure with a return to Gondar, where you'll 
    experience Ethiopian hospitality at its finest with a folkloric dinner, complete with traditional dances, national dishes, 
    and the ceremonial brewing of Ethiopia’s world-famous coffee. Finally, you’ll be transferred to the airport for your departure, 
    taking with you memories of an extraordinary trek through one of the world’s most magnificent landscapes.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/home/mule-ethiopia-tours-simien-mountains.jpg",
      "/images/tours/simien/mule-ethiopia-tours-simien-trek-1.jpg",
      "/images/tours/simien/mule-ethiopia-tours-simien-trek-2.jpg",
      "/images/tours/simien/mule-ethiopia-tours-simien-trek-3.jpg",
      "/images/tours/gondar/mule-ethiopia-tours-gondar-castles-1.jpg",
      "/images/tours/gondar/mule-ethiopia-tours-gondar-castles-2.jpg",
      "/images/tours/gondar/mule-ethiopia-tours-gondar-castles-3.jpg",
      "/images/tours/gondar/mule-ethiopia-tours-gondar-castles-4.jpg",
    ],
    imagePath: "/images/home/mule-ethiopia-tours-simien-mountains.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa to Gondar to Simien Mountains National Park",
        subtitle: "",
        detail: `Fly  to  Gondar  on  Ethiopian  Airlines.    Meet  with  vehicles  and  drive  to  Sankabar  the gateway  to  the 
        Simien  Mountains  National  Park,  a  UNESCO  World  Heritage  site.  Meet with guides and prepare for trek.`,
        posttitle: "",
        overnight: "Camping",
      },
      {
        day: 2,
        title: "Trekking Simien Mountains National Park",
        subtitle: "",
        detail: `Trek Sankaber, Geech (3,600m elevation) which will take between 5 to 7 hours. After one and half hours, see the 
        Jinnbar River and falls which you will cross later in the day. After crossing  the  river,  ascend  for  about  2  
        hours  to  Geech.  The  scenery  is  wonderful  and  a herd of Gelada Baboons can be seen on the journey`,
        posttitle: "",
        overnight: "Camping",
      },
      {
        day: 3,
        title: "Trekking Simien Mountains National Park",
        subtitle: "",
        detail: `Trek Geech, Chenek (3,620m elevation); trek along the 4,000 meter breathtaking Enatye escarpment before descending 
        to Chenek. Walia Ibex and Gelada Baboons are routinely spotted.`,
        posttitle: "",
        overnight: "Camping",
      },
      {
        day: 4,
        title: "Gondar to Addis to Departure",
        subtitle: "",
        detail: `After  breakfast,  drive  to    In  the  evening  attend  a  folkloric  dinner  where  you  will  have  a chance to 
        taste several national dishes and watch dances of the various ethnic groups of Ethiopia. The traditional coffee ceremony 
        will also be served. Later you will be transferred to the airport for your departure.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "8",
    title: "5-Day Journey Through Ancient Wonders and Majestic Landscapes: Axum to Gheralta",
    shortDescription: `Embark on a 5-day adventure exploring the ancient city of Axum, the magnificent Gheralta Mountains, and the sacred rock-hewn 
    churches of Ethiopia. From the iconic obelisks and ancient tombs in Axum to the breathtaking cliffside monasteries of Gheralta, this tour 
    offers a blend of history, spirituality, and stunning landscapes. Experience the rich culture of the Tigray region, hiking to ancient 
    churches with panoramic views, and end your journey in the vibrant city of Mekele`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "5 Days/ 4 Nights",
    description: [`Immerse yourself in Ethiopia’s rich history and stunning natural beauty on a journey through the ancient city of Axum and the 
    captivating Gheralta Mountains. This tour offers a unique blend of historical exploration, spiritual encounters, and awe-inspiring landscapes. 
    Marvel at the iconic obelisks and sacred monuments of Axum, a city that was once the heart of one of Africa’s most powerful empires. Dive into 
    Ethiopia’s ancient Christian traditions by visiting rock-hewn churches, perched dramatically on cliffs and hidden among rugged mountains.
    In the Gheralta region, you’ll experience the remarkable architecture and artistry of centuries-old churches, many accessible only by thrilling 
    hikes that reward you with panoramic views of the Tigray landscape. Along the way, encounter the welcoming communities that call these remote 
    regions home, gaining insight into their vibrant cultures and time-honored traditions.
    Whether you are a history enthusiast, a spiritual seeker, or a nature lover, this journey offers a perfect balance of discovery, adventure, and 
    tranquility, leaving you with lasting memories of Ethiopia’s fascinating heritage and breathtaking scenery.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/axum/mule-ethiopia-tours-axum-stelae.jpg",
      "/images/tours/axum/mule-ethiopia-tours-axum-1.jpg",
      "/images/tours/axum/mule-ethiopia-tours-axum-2.jpg",
      "/images/tours/axum/mule-ethiopia-tours-axum-3.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-3.jpg",
    ],
    imagePath: "/images/tours/axum/mule-ethiopia-tours-axum-stelae.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Axum City Tour",
        subtitle: "",
        detail: `Upon arrival at Axum airport, you'll be warmly welcomed by our agent and start your exploration of the historic city of Axum. Discover its 
        renowned attractions, including the towering obelisks, ancient underground tombs, Ezana inscriptions, and the tombs of King Kaleb and Gebre Meskel. 
        You will also visit the revered St. Mary of Zion Church and the Queen of Sheba's palace, surrounded by the highlights of Axum's beautiful town.`,
        posttitle: "",
        overnight: "Axum",
      },
      {
        day: 2,
        title: "Axum to Gheralta",
        subtitle: "",
        detail: `After breakfast, journey to the ancient temple of Yeha, the center of the Sabean civilization, passing through the scenic Adwa mountains. 
        Continue to the 6th-century monastery of Debre Damo, accessible only by climbing a 15-meter cliff using a leather rope. This monastery, perched 
        atop a flat-topped mountain, is a significant site for Ethiopian Orthodox Christians. Proceed to Adigrat for lunch, then travel through 
        Tigray's stunning landscapes, reaching Hawzen by evening.`,
        posttitle: "",
        overnight: "Hawzen",
      },
      {
        day: 3,
        title: " Gheralta Churches",
        subtitle: "",
        detail: `Today, hike through the awe-inspiring Gheralta mountains to visit two ancient rock-hewn churches: Mariam Korkor and Daniel Korkor. These 
        remarkable structures showcase stunning architecture and offer breathtaking views of the surrounding area. In the afternoon, continue your 
        exploration with a visit to Mariam Papasit Church.`,
        posttitle: "",
        overnight: "Hawzen",
      },
      {
        day: 4,
        title: "Gheralta Mountains",
        subtitle: "",
        detail: `Start your day with a challenging but rewarding hike to Abune Yemata Guh, a church perched on a cliff with stunning views and unique 
        religious paintings. This church is renowned for its remote location and spiritual significance. Later, visit the beautiful Georgis Maykado 
        Church, believed to have been built in the 4th century. Spend the evening exploring the town of Hawzen.`,
        posttitle: "",
        overnight: "Hawzen",
      },
      {
        day: 5,
        title: "Wukro Churches & Drive to Mekele",
        subtitle: "",
        detail: `After breakfast, head south to visit Abune Abraham Church, another extraordinary rock-hewn church situated on a hill, offering scenic 
        views and a rich spiritual experience. Continue to the famous Abraha we Atsibeha Church, built by two Axumite kings in the 4th century AD. 
        After lunch in Wukro, drive to Mekele, the northern star city, where you will catch an evening flight back to Addis Ababa.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "9",
    title: "7 Days Tigray Rock Hewn Churches with Danakil Depression Tour",
    shortDescription: `Embark on a 7-day adventure through the mystical Tigray rock-hewn churches and the awe-inspiring Danakil 
    Depression. This tour offers a blend of spiritual exploration, cultural immersion, and the chance to witness one of the world's 
    most extreme landscapes. From the ancient churches of Tigray carved into towering cliffs to the bubbling lava lakes and salt 
    flats of the Danakil Depression, this journey promises unforgettable experiences.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "7 Days/ 6 Nights",
    description: [`This 7-day tour takes you on a captivating journey through Ethiopia’s contrasting landscapes and rich cultural 
    history. Begin your adventure in the Tigray region, where you’ll explore some of the country’s most remarkable rock-hewn 
    churches, hidden within the rugged mountains. These ancient churches, carved directly into the rock, are not only stunning 
    architectural marvels but also hold deep spiritual significance, dating back to early Christianity. You will immerse yourself 
    in the local culture, witnessing the traditions and way of life that have been preserved for centuries.
    From the highlands, the journey descends into the mesmerizing Danakil Depression, one of the hottest and most geologically active 
    places on earth. The Danakil Depression offers a striking contrast, with its salt flats, bubbling sulfur springs, and the famous 
    Erta Ale volcano with its active lava lake. The vivid colors and otherworldly landscapes make this region one of the most surreal 
    environments on the planet. Throughout the tour, you’ll experience the true essence of Ethiopia’s diverse natural beauty and 
    cultural heritage, creating memories of ancient history, unique traditions, and geological wonders.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-1.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-2.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-rock-church-3.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-bete-giyorgis-1.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-bete-giyorgis-2.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-timket-1.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-timket-2.jpg",
      "/images/tours/lalibela/mule-ethiopia-tours-timket-bete-giyorgis.jpg",
      "/images/home/mule-ethiopia-tours-danakil-dallol.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-gaetale-pool.jpg",
    ],
    imagePath: "/images/tours/lalibela/mule-ethiopia-tours-rock-church-1.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa, Semera, Erta Ale Volcano ",
        subtitle: "",
        detail: `Early  morning  fly  to  Semera,  the  capital  of Afar  region. Then  drive  to  Erta  Ale through the  changing  
        landscape  of  solidified  lava,  rock,  and  sand  and  occasional  palm  lined oasis.  On  the  way,  visit  Lake  Afdera  
        and  the  salt  mining  center.  Lake  Afdera  is  the largest  salt  lake  in  Ethiopia  located  at  an  altitude  of  
        below  sea  level.  Late  in  the afternoon, hike about 40 minutes to the rim of the volcano, to watch the dramatic action 
        of the boiling lava. Erta Ale contains the world’s only permanent lava lake.`,
        posttitle: "",
        overnight: "Basic Camping",
      },
      {
        day: 2,
        title: "Erta Ale to Dallol (Hamed Ela)",
        subtitle: "",
        detail: `In the morning walk back to the summit of the volcano to have a final look before driving to  Dallol.  In  the  
        afternoon,  visit  Salt  Mountain,  Lake  Assale  swimming  Pool  and  the stunning Sunset in Dallol.`,
        posttitle: "",
        overnight: "Basic camping in Hamed Ela",
      },
      {
        day: 3,
        title: "Dallol (Hamed Ela) to Mekelle",
        subtitle: "",
        detail: `Early  in  the  morning  visit  a  colorful  sulfur  field  of  Dallol,  a  bubbling  Hypersaline  Lake, traditional  
        salt  mining  practiced  by  Afar  people  and  camel  caravan.  In  the  afternoon drive to Mekelle.`,
        posttitle: "",
        overnight: "Axum Hotel",
      },
      {
        day: 4,
        title: "Mekelle to Hawzen",
        subtitle: "",
        detail: `In  the  morning,  drive  from  Mekelle  to  Hawzen.  Then  take  an  excursion  to  the  foot  of Geraltha  
        Mountains.  Visit  the  5th  century  Abuna  Yemata  monolithic  rock-hewn  church. Abuna  Yemata  church  is  the  
        highest  church  in  Ethiopia  situated  at  a  height of  2,580 meters  (8,460  ft.)  and  known  for  its  dome  
        and  wall  paintings  dating  back  to  the  5thcentury.  Visit  Maryam  Korkor  church,  another  nearby  church  
        dated  back  to  the 6thcentury. `,
        posttitle: "",
        overnight: "Vision Hotel Hawzen",
      },
      {
        day: 5,
        title: "Hawzen to Axum ",
        subtitle: "",
        detail: `In  the  morning  drive  from  Hawzen  to  Axum.  On  the  way  visit  Debre  Damo  Monasteryand Yeha Temple.`,
        posttitle: "",
        overnight: "Sabean Hotel",
      },
      {
        day: 6,
        title: "Axum",
        subtitle: "",
        detail: `Take a full day tour of Axum city. Axum is a city with more than 2500 years of history. It was a center of a great 
        empire and ancient civilization and home to the original Ark of covenants.  Explore  the  city  of  Axum;  visit  St.  Mary  
        Zion  Church,  Chapel  of the Tablet, Stele  Park,  Tomb  of  Kaleb  and  his  son  Gebre  Meskel,  Ezana’s  Inscriptions,  
        Queen  of Sheba’s Bath, Queen of Sheba’s palace ruins and Axum Museum.`,
        posttitle: "",
        overnight: "Sabean Hotel Axum",
      },
      {
        day: 7,
        title: "Axum, Shire, Addis Ababa",
        subtitle: "",
        detail: `In the morning drive from Axum to Shire and fly back to Addis Ababa. In the afternoon have time for shopping or 
        afternoon at leisure. In the evening attend a folkloric farewell dinner.  Experience  the  rich  cultural  heritage  of  
        Ethiopia  with  a  traditional  dance performance live from stage. Transfer to airport for your departure.`,
        posttitle: "",
        overnight: "",
      }

    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "10",
    title: "Bale national park",
    shortDescription: `Discover the cultural and natural wonders of Ethiopia in a 4-day adventure. From the vibrant city of Addis Ababa to the 
    breathtaking Bale Mountains, encounter ancient history, rich traditions, and unique wildlife, culminating in a traditional Ethiopian 
    farewell dinner.`,
    accommodation: "Hotels/Lodges",
    transportation: "Drive and Flight",
    duration: "4 Days/ 3 Nights",
    description: [`This 4-day tour offers an exciting journey through Ethiopia’s cultural and natural treasures. Starting with a visit to Addis Ababa, 
    explore the National Museum to see the famous fossil of ‘Lucy,’ take in panoramic views from Mount Entoto, and visit the Holy Trinity Cathedral 
    and bustling Merkato market. Continue your adventure with a scenic drive to the Bale Mountains National Park, where you’ll have the chance to 
    spot the endemic Mountain Nyala, Menelick Bushbuck, and possibly the rare Ethiopian Wolf on the Sanetti Plateau. You'll also explore the 
    lush Harrena Forest, one of Ethiopia’s last remaining dense forests. The tour wraps up with a return to Addis Ababa, where you'll enjoy 
    a traditional folkloric dinner and experience Ethiopia's diverse cultural heritage through food, music, and dance.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/bale/mule-ethiopia-tours-bale-1.jpg",
      "/images/tours/bale/mule-ethiopia-tours-bale-3.jpg",
      "/images/tours/bale/mule-ethiopia-tours-bale-5.jpg",
      "/images/tours/bale/mule-ethiopia-tours-bale-6.jpg",
    ],
    imagePath: "/images/tours/bale/mule-ethiopia-tours-bale-1.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Arrival, Sightseeing Addis (The new Flower)",
        subtitle: "",
        detail: `You will be met upon arrival and transferred to your hotel. Refresh and begin your sightseeing of Addis with a drive up to mount 
        Entoto for a panoramic view of Addis. Descend down and drive to National museum where you will have a chance to spot the oldest hominids 
        of ‘Lucy’ fossil. Visit and proceed to the Holy Trinity built during the WWII. Then proceed to Ethnographic museum, which use to be the 
        palace of Emperor Hailesellase. To wrap up you drive to merkato, the biggest market in East Africa.`,
        posttitle: "",
        overnight: "Addis",
      },
      {
        day: 2,
        title: "Drive  Addis to Bale",
        subtitle: "",
        detail: `After breakfast Drive from Addis Ababa to Bale mountains national park and arrive at the park Headquarter’s in the afternoon hike for 
        an hour possibly spotting two endemic Ethiopia mammals that frequently seen to area such as Mountain Nyala and Menelick Bushbuck and endemic 
        forest birds.`,
        posttitle: "",
        overnight: "Dinsho Lodge",
      },
      {
        day: 3,
        title: "Excursion to Sanetti Plateau and Harrena Forest (100 kms 6, 7hrs drive)",
        subtitle: "",
        detail: `Today you will have an excursion to Sanetti Plateau, the highest plateau in Africa. Here you may encounter the 
        endemics of Ethiopia Wolf. Visit and proceed to Harrena Forest, the second dense forest in Ethiopia.`,
        posttitle: "",
        overnight: "Dinsho Lodge",
      },
      {
        day: 4,
        title: "Drive Addis, Departure",
        subtitle: "",
        detail: `This day you will drive to Addis. In the evening attend a folkloric dinner where you will have a chance to taste several national 
        dishes and watch dances of the various ethnic groups of Ethiopia. The traditional coffee ceremony will also be served.  Later you will be 
        transferred to the airport for your departure.`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "11",
    title: "Danakil Tour",
    shortDescription: `Embark on a thrilling 3-day adventure to Ethiopia's mesmerizing Danakil Depression. Explore the natural wonders of Lake Afdera, 
    the breathtaking Erta Ale volcano, and the vibrant salt flats of Dallol. Experience one of the planet’s most extreme and stunning landscapes, where 
    you’ll trek to a lava lake, witness salt mining, and admire camel caravans in this otherworldly desert.`,
    accommodation: "Camping",
    transportation: "Drive and Flight",
    duration: "3 Days/ 2 Nights",
    description: [`This 3-day tour takes you on an unforgettable journey to one of the most extreme landscapes on Earth, the Danakil Depression. Begin 
    your adventure with a drive from Semera to Lake Afdera, a picturesque salt lake where you can enjoy a swim in its hot springs. Continue to Dodom, 
    where you’ll embark on a trek to the active Erta Ale volcano. Camp overnight at the summit, witnessing the spectacular sight of one of the world’s 
    few permanent lava lakes.
    On Day 2, after an early start, you’ll explore the village of HamadEla, meet the local Afar people, and witness the fascinating process of salt 
    mining at Lake Assale. Marvel at the unique volcanic formations of Dallol, the colorful salt flats, and follow the camel caravans as they journey 
    across this vast, desert landscape. Your adventure concludes on Day 3 with a final sunrise at Lake Afdera before returning to Semera for your 
    departure. This tour offers a rare glimpse into one of the most dramatic and challenging natural environments on the planet.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/danakil/mule-ethiopia-tours-dallol-2.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-4.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-5.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-6.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-gaetale-pool.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-7.jpg",
      "/images/tours/danakil/mule-ethiopia-tours-dallol-8.jpg",
      "/images/home/mule-ethiopia-tours-danakil-dallol.jpg",
    ],
    imagePath: "/images/tours/danakil/mule-ethiopia-tours-dallol-2.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa, Fly To Semera Drive To Afdera Volcano",
        subtitle: "",
        detail: `This day we will meet you at the town of Semera airport then we will drive to  Danakil depression. We start an early drive to Lake 
        Afdera(a salt lake that is located in the heart of Danakil Depressions and in this lake you may have a chance at the natural hot springs then 
        later you have to swim around this lake we will be driving to  Dodom (at the base of Erta Ale). Leave after lunch, possibly at 01:30. After 
        you pass several small hamlets scattered here and there in this desert land, Dodom is about 9.5km from Erta Ale and takes about 1 hour 
        of trekking. Early dinner around 17:00, Camels transport all the camping materials and some food (sleeping materials like light mattresses 
        and mat and water) to the volcano’s rim, where we spend the night watching the dramatic action of the boiling lava. Danakil Depression (
        dallol and Erta Ale) ranks as one of Ethiopia’s most alluring and physically challenging natural attractions. It is a shield volcano with 
        a base diameter of 30 km and a 1km square caldera at its summit. Erta Ale contains the world’s only permanent lava lake. Erta Ale is 613 
        meters, with a lava lake, one of only five in the world, at the summit. It is notable for being the longest existing lava lake, present 
        since the early years of the twentieth century. `,
        posttitle: "",
        overnight: "camping on the mountain",
      },
      {
        day: 2,
        title: "ErtaAle to HamadEla to Dallol to Afdera",
        subtitle: "",
        detail: `This day after an early breakfast we will drive to HamadEla at 04:30, a better village with a total population of about 500 people. You 
        will see lots of camel caravans and you will have the sunset look from the very shallow salt Lake Assale.Morning tour Drive to Ragad (Asebo), 
        the place where thelocalities are mining salt. 1,200 km2 (460 sq mi) of the Afar Depression is covered by salt, and you will Look at the activity 
        of breaking the salt from the ground, local people are cutting it into rectangular pieces and loading it on camels. You drive ahead to Dallol 
        and visit the different landscapes formed by volcanic activity; Dallol + Lake Assale + salt canon, camel caravans, follow up camel caravans, 
        and　Drive to Lake Afdera`,
        posttitle: "",
        overnight: "Camping in Lake Afdera",
      },
      {
        day: 3,
        title: "Afdera to Semera to Addis Ababa to Departure ",
        subtitle: "",
        detail: `This day you may have another chance to see the beauty of the sunrise in Lake Afdera then after breakfast, we will drive to the 
        town of Semera and drop you at the airport for your departure`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "12",
    title: "Addis Ababa to Arba Minch",
    shortDescription: `Discover the rich cultural and natural beauty of Ethiopia on this 6-day journey through the Great Rift Valley lakes and Omo 
    Valley tribes. Explore Lake Chamo, visit the Dorze and Karo tribes, and immerse yourself in the unique traditions of the Konso, Hamar, and Mursi 
    people. Experience Ethiopia’s wildlife, stunning landscapes, and ancient cultures, ending your adventure in Addis Ababa.`,
    accommodation: "Lodge/Hotels",
    transportation: "Drive and Flight",
    duration: "6 Days/ 5 Nights",
    description: [`This 6-day tour takes you on a captivating journey through the Great Ethiopian Rift Valley and the culturally rich Omo Valley. Your 
    adventure begins with a drive from Addis Ababa to Arba Minch, where you’ll unwind at the scenic Haile Resort. The next day, embark on a boat 
    trip on Lake Chamo, known for its wildlife, including hippos and crocodiles, followed by a visit to Nechisar National Park and the Dorze 
    Village, famous for its beehive-shaped houses and weaving traditions.
    Continue your exploration as you travel to Konso, a UNESCO World Heritage Site known for its terraced farming and cultural heritage. You'll 
    immerse yourself in the traditions of the Konso people, then head to Turmi to visit the Karo tribe, known for their artistic body painting 
    and scarification. In Turmi, you'll also interact with the Hamar tribe, learning about their unique customs.
    Day five offers a visit to the Mursi village, where you’ll encounter their iconic lip plates and scarification practices. Your journey 
    concludes with a visit to the Ari village, where you can observe traditional farming and daily life before returning to Addis Ababa. 
    This tour offers an unparalleled combination of nature and culture, providing deep insights into Ethiopia’s diverse traditions and 
    breathtaking landscapes.`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/arba-minch/mule-ethiopia-tours-dorze-weaver.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-lodge-view.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-nech-sar-vista.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-dorze-dancers.jpg",
      "/images/tours/arba-minch/mule-ethiopia-tours-dorze-woman.jpg",
      "/images/tours/omo/mule-ethiopia-tours-omo-valley-4.jpg",
    ],
    imagePath: "/images/tours/arba-minch/mule-ethiopia-tours-dorze-weaver.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: "Addis Ababa, Fly To Semera Drive To Afdera Volcano",
        subtitle: "",
        detail: `You'll start by departing from Addis Ababa and driving south to Arba Minch.`,
        posttitle: "",
        overnight: "Haile Resort in Arba Minch",
      },
      {
        day: 2,
        title: "Lake Chamo, Lake Abaya, and Dorze Village",
        subtitle: "",
        detail: `On this day, you'll embark on a boat trip on Lake Chamo, which is known for its abundanthippos and crocodiles. Afterward, 
        you'll explore Nechisar National Park, where you can spotwildlife like zebras and gazelles. You'll also have the opportunity to 
        visit the Dorze Village,famous for its traditional beehive-shaped houses and weaving techniques.`,
        posttitle: "",
        overnight: "Haile Resort in Arba Minch",
      },
      {
        day: 3,
        title: "Konso Village and Culture",
        subtitle: "",
        detail: `Leaving Arba Minch, you'll head to Konso, renowned for its terraced farming and uniquecultural heritage. You'll have 
        the chance to explore the Konso Cultural Center, where you canlearn about the customs and traditions of the Konso people.`,
        posttitle: "",
        overnight: "TurumiEmerald Lodge in Konso",
      },
      {
        day: 4,
        title: "Turmi and Karo Tribe",
        subtitle: "",
        detail: `On this day, you'll depart from Konso and travel to Turmi, a town inhabited by the Hamar tribe.Once there, 
        you'll visit a Karo village, where you can learn about their artistic body painting andscarification practices.`,
        posttitle: "",
        overnight: "TurumiEmerald Lodge in Konso",
      },
      {
        day: 5,
        title: "Turmi and Mursi Village",
        subtitle: "",
        detail: `You'll have the opportunity to explore the Mursi village, known for its distinctive lip plates andd 
        ecorative body scarifications. This will provide you with an insight into their customs and way oflife.`,
        posttitle: "",
        overnight: "Jinka Resort in Jinka",
      },
      {
        day: 6,
        title: "Ari Village and Return to Addis Ababa",
        subtitle: "",
        detail: `On the last day of your adventure, you'll visit an Ari village in the morning, where you can learnabout their 
        agricultural practices and traditional lifestyle. Afterward, you'll transfer to JinkaAirport and fly back to Addis Ababa, 
        concluding your journey through the Omo Valley`,
        posttitle: "",
        overnight: "",
      },
    ],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "13",
    title: "Tigray Churches 4 Days Tour Itinerary",
    shortDescription: `Fly from Addis Ababa to Axum to explore its ancient sites, including the Stelae Field and Queen of Sheba's Palace. Visit the 
    3000-year-old Temple of Yiha and the rock-carved Debre Tsion Abune Abreham Monastery. Trek to the Mariam Korkor Monastery and Abba Daniel’s 
    Prayer Room, then climb Abune Yemata Guh for ancient rock paintings. Conclude with a visit to Mekele’s market before returning to Addis Ababa 
    or extending your trip to the Danakil Depression.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "4 Days/ 3 Nights",
    description: [`This tour begins with a flight from Addis Ababa to Axum, where you'll explore ancient landmarks such as Axum Tsion St. Mary Orthodox 
    Church, the Queen of Sheba's Palace, and the famous Stelae Field. The next day, you'll drive to Yiha to visit the 3000-year-old temple of Almokah, 
    followed by a trip to the rock-carved Debre Tsion Abune Abreham Monastery and Yohannes Makudi Church, nestled between towering sandstone walls.
     On the third day, a two-hour trek in the Geraltha region will lead you to the 3rd-century Mariam Korkor Monastery and the nearby Abba Daniel’s 
     Prayer Room. Finally, on day four, you'll climb the mountain of Abune Yemata to view ancient rock paintings, and then drive to Mekele, where 
     you can explore the local market before either flying back to Addis Ababa`],
    groupsize: "2 to 12",
    heroimage: [
      "/images/tours/axum/mule-ethiopia-tours-axum-stelae.jpg",
      "/images/tours/axum/mule-ethiopia-tours-axum-1.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-3.jpg",
      "/images/tours/tigray/mule-ethiopia-tours-gheralta-5.jpg",
    ],
    imagePath: "/images/tours/tigray/mule-ethiopia-tours-gheralta-5.jpg",
    isFeatured: true,
    detailedItinerary: [
      {
        id: 1,
        day: "Flight Addis Ababa to Axum",
        subtitle: "",
        detail: `Flight from Addis Ababa to Axum. After checking into your hotel, a city tour of Axum includes Axum Tsion St. Mary Orthodox Church, 
        Dungur Palace (Queen of Sheba Palace), Ezana Stone, Ezana Park, Arabtu Ensessa Church, King Bazen’s Tomb, Obelisk of Axum/Stelae Field, and 
        Queen of Sheba’s Bath.`,
        posttitle: "",
        overnight: "Axum",
      },
      {
        id: 2,
        day: "Axum to Hawzein",
        subtitle: "",
        detail: `Drive 20km to visit the 3000-year-old temple of Almokah in Yiha. Proceed to Debre Tsion Abune Abreham Monastery, carved entirely 
        from the living rock. Continue to Yohannes Makudi church, accessed via a narrow cleft between towering sandstone walls.`,
        posttitle: "",
        overnight: "Hawzen",
      },
      {
        id: 3,
        day: "Korkor Mountains",
        subtitle: "",
        detail: `Drive to Geraltha for 2 hours of trekking to visit the Mariam Korkor Monastery, dating back to the 3rd century. A short walk leads 
        to Abba Daniel’s Prayer Room. Afterward, return to Hawzen.`,
        posttitle: "",
        overnight: "Hawzen",
      },
      {
        id: 4,
        day: "Abune Yemata Guh",
        subtitle: "",
        detail: `Early morning drive 10km to Megab and climb the mountain of Abune Yemata to visit 3rd-century paintings. After lunch, drive to 
        Mekele, visit the market.`,
        posttitle: "",
        overnight: "Flight to Addis.",
      }
    ],

    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "14",
    title: "CITY TOUR OF ADDIS ABABA",
    shortDescription: `Founded in 1886 by Emp. Menelik II, Addis Ababa is the capital of Ethiopia and the seat of the African Union (AU). Addis Ababa is 
    the third highest capital in the world and one of the largest cities in Africa with a population well over 5 million.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "4 Days/ 3 Nights",
    description: [`Founded in 1886 by Emp. Menelik II, Addis Ababa is the capital of Ethiopia and the seat of the African Union (AU). Addis Ababa is 
      the third highest capital in the world and one of the largest cities in Africa with a population well over 5 million. It is located at 2500 m 
      above sea level at the foot step of the highest peak of Entoto Mountain chain (3200m above sea level), and enjoys an excellent climate all 
      year round; with an average temperature of 160C. Addis Ababa is a pleasant city with wide avenues of Jacarandas, interesting museums and one of 
      the largest open-air markets in Africa, known as Merkato.`,
      `National Museum: It comprises of many archaeological and historical findings including the famous complete hominid fossil remain of ‘Lucy’ 
      locally known as ‘Dinknesh’ meaning wonderful. Visiting this museum is having a good summary for your visit to the historic Ethiopia.`,
      `Ethnological Museum: It is found in the main campus of the Addis Ababa University by the Institute of Ethiopian Studies with the aim to 
      preserve the country's historical and cultural heritages. It has complete collections that describe almost all the tribal groups in Ethiopia. 
      Here you will have an overview about the history, culture and traditions of the people of Ethiopia. The collections include the nomadic tribal 
      groups that are now living just as man's forefather lived thousands of years back.`,
      `Trinity Cathedral: a beautiful church with a baroque style 
      of European architecture which is unique to both Ethiopia and Africa and is dedicated to the Holly Trinity. Here you will find scripts of 
      the imperial families, statues done by a Greek sculpture, Stained glass window paintings from the Old and New Testament in the Bible and 
      coffins of Emperor Haile Silassie-I; the founder of the church, and his wife.`,
      `Merkato: It is the largest open-air market in Africa. Here you will be presented with confusing, but fascinating, glimpse of the vast range 
      of goods and artifacts available from all parts of the country and you will enjoy the Ethiopian trade exchange tradition in the open air, 
      you can purchase any thing you desire here.`,
      `St. George Cathedral: The church of St. George is a very traditionally structured building. Menelik II following his victory over the 
      Italians at the Battle of Adwa built the octagonal church in 1896. St. George the dragon killer was the patron saint of soldiers and 
      it is to him that the church is dedicated. In St. George church, the most interesting thing is the artwork of both modern and traditional 
      church painting.`,
      `Mount Entoto: It is the highest peak in Addis with an altitude of 3200 meters, which was the site for the first palace 
      of Emperor Menelik-II, the founder of Addis Ababa. Here there is St. Mary church, where Emperor Menelik crowned Emperor in it and 
      you will admire the stupendous views of the city with its surrounding plains and volcanic cones together with its breathtaking air.`,
      `Lion Park: This small but captivating park is located a few hundred meters down from the Addis Ababa University Sidest Kilo campus. 
      In this lion cage, you can see graceful caged lions devouring large chunks of meat and where you can take your pictures standing beside 
      them.`,
      `Zoological Museum: The Zoological Natural History museum was established at the then University  College of  Addis Ababa in 1955. Since 
      then, it has remained the only natural history museum in the country. It is located in the science faculty compound and houses Specimens 
      of more than 1100 species of animals. These specimens were collected by Mr. S. Patrizi during the time of Italian occupation, and staff 
      and students of the Department of Biology and various researchers who worked in Ethiopia in collaboration with the Biology Department.`,
      `Pottery: Is one of the cottage industries and it is a means of producing house hold utensils from clay mud where it is available. Poetry 
      is normally done by women like other African nations.  Here, you can see the whole process of making a poetry, which means, making, drying, 
      and firing to make it strong and durable.`,
      `Weaving: This is the making cultural clothes with different designs in a traditional way.  
      Here you can see while the weavers are weaving and selling the products in the nearby to their weaving place.  The main produces are 
      the traditional Shema Clothes like Gabi, Netela, and so on from cotton, which are completely in different style with other industrially, 
      make nylon clothes.  The national cloth is also made in the same way.  Even if weaving is the activity that can be done in every part of the 
      country, there are people who are specialized for this activity and making cultural clothes with a quality in many different forms. These 
      are Dorze people, one of the Southern nations and Nationalities who are known also by beehive shaped houses that when practically seen 
      looks like more an elephant head.  In Addis Ababa, they are leading in supplying the cultural clothes.`,
      `PATRIARCHATE MUSEUM and LIBRARY This recently modernized museum was established in 1996 EC ‘ to preserve and protect the heritage of past 
      religious leaders and preserve religious icons and items’. The museum ( /the Ethiopian Tewahdo Orthodox Church Patriarchate Museum & Library ) 
      is located at the Patriarchate Office and close to the National Museum of Ethiopia. This purposefully rebuilt museum on the premises of the 
      old Patriarchate residence also includes a well-organized library of religious books and manuscripts for researchers and lay visitors alike. 
      The museum includes various artefacts including manuscripts ( Brana) religious icons and materials, wood carved religious icons and paintings, 
      pictures of past religious leaders, as well as robes. The items were acquired through donations by past religious leaders ( Patriarchs, 
      Archbishops etc..) , members of the nobility and other individuals. Items are well kept in new showcases, has lifts to its upper chambers ; 
      items are numbered and captioned with a central catalogue. It is protected by CCTV cameras as well as physical guard protection externally.
      Museum is open every working day except weekends, with plan to open it on weekends in the near future. Museum staff assist in 
      explaining collection and are helpful for group visiting groups.An entrance fee of 1 birr for students 3 birr for adults and 25 birr for 
      foreigners`,
    ],
    groupsize: "2 to 12",
    heroimage: [
      "/images/about/mule-ethiopia-tours-guide.jpg",
      "/images/about/mule-ethiopia-tours-team.jpg",
    ],
    imagePath: "/images/about/mule-ethiopia-tours-guide.jpg",
    isFeatured: true,
    detailedItinerary: [],
    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
  {
    id: "15",
    title: "Excursion Trips Addis Ababa",
    shortDescription: `Explore the highlights of Addis Ababa on an excursion trip, including a visit to the National Museum to see the famous ‘Lucy’ 
    fossil, the Holy Trinity Cathedral, and a panoramic view from Mount Entoto. Discover local culture at the bustling Merkato, the largest market in 
    East Africa.`,
    accommodation: "Hotels",
    transportation: "Drive and Flight",
    duration: "4 Days/ 3 Nights",
    description: [
      `Addis Menagesha Suba Forest AddisAfter breakfast drive to the western outskirt of Addis Ababa to Menagesha forest. It is the mountainous area 
      having the shape of an upside down pudding basin and is covered more or less entirely in thick heath and on the other side it is fully covered 
      with indigenous trees which becomes a habitat for endemic species of birds and animals. Late after noon drive back to Addis.`,
      `ADDIS / Debre Zeit / Lake Koka / Lake Ziway / ADDISAfter breakfast drive to Debre Ziet to visit the Crater Lakes with their bird life. Proceed 
      through the rift-valley region to artificial Lake of Koka to spot various species of birds. Continue driving to Lake Ziway (the largest Northern 
      Ethiopian rift-valley Lake, it is the home of 5 little volcanic Islands) here you will spot various species of water birds. Drive back to Addis.`,
      `Melka Kunture, Adadi Mariam & TiyaDuration: Full DayAM, depart south-west of Addis Ababa for visiting:Melka Kunture (50km) where fossils of pre 
      history age and more than 1.5 million years stone tools have been discovered.Adadi Mariam Cave Church (17km further) believed to date back to the 
      13th century and gives a good indication of the Lalibela 12th century rock-hewn churches.35 km drive from turn-off to Adadi Maryam you reach Tiya 
      Stelae Fields where prehistoric monoliths somewhat similar to the Axum stelae are seen. Picnic lunch en-route and afternoon easy drive back to 
      Addis Ababa.`,
      `Excursion trip to Blue Nile Gorge : After breakfast, head north of Addis Ababa to passing Sululta Plains. Our first stop will be the Debre Lobanos 
      Monastery. 103 KM. to the north from Addis Ababa, a right hand turn leads to the ancient monastery of Debre Libanos. This is the beginning of the 
      true gorge country for which the central highlands are renowned. Breath-taking views over chasms with a depth of 2,000 ft. or more. The old 
      monastery itself is situated behind the new church to the right high up on the cliff. The first Abbot of the monastery was one Tekle Haymanot 
      (1260) later canonized. The new church stands beneath a cliff on the edge of the gorge. It has beautiful stained glass windows and before you 
      enter, it is worth noting the mosaic figures on the façade. You can stop and spread a picnic lunch halfway between the turn off and the church. 
      Gregarious gelada baboons peer curiously at the visitor while birds of prey soar overhead.Further drive north and visit the Blue Nile gorge. 
      The great Blue Nile River flows out of Lake Tana and cascades over the famous Blue Nile Falls (Tis Issat), then winds for about 500 km. through 
      some of the most spectacular gorge country in the world. For centuries the river formed the natural barrier between Shewa and Gojam, but now a 
      modern bridge spans the turbulent water. There are guards on the bridge and photographing is forbidden.`,
      `Ambo & Wenchi Crater LakeDuration: Full Day The road to Ambo (125km west of Addis) takes you through the capital’s water supply reservoir Gefersa 
      where a range of bush and wetland bird species including as many as a quarter of Ethiopia's 29 endemic birds are found. To reach the Crater Lake 
      Wenchi drive further 27km from Ambo. Walk or mule ride roughly 2km to the crater rim and after enjoying the wonderful views of the surrounding 
      countryside return to Ambo town, have lunch and relax swimming in the hot mineral water pool before driving back to Addis Ababa.`,
      `Ankober Duration: Full Day The road to Ankober passes through impressively rugged scenery and after about 130km drive you reach Debre Berhan town 
      where you'll have a coffee break and then drive further a few km, turn on the gravel road and drive zigzagging along several hills scattered all 
      over the cultivated plateau. The gravel road leads to the lofty massive mountain known as Kundi (over 3500 masl) overlooking the Great Rift Valley. 
      From this chilly height covered with eucalyptus forest you may trek down to Ankober Palace Lodge (2870 masl) where you’ll have your lunch enjoying 
      the wonderful scenery.After lunch before driving back to Addis visiting one of the surrounding churches with its artifacts as well as poetry and 
      music school may give you an insight into the life of the Ethiopian Orthodox Church in the countryside.`,
      `Addis to Awash National Park to Addis : After breakfast, drive to Awash National Park and enjoy a game drive in park and you will have a game drive 
      to visit mammals and birds: The park’s name comes from one of the longest river in Ethiopia: the Awash. This park is the oldest and most developed 
      wildlife reserve in Ethiopia. It is even easy to access. Awash National Park occupies about 830 square kilometres (320 miles) of dry savannah in the 
      middle of the Rift Valley. This hot, arid terrain climbs up to 1000 meters (600 feet) above sea level, with the exception of the peak of Fentale 
      volcano, which reaches 2007 meters (1200 feet). Temperatures in the park are hot and can reach as high as 420 C (1070 F) Nights are cooler, with 
      temperatures between 100 C & 220 C (500 C & 720 F). Rain mainly falls between February and April, and June to August, and averages 619 mm (24 inches).
      Awash national park has over 350 species of bird that have been recorded in this savannah grassland. Here you will also visit the Awash River Falls. 
      Drive back to Addis through Ethiopian Great Rift Valley Region and visit Beseka Crater Lake. `,
    ],
    groupsize: "2 to 12",
    heroimage: [
      "/images/about/mule-ethiopia-tours-team.jpg",
      "/images/about/mule-ethiopia-tours-guide.jpg",
      "/images/home/mule-ethiopia-tours-lake-tana.jpg",
    ],
    imagePath: "/images/about/mule-ethiopia-tours-team.jpg",
    isFeatured: true,
    detailedItinerary: [],

    included: [
      "All transfers and ground transportation with fuel and driver allowance",
      "All entrance fees according to the program",
      "Accommodations",
      "Land Transport;",
      "Breakfast, Lunch and Dinner",
      "Bottles of drinking water throughout the tour",
      "Multilingual professional guide",
      "Government tax associated with the trip.",
    ],
    notincluded: [
      "Day Use on the last day in Addis Ababa;",
      "FOC Leader;",
      "Any flight (Domestic Flights can be arranged upon request)",
      "Alcoholic Expenses;",
      "Any Photography and Video fees;",
      "And what is NOT included on the “Included” List.",
    ],
  },
];
/* ---------------------------------------------------------------------------
   Helpers
--------------------------------------------------------------------------- */

/** Backwards-compatible alias, the raw array. */
export const TOURS = TourSummaryArray;

export function getAllTours() {
  return TourSummaryArray;
}

export function getFeaturedTours(limit) {
  const featured = TourSummaryArray.filter((tour) => tour.isFeatured);
  return typeof limit === 'number' ? featured.slice(0, limit) : featured;
}

/** Legacy alias used by the homepage's PopularTours section. */
export function featuredTours(limit = 6) {
  return getFeaturedTours(limit);
}

/** Returns an array (kept for compatibility), usually zero or one item. */
export function getTourById(id) {
  return TourSummaryArray.filter((tour) => String(tour.id) === String(id));
}

/** Returns the single tour object or null. */
export function getTour(id) {
  const found = getTourById(id);
  return found.length ? found[0] : null;
}

/** Everything searchable about a tour, normalized to lowercase. */
export function tourKeywords(tour) {
  return [
    tour.title,
    tour.shortDescription,
    ...(tour.description || []),
  ]
    .join(' ')
    .toLowerCase();
}

/** Parse the day-count from a "N Days/ M Nights" style string. */
export function tourDurationDays(tour) {
  const m = String(tour.duration || '').match(/\d+/);
  const n = m ? parseInt(m[0], 10) : 0;
  return Number.isFinite(n) ? n : 0;
}

/**
 * Best-effort category derived from the tour copy.
 * Returns { slug, label } where slug matches CATEGORIES slugs in /data/categories.js.
 */
export function tourCategory(tour) {
  const t = tourKeywords(tour);
  if (/danakil|dallol|erta ale|volcano|depression|afdera|semera|lava/i.test(t))
    return { slug: 'adventure', label: 'Adventure & Volcano' };
  if (/omo|mursi|hamer|hama?r|karo|dorze|konso|dassenech|dasenech|tribal|turmi|jinka/i.test(t))
    return { slug: 'cultural', label: 'Cultural Tours' };
  if (/coffee/i.test(t))
    return { slug: 'cultural', label: 'Cultural Tours' };
  if (/simien|bale|trekking|trek|hike|hiking|national park|kilimanjaro|escarpment/i.test(t))
    return { slug: 'trekking', label: 'Hiking & Trekking' };
  if (/tigray|axum|church|gheralta|gerealta|monaster|lalibela|gondar|castle|rock-hewn/i.test(t))
    return { slug: 'historical', label: 'Historical Tours' };
  if (/wildlife|wolf|hyena|ibex|gelada|safari/i.test(t))
    return { slug: 'wildlife', label: 'Wildlife & Safari' };
  if (/addis|city tour|merkato|entoto|excursion|museum/i.test(t))
    return { slug: 'city-tours', label: 'City Tours' };
  return { slug: 'day-trips', label: 'Day Trips' };
}

const REGION_PATTERNS = [
  { label: 'Addis Ababa', re: /addis|merkato|entoto|bole/i },
  { label: 'Afar Triangle', re: /danakil|dallol|erta ale|semera|afdera|affe?ra/i },
  { label: 'Omo Valley', re: /omo|mursi|hamer|hama?r|turmi|jinka|omorate|karo|dasenech|dassenech|arba minch/i },
  { label: 'Northern Highlands', re: /lalibela|gondar|bahir dar|tana/i },
  { label: 'Simien Mountains', re: /simien/i },
  { label: 'Tigray', re: /tigray|axum|gheralta|gerealta|mekelle|wukro|hawzen|debre damo/i },
  { label: 'Bale Mountains', re: /bale|sanetti|harrena/i },
  { label: 'Eastern Ethiopia', re: /harar|dire dawa|babile/i },
  { label: 'Southwest Highlands', re: /jimma|bonga|bebeka|kaffa|yirgalem|yirga|wondo/i },
];

export function tourRegion(tour) {
  const t = `${tour.title} ${tour.shortDescription}`.toLowerCase();
  const hits = REGION_PATTERNS.filter((r) => r.re.test(t));
  if (hits.length === 1) return hits[0].label;
  if (hits.length > 1) return 'Grand Ethiopia';
  return 'Ethiopia';
}

/**
 * Destination → keyword matcher so the listing page can honor
 * /tours?destination=omo-valley links coming from the homepage & destinations.
 */
const DESTINATION_QUERY = {
  'addis-ababa': { label: 'Addis Ababa', re: /addis|merkato|entoto|city tour/i },
  lalibela: { label: 'Lalibela', re: /lalibela/i },
  gondar: { label: 'Gondar & Bahir Dar', re: /gondar|bahir dar|tana/i },
  'omo-valley': { label: 'Omo Valley', re: /omo|turmi|jinka|mursi|hamer|hama?r|karo|dorze|konso/i },
  'danakil-depression': { label: 'Danakil Depression', re: /danakil|dallol|erta ale|semera/i },
  'simien-mountains': { label: 'Simien Mountains', re: /simien/i },
  axum: { label: 'Axum & Tigray', re: /axum|tigray|gheralta|gerealta|mekelle|wukro/i },
  'bale-mountains': { label: 'Bale Mountains', re: /bale|sanetti|harrena/i },
  harar: { label: 'Harar & Dire Dawa', re: /harar|dire dawa|babile/i },
};

export function getDestinationInfo(slug) {
  return DESTINATION_QUERY[slug] || null;
}

export function toursInDestination(slug) {
  const info = getDestinationInfo(slug);
  if (!info) return TourSummaryArray;
  return TourSummaryArray.filter((t) => info.re.test(`${t.title} ${t.shortDescription}`.toLowerCase()));
}