import 'riot-hot-reload'
import 'babel-core/register'
import './tags/yp.tag'

import './css/main.css'


const navbarData = [
    {type: 'image', link: 'index.html', class: 'mini-logo-nav', imgSrc: 'images/optimised.svg'},
    {type: 'text-glyph', title: 'Updates', link: 'updates.html'},
    // {type: 'text-glyph', title: 'Updates', glyphClass: 'fa fa-facebook', link: 'updates.html'},
    {type: 'text-glyph', title: 'Tickets', link: 'tickets.html'},
    {type: 'text-glyph', title: 'Line-up', link: 'line-up.html'},
    {type: 'text-glyph', title: 'Getting There', link: 'getting_there.html'},
    {type: 'text-glyph', title: 'About', link: 'about.html'},
    {type: 'text-glyph', title: 'Blog', link: 'blog.html'}
]
riot.mount('navbar', {items: navbarData});




riot.mount('app');




import './index.html'