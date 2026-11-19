# Binuja Varghese: personal website and blog

Your personal website and blog in one place: a homepage about you, topic sections in the Personal Excellence style, a Start Here page, About and Contact pages, and your posts.

It's hosted free on **GitHub Pages**, and you post using a free visual editor called **Pages CMS**, with no code needed.

---

## Part 1: Put the site online (one time, about 20 minutes)

### 1. Create a GitHub account
Go to **github.com** and sign up. Choose your username carefully, because it becomes part of your address.
Example: username `binujavarghese` → website `binujavarghese.github.io`

### 2. Create a repository (a folder for your site)
1. Click **+** (top right) → **New repository**
2. **Repository name:** type `YOUR-USERNAME.github.io` (e.g. `binujavarghese.github.io`)
3. Choose **Public**
4. Click **Create repository**

### 3. Upload the website files
1. Unzip the file Claude gave you on your computer.
2. On your new repository page, click **uploading an existing file**.
3. Open the unzipped folder, select **everything inside it** (including the `.github` folder and the `.pages.yml` file) and drag it into the browser.
   - On a Mac, press **Cmd + Shift + .** in Finder to show hidden files that start with a dot.
   - On Windows, turn on **View → Hidden items** in File Explorer.
4. Click **Commit changes**.

> If the `.github` folder doesn't upload by dragging, create the file by hand: **Add file → Create new file**, name it `.github/workflows/deploy.yml`, paste in the contents of that file from the zip, and click **Commit**.

### 4. Turn on GitHub Pages
1. In your repository, go to **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Go to the **Actions** tab. You'll see "Publish website" running. When it shows a green tick (1–2 minutes), your site is live at `https://YOUR-USERNAME.github.io`

---

## Part 2: Write and publish posts (no code)

1. Go to **app.pagescms.org** and click **Sign in with GitHub**
2. Allow access and choose your website repository
3. Click **Blog posts → Add an entry**
4. Fill in the title, a short summary, the date and the topic, then write your post in the editor (bold, headings, images and links all have buttons)
5. Click **Save**. Your post appears on the website in about 1–2 minutes.

**Tips**
- Turn on **"Show in Start with these"** for your best posts, to feature them on the homepage.
- Turn on **Draft** to save a post without showing it on the site.
- Add a **Cover image** to make your post cards look nicer (optional).

### Change your photo, headline or email
In Pages CMS, open **Site settings**. You can change your name, headline, intro, email, newsletter link, photo, quote, social links and topics there.

### Edit your About page
In Pages CMS, open **About me page**. Replace the parts marked "EDIT" with your own story.

---

## Things to update first
1. **Your photo:** Site settings → Your photo (upload a photo of you)
2. **About me page:** add your real background and story
3. **Social links:** add your Instagram or LinkedIn, or leave them empty to hide them
4. **The 3 sample posts:** they're starter examples. Edit them, keep them or delete them.
5. **Newsletter link:** currently your beehiiv subscribe page. If you change your beehiiv address, update it in Site settings.

---

## Later: your own domain (binujavarghese.com)
1. Buy the domain from Namecheap, Porkbun or Cloudflare
2. In GitHub: **Settings → Pages → Custom domain**, enter your domain and follow GitHub's DNS instructions
3. If your repository is **not** named `YOUR-USERNAME.github.io`, also go to **Settings → Secrets and variables → Actions → Variables** and add a variable called `CUSTOM_DOMAIN` with your domain as its value

---

## Changing the design
Colours and fonts are at the top of `src/assets/css/style.css`. Or ask Claude to change the design for you.

## For the curious: what's inside
- `src/posts/`: your blog posts (one file per post)
- `src/pages/`: About, Start here and Contact
- `src/_data/site.json`: site settings
- `src/images/`: photos and images
- `src/assets/css/style.css`: the design
- `.pages.yml`: visual editor settings
- `.github/workflows/deploy.yml`: publishes the site automatically
