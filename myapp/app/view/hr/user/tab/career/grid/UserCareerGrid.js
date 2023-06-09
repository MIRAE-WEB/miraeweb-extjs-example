
Ext.define('MyApp.view.hr.user.tab.career.grid.UserCareerGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-career-grid',
    requires: [
        'MyApp.view.hr.user.tab.career.grid.UserCareerGridController'
    ],

    controller: 'user-career-grid',


    html: 'Hello, World!!'
});
