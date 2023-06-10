
Ext.define('MyApp.view.hr.user.tab.education.grid.UserEducationGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-education-grid',
    requires: [
        'MyApp.view.hr.user.tab.education.grid.UserEducationGridController'
    ],
    bind : '{userEducationStore}',
    controller: 'user-education-grid',
    columns : [
        {text : '학교명', dataIndex :'institution'},
        {text : '전공', dataIndex :'major'},
        {text : '학위,', dataIndex :'degreeCode'},
        {text : '재학상태,', dataIndex :'graduationCode'},
        {text : '졸업년도,', dataIndex :'yearOfGraduation'}
    ]
});
