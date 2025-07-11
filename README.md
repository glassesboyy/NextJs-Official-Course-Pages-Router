# Next.js Blog - Personal Blogging Platform with Markdown & SSG

This is a personal blog application built following the [Next.js Page Router Course](https://nextjs.org/learn) from the official Next.js documentation.

## 🚀 Key Features

### 📝 Blog Management

- Dynamic blog post rendering from Markdown files
- Static site generation (SSG) for optimal performance
- Automatic post sorting by date
- Rich markdown content with HTML conversion
- SEO-friendly URLs with dynamic routing

### 🔍 Search & Discovery

- Real-time blog post search functionality
- Debounced search input for better performance
- Filter posts by title with case-insensitive matching
- "No results found" state handling
- Responsive search interface

### 🎨 UI/UX Design

- Modern, clean design with CSS modules
- Responsive layout for all device sizes
- Smooth hover animations and transitions
- Professional typography and spacing
- Optimized images with Next.js Image component

### 🌐 Social Integration

- Complete social media footer with icons
- Links to GitHub, Discord, Spotify, Instagram, LinkedIn
- Direct email contact integration
- Professional developer branding
- External links with proper security attributes

### ⚡ Performance & SEO

- Static generation for lightning-fast loading
- Optimized images with automatic lazy loading
- Proper meta tags and Open Graph integration
- Structured data with semantic HTML
- Accessibility-focused design

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (Page Router)
- **Styling**: CSS Modules + Global CSS
- **Content**: Markdown with gray-matter
- **Markdown Processing**: Remark + remark-html
- **Date Formatting**: date-fns
- **Language**: JavaScript (ES6+)
- **Icons**: Custom SVG icons
- **Fonts**: System fonts stack

## 📁 Project Structure

```
nextjs-blog-course/
├── components/
│   ├── layout.js           # Main layout component
│   ├── layout.module.css   # Layout styles
│   └── date.js            # Date formatting component
├── lib/
│   └── posts.js           # Blog post utilities
├── pages/
│   ├── index.js           # Home page with blog list
│   ├── _app.js            # App component
│   └── posts/
│       └── [id].js        # Dynamic post pages
├── posts/
│   └── *.md               # Markdown blog posts
├── styles/
│   ├── global.css         # Global styles
│   └── utils.module.css   # Utility CSS modules
├── public/
│   └── images/            # Static images
└── package.json           # Dependencies
```

## 📰 Blog Post Structure

Blog posts are written in Markdown with frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
---

Your markdown content here...
```

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

4. **Access application**:
   - Home: `http://localhost:3000`
   - Individual posts: `http://localhost:3000/posts/[post-id]`

## ✍️ Adding New Blog Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter with `title` and `date`
3. Write your content in Markdown format
4. The post will automatically appear on the home page

## 🎯 Features Implemented

### Core Blog Functionality

- ✅ Static site generation (SSG)
- ✅ Dynamic routing for blog posts
- ✅ Markdown to HTML conversion
- ✅ Automatic post sorting by date
- ✅ Responsive design

### Enhanced Features

- ✅ Search functionality with real-time filtering
- ✅ Professional footer with social links
- ✅ Optimized images and performance
- ✅ SEO-friendly meta tags
- ✅ Accessibility considerations

### Developer Experience

- ✅ Clean, modular code structure
- ✅ CSS Modules for scoped styling
- ✅ Reusable components
- ✅ Type-safe date formatting
- ✅ Error handling for missing posts

## 🔧 Development Notes

- Built following the official [Next.js Learn Course](https://nextjs.org/learn)
- Extended with additional features like search and enhanced styling
- Uses Page Router (not App Router) for compatibility with tutorial
- Optimized for static generation and SEO
- Production-ready with proper error handling

## Contact

For questions or support, please contact [suryazulfikar22@gmail.com].

---

For more information about this course, visit the [Next.js Learn Course](https://nextjs.org/learn) on the official Next.js website.
