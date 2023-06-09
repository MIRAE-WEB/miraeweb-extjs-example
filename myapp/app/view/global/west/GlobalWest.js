
Ext.define('MyApp.view.global.west.GlobalWest',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.global-west',
    requires: [
        'MyApp.view.global.west.GlobalWestController'
    ],
    title :'인사관리',
    controller: 'global-west',
});
