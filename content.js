/*
  POSIE - the one file you edit to change the site's lists.

  1. Replace the email and social links below with your own.
  2. Your real products are listed below.
  3. To use your own photos: put them in a folder called "images" next to this file,
     then list them like  images: ["images/my-candle-1.jpg", "images/my-candle-2.jpg"]
     If a product has no photos listed, a colourful "sample photo" is shown instead.

  Be careful to keep the quotes "like this" and the commas , between items.
*/
window.POSIE = {
  brand: "Posie",

  // Your logo picture, e.g. "images/logo.png". Leave "" to show the name "Posie" as text.
  logo: "images/logo.png",

  // Three pictures shown under the big headline on the home page, e.g.
  // heroPhotos: ["images/hero-1.jpg", "images/hero-2.jpg", "images/hero-3.jpg"],
  // Leave the list empty to show sample pictures.
  heroPhotos: ["images/hero-1.jpg", "images/hero-2.jpg", "images/hero-3.jpg"],

  // Optional: a photo for the little hanging gift tag on the home page, e.g. "images/tag.jpg".
  // Leave "" to keep the flower from your logo.
  tagPhoto: "images/tag.jpg",

  // Shown in the footer and on the "Ask about this gift" button. Leave "" to hide.
  email: "",

  // Leave url as "" to hide a link. Add or remove lines as you like.
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/posie_by_kriszta_boros/", handle: "" },
    { name: "Pinterest", url: "https://www.pinterest.com/krisztaboros_posie", handle: "" },
    { name: "YouTube",   url: "https://www.youtube.com/@krisztinaboros1760", handle: "" }
  ],

  // The filter buttons on the Gifts page, in this order. "All" is added automatically and shows every gift.
  // A gift can be in several groups: in a product, write category: ["Wedding", "Centerpieces"].
  categories: ["Wedding", "Centerpieces", "Gift boxes", "Small things"],

  // Optional "season" on a product: "Autumn", "Winter", "Valentine" or "Spring". Gifts in season are shown first on the Gifts page;
  // gifts without a season stay in the middle; gifts out of season move to the end.
  // Your products. The first 3 are also shown on the home page under "Recently made".
  products: [
    {
      "id": "haunted-forest",
      "name": "Haunted Forest Halloween Soy Jar Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Large Halloween Soy Candle, infused with a luxurious J'adore perfume scent. Handcrafted with natural wax for a clean, elegant burn.",
      "price": "",
      "description": [
        "Handcrafted with 100% natural soy wax, this large premium jar candle features a beautifully detailed, mystical Halloween landscape complete with a crescent moon, playful ghosts, and dark bats. Instead of the usual pumpkin spice, it is uniquely infused with the luxurious and elegant aroma of the classic J'adore by Dior perfume type, bringing a touch of high-end sophistication to your autumn evenings. Perfect for cozy nights in or as a unique festive gift for someone special."
      ],
      "details": [
        [
          "Size",
          "12 cm diameter, 4 cm height"
        ]
      ],
      "images": [
        "images/gift-1.jpg"
      ]
    },
    {
      "id": "halloween-night",
      "name": "Halloween Night Soy Jar Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Halloween Soy Jar Candle infused with a rich Black Opium perfume scent for an elegant, warm autumn vibe.",
      "price": "",
      "description": [
        "Embrace the cozy magic of autumn with our enchanting Halloween Soy Jar Candle! Carefully hand-poured with 100% natural, eco-friendly soy wax, this premium jar candle features a beautifully detailed, dark gothic label complete with haunted castles, flying bats, and a spooky graveyard scene. Moving away from traditional fall spices, this festive piece is elegantly infused with the rich, intoxicating aroma of the iconic Black Opium perfume type—blending deep notes of black coffee, sweet vanilla, and delicate white florals. It is the perfect, sophisticated companion for your autumn evenings, or a lovely gift to surprise someone special this spooky season."
      ],
      "details": [],
      "images": [
        "images/gift-2.jpg"
      ]
    },
    {
      "id": "spiced-pumpkin-harvest",
      "name": "Spiced Pumpkin Harvest",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Cosy and chic pumpkin soy candle, a handcrafted dessert candle with elegant mini pumpkins and gold stars. The perfect luxury autumn gift for a cozy home.",
      "price": "",
      "description": [
        "Bring the ultimate cozy autumn vibes into your home with our luxury pumpkin soy candle! This beautiful dessert candle is handcrafted with premium eco-friendly soy wax and topped with an incredibly detailed arrangement of mini white and orange pumpkins, delicate wax leaves, and shimmering gold stars. Infused with a rich, high-end fragrance, this unique handmade fall decor piece acts as both a stunning aesthetic home accessory and a delightful source of warmth. Whether you are looking for the perfect festive autumn gift or a scented botanical candle for your own relaxation, this seasonal masterpiece will elevate any space during the chilly months."
      ],
      "details": [
        [
          "Size",
          "12 cm diameter, 4 cm height"
        ]
      ],
      "images": [
        "images/gift-3.jpg"
      ]
    },
    {
      "id": "gilded-flora-harmony",
      "name": "Gilded Flora Harmony",
      "category": [
        "Wedding",
        "Centerpieces"
      ],
      "short": "Beautiful botanical soy candle wreath. Handcrafted with elegant wax flowers and gold accents, it is the perfect festive elegant gift.",
      "price": "",
      "description": [
        "Add a touch of timeless elegance to your space with this botanical soy candle. Handcrafted with a soy wax blend, this unique wreath-shaped candle features a beautiful arrangement of detailed white wax roses, peonies, and delicate blossoms. Set in a charming gold-trimmed fluted base, it is subtly adorned with shimmering golden hearts. Infused with a sophisticated fragrance, this handmade floral piece fills your room with a gentle warmth, making it the perfect companion for your quiet, relaxing evenings at home."
      ],
      "details": [],
      "images": [
        "images/gift-4.jpg"
      ]
    },
    {
      "id": "serene-blossom-bowl",
      "name": "Serene Blossom Bowl",
      "category": [
        "Centerpieces"
      ],
      "short": "Luxury botanical soy candle bowl. Featuring elegant wax roses and crackling wooden wicks, it is the perfect aesthetic home accessory.",
      "price": "",
      "description": [
        "Enjoy a quiet, relaxing atmosphere with this handcrafted botanical soy candle. Made from a soy wax blend, this minimalist bowl design showcases finely detailed white wax roses, peonies, and delicate wax leaves. The four crackling wooden wicks create a soft, calming sound as they burn. Whether placed as an artistic centerpiece or given as a special gift, this unique floral piece adds a gentle warmth to any modern space."
      ],
      "details": [],
      "images": [
        "images/gift-5.jpg"
      ]
    },
    {
      "id": "folklove-wreath",
      "name": "Folklove Wreath",
      "category": [
        "Wedding",
        "Centerpieces"
      ],
      "short": "Folk-art inspired soy candle alternative: a luxury botanical soy candle wreath with elegant lovebirds and hearts. The perfect festive elegant gift.",
      "price": "",
      "description": [
        "Celebrate love and tradition with this beautiful botanical soy candle. Handcrafted with eco-friendly soy wax, this unique wreath-shaped candle features a classic folkloric relief with lovebirds, hearts, tulips, and delicate blossoms. Set in a charming scalloped base with a vibrant blue rim and tiny white heart accents, it is designed with multiple wicks for an even, steady burn. This handmade floral piece makes a heartwarming centerpiece for weddings and anniversaries, or a lovely, meaningful gift for someone special."
      ],
      "details": [],
      "images": [
        "images/gift-6.jpg"
      ]
    },
    {
      "id": "whispering-petals-oval-bowl",
      "name": "Whispering Petals Oval Bowl",
      "category": [
        "Centerpieces"
      ],
      "short": "Divine soywax candle in a sleek oval bowl. Featuring elegant handmade wax roses and crackling wooden wicks for the ultimate cozy vibe.",
      "price": "",
      "description": [
        "Bring a sense of calm into your home with this beautiful botanical soy candle. Hand-poured into a modern oval bowl, it features a detailed arrangement of white wax roses, peonies, and delicate leaves, accented with subtle golden hearts and crescents. Perfect as a thoughtful gift or a charming floral centerpiece, this scented candle adds a warm, peaceful touch to your daily relaxation."
      ],
      "details": [],
      "images": [
        "images/gift-7.jpg"
      ]
    },
    {
      "id": "folklove-harmony-bowl",
      "name": "Folklove Harmony Bowl",
      "category": [
        "Wedding",
        "Centerpieces"
      ],
      "short": "Charming botanical soy candle bowl featuring elegant folk art lovebirds, tulips, and shimmering gold accents. The perfect handmade festive gift.",
      "price": "",
      "description": [
        "Discover the charm of tradition with this botanical soy candle. Hand-poured into a unique ceramic bowl, it features a beautiful folkloric relief with lovebirds, a heart, tulips, and delicate blossoms, gently highlighted with subtle gold accents. This handmade floral piece brings a warm, cozy feeling to your home. It makes a thoughtful centerpiece for weddings or anniversaries, and a lovely gift that adds a touch of comfort and cultural artistry to any modern space."
      ],
      "details": [],
      "images": [
        "images/gift-8.jpg"
      ]
    },
    {
      "id": "autumn-harvest-pumpkin-wreath",
      "name": "Autumn Harvest Pumpkin Wreath",
      "category": [
        "Centerpieces"
      ],
      "season": "Autumn",
      "short": "Luxury soy candle wreath. Handcrafted with elegant wax pumpkins and shimmering gold stars, it is the perfect festive autumn gift.",
      "price": "",
      "description": [
        "Bring the cozy vibes of autumn into your home with this pumpkin soy candle. Handcrafted with eco-friendly soy wax, this beautiful candle is topped with a detailed arrangement of mini white and orange pumpkins, delicate wax leaves, and subtle gold stars. Infused with a rich, seasonal fragrance, this unique handmade piece adds a gentle warmth to your space. It is a lovely companion for your own relaxation during the chilly months, or a thoughtful autumn gift for someone special."
      ],
      "details": [],
      "images": [
        "images/gift-9.jpg"
      ]
    },
    {
      "id": "cozy-pumpkin-spice-gift-set",
      "name": "Cozy Pumpkin Spice Gift Set",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The ultimate autumn pumpkin gift box. Packed with handcrafted soy candles, a ceramic pumpkin jar, and cute wax melts, it is the perfect festive autumn gift.",
      "price": "",
      "description": [
        "Bring the cozy spirit of autumn into your home or surprise someone special with this handmade pumpkin gift box. Carefully arranged in a simple kraft box, this set is perfect for welcoming autumn evenings. Inside, you will find a charming ceramic pumpkin jar candle with a gold-accented lid, a classic amber jar candle labeled \"Pumpkin Spice,\" a mini dessert candle topped with wax fruits, and a box of pumpkin-shaped wax melts. Crafted entirely with a soy wax blend for a clean burn, this collection fills your space with rich, comforting aromas. It makes a thoughtful, heartwarming gift that brings the magic of the season right to the doorstep."
      ],
      "details": [],
      "images": [
        "images/gift-10.jpg"
      ]
    },
    {
      "id": "love-spell-waxmelts",
      "name": "Love Spell Waxmelts",
      "category": [
        "Small things"
      ],
      "season": "Valentine",
      "short": "Discover the Love Spell wax melts set, crafted with premium soy wax and sparkling glitter for a warm ambiance.",
      "price": "",
      "description": [
        "Sometimes, the simplest moments deserve to be elevated. I created these handmade Love Spell wax melts to bring warmth and a subtle touch of playful elegance into your living space after a long day. Each piece is hand-poured using 100% natural, eco-friendly soy wax, blended with premium fragrance oils and finished with a delicate dusting of festive glitter. The striking red lip shape is a beautiful piece of home decor even before it meets your burner. Perfect for a cozy weekend read, a relaxing bath, or any moment you want a comforting, long-lasting aroma. Place a piece in your ceramic wax warmer, light a natural tealight underneath, and let the slowly melting wax turn your home into a sanctuary of custom-crafted peace."
      ],
      "details": [],
      "images": [
        "images/gift-11.jpg"
      ]
    },
    {
      "id": "be-my-valentine-waxmelts",
      "name": "Be My Valentine Waxmelts",
      "category": [
        "Small things"
      ],
      "season": "Valentine",
      "short": "Discover the Be my Valentine handmade wax melts set, crafted from premium soy wax with a touch of crimson glitter.",
      "price": "",
      "description": [
        "Bring a gentle sense of romance and warmth into your shared spaces with the Be My Valentine handmade wax melts set, completely free of over-the-top clichés. Each piece is hand-poured using 100% natural, eco-friendly soy wax, infused with premium fragrance oils and a subtle dusting of crimson glitter. The bold red lip shape makes these melts an eye-catching piece of home decor even before they meet the flame. Whether you are planning a quiet date night in, a relaxing evening for yourself, or looking for a thoughtful artisan gift, this collection sets the perfect mood. Place a piece in your wax warmer, light a tealight underneath, and enjoy a sophisticated, comforting aroma."
      ],
      "details": [],
      "images": [
        "images/gift-12.jpg"
      ]
    },
    {
      "id": "p-s-i-love-you-waxmelts",
      "name": "P.S. I Love You Waxmelts",
      "category": [
        "Small things"
      ],
      "season": "Valentine",
      "short": "The P.S. I love you handmade wax melts set blends natural soy wax with a modern, elegant design.",
      "price": "",
      "description": [
        "Creating a welcoming space is all about combining your personal style with a sense of pure comfort. Made for those who love modern aesthetics, the P.S. I Love You handmade wax melts set features a striking geometric center heart, smaller faceted hearts, smooth lips and soft white clouds. Each piece is hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils for a clean, long-lasting aroma. The vibrant pink tones against the pure white clouds make it a gorgeous piece of home decor even before use. Add your choice of shapes to your wax burner, light a tealight, and enjoy a beautifully balanced atmosphere."
      ],
      "details": [],
      "images": [
        "images/gift-13.jpg"
      ]
    },
    {
      "id": "cloud-nine-waxmelts",
      "name": "Cloud Nine Waxmelts",
      "category": [
        "Small things"
      ],
      "season": "Valentine",
      "short": "Discover the Cloud Nine handmade wax melts set, combining natural soy wax with a dreamy cloud design for ultimate relaxation.",
      "price": "",
      "description": [
        "Turn your space into a calm, breezy sanctuary with the Cloud Nine handmade wax melts set. Five round, marble-dyed blue and white discs are each topped with a soft, glittering white cloud. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, they give a clean burn and a deeply comforting, long-lasting aroma. The sky blue swirls make this set lovely home decor even before use, and a thoughtful way to pamper yourself or gift a little slice of heaven. Place a disc in your ceramic wax warmer and light a natural tealight."
      ],
      "details": [],
      "images": [
        "images/gift-15.jpg"
      ]
    },
    {
      "id": "sweetheart-bubble",
      "name": "Sweetheart Bubble",
      "category": [
        "Small things"
      ],
      "season": "Valentine",
      "short": "The Sweetheart Bubble handmade candle combines eco-friendly natural wax with a stunning, modern heart design.",
      "price": "",
      "description": [
        "True beauty in home decor is about finding pieces that spark joy even before they are lit. The Sweetheart Bubble handmade candle brings a modern, elegant touch of warmth and romance to your favorite spaces. This sculptural candle is meticulously hand-poured using 100% natural, eco-friendly wax, forming a contemporary cube built entirely out of soft, pastel-pink hearts, and finished with a delicate satin ribbon. It is an eye-catching piece of home decor for your vanity, coffee table or shelf, and a thoughtful artisan gift for someone special. Place it on a heat-resistant candle plate, trim the wick, and let its gentle presence add a touch of custom-crafted charm to your daily relaxation rituals."
      ],
      "details": [],
      "images": [
        "images/gift-16.jpg"
      ]
    },
    {
      "id": "golden-heart-bunnies-candle-set",
      "name": "Golden Heart Bunnies Candle Set",
      "category": [
        "Small things"
      ],
      "season": "Spring",
      "short": "Bring warmth and whimsical charm to your space. The Golden Heart Bunnies candle set blends natural wax with a heartwarming, detailed artisan design.",
      "price": "",
      "description": [
        "Bring a smile to your space with the Golden Heart Bunnies handmade molded candle set. Three beautifully detailed, espresso-cream toned bunny candles in different endearing poses each wear a tiny, gleaming metallic golden heart on their chest. Meticulously hand-poured using 100% natural, eco-friendly wax, these sculptural candles double as seasonal or year-round home decor for your mantle, bedside table or shelf, and make a unique artisan gift for a loved one. Place them on a secure, heat-resistant candle dish and trim the wicks before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-17.jpg"
      ]
    },
    {
      "id": "mothers-day-blossom-gift-set",
      "name": "Mother’s Day Blossom Gift Set",
      "category": [
        "Gift boxes"
      ],
      "season": "Spring",
      "short": "The ultimate artisan gift for Mother’s Day. Discover the Mother’s Day Blossom handmade candle gift set, featuring natural wax tulips and a personalized candle.",
      "price": "",
      "description": [
        "A thoughtful, heart-warming alternative to traditional flowers, the Mother’s Day Blossom handmade candle gift set comes in an eco-friendly kraft gift box with protective crinkle paper. It holds an elegant, gold-rimmed tart candle with molded pastel pink roses, carnations, an \"ANYA\" letter-bead dedication and a tiny golden heart, together with a freestanding tulip bouquet candle with soft pink petals and pale green stems. Hand-poured using 100% natural, eco-friendly wax and premium fragrance oils. Place the candles on a heat-resistant plate and trim the wicks before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-18.jpg"
      ]
    },
    {
      "id": "autumn-wanderlust-pumpkin-candle-collection",
      "name": "Autumn Wanderlust Pumpkin Candle Collection",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Embrace cozy autumn vibes. The Autumn Wanderlust handmade pumpkin candle collection features uniquely crafted soy candles decorated with decorative pumpkins.",
      "price": "",
      "description": [
        "Capture the essence of a cozy fall road trip with the Autumn Wanderlust handmade pumpkin candle collection, poured into your choice of hand-crafted containers: a retro yellow hippie camper or round, ribbed golden-yellow vessels. Each candle is hand-poured using 100% natural, eco-friendly soy wax and topped with miniature pumpkins, fall leaves and a crackling natural wood wick. A striking piece of autumn home decor for your coffee table, mantle or dining setting, and a premium artisan gift for a fall lover. Place your chosen vessel on a stable, heat-resistant surface."
      ],
      "details": [],
      "images": [
        "images/gift-19.jpg"
      ]
    },
    {
      "id": "baroque-elegance-decorated-candle",
      "name": "Baroque Elegance Decorated Candle",
      "category": [
        "Small things"
      ],
      "short": "Indulge in timeless luxury. The Baroque Elegance handmade sculptural tart candle features intricate vintage wax motifs and a stunning gold-trimmed vessel.",
      "price": "",
      "description": [
        "True luxury is not about being noticed, but about being remembered. The Baroque Elegance decorated handmade sculptural tart candle is poured into a ribbed black container with a hand-painted gold-leaf rim. Its top reveals three amber-honey toned baroque and renaissance-style relief ornaments, accentuated by tiny polished metallic rivets and a clean cotton wick. Hand-poured with 100% natural, eco-friendly wax, it is a statement piece of home decor for an elegant study or coffee table. Place it on a heat-resistant plate and trim the wick before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-20.jpg"
      ]
    },
    {
      "id": "angel-wings-and-golden-cross-memorial-candle-set",
      "name": "Angel Wings & Golden Cross Memorial Candle Set",
      "category": [
        "Gift boxes"
      ],
      "short": "A beautiful, lasting tribute for All Saints' Day. The Angel Wings & Golden Cross handmade memorial candle set honors the memory of a beloved member of the family with grace.",
      "price": "",
      "description": [
        "A lasting, beautiful alternative to traditional memorial lights, the Angel Wings & Golden Cross handmade memorial candle set brings a comforting, peaceful glow to your home altar or a place of remembrance for All Saints' Day. A natural wax candle adorned with two detailed white angel wings, an \"ANYA\" letter-bead dedication and a small gold heart sits in the fluted holder of a minimalist oval concrete tray in soft stone-grey, beside a freestanding baroque style cross in vintage gold leaf. Hand-poured with eco-friendly ingredients, it is a heartfelt artisan gift or condolence tribute. Trim the wick before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-21.jpg"
      ]
    },
    {
      "id": "baroque-symphony-wreath-candle",
      "name": "Baroque Symphony Wreath Candle",
      "category": [
        "Centerpieces"
      ],
      "short": "Celebrate the seasons in absolute luxury. The Baroque Symphony wreath candle features intricate vintage motifs on a gold-leaf trimmed vessel.",
      "price": "",
      "description": [
        "The Baroque Symphony handmade advent wreath candle is a majestic, large-scale centerpiece that brings antique opulence to holiday and seasonal dining displays. It is poured into a black vessel with a hand-painted gold-leaf rim, its surface arranged with honey-amber toned baroque ornaments, acanthus leaves and crests. Four premium cotton wicks make it a luxurious, modern Advent wreath or a statement piece of home decor. Hand-poured with 100% natural, eco-friendly wax. Place it on a stable, heat-resistant surface and trim the four wicks equally before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-22.jpg"
      ]
    },
    {
      "id": "spooky-season-halloween-wax-melts-selection",
      "name": "Spooky Season Halloween Wax Melts Selection",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Get ready for a cozy, spooky night. The Spooky Season handmade Halloween wax melts selection brings natural soy wax ghosts and skulls to your wax warmer.",
      "price": "",
      "description": [
        "Celebrate October with a whimsical, beautifully eerie touch. The Spooky Season handmade Halloween wax melts selection comes in sleek, eco-friendly black pouches with gothic illustrations, in two themes: \"BOO!\" and \"HALLOWEEN\". Inside are pure white wax shapes, from little ghosts and grinning jack-o'-lantern pumpkins to mini geometric skulls, hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils. Perfect for a movie night, a Halloween party or as an autumn treat for a friend. Pop a shape into your ceramic wax warmer and light a natural tealight."
      ],
      "details": [],
      "images": [
        "images/gift-24.jpg"
      ]
    },
    {
      "id": "baroque-symphony-cream-wreath-candle",
      "name": "Baroque Symphony Cream Wreath Candle",
      "category": [
        "Centerpieces"
      ],
      "short": "Elegance in every detail. The Baroque Symphony Cream wreath candle features ornate vintage motifs on a beautiful ribbed cream vessel.",
      "price": "",
      "description": [
        "The Baroque Symphony Cream wreath candle is poured into a handmade vessel in a soft, monochromatic cream-beige tone. Its surface is a sculptural gallery of fine wax artistry, with symmetrical baroque rosettes, acanthus leaves and renaissance crests. Four premium cotton wicks make it a luxurious, modern alternative to a traditional Advent wreath or a statement piece of home decor for family gatherings. Hand-poured with 100% natural, eco-friendly wax. Place it on a stable, heat-resistant surface and trim the four wicks equally before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-23.jpg"
      ]
    },
    {
      "id": "winter-wonderland-advent-centerpiece",
      "name": "Winter Wonderland Advent Centerpiece",
      "category": [
        "Centerpieces"
      ],
      "season": "Winter",
      "short": "Bring the magic of winter indoors. The Winter Wonderland Advent centerpiece features intricate soy wax snowflakes on a minimalist handmade tray.",
      "price": "",
      "description": [
        "The Winter Wonderland Advent centerpiece, a handmade snowflake candle set, captures the serene, crisp essence of the first snowfall. Four detailed snowflake sculptural candles, each hand-poured with 100% natural, eco-friendly soy wax, rest on a minimalist chalk-white tray, every one adorned with a tiny golden star and fitted with a clean cotton wick. A striking holiday centerpiece for your dining table, mantle or coffee table, and a premium artisan gift for Christmas or hostesses. Place the tray on a stable surface and trim the wicks before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-25.jpg"
      ]
    },
    {
      "id": "festive-holly-and-snowflake-christmas-candle-gift-box",
      "name": "Festive Holly & Snowflake Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "The perfect artisan gift for the holidays. Discover the Festive Holly & Snowflake handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "Bring classic Christmas magic into your home with the Festive Holly & Snowflake handmade Christmas candle gift box, a premium alternative to mass-produced decorations. Nested in an eco-friendly kraft gift box are two wax creations: a gold-rimmed fluted tart candle decorated with a green holly wreath, red winter berries and miniature golden stars, and a freestanding white snowflake candle with a shiny gold ornament and a tiny holly leaf. Hand-poured using 100% natural, eco-friendly soy wax. Place the candles on a heat-resistant plate and trim the wicks."
      ],
      "details": [],
      "images": [
        "images/gift-26.jpg"
      ]
    },
    {
      "id": "winter-frost-snowflake-christmas-candle-gift-box",
      "name": "Winter Frost Snowflake Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Elegance inspired by winter frost. Discover the Winter Frost Snowflake handmade Christmas candle gift box, featuring a natural soy candle and artisan holder.",
      "price": "",
      "description": [
        "The Winter Frost Snowflake handmade Christmas candle gift box captures peaceful, snowy elegance, a sophisticated alternative to colorful holiday decor. Nestled in an eco-friendly kraft gift box, a fluted white candle decorated with a large central snowflake, a cluster of miniature snowflakes and a tiny golden star comes with a freestanding snowflake-shaped concrete holder in a matching chalk-white finish. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils. Trim the wick and place it on a heat-resistant surface before lighting."
      ],
      "details": [],
      "images": [
        "images/gift-27.jpg"
      ]
    },
    {
      "id": "guardian-angel-and-snowflake-christmas-candle-gift-box",
      "name": "Guardian Angel & Snowflake Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Share peace and comfort this holiday season. Discover the Guardian Angel & Snowflake handmade Christmas candle gift box, crafted from premium natural soy wax.",
      "price": "",
      "description": [
        "Share peace and comfort this holiday season with the Guardian Angel & Snowflake handmade Christmas candle gift box, an artisan alternative to mass-produced gifts. Presented in an eco-friendly kraft gift box, a fluted cream candle adorned with a pair of detailed white wax angel wings, a tiny golden heart and a soft pearl accent comes with a freestanding snowflake-shaped concrete holder in chalk-white. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils. Trim the wick and place the set on a heat-resistant surface."
      ],
      "details": [],
      "images": [
        "images/gift-28.jpg"
      ]
    },
    {
      "id": "festive-holly-and-personalized-christmas-candle-gift-box",
      "name": "Festive Holly & Personalized Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "The perfect personalized holiday gift. Discover the Festive Holly & Maya handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "Add a personal touch to Christmas with the Festive Holly & Personalized handmade Christmas candle gift box. Nested in an eco-friendly kraft gift box, two red fluted candles with hand-painted gold-leaf rims come decorated with a full winter holly wreath, red berries and a white bow, and with letter beads spelling a custom name (here: Maya). Hand-poured using 100% natural, eco-friendly soy wax. Place the candles on a heat-resistant surface and trim the wicks."
      ],
      "details": [],
      "images": [
        "images/gift-29.jpg"
      ]
    },
    {
      "id": "trio-of-christmas-trees-gift-box",
      "name": "Trio of Christmas Trees Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Bring modern festive elegance home. The Trio of christmas trees handmade sculptural Christmas candle gift box features natural soy pines in a premium kraft presentation.",
      "price": "",
      "description": [
        "The Trio of Christmas Trees handmade sculptural Christmas candle gift box captures the clean, serene essence of a snow-covered forest, a striking minimalist alternative to traditional bright holiday decorations. In an eco-friendly kraft gift box you will find three contemporary trees: a sweeping spiral abstract pine, a playful bubble-textured tree and a sharp origami-inspired faceted tree. Each is hand-poured in warm cream-white using 100% natural, eco-friendly wax, with a clean cotton wick and a tiny golden ball on top. Place them on a heat-resistant candle plate."
      ],
      "details": [],
      "images": [
        "images/gift-30.jpg"
      ]
    },
    {
      "id": "spooky-night-with-casper-halloween-jar-candle",
      "name": "Spooky Night With Casper Halloween Jar Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "Add a touch of playful mystery to your autumn evenings. The Spooky Night with Casper handmade Halloween jar candle features a cute soy wax ghost and a miniature bat.",
      "price": "",
      "description": [
        "Add a touch of playful mystery to your autumn evenings with the Spooky Night with Casper handmade Halloween jar candle. Poured into a minimalist, stone-grey round container, 100% natural, eco-friendly soy wax holds a detailed little ghost with hand-painted, metallic golden eyes, a black wax bat in full flight and tiny golden stars around a clean cotton wick. An eye-catching autumn statement piece for your coffee table or bookshelf, perfect for a Halloween movie night or as a premium artisan gift. Place it on a heat-resistant surface and trim the wick."
      ],
      "details": [],
      "images": [
        "images/gift-31.jpg"
      ]
    },
    {
      "id": "the-nutcracker-gift-box",
      "name": "The Nutcracker Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Bring classic holiday nostalgia home. Discover The Nutcracker handmade sculptural Christmas candle gift box, crafted from premium natural eco-wax.",
      "price": "",
      "description": [
        "Bring classic, nostalgic holiday elegance home with The Nutcracker handmade sculptural Christmas candle gift box, a premium centerpiece for your festive decor. In an eco-friendly kraft gift box stand two detailed Nutcracker soldier candles, hand-poured in a warm cream-white tone using 100% natural, eco-friendly wax. Their uniforms, boots and classic hats are finished with a clean cotton wick and a tiny golden bead on top. A minimalist holiday display for your coffee table or mantle, and a premium artisan gift for a classic Christmas lover. Place them on a heat-resistant candle dish, trim the wicks, and let their flickering warm light transform your space into a custom-crafted winter sanctuary."
      ],
      "details": [],
      "images": [
        "images/gift-32.jpg"
      ]
    },
    {
      "id": "gingerbread-holiday-spice-jar-candle",
      "name": "Gingerbread Holiday Spice Jar Candle",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "Fill your home with the scent of freshly baked holiday treats. Discover the POSIE Gingerbread handmade soy jar candle, crafted from 100% natural wax.",
      "price": "",
      "description": [
        "Fill your home with the nostalgic scent of freshly baked holiday treats. The Gingerbread Holiday Spice handmade soy jar candle comes in a premium amber glass jar with a sleek black lid that keeps the fragrance fresh. Its whimsical festive label shows gingerbread houses, stars and holiday sweets, with a red \"Merry Christmas\" emblem. Hand-poured in a 200 ml volume using 100% natural, eco-friendly soy wax for a clean, long-lasting burn. A cozy gift for teachers, hostesses or Christmas stockings. Trim the wick and place the jar on a heat-resistant surface."
      ],
      "details": [],
      "images": [
        "images/gift-33.jpg"
      ]
    },
    {
      "id": "holiday-magic-christmas-candle-gift-box",
      "name": "Holiday Magic Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "The ultimate artisan gift for the holidays. Discover the Holiday Magic handmade Christmas candle gift box, crafted from premium soy wax.",
      "price": "",
      "description": [
        "The Holiday Magic handmade Christmas candle gift box captures the traditional joy of a classic Christmas, with masterfully detailed wax artistry. Nestled in an eco-friendly kraft gift box, a fluted cream-white tart candle topped with a vibrant red flower bloom comes with two sculptural candles, an embossed Christmas tree and a minimalist reindeer figurine, wrapped in red-and-white baker's twine with golden accents. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils. Place the candles on a heat-resistant plate and trim the wicks."
      ],
      "details": [],
      "images": [
        "images/gift-34.jpg"
      ]
    },
    {
      "id": "angel-blessing-and-serenade-christmas-candle-gift-box",
      "name": "Angel Blessing & Serenade Christmas Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Send a message of peace and comfort. Discover the Angel Blessing & Serenade handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "Send a message of peace and comfort with the Angel Blessing & Serenade handmade Christmas candle gift box, an artisan alternative to mass-produced holiday decor. Presented in an eco-friendly kraft gift box, a fluted cream candle with a pair of detailed white wax angel wings, a tiny golden heart and a soft pearl accent comes with a freestanding candle shaped like a graceful angel silhouette with an open cutout heart and a snowflake on her gown. Hand-poured using 100% natural, eco-friendly soy wax. Trim the wicks and place the set on a heat-resistant surface."
      ],
      "details": [],
      "images": [
        "images/gift-35.jpg"
      ]
    },
    {
      "id": "folklove-gift-set",
      "name": "Folklove Gift Set",
      "category": [
        "Gift boxes",
        "Centerpieces"
      ],
      "short": "A handmade three-piece Hungarian folk art gift set: a four-wick soy wax centerpiece candle, a decor jar candle and a baked apple scented tulip wardrobe freshener.",
      "price": "",
      "description": [
        "Celebrate Hungarian folk art with the Folklove handmade three-piece gift set, presented in a kraft gift box. The centerpiece is a round, four-wick candle made of 100% natural soy wax on a ceramic powder base, decorated with traditional folk motifs and tiny golden hearts that you remove before lighting. With it comes a decor jar candle (11.5 cm wide, 4 cm tall) with a folk pattern screen-printed on top, and a tulip-patterned wardrobe freshener with a baked apple scent, made from soy wax and premium fragrance oil, with a 20 cm ribbon for hanging. With its tulips, hearts and little birds, it is a heartwarming gift for someone special or a folk-style accent for your home decor. Use a candle plate and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-36.jpg"
      ]
    },
    {
      "id": "gildglow-mandala-tealight-holder",
      "name": "Gildglow Mandala Tealight Holder",
      "category": [
        "Small things"
      ],
      "short": "The Gildglow handmade mandala tealight holder is a small grey piece with a gold-trimmed center.",
      "price": "",
      "description": [
        "Create a warm, glowing corner with the Gildglow handmade mandala tealight holder. This small grey holder is shaped like a layered mandala flower, with a gold-trimmed center that holds your tealight, and its fine pattern throws a soft, patterned light around the room. It is a lovely piece of home decor for a shelf, a bedside table or a festive dinner table, and a thoughtful artisan gift for anyone who loves cozy, calming evenings. Place it on a heat-resistant surface and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-37.jpg"
      ]
    },
    {
      "id": "mandala-glow-tealight-holder",
      "name": "Mandala Glow Tealight Holder",
      "category": [
        "Small things"
      ],
      "short": "The Mandala Glow handmade tealight holder is a small grey mandala flower with decorative glass details.",
      "price": "",
      "description": [
        "Bring a gentle glow into your home with the Mandala Glow handmade tealight holder. Shaped like a layered mandala flower in soft grey, it is decorated with sparkling decorative glass that catches the light of your tealight beautifully. It makes a calm, elegant accent for a shelf, a windowsill or a cozy evening table, and a thoughtful artisan gift for anyone who enjoys a peaceful atmosphere. Pair it with a natural tealight. Always place it on a heat-resistant surface and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-38.jpg"
      ]
    },
    {
      "id": "boo-bubble",
      "name": "Boo Bubble",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Boo Bubble handmade Halloween candle: a black round bowl with skulls, mini pumpkins and golden BOO letters.",
      "price": "",
      "description": [
        "Add a playful touch to your spooky season with the Boo Bubble handmade Halloween candle. Set in a dark, round bowl, it is decorated with two little skulls, bright mini pumpkins, a sprinkle of gold glitter and golden BOO letters. It is a charming piece of seasonal home decor for your coffee table, shelf or Halloween party table, and a fun artisan gift for anyone who loves autumn and everything spooky. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-39.jpg"
      ]
    },
    {
      "id": "boo-basket",
      "name": "Boo Basket",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Boo Basket handmade Halloween candle: a grey scalloped bowl with skulls, mini pumpkins and golden BOO letters.",
      "price": "",
      "description": [
        "Meet the Boo Basket, a handmade Halloween candle in a grey bowl with a scalloped edge. Dark wax holds a pair of little skulls, three orange mini pumpkins, a dusting of gold glitter and golden BOO letters, for a spooky yet stylish look. Its compact size makes it a perfect seasonal accent for a bookshelf, a desk or a bedside table, and a fun artisan gift for the spooky season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-40.jpg"
      ]
    },
    {
      "id": "mandala-dream-coaster",
      "name": "Mandala Dream Coaster",
      "category": [
        "Small things"
      ],
      "short": "The Mandala Dream handmade coaster is a detailed mandala-shaped piece for candles, decor or your favorite mug.",
      "price": "",
      "description": [
        "The Mandala Dream coaster is a handmade, mandala-shaped piece that works as beautifully as it looks. Its fine, relief pattern adds a calm, artistic accent to your coffee table, desk or shelf, while the flat center holds a candle, a small decoration or your favorite mug. It is a practical piece of home decor and a thoughtful artisan gift for anyone who enjoys a cozy, tidy and stylish home. It also pairs nicely with a mandala tealight holder from the Posie collection for a complete, relaxing corner."
      ],
      "details": [],
      "images": [
        "images/gift-41.jpg"
      ]
    },
    {
      "id": "fur-baby-candle",
      "name": "Fur Baby Candle",
      "category": [
        "Small things"
      ],
      "short": "The Fur Baby handmade soy candle: a paw-shaped candle with a personalized name in golden letters.",
      "price": "",
      "description": [
        "Celebrate your four-legged family member with the Fur Baby handmade soy candle. Poured from natural soy wax in a white bowl, it features a sweet paw-shaped candle with a name spelled out in small golden letters, which makes it a one-of-a-kind artisan gift for pet lovers, a lovely keepsake or a thoughtful way to remember a beloved companion. It is also a heartwarming piece of home decor for a shelf or a side table. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-42.jpg"
      ]
    },
    {
      "id": "bubble-coaster",
      "name": "Bubble Coaster",
      "category": [
        "Small things"
      ],
      "short": "The Bubble Coaster is a handmade ring-shaped tray of soft bubbles with golden accents, a stylish piece for small things.",
      "price": "",
      "description": [
        "The Bubble Coaster is a handmade, ring-shaped piece made of soft, rounded bubbles in light grey, with two bubbles in shimmering gold. Use it as a trinket tray for rings and earrings, as a coaster, or as a stylish base for a small candle on your vanity, coffee table or shelf. Its modern, sculptural look is a lovely piece of home decor and a thoughtful artisan gift for anyone who loves minimalist details."
      ],
      "details": [],
      "images": [
        "images/gift-43.jpg"
      ]
    },
    {
      "id": "gilded-lotus-candle",
      "name": "Gilded Lotus Candle",
      "category": [
        "Small things"
      ],
      "short": "The Gilded Lotus handmade soy wax candle: a white lotus flower in a ribbed jar with a gold rim.",
      "price": "",
      "description": [
        "The Gilded Lotus candle brings calm and elegance to any room. Handmade from soy wax, it features a detailed white lotus flower, a symbol of serenity and renewal, in a ribbed jar with a hand-finished gold rim. It is a beautiful piece of home decor for a shelf, a bedside table or a quiet meditation corner, and a thoughtful artisan gift for someone who enjoys mindful, relaxing evenings. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-44.jpg"
      ]
    },
    {
      "id": "pink-daisy-candle",
      "name": "Pink Daisy Candle",
      "category": [
        "Small things"
      ],
      "short": "The Pink Daisy handmade soy wax candle: a soft pink daisy in a white jar with a gold rim.",
      "price": "",
      "description": [
        "Bring a touch of spring into your home with the Pink Daisy handmade soy wax candle. A delicate pink daisy sits in a white ribbed jar with a gold rim, making it a lovely piece of home decor for a vanity, a windowsill or a coffee table. It is carefully crafted by hand from soy wax, and makes a sweet artisan gift for birthdays, Mother's Day or just because. Light it for a relaxed evening or simply enjoy it as a pretty decoration. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-45.jpg"
      ]
    },
    {
      "id": "botanical-wax-melts-sachets",
      "name": "Botanical Wax Melts / Sachets",
      "category": [
        "Small things"
      ],
      "short": "Handmade botanical soy wax sachets decorated with white wax flowers and black satin ribbons.",
      "price": "",
      "description": [
        "These Botanical soy wax sachets are handmade from 100% natural soy wax and decorated with white blossoms, roses and hibiscus-style flowers, then finished with black satin ribbons so they can be hung up. Hang them in a wardrobe, a drawer, a car or on a door handle for a soft, fresh scent, or place them in a gift box as a charming extra. They are a lovely piece of home decor and a thoughtful artisan gift for friends, guests or wedding favors. They can also be used as wax melts in a ceramic wax warmer. Keep them away from open flames."
      ],
      "details": [],
      "images": [
        "images/gift-46.jpg"
      ]
    },
    {
      "id": "white-daisy-candle",
      "name": "White Daisy Candle",
      "category": [
        "Small things"
      ],
      "short": "The White Daisy handmade soy wax candle: a white daisy in a white jar with a gold rim.",
      "price": "",
      "description": [
        "The White Daisy handmade soy wax candle brings a fresh, light touch of nature indoors. A detailed white daisy sits in a white ribbed jar with a gold rim, making it a lovely piece of home decor for a vanity, a windowsill or a coffee table. It is carefully crafted by hand from soy wax, and makes a sweet artisan gift for birthdays, Mother's Day or just because. Light it for a relaxed evening or simply enjoy it as a pretty decoration. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-47.jpg"
      ]
    },
    {
      "id": "pumpkin-patch-candle-bowl",
      "name": "Pumpkin Patch Candle Bowl",
      "category": [
        "Centerpieces"
      ],
      "season": "Autumn",
      "short": "The Pumpkin Patch handmade candle bowl: a rectangular autumn candle with mini pumpkins, leaves and gold stars.",
      "price": "",
      "description": [
        "Welcome the harvest season with the Pumpkin Patch handmade candle bowl. This long, rectangular candle in a bright orange tray is richly decorated with mini pumpkins, green leaves, berries and tiny gold stars, and it has several wicks for a generous, cozy glow. It is a premium seasonal piece, perfect as an autumn centerpiece for your dining table, coffee table or a Halloween and Thanksgiving gathering, and a memorable artisan gift for anyone who loves autumn decor. Place it on a heat-resistant plate, trim the wicks before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-48.jpg"
      ]
    },
    {
      "id": "white-blossom-candle-bowl",
      "name": "White Blossom Candle Bowl",
      "category": [
        "Small things"
      ],
      "short": "The White Blossom handmade candle bowl: white daisies, roses and hibiscus flowers with tiny golden hearts.",
      "price": "",
      "description": [
        "The White Blossom candle bowl is a luxurious handmade piece. In a soft grey bowl with a gold-touched edge sit carefully sculpted white daisies, roses and hibiscus-style flowers among tiny golden hearts. The multi-wick design gives it a generous glow and an elegant, premium look, making it a beautiful centerpiece for a dining table, a vanity or a special occasion. It is also a lovely artisan gift for weddings, Mother's Day and birthdays. Place it on a heat-resistant plate, trim the wicks before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-49.jpg"
      ]
    },
    {
      "id": "pink-blossom-candle-bowl",
      "name": "Pink Blossom Candle Bowl",
      "category": [
        "Small things"
      ],
      "short": "The Pink Blossom handmade candle bowl: soft pink daisies, roses and peonies with tiny golden hearts.",
      "price": "",
      "description": [
        "The Pink Blossom candle bowl is a luxurious handmade piece. In a ribbed cream bowl sit carefully sculpted blush-pink daisies, roses and peonies among tiny golden hearts. The multi-wick design gives it a generous glow and an elegant, premium look, making it a beautiful centerpiece for a dining table, a vanity or a special occasion. It is also a lovely artisan gift for weddings, Mother's Day and birthdays. Place it on a heat-resistant plate, trim the wicks before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-50.jpg"
      ]
    },
    {
      "id": "gilded-bloom-candle",
      "name": "Gilded Bloom Candle",
      "category": [
        "Small things"
      ],
      "short": "The Gilded Bloom handmade candle: white flowers and golden hearts in a jar with a gold scalloped rim.",
      "price": "",
      "description": [
        "The Gilded Bloom candle is a clean, luxurious composition with a soft, modern aesthetic, in the spirit of the popular coquette and clean girl style. Handmade with care, it holds white roses, daisies and blossoms with tiny golden hearts inside a jar with a gold scalloped rim. It is a refined piece of home decor for a vanity, a bedside table or a styled shelf, and an elegant artisan gift for someone who loves beautiful details. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-51.jpg"
      ]
    },
    {
      "id": "crystal-geode-candle",
      "name": "Crystal Geode Candle",
      "category": [
        "Small things"
      ],
      "short": "The Crystal Geode handmade candle: a sparkling crystal inlay on a golden ribbed jar, topped with white flowers.",
      "price": "",
      "description": [
        "Inspired by the beauty of a natural geode, the Crystal Geode candle is a striking handmade piece. The side of the golden ribbed jar carries a sparkling crystal-like inlay, and white flowers and tiny golden hearts decorate the top. It is an eye-catching piece of home decor for a coffee table, a shelf or a vanity, and a memorable artisan gift for anyone who loves glamorous details. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-52.jpg"
      ]
    },
    {
      "id": "mothers-day-wax-melt-gift-box",
      "name": "Mother’s Day Wax Melt Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Spring",
      "short": "The Mother's Day handmade gift box: a textured wax heart, a small golden piece and an angel-wing sachet.",
      "price": "",
      "description": [
        "Say thank you with the Mother's Day handmade gift box, a fragrant present put together with love. In a kraft box with soft paper filling, it holds a textured, heart-shaped wax piece, a small round piece with golden flakes and an angel-wing soy wax sachet tied with a black ribbon. It is an easy way to treat the special woman in your life with a little moment of relaxation at home, and a thoughtful artisan gift for Mother's Day, a birthday or any time you want to say thank you. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-53.jpg"
      ]
    },
    {
      "id": "to-the-best-mom-candle",
      "name": "To the Best Mom Candle",
      "category": [
        "Small things"
      ],
      "season": "Spring",
      "short": "The To the Best Mom handmade candle: pink wax flowers, golden hearts and a pearl-letter MOM on a gold-rimmed jar.",
      "price": "",
      "description": [
        "Tell her how much she means with the To the Best Mom handmade candle. In a ribbed jar with a gold rim, delicate pink wax flowers and tiny golden hearts surround the word MOM in small pearl letters. It is a touching piece of home decor and a heartfelt artisan gift for Mother's Day, a birthday or a simple thank you. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-54.jpg"
      ]
    },
    {
      "id": "personalized-anya-candle",
      "name": "Personalized „ANYA” Candle",
      "category": [
        "Small things"
      ],
      "season": "Spring",
      "short": "The Personalized ANYA handmade candle: pink wax flowers and golden hearts with a name spelled in small letters.",
      "price": "",
      "description": [
        "Make her smile with the Personalized ANYA handmade candle. In a ribbed jar with a gold rim, delicate pink wax flowers and tiny golden hearts surround the word ANYA, spelled out in small letters. It is a touching piece of home decor and a heartfelt artisan gift for Mother's Day, a birthday or a simple thank you. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-55.jpg"
      ]
    },
    {
      "id": "blush-rose-wedding-favors",
      "name": "Blush Rose Wedding Favors",
      "category": [
        "Wedding",
        "Small things"
      ],
      "short": "The Blush Rose Wedding Favors are handmade heart-shaped pink rose candles wrapped in tulle with a golden ribbon.",
      "price": "",
      "description": [
        "Delight your guests with the Blush Rose wedding favors, handmade heart-shaped candles shaped like pink roses and wrapped in soft tulle with a golden satin ribbon. Each little candle is a romantic keepsake that can be placed at every seat, handed out at the ceremony or added to a welcome gift. They also make charming artisan gifts for bridal showers, engagements and anniversaries. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-56.jpg"
      ]
    },
    {
      "id": "angel-wings-wax-sachet",
      "name": "Angel Wings Wax Sachet",
      "category": [
        "Small things"
      ],
      "short": "The Angel Wings handmade soy wax sachet: a feather-detailed hanging piece with a black satin ribbon.",
      "price": "",
      "description": [
        "The Angel Wings soy wax sachet is a handmade hanging air freshener made of 100% natural soy wax with a delicate, feather-detailed wing shape and a black satin bow. Hang it in a wardrobe, a drawer, a guest room or the car to keep the space fresh and softly scented, or tuck it into a gift box as a thoughtful extra. Its pale, sculptural look makes it a quiet piece of home decor too, and a meaningful artisan gift for someone you want to wish comfort and protection. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-57.jpg"
      ]
    },
    {
      "id": "victorian-elegance-wax-sachet",
      "name": "Victorian Elegance Wax Sachet",
      "category": [
        "Small things"
      ],
      "short": "The Victorian Elegance handmade soy wax sachet: a hanging tag with a vintage cameo portrait relief and black ribbon.",
      "price": "",
      "description": [
        "The Victorian Elegance soy wax sachet is a handmade hanging air freshener made of 100% natural soy wax shaped like an elegant tag. A vintage cameo portrait of a lady, framed by a delicate lace-like border, is sculpted in relief on its face, and a black satin ribbon completes the romantic, old-world look. Hang it in a wardrobe, a drawer or the car for a softly scented space, or give it as a refined artisan gift for lovers of vintage home decor. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-58.jpg"
      ]
    },
    {
      "id": "hamsa-hand-trinket-dish",
      "name": "Hamsa Hand Trinket Dish",
      "category": [
        "Small things"
      ],
      "short": "The Hamsa Hand handmade trinket dish: a detailed relief of an evil eye, mandala and paisley patterns with golden accents.",
      "price": "",
      "description": [
        "The Hamsa Hand trinket dish is a handmade piece shaped like the protective hamsa hand. Its surface carries an intricate relief of an evil eye, mandala and paisley patterns, with tiny golden stars and dots that catch the light. Use it for rings, earrings and small jewelry on your vanity or bedside table, or let it decorate a shelf or a meditation corner next to a candle. It is a meaningful piece of home decor and a thoughtful artisan gift for anyone who loves spiritual symbols."
      ],
      "details": [],
      "images": [
        "images/gift-59.jpg"
      ]
    },
    {
      "id": "pure-senses-hamsa-trinket-tray",
      "name": "Pure Senses Hamsa Trinket Tray",
      "category": [
        "Small things"
      ],
      "short": "The Pure Senses Hamsa trinket tray: a pearly cream tray with an evil eye, mandala and paisley relief.",
      "price": "",
      "description": [
        "The Pure Senses Hamsa trinket tray is a handmade piece in a soft, pearly cream tone, shaped like the protective hamsa hand. A detailed relief of an evil eye surrounded by mandala petals and flowing paisley patterns covers the surface. Use it for rings, earrings and small jewelry, or place it on a shelf or bedside table beside a candle for a calm, mindful corner. It is a meaningful piece of home decor and a thoughtful artisan gift for anyone who loves spiritual symbols."
      ],
      "details": [],
      "images": [
        "images/gift-60.jpg"
      ]
    },
    {
      "id": "songbird-wax-sachet",
      "name": "Songbird Wax Sachet",
      "category": [
        "Small things"
      ],
      "short": "The Songbird handmade soy wax sachet: a hanging oval with a sculpted bird, flower and leaves and a red satin ribbon.",
      "price": "",
      "description": [
        "The Songbird soy wax sachet is a handmade hanging air freshener made of 100% natural soy wax in a soft oval shape. A sculpted songbird, a little daisy-like flower and delicate leaves are raised on its surface, and a red satin ribbon makes it ready to hang. Place it in a wardrobe, a drawer, a guest room or the car for a softly scented space, or add it to a gift box as a charming extra. It is a sweet piece of home decor and a thoughtful artisan gift for friends and family. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-61.jpg"
      ]
    },
    {
      "id": "ivory-elegance-column-collection",
      "name": "Ivory Elegance Column Collection",
      "category": [
        "Gift boxes"
      ],
      "short": "The Ivory Elegance Column Collection: three sculptural ivory column candles in a kraft gift box.",
      "price": "",
      "description": [
        "The Ivory Elegance Column Collection is a handmade set of three sculptural ivory candles shaped like ornate columns. Each one has its own relief, from carved ridges and floral motifs to flowing, drapery-like details, and they are presented in a kraft gift box on black paper filling. The candles are beautiful decor even before lighting, and look elegant grouped on a mantel, console table or dining table. A refined artisan gift for housewarmings, weddings and the holiday season. Place it on a heat-resistant plate, trim the wicks before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-62.jpg"
      ]
    },
    {
      "id": "pure-harmony-spiritual-box",
      "name": "Pure Harmony Spiritual Box",
      "category": [
        "Gift boxes"
      ],
      "short": "The Pure Harmony Spiritual Box: a hamsa trinket dish, a lotus candle and a small sculpted figure in a kraft gift box.",
      "price": "",
      "description": [
        "The Pure Harmony Spiritual Box is a handmade gift set in a kraft box with natural paper filling. It holds a hamsa trinket dish with a detailed evil eye relief, a white lotus-shaped candle and a small sculpted wax figure, all in calming, neutral tones. Use the dish for rings and small jewelry and light the candle for a quiet moment of meditation or rest. It is a thoughtful artisan gift for someone who enjoys mindful rituals and a peaceful home. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-63.jpg"
      ]
    },
    {
      "id": "the-queens-gambit-luxury-box",
      "name": "The Queen’s Gambit Luxury Box",
      "category": [
        "Gift boxes"
      ],
      "short": "The Queen's Gambit Luxury Box: a chess knight candle, a column candle and a cameo soy wax sachet in a kraft gift box.",
      "price": "",
      "description": [
        "The Queen's Gambit Luxury Box is a handmade gift set for lovers of chess and elegant home decor. In a kraft gift box on black paper filling rest a sculpted chess knight candle, an ornate ivory column candle and a hanging soy wax sachet with a vintage cameo portrait. The ivory pieces look striking on a desk, a bookshelf or a coffee table, even unlit. A memorable artisan gift for the strategist in your life. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-64.jpg"
      ]
    },
    {
      "id": "gilded-elegance-artisan-soaps",
      "name": "Gilded Elegance Artisan Soaps",
      "category": [
        "Wedding",
        "Small things"
      ],
      "short": "Gilded Elegance handmade artisan soaps with a mandala lace relief and delicate gold leaf.",
      "price": "",
      "description": [
        "The Gilded Elegance artisan soaps are handmade, envelope-shaped soaps in a warm ivory tone. One corner of each carries a delicate mandala lace relief, and flecks of gold leaf are scattered across the surface. They look beautiful stacked on a small tray in a bathroom or guest toilet, and make an elegant artisan gift, a hostess gift or a charming wedding favor."
      ],
      "details": [],
      "images": [
        "images/gift-65.jpg"
      ]
    },
    {
      "id": "infused-lavender-artisan-soaps",
      "name": "Infused Lavender Artisan Soaps",
      "category": [
        "Wedding",
        "Small things"
      ],
      "short": "Infused Lavender handmade artisan soaps in heart and round shapes, scattered with lavender buds.",
      "price": "",
      "description": [
        "The Infused Lavender artisan soaps are handmade soaps in heart and round shapes with a soft lilac tone, scattered with lavender buds. They look lovely piled in a small vintage-style dish by the sink, and bring a calm, spa-like feeling to your bathroom. A thoughtful artisan gift, a charming guest soap or a sweet wedding favor."
      ],
      "details": [],
      "images": [
        "images/gift-66.jpg"
      ]
    },
    {
      "id": "lavender-lotus-candle-gift-box",
      "name": "Lavender Lotus Candle Gift Box",
      "category": [
        "Gift boxes"
      ],
      "short": "The Lavender Lotus Candle Gift Box: a lilac flower candle bowl and a lilac mandala tealight holder in a kraft box.",
      "price": "",
      "description": [
        "The Lavender Lotus Candle Gift Box is a handmade gift set in a kraft box with crinkle paper filling. It holds a lilac, ribbed candle bowl with a gold rim, decorated with sculpted lilac flowers and tiny golden hearts, and a matching lilac mandala tealight holder with a golden ring. Light both for a soothing evening, or give the set as an artisan gift for birthdays, thank-yous and cozy occasions. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-67.jpg"
      ]
    },
    {
      "id": "sweet-daisy-and-mandala-gift-box",
      "name": "Sweet Daisy & Mandala Gift Box",
      "category": [
        "Gift boxes"
      ],
      "short": "The Sweet Daisy & Mandala Gift Box: a white daisy candle and a grey mandala tealight holder in a kraft box.",
      "price": "",
      "description": [
        "The Sweet Daisy & Mandala Gift Box is a handmade gift set in a kraft box with crinkle paper filling. It holds a white daisy candle in a ribbed jar with a gold rim and a grey mandala tealight holder with a golden ring. The set is calm and elegant, ready to give for birthdays, thank-yous or a cozy evening in, and makes a lovely piece of home decor on a shelf or coffee table. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-68.jpg"
      ]
    },
    {
      "id": "songbird-and-blossom-scented-duo",
      "name": "Songbird & Blossom Scented Duo",
      "category": [
        "Wedding",
        "Small things"
      ],
      "short": "The Songbird & Blossom Scented Duo: two handmade hanging soy wax sachets with a songbird and a leafy blossom.",
      "price": "",
      "description": [
        "The Songbird & Blossom Scented Duo is a handmade pair of hanging soy wax sachets, one with a sculpted songbird and a flower, the other with leaves and a daisy, each tied with a green satin ribbon and shown on a vintage-style tray. Hang them in a wardrobe, a drawer or a guest room for a fresh, softly scented space. They make a lovely artisan gift or a charming wedding favor. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-69.jpg"
      ]
    },
    {
      "id": "fields-of-lavender-premium-gift-basket",
      "name": "Fields of Lavender Premium Gift Basket",
      "category": [
        "Gift boxes"
      ],
      "short": "The Fields of Lavender Premium Gift Basket: a lavender jar candle, a lilac candle bowl, a tealight holder and wax melts.",
      "price": "",
      "description": [
        "The Fields of Lavender Premium Gift Basket is a generous, handmade gift set. It holds an amber jar lavender candle with a botanical label, a lilac candle bowl with sculpted flowers, tiny golden hearts and lavender buds, a lilac mandala tealight holder and a small window box of wax melts. A calming artisan gift for birthdays, thank-yous and cozy evenings, with everything needed for a relaxing lavender moment. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-70.jpg"
      ]
    },
    {
      "id": "the-honeybee-meadow-gift-set",
      "name": "The Honeybee Meadow Gift Set",
      "category": [
        "Gift boxes"
      ],
      "short": "The Honeybee Meadow Gift Set: a round candle with a honeybee on its lid and two hanging soy wax sachets.",
      "price": "",
      "description": [
        "The Honeybee Meadow Gift Set is a handmade gift set in a kraft box. It holds a round candle with a delicate honeybee sculpted on its lid, and two hanging soy wax sachets, one with leaves and a daisy and the other with a songbird, tied with green satin ribbons. A sweet artisan gift for nature lovers and anyone who enjoys a gentle, fresh home. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-71.jpg"
      ]
    },
    {
      "id": "pumpkin-and-tulip-wax-sachet-duo",
      "name": "Pumpkin & Tulip Wax Sachet Duo",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The Pumpkin & Tulip Wax Sachet Duo: two handmade hanging soy wax sachets with a tulip and a pumpkin patch.",
      "price": "",
      "description": [
        "The Pumpkin & Tulip Wax Sachet Duo is a pair of handmade hanging soy wax sachets in a kraft gift box. One has a sculpted tulip with a tiny golden heart, the other a white pumpkin with red mini pumpkins, and both are tied with burgundy satin ribbons. Hang them in a wardrobe or drawer for a softly scented space this autumn, or give them as a cozy artisan gift. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-72.jpg"
      ]
    },
    {
      "id": "the-grand-autumn-splendor-gift-box",
      "name": "The Grand Autumn Splendor Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The Grand Autumn Splendor Gift Box: a wreath candle, a candle bowl and a soy wax sachet with white and red pumpkins.",
      "price": "",
      "description": [
        "The Grand Autumn Splendor Gift Box is a generous handmade gift set in a kraft box. It holds a ring-shaped wreath candle, a round candle bowl and a hanging soy wax sachet, all decorated with white pumpkins, red mini pumpkins, leaves and tiny golden stars. It is a beautiful autumn centerpiece for a table or mantel, and a memorable artisan gift for the harvest season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-73.jpg"
      ]
    },
    {
      "id": "maple-leaf-wax-sachet",
      "name": "Maple Leaf Wax Sachet",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Maple Leaf handmade soy wax sachet: a hanging maple leaf with a tiny golden heart and a burgundy ribbon.",
      "price": "",
      "description": [
        "The Maple Leaf soy wax sachet is a handmade hanging air freshener made of 100% natural soy wax shaped like a crisp maple leaf, finished with a tiny golden heart and a burgundy satin ribbon. Hang it in a wardrobe, a drawer or the car for a softly scented space, or display it on a tray as a piece of seasonal home decor. A charming little artisan gift for autumn. Hang it with its ribbon in a wardrobe, drawer or car, or lay it in a gift box, and keep it away from heat."
      ],
      "details": [],
      "images": [
        "images/gift-74.jpg"
      ]
    },
    {
      "id": "cozy-pumpkin-harvest-candle-box",
      "name": "Cozy Pumpkin Harvest Candle Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The Cozy Pumpkin Harvest Candle Box: a grey stone-style candle with pumpkins and a white lidded pumpkin candle.",
      "price": "",
      "description": [
        "The Cozy Pumpkin Harvest Candle Box is a handmade gift set in a kraft box. It holds a grey, stone-style candle bowl with white and orange mini pumpkins and a white lidded pumpkin candle with a golden stem. Both look wonderful as autumn decor on a coffee table or mantel, and the set makes a cozy artisan gift for the harvest season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-75.jpg"
      ]
    },
    {
      "id": "gothic-harvest-candle",
      "name": "Gothic Harvest Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Gothic Harvest handmade candle: an orange ribbed jar with a skull, a white pumpkin and mini pumpkins.",
      "price": "",
      "description": [
        "The Gothic Harvest candle is a handmade piece in an orange, ribbed jar with a gold rim. A tiny skull, a white pumpkin, red mini pumpkins and golden stars sit on the wax, mixing the spooky and the cozy. It is a striking piece of Halloween and autumn home decor for a mantel or coffee table, and a fun artisan gift for anyone who loves the spooky season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-76.jpg"
      ]
    },
    {
      "id": "harvest-joy-halloween-candle",
      "name": "Harvest Joy Halloween Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Harvest Joy handmade Halloween candle: a yellow ribbed jar with pumpkins, a jack-o-lantern and golden stars.",
      "price": "",
      "description": [
        "The Harvest Joy Halloween candle is a handmade piece in a yellow, ribbed jar with a gold rim. A white pumpkin, a little jack-o-lantern face, red mini pumpkins and golden stars decorate the wax, for a cheerful and cozy autumn look. It is a lovely piece of home decor for a coffee table or mantel, and a happy artisan gift for the Halloween season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-77.jpg"
      ]
    },
    {
      "id": "golden-harvest-songbird-bowl",
      "name": "Golden Harvest Songbird Bowl",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Golden Harvest Songbird Bowl: a handmade candle bowl with a songbird, golden leaves and mini pumpkins.",
      "price": "",
      "description": [
        "The Golden Harvest Songbird Bowl is a handmade candle in a yellow bowl with a gold rim. A sculpted songbird rests among golden leaves, a white pumpkin, red mini pumpkins and tiny golden stars, giving it a warm, luxurious autumn look. It is a beautiful centerpiece for a dining table or mantel, and a memorable artisan gift for the harvest season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-78.jpg"
      ]
    },
    {
      "id": "harvest-joy-halloween-bowl",
      "name": "Harvest Joy Halloween Bowl",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Harvest Joy Halloween Bowl: a handmade yellow candle bowl with a white pumpkin, leaves and mini pumpkins.",
      "price": "",
      "description": [
        "The Harvest Joy Halloween Bowl is a handmade candle in a yellow, scalloped bowl with a gold rim. A white pumpkin, delicate leaves, red mini pumpkins and golden stars decorate the wax, for a bright and cozy autumn look. It is a cheerful piece of seasonal home decor for a coffee table or mantel, and a sweet artisan gift for the Halloween season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-79.jpg"
      ]
    },
    {
      "id": "gothic-harvest-bowl",
      "name": "Gothic Harvest Bowl",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Gothic Harvest Bowl: a handmade orange candle bowl with a skull, a white pumpkin and mini pumpkins.",
      "price": "",
      "description": [
        "The Gothic Harvest Bowl is a handmade candle in an orange, scalloped bowl with a gold rim. A tiny skull, a white pumpkin, delicate leaves, red mini pumpkins and golden stars decorate the wax for a spooky yet elegant look. It is a striking piece of Halloween home decor for a coffee table or mantel, and a fun artisan gift for the spooky season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-80.jpg"
      ]
    },
    {
      "id": "harvest-joy-gift-set",
      "name": "Harvest Joy Gift Set",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The Harvest Joy Gift Set: two handmade yellow autumn candles in a kraft gift box.",
      "price": "",
      "description": [
        "The Harvest Joy Gift Set is a handmade pair of yellow candles in a kraft gift box on brown paper filling, one in a ribbed jar and one in a scalloped bowl. White and red pumpkins, a little jack-o-lantern and golden stars decorate the wax, for a cheerful and cozy Halloween and autumn look. A lovely artisan gift for the harvest season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-81.jpg"
      ]
    },
    {
      "id": "gothic-harvest-gift-box",
      "name": "Gothic Harvest Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Autumn",
      "short": "The Gothic Harvest Gift Box: two handmade orange Halloween candles in a kraft gift box.",
      "price": "",
      "description": [
        "The Gothic Harvest Gift Box is a handmade pair of orange candles in a kraft gift box on brown paper filling, one in a ribbed jar and one in a scalloped bowl. Skulls, white and red pumpkins and golden stars decorate the wax for a spooky yet elegant look. A striking artisan gift for Halloween and the autumn season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-82.jpg"
      ]
    },
    {
      "id": "lilac-bloom-custom-gift-set",
      "name": "Lilac Bloom Custom Gift Set",
      "category": [
        "Gift boxes"
      ],
      "short": "The Lilac Bloom Custom Gift Set: a lilac flower candle bowl with a personalized name and two white rose soy wax sachets.",
      "price": "",
      "description": [
        "The Lilac Bloom Custom Gift Set is a handmade gift set that can be personalized with a name. It holds a round candle bowl covered in sculpted lilac flowers and tiny golden beads, with a name spelled in small letters, and two hanging soy wax sachets with white roses and black ribbons. A heartfelt artisan gift for birthdays, weddings and special occasions. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-83.jpg"
      ]
    },
    {
      "id": "pastel-romance-premium-candle-set",
      "name": "Pastel Romance Premium Candle Set",
      "category": [
        "Gift boxes"
      ],
      "short": "The Pastel Romance Premium Candle Set: a pink hanging soy wax sachet and a pink candle bowl on a vintage-style tray.",
      "price": "",
      "description": [
        "The Pastel Romance Premium Candle Set is a handmade set of a pink hanging soy wax sachet with a heart, flowers and a grey ribbon, and a pink candle bowl with sculpted leaves and golden stars in a grey bowl, shown on a vintage-style grey tray. Soft, romantic and elegant, it is a lovely piece of home decor and an artisan gift for birthdays and special occasions. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-84.jpg"
      ]
    },
    {
      "id": "pure-white-autumn-luxury-candle",
      "name": "Pure White Autumn Luxury Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The Pure White Autumn Luxury Candle: a handmade white pumpkin-shaped candle with a lid and a golden stem.",
      "price": "",
      "description": [
        "The Pure White Autumn Luxury Candle is a handmade, white pumpkin-shaped candle with a lid topped with a golden stem. A small, flower-like wax topper sits in the middle of the candle, for a clean, elegant autumn look. It is a luxurious piece of seasonal home decor for a coffee table or mantel, and an artisan gift for anyone who loves a refined autumn. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-85.jpg"
      ]
    },
    {
      "id": "boo-spooky-amber-jar-candle",
      "name": "„BOO!” Spooky Amber Jar Candle",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The BOO! Spooky Amber Jar Candle: a handmade soy wax candle in an amber jar with a ghost and graveyard label.",
      "price": "",
      "description": [
        "The BOO! Spooky Amber Jar Candle is a handmade soy wax candle in an amber glass jar with a black lid. The jar is wrapped in a playful label with friendly ghosts and a spooky graveyard skyline. It is a fun piece of Halloween home decor for a desk, shelf or party table, and an easy artisan gift for the spooky season, great together with the BOO! Mini Skull Wax Melts. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-86.jpg"
      ]
    },
    {
      "id": "boo-mini-skull-wax-melts",
      "name": "„BOO!” Mini Skull Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Autumn",
      "short": "The BOO! Mini Skull Wax Melts: handmade white skull-shaped wax melts in a black pouch with a ghost label.",
      "price": "",
      "description": [
        "The BOO! Mini Skull Wax Melts are handmade, white skull-shaped wax melts, packed in a black pouch with a clear window and a playful ghost and graveyard label. They are a fun Halloween gift or a spooky treat for your home, and they pair nicely with the BOO! Spooky Amber Jar Candle. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-87.jpg"
      ]
    },
    {
      "id": "winter-wonderland-snow-globe-candle",
      "name": "Winter Wonderland Snow Globe Candle",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Winter Wonderland Snow Globe Candle: a handmade snow globe-shaped candle with a Christmas tree and snowflakes.",
      "price": "",
      "description": [
        "The Winter Wonderland Snow Globe Candle is a handmade, snow globe-shaped candle with a Christmas tree and falling snowflakes in relief, presented in a kraft gift box with a window and pine cones. It is a charming piece of Christmas home decor, and a festive artisan gift for the holiday season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-88.jpg"
      ]
    },
    {
      "id": "holiday-road-trip-snow-globe-candle",
      "name": "Holiday Road Trip Snow Globe Candle",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Holiday Road Trip Snow Globe Candle: a handmade snow globe-shaped candle with a car carrying a Christmas tree.",
      "price": "",
      "description": [
        "The Holiday Road Trip Snow Globe Candle is a handmade, snow globe-shaped candle with a car carrying a Christmas tree and falling snowflakes in relief, presented in a kraft gift box with a window and pine cones. It is a charming piece of Christmas home decor, and a festive artisan gift for the holiday season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-89.jpg"
      ]
    },
    {
      "id": "angel-wings-candle-bowl",
      "name": "Angel Wings Candle Bowl",
      "category": [
        "Small things"
      ],
      "short": "The Angel Wings Candle Bowl: a handmade white candle bowl with sculpted angel wings and two small golden hearts.",
      "price": "",
      "description": [
        "The Angel Wings Candle Bowl is a handmade white candle with sculpted angel wings and two small golden hearts, set in a scalloped white bowl and presented in a kraft gift box. Its pure, calm look makes it a beautiful piece of home decor for Christmas and the winter season, and a heartfelt artisan gift. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-90.jpg"
      ]
    },
    {
      "id": "christmas-bloom-candle-bowl",
      "name": "Christmas Bloom Candle Bowl",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Christmas Bloom Candle Bowl: a handmade white candle bowl with a red poinsettia flower.",
      "price": "",
      "description": [
        "The Christmas Bloom Candle Bowl is a handmade candle with a bright red poinsettia flower, set in a scalloped white bowl and presented in a kraft gift box. It is a festive piece of Christmas home decor for a table or mantel, and a lovely artisan gift for the holiday season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-91.jpg"
      ]
    },
    {
      "id": "snowflake-christmas-candle-bowl",
      "name": "Snowflake Christmas Candle Bowl",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Snowflake Christmas Candle Bowl: a handmade white candle bowl with a snowflake and small white snowflakes.",
      "price": "",
      "description": [
        "The Snowflake Christmas Candle Bowl is a handmade candle with a large wax snowflake and small white snowflakes, set in a scalloped white bowl and presented in a kraft gift box. It is a calm, wintry piece of Christmas home decor for a table or mantel, and a lovely artisan gift for the holiday season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended."
      ],
      "details": [],
      "images": [
        "images/gift-92.jpg"
      ]
    },
    {
      "id": "cozy-gingerbread-christmas-wax-melts",
      "name": "Cozy Gingerbread Christmas Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Cozy Gingerbread Christmas Wax Melts: handmade gingerbread man wax melts in a kraft gift box.",
      "price": "",
      "description": [
        "The Cozy Gingerbread Christmas Wax Melts are handmade, gingerbread man-shaped wax melts in a warm beige tone, packed in a kraft gift box with a window and a gingerbread label. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-93.jpg"
      ]
    },
    {
      "id": "baked-apple-christmas-wax-melts",
      "name": "Baked Apple Christmas Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Baked Apple Christmas Wax Melts: handmade glittery snowman and Christmas tree wax melts in a kraft gift box.",
      "price": "",
      "description": [
        "The Baked Apple Christmas Wax Melts are handmade wax melts in snowman, Christmas tree and other festive shapes with a sprinkle of glitter, packed in a kraft gift box with a window and a baked apple label. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-94.jpg"
      ]
    },
    {
      "id": "winter-tale-christmas-wax-melts",
      "name": "„Winter Tale” Christmas Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Winter Tale Christmas Wax Melts: handmade round wax melts topped with Christmas trees, in a kraft gift box.",
      "price": "",
      "description": [
        "The Winter Tale Christmas Wax Melts are handmade, round wax melts topped with green and golden Christmas trees and a sprinkle of glitter, packed in a kraft gift box with a window. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-95.jpg"
      ]
    },
    {
      "id": "palo-santo-christmas-tree-wax-melts",
      "name": "Palo Santo Christmas Tree Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Palo Santo Christmas Tree Wax Melts: handmade round wax melts with green Christmas trees, in a kraft gift box.",
      "price": "",
      "description": [
        "The Palo Santo Christmas Tree Wax Melts are handmade, round wax melts topped with green Christmas trees and golden glitter, packed in a kraft gift box with a window. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-96.jpg"
      ]
    },
    {
      "id": "under-the-mistletoe-christmas-wax-melts",
      "name": "Under the Mistletoe Christmas Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Under the Mistletoe Christmas Wax Melts: handmade round wax melts with holly leaves and red berries, in a kraft gift box.",
      "price": "",
      "description": [
        "The Under the Mistletoe Christmas Wax Melts are handmade, round wax melts topped with green holly leaves, red berries and golden glitter, packed in a kraft gift box with a window. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-97.jpg"
      ]
    },
    {
      "id": "nutcracker-christmas-wax-melts",
      "name": "Nutcracker Christmas Wax Melts",
      "category": [
        "Small things"
      ],
      "season": "Winter",
      "short": "The Nutcracker Christmas Wax Melts: handmade golden gingerbread man wax melts in a kraft gift box.",
      "price": "",
      "description": [
        "The Nutcracker Christmas Wax Melts are handmade, golden gingerbread man-shaped wax melts packed in a kraft gift box with a window and a nutcracker label. They make a festive artisan gift or a cozy treat for your own home during the holiday season. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-98.jpg"
      ]
    },
    {
      "id": "rudolphs-winter-scented-gift-box",
      "name": "Rudolph’s Winter Scented Gift Box",
      "category": [
        "Gift boxes"
      ],
      "season": "Winter",
      "short": "Rudolph's Winter Scented Gift Box: a handmade reindeer candle and a holly wax melt in a kraft gift box.",
      "price": "",
      "description": [
        "Rudolph's Winter Scented Gift Box is a handmade gift set in a kraft box with a window. It holds a white reindeer candle with a red and white twine scarf and a golden bell, and a round wax melt decorated with holly and a sprinkle of glitter. Light the candle and warm the melt for a festive atmosphere. A charming artisan gift for the holiday season. Place it on a heat-resistant plate, trim the wick before lighting, and never leave a burning candle unattended. To use, place a piece in your ceramic wax warmer with a natural tealight underneath, and never leave a burning tealight unattended."
      ],
      "details": [],
      "images": [
        "images/gift-99.jpg"
      ]
    }
  ]
};
