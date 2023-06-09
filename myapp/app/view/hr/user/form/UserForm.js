
Ext.define('MyApp.view.hr.user.form.UserForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.user-form',
    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.HBox',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.user.form.UserFormController'
    ],

    controller: 'user-form',

    layout : 'column',
    bodyPadding : '20 10 10 10',
    defaults : {
        columnWidth : 0.333,
        labelWidth : 60,
        margin : '0 10 10 10',
    },
    tbar : [{
        xtype : 'tbfill',
    },{
        xtype : 'button',
        text : '신규'
    },{
        xtype : 'button',
        text : '저장'
    }],
    items : [{
        xtype: 'textfield',
        fieldLabel: '아이디',
    },{
        xtype: 'textfield',
        fieldLabel : '성명'
    },{
        xtype: 'fieldcontainer',
        fieldLabel : '성별',
        layout : 'hbox',
        items : [{
            xtype : 'radio',
            boxLabel : '남',
            flex :1,
            name :'GENDER_CODE',
            inputValue : 'MALE'
        },{
            xtype : 'radio',
            boxLabel : '여',
            flex :1,
            name :'GENDER_CODE',
            inputValue : 'FEMALE'
        }]
    },{
        xtype: 'datefield',
        format : 'Y-m-d',
        altFormats: 'Y-m-d|Y.m.d|Ymd',
        submitValue: 'Ymd',
        fieldLabel : '생년월일'
    },{
        xtype: 'textfield',
        fieldLabel : '핸드폰'
    },{
        xtype: 'textfield',
        fieldLabel : '이메일'
    },{
        xtype: 'combobox',
        store : Ext.create('Ext.data.Store',{
            data : [{
                code : 'code', codeName :'부서코드'
            }]
        }),
        displayField: 'codeName',
        valueField : 'code',
        fieldLabel : '부서'
    },{
        xtype: 'combobox',
        store : Ext.create('Ext.data.Store',{
            data : [{
                code : 'code', codeName :'직급코드'
            }]
        }),
        displayField: 'codeName',
        valueField : 'code',
        fieldLabel : '직급'
    },{
        xtype: 'textfield',
        fieldLabel : '사번'
    }]
});
