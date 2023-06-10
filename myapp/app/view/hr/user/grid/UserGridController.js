Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',
    onBtnSearch: function (button) {

        var globalContent = this.getView().up('global-content');
        var userGrid = globalContent.down('user-grid');


        var userForm = globalContent.down('user-form');
        var userDetailForm = globalContent.down('user-detail-form');
        var userCareerGrid = globalContent.down('user-career-grid');
        var userEducationGrid = globalContent.down('user-education-grid');

        userGrid.getSelectionModel().deselectAll();
        userForm.getForm().reset();
        userDetailForm.getForm().reset();
        userCareerGrid.getStore().removeAll();
        userEducationGrid.getStore().removeAll();


        this.getView().getStore().load();
    },

    onBtnDelete: function (button) {

        var record = this.getView().getSelection()[0];

        if(!record){
            Ext.Msg.alert('확인','선택된 데이터가 없습니다.');
            return;
        }

        Ext.Msg.confirm('확인','삭제하시겠습니까?',function(btn){
           if(btn=='yes'){

               Ext.Ajax.request({
                   url : '/users/'+record.get('userIdx'),
                   method : 'DELETE',
                   success : function(){

                   }
               })

           }

        });

    },
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
