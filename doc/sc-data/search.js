let api = [];
api.push({
    alias: 'CommonController',
    order: '1',
    link: '通用接口',
    desc: '通用接口',
    list: []
})
api[0].list.push({
    order: '1',
    desc: '获取通用枚举',
});
api[0].list.push({
    order: '2',
    desc: '获取所有省份列表',
});
api[0].list.push({
    order: '3',
    desc: '获取省份下的城市列表',
});
api[0].list.push({
    order: '4',
    desc: '获取城市下的区县列表',
});
api[0].list.push({
    order: '5',
    desc: '获取所有城市列表',
});
api[0].list.push({
    order: '6',
    desc: '获取所有省-市树',
});
api.push({
    alias: 'ClientController',
    order: '2',
    link: '后台-客户管理',
    desc: '后台-客户管理',
    list: []
})
api[1].list.push({
    order: '1',
    desc: '客户列表',
});
api[1].list.push({
    order: '2',
    desc: '导出客户列表',
});
api[1].list.push({
    order: '3',
    desc: '客户详情',
});
api[1].list.push({
    order: '4',
    desc: '清除提示',
});
api[1].list.push({
    order: '5',
    desc: '调整归属顾问',
});
api[1].list.push({
    order: '6',
    desc: '编辑基本资料',
});
api[1].list.push({
    order: '7',
    desc: '校验手机号重复',
});
api[1].list.push({
    order: '8',
    desc: '获取记录列表',
});
api[1].list.push({
    order: '9',
    desc: '获取记录详情',
});
api[1].list.push({
    order: '10',
    desc: '修正客户资料',
});
api.push({
    alias: 'AppletClientController',
    order: '3',
    link: '跟客宝-客户管理',
    desc: '跟客宝-客户管理',
    list: []
})
api[2].list.push({
    order: '1',
    desc: '客户列表(含搜索)',
});
api[2].list.push({
    order: '2',
    desc: '客户详情(含tag)',
});
api[2].list.push({
    order: '3',
    desc: '修改备注',
});
api[2].list.push({
    order: '4',
    desc: '完善资料',
});
api[2].list.push({
    order: '5',
    desc: '新增跟进',
});
api.push({
    alias: 'ToolController',
    order: '4',
    link: '工具箱',
    desc: '工具箱',
    list: []
})
api[3].list.push({
    order: '1',
    desc: '模拟推送客户',
});
api.push({
    alias: 'error',
    order: '5',
    link: 'error_code_list',
    desc: '错误码列表',
    list: []
})
api.push({
    alias: 'dict',
    order: '6',
    link: 'dict_list',
    desc: '数据字典',
    list: []
})
api[5].list.push({
    order: '1',
    desc: '获取来源',
});
api[5].list.push({
    order: '2',
    desc: '获取方式',
});
api[5].list.push({
    order: '3',
    desc: '标记',
});
api[5].list.push({
    order: '4',
    desc: '看房状态',
});
api[5].list.push({
    order: '5',
    desc: '客户意向',
});
api[5].list.push({
    order: '6',
    desc: '获取类型',
});
api[5].list.push({
    order: '7',
    desc: '排序方式',
});
api[5].list.push({
    order: '8',
    desc: '性别',
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