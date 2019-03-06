class Step {


    constructor(number, title, skipEnable, img) {
        this.number = number;
        this.title = title;
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
        this.allSteps = [];
        this.stepIndex = 0;
    }

    numberWithSpaces(x) {
        x = x.toFixed(2);
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(",");
    }

    nextStep() {
        // let actualStep = this.step;
        // this.step = this.step.nextStep;
        // this.step.previous = actualStep;
        // this.refresh();
        // $('#configurator-preview').append('<img class="img-responsive configurator-img" src="renders/' + this.step.img + '" />');

        var selectedNode = this.step.selectedNodes[2];
        console.log(selectedNode);
        this.stepIndex = this.stepIndex + 1;
        if (selectedNode.nextStep == 'summary') {
            this.loadSummary();
        } else {
            this.loadLevel(selectedNode.nextStep);
        }
    }

    previousStep() {
        $('#configurator-preview img').last().remove();
        console.log(this.allSteps[this.stepIndex - 1].selectedNodes[0]);
        this.stepIndex = this.stepIndex - 1;
        this.loadLevel(this.allSteps[this.stepIndex].selectedNodes[0].node);
    }

    skipStep() {
        this.nextStep();

    }

    start() {
        $('#configurator-start-view').remove();
        $('#configurator').show();
        this.loadLevel("step_1");
    }

    refresh(node) {
        console.log($('#step-title'));
        $('#step-number').text('Krok ' + node.number);
        $('#step-title').text(node.label);
        console.log('Step index:' + (this.stepIndex - 1));
        console.log(this.allSteps[this.stepIndex - 1]);
        if (this.allSteps[this.stepIndex - 1] == null) {
            $("#previous-step").hide();
        } else {
            $("#previous-step").show();
            $("#previous-step").text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
        }
        // if (this.step.nextStep !== null) {
        //     $('#next-step').hide();
        // } else {
        //     $('#next-step').show();
        //     $('#next-step').text('następny krok: ' + this.step.nextStep.title + ' >>');
        // }
        // $('#next-step').show();
        // console.log('Node ');
        // console.log(node);
        // $('#next-step').text('następny krok: ' + this.step.title + ' >>');

        if (this.step.skipEnable) {
            $('#skip-step').show();
        } else {
            $('#skip-step').hide();
        }
    }

    loadLevel(step) {

        this.showStepInfo();
        $('#next-step').hide();

        var starNode = this.graph.node(step);
        console.log(starNode.label);
        this.step = new Step(starNode.number, starNode.title, false, 'baza kontynetalna_roko08.png');
        this.step.selectedNodes[0] = starNode;
        // this.graph
        var successors = this.graph.successors(step);
        var stepElement = $('#step-content');
        stepElement.html('');
        var divElement = stepElement.append($('<div>').addClass("configurator-base-carousel owl-carousel owl-theme"));
        var carousel = $('.configurator-base-carousel').owlCarousel({
            loop: false,
            items: 3,
            nav: true,
            mouseDrag: false,
            margin: 30,
            dots: false,
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
            var successors = this.graph.successors(node_name);
            var counter = successors.length;
            carousel.trigger('add.owl.carousel',
                ['<div class="owl-item">' +
                '<div class="col-sm-12">' +
                '<div class="carousel-box box" node_name="' + node_name + '" onclick="configurator.onPartClick($(this))">' +
                '<div class="square" style="background-image: url(\'img/' + node.img + '\')" />' +
                '</div>' +
                '<div class="row"><h6 class="item-label text-center word-wrap" style="color: #212121;">' + node.label.toUpperCase() + '</h6></div>' +
                '<h6 class="dimension-price">Wymiar i cena</h6>' +
                '<div><p class="node-price blue-text" id="node-price-' + node_name + '" class="blue-text"></p>' +
                '<p style="font-size: 6px;">Cena zawiera podatek VAT 23 %</p></div>' +
                this.addOption(node_name, successors) +
                '</div>' +
                '</div>']);

            if(counter === 1){
                $('#select-' + node_name ).parent().hide();
            }

            $(document.body).on('change', '#select-' + node_name, function () {
                var nodeName = $(this).val();
                var node = configurator.graph.node(nodeName);
                var $owl = $('.configurator-base-carousel');
                var price = 0.0;
                if (configurator.step.selectedNodes[3] !== undefined && configurator.step.selectedNodes[3].g === 2) {
                    price = node.price.g2;
                }
                else {
                    price = node.price.g1;
                }

                $owl.find('#node-price-' + node_name).html(configurator.numberWithSpaces(price) + ' PLN');
                $owl.trigger('refresh.owl.carousel');
                configurator.step.selectedNodes[2] = node;
                configurator.showPrice();
            });

            $('#select-' + node_name).val($('#select-' + node_name + ' option:first').val()).change();
        });

        carousel.trigger('refresh.owl.carousel');

        $('#item-color').remove();

        console.log('starNode.colors');
        console.log(starNode);
        if (starNode.colors !== undefined) {
            $('#step-content').after(this.addColor(starNode.colors));
            $('.img_tkan:first').addClass('color-selected');
        }

        this.refresh(this.graph.node(step));

        this.allSteps[this.stepIndex] = this.step;

        if (this.allSteps[this.stepIndex - 1] !== undefined) {
            $("#previous-step").show();
            $("#previous-step").text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
        } else {
            $("#previous-step").hide();
        }
    }

    showStepInfo() {
        $('#step-number').show();
        $('#step-title').show();
        $('#item-color').show();
    }

    onPartClick(selectedImg) {
        var $this = $(selectedImg);
        $('.box').removeClass('carousel-box-selected').addClass('carousel-box');
        var nodeName = $this.attr("node_name");
        var mainNode = configurator.step.selectedNodes[0];
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
            $this.removeClass('carousel-box-selected').addClass('carousel-box');
            $this.attr("node_name");
            $('#configurator-preview').find('#render-' + mainNode.node).remove();
            $('#price').attr("hidden", true);
            $('#price-vat').attr("hidden", true);
            $('#select-' + nodeName).prop("disabled","disabled");
        } else {
            $this.addClass('clicked');
            $this.removeClass('carousel-box').addClass('carousel-box-selected');

            var baseNode = configurator.graph.node(nodeName);
            var find = $('#configurator-preview').find('#render-' + mainNode.node);
            if (find.length === 0) {
                $('#configurator-preview').append('<img id="render-' + mainNode.node + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + baseNode.render + '" />');
            } else {
                $(find).attr('src', 'renders/' + baseNode.render);
            }
            $('.configurator-select').prop("disabled","disabled");
            $('#select-' + nodeName).removeAttr("disabled");
            var node = configurator.graph.node($('#select-' + nodeName).val());
            configurator.step.selectedNodes[1] = baseNode;
            configurator.step.selectedNodes[2] = node;
            this.showPrice();

            $('#next-step').show();
            console.log('Node ');
            console.log(baseNode);
            let nextStep = configurator.graph.node(node.nextStep);
            console.log('nextStep');
            console.log(nextStep);
            $('#next-step').text('następny krok: ' + nextStep.title + ' >>');
        }
    }

    showPrice() {
        let price = 0.0;
        configurator.allSteps.forEach(step => {
            if (step.selectedNodes[3] !== undefined) {
                if (step.selectedNodes[3].g === 1) {
                    price += step.selectedNodes[2].price.g1;
                } else {
                    price += step.selectedNodes[2].price.g2;
                }
            }
            else {
                price += step.selectedNodes[2].price.g1;
            }
        });
        $('#price').text(configurator.numberWithSpaces(price) + ' PLN*').removeAttr('hidden');
        $('#price-vat').removeAttr('hidden');
    }

    addOption(node_name, successors) {
        if (successors.length > 0) {
            var sb = '<div class="form-group">';
            sb += '<label class="label-small" for="select-' + node_name + '">Rozmiar</label>';
            sb += '<select disabled class="configurator-select form-control input-sm" name="base-size" id="select-' + node_name + '">';
            successors.forEach(s => {
                var node = this.graph.node(s);
                sb += '<option value="' + s + '">' + node.label + '</option>';
            });
            return sb + '</select></div>';
        }
        return '';
    }

    addColor(colorsNode) {
        var allColorsNodeNames = this.graph.successors(colorsNode);
        var allColors = [];

        allColorsNodeNames.forEach(node => {
            allColors.push(this.graph.node(node));
        });

        var g1Colors = allColors.filter(function (color) {
            return color.g == 1;
        });

        var g2Colors = allColors.filter(function (color) {
            return color.g == 2;
        });

        g1Colors.forEach(color => {
            console.log(color.name);
        });

        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz tkaninę</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-4 col-lg-offset-1">';
        addImageToDom(g1Colors, 'I');
        html += '</div>';

        html += '<div class="col-sm-7">';
        addImageToDom(g2Colors, 'II');
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group) {
            html += '<div class="row">';
            var counter = 0;
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                html += '<div color="' + color.node + '" onclick="configurator.onColorSelect($(this))" class="img_tkan" style="background-image: url(\'' + color.url + '\')" ></div>';
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

        console.log('selectedColor');
        console.log(selectedColor);
        console.log($this.attr('color'));

        let colorNode = configurator.graph.node($this.attr('color'));
        configurator.step.selectedNodes[3] = colorNode;

        $('.img_tkan').removeClass('color-selected');

        // this.graph
        var successors = configurator.graph.successors(this.step.selectedNodes[0].node);
        var $owl = $('.configurator-base-carousel');

        successors.forEach(base_node_name => {
            console.log(base_node_name);
            // let baseNode = configurator.graph.node(base_node_name);

            var val = $('#select-' + base_node_name).val();
            console.log(val);
            var node = configurator.graph.node(val);
            console.log(node);
            if (node !== undefined) {
                if (colorNode.g === 1) {
                    $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
                } else {
                    $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
                }
            }
        });

        configurator.showPrice();
        $this.toggleClass('color-selected');
    }

    loadSummary() {
        $('#step-number').hide();
        $('#step-title').hide();
        $('#item-color').hide();
        $('#next-step').hide();

        var stepElement = $('#step-content');
        stepElement.html('');
        // var divElement = stepElement.append($('<div>').addClass("row").append($('h3').text('Podsumowanie')));
        let str = '<div class="col-sm-12">';
        str += '<h2 class="text-center text-uppercase">podsumowanie</h2>';
        let priceSum = 0.0;
        let fabricName = function (step) {
            return step.selectedNodes[3] !== undefined ? step.selectedNodes[3].name : '';
        };
        this.allSteps.forEach(step => {
            var priceNode = step.selectedNodes[2];
            str += '<div class="row summary-price-row"">';
            str += '<div class="col-sm-6 text-capitalize">' + step.selectedNodes[0].title + ' ' + step.selectedNodes[1].label.replace(/<br[^>]*>/gi,' ') + ' ' + fabricName(step) + '</div>';
            str += '<div class="col-sm-6 text-right">' + this.numberWithSpaces(priceNode.price.g1) + ' PLN*</div>' +
                '</div>';
            priceSum += priceNode.price.g1;
        });
        str += '</div>';
        str += '<div class="col-sm-6 col-sm-offset-6 margin-top-25 margin-bottom-25">';
        str += '<h5>Wymiar i cena prezentowanego<br> zestawu:</h5>';
        str += '<h3 class="blue-text">' + this.numberWithSpaces(priceSum) + ' PLN</h3>';
        str += '<p id="price-vat">Cena zawiera podatek VAT 23 %</p>';
        str += '</div>';
        str += '<div class="row summary-btn-row">';
        str += '<div class="col-sm-4 text-center"><button class="btn text-uppercase btn-summary" onclick="location.href=\'https://hilding.pl/index/whereBuy\'" >Znajdź salon</button></div>';
        str += '<div class="col-sm-4 text-center"><button class="btn text-uppercase btn-summary">Zamów online</button></div>';
        str += '<div class="col-sm-4 text-center"><button class="btn text-uppercase btn-summary">Wydrukuj</button></div>';
        str += '</div>';
        stepElement.html(str);
    }
}


$(document)

    .ready(
        function () {
            var Graph = graphlib.Graph;
            var g = new Graph();

            g.setNode("summary", {node: 'summary', title: 'Podsumowanie'});
            g.setNode("loadLevel", {});
            g.setNode("step_1", {
                node: 'step_1',
                title: 'baza',
                label: 'wybierz bazę',
                number: 1,
                zIndex: 10,
                colors: 'colors_7'
            });
            g.setNode("base_box", {
                label: 'Base box',
                img: 'baza_base_box.jpg',
                render: 'baza kontynetalna_roko08.png',

            });
            g.setNode("baza_kontynentalna", {
                label: 'Kontynent',
                img: 'kontynent.jpg',
                render: 'baza kontynetalna_roko08.png',
            });
            g.setNode("baza_kontynentalna_z_szuflada", {
                label: 'Kontynent</br>z szufladą',
                img: 'kontynent_z_szuflada.jpg',
                render: 'baza kontynetalna_roko08.png',
            });
            g.setNode("baza_tapicerowana", {
                label: 'Baza tapicerowana',
                img: 'baza_tapicerowana.jpg',
                render: 'baza kontynetalna_roko08.png',
            });
            g.setNode("box_podnoszony", {
                label: 'Box-podnoszony',
                img: 'box_podnoszony.jpg',
                render: 'baza kontynetalna_roko08.png',
            });

            g.setNode("base_box_200_200", {label: '200/200', price: {g1: 2*1199, g2: 2*1299}, nextStep: 'step_2'});
            g.setNode("base_box_140_200", {label: '140/200', price: {g1: 2*1299, g2: 2*1749}, nextStep: 'step_2'});
            g.setNode("base_box_160_200", {label: '160/200', price: {g1: 2*1769, g2: 2*1869}, nextStep: 'step_2'});
            g.setNode("base_box_180_200", {label: '180/200', price: {g1: 2*2099, g2: 2*2199}, nextStep: 'step_2'});

            g.setNode("baza_kontynentalna_160_200", {label: '160/200', price: {g1: 2*1599, g2: 2*1749}, nextStep: 'step_2'});
            g.setNode("baza_kontynentalna_180_200", {label: '180/200', price: {g1: 2*1649, g2: 2*1799}, nextStep: 'step_2'});
            g.setNode("baza_kontynentalna_200_200", {
                label: '200/200',
                price: {g1: 2*1799, g2: 2*1949},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_140_200", {
                label: '140/200',
                price: {g1: 2099, g2: 2299},
                nextStep: 'step_2'
            });

            g.setNode("baza_kontynentalna_z_szuflada_160_200", {
                label: '160/200',
                price: {g1: 2*1999, g2: 2*2199},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_180_200", {
                label: '180/200',
                price: {g1: 2*2159, g2: 2*2359},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_200_200", {
                label: '200/200',
                price: {g1: 2*2349, g2: 2*2549},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_140_200", {
                label: '140/200',
                price: {g1: 3199, g2: 3399},
                nextStep: 'step_2'
            });

            g.setNode("baza_tapicerowana_140_200", {label: '140/200', price: {g1: 0, g2: 0}, nextStep: 'step_2'});
            g.setNode("baza_tapicerowana_160_200", {label: '180/200', price: {g1: 0, g2: 0}, nextStep: 'step_2'});
            g.setNode("baza_tapicerowana_180_200", {label: '90/200', price: {g1: 0, g2: 0}, nextStep: 'step_2'});
            g.setNode("baza_tapicerowana_200_200", {label: '200/200', price: {g1: 0, g2: 0}, nextStep: 'step_2'});


            g.setNode("box_podnoszony_140_200", {label: '140/200', price: {g1: 3659, g2: 3859}, nextStep: 'step_2'});
            g.setNode("box_podnoszony_160_200", {label: '160/200', price: {g1: 2*2249, g2: 2*2399}, nextStep: 'step_2'});
            g.setNode("box_podnoszony_180_200", {label: '180/200', price: {g1: 2*2399, g2: 2*2549}, nextStep: 'step_2'});
            g.setNode("box_podnoszony_200_200", {label: '200/200', price: {g1: 2*2659, g2: 2*2859}, nextStep: 'step_2'});

            g.setNode("colors_7", {});

            g.setNode("color_novel", {
                g: 1,
                name: 'novel',
                node: 'color_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png'
            });
            g.setNode("color_roko", {
                g: 1,
                name: 'roko',
                node: 'color_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png'
            });
            g.setNode("color_aspen", {
                g: 1,
                name: 'aspen',
                node: 'color_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png'
            });

            g.setNode("color_river", {
                g: 2,
                name: 'river',
                node: 'color_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png'
            });
            g.setNode("color_eren", {
                g: 2,
                name: 'eren',
                node: 'color_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png'
            });
            g.setNode("color_ontario", {
                g: 2,
                name: 'ontario',
                node: 'color_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png'
            });
            g.setNode("color_riviera", {
                g: 2,
                name: 'riviera',
                node: 'color_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png'
            });


            g.setNode("step_2", {
                node: 'step_2',
                title: 'wezgłowie',
                label: 'wybierz wezgłowie',
                number: 2,
                zIndex: 5,
                colors: 'colors_7'
            });

            g.setNode("glamour", {
                label: 'Glamour',
                img: 'glamour.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("vintage", {
                label: 'Vintage',
                img: 'vintage.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("eclectic", {
                label: 'Eclectic',
                img: 'electric.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("ladylike", {
                label: 'Ladylike',
                img: 'ladylike.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("preppy", {
                label: 'Preppy',
                img: 'preppy.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("momiko", {
                label: 'Momiko',
                img: 'momiko.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });
            g.setNode("urban", {
                label: 'Urban',
                img: 'urban.jpg',
                render: 'wezglowie_urban_95_roko08.png'
            });

            g.setNode("urban_140_95", {label: '140/95', price: {g1: 749, g2: 849}, nextStep: 'step_3'});
            g.setNode("urban_160_95", {label: '160/95', price: {g1: 799, g2: 899}, nextStep: 'step_3'});
            g.setNode("urban_180_95", {label: '180/95', price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("urban_200_95", {label: '180/95', price: {g1: 999, g2: 1099}, nextStep: 'step_3'});

            g.setNode("preppy_140_95", {label: '140/95', price: {g1: 1169, g2: 1269}, nextStep: 'step_3'});
            g.setNode("preppy_160_95", {label: '160/95', price: {g1: 1199, g2: 1299}, nextStep: 'step_3'});
            g.setNode("preppy_180_95", {label: '180/95', price: {g1: 1299, g2: 1399}, nextStep: 'step_3'});
            g.setNode("preppy_200_95", {label: '200/95', price: {g1: 1399, g2: 1499}, nextStep: 'step_3'});

            g.setNode("glamour_140_95", {label: '140/95', price: {g1: 1369, g2: 1469}, nextStep: 'step_3'});
            g.setNode("glamour_160_95", {label: '160/95', price: {g1: 1399, g2: 1499}, nextStep: 'step_3'});
            g.setNode("glamour_180_95", {label: '180/95', price: {g1: 1559, g2: 1659}, nextStep: 'step_3'});
            g.setNode("glamour_200_95", {label: '200/95', price: {g1: 1699, g2: 1799}, nextStep: 'step_3'});

            g.setNode("vintage_140_95", {label: '140/95', price: {g1: 1029, g2: 1129}, nextStep: 'step_3'});
            g.setNode("vintage_160_95", {label: '160/95', price: {g1: 1059, g2: 1159}, nextStep: 'step_3'});
            g.setNode("vintage_180_95", {label: '180/95', price: {g1: 1159, g2: 1259}, nextStep: 'step_3'});
            g.setNode("vintage_200_95", {label: '200/95', price: {g1: 1259, g2: 1359}, nextStep: 'step_3'});

            g.setNode("momiko_140_95", {label: '140/95', price: {g1: 869, g2: 969}, nextStep: 'step_3'});
            g.setNode("momiko_160_95", {label: '160/95', price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("momiko_180_95", {label: '180/95', price: {g1: 999, g2: 1099}, nextStep: 'step_3'});
            g.setNode("momiko_200_95", {label: '200/95', price: {g1: 1099, g2: 1199}, nextStep: 'step_3'});

            g.setNode("eclectic_140_95", {label: '140/95', price: {g1: 1069, g2: 1169}, nextStep: 'step_3'});
            g.setNode("eclectic_160_95", {label: '160/95', price: {g1: 1099, g2: 1199}, nextStep: 'step_3'});
            g.setNode("eclectic_180_95", {label: '180/95', price: {g1: 1199, g2: 1299}, nextStep: 'step_3'});
            g.setNode("eclectic_200_95", {label: '200/95', price: {g1: 1399, g2: 1499}, nextStep: 'step_3'});

            g.setNode("ladylike_140_95", {label: '140/95', price: {g1: 969, g2: 1069}, nextStep: 'step_3'});
            g.setNode("ladylike_160_95", {label: '160/95', price: {g1: 999, g2: 1099}, nextStep: 'step_3'});
            g.setNode("ladylike_180_95", {label: '180/95', price: {g1: 1099, g2: 1199}, nextStep: 'step_3'});
            g.setNode("ladylike_200_95", {label: '200/95', price: {g1: 1259, g2: 1359}, nextStep: 'step_3'});

            g.setNode("step_3", {node: 'step_3', title: 'nóżki', label: 'wybierz nożki', number: 3, zIndex: 3});

            g.setNode("stozek_owal_buk", {
                label: 'Stożek owal buk',
                img: 'stozek_owal_buk.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_dab", {
                label: 'Stożek owal dąb',
                img: 'stozek_owal_dab.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_wenge", {
                label: 'Stożek owal wenge',
                img: 'stozek_owal_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_buk", {
                label: 'Stożek skos buk',
                img: 'stozek_skos_buk.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_dab", {
                label: 'Stożek skos dąb',
                img: 'stozek_skos_dab.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_wenge", {
                label: 'Stożek skos wenge',
                img: 'stozek_skos_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_czern", {
                label: 'Stożek ze stópką czerń',
                img: 'stozek_ze_stopka_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_miedz", {
                label: 'Stożek ze stópką miedź',
                img: 'stozek_ze_stopka_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_srebro", {
                label: 'Stożek ze stópką srebro',
                img: 'stozek_ze_stopka_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_czern", {
                label: 'Trójkąt prosty czerń',
                img: 'trojkat_prosty_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_miedz", {
                label: 'Trójkąt prosty miedź',
                img: 'trojkat_prosty_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_srebro", {
                label: 'Trójkąt prosty srebro',
                img: 'trojkat_prosty_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_czern", {
                label: 'Trójkąt skośny czerń',
                img: 'trojkat_skosny_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_miedz", {
                label: 'Trójkąt skośny miedź',
                img: 'trojkat_skosny_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_srebro", {
                label: 'Trójkąt skośny srebro',
                img: 'trojkat_skosny_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_czern", {
                label: 'Wałek czerń',
                img: 'walek_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_czern", {
                label: 'Wałek czerń',
                img: 'walek_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_miedz", {
                label: 'Wałek miedź',
                img: 'walek_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_srebro", {
                label: 'Wałek srebro',
                img: 'walek_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_czern", {
                label: 'Kielich czerń',
                img: 'kielich_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_miedz", {
                label: 'Kielich miedź',
                img: 'kielich_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_srebro", {
                label: 'Kielich srebro',
                img: 'kielich_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_czern", {
                label: 'Narożnik czerń',
                img: 'naroznik_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_miedz", {
                label: 'Narożnik miedź',
                img: 'naroznik_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_srebro", {
                label: 'Narożnik srebro',
                img: 'naroznik_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("ploza_buk", {
                label: 'Płoza buk',
                img: 'ploza_buk.jpg',
                render: 'n04_03.png'
            });
            g.setNode("ploza_dab", {
                label: 'Płoza dąb',
                img: 'ploza_dab.jpg',
                render: 'n04_03.png'
            });
            g.setNode("ploza_wenge", {
                label: 'Płoza wenge',
                img: 'ploza_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_buk_16", {label: '200/95', price: {g1: 100.8, g2: 100.8}, nextStep: 'step_4'});
            g.setNode("stozek_owal_wenge_16", {label: '200/95', price: {g1: 100.8, g2: 100.8}, nextStep: 'step_4'});
            g.setNode("stozek_owal_dab_16", {label: '200/95', price: {g1: 132, g2: 132}, nextStep: 'step_4'});

            g.setNode("step_4", {node: 'step_4', title: 'materac', label: 'wybierz materac', number: 4, zIndex: 25});

            g.setNode("materac_tango", {
                label: 'Blues',
                img: 'https://hilding.pl/png/product/tango.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_step", {
                label: 'Step',
                img: 'https://hilding.pl/png/product/step.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_salsa", {
                label: 'Salsa',
                img: 'https://hilding.pl/png/product/salsa.jpg',
                render: 'materac_salsa.png'
            });


            g.setNode("materac_tango_80_200", {label: '80/200', price: {g1: 1029, g2: 1029}, nextStep: 'summary'});
            g.setNode("materac_tango_90_200", {label: '90/200', price: {g1: 1029, g2: 1029}, nextStep: 'summary'});
            g.setNode("materac_tango_100_200", {label: '100/200', price: {g1: 1299, g2: 1299}, nextStep: 'summary'});

            g.setNode("materac_step_80_200", {label: '80/200', price: {g1: 509, g2: 509}, nextStep: 'summary'});
            g.setNode("materac_step_90_200", {label: '90/200', price: {g1: 509, g2: 509}, nextStep: 'summary'});
            g.setNode("materac_step_100_200", {label: '100/200', price: {g1: 569, g2: 569}, nextStep: 'summary'});

            g.setNode("materac_salsa_80_200", {label: '80/200', price: {g1: 1119, g2: 1119}, nextStep: 'summary'});
            g.setNode("materac_salsa_90_200", {label: '90/200', price: {g1: 1119, g2: 1119}, nextStep: 'summary'});
            g.setNode("materac_salsa_100_200", {label: '100/200', price: {g1: 1359, g2: 1359}, nextStep: 'summary'});
            g.setNode("materac_salsa_120_200", {label: '120/200', price: {g1: 1519, g2: 1519}, nextStep: 'summary'});


// => true

// What nodes are in the graph?
            g.nodes();
// => `[ 'a', 'b', 'c' ]`

// Add a directed edge from "a" to "b", but assign no label
            g.setEdge("loadLevel", "step_1");

// Add a directed edge from "c" to "d" with an Object label.
// Since "d" did not exist prior to this call it is automatically
// created with an undefined label.
            g.setEdge("step_1", "base_box");
            g.setEdge("step_1", "baza_kontynentalna_z_szuflada");
            g.setEdge("step_1", "box_podnoszony");
            g.setEdge("step_1", "baza_kontynentalna");
            g.setEdge("step_1", "baza_tapicerowana");

            g.setEdge("base_box", "base_box_140_200");
            g.setEdge("base_box", "base_box_160_200");
            g.setEdge("base_box", "base_box_180_200");
            g.setEdge("base_box", "base_box_200_200");

            g.setEdge("baza_kontynentalna", "baza_kontynentalna_140_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_160_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_180_200");
            g.setEdge("baza_kontynentalna", "baza_kontynentalna_200_200");

            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_140_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_160_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_180_200");
            g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_200_200");

            g.setEdge("baza_tapicerowana", "baza_tapicerowana_140_200");
            g.setEdge("baza_tapicerowana", "baza_tapicerowana_160_200");
            g.setEdge("baza_tapicerowana", "baza_tapicerowana_180_200");
            g.setEdge("baza_tapicerowana", "baza_tapicerowana_200_200");

            g.setEdge("box_podnoszony", "box_podnoszony_140_200");
            g.setEdge("box_podnoszony", "box_podnoszony_160_200");
            g.setEdge("box_podnoszony", "box_podnoszony_180_200");
            g.setEdge("box_podnoszony", "box_podnoszony_200_200");


            g.setEdge("colors_7", "color_novel");
            g.setEdge("colors_7", "color_roko");
            g.setEdge("colors_7", "color_aspen");
            g.setEdge("colors_7", "color_river");
            g.setEdge("colors_7", "color_eren");
            g.setEdge("colors_7", "color_ontario");
            g.setEdge("colors_7", "color_riviera");


            g.setEdge("step_2", "urban");
            g.setEdge("step_2", "preppy");
            g.setEdge("step_2", "glamour");
            g.setEdge("step_2", "vintage");
            g.setEdge("step_2", "eclectic");
            g.setEdge("step_2", "ladylike");
            g.setEdge("step_2", "momiko");

            g.setEdge("urban", "urban_140_95");
            g.setEdge("urban", "urban_160_95");
            g.setEdge("urban", "urban_180_95");
            g.setEdge("urban", "urban_200_95");

            g.setEdge("preppy", "preppy_140_95");
            g.setEdge("preppy", "preppy_160_95");
            g.setEdge("preppy", "preppy_180_95");
            g.setEdge("preppy", "preppy_200_95");

            g.setEdge("glamour", "glamour_140_95");
            g.setEdge("glamour", "glamour_160_95");
            g.setEdge("glamour", "glamour_180_95");
            g.setEdge("glamour", "glamour_200_95");

            g.setEdge("vintage", "vintage_140_95");
            g.setEdge("vintage", "vintage_160_95");
            g.setEdge("vintage", "vintage_180_95");
            g.setEdge("vintage", "vintage_200_95");

            g.setEdge("momiko", "momiko_140_95");
            g.setEdge("momiko", "momiko_160_95");
            g.setEdge("momiko", "momiko_180_95");
            g.setEdge("momiko", "momiko_200_95");

            g.setEdge("eclectic", "eclectic_140_95");
            g.setEdge("eclectic", "eclectic_160_95");
            g.setEdge("eclectic", "eclectic_180_95");
            g.setEdge("eclectic", "eclectic_200_95");

            g.setEdge("ladylike", "ladylike_140_95");
            g.setEdge("ladylike", "ladylike_160_95");
            g.setEdge("ladylike", "ladylike_180_95");
            g.setEdge("ladylike", "ladylike_200_95");

            g.setEdge("step_3", "stozek_owal_buk");
            g.setEdge("step_3", "stozek_owal_dab");
            g.setEdge("step_3", "stozek_owal_wenge");
            g.setEdge("step_3", "stozek_skos_buk");
            g.setEdge("step_3", "stozek_skos_dab");
            g.setEdge("step_3", "stozek_skos_wenge");
            g.setEdge("step_3", "stozek_ze_stopka_czern");
            g.setEdge("step_3", "stozek_ze_stopka_miedz");
            g.setEdge("step_3", "stozek_ze_stopka_srebro");
            g.setEdge("step_3", "trojkat_prosty_czern");
            g.setEdge("step_3", "trojkat_prosty_miedz");
            g.setEdge("step_3", "trojkat_prosty_srebro");
            g.setEdge("step_3", "trojkat_skosny_czern");
            g.setEdge("step_3", "trojkat_skosny_miedz");
            g.setEdge("step_3", "trojkat_skosny_srebro");
            g.setEdge("step_3", "walek_srebro");
            g.setEdge("step_3", "walek_miedz");
            g.setEdge("step_3", "walek_srebro");
            g.setEdge("step_3", "kielich_czern");
            g.setEdge("step_3", "kielich_miedz");
            g.setEdge("step_3", "kielich_srebro");
            g.setEdge("step_3", "naroznik_czern");
            g.setEdge("step_3", "naroznik_miedz");
            g.setEdge("step_3", "naroznik_srebro");
            g.setEdge("step_3", "ploza_dab");
            g.setEdge("step_3", "ploza_buk");
            g.setEdge("step_3", "ploza_wenge");


            g.setEdge("stozek_owal_buk", "stozek_owal_buk_16");
            g.setEdge("stozek_owal_wenge", "stozek_owal_wenge_16");
            g.setEdge("stozek_owal_dab", "stozek_owal_dab_16");

            g.setEdge("step_4", "materac_tango");
            g.setEdge("step_4", "materac_step");
            g.setEdge("step_4", "materac_salsa");

            g.setEdge("materac_tango", "materac_tango_80_200");
            g.setEdge("materac_tango", "materac_tango_90_200");
            g.setEdge("materac_tango", "materac_tango_100_200");


            g.setEdge("materac_step", "materac_step_80_200");
            g.setEdge("materac_step", "materac_step_90_200");
            g.setEdge("materac_step", "materac_step_100_200");

            g.setEdge("materac_salsa", "materac_salsa_80_200");
            g.setEdge("materac_salsa", "materac_salsa_90_200");
            g.setEdge("materac_salsa", "materac_salsa_100_200");
            g.setEdge("materac_salsa", "materac_salsa_120_200");


            var serialized = graphlib.json.write(g);
            console.log(serialized)

            var otomana = new Step(4, "otomanę", false, 'materac_tapicerowany_roko08.png');
            var materac = new Step(3, "materac", false, 'wezglowie_urban_95_roko08.png');
            var nohead = new Step(2, "wezgłowie", true, 'baza kontynetalna_roko08.png');
            var base = new Step(1, "bazę", false, 'baza kontynetalna_roko08.png');
            configurator = new Configurator(base, g);
        }
    )
;