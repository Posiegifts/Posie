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

  // Your products. The first 3 are also shown on the home page under "Recently made".
  products: [
    {
      "id": "haunted-forest",
      "name": "Decorated candles for the spooky season",
      "category": [
        "Small things"
      ],
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
      "name": "Divine scents in a jar",
      "category": [
        "Small things"
      ],
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
      "short": "Discover the Love Spell wax melts set, crafted with premium soy wax and sparkling glitter for a warm ambiance.",
      "price": "",
      "description": [
        "Sometimes, the simplest moments deserve to be elevated. I created this set of handmade wax melts to bring warmth and a subtle touch of playful elegance into your living space after a long day. Each piece in this collection is carefully hand-poured using 100% natural, eco-friendly soy wax, blended with premium fragrance oils and finished with a delicate dusting of festive glitter. The striking red lip shape doesn't just treat your senses once melted; it serves as a beautiful piece of home decor even before you place it in your burner. It is the perfect companion for a cozy weekend read, a relaxing bath, or anytime you want to fill your favorite room with a comforting, long-lasting aroma. Simply pop a piece into your ceramic wax warmer, light a natural tealight underneath, and let the slowly melting wax transform your home into a sanctuary of custom-crafted peace."
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
      "short": "Discover the Be my Valentine handmade wax melts set, crafted from premium soy wax with a touch of crimson glitter.",
      "price": "",
      "description": [
        "True comfort is all about creating a space where you can let your mind wander and fully unwind. These handmade wax melts set was crafted to bring a whimsical, dreamy, yet sophisticated feel to your daily relaxation rituals. The Be my Valentine handmade wax melts set was designed to bring a gentle sense of romance and warmth into your shared spaces, completely free of over-the-top clichés.",
        "Each individual piece is carefully hand-poured using 100% natural, eco-friendly soy wax, infused with premium fragrance oils and enhanced with a subtle dusting of crimson glitter. The elegant, bold red lip shape makes these melts an eye-catching piece of home decor even before they meet the flame. Whether you are planning a quiet date night in, a relaxing evening for yourself, or looking for a thoughtful, artisan gift, this collection sets the perfect mood.",
        "Just place a piece into your favorite wax warmer, light a tealight underneath, and let the slowly melting wax fill the air with a sophisticated, comforting aroma."
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
      "short": "The P.S. I love you handmade wax melts set blends natural soy wax with a modern, elegant design.",
      "price": "",
      "description": [
        "Creating a welcoming space is all about combining your unique personal style with a sense of pure comfort. This handmade wax melts set was designed for those who appreciate modern aesthetics but still want their home to feel incredibly warm and inviting.",
        "The collection beautifully features a striking, large geometric center heart, surrounded by smaller faceted hearts, smooth lips, and soft white clouds. Each piece is hand-poured using 100% natural, eco-friendly soy wax blended with premium fragrance oils to ensure a clean, long-lasting aroma. The vibrant pink tones contrasted with the pure white clouds make this collection a gorgeous statement piece of home decor even before you place a single piece in your wax warmer.",
        "Simply add your choice of shapes to your favorite wax burner, light a tealight, and enjoy a beautifully balanced, custom-crafted atmosphere."
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
      "short": "Discover the Cloud Nine handmade wax melts set, combining natural soy wax with a dreamy cloud design for ultimate relaxation.",
      "price": "",
      "description": [
        "True relaxation is about finding those small, quiet moments in the day to simply clear your mind. The Cloud Nine handmade wax melts set was beautifully crafted to transform your living space into a calm, breezy sanctuary where you can instantly feel at ease.",
        "This collection features five round, marble-dyed blue and white discs, each gently topped with a soft, glittering white cloud shape. Carefully hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, these melts ensure a clean burn and a deeply comforting, long-lasting aroma. The stunning combination of sky blue swirls and shimmering clouds makes this set a wonderful piece of visual home decor even before it ever touches your burner. It is a thoughtful way to pamper yourself after a long week, enhance your meditation space, or gift a little slice of heaven to someone special.",
        "Simply place a cloud disc into your favorite ceramic wax warmer, light a natural tealight underneath, and let the slowly melting soy wax float you away to your own private paradise."
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
      "short": "The Sweetheart Bubble handmade candle combines eco-friendly natural wax with a stunning, modern heart design.",
      "price": "",
      "description": [
        "True beauty in home decor is about finding pieces that spark joy even before they are lit. The Sweetheart Bubble handmade candle was thoughtfully designed to bring a modern, elegant touch of warmth and romance into your favorite living spaces. This beautiful sculptural candle is meticulously hand-poured using 100% natural, eco-friendly wax, forming a contemporary cube built entirely out of soft, pastel-pink hearts. Finished with a delicate satin ribbon, it serves as an eye-catching statement piece of home decor for your vanity, coffee table, or shelving unit. Whether you are setting the mood for a cozy, peaceful evening to yourself, adding a soft accent to your room, or looking for a thoughtful, artisan gift for someone special, this candle sets a sophisticated and loving atmosphere.",
        "Place it on a heat-resistant candle plate, trim the wick, and let its gentle presence add a touch of custom-crafted charm to your daily relaxation rituals."
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
      "short": "Bring warmth and whimsical charm to your space. The Golden Heart Bunnies candle set blends natural wax with a heartwarming, detailed artisan design.",
      "price": "",
      "description": [
        "The most beautiful homes are those filled with pieces that bring a smile to your face the moment you step into the room. The Golden Heart Bunnies handmade molded candle set was thoughtfully crafted to capture a sense of joyful serenity, comfort, and playful elegance for your daily living spaces. This enchanting collection features three beautifully detailed, espresso-cream toned bunny candles in different endearing poses, each subtly adorned with a tiny, gleaming metallic golden heart on their chest. Meticulously hand-poured using 100% natural, eco-friendly wax, these sculptural candles double as premium pieces of seasonal or year-round home decor for your mantle, bedside table, or shelving displays. Whether you are creating a cozy, relaxing atmosphere for a quiet evening in, adding a touch of nature-inspired warmth to your living room, or searching for a truly unique, artisan gift for a loved one, this trio sets a heartwarming mood.",
        "To enjoy their gentle glow, place them on a secure, heat-resistant candle dish, trim the wicks, and let these charming companions bring a custom-crafted magic to your home."
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
      "short": "The ultimate artisan gift for Mother’s Day. Discover the Mother’s Day Blossom handmade candle gift set, featuring natural wax tulips and a personalized candle.",
      "price": "",
      "description": [
        "There is no love quite like a mother’s, and finding a gift that truly expresses gratitude requires something thoughtful, unique, and crafted with care. The Mother’s Day Blossom handmade candle gift set was lovingly created to offer a sophisticated, heart-warming alternative to traditional flowers, bringing a long-lasting bloom and cozy ambiance into her home. Beautifully nestled in an eco-friendly kraft gift box with protective crinkle paper, this premium artisan set features two stunning creations. The centerpiece is an elegant, gold-rimmed tart candle adorned with intricately molded pastel pink roses, carnations, and a delicate \"ANYA\" letter-bead dedication alongside a tiny golden heart. Accompanying it is a breathtaking, freestanding tulip bouquet sculptural candle, meticulously detailed from its soft pink petals down to its pale green stems. Hand-poured using 100% natural, eco-friendly wax and premium fragrance oils, this gift set doubles as an exquisite piece of seasonal home decor. It is the perfect way to show love, celebrate her special day, and give her a relaxation ritual she truly deserves.",
        "To enjoy their gentle glow, place the candles on a secure, heat-resistant plate, trim the wicks, and let the comforting aroma fill her space with custom-crafted warmth."
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
      "short": "Embrace cozy autumn vibes. The Autumn Wanderlust handmade pumpkin candle collection features uniquely crafted soy candles decorated with decorative pumpkins.",
      "price": "",
      "description": [
        "As the days grow shorter and the air turns crisp, true comfort is found in bringing the warm tónusok and inviting scents of nature indoors. The Autumn Wanderlust handmade pumpkin candle collection was thoughtfully designed to capture the essence of a cozy fall road trip and the magic of a kuckós evening spent at home.",
        "This enchanting seasonal collection is poured into your choice of eye-catching, hand-crafted containers. The centerpiece is a retro yellow hippie camper accompanied by round, ribbed golden-yellow vessels. Each candle is meticulously hand-poured using 100% natural, eco-friendly soy wax, topped with an exquisite arrangement of detailed miniature pumpkins, fall leaves, and natural wood wicks. Perfect as a striking piece of autumn home decor for your coffee table, fireplace mantle, or dining setting, this collection instantly transforms any space into a warm sanctuary. Whether you are settling in with a warm drink or looking for a premium, artisan gift for a fall lover, these candles set the ultimate autumnal mood.",
        "Place your chosen vessel on a stable, heat-resistant surface, ignite the crackling wood wick, and let the comforting glow and premium fragrances fill your home with custom-crafted warmth."
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
        "True luxury is not about being noticed, but about being remembered. The Baroque Elegance handmade sculptural tart candle was meticulously designed for those who appreciate fine art, vintage charm, and a sophisticated touch of history within their modern living spaces.",
        "This striking collector's piece is poured into a custom-crafted, ribbed black container finished with a hand-painted, brilliant gold-leaf rim. The top of the candle reveals a breathtaking gallery of detailed wax craftsmanship, featuring three distinct, amber-honey toned baroque and renaissance-style relief ornaments. Accentuated by tiny, polished metallic rivets and a clean cotton wick, this unique design serves as a magnificent statement piece of home decor for an elegant study, a sophisticated coffee table display, or a curated vanity. Hand-poured with 100% natural, eco-friendly wax, it offers a perfect balance of visual opulence and peaceful comfort, making it an extraordinary artisan gift for anyone who loves high-end, classic aesthetics.",
        "Place this exquisite vessel on a stable, heat-resistant plate, trim the wick, and let its regal presence bring a sense of timeless warmth and custom-crafted magic into your home."
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
        "Honoring the memory of those who hold a permanent place in our hearts requires a tribute made with care, respect, and quiet elegance. The Angel Wings & Golden Cross handmade memorial candle set was thoughtfully designed as a lasting, beautiful alternative to traditional memorial lights, bringing a comforting, peaceful glow to your home altar or a place of remembrance for All Saints' Day.",
        "This custom-crafted remembrance set is beautifully presented on a smooth, minimalist oval concrete tray in a soft stone-grey tone. Nestled into the built-in round fluted holder is a premium natural wax candle, adorned with two exquisitely detailed white angel wings and an \"ANYA\" letter-bead dedication alongside a small gold heart. Resting gracefully beside the candle is a freestanding, ornate baroque style cross finished in a vintage gold leaf. Hand-poured with eco-friendly ingredients, this artistic keepsake offers a sophisticated, deeply moving way to celebrate an eternal bond, express your love, or offer a heartfelt condolence gift to someone walking through a journey of grief.",
        "Place the tray on a secure, stable surface, trim the cotton wick before lighting, and let its gentle, steady flame fill the room with a sense of custom-crafted peace and loving remembrance."
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
        "True elegance lies in rewriting traditions with your own artistic voice. The Baroque Symphony handmade advent wreath candle was meticulously designed as a breathtaking centerpiece that brings antique opulence and a sophisticated warmth to your holiday or seasonal dining displays, completely free of ordinary clichés.",
        "This majestic, large-scale creation is poured into a unique, black vessel accented with a hand-painted, brilliant gold-leaf top rim. Acting as a sculptural crown for your table, the surface is masterfully arranged with a complex pattern of honey-amber toned baroque ornaments, classical acanthus leaves, and detailed crests. Featuring four premium cotton wicks arranged symmetrically, it is perfectly suited to serve as a luxurious, modern Advent wreath or a high-end statement piece of home decor for special gatherings. Hand-poured with 100% natural, eco-friendly wax, it serves as an extraordinary artisan gift for those who adore vintage luxury and meticulous hand-craftsmanship.",
        "Place this regal wreath on a stable, heat-resistant surface, trim the four wicks equally before lighting, and let the magnificent crackling light and premium aromas elevate your home into an unforgettable, custom-crafted sanctuary."
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
      "short": "Get ready for a cozy, spooky night. The Spooky Season handmade Halloween wax melts selection brings natural soy wax ghosts and skulls to your wax warmer.",
      "price": "",
      "description": [
        "There is a unique magic in the air as autumn settles in, it is the season of long, dark evenings, cozy sweaters, and a little bit of playful mystery. The Spooky Season handmade Halloween wax melts selection was thoughtfully crafted to bring a whimsical, beautifully eerie charm into your home, perfect for celebrating October.",
        "Beautifully packaged in sleek, eco-friendly black pouches with custom-designed gothic illustrations, these sets feature two unique themes: \"BOO!\" and \"HALLOWEEN\". Inside, you will find an assortment of detailed, pure white wax shapes, including spooky little ghosts, grinning jack-o'-lantern pumpkins, and mini geometric skulls. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, these melts look wonderfully festive even before they reach your burner. Whether you are hosting a cozy movie night, setting a mysterious ambiance for a Halloween party, or gifting a unique autumn treat to a friend, this collection sets the perfect spooky mood.",
        "Simply pop a ghost or a skull into your ceramic wax warmer, light a natural tealight underneath, and let the comforting autumnal aromas and flickering shadows transform your room into a custom-crafted sanctuary."
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
        "This impressive, large-scale creation is poured into a handmade vessel in a soft, monochromatic cream-beige tone. The surface serves as a sculptural gallery of fine wax artistry, beautifully arranged with a complex, symmetrical pattern of detailed baroque rosettes, classical acanthus leaves, and royal renaissance crests. Featuring four premium cotton wicks, it acts as a stunningly luxurious, modern alternative to a traditional Advent wreath or a high-end statement piece of home decor for special family gatherings. Hand-poured with 100% natural, eco-friendly wax, it makes an extraordinary artisan gift for those who love high-end interior aesthetics and meticulous hand-craftsmanship.",
        "Place this regal wreath on a stable, heat-resistant surface, trim the four wicks equally before lighting, and let its magnificent steady flame transform your space into an unforgettable, custom-crafted sanctuary."
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
      "short": "Bring the magic of winter indoors. The Winter Wonderland Advent centerpiece features intricate soy wax snowflakes on a minimalist handmade tray.",
      "price": "",
      "description": [
        "The most magical winter moments are created when we step inside from the cold and welcome the soothing warmth of a beautifully lit home. The Winter Wonderland handmade snowflake candle set was thoughtfully crafted to capture the serene, crisp essence of the first snowfall, bringing a sophisticated touch of seasonal elegance into your living space without any ordinary clichés.",
        "This stunning seasonal collection is elegantly arranged on a smooth, minimalist tray in a soft chalk-white tone. Nestled perfectly on the tray are four meticulously detailed snowflake sculptural candles, each hand-poured with 100% natural, eco-friendly soy wax. To add a subtle festive shimmer, every single snowflake is adorned with a tiny, gleaming metallic golden star and fitted with a clean cotton wick. Perfect as a striking holiday centerpiece for your dining table, fireplace mantle, or coffee table display, this set serves as an extraordinary piece of winter home decor. It is also a heartwarming and premium artisan gift choice for Christmas, hostesses, or anyone who adores the elegant, cozy side of the winter season.",
        "Place the tray on a secure, stable surface, trim the wicks before lighting, and let the gentle, flickering flames and premium seasonal aromas transform your home into a custom-crafted winter sanctuary."
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
      "short": "The perfect artisan gift for the holidays. Discover the Festive Holly & Snowflake handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "There is no winter joy quite like gathering around a beautifully lit room, wrapped in the comforting aromas of the holiday season. The Festive Holly & Snowflake handmade Christmas candle gift box was lovingly curated to bring a classic, sophisticated sense of Christmas magic into your home, serving as a premium alternative to mass-produced decorations.",
        "Beautifully nested in an eco-friendly kraft gift box, this premium artisan set features two distinct wax creations. The centerpiece is a unique, gold-rimmed fluted tart candle, masterfully decorated with a vibrant green holly wreath, bright red winter berries, and miniature golden stars. Accompanying it is a freestanding, crisp white snowflake sculptural candle, intricately detailed and topped with a shiny gold ornament accent and a tiny holly leaf embellishment. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box doubles as a gorgeous piece of festive home decor. It is the ultimate choice for a thoughtful holiday surprise, a Christmas thank-you gift, or a beautiful self-care treat for cozy winter nights.",
        "To enjoy their gentle glow, place the candles on a secure, heat-resistant plate, trim the wicks, and let the warm, seasonal fragrances fill your living space with custom-crafted peace."
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
      "short": "Elegance inspired by winter frost. Discover the Winter Frost Snowflake handmade Christmas candle gift box, featuring a natural soy candle and artisan holder.",
      "price": "",
      "description": [
        "The most beautiful winter days are defined by a crisp, serene silence outside, and a soft, flickering glow inside that makes you feel completely safe and warm. The Winter Frost Snowflake handmade Christmas candle gift box was lovingly curated to capture that very sense of peaceful, snowy elegance, offering a sophisticated alternative to traditional, colorful holiday decor.",
        "Beautifully nestled in an eco-friendly kraft gift box, this artisan set features two complementary creations. The centerpiece is a unique, fluted white candle, masterfully decorated with a large central snowflake, a delicate cluster of miniature white snowflake rátétek on the side, and a tiny gleaming golden star. Accompanying it is a freestanding, beautifully detailed snowflake-shaped concrete holder in a matching clean chalk-white finish. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box doubles as a stunning minimalist statement piece of winter home decor. It is an extraordinary choice for a thoughtful holiday surprise, a Christmas thank-you gift for a loved one, or a beautiful self-care ritual for cozy winter evenings.",
        "To enjoy their gentle presence, place the set on a secure, heat-resistant surface, trim the cotton wick before lighting, and let the comforting seasonal aromas fill your living space with custom-crafted peace."
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
      "short": "Share peace and comfort this holiday season. Discover the Guardian Angel & Snowflake handmade Christmas candle gift box, crafted from premium natural soy wax.",
      "price": "",
      "description": [
        "The holiday season is a beautiful reminder to cherish the ones we love and bring a sense of serene comfort into our homes. The Guardian Angel & Snowflake handmade Christmas candle gift box was thoughtfully curated to evoke a feeling of pure peace, protection, and festive warmth, serving as an exquisite, artisan alternative to mass-produced gifts.",
        "Beautifully presented in an eco-friendly kraft gift box, this elegant set features two matching creations. The centerpiece is a unique, fluted cream candle, gently adorned with a pair of highly detailed, pure white wax angel wings, a tiny golden heart, and a soft pearl accent. Accompanying it is a freestanding, beautifully detailed snowflake-shaped concrete holder in a matching clean chalk-white finish. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box doubles as a stunning, minimalist statement piece of winter home decor. It is an extraordinary choice for a thoughtful holiday surprise, a Christmas thank-you gift for someone special, or a comforting remembrance token during the winter months.",
        "To enjoy their gentle glow, place the set on a secure, heat-resistant surface, trim the cotton wick before lighting, and let the warm, calming aromas fill your living space with custom-crafted tranquility."
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
      "short": "The perfect personalized holiday gift. Discover the Festive Holly & Maya handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "The holiday season is all about creating unforgettable memories and showing our loved ones how truly special they are. The Festive Holly & Personalized Maya handmade Christmas candle gift box was thoughtfully curated to bring a classic, sophisticated touch of Christmas magic into your home, combining premium artisan craftsmanship with a beautiful personal touch.",
        "Elegantly nested in an eco-friendly kraft gift box, this luxurious set features two stunning creations in vibrant festive red fluted vessels, each finished with a hand-painted gold-leaf rim. The first candle features an intricate, full winter holly wreath complete with bright red berries, mini golden stars, and a delicate white bow. The second candle is beautifully personalized with elegant letter beads spelling out the custom name, accented by matching golden stars and a detailed holly leaf cluster. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box doubles as an extraordinary piece of festive home decor. It is the ultimate choice for a personalized holiday surprise, a unique name-day gift, or a heartwarming keepsake that will fill any space with custom-crafted warmth.",
        "To enjoy their gentle glow, place the candles on a secure, heat-resistant surface, trim the wicks before lighting, and let the comforting seasonal aromas transform your living room into a cozy winter sanctuary."
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
      "short": "Bring modern festive elegance home. The Trio of christmas trees handmade sculptural Christmas candle gift box features natural soy pines in a premium kraft presentation.",
      "price": "",
      "description": [
        "The holiday season becomes truly magical when we fill our spaces with accents that bring a soft, inviting glow to cold winter nights. The Trio of Pines handmade sculptural Christmas candle gift box was thoughtfully curated to capture the clean, serene essence of a snow-covered forest, offering a striking minimalist alternative to traditional, bright holiday decorations.",
        "Beautifully nested in an eco-friendly kraft gift box, this artisan collection features three distinct geometric and contemporary tree shapes. The set includes a sweeping spiral abstract pine, a playful bubble-textured tree, and a sharp origami-inspired faceted Christmas tree. Each piece is meticulously hand-poured in a warm cream-white tone using 100% natural, eco-friendly wax, finished with a clean cotton wick and a tiny gleaming golden ball accent at the top. Perfect as an eye-catching modern holiday centerpiece for a fireplace mantle, festive dining table, or shelving display, this trio doubles as an exquisite piece of winter home decor. It is an extraordinary choice for a premium artisan gift, a thoughtful holiday surprise for a minimalist design lover, or a beautiful addition to your own seasonal rituals.",
        "To enjoy their gentle presence, place the trees on a secure, heat-resistant candle plate, trim the wicks before lighting, and let the flickering warm light transform your space into a custom-crafted sanctuary."
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
      "short": "Add a touch of playful mystery to your autumn evenings. The Spooky Night with Casper handmade Halloween jar candle features a cute soy wax ghost and a miniature bat.",
      "price": "",
      "description": [
        "There is a wonderful magic that comes with the arrival of autumn, long, dark evenings that call for soft lighting, cozy blankets, and a little bit of lighthearted mystery. Casper and his bat handmade Halloween jar candle was thoughtfully created to capture the enchanting, cozy side of the spooky season, bringing a sophisticated yet playful charm to your home decor without any ordinary clichés.",
        "This unique seasonal creation is poured into a minimalist, smooth round container in a contemporary stone-grey tone. Nestled into the 100% natural, eco-friendly soy wax is an incredibly detailed, freestanding little ghost character with hand-painted, metallic golden eyes. The surface of the candle is further decorated with a crisp black wax bat in full flight and a scattering of tiny, shimmering golden stars around a clean cotton wick. Perfect as an eye-catching autumn statement piece for your coffee table, fireplace mantle, or bookshelf display, this candle instantly warms up the room. Whether you are setting the mood for a fun Halloween movie night or searching for a premium, artisan gift for a fall lover, it sets the ultimate seasonal mood.",
        "Place the grey vessel on a stable, heat-resistant surface, trim the wick before lighting, and let the gentle flickering flame and premium fragrances fill your living space with custom-crafted warmth."
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
      "short": "Bring classic holiday nostalgia home. Discover The Nutcracker handmade sculptural Christmas candle gift box, crafted from premium natural eco-wax.",
      "price": "",
      "description": [
        "The holiday season is most beautiful when it embraces the timeless stories and heartwarming traditions that make winter evenings feel truly magical. The Nutcracker Suite handmade sculptural Christmas candle gift box was thoughtfully curated to bring a sense of classic, nostalgic elegance into your home, serving as a premium, artistic center piece for your contemporary festive decor.",
        "Beautifully nestled in an eco-friendly kraft gift box, this artisan collection features two masterfully detailed Nutcracker soldier candles. Each stately figure is meticulously hand-poured in a warm, uniform cream-white tone using 100% natural, eco-friendly wax. Designed with high-precision details, from their uniforms and boots to their classic hats, they are finished with a clean cotton wick and a tiny, gleaming metallic golden bead accent at the top. Perfect as a striking minimalist holiday display for your living room coffee table, fireplace mantle, or dining setting, this duo doubles as an exquisite seasonal keepsake. It is an extraordinary choice for a premium artisan gift, a thoughtful holiday surprise for a classic Christmas lover, or a beautiful addition to your own winter rituals.",
        "To enjoy their gentle presence, place the soldiers on a secure, stable, and heat-resistant candle dish, trim the wicks before lighting, and let their flickering warm light transform your space into a custom-crafted winter sanctuary."
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
      "short": "Fill your home with the scent of freshly baked holiday treats. Discover the POSIE Gingerbread handmade soy jar candle, crafted from 100% natural wax.",
      "price": "",
      "description": [
        "Nothing evokes the magical warmth of the holiday season quite like the comforting, nostalgic aroma of freshly baked treats drifting through a cozy house. The Gingerbread Holiday Spice handmade soy jar candle was thoughtfully crafted to bring that exact essence of Christmas comfort and festive joy directly into your favorite winter living spaces.",
        "This classic holiday candle is beautifully poured into a premium mber glass jar, fitted with a sleek black lid that preserves the fragrance when not in use. It features a custom-designed, whimsical festive label adorned with charming illustrations of gingerbread houses, stars, and holiday sweets, complete with a vibrant red \"Merry Christmas\" emblem. Hand-poured in a 200 ml volume using 100% natural, eco-friendly soy wax, this candle ensures a clean, long-lasting burn that safely fills the room with rich, warm spices. Perfect as an inviting accent for your living room coffee table, festive dining layout, or kitchen counter, it creates an instantly cozy winter ambiance. It is an extraordinary artisan gift choice for teachers, hostesses, Christmas stockings, or anyone who loves the nostalgic scents of the holiday season.",
        "Place the amber glass jar on a secure, stable, and heat-resistant surface, trim the cotton wick before lighting, and let the flickering warm light transform your space into a custom-crafted holiday sanctuary."
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
      "short": "The ultimate artisan gift for the holidays. Discover the Holiday Magic handmade Christmas candle gift box, crafted from premium soy wax.",
      "price": "",
      "description": [
        "The truest magic of the holiday season is found in the cozy rituals that bring light, warmth, and nostalgic charm into our homes on cold winter nights. The Holiday Magic handmade Christmas candle gift box was lovingly curated to capture the traditional joy of a classic Christmas, combining masterfully detailed wax artistry into a premium, festive lifestyle experience.",
        "Beautifully nestled in an eco-friendly kraft gift box, this premium set features three distinct wax creations. The centerpiece is a unique, fluted cream-white tart candle, topped with a stunning, vibrant red flower bloom with detailed petals. Accompanying it are two freestanding sculptural candles: a sweeping, intricately embossed Christmas tree and a modern, minimalist reindeer figurine—both elegantly wrapped with traditional red-and-white baker's twine and finished with gleaming metallic golden accents. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box serves as a magnificent festive centerpiece. It is an perfect choice for a cosy holiday surprise, a thoughtful Christmas thank-you gift, or a heartwarming addition to your own seasonal traditions.",
        "To enjoy their gentle glow, place the candles on a secure, heat-resistant plate, trim the cotton wicks before lighting, and let the comforting seasonal aromas transform your space into a cozy winter sanctuary."
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
      "short": "Send a message of peace and comfort. Discover the Angel Blessing & Serenade handmade Christmas candle gift box, crafted from premium eco-friendly soy wax.",
      "price": "",
      "description": [
        "The holiday season is a beautiful time to share tokens of love, protection, and serene comfort with those who mean the most to us. The Angel Blessing & Serenade handmade Christmas candle gift box was thoughtfully curated to bring a deeply peaceful, celestial charm and festive warmth into your living spaces, offering an exquisite artisan alternative to mass-produced holiday decor.",
        "Beautifully presented in an eco-friendly kraft gift box, this elegant set features two matching creations. The centerpiece is a unique, fluted cream candle, gently adorned with a pair of highly detailed, pure white wax angel wings, a tiny golden heart, and a soft pearl accent. Accompanying it is a freestanding sculptural candle shaped like a graceful angel silhouette, featuring an open cutout heart in the center and a delicate white snowflake embellishment on her gown. Hand-poured using 100% natural, eco-friendly soy wax and premium fragrance oils, this gift box doubles as a stunning, minimalist statement piece of winter home decor. It is an extraordinary choice for a meaningful holiday surprise, a comforting Christmas thank-you gift, or a loving remembrance token during the winter months.",
        "To enjoy their gentle glow, place the set on a secure, stable, and heat-resistant surface, trim the cotton wicks before lighting, and let the warm, calming aromas fill your living space with custom-crafted tranquility."
      ],
      "details": [],
      "images": [
        "images/gift-35.jpg"
      ]
    }
  ]
};
