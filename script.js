// 博客文章数据
const posts = [
    {
        id: 1,
        title: "欢迎来到我的博客",
        date: "2025-10-27",
        excerpt: "这是我的第一篇博客文章。在这里，我将分享我的技术学习经验、项目开发心得以及生活感悟。",
        tags: ["博客", "开始"],
        filename: "welcome.html"
    },
    {
        id: 2,
        title: "如何使用GitHub Pages搭建个人网站",
        date: "2025-10-27",
        excerpt: "GitHub Pages是一个免费的静态网站托管服务，让我们可以轻松地发布自己的网站。本文将介绍如何从零开始搭建一个个人网站。",
        tags: ["GitHub", "教程", "Web开发"],
        filename: "github-pages-tutorial.html"
    },
    {
        id: 3,
        title: "前端开发学习路线",
        date: "2025-10-27",
        excerpt: "作为一名前端开发者，掌握HTML、CSS、JavaScript是基础。本文将分享一条完整的前端学习路线，帮助初学者快速入门。",
        tags: ["前端", "学习", "JavaScript"],
        filename: "frontend-learning-path.html"
    }
];

// 当页面加载完成时执行
document.addEventListener('DOMContentLoaded', function() {
    // 如果在首页，加载文章列表
    if (document.getElementById('posts-container')) {
        loadPosts();
    }
});

// 加载文章列表
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    
    if (!postsContainer) return;
    
    // 按日期排序（最新的在前面）
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 生成文章卡片HTML
    postsContainer.innerHTML = sortedPosts.map(post => `
        <article class="post-card" onclick="navigateToPost('${post.filename}')">
            <h3>${post.title}</h3>
            <div class="post-meta">
                <time datetime="${post.date}">${formatDate(post.date)}</time>
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="posts/${post.filename}" class="read-more" onclick="event.stopPropagation()">阅读全文 →</a>
        </article>
    `).join('');
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 导航到文章页面
function navigateToPost(filename) {
    window.location.href = `posts/${filename}`;
}

// 平滑滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加返回顶部按钮（可选）
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});
