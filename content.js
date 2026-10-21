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
    }
  ]
};
