
Ext.define('MyApp.view.hr.user.UserManagement',{
    extend: 'MyApp.view.global.content.GlobalContent',
    alias : 'widget.user-management',
    requires: [
        'Ext.layout.container.VBox',
        'MyApp.view.hr.user.UserManagementController',
        'MyApp.view.hr.user.form.UserForm',
        'MyApp.view.hr.user.grid.UserGrid',
        'MyApp.view.hr.user.tab.UserTab'
    ],
    controller: 'user-management',
    layout: {
        type : 'vbox',
        align : 'stretch'
    },
    items : [{
        xtype : 'user-grid',
        title : '사용자 리스트',
        margin : '0 0 10 0',
        frame : true,
        flex : 1
    },{
        xtype : 'user-form',
        title : '사용자 정보',
        margin : '0 0 10 0',
        frame : true
    },{
        xtype : 'user-tab',
        frame : true,
        flex : 1
    }]
});
