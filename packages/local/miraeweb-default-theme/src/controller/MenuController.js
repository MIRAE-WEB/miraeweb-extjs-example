Ext.define('MiraewebTheme.controller.MenuController',{
    extend : 'Ext.app.Controller',
    routes: {
        ':id': {  // Hash값으로
            before: 'beforeRoute',
            action: 'handleRoute'
        }
    },
    refs: [{
        ref: 'globalCenterTab',
        selector: 'global-center-tab'
    },{
        ref: 'globalWest',
        selector: 'global-west'
    }],

    control: {    //이벤트 지정시 사용
        'global-west':{
            'beforeselect' : 'onMenuBeforeSelect',
            'select' : 'onMenuSelect'
        },
        'global-center-tab':{
            'tabchange' : 'onMenuTabChange'
        }
    },
    onMenuBeforeSelect : function(rowmodel,record,index){
        if(record.get('widgetName')){
            return true;
        }
        return false;
    },

    onMenuSelect : function(rowmodel,record,index){
        this.redirectTo(record.get('widgetName'));
    },
    onMenuTabChange : function(tabpanel,newCard,oldCard){

        var widgetName = newCard.xtype;
        var rootNode = Ext.getStore('Navigation').getRoot();
        var findNode = rootNode.findChild('widgetName',widgetName,true);

        this.getGlobalWest().getSelectionModel().select(findNode);


    },

    beforeRoute: function (id, action) {

        var rootNode = Ext.getStore('Navigation').getRoot();

        var findNode = rootNode.findChild('widgetName',id,true);
        if(findNode){
            action.resume();
        }else{
            action.stop();
        }
    },
    handleRoute: function (id) {

        var rootNode = Ext.getStore('Navigation').getRoot();
        var findNode = rootNode.findChild('widgetName',id,true);

        var title = findNode.get('text');
        var xtype = findNode.get('widgetName');

        var globalCenterTab = this.getGlobalCenterTab();

        var widget = Ext.ComponentQuery.query(xtype)[0];

        if(!widget){
            widget = Ext.widget(xtype,{
                title : title
            });

            globalCenterTab.add(widget);
        }

        globalCenterTab.setActiveTab(widget);

    }

});