$(document).ready(function() {
    $('#projectModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var projectIndex = button.data('project-index') // Extract info from data-* attributes

        var project = projects[parseInt(projectIndex)];
        var modal = $(this);
        modal.find('.modal-title').text(project.name);
        modal.find('.description').text(project.description);

        var websiteButton = modal.find('#website-button');
        var githubButton = modal.find('#github-button');

        (project.urls.website) ? websiteButton.show() : websiteButton.hide();
        (project.urls.github) ? githubButton.show() : githubButton.hide();
        
        
    });

    var projects = [
        {
            name: 'Mock Event Planner',
            description: 'Built a responsive web application toward the Udacity Senior Web Developer Nanodegree that allows users to establish a meetup event. The application makes use of the latest best practices in developing high conversion web forms, including new input type elements, compound form components, data validation and handling touch input.',
            urls: {
                website: 'https://philmerrell.github.io/meet-up-event-planner/',
                github: 'https://github.com/philmerrell/meet-up-event-planner'
            }
        },
        {
            name: 'Movie Trailers',
            description: 'Built a responsive web application toward the Udacity Senior Web Developer Nanodegree that allows users to establish a meetup event. The application makes use of the latest best practices in developing high conversion web forms, including new input type elements, compound form components, data validation and handling touch input.',
            urls: {
                website: '',
                github: ''
            }
        },
        {
            name: 'Boise State University: Major Finder',
            description: 'Major Finder utilizes a client side build system via NPM, Bower and Grunt. Angular Material Design was used for many of the design components, which lend themselves well to both a desktop and mobile web experience.',
            urls: {
                website: '',
                github: ''
            }
        },
        {
            name: 'Boise State University: myBoiseState Mobile',
            description: 'MyBoiseState Mobile is built for students and employees at Boise State University. It is a hybrid mobile application built with Ionic and is available on both the iOS AppStore and Google Play and leverages device features such as push notifications. This app\'s primary purpos is to serve as a portal that ties data from many different sources across the university into a single, easy to use platform.',
            urls: {
                ios: '',
                android: ''
            }
        },
        {
            name: 'Famous Menu Example',
            description: 'This project is a concept for a mobile side menu. As the user slides the content area, menu items are animated in. It was built using the Famous JavaScript library and has collected 14 stars on Github.',
            urls: {
                website: '',
                github: ''
            }
        },
        {
            name: 'Famous Menu Example',
            description: 'This project is a concept for a mobile side menu. As the user slides the content area, menu items are animated in. It was built using the Famous JavaScript library and has collected 14 stars on Github.',
            urls: {
                website: '',
                github: ''
            }
        }
    ];
});