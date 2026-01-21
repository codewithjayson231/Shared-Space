# ☕ Shared Space

A simple, elegant chat and file sharing app. Share the link and anyone can join!

![Shared Space](https://img.shields.io/badge/Max%20File%20Size-10MB-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![No Frameworks](https://img.shields.io/badge/No%20Frameworks-Pure%20HTML%2FCSS%2FJS-brown)

## Features

- **Instant Join** - No signup required, just pick a username
- **Real-time Chat** - Messages appear for all users
- **File Sharing** - Upload PDFs, images, documents (up to 10MB)
- **File Preview** - View images and PDFs directly in browser
- **Typing Indicator** - See when others are typing
- **Dark/Light Mode** - Toggle between themes (beige & brown colors)
- **Persistent** - Messages stay until cleared
- **Zero Dependencies** - Pure HTML, CSS, and JavaScript

## 🚀 Quick Deploy

### GitHub Pages (Free)

1. Fork or upload this repo to GitHub
2. Go to **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `index.html` file
3. Done! Get your link instantly

### Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Deploy with one click

### Any Static Host

Just upload `index.html` - it's a single file with everything included!

## 📁 Files

```
shared-space/
├── index.html    # The entire app (just this one file!)
└── README.md     # This file
```

## 🎨 Color Scheme

The app uses a warm **beige, white, and brown** color palette:

- **Light Mode**: Beige background, white cards, brown accents
- **Dark Mode**: Dark brown background, warm earth tones

To customize colors, edit the CSS variables in the `:root` and `body.dark-mode` sections.

## ⚠️ Notes

- Data is stored in browser localStorage
- Each browser/device has its own storage
- For true real-time sync across devices, you'd need a backend (Firebase, Supabase, etc.)
- 10MB file size limit per file

## 📄 License

MIT - Use it however you want!
