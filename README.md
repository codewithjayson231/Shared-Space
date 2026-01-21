# 🔐 Shared Space

A secure, mobile-friendly chat and file sharing app with passcode protection.

![Shared Space](https://img.shields.io/badge/Max%20File%20Size-10MB-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![No Frameworks](https://img.shields.io/badge/No%20Frameworks-Pure%20HTML%2FCSS%2FJS-blue)
![Mobile Ready](https://img.shields.io/badge/Mobile-Ready-brightgreen)

## ✨ Features

### Security
- **🔐 Passcode Protection** - Each space is secured with a unique 6-character code
- **🚪 Private Spaces** - Only people with the passcode can join
- **📱 WhatsApp Invites** - Share invitations directly via WhatsApp

### Chat & Files
- **💬 Real-time Chat** - Messages appear for all users in the space
- **📎 File Sharing** - Upload PDFs, images, documents (up to 10MB)
- **👁️ File Preview** - View images and PDFs directly in browser
- **⌨️ Typing Indicator** - See when others are typing

### User Experience  
- **📱 Mobile Optimized** - Works perfectly on phones and tablets
- **🌙 Dark/Light Mode** - Toggle between themes
- **⌨️ Keyboard Friendly** - Input stays visible while typing
- **💾 Persistent** - Messages stay until you leave

## 🚀 How It Works

1. **Create a Space** - Enter your name and get a unique passcode
2. **Share via WhatsApp** - Send the invite with one tap
3. **Others Join** - They enter the passcode to access your space
4. **Chat & Share** - Everyone in the space can message and share files

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

The app uses a clean **blue and white** color palette optimized for mobile:

- **Light Mode**: White background, blue (#0061D5) accents
- **Dark Mode**: Dark navy background, blue accents

## ⚠️ Important Notes

- **Privacy**: Data is stored in browser localStorage per passcode
- **Sharing**: Each browser/device has its own storage
- **Real-time**: For true real-time sync across devices, you'd need a backend (Firebase, Supabase, etc.)
- **File Limit**: 10MB maximum file size per upload
- **Passcode**: 6-character codes like `ABC123` - share only with trusted people

## 📄 License

MIT - Use it however you want!
