const images = [
    {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/GTo4mA1bUsiekrx.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/gU2daXEbFKHsCGY.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/ycBPrd2ql7k8fto.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/klqtuGXr3g7OLDE.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/BjyqERAu68WoiMN.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/7aSlRenGugsUxTq.jpg'
    },
    {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/gdpbsG29LPoqKIE.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/92FVksyEip4gLlB.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/J8dBuDFGLvAgOSC.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/rvHbFYjeuplnRwS.jpg'
    }, {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/IquNYnUevZOBfER.jpg'
    },
    {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/Ep6akXbhDfRFnuz.jpg'
    },
    {
        name: 'IU Pic',
        url: 'https://s2.loli.net/2023/08/21/Iflj6Hwc2ZDJ9PT.jpg'
    },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/f3uEUMBRkSyotpI.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/85oiRDTf6Hcg9LG.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/O27MFZUbkNPzKox.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/De23N7miLwJRTu9.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/AtRY7pqgJTBFnDj.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/ljeMwLmBKEfk9X5.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/sqSRacHVerOn9WZ.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/2Qmk6qgEAC5oPi7.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/I5VlNOfur2UZGPR.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/nUjfkt1TZIJ8Nx9.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/vHA2uqh67VYyXdI.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/JkF9mw2IRW7VvhZ.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/ANZHom6kibL9d8w.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/7HOW2q3BkCwtRAT.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/xPE5kqjaYsnXDQd.jpg'
    // },
    //  {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/ysVKxCJXqDNkz4P.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/UcAlFtys2Gdb84W.jpg'
    // }, 
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/bOhnsY48tACDype.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/kT7Y8s1y2taOw9I.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/V6oRGiwhOLIHydX.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/6U1h4ND2JlnSgOZ.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/v8jVzIN2ByU5eqd.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/v8jVzIN2ByU5eqd.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/OETmpiXxeSlBJqY.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/PTLl48mkg7vHARj.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/EL2QSwjZvC7k3OT.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/pK96wQWiVXEnZLY.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/UkTjwZ38mSCbKsz.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/Mc1Rdq4JujPUilO.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/DjpANbLfas93EPI.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/mtN9h73Ksie1Wjo.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/lDQHRj4vk1Jn85V.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/Yu47MGAn59pCfVg.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/E3qUMSAiOIPoFkb.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/eFCkpG24OrvHTwK.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/5otxIj1SY7mzR8c.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/eFCkpG24OrvHTwK.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/5otxIj1SY7mzR8c.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/FOZq56UTKhmAYG2.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/12/XOv18JH7LT4Drdg.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/kx5iaCy7svTKrEo.jpg'
    // },
    // {
    //     name: 'IU Pic',
    //     url: 'https://s2.loli.net/2023/03/13/D4v8PVtNn1LfXmS.jpg'
    // },
]

/**
 * 
 * 使用步骤
 * https://github.com/yuncode/yunFlow/tree/master
 * 1. 创建实例
 * let picsObj = new PicList(box,config) 
 * config 为 { standHeight,gap, fail } //默认为{300,5,false}
 * 
 * 2. 添加图片；
 * picUrls 为图片地址数组,  true表示清空后插入，false（默认）为在box里追加。 after可选，为插入图片后的回调。 
 * 
 * picsObj.addPics(picUrls,true).after(function(wraps){// wraps 为图片的父级div数组 })
 * 
 * 3. box清空图片
 * picsObj.clearPics()
 * 
 * 4. 销毁, box 未清空picsObj.destory()
 * 
 * 5. box尺寸变动时，布局会混乱，需手动调用，重新计算图片布局
 * picsObj.resize()
 */
class MacoImage {
    // box 为容器 standHeight：基准高度 gap：间隔，pre：预览图，fail：失败占位图
    constructor(box, config) {
        this.box = box
        this.config = config || {}
        this.pics = [] // 所有图片
        this.gap = config.gap || 5
        this.standHeight = config.standHeight || 300
        this.fail = config.fail || false
        this.boxWidth = this.getWidth(box)
        this.left = [] // 最后一行的图片
        this.lastSecLineRate = 0
        this.queues = []
        this.maxWidth = 600
        this.picChecks = []
        this.queueObj = { timer: null, over: false, pics: [], picWraps: [] }
    }


    resize(delFlag) {
        let isWidthChange = readyResize(delFlag)
        if (isWidthChange) this.changeLefts() // 修改一行高度


    }

    addPics(picUrls, isClear = false) {

        if (isClear) {
            this.clearPics();
        }

        // let queueObj = 
        this.queues.push(this.queueObj);

        picUrls.forEach((pic) => {
            const image = document.createElement('img')
            this.typeOf(pic.url) === 'string' ? image.url = pic : image.url = 'kong'
            this.pics.push(image)
            this.picChecks.push(image)
        });

        setTimeout(() => {
            this.getWH()
        }, 0);

        return {
            after: (fn) => {
                if (fn) {
                    queueObj.fn = fn
                }
            }
        }
    }
    getWH() {
        this.picChecks.forEach((img, index) => {
            img.ogRate = img.width / img.height;
            img.ogWidth = img.width;
            img.ogHeight = img.height;
            this.picChecks.splice(index, 1);
        })
        this.queueObj.over = true; //图片已就绪，等待插入
        this.queueObj.pics = this.pics;
        this.excuteQueue();
        return;

    }
    deletePic(image) {
        this.pics.forEach((img, index) => {
            if (img == image) {
                this.pics.splice(index, 1);
                return;
            }
        })
        this.lefts.forEach((img, index) => {
            if (img == image) {
                this.lefts.splice(index, 1);
                return;
            }
        })

        this.box.removeChild(image.parentNode);

        this.resize(true);

    }
    clearPics() {
        this.box.innerHTML = '';
        this.pics = [];
        this.lefts = [];
        this.queues.forEach((queueObj) => {
            clearTimeout(queueObj.timer)
        })
        this.queues = [];
        this.boxWidth = this.getWidth(this.box);
    }
    getWidth(obj) {
        return obj.clientWidth - 2 // 修正clientWidth宽度
    }
    changeLefts() {
        //首先让遗留的和倒数第二行高度相同，但如果高度相同后,宽度超过boxWidth 那么就走else       

        let boxWidth = this.getWidth(this.box);

        let rate = this.lastSecLineRate;

        if (rate == 0) { //图片少不足一行，则标准高度，不做处理
            return;
        }
        let totalWidh = 0;

        this.lefts.forEach((item) => {
            totalWidh += ((item.wWidth / rate) + this.gap);
        })


        if (totalWidh > boxWidth * 2 / 3) {
            totalWidh = 0;
            this.lefts.forEach((pic) => {
                totalWidh += (pic.wWidth + this.gap);
            })
            rate = (totalWidh - this.lefts.length * this.gap) / (boxWidth - this.lefts.length * this.gap);
        }

        this.lefts.forEach((item) => {
            item.wWidth = item.wWidth / rate;
            item.wHeight = item.wWidth / item.wRate;

            item.parentNode.style.maxWidth = this.boxWidth - this.gap + 'px'
            item.parentNode.style.width = item.wWidth + 'px';
            item.parentNode.style.height = item.wHeight + 'px';
            item.parentNode.style.lineHeight = item.wHeight + 'px';
        })
    }
    excuteQueue() {
        let next = false;
        this.queues.forEach((queueObj, index) => {
            if (index == 0 && queueObj.over) {
                this.readys(queueObj); //插入box
                queueObj.fn && queueObj.fn(queueObj.picWraps); //执行回调;
                this.readyResize(); // 防止撑出滚动条，需重新监测
                next = true;
                return;
            } else {
                return;
            }
        })
        if (next) {
            this.queues.shift();

            if (this.queues.length == 0) { // 最后一批图片已插入， 对lefts 里的图片高度做试探性放大，横向铺满。

                this.changeLefts();
            } else {
                this.excuteQueue()
            }
        }
    }

    destory() {
        this.pics = [];
        this.lefts = [];
        this.queues.forEach((queueObj) => {
            clearTimeout(queueObj.timer)
        })
        this.queues = [];

        this.addPics = null;
        this.boxWidth = this.getWidth(this.box);
        window.removeEventListener('resize', this.resize);
    }

    readys(queueObj) {
        let pics = []

        queueObj.pics.forEach((pic) => { //对拷贝数组做修改。原pics数组不被修改。
            this.pics.push(pic); //将该组的pics 插入实例的pics 中。
            pics.push(pic);
        })

        for (let i = 0, length = this.lefts.length; i < length; i++) { //添加上次残留
            pics.unshift(this.lefts[length - i - 1]);
        }


        let standHeight = this.standHeight;
        let boxWidth = this.getWidth(this.box); //内容宽
        pics.forEach((pic) => {
            if (pic.ogWidth < standHeight || pic.ogHeight < standHeight) {
                pic.wRate = 1;
                pic.noScale = true;
            } else {
                pic.wRate = pic.ogRate;
                pic.noScale = false;
            }

            let width = pic.wRate * standHeight;

            if (width < 100) {
                pic.noScale = true;
                width = 100;
                pic.wRate = width / standHeight;
            }

            if (width > this.maxWidth) {
                width = this.maxWidth
                pic.wRate = width / standHeight;
            }

            pic.wWidth = width;
            pic.wHeight = pic.wWidth / pic.wRate;

        })


        let temp = [];
        let totalWidh = 0;

        pics.forEach((pic) => {
            totalWidh += (pic.wWidth + this.gap);
            if (totalWidh > boxWidth) {

                if (temp.length == 1 && temp[0].noScale && temp[0].wWidth < (2 * boxWidth / 3)) { // 一张小图 和长图碰撞，则放一行。防止只有小图占一行导致布局丑陋

                    pic.wWidth = boxWidth - temp[0].wWidth - 2 * this.gap;

                    temp = [];
                    totalWidh = 0;

                } else {
                    let rate = (totalWidh - pic.wWidth - this.gap - temp.length * this.gap) / (boxWidth - temp.length * this.gap);

                    this.lastSecLineRate = rate;
                    temp.forEach((item) => {
                        item.wWidth = item.wWidth / rate;
                        item.wHeight = item.wWidth / item.wRate;
                    })

                    temp = [pic];
                    totalWidh = pic.wWidth + this.gap;

                }

                return;
            } else {
                temp.push(pic);
            }
        })

        for (let i = 0, length = this.lefts.length; i < length; i++) { // 移出上次残留, 并且设置父级的宽高
            pics.shift();
            let item = this.lefts[i];
            item.parentNode.style.maxWidth = this.boxWidth - this.gap + 'px'
            item.parentNode.style.width = item.wWidth + 'px';
            item.parentNode.style.height = item.wHeight + 'px';
            item.parentNode.style.lineHeight = item.wHeight + 'px';
        }

        this.lefts = [];
        temp.forEach((pic) => { //更新本次残留
            this.lefts.push(pic)
        })

        pics.forEach((pic) => {
            let wrap = document.createElement('div');
            wrap.appendChild(pic);
            wrap.style.display = "inline-block";
            wrap.style.textAlign = "center";
            wrap.style.verticalAlign = "top";
            wrap.style.padding = this.gap / 2 + 'px';
            wrap.style.width = pic.wWidth + 'px';
            wrap.style.height = pic.wHeight + 'px';
            wrap.style.lineHeight = pic.wHeight + 'px';
            wrap.style.maxWidth = this.boxWidth - this.gap + 'px'
            wrap.style.fontSize = '0px';
            pic.style.verticalAlign = "middle";
            pic.style.maxWidth = '100%';
            pic.style.maxHeight = '100%';

            this.box.appendChild(wrap);
            queueObj.picWraps.push(wrap);
        })
    }

    readyResize(delFlag) {
        if (!this.pics.length) return;
        let width = this.getWidth(this.box);

        if (width !== this.boxWidth || delFlag) {
            this.boxWidth = width;
            let pics = this.pics;
            let standHeight = this.standHeight;
            let boxWidth = this.boxWidth; //内容宽

            pics.forEach((pic) => {
                let width = pic.wRate * standHeight;
                pic.wWidth = width;
                pic.wHeight = pic.wWidth / pic.wRate;
            })
            let temp = [];
            let totalWidh = 0;
            pics.forEach((pic) => {
                totalWidh += (pic.wWidth + this.gap);
                if (totalWidh > boxWidth) {

                    if (temp.length == 1 && temp[0].noScale && temp[0].wWidth < (2 * boxWidth / 3)) {

                        pic.wWidth = boxWidth - temp[0].wWidth - 2 * this.gap;
                        temp.push(pic);

                        temp.forEach((item) => {
                            item.parentNode.style.maxWidth = this.boxWidth - this.gap + 'px';
                            item.parentNode.style.width = item.wWidth + 'px';
                            item.parentNode.style.height = item.wHeight + 'px';
                            item.parentNode.style.lineHeight = item.wHeight + 'px';
                        })
                        temp = [];
                        totalWidh = 0;

                    } else {
                        let rate = (totalWidh - pic.wWidth - this.gap - temp.length * this.gap) / (boxWidth - temp.length * this.gap);

                        this.lastSecLineRate = rate;
                        temp.forEach((item) => {
                            item.wWidth = item.wWidth / rate;
                            item.wHeight = item.wWidth / item.wRate;
                            item.parentNode.style.maxWidth = this.boxWidth - this.gap + 'px';
                            item.parentNode.style.width = item.wWidth + 'px';
                            item.parentNode.style.height = item.wHeight + 'px';
                            item.parentNode.style.lineHeight = item.wHeight + 'px';
                        })

                        temp = [pic];
                        totalWidh = pic.wWidth + this.gap;
                    }
                    return;
                } else {
                    temp.push(pic);
                }
            })
            this.lefts = [];
            temp.forEach((pic) => { //更新本次残留
                this.lefts.push(pic)
                pic.parentNode.style.maxWidth = this.boxWidth - this.gap + 'px'
                pic.parentNode.style.width = pic.wWidth + 'px';
                pic.parentNode.style.height = pic.wHeight + 'px';
                pic.parentNode.style.lineHeight = pic.wHeight + 'px';
            })
            let width = this.getWidth(this.box);
            if (this.boxWidth < width) {
                this.boxWidth = width;
            } else {
                this.readysResize();
            }
            return true;
        } else {
            return;
        }
    }


    typeOf(str) {
        return Object.prototype.toString.call(str).slice(8, -1).toLowerCase()
    }

    // 第二种方法
    typeOf2(str) {
        if (str === 'null') return 'null'
        return typeof (str) === 'object' ? {
            '[object Object]': "Object",
            '[object Array]': "Array",
            '[object Number]': "o-Number",
            '[object String]': "o-String",
            '[object Boolean]': "o-Boolean",
        }[str.call(Object.prototype.toString)] : typeof (str)
    }
}
export {
    images,
    MacoImage
}