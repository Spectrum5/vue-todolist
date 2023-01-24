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
        
        invertDone(element){
            if(element.done === false){
                element.done = true;
            }
            else{
                element.done = false;
            } 
        }
    },

}).mount("#app");