import 'riot-hot-reload'
import 'babel-core/register'

import './index.html'
import './tags/yp.tag'
import './css/main.css'
import './css/font-awesome.css'


const navbarData = {
    items: [{
            type: 'image',
            link: 'index.html',
            class: 'mini-logo-nav',
            imgSrc: 'images/optimised.svg'
        },
        {
            type: 'text-glyph',
            title: 'Updates',
            link: 'updates.html'
        },
        // {type: 'text-glyph', title: 'Updates', glyphClass: 'fa fa-facebook', link: 'updates.html'},
        {
            type: 'text-glyph',
            title: 'Tickets',
            link: 'tickets.html'
        },
        {
            type: 'text-glyph',
            title: 'Line-up',
            link: 'line-up.html'
        },
        {
            type: 'text-glyph',
            title: 'Getting There',
            link: 'getting_there.html'
        },
        {
            type: 'text-glyph',
            title: 'About',
            link: 'about.html'
        },
        {
            type: 'text-glyph',
            title: 'Blog',
            link: 'blog.html'
        }
    ]
}

const pageData = {
    frontPage: {
        contents: ' <p><span class="drop-cap">YallaPunk</span> is a four day music festival showcasing sociis natoque penatibus et magnis \
            dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, \
            sem. Nulla consequat massa quis enim. Donec pede justo,fringilla vel, aliquet nec, vulputate eget, arcu. In enim \
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. \
            Cras dapibus. Vivamus elementum semper nisi.</p> \
        <p> \
            <a class="underlined-link blue" href="about.html">  Learn More  </a> \
        </p>'
    },
    aboutPage: {
        title: 'Our Mission',
        subtitle: 'Philly, the Venue, Directions, and Suggestions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac pulvinar justo, non feugiat diam. Vivamus non mollis mauris. Cras justo tellus, blandit ut massa eget, vehicula vehicula neque. In non tempor mauris, ac tincidunt ante. Aliquam sit amet vestibulum metus. Aliquam erat volutpat. Pellentesque commodo turpis in odio tincidunt, vel venenatis massa varius. Aliquam erat volutpat. Mauris vel finibus tortor. In vel placerat magna, a blandit purus. Proin nec posuere tortor. Cras purus diam, tristique eu turpis ut, sodales malesuada augue. Aenean iaculis at elit sed finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra dapibus nulla vel molestie. Fusce dui quam, tincidunt quis dictum sit amet, feugiat ut sem.',
        headerImg: 'images/about-header-image.jpg',
        tags: ['info', 'mission', 'about','info', 'mission', 'about','info', 'mission', 'about'],
        miniInfos: [{
            header: 'Founder',
            title: 'Rana Fayez',
            content: 'rana@yallapunk.com\n540-345-6789',
        }],
        settings: {
            showTags: true,
            showSocial: true,
            showMiniInfos: true
        }
    }
}

const store = {
    navbarData: navbarData,
    notFrontPage: false,
    currentTab: 'blog',
    pageData: pageData
}

riot.mount('app', store);




