
Ext.define('MyApp.view.hr.user.grid.UserGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-grid',
    requires: [
        'MyApp.view.hr.user.grid.UserGridController'
    ],
    controller: 'user-grid',
    bind : '{userStore}',
    columns : [
        {text : '아이디', dataIndex :'userId'},
        {text : '성명', dataIndex :'userName'},
        {text : '생년월일', dataIndex :'birthDate',renderer : function(v){

            var year =v.substr(0,4);
            var month = v.substr(4,2);
            var day = v.substr(6);
            return Ext.String.format('{0}-{1}-{2}',year,month,day);
            }},
        {text : '성별', dataIndex :'genderCode', renderer : function(v){
            if(v=='MALE'){
                return '남성';
            }
            return '여성';
            }},
        {text : '이메일', dataIndex :'email'},
    ],
    listeners : {
        select : 'onSelect'
    }
});
