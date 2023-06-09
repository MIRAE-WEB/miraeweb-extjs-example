
Ext.define('MyApp.view.hr.user.tab.education.UserEducationTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-education-tab',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.hr.user.tab.education.UserEducationTabController',
        'MyApp.view.hr.user.tab.education.grid.UserEducationGrid'
    ],

    controller: 'user-education-tab',
    layout : 'fit',
    items : [{
        xtype : 'user-education-grid'
    }]

});
