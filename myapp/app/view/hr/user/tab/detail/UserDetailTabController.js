Ext.define('MyApp.view.hr.user.tab.detail.UserDetailTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-detail-tab',
    onResetMode : function(){
        this.getView().down('form').reset();
    },
    onUpdateMode: function(){
        var userStore = this.getView().lookupViewModel().get('userStore');
        var userIdx = this.getView().lookupViewModel().get('userIdx');

        var rec = userStore.findRecord('userIdx',userIdx);
        var userDetailForm = this.getView().down('user-detail-form');
        userDetailForm.getForm().loadRecord(rec);
    }
});
