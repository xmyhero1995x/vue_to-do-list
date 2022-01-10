Vue.component('task', {
    props: ['data'],
    methods: {
        task_done() {
            this.$emit('task_done')
        }
    },
    template: `
    <div class="task">
        <div>
        <h3 class="task__title">{{data.title}}</h3>
        <p class="tasc__desc">{{data.desc}}</p>
    </div>
    <button @click="task_done()" class="task__done" @click>✔️</button>
    </div>
    `
})


let vue = new Vue({
    el: '#app',
    data: {
        tasks: [{
                title: '1',
                desc: '1.2'
            },
            {
                title: '2',
                desc: '2.1'
            }
        ],
        new_task: {
            title: '',
            desc: ''
        }
    },
    methods: {
        delete_task(id) {
            this.tasks.splice(id, 1);
        },
        add_task() {
            if(this.new_task.title!=""){
                this.tasks.push({
                    title: this.new_task.title,
                    desc: this.new_task.desc
                });
                this.new_task.title="";
                this.new_task.desc="";
            }
        }
    }
})