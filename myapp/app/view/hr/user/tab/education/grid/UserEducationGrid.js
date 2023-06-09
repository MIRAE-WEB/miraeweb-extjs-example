
Ext.define('MyApp.view.hr.user.tab.education.grid.UserEducationGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-education-grid',
    requires: [
        'MyApp.view.hr.user.tab.education.grid.UserEducationGridController'
    ],

    controller: 'user-education-grid',


    html: 'Hello, World!!'
});
