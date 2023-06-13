/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',
    name: 'MyApp',

    defaultToken : 'user-management',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],
    controllers : [
        'MiraewebTheme.controller.MenuController'
    ],
    stores : [
        'MiraewebTheme.store.Navigation'
    ],
    launch : function(){

        Ext.getStore('Navigation').dataLoad();

        Ext.widget('global-main');

    }
});
