const fakeData = [
    {
        name: "Cox's Bazar",
        image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Sajek.png',
        disc1: "Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.",
        disc2: "Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.",
        map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d193454.16213579744!2d91.983333!3d21.416667!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1600344299451!5m2!1sen!2sus",
        hotels: [
            {
                name: "Cox's Bazar-1",
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2027.png',
                price: '20'
            },
            {
                name: "Cox's Bazar-2",
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2026.png',
                price: '36'
            },
            {
                name: "Cox's Bazar-3",
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2028.png',
                price: '38'
            }
        ]
    },
    {
        name: 'Sreemangal',
        image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Sreemongol.png',
        disc1: " is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.[1]",
        disc2: " is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.[1]",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23671.51518741189!2d91.70753463876736!3d24.31356280557819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2sSreemangal%2C%20Bangladesh!5e1!3m2!1sen!2sus!4v1600393573522!5m2!1sen!2sus",
        hotels: [
            {
                name: 'Sreemangal-1',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2026.png',
                price: '21'
            },
            {
                name: 'Sreemangal-2',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2027.png',
                price: '23'
            },
            {
                name: 'Sreemangal-3',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2028.png',
                price: '134'
            }
        ]
    },
    {
        name: 'Sundarban',
        image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/sundorbon.png',
        disc1: "he Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4]",
        disc2: "he Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4]",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.5526268485332!2d88.36718571427252!3d22.509800340947127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02712e9b1f0269%3A0xcda62257ce3a0e39!2sSundarban!5e1!3m2!1sen!2sus!4v1600393824958!5m2!1sen!2sus",
        hotels: [
            {
                name: 'Sundarban-1',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2026.png',
                price: '45'
            },
            {
                name: 'Sundarban-2',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2028.png',
                price: '56'
            },
            {
                name: 'Sundarban-3',
                image: 'https://raw.githubusercontent.com/ProgrammingHero1/travel-guru/master/Image/Rectangle%2027.png',
                price: '12'
            }
        ]
    }
];

export default fakeData;