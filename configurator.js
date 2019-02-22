// $(document).ready(function() {
//
//     $('.configurator-base-carousel').owlCarousel({
//         loop: true,
//         margin: 3,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 5
//             }
//         }
//     })
//
// });


class Step {

    constructor(number, title, nextStep, skipEnable, img) {
        this.number = number;
        this.title = title;
        this.nextStep = nextStep;
        this.previous = null;
        this.skipEnable = skipEnable;
        this.img = img;
        this.selectedNodes = [];
    }
}

class Configurator {
    constructor(startStep, graph) {
        this.step = startStep;
        this.graph = graph;
    }

    nextStep() {
        let actualStep = this.step;
        this.step = this.step.nextStep;
        this.step.previous = actualStep;
        this.refresh();
        $('#configurator-preview').append('<img class="img-responsive configurator-img" src="renders/' + this.step.img + '" />');
    }

    previousStep() {
        this.step = this.step.previous;
        this.refresh();
        $('#configurator-preview img').last().remove();
    }

    skipStep() {
        this.nextStep();

    }

    refresh(node) {
        console.log($('#step-title'));
        $('#step-number').text('Krok ' + node.number);
        $('#step-title').text(node.label);
        if (this.step.previous == null) {
            $("#previous-step").hide();
        } else {
            $("#previous-step").show();
            $("#previous-step").text('<< poprzedni krok: ' + this.step.previous.title);
        }
        if (this.step.nextStep == null) {
            $('#next-step').hide();
        } else {
            $('#next-step').show();
            $('#next-step').text('następny krok: ' + this.step.nextStep.title + ' >>');
        }
        if (this.step.skipEnable) {
            $('#skip-step').show();
        } else {
            $('#skip-step').hide();
        }
    }

    start(step) {
        var starNode = this.graph.node(step);
        console.log(starNode.label);
        this.step.selectedNodes[0] = starNode;
        this.graph
        var successors = this.graph.successors(step);
        console.log(successors);
        var stepElement = $('#step-content');
        stepElement.html('');
        var divElement = stepElement.append($('<div>').addClass("configurator-base-carousel owl-carousel owl-theme"));
        var carousel = $('.configurator-base-carousel').owlCarousel({
            loop: false,
            items: 3,
            nav: true,
            margin: 30,
            navText: ['<i class="svg prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>', '<i class="svg next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                }
            }
        });
        successors.forEach(node_name => {
            var node = this.graph.node(node_name);
            carousel.trigger('add.owl.carousel',
                ['<div class="owl-item">' +
                '<div class="col-sm-12">' +
                '<div class="carousel-box box" node_name="' + node_name + '" onclick="configurator.onPartClick($(this))">' +
                '<div class="square" style="background-image: url(\'' + node.img + '\')" />' +
                '</div>' +
                '<div class="row"><h6 class="item-label text-center word-wrap" style="color: #212121;">' + node.label.toUpperCase() + '</h6></div>' +
                '<h6 class="dimension-price">Wymiar i cena</h6>' +
                '<div><p class="node-price blue-text" id="node-price-' + node_name + '" class="blue-text"></p>' +
                '<p style="font-size: 6px;">Cena zawiera podatek VAT 23 %</p></div>' +
                this.addOption(node_name) +
                '</div>' +
                '</div>']);

            // console.log($('#select-' + node_name).val());
            // var firstSelected = this.graph.node($('#select-' + node_name).val());
            // carousel.find('#node-price-'+node_name).html('Test');
            // carousel.trigger('refresh.owl.carousel');
            //
            // var $owl = $('.configurator-base-carousel');
            // var firstNode = this.graph.successors(node_name)[0];
            // $owl.find('#node-price-'+node_name).html(firstNode.price.g1.toFixed(2).replace('.', ',') + ' PLN');

            $(document.body).on('change', '#select-' + node_name, function () {
                var nodeName = $(this).val();
                var node = configurator.graph.node(nodeName);
                // console.log(node.price.g1);
                // $('#price').text(node.price.g1.toFixed(2).replace('.', ',') + ' PLN*');
                var $owl = $('.configurator-base-carousel');
                $owl.find('#node-price-' + node_name).html(node.price.g1.toFixed(2).replace('.', ',') + ' PLN');
                $owl.trigger('refresh.owl.carousel');
                console.log($owl.find('#node-price-' + node_name));
                console.log($owl.find('#node-price-' + node_name).html());
                configurator.step.selectedNodes[2] = node;
            });

            $('#select-' + node_name).val($('#select-' + node_name + ' option:first').val()).change();
        });

        carousel.trigger('refresh.owl.carousel');

        $('#item-color').remove();
        $('#step-content').after(this.addColor());
        this.refresh(this.graph.node(step));
    }

    onPartClick(selectedImg) {
        console.log(selectedImg);
        var $this = $(selectedImg);
        $('.box').removeClass('carousel-box-selected').addClass('carousel-box');
        var mainNode = configurator.step.selectedNodes[0];
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
            $this.removeClass('carousel-box-selected').addClass('carousel-box');
            $this.attr("node_name");
            $('#configurator-preview').find('#render-' + mainNode.name).remove();
            $('#price').attr("hidden",true);
            $('#price-vat').attr("hidden",true);
        } else {
            $this.addClass('clicked');
            $this.removeClass('carousel-box').addClass('carousel-box-selected');
            var nodeName = $this.attr("node_name");
            var baseNode = configurator.graph.node(nodeName);
            console.log(baseNode);

            var find = $('#configurator-preview').find('#render-' + mainNode.name);
            console.log(mainNode.name);
            if (find.length === 0) {
                $('#configurator-preview').append('<img id="render-' + mainNode.name + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + baseNode.render + '" />');
            }
            else {
                $(find).attr('src', 'renders/' + baseNode.render);
            }
            console.log(nodeName);
            var node = configurator.graph.node($('#select-' + nodeName).val());
            console.log(node.price.g1);
            $('#price').text(node.price.g1.toFixed(2).replace('.', ',') + ' PLN*').removeAttr('hidden');
            $('#price-vat').removeAttr('hidden');
            configurator.step.selectedNodes[1] = baseNode;
        }
    }

    addOption(node_name) {
        var successors = this.graph.successors(node_name);
        if (successors.length > 0) {
            var sb = '<div class="form-group">';
            sb += '<label class="label-small" for="select-' + node_name + '">Rozmiar</label>';
            sb += '<select class="form-control input-sm" name="base-size" id="select-' + node_name + '">';
            successors.forEach(s => {
                var node = this.graph.node(s);
                sb += '<option value="' + s + '">' + node.label + '</option>';
            });
            return sb + '</select></div>';
        }
        return '';
    }

    addColor() {
        var colors = {
            g1: [{name: 'Ontario', url: 'https://hilding.pl/png/product/Ontario-22_1524204950.png'},
                {name: 'Riviera', url: 'https://hilding.pl/png/product/riviera_62_1524205137.png'},
                {name: 'Eren', url: 'https://hilding.pl/png/product/Eren01Beige_1524204261.png'}],
            g2: [{name: 'Roko', url: 'https://hilding.pl/png/product/ROKO01_lightBeige_1524205239.png'},
                {name: 'Aspen', url: 'https://hilding.pl/png/product/Aspen_01_white_1524138625.png'},
                {name: 'Long Island', url: 'https://hilding.pl/png/product/LONG_ISLAND_01_white_1524204547.png'},
                {name: 'River', url: 'https://hilding.pl/png/product/River_01_White_1524205036.png'},
                // {name: 'Novel', url: 'https://hilding.pl/png/product/Novel_02_cream_1524204866.png'},
            ]
        };

        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz tkaninę</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-4 col-lg-offset-1">';
        addImageToDom(colors.g1, 'I');
        html += '</div>';

        html += '<div class="col-sm-7">';
        addImageToDom(colors.g2, 'II');
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group) {
            html += '<div class="row">';
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                console.log(color);
                html += '<div onclick="configurator.onColorSelect($(this))" class="img_tkan" style="background-image: url(\'' + color.url + '\')" ></div>';
                // html += '</div>';
            });
            html += '</div>';
            html += '<div class="row">';
            html += "<h6 class='bold'>grupa " + group + "</h6>";
            html += '</div>';
        }
    }

    onColorSelect(selectedColor) {
        var $this = $(selectedColor);
        $this.toggleClass('color-selected');
    }

}


$(document)

    .ready(
        function () {
            var Graph = graphlib.Graph;

// Create a new directed graph
            var g = new Graph();

// Add node "a" to the graph with no label
            g.setNode("start", {});
            g.setNode("step_1", {name: 'base',label: 'wybierz bazę', number: 1, zIndex: 10});
            g.setNode("base_box", {
                label: 'Base box',
                img: 'https://hilding.pl/png/product/base-box.jpg',
                render: 'baza kontynetalna_roko08.png'
            });
            g.setNode("baza_kontynentalna", {
                label: 'Kontynent',
                img: 'https://hilding.pl/png/product/kontynent.jpg',
                render: 'baza kontynetalna_roko08.png'
            });
            g.setNode("baza_kontynentalna_z_szuflada", {
                label: 'Kontynent</br>z szufladą',
                img: 'https://hilding.pl/png/product/kontynent-z-szuflada.jpg',
                render: 'baza kontynetalna_roko08.png'
            });
            g.setNode("baza_tapicerowana", {
                label: 'Baza tapicerowana',
                img: 'https://hilding.pl/png/product/baza-tapicerowana.jpg',
                render: 'baza kontynetalna_roko08.png'
            });
            g.setNode("box_podnoszony", {
                label: 'Box-podnoszony',
                img: 'https://hilding.pl/png/product/box-podnoszony.jpg',
                render: 'baza kontynetalna_roko08.png'
            });

            g.setNode("base_box_100_200", {label: '100/200', price: {g1: 1199, g2: 1299}});
            g.setNode("base_box_140_200", {label: '140/200', price: {g1: 1299, g2: 1749}});
            g.setNode("base_box_160_200", {label: '160/200', price: {g1: 1769, g2: 1869}});
            g.setNode("base_box_180_200", {label: '180/200', price: {g1: 2099, g2: 2199}});

            g.setNode("baza_kontynentalna_80_200", {label: '80/200', price: {g1: 1599, g2: 1749}});
            g.setNode("baza_kontynentalna_90_200", {label: '90/200', price: {g1: 1649, g2: 1799}});
            g.setNode("baza_kontynentalna_100_200", {label: '100/200', price: {g1: 1799, g2: 1949}});
            g.setNode("baza_kontynentalna_140_200", {label: '140/200', price: {g1: 2099, g2: 2299}});

            g.setNode("baza_kontynentalna_z_szuflada_80_200", {label: '80/200', price: {g1: 1999, g2: 2199}});
            g.setNode("baza_kontynentalna_z_szuflada_90_200", {label: '90/200', price: {g1: 2159, g2: 2359}});
            g.setNode("baza_kontynentalna_z_szuflada_100_200", {label: '100/200', price: {g1: 2349, g2: 2549}});
            g.setNode("baza_kontynentalna_z_szuflada_140_200", {label: '140/200', price: {g1: 3199, g2: 3399}});

            g.setNode("box_podnoszony_80_200", {label: '80/200', price: {g1: 2249, g2: 2399}});
            g.setNode("box_podnoszony_90_200", {label: '90/200', price: {g1: 2399, g2: 2549}});
            g.setNode("box_podnoszony_100_200", {label: '100/200', price: {g1: 2659, g2: 2859}});
            g.setNode("box_podnoszony_100_200", {label: '140/200', price: {g1: 3659, g2: 3859}});

            g.setNode("90_200", {label: '90/200'});
            g.setNode("140_200", {label: '140/200'});
            g.setNode("160_200", {label: '160/200'});
            g.setNode("180_200", {label: '180/200'});
            g.setNode("200_200", {label: '200/200'});

            g.setNode("colors_7", {});

            g.setNode("step_2", {label: 'wybierz wezgłowie', number: 2, zIndex: 5});
            g.setNode("glamour", {
                label: 'Glamour',
                img: 'https://hilding.pl/png/product/glamour.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("vintage", {
                label: 'Vintage',
                img: 'https://hilding.pl/png/product/vintage.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("electric", {
                label: 'Electric',
                img: 'https://hilding.pl/png/product/electric.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("ladylike", {
                label: 'Ladylike',
                img: 'https://hilding.pl/png/product/ladylike.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("preppy", {
                label: 'Preppy',
                img: 'https://hilding.pl/png/product/preppy.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("momiko", {
                label: 'Momiko',
                img: 'https://hilding.pl/png/product/momiko.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("urban", {
                label: 'Urban',
                img: 'https://hilding.pl/png/product/urban-wezglowie.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });

// => true

// What nodes are in the graph?
            g.nodes();
// => `[ 'a', 'b', 'c' ]`

// Add a directed edge from "a" to "b", but assign no label
            g.setEdge("start", "step_1");

// Add a directed edge from "c" to "d" with an Object label.
// Since "d" did not exist prior to this call it is automatically
// created with an undefined label.
            g.setEdge("step_1", "base_box");
            g.setEdge("step_1", "baza_kontynentalna_z_szuflada");
            g.setEdge("step_1", "box_podnoszony");
            g.setEdge("step_1", "baza_kontynentalna");
            g.setEdge("step_1", "baza_tapicerowana");

// What edges are in the graph?
            g.setEdge("base_box", "base_box_100_200");
            g.setEdge("base_box", "base_box_140_200");
            g.setEdge("base_box", "base_box_160_200");
            g.setEdge("base_box", "base_box_180_200");

            g.setEdge("baza_kontynentalna", "baza_kontynentalna_80_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_90_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_100_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_140_200");

            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_80_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_90_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_100_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_140_200");

            g.setEdge("box_podnoszony", "box_podnoszony_80_200");
            g.setEdge("box_podnoszony", "box_podnoszony_90_200");
            g.setEdge("box_podnoszony", "box_podnoszony_100_200");
            g.setEdge("box_podnoszony", "box_podnoszony_100_200");

            g.setEdge("140_200", "colors_7");
            g.setEdge("160_200", "colors_7");
            g.setEdge("180_200", "colors_7");

            g.setEdge("step_2", "glamour");
            g.setEdge("step_2", "vintage");
            g.setEdge("step_2", "electric");
            g.setEdge("step_2", "ladylike");
            g.setEdge("step_2", "preppy");
            g.setEdge("step_2", "momiko");
            g.setEdge("step_2", "urban");

// => `[ { v: 'a', w: 'b' },
//       { v: 'c', w: 'd' } ]`.

// Which edges leave node "a"?
            console.log(g.successors("step_1"));
            console.log(g.successors("base_box"));
// => `[ { v: 'a', w: 'b' } ]`

// Which edges enter and leave node "d"?
// => `[ { v: 'c
            var serialized = graphlib.json.write(g);
            console.log(serialized)

            var otomana = new Step(4, "otomanę", null, false, 'materac_tapicerowany_roko08.png');
            var materac = new Step(3, "materac", otomana, false, 'wezglowie_urban_95_roko08.png');
            var nohead = new Step(2, "wezgłowie", materac, true, 'baza kontynetalna_roko08.png');
            var base = new Step(1, "bazę", nohead, false, 'baza kontynetalna_roko08.png');
            configurator = new Configurator(base, g);
            configurator.start("step_1");
            configurator.refresh();
            // console.log(configurator.nextStep());

            // $( "#speed" ).selectmenu();
        }
    )
;