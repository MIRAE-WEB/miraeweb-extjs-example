
Ext.define('MyApp.view.hr.user.tab.career.grid.UserCareerGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-career-grid',
    requires: [
        'MyApp.view.hr.user.tab.career.grid.UserCareerGridController'
    ],
    controller : 'user-career-grid',
    bind : '{userCareerStore}',
    columns : [
        {text : '회사명', dataIndex :'company'},
        {text : '재직상태', dataIndex :'employeeStateCode'},
        {text : '직급', dataIndex :'rank'},
        {text : '입사일', dataIndex :'careerStartDate'},
        {text : '퇴사일', dataIndex :'careerEndDate'}
    ]
});
