export const crudItemsMixin = {
    data(){
        return {
            items: [],
            nuevoItem: '',
            filtroItems: ''
        }
    },
    methods: {
        agregarItem() {
            this.items.unshift(({title: this.nuevoitem}))
            this.nuevoitem=''
        },
        eliminarItem(indice) {
            this.items.splice(indice, 1);
        }
    },
    watch:{
        items:function(val){
            console.log(val)
        }
    },
    computed: {
        itemsFiltrados() {

            if (this.items && this.items.length){
                return this.items.filter(item =>{
                    return item.title.includes(this.filtroItems)
                })
            }else{
                return []
            }

        }
    },
}