/**
 * Profile page controller
 *
 * @copyright: Erin Du
 * @author:    Erin Du
 * @version:   1.0.0
 */
 'use strict';

class App {

    constructor() {
        this.setUpHandlers();
	}

    run() {

    }

    setUpHandlers() {
        $(".work-filter-combo-box").on("change", (e) => {
            let selectedGenre = $(e.target).children("option:selected").val();
            $(".thumbnail-container").each((index, element) => {
                let genre = $(element).attr("data-genre");

                if(selectedGenre == "all" || (genre && genre.match(selectedGenre))){
                    $(element).show(500);
                } else {
                    $(element).hide(500);
                }
            });

        });
    }

}


// MAIN Entry point
$(document).ready( function() {
    let app = new App();
    app.run();
});
