Ext.define('MyApp.view.hr.user.tab.education.UserEducationTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-education-tab',

    onResetMode : function(){
        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode: function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');

        var gridStore = this.getView().down('grid').getStore();

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/educations.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                gridStore.loadRawData(resObj.educations);
            }
        })
    }
});
