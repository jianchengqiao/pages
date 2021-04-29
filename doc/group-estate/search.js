let api = [];
api.push({
    alias: 'DocStart',
    order: '1',
    link: '更新日志',
    desc: '更新日志',
    list: []
})
api.push({
    alias: 'AppletCommonController',
    order: '2',
    link: '小程序-通用',
    desc: '小程序-通用',
    list: []
})
api[1].list.push({
    order: '1',
    desc: '首字母分组的城市列表',
});
api.push({
    alias: 'AppletEstateController',
    order: '3',
    link: '小程序-首页楼盘相关',
    desc: '小程序-首页楼盘相关',
    list: []
})
api[2].list.push({
    order: '1',
    desc: '楼盘列表（含搜索）',
});
api[2].list.push({
    order: '2',
    desc: '楼盘首页集合信息',
});
api[2].list.push({
    order: '3',
    desc: '楼盘头信息',
});
api[2].list.push({
    order: '4',
    desc: '楼盘详细信息',
});
api[2].list.push({
    order: '5',
    desc: '周边配套信息',
});
api[2].list.push({
    order: '6',
    desc: '楼盘户型列表',
});
api[2].list.push({
    order: '7',
    desc: '楼盘动态列表',
});
api[2].list.push({
    order: '8',
    desc: '楼盘相册列表',
});
api.push({
    alias: 'EstateController',
    order: '4',
    link: '后台-楼盘基础管理-楼盘',
    desc: '后台-楼盘基础管理-楼盘',
    list: []
})
api[3].list.push({
    order: '1',
    desc: '获取物业类型枚举',
});
api[3].list.push({
    order: '2',
    desc: '创建楼盘',
});
api[3].list.push({
    order: '3',
    desc: '修改基础信息',
});
api[3].list.push({
    order: '4',
    desc: '修改销售信息',
});
api[3].list.push({
    order: '5',
    desc: '获取基础信息',
});
api[3].list.push({
    order: '6',
    desc: '获取销售信息',
});
api[3].list.push({
    order: '7',
    desc: '获取楼盘列表',
});
api[3].list.push({
    order: '8',
    desc: '删除楼盘',
});
api[3].list.push({
    order: '9',
    desc: '发布/停止发布',
});
api[3].list.push({
    order: '10',
    desc: '排序楼盘',
});
api[3].list.push({
    order: '11',
    desc: '排序的列表',
});
api.push({
    alias: 'LayoutController',
    order: '5',
    link: '后台-楼盘基础管理-户型',
    desc: '后台-楼盘基础管理-户型',
    list: []
})
api[4].list.push({
    order: '1',
    desc: '创建户型',
});
api[4].list.push({
    order: '2',
    desc: '修改户型',
});
api[4].list.push({
    order: '3',
    desc: '删除户型',
});
api[4].list.push({
    order: '4',
    desc: '获取户型列表',
});
api[4].list.push({
    order: '5',
    desc: '排序户型',
});
api.push({
    alias: 'AlbumController',
    order: '6',
    link: '后台-楼盘基础管理-相册',
    desc: '后台-楼盘基础管理-相册',
    list: []
})
api[5].list.push({
    order: '1',
    desc: '获取相册类别枚举',
});
api[5].list.push({
    order: '2',
    desc: '创建相册图片',
});
api[5].list.push({
    order: '3',
    desc: '创建相册图片(批量)',
});
api[5].list.push({
    order: '4',
    desc: '删除相册图片',
});
api[5].list.push({
    order: '5',
    desc: '获取相册图片列表',
});
api[5].list.push({
    order: '6',
    desc: '排序相册图片',
});
api.push({
    alias: 'DynamicController',
    order: '7',
    link: '后台-楼盘基础管理-动态',
    desc: '后台-楼盘基础管理-动态',
    list: []
})
api[6].list.push({
    order: '1',
    desc: '创建动态',
});
api[6].list.push({
    order: '2',
    desc: '修改动态',
});
api[6].list.push({
    order: '3',
    desc: '删除动态',
});
api[6].list.push({
    order: '4',
    desc: '获取动态列表',
});
api.push({
    alias: 'DisplayRuleController',
    order: '8',
    link: '后台-楼盘展示规则',
    desc: '后台-楼盘展示规则',
    list: []
})
api[7].list.push({
    order: '1',
    desc: '修改展示规则-展示数量',
});
api[7].list.push({
    order: '2',
    desc: '获取展示规则列表',
});
api.push({
    alias: 'EstateApiController',
    order: '9',
    link: '内部服务api(前端禁用)',
    desc: '内部服务API(前端禁用)',
    list: []
})
api[8].list.push({
    order: '1',
    desc: '楼盘列表(id, name, cityId, status)',
});
api[8].list.push({
    order: '2',
    desc: '城市下楼盘数量(批量)',
});
api.push({
    alias: 'KafkaDoc',
    order: '10',
    link: 'kafka消息文档',
    desc: 'Kafka消息文档',
    list: []
})
api[9].list.push({
    order: '1',
    desc: '楼盘新增删除(estate-add-del)',
});
api[9].list.push({
    order: '2',
    desc: '楼盘操作日志(operation-log)',
});
api.push({
    alias: 'error',
    order: '11',
    link: 'error_code_list',
    desc: '错误码列表',
    list: []
})
api.push({
    alias: 'dict',
    order: '12',
    link: 'dict_list',
    desc: '数据字典',
    list: []
})
document.onkeydown = keyDownSearch;
function keyDownSearch(e) {
    const theEvent = e;
    const code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
        const search = document.getElementById('search');
        const searchValue = search.value;
        let searchArr = [];
        for (let i = 0; i < api.length; i++) {
            let apiData = api[i];
            const desc = apiData.desc;
            if (desc.indexOf(searchValue) > -1) {
                searchArr.push({
                    order: apiData.order,
                    desc: apiData.desc,
                    link: apiData.link,
                    list: apiData.list
                });
            } else {
                let methodList = apiData.list || [];
                let methodListTemp = [];
                for (let j = 0; j < methodList.length; j++) {
                    const methodData = methodList[j];
                    const methodDesc = methodData.desc;
                    if (methodDesc.indexOf(searchValue) > -1) {
                        methodListTemp.push(methodData);
                        break;
                    }
                }
                if (methodListTemp.length > 0) {
                    const data = {
                        order: apiData.order,
                        desc: apiData.desc,
                        link: apiData.link,
                        list: methodListTemp
                    };
                    searchArr.push(data);
                }
            }
        }
        let html;
        if (searchValue == '') {
            const liClass = "";
            const display = "display: none";
            html = buildAccordion(api,liClass,display);
            document.getElementById('accordion').innerHTML = html;
        } else {
            const liClass = "open";
            const display = "display: block";
            html = buildAccordion(searchArr,liClass,display);
            document.getElementById('accordion').innerHTML = html;
        }
        const Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            const links = this.el.find('.dd');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
        };
        Accordion.prototype.dropdown = function (e) {
            const $el = e.data.el;
            $this = $(this), $next = $this.next();
            $next.slideToggle();
            $this.parent().toggleClass('open');
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp("20").parent().removeClass('open');
            }
        };
        new Accordion($('#accordion'), false);
    }
}

function buildAccordion(apiData, liClass, display) {
    let html = "";
    let doc;
    if (apiData.length > 0) {
        for (let j = 0; j < apiData.length; j++) {
            html += '<li class="'+liClass+'">';
            html += '<a class="dd" href="#_' + apiData[j].link + '">' + apiData[j].order + '.&nbsp;' + apiData[j].desc + '</a>';
            html += '<ul class="sectlevel2" style="'+display+'">';
            doc = apiData[j].list;
            for (let m = 0; m < doc.length; m++) {
                html += '<li><a href="#_' + apiData[j].order + '_' + doc[m].order + '_' + doc[m].desc + '">' + apiData[j].order + '.' + doc[m].order + '.&nbsp;' + doc[m].desc + '</a> </li>';
            }
            html += '</ul>';
            html += '</li>';
        }
    }
    return html;
}