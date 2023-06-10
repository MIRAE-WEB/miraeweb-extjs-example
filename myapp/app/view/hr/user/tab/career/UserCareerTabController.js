Ext.define('MyApp.view.hr.user.tab.career.UserCareerTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-career-tab',
    onResetMode : function(){
        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode: function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var gridStore = this.getView().down('grid').getStore();

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/careers.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                gridStore.loadRawData(resObj.careers);
            }
        })
    }
});
