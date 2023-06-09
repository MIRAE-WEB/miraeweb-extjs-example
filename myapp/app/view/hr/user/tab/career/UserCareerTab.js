
Ext.define('MyApp.view.hr.user.tab.career.UserCareerTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-career-tab',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.hr.user.tab.career.UserCareerTabController',
        'MyApp.view.hr.user.tab.career.grid.UserCareerGrid'
    ],

    controller: 'user-career-tab',
    layout : 'fit',
    items : [{
        xtype : 'user-career-grid'
    }]
});
