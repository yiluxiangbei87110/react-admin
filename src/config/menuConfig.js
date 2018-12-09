const menuList = [{
        title: '首页',
        key: '/admin/home'
    },
    {
        title: '基础组建',
        key: '/admin/ui',
        children: [{
                title: '按钮',
                key: '/admin/ui/buttons'
            },
            {
                title: '弹框',
                key: '/admin/ui/modals'
            },
            {
                title: '图片',
                key: '/admin/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        key: '/admin/form',
        children: [{
                title: '基础表单',
                key: '/admin/form/basicForm'
            },
            {
                title: '登录',
                key: '/admin/form/login'
            },
            {
                title: '注册',
                key: '/admin/form/register'

            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table/basic'
    },
    {
        title: '编辑器',
        key: '/admin/editor'
    },
    {
        title: 'ECharts',
        key: '/admin/charts',
        children: [{
                title: '饼图',
                key: '/admin/charts/pie'
            }, {
                title: '柱状图',
                key: '/admin/charts/bar'
            }, {
                title: '柱状图2',
                key: '/admin/charts/bar_2'
            }, , {
                title: '柱状图3',
                key: '/admin/charts/bar_3'
            }, {
                title: '漏斗图',
                key: '/admin/charts/funnel'
            },
            {
                title: '象形柱图',
                key: '/admin/charts/pictorialBar'
            }, {
                title: '地图',
                key: '/admin/charts/china'
            }
        ]
    }, {
        title: 'redux-thunk',
        key: '/admin/redux/thunk'
    },
    {
        title: 'redux-saga',
        key: '/admin/redux/saga'
    }
];
export default menuList;