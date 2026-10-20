# Posie website

A small, free website for Posie: home page, gift gallery, a detail page for every gift, an About page, and links to your social media. It uses plain HTML, CSS and JavaScript, so it can be hosted for free on GitHub Pages.

## The files

| File | What it does | Do you edit it? |
|---|---|---|
| `content.js` | Your email, social links and the list of gifts | Yes, this is the main one |
| `index.html` | Home page text | Sometimes |
| `about.html` | About page text | Yes, add your story |
| `products.html`, `product.html` | Gallery and gift detail pages | Rarely |
| `style.css` | Colours, fonts, layout | Only to change the look |
| `script.js` | Builds the pages from `content.js` | No |

Keep all files together in one folder (no sub-folders, except `images`).

## Preview on your computer

Double-click `index.html`. It opens in your browser. After you edit a file and save it, refresh the browser page.

## Make it yours

1. Open `content.js` in Notepad (right-click, Open with, Notepad).
2. Change `email` and the `socials` links. Delete a social line you don't use, or leave its `url` as `""` to hide it.
3. Replace the six SAMPLE gifts with your own. Copy one block from `{` to `}`, paste it after a comma, and change the words. Each gift needs a different `id` (lowercase, no spaces, use dashes).
4. Add photos: make a folder called `images` next to `content.js`, put your pictures in it, then list them:
   `images: ["images/candle-1.jpg", "images/candle-2.jpg"]`
   Tips: use JPG, about 1200 pixels wide, lowercase names with no spaces. Smaller files load faster on phones.
5. In `about.html` and `index.html`, replace the text between the tags with your own words, and swap `data-placeholder="2"` for `src="images/your-photo.jpg"` to show a real picture.

## Publish for free on GitHub Pages

1. Create a free account at github.com.
2. Click **New repository**. Name it `posie`. Choose **Public**. Click **Create repository**.
3. Click **uploading an existing file**, drag in all the site files (and the `images` folder), then click **Commit changes**.
4. Open **Settings > Pages**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
5. Wait one to two minutes. Your site is at `https://YOUR-USERNAME.github.io/posie/`.

To change something later: open the file on GitHub, click the pencil icon, edit, and click **Commit changes**. The site updates in a minute or two.

## Cost and limits

- GitHub Pages is free for public repositories. The address ending in `github.io` is free. A custom address like `posie.com` costs a yearly fee, and it is optional.
- A GitHub Pages site can be up to about 1 GB, with a soft limit of about 100 GB of traffic a month. That is far more than a gift site needs.
- Everything in a public repository can be seen by anyone, including your email address in `content.js`. Don't put a home address or phone number in the files.
- GitHub's terms say Pages isn't meant for running an online shop or taking payments. A personal showcase is fine. If Posie becomes a business with a checkout, link to a shop platform instead, or check GitHub's current terms at docs.github.com.
