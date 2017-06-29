
<app>
    <loadingOverlay></loadingOverlay>
    <div id="bg-overlay"></div>

    <div id="center-container">
        <navbar></navbar>
    </div>
</app>

<loadingOverlay>
    <div id="loading-overlay">
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
    </div>
</loadingOverlay>


<mainContent>
    <div id="center-container">
</mainContent>

<navbar>
    <div id="navbar">
        <nav>
            <a each={ items } class={ class } href={ link }>{ title }
                <img if={ type == 'image' } src={ imgSrc }>
                <i if={ type == 'text-glyph' } class={ glyphClass }></i>
            </a>
        </nav>
    </div>

    <script >
        this.items = opts.items
    </script>
</navbar>

