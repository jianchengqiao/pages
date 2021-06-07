let api = [];
api.push({
    alias: 'DocStart',
    order: '1',
    link: '调用说明',
    desc: '调用说明',
    list: []
})
api[0].list.push({
    order: '1',
    desc: '后台接口调用说明',
});
api[0].list.push({
    order: '2',
    desc: '小程序接口调用说明',
});
api[0].list.push({
    order: '3',
    desc: 'Postman导入本文档',
});
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
api[1].list.push({
    order: '2',
    desc: '根据定位返回城市',
});
api[1].list.push({
    order: '3',
    desc: '获取tabbar配置信息',
});
api.push({
    alias: 'AppletHomeController',
    order: '3',
    link: '小程序-首页',
    desc: '小程序-首页',
    list: []
})
api[2].list.push({
    order: '1',
    desc: '首页模块列表',
});
api[2].list.push({
    order: '2',
    desc: '基础配置信息',
});
api[2].list.push({
    order: '3',
    desc: '视觉配置主题',
});
api[2].list.push({
    order: '4',
    desc: '功能管理弹窗开关',
});
api.push({
    alias: 'AppletEstateController',
    order: '4',
    link: '小程序-楼盘',
    desc: '小程序-楼盘',
    list: []
})
api[3].list.push({
    order: '1',
    desc: '楼盘列表（含搜索）',
});
api[3].list.push({
    order: '2',
    desc: '楼盘首页集合信息',
});
api[3].list.push({
    order: '3',
    desc: '楼盘头信息',
});
api[3].list.push({
    order: '4',
    desc: '楼盘详细信息',
});
api[3].list.push({
    order: '5',
    desc: '周边配套信息',
});
api[3].list.push({
    order: '6',
    desc: '楼盘户型列表',
});
api[3].list.push({
    order: '7',
    desc: '楼盘动态列表',
});
api[3].list.push({
    order: '8',
    desc: '楼盘相册列表',
});
api.push({
    alias: 'CommonController',
    order: '5',
    link: '后台-通用',
    desc: '后台-通用',
    list: []
})
api[4].list.push({
    order: '1',
    desc: '楼盘列表(已发布的)',
});
api[4].list.push({
    order: '2',
    desc: '城市列表(有楼盘的&有权限的)',
});
api[4].list.push({
    order: '3',
    desc: '链接组件-获取树',
});
api[4].list.push({
    order: '4',
    desc: '链接组件-解析url',
});
api.push({
    alias: 'A1EstateController',
    order: '6',
    link: '后台-楼盘基础管理',
    desc: '后台-楼盘基础管理',
    list: []
})
api[5].list.push({
    order: '1',
    desc: '楼盘-获取物业类型枚举',
});
api[5].list.push({
    order: '2',
    desc: '楼盘-创建楼盘',
});
api[5].list.push({
    order: '3',
    desc: '楼盘-修改基本信息',
});
api[5].list.push({
    order: '4',
    desc: '楼盘-获取基本信息',
});
api[5].list.push({
    order: '5',
    desc: '楼盘-修改销售信息',
});
api[5].list.push({
    order: '6',
    desc: '楼盘-获取销售信息',
});
api[5].list.push({
    order: '7',
    desc: '楼盘-获取楼盘列表',
});
api[5].list.push({
    order: '8',
    desc: '楼盘-删除楼盘',
});
api[5].list.push({
    order: '9',
    desc: '楼盘-发布/停止发布',
});
api[5].list.push({
    order: '10',
    desc: '户型-创建户型',
});
api[5].list.push({
    order: '11',
    desc: '户型-修改户型',
});
api[5].list.push({
    order: '12',
    desc: '户型-删除户型',
});
api[5].list.push({
    order: '13',
    desc: '户型-获取户型列表',
});
api[5].list.push({
    order: '14',
    desc: '户型-排序户型',
});
api[5].list.push({
    order: '15',
    desc: '相册-获取相册类别枚举',
});
api[5].list.push({
    order: '16',
    desc: '相册-创建相册图片',
});
api[5].list.push({
    order: '17',
    desc: '相册-创建相册图片(批量)',
});
api[5].list.push({
    order: '18',
    desc: '相册-删除相册图片',
});
api[5].list.push({
    order: '19',
    desc: '相册-获取相册图片列表',
});
api[5].list.push({
    order: '20',
    desc: '相册-排序相册图片',
});
api[5].list.push({
    order: '21',
    desc: '动态-创建动态',
});
api[5].list.push({
    order: '22',
    desc: '动态-修改动态',
});
api[5].list.push({
    order: '23',
    desc: '动态-删除动态',
});
api[5].list.push({
    order: '24',
    desc: '动态-获取动态列表',
});
api.push({
    alias: 'A2DisplayRuleController',
    order: '7',
    link: '后台-楼盘展示规则',
    desc: '后台-楼盘展示规则',
    list: []
})
api[6].list.push({
    order: '1',
    desc: '修改展示数量',
});
api[6].list.push({
    order: '2',
    desc: '获取展示规则列表',
});
api[6].list.push({
    order: '3',
    desc: '排序楼盘',
});
api[6].list.push({
    order: '4',
    desc: '获取排序楼盘列表',
});
api.push({
    alias: 'B1AuthAuditController',
    order: '8',
    link: '后台-小程序管理-提审发布',
    desc: '后台-小程序管理-提审发布',
    list: []
})
api[7].list.push({
    order: '1',
    desc: '基础信息',
});
api[7].list.push({
    order: '2',
    desc: '请求授权',
});
api[7].list.push({
    order: '3',
    desc: '提审',
});
api[7].list.push({
    order: '4',
    desc: '撤回提审',
});
api[7].list.push({
    order: '5',
    desc: '提审发布记录',
});
api.push({
    alias: 'B2ThemeController',
    order: '9',
    link: '后台-小程序管理-视觉配置',
    desc: '后台-小程序管理-视觉配置',
    list: []
})
api[8].list.push({
    order: '1',
    desc: '保存主题',
});
api[8].list.push({
    order: '2',
    desc: '获取主题',
});
api.push({
    alias: 'B3HomeViewController',
    order: '10',
    link: '后台-小程序管理-页面配置-首页模块',
    desc: '后台-小程序管理-页面配置-首页模块',
    list: []
})
api[9].list.push({
    order: '1',
    desc: '模板枚举',
});
api[9].list.push({
    order: '2',
    desc: '列表',
});
api[9].list.push({
    order: '3',
    desc: '编辑',
});
api[9].list.push({
    order: '4',
    desc: '展示/隐藏',
});
api[9].list.push({
    order: '5',
    desc: '排序',
});
api.push({
    alias: 'B4MenuController',
    order: '11',
    link: '后台-小程序管理-页面配置-导航菜单',
    desc: '后台-小程序管理-页面配置-导航菜单',
    list: []
})
api[10].list.push({
    order: '1',
    desc: '模板枚举',
});
api[10].list.push({
    order: '2',
    desc: '列表',
});
api[10].list.push({
    order: '3',
    desc: '创建',
});
api[10].list.push({
    order: '4',
    desc: '修改',
});
api[10].list.push({
    order: '5',
    desc: '展示/隐藏',
});
api[10].list.push({
    order: '6',
    desc: '删除',
});
api[10].list.push({
    order: '7',
    desc: '排序',
});
api.push({
    alias: 'B5TabbarController',
    order: '12',
    link: '后台-小程序管理-页面配置-底部导航',
    desc: '后台-小程序管理-页面配置-底部导航',
    list: []
})
api[11].list.push({
    order: '1',
    desc: '列表',
});
api[11].list.push({
    order: '2',
    desc: '保存并提审',
});
api.push({
    alias: 'B6SwitchController',
    order: '13',
    link: '后台-小程序管理-功能管理',
    desc: '后台-小程序管理-功能管理',
    list: []
})
api[12].list.push({
    order: '1',
    desc: '获取',
});
api[12].list.push({
    order: '2',
    desc: '修改',
});
api.push({
    alias: 'LinkController',
    order: '14',
    link: '后台-小程序管理-链接组件',
    desc: '后台-小程序管理-链接组件',
    list: []
})
api[13].list.push({
    order: '1',
    desc: '链接组件-获取树',
});
api[13].list.push({
    order: '2',
    desc: '链接组件-解析url',
});
api.push({
    alias: 'InnerApiController',
    order: '15',
    link: '内部服务api(前端禁用)',
    desc: '内部服务API(前端禁用)',
    list: []
})
api[14].list.push({
    order: '1',
    desc: '楼盘简单信息',
});
api[14].list.push({
    order: '2',
    desc: '城市下楼盘数量(批量)',
});
api[14].list.push({
    order: '3',
    desc: '后台楼盘列表信息(分页)',
});
api[14].list.push({
    order: '4',
    desc: '集团的全部楼盘列表',
});
api[14].list.push({
    order: '5',
    desc: '集团-小程序绑定关系(全部)',
});
api[14].list.push({
    order: '6',
    desc: '集团-小程序(groupId-&gt;appid)',
});
api[14].list.push({
    order: '7',
    desc: '集团-小程序(appid-&gt;groupId)',
});
api[14].list.push({
    order: '8',
    desc: '顾问分享楼盘信息',
});
api.push({
    alias: 'KafkaDoc',
    order: '16',
    link: 'kafka消息文档',
    desc: 'Kafka消息文档',
    list: []
})
api[15].list.push({
    order: '1',
    desc: '楼盘信息变更(auth)',
});
api[15].list.push({
    order: '2',
    desc: '楼盘信息变更(crm)',
});
api[15].list.push({
    order: '3',
    desc: '楼盘操作日志',
});
api.push({
    alias: 'ToolController',
    order: '17',
    link: '工具箱',
    desc: '工具箱',
    list: []
})
api[16].list.push({
    order: '1',
    desc: '模拟审核通过',
});
api[16].list.push({
    order: '2',
    desc: '模拟审核驳回',
});
api[16].list.push({
    order: '3',
    desc: '获取体验版二维码',
});
api[16].list.push({
    order: '4',
    desc: '添加体验成员',
});
api[16].list.push({
    order: '5',
    desc: '提交代码到体验版',
});
api[16].list.push({
    order: '6',
    desc: '迭代发版提审小程序',
});
api[16].list.push({
    order: '7',
    desc: '顾问小程序授权',
});
api.push({
    alias: 'error',
    order: '18',
    link: 'error_code_list',
    desc: '错误码列表',
    list: []
})
api.push({
    alias: 'dict',
    order: '19',
    link: 'dict_list',
    desc: '数据字典',
    list: []
})
api[18].list.push({
    order: '1',
    desc: '相册类型',
});
api[18].list.push({
    order: '2',
    desc: '首页模块模板',
});
api[18].list.push({
    order: '3',
    desc: '导航菜单模板',
});
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