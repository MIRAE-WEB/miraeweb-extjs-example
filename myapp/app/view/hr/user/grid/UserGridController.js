Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',
    onBtnSearch: function (button) {

        var globalContent = this.getView().up('global-content');
        globalContent.fireEvent('reset-mode');

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

        globalContent.lookupViewModel().set('userIdx',userIdx);
        globalContent.fireEvent('update-mode');

    }
});
