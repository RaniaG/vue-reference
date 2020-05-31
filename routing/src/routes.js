import home from './components/main';
import list from './components/list';
import cards from './components/cards';
import notFound from './components/notFound';

//lazy loading
const edit = resolve => {
    require.ensure(['./components/edit.vue'], () => {
        resolve(require('./components/edit.vue'));
    }, 'user')
}
const details = resolve => {
    require.ensure(['./components/details'], () => {
        resolve(require('./components/details'));
    }, 'user')
}


export default [
    { path: '/', component: home },
    {
        path: '/cards', component: cards, children: [
            { path: '', component: list },
            { path: ':id', component: details },
            {
                name: 'editCard', path: ':id/edit', component: edit, props: true, beforeEnter: (to, from, next) => {
                    console.log("exectuted before component is created");
                    next();
                    //next(false);
                    //next({path:'/login'})
                }
            },

        ]
    },
    { path: '*', component: notFound }
    // { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    // { path: '/static', component: Hello, props: { name: 'world' }}, // static values
    // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    // { path: '/attrs', component: Hello, props: { name: 'attrs' }}
]
// function dynamicPropsFn (route) {
//     const now = new Date()
//     return {
//       name: (now.getFullYear() + parseInt(route.params.years)) + '!'
//     }
//   }