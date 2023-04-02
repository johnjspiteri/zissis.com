(function() { 'use strict';

    function Internal(localStorageService) {
        var vm = this;
        vm.state = false;

        vm.changeState = function() {
            vm.state = !vm.state;
        };

        vm.events = [
            {
	            images: {
	            	url: 'healing_and_emotional_clarity.png',
		            thumb: {
		                file_type: '',
				        base64: ''
			        },
		            detail: {
			            file_type : '',
			            base64 : ''
		            }
		        },
	            date: '2019-07-04T17:25:00.000Z',
	            description: 'Powerful customized workshops to increase vitality, well being, staff morale, team efficiency and cohesion.',
		        category: 'HeartMath',
		        genre: 'Value',
	            title: 'Healing & Emotional Clarity I',
		        location: {
	                address: '1 King Street West',
			        longitude: 0,
			        latitude: 0,
			        city: 'Toronto'
		        },
		        contact: {
	                name: 'Zissis Liolios',
			        phone: '416 912-55555',
			        title: 'Teacher',
			        email: 'zissis@zissisliolios.com'
		        }
	        },
	        {
		        images: {
			        url: 'healing_and_emotional_clarity.png',
			        thumb: {
				        file_type: '',
				        base64: ''
			        },
			        detail: {
				        file_type : '',
				        base64 : ''
			        }
		        },
		        description: 'Powerful customized workshops to increase vitality, well being, staff morale, team efficiency and cohesion.',
		        date: '2019-07-04T17:25:00.000Z',
		        category: 'HeartMath',
		        genre: 'Value',
		        title: 'Healing & Emotional Clarity II',
		        location: {
			        address: '1 King Street West',
			        longitude: 0,
			        latitude: 0,
			        city: 'Toronto'
		        },
		        contact: {
			        name: 'Zissis Liolios',
			        phone: '416 912-55555',
			        email: 'zissis@zissisliolios.com'
		        }
	        },
	        {
		        images: {
		        	url: 'meditation_by_the_beach.jpg',
			        thumb: {
				        file_type: '',
				        base64: ''
			        },
			        detail: {
				        file_type : '',
				        base64 : ''
			        }
		        },
		        description: 'Powerful customized workshops to increase vitality, well being, staff morale, team efficiency and cohesion.',
		        date: '2019-07-04T17:25:00.000Z',
		        category: 'HeartMath',
		        genre: 'Value',
		        title: 'Meditation by the Beach',
		        location: {
			        address: '1 King Street West',
			        longitude: 0,
			        latitude: 0,
			        city: 'Toronto'
		        },
		        contact: {
			        name: 'Zissis Liolios',
			        phone: '416 912-55555',
			        email: 'zissis@zissisliolios.com'
		        }
	        },
	        {
		        images: {
		        	url: 'cleaning_the_past_and_self_renewal.jpeg',
			        thumb: {
				        file_type: '',
				        base64: ''
			        },
			        detail: {
				        file_type : '',
				        base64 : ''
			        }
		        },
		        description: 'Powerful customized workshops to increase vitality, well being, staff morale, team efficiency and cohesion.',
		        date: '2019-07-04T17:25:00.000Z',
		        category: 'HeartMath',
		        genre: 'Value',
		        title: 'Cleaning the Past & Self Renewal I',
		        location: {
			        address: '1 King Street West',
			        longitude: 0,
			        latitude: 0,
			        city: 'Toronto'
		        },
		        contact: {
			        name: 'Zissis Liolios',
			        phone: '416 912-55555',
			        email: 'zissis@zissisliolios.com'
		        }
	        },
	        {
		        images: {
			        url: 'cleaning_the_past_and_self_renewal.jpeg',
			        thumb: {
				        file_type: '',
				        base64: ''
			        },
			        detail: {
				        file_type : '',
				        base64 : ''
			        }
		        },
		        description: 'Powerful customized workshops to increase vitality, well being, staff morale, team efficiency and cohesion.',
		        date: '2019-07-04T17:25:00.000Z',
		        category: 'HeartMath',
		        genre: 'Value',
		        title: 'Cleaning the Past & Self Renewal II',
		        location: {
			        address: '1 King Street West',
			        longitude: 0,
			        latitude: 0,
			        city: 'Toronto'
		        },
		        contact: {
			        name: 'Zissis Liolios',
			        phone: '416 912-55555',
			        email: 'zissis@zissisliolios.com'
		        }
	        },

        ];

        vm.search = {
            category: '',
            categories: [],
            genre: 'Residential',
            genres: [],
            tag: '',
            tags: [],
            filter: ''
        };

        // Initialize local storage if any
//        vm.search.category = localStorageService.get('category') || '';
//        vm.search.genre = localStorageService.get('genre') || '';
//        vm.search.tag = localStorageService.get('tag') || '';

        // Build categories once
        var output = [], i = 0, length = vm.events.length;
        for (i; i < length; i++) {
            output.push(vm.events[i].category);
        }
        // Filter out duplicates
        vm.search.categories = output.filter(function(elem, index, vm) {
            return index === vm.indexOf(elem);
        });

        // Add empty first value
//        vm.search.categories.sort().unshift('');

        // Build tags on demand
//        vm.buildTags = function() {
//            vm.search.tags = [];
//            var holder = [];
//            var output = [];
//            var i = 0;
//            var length = vm.projects.length;
//
//            for (i; i < length; i++) {
//                if (vm.projects[i].category === vm.search.category) {
//                    holder = output;
//                    output = holder.concat(vm.projects[i].tags);
//                }
//            }
//
//            // Filter out duplicates
//            vm.search.tags = output.filter(function(elem, index, vm) {
//                return index === vm.indexOf(elem);
//            });
//
//            // Add empty first value
//            vm.search.tags.sort().unshift('');
//            localStorageService.set('category', vm.search.category);
//            localStorageService.set('tag', vm.search.tag);
//        };
//        vm.buildTags();

//        vm.changeTags = function() {
//            localStorageService.set('tag', vm.search.tag);
//        };
        vm.reset = function() {
            vm.category = '';
            vm.genre = '';
            vm.tag = '';
            vm.filter = '';
        };
    }

    angular.module('app.event.list').controller('EventListController', Internal);

    Internal.$inject = ['localStorageService'];
})();
