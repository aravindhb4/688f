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
    // use \' or "" incase of '|'|' conflict. Ex: 'Nyx's scepter burrow....' will throw error. You can write as 'Nyx\'s scepter burrow..'(best practice) or "Nyx's scepter burrow....."
    heroes: [{
        'name': 'Arc Warden',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/arc_warden_sb.png',
        'altText': 'Dota2 - Arc Warden',
        //Hero having two changes
        'changes': ['Spark Wraith no longer dispels (still slows)', 'Arc Warden movement speed reduced by 10']
    }, 
    {
        'name': 'Batrider',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/batrider_sb.png',
        'altText': 'Dota2 - Batrider',
        'changes': ['Flamebreak knockback no longer interrupts channeling spells (behaves like blinding light)', 'Flamebreak burn duration increased from 3/4/5/6 to 4/5/6/7 (total damage increased)']

    },
    {
        'name': 'Bounty Hunter',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/bounty_hunter_sb.png',
        'altText': 'Dota2 - Bounty Hunter',
        //Hero having only one change
        'changes': ['Track movement speed bonus reduced from 20% to 16/18/20%']

    },
    {
        'name': 'Centaur Warrunner',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/centaur_sb.png',
        'altText': 'Dota2 - Centaur Warrunner',
        'changes': ['Fixed Return working on Centaur Illusions']

    },
    {
        'name': 'Drow Ranger',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/drow_ranger_sb.png',
        'altText': 'Dota2 - Drow Ranger',
        'changes': ['Drow Ranger strength gain reduced from 1.9 to 1.6']

    },
    {
        'name': 'Faceless Void',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/faceless_void_sb.png',
        'altText': 'Dota2 - Faceless Void',
        'changes': ['Faceless Void base armor reduced by 1']

    },
    {
        'name': 'Juggernaut',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/juggernaut_sb.png',
        'altText': 'Dota2 - Juggernaut',
        'changes': ['Healing Ward manacost increased from 120/125/130/135 to 140']

    },
    {
        'name': 'Kunkka',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/kunkka_sb.png',
        'altText': 'Dota2 - Kunkka',
        'changes': ['Torrent cooldown increased from 10 to 16/14/12/10', 'Ghostship Rum damage reduction changed from 50% to 40/45/50%']

    },
    {
        'name': 'Mirana',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/mirana_sb.png',
        'altText': 'Dota2 - Mirana',
        'changes': ['Starfall Scepter cooldown increased from 9 to 10']

    },
    {
        'name': 'Morphling',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/morphling_sb.png',
        'altText': 'Dota2 - Morphling',
        'changes': ['Morph Replicate cast time increased from 0.25 to 0.35', 'Morphling base damage reduced by 4']

    },
    {
        'name': 'Nyx Assassin',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/nyx_assassin_sb.png',
        'altText': 'Dota2 - Nyx Assassin',
        'changes': ['Nyx\'s Scepter Burrow cast time increased from 1 to 1.5']

    },
    {
        'name': 'Omniknight',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/omniknight_sb.png',
        'altText': 'Dota2 - Omniknight',
        //Hero having more changes, just add them like an array
        'changes': ['Purification cast range reduced from 700 to 575', 'Purification cast point reduced from 0.25 to 0.2', 'Purification cooldown reduced from 10 to 9', 'Repel duration rescaled from 4/6/8/10 to 5/6/7/8', 'Repel cooldown increased from 14 to 20/18/16/14']

    },
    {
        'name': 'Oracle',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/oracle_sb.png',
        'altText': 'Dota2 - Oracle',
        'changes': ['Purifying Flames manacost increased from 50/60/70/80 to 80/85/90/95']

    },
    {
        'name': 'Outworld Devourer',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/obsidian_destroyer_sb.png',
        'altText': 'Dota2 - Outworld Devourer',
        'changes': ['Outworld Devourer base damage reduced by 6']

    },
    {
        'name': 'Phantom Assassin',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/phantom_assassin_sb.png',
        'altText': 'Dota2 - Phantom Assassin',
        'changes': ['Stifling Dagger cast range reduced from 825/950/1075/1200 to 525/750/975/1200']

    },
    {
        'name': 'Riki',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/riki_sb.png',
        'altText': 'Dota2 - Riki',
        'changes': ['Smoke Screen slow reduced from 19/21/23/25% to 13/17/21/25%']

    },
    {
        'name': 'Shadow Demon',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/shadow_demon_sb.png',
        'altText': 'Dota2 - Shadow Demon',
        'changes': ['Shadow Poison manacost increased from 40 to 55']

    },
    {
        'name': 'Underlord',
        'image': 'http://cdn.dota2.com/apps/dota2/images/heroes/abyssal_underlord_sb.png',
        'altText': 'Dota2 - Underlord',
        'changes': ['Atrophy Aura attack damage reduction changed from 18/26/34/42% to 10/20/30/40%']

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