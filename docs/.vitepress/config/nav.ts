import type { DefaultTheme } from 'vitepress'
const nav: DefaultTheme.Config['nav'] = [
    
    {
        text: 'Work',
        items: [
            {
                text: 'HTML/CSS/JS/TS',
                link: '/front/basic/'
            },
            {
                text: '工程化',
                link: '/front/engineering/'
            },
            {
                text: 'Vue/React',
                link: '/front/frame/'
            },
            {
                text: 'Node',
                link: '/front/node/'
            },
            {
                text: 'Electron/Other',
                link: '/tech/otherside/'
            },
            {
                text: '算法',
                link: '/tech/arithmetic/'
            },
            {
                text: '设计模式',
                link: '/tech/designpattern/'
            },
        ],
    },
    {
        text: 'Life',
        items: [
            {
                text: '看看书',
                link: '/library/reading/'
            },
            {
                text: '拍照片',
                link: '/library/photos/'
            },
            {
                text: '录视频',
                link: '/library/videos/'
            },
        ],
    },
    {
        text: 'FindMe',
        items: [
            {
                text: '关于',
                link: '/about/'
            },
            {
                text: 'TODO 指向其它',
                link: '/about/Todo'
            },
        ],
    }
]

export default nav