var sort = function (stat) {

    var table = document.getElementById("table");

   // var ordrer = $("thead tr th:nth-child(1)").hasClass('active-h');


    // if (stat == "№" && $("thead tr th:nth-child(1)").hasClass('active-h') ) {
    //
    //     //--- delete ClassNames
    //
    //     d3.select(".active-h").classed("active-h", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-up", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort", true);
    //     //end of delete ClassNames
    //
    //     //--- add ClassNames
    //     d3.select("thead tr th:nth-child(1) i")
    //         .classed('fa-sort', false)
    //         .classed('fa-sort-up', true); //--- end of adding ClassNames
    //
    //     //--- RePaginate
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     $("tbody tr").show();
    //     paginationList(407);
    //     d3.selectAll('tbody tr')
    //         .sort(function (a, b) {
    //             return d3.ascending(a.ranking_2017, b.ranking_2017);
    //         });
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     paginationList(50);
    //
    //
    //
    // }  else if (stat == "№") {
    //
    //     //--- delete ClassNames
    //     d3.selectAll(".active-h").classed("active-h", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-up", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort", true);
    //     d3.select("thead tr th:nth-child(1) i").classed("fa-sort", false);
    //     //end of delete ClassNames
    //
    //     //--- add ClassNames
    //     d3.select("thead tr th:nth-child(1)")
    //         .classed("active-h", true);
    //     d3.select("thead tr th:nth-child(1) i")
    //         .classed('fa-sort-desc', true);
    //
    //
    //     //--- RePaginate
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     $("tbody tr").show();
    //     paginationList(407);
    //     d3.selectAll('tbody tr')
    //         .sort(function (a, b) {
    //             return d3.descending(a.ranking_2017, b.ranking_2017);
    //         });
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     paginationList(50);
    //
    // }

    //---------- University ------------- //
    //SORT DESCENDING


    if (stat == "Назва " && $("thead tr th:nth-child(1)").hasClass('active-h') ) {

        //--- delete ClassNames

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1) i")
            .classed('fa-sort', false)
            .classed('fa-sort-desc', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.univ, b.univ);
            });
        d3.selectAll("li.current-page").remove();
        d3.selectAll("li#next-page").remove();
        d3.selectAll("li#previous-page").remove();
        paginationList(50);

    }

    // -------SORT ASCENDING---------
    else if (stat == "Назва ") {
        //--- delete ClassNames
        d3.select("thead tr th:nth-child(1) i").classed("fa-sort", false);
        d3.selectAll(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(1) i")
            .classed("fa-sort-up", true);//--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.univ, b.univ);
            });
        d3.selectAll("li.current-page").remove();
        d3.selectAll("li#next-page").remove();
        d3.selectAll("li#previous-page").remove();
        paginationList(50);
    }

//--------------------------------------- Mean ZNO --------------------------------- //


    if (stat == "Медіана ЗНО " && $("thead tr th:nth-child(2)").hasClass('active-h') ) {

        //--- delete ClassNames

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(2) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll('tbody tr')
            .sort(function (a, b) {
                return d3.ascending(a.median, b.median);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);



    }  else if (stat == "Медіана ЗНО ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(2) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(2)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(2) i")
            .classed('fa-sort-desc', true);


        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll('tbody tr')
            .sort(function (a, b) {
                return d3.descending(a.median, b.median);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    //--------------------------------------- Total APPS --------------------------------- //

    if (stat == "Різниця з 2011 роком " && $("thead tr th:nth-child(3)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(3) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.rank4, b.rank4);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if(stat == "Різниця з 2011 роком ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(3) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(3)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(3) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.ranking_2011, b.ranking_2011);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }


//--------------------------------------- PRICE --------------------------------- //

    if (stat == "Вартість контракту, грн* " && $("thead tr th:nth-child(4)").hasClass('active-h') ) {

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(4) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.price, b.price);

            });

        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    else if (stat == "Вартість контракту, грн* ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(4) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(4)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(4) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.price, b.price);

            });

        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }


    //--------------------------------------- APPS per PLACE --------------------------------- //



    if (stat == "Заяв на місце " && $("thead tr th:nth-child(5)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(5) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.total_per_place, b.total_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Заяв на місце ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(5) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(5)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(5) i")
            .classed('fa-sort-desc', true);


        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.total_per_place, b.total_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    //--------------------------------------- APPS per PLACE (budget)--------------------------------- //

    if (stat == "Зараховано " && $("thead tr th:nth-child(6)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(6) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.size, b.size);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Зараховано ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(6) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(6)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(6) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.size, b.size);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }
//--------------------------------------- Scopus publications--------------------------------- //

    if (stat == "Наука (публікації, Scopus) " && $("thead tr th:nth-child(7)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(7) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.scopus_per_student, b.scopus_per_student);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Наука (публікації, Scopus) ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(7) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(7)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(7) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.scopus_per_student, b.scopus_per_student);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }
//--------------------------------------- Scopus qoutations --------------------------------- //

    if (stat == "Наука (цитування, Scopus) " && $("thead tr th:nth-child(8)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(8) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.QtoP, b.QtoP);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Наука (цитування, Scopus) ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(8) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(8)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(8) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(407);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.QtoP, b.QtoP);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

    // // ----------------------- OSVITA-UA --------------------------
    // if (stat == "Вступників (бакалаврат) " && $("thead tr th:nth-child(9)").hasClass('active-h') ) {
    //     //--- delete ClassNames
    //     d3.select(".active-h").classed("active-h", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-up", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort", true);
    //     //end of delete ClassNames
    //
    //     //--- add ClassNames
    //     d3.select("thead tr th:nth-child(9) i")
    //         .classed('fa-sort', false)
    //         .classed('fa-sort-up', true); //--- end of adding ClassNames
    //
    //     //--- RePaginate
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     $("tbody tr").show();
    //     paginationList(407);
    //     d3.selectAll("table tbody tr")
    //         .sort(function (a, b) {
    //             return d3.ascending(a.amountOfStudents, b.amountOfStudents);
    //
    //         });
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     paginationList(50);
    //
    // } else if (stat == "Вступників (бакалаврат) ") {
    //     //--- delete ClassNames
    //     d3.selectAll(".active-h").classed("active-h", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-up", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
    //     d3.selectAll("thead tr th i").classed("fa-sort", true);
    //     d3.select("thead tr th:nth-child(9) i").classed("fa-sort", false);
    //     //end of delete ClassNames
    //
    //     //--- add ClassNames
    //     d3.select("thead tr th:nth-child(9)")
    //         .classed("active-h", true);
    //     d3.select("thead tr th:nth-child(9) i")
    //         .classed('fa-sort-desc', true);
    //
    //     //--- RePaginate
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     $("tbody tr").show();
    //     paginationList(407);
    //     d3.selectAll("table tbody tr")
    //         .sort(function (a, b) {
    //             return d3.descending(a.amountOfStudents, b.amountOfStudents);
    //         });
    //     $("li.current-page").remove();
    //     $("li#next-page").remove();
    //     $("li#previous-page").remove();
    //     paginationList(50);
    // }

};







