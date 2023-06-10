Ext.define('MyApp.view.hr.user.tab.UserTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-tab',

    onResetMode : function(){

        var tabItems = this.getView().items.items;

        for(var tab of tabItems){
            tab.fireEvent('reset-mode');
        }
    },
    onUpdateMode: function(){
        var tabItems = this.getView().items.items;

        for(var tab of tabItems){
            tab.fireEvent('update-mode');
        }
    }
});
