import type { DefaultTheme } from 'vitepress'
import SideBar from './index.json'

const sidebar: DefaultTheme.Config['sidebar'] = {
    '/basic/': SideBar.basic,
    '/engineering/': SideBar.engineering,
    '/frame/': SideBar.frame,
    '/node/': SideBar.node,
    '/otherside/': SideBar.otherside,
    '/arithmetic/': SideBar.arithmetic,
    '/reading/': SideBar.reading,
    '/photos/': SideBar.photos,
    '/videos/': SideBar.videos,
}

export default sidebar
