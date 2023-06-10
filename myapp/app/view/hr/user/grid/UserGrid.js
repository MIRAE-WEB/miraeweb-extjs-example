
Ext.define('MyApp.view.hr.user.grid.UserGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-grid',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.user.grid.UserGridController'
    ],
    controller: 'user-grid',
    bind : '{userStore}',

    tbar :[{
        xtype : 'textfield',
        fieldLabel: '검색조건'
    },{
        xtype : 'button',
        text :'조회',
        handler : 'onBtnSearch'
    },{xtype : 'tbfill'},
    {
       xtype : 'button',
       text : '삭제',
        handler : 'onBtnDelete'
    }],
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
