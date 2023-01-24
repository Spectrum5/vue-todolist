const {createApp} = Vue;

createApp({
    data(){
        
        return{
            item: "",
            listItem : [ ],

        };
    },

    methods:{
        createItem(){
            let userList = {
                text: this.item,
                done: false,
            }
            this.listItem.push(userList);                   
            this.item = '';
        },
    

        spliceItem(index){
            this.listItem.splice(index, 1);
        },
    },    

}).mount("#app");