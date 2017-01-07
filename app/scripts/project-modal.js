$(document).ready(function() {
    $('#projectModal').on('show.bs.modal', function (event) {
        console.log('what');
        var button = $(event.relatedTarget) // Button that triggered the modal
        var projectIndex = button.data('project-index') // Extract info from data-* attributes

        var project = projects[parseInt(projectIndex)];
        console.log(project);
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text(project.name);
        modal.find('.description').text(project.description);
        // modal.find('.modal-body input').val(recipient)
    });

    var projects = [
        {
            name: 'Mock Event Planner',
            description: 'Built a responsive web application toward the Udacity Senior Web Developer Nanodegree that allows users to establish a meetup event. The application makes use of the latest best practices in developing high conversion web forms, including new input type elements, compound form components, data validation and handling touch input.',
            urls: [
                { type: 'website', url: '' },
                { type: 'github', url: '' }
            ]
        },
        {
            name: 'Movie Trailers',
            description: 'Built a responsive web application toward the Udacity Senior Web Developer Nanodegree that allows users to establish a meetup event. The application makes use of the latest best practices in developing high conversion web forms, including new input type elements, compound form components, data validation and handling touch input.',
            urls: [
                { type: 'website', url: ''},
                { type: 'github', url: '' }
            ]
        },
        {
            name: 'Boise State University: Major Finder',
            description: 'Major Finder utilizes a client side build system via NPM, Bower and Grunt. Angular Material Design was used for many of the design components, which lend themselves well to both a desktop and mobile web experience.',
            urls: [
                { type: 'website', url: 'https://majors.boisestate.edu'}
            ]
            
        },
        {
            name: 'Boise State University: myBoiseState Mobile',
            description: 'MyBoiseState Mobile is built for students and employees at Boise State University. It is a hybrid mobile application built with Ionic and is available on both the iOS AppStore and Google Play and leverages device features such as push notifications. This app\'s primary purpos is to serve as a portal that ties data from many different sources across the university into a single, easy to use platform.',
            urls: [
                { type: 'website', url: '' },
                { type: 'ios', url: '' },
                { type: 'android', url: ' ' }
            ]
        }
    ];
});