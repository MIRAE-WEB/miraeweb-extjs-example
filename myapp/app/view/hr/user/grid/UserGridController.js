Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',

    onSelect: function (rowmodel, record, index) {
        var userIdx = record.get('userIdx');
        var globalContent = this.getView().up('global-content');

        var userForm = globalContent.down('user-form');
        userForm.getForm().loadRecord(record);

        var userDetailForm = globalContent.down('user-detail-form');
        userDetailForm.getForm().loadRecord(record);


        var userCareerStore = globalContent.down('user-career-grid').getStore();

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/careers.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                userCareerStore.loadRawData(resObj.careers);
            }
        })

        var userEducationStore = globalContent.down('user-career-grid').getStore();

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/educations.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                userEducationStore.loadRawData(resObj.educations);
            }
        })



        var userEducationStore = globalContent.down('user-education-grid').getStore();

    }

});
