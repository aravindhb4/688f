// This javascript file will build the HTML with the DOM from helper.js


var gameplay = {
    // Add the changeLog version here in 'changeLog':'--replace--'!
    'changeLog': '6.88f',

    // Adding display property to append to the HTML
    'display': function() {
        var formattedGameplayHeader = HTMLgameplayHeader.replace('%data%', gameplay.changeLog);
        $('.container02').append(formattedGameplayHeader);
    }
};


var heroes = {
    // Add your heroes below in the same syntax 'name':'', 'image':'','altText':'','changes':''
    // 'changes' is an array, you can list the changes separated by ','
    // You can add AS MANY HEROES and their changes --> "heroes: [{},{'INSIDE HERE'},{}]", but please do not change the key names(name,image,altText,changes) as they are case-sensitive and the HTML will build based on that.
    heroes: [{
        'name': 'Arc Warden',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_sb.png',
        'altText': 'Dota2_Arc_Warden',
        //Hero having two changes
        'changes': ['Spark Wraith no longer dispels (still slows)', 'Arc Warden movement speed reduced by 10']
    }, {
        'name': 'Omniknight',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_sb.png',
        'altText': 'Dota2_Omniknight',
        //Hero having more changes, just add them like an array
        'changes': ['Purification cast range reduced from 700 to 575', 'Purification cast point reduced from 0.25 to 0.2', 'Purification cooldown reduced from 10 to 9', 'Repel duration rescaled from 4/6/8/10 to 5/6/7/8', 'Repel cooldown increased from 14 to 20/18/16/14']

    },
    {
        'name': 'Omniknight',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_sb.png',
        'altText': 'Dota2_Omniknight',
        //Hero having more changes, just add them like an array
        'changes': ['Purification cast range reduced from 700 to 575', 'Purification cast point reduced from 0.25 to 0.2', 'Purification cooldown reduced from 10 to 9', 'Repel duration rescaled from 4/6/8/10 to 5/6/7/8', 'Repel cooldown increased from 14 to 20/18/16/14']

    },
    {
        'name': 'Omniknight',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_sb.png',
        'altText': 'Dota2_Omniknight',
        //Hero having more changes, just add them like an array
        'changes': ['Purification cast range reduced from 700 to 575', 'Purification cast point reduced from 0.25 to 0.2', 'Purification cooldown reduced from 10 to 9', 'Repel duration rescaled from 4/6/8/10 to 5/6/7/8', 'Repel cooldown increased from 14 to 20/18/16/14']

    }],

    'display': function() {

        if (heroes.heroes.length > 0) {
            heroes.heroes.forEach(function(hero) {
                $('.heroes').append(HTMLheroStart);

                var formattedHeroImage = HTMLheroImage.replace('%data', hero.image);
                formattedHeroImage = formattedHeroImage.replace("#", hero.altText);
                $('.herobox:last').append(formattedHeroImage);

                var formattedHeroName = HTMLheroName.replace('%data%', hero.name);
                $('.herobox:last').append(formattedHeroName);


                if (hero.changes.length > 0) {
                    $('.herobox:last').append(HTMLchangesStart);

                    hero.changes.forEach(function(change) {
                        var formattedChange = HTMLchanges.replace('%data%', change);
                        $('.change-log:last').append(formattedChange);
                    });

                }

            });
        }
    }
};




// call the display property of each object to add build the HTML elements.
gameplay.display();
heroes.display();