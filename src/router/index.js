import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ProfileView from '../views/ProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:`/`,
    component: HomeView,
    name: `home`,
    meta:[

    {

      title: `Home page`,

    },
    {

      name:`description`,

      content: `welcome to placeholder`,

    },
    {

      name: `author`,

      content: `Cameron Ord`

    }
    ]
  },
  {
    path:`/login`,
    component: LoginPage,
    name: `login`,
    meta:[

    {

      title: `login`,

    },
    {

      name:`description`,

      content: `welcome to placeholder`,

    },
    {

      name: `author`,

      content: `Cameron Ord`

    }
    ]
  },
  {
    path:`/signup`,
    component: SignupPage,
    name: `signup`,
    meta:[

    {

      title: `signup`,

    },
    {

      name:`description`,

      content: `welcome to placeholder`,

    },
    {

      name: `author`,

      content: `Cameron Ord`

    }
    ]
  },
  {
    path:`/profile`,
    component: ProfileView,
    name: `profile`,
    meta:[

    {

      title: `signup`,

    },
    {

      name:`description`,

      content: `welcome to placeholder`,

    },
    {

      name: `author`,

      content: `Cameron Ord`

    }
    ]
  },
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {

  let current_meta_tags = document.querySelectorAll(`meta`);

  for(let i = 0; i<current_meta_tags.length; i++){

    current_meta_tags[i].remove();
  }

  let new_meta_tags = to[`meta`];

  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  for(let i = 0; i<new_meta_tags.length; i++){

    document.querySelector(`head`).insertAdjacentHTML(`beforeend`,
    
    `<meta name="${new_meta_tags[i][`name`]}"
    
    content="${new_meta_tags[i][`content`]}">`);


  }

  document.querySelector(`head`).insertAdjacentHTML(`afterbegin`,
    
  `<meta charset="utf-8">
  
  <meta http-equiv=""X-UA-Compatible" content="IE=edge">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  
  );

  from;

  next();

}
);


export default router
