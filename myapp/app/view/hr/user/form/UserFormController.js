Ext.define('MyApp.view.hr.user.form.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-form',


    onBtnNew: function (button) {

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

    },

    onBtnSave: function (button) {

        var globalContent = this.getView().up('global-content');

        var userGrid = globalContent.down('user-grid');
        var record = userGrid.getSelection()[0];
        var userIdx = null;

        if(record){
            userIdx = record.get('userIdx');
        }


        var userForm = globalContent.down('user-form');
        var userDetailForm = globalContent.down('user-detail-form');

        if(!userForm.isValid() || !userForm.isValid()){
            Ext.Msg.alert('확인','입력된 데이터중 잘못된 데이터가 존재합니다.');
            return;

        }



        var data =userForm.getValues();
        var params = Ext.apply(data,userDetailForm.getValues());


        var method = userIdx ? 'PUT' : 'POST';

        var ajaxObj = {
            'POST' :{
                url : '/users',
                confirmMsg : {
                    title : '확인',
                    message : '추가하시겠습니까?'
                }
            },
            'PUT' :{
                url : '/users/'+userIdx,
                confirmMsg : {
                    title : '확인',
                    message : '수정하시겠습니까?'
                }
            }

        }
        var title = ajaxObj[method]['confirmMsg']['title'];
        var message = ajaxObj[method]['confirmMsg']['message'];

        Ext.Msg.confirm(title,message,function(btn){
            if(btn=='yes'){
                Ext.Ajax.request({
                    url : ajaxObj[method]['url'],
                    method : method,
                    params : params,
                    success : function(){

                    }
                });
            }
        });

    }

});
