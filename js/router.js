/**
 * 路由管理系统
 * 处理页面导航和路由跳转
 */

class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.init();
    }

    /**
     * 初始化路由系统
     */
    init() {
        // 监听hash变化
        window.addEventListener('hashchange', () => this.handleRouteChange());

        // 监听移动端菜单点击
        this.setupMobileMenu();

        // 初始化路由
        this.handleRouteChange();
    }

    /**
     * 处理路由变化
     */
    handleRouteChange() {
        const hash = window.location.hash.slice(1) || 'home';
        this.currentRoute = hash;
        this.updateActiveNav(hash);
    }

    /**
     * 更新导航栏活跃状态
     */
    updateActiveNav(route) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            if (linkRoute === route) {
                link.classList.add('bg-white/20');
            } else {
                link.classList.remove('bg-white/20');
            }
        });
    }

    /**
     * 设置移动端菜单
     */
    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileNav = document.getElementById('mobileNav');

        if (mobileMenuToggle && mobileNav) {
            mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu(mobileNav);
            });

            // 点击菜单项后关闭菜单
            const mobileLinks = mobileNav.querySelectorAll('.nav-link');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu(mobileNav);
                });
            });
        }
    }

    /**
     * 切换移动端菜单
     */
    toggleMobileMenu(mobileNav) {
        mobileNav.classList.toggle('translate-y-0');
        mobileNav.classList.toggle('-translate-y-full');
        mobileNav.classList.toggle('opacity-100');
        mobileNav.classList.toggle('opacity-0');
        mobileNav.classList.toggle('visible');
        mobileNav.classList.toggle('invisible');
    }

    /**
     * 关闭移动端菜单
     */
    closeMobileMenu(mobileNav) {
        mobileNav.classList.add('-translate-y-full');
        mobileNav.classList.remove('translate-y-0');
        mobileNav.classList.add('opacity-0');
        mobileNav.classList.remove('opacity-100');
        mobileNav.classList.add('invisible');
        mobileNav.classList.remove('visible');
    }

    /**
     * 导航到指定路由
     */
    navigate(route) {
        window.location.hash = `#${route}`;
    }

    /**
     * 导航到外部页面
     */
    navigateTo(url) {
        window.location.href = url;
    }
}

/**
 * 返回顶部功能
 */
class ScrollToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.button.classList.remove('opacity-0', 'invisible');
            this.button.classList.add('opacity-100', 'visible');
        } else {
            this.button.classList.add('opacity-0', 'invisible');
            this.button.classList.remove('opacity-100', 'visible');
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * 页面加载完成后初始化
 */
document.addEventListener('DOMContentLoaded', () => {
    // 初始化路由系统
    const router = new Router();

    // 初始化返回顶部功能
    const scrollToTop = new ScrollToTop();

    // 暴露到全局作用域,方便在HTML中调用
    window.router = router;
});
