Ext.define('MyApp.view.hr.user.UserManagementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-management',

    onResetMode: function () {

        var globalContent = this.getView();
        this.getView().lookupViewModel().set('userIdx',null);
        var userForm = globalContent.down('user-form');
        userForm.getForm().reset();

        globalContent.down('user-tab').fireEvent('reset-mode');
    },
    onUpdateMode: function(){

        var userStore = this.getView().lookupViewModel().get('userStore');
        var userIdx = this.getView().lookupViewModel().get('userIdx');

        var rec = userStore.findRecord('userIdx',userIdx);

        var userForm = this.getView().down('user-form');
        userForm.getForm().loadRecord(rec);

        this.getView().down('user-tab').fireEvent('update-mode');





    }
});
