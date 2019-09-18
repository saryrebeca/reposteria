// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/inicio/',
    	url: 'inicio.html',
    	name: 'inicio',
  		},
		,
		{
		path: '/recetas/',
    	url: 'recetas.html',
    	name: 'recetas',
  		},
		{
		path: '/team/',
    	url: 'team.html',
    	name: 'team',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/reposteria/',
    	url: 'reposteria.html',
    	name: 'reposteria',
  		},
		{
		path: '/favoritos/',
    	url: 'favoritos.html',
    	name: 'favoritos',
  		},
		{
		path: '/chef/',
    	url: 'chef.html',
    	name: 'chef',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

