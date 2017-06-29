<!--APP-->
<app>
    <loadingOverlay></loadingOverlay>
    <div id="bg-overlay" hide={notFrontPage}></div>

    <div id="center-container">
        <navbar navbar-data={navbarData} ></navbar>
        <div id="contents-top-pad"></div>
        <contents current-tab={currentTab} page-data={pageData}></contents>
        <div id="bottom-spacer"></div>
    </div>

    <script>
        this.notFrontPage = opts.notFrontPage
        this.currentTab = opts.currentTab
        this.pageData = opts.pageData
        this.navbarData = opts.navbarData
    </script>
</app>


<!--LOADING OVERLAY-->
<loadingOverlay>
    <div id="loading-overlay">
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
    </div>
</loadingOverlay>


<!--NAVBAR-->
<navbar>
    <div id="navbar">
        <nav>
            <a class={item.class} href={item.link} each={item in items}>{item.title}
                <img if={item.type == 'image'} src={item.imgSrc}>
                <i if={item.type == 'text-glyph'} class={item.glyphClass}></i>
            </a>
        </nav>
    </div>

    <script>
        this.items = opts.navbarData.items
    </script>
</navbar>


<!--MAIN CONTENTS-->
<contents>
    <div id="contents" data-is={currentTab} page-data={pageData}>
    </div>

    <script>
        this.currentTab = opts.currentTab
        this.pageData =opts.pageData
    </script>
</contents>


<!--FRONT PAGE-->
<frontPage>
    <div id="big-logo">
        <img style="fill: white" src="images/logo-white.svg"></img>
        <div id="underline"></div>
    </div>
    <div id="front-text">
        <p><span class="drop-cap">YallaPunk</span> is a direct response to negative depictions of populations of middle eastern descent in mainstream media. This event is meant to highlight creative accomplishments of Arabs and Persians and serve
                    as a safe space forum for discourse about social issues. The idea is to celebrate music, art, film and other cultural artifacts created by this particular population in an intersectional and inclusive space free from sexism, transphobia,
                    homophobia, and bigotry.</p>
        <socialGlyphs></socialGlyphs>
    </div>
</frontPage>

<!--TICKETS PAGE-->

<!--LINE-UP PAGE-->

<!--GETTING THERE PAGE-->

<!--ABOUT PAGE-->
<aboutPage>

</aboutPage>

<!--BLOG PAGE-->
<blog>
    <div class="blog-entry" each={blog in blogs}>
        <div class="blog-header-image">
            <img src={blog.headerImg}>
        </div>
        <div class="blog-titles">
            <div class="main">
                <span>{blog.title}</span>
            </div>
            <div class="sub">
                <span>{blog.subtitle}</span>
            </div>
        </div>
        <div class="blog-contents">
            <div class="text">
                <p>{blog.content}</p>
            </div>
            <div class="blog-left-bar">
                <div class="info-cols" if={blog.settings.showMiniInfos}>
                    <div class="info" each={info in blog.miniInfos}>
                        <div class="header">
                            <span>{info.header}</span>
                        </div>
                        <div class="title">
                            <span>{info.title}</span>
                        </div>
                        <div class="details">
                            <p>{info.content}</p>
                        </div>
                    </div>
                </div>
                <div class="blog-tags-and-social">
                    <div class="tags" if={blog.settings.showTags}>
                        <div class="title">
                            <span>TAGS:</span>
                        </div>
                        <div class="tag-links">
                            <a href="/blog/tag/{tag}" each={tag in blog.tags}>{tag}</a>
                        </div>
                    </div>
                    <socialGlyphs if={blog.settings.showSocial}></socialGlyphs>
                </div>
            </div>
        </div>
    </div>

    <script>
        this.blogs = [opts.pageData.aboutPage,opts.pageData.aboutPage]
    </script>
</blog>

<socialGlyphs>
    <div class="social">
        <a target="_blank" href="https://www.facebook.com/yallapunk/">
            <div class="glyph facebook">
                <i class="fa fa-facebook"></i>
            </div>
        </a>
        <a target="_blank" href="https://twitter.com/YallaPunk">
            <div class="glyph twitter">
                <i class="fa fa-twitter"></i>
            </div>
        </a>
        <a target="_blank" href="http://instagram.com">
            <div class="glyph instagram">
                <i class="fa fa-instagram"></i>
            </div>
        </a>
    </div>
</socialGlyphs>