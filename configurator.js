class Step {


    constructor(number, title, skipEnable, img, optionsFilter) {
        this.number = number;
        this.title = title;
        this.previous = null;
        this.skipEnable = skipEnable;
        this.img = img;
        this.optionsFilter = optionsFilter;
        this.selectedNodes = [];
    }
}

class Configurator {
    constructor(startStep, graph) {
        this.step = startStep;
        this.graph = graph;
        this.allSteps = [];
        this.stepIndex = 0;
        this.width = 0;
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
            if (configurator.width === 0) {
                configurator.width = selectedNode.width;
            }
            this.loadLevel(selectedNode.nextStep);
        }
    }

    previousStep() {
        $('#configurator-preview img').last().remove();
        console.log(this.allSteps[this.stepIndex - 1].selectedNodes[0]);
        this.allSteps.pop();
        console.log('this.allSteps');
        console.log(this.allSteps);
        this.stepIndex = this.stepIndex - 1;
        var previousStepName = this.allSteps[this.stepIndex].selectedNodes[0].node;
        this.allSteps[this.stepIndex].selectedNodes = [];
        this.showPrice();
        this.loadLevel(previousStepName);
    }

    skipStep() {
        var selectedNode = this.step.selectedNodes[0];
        console.log(selectedNode);
        this.stepIndex = this.stepIndex + 1;
        if (selectedNode.skipToNode == 'summary') {
            this.loadSummary();
        } else {
            this.loadLevel(selectedNode.skipToNode);
        }
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

        if (this.step.skipEnable !== undefined) {
            $('#skip-step').show();
        } else {
            $('#skip-step').hide();
        }
    }

    loadLevel(step) {

        this.showStepInfo();
        $('#next-step').hide();

        var starNode = this.graph.node(step);
        console.log(starNode);
        this.step = new Step(starNode.number, starNode.title, starNode.skipToNode, 'baza kontynetalna_roko08.png', starNode.optionsFilter);
        this.step.selectedNodes[0] = starNode;
        // this.graph
        var successors = this.graph.successors(step);
        var stepElement = $('#step-content');
        stepElement.html('');
        var divElement = stepElement.append($('<div>').addClass("configurator-base-carousel owl-carousel owl-theme"));
        var items = 3;
        if (successors.length < 3) {
            items = successors.length;
        }
        var carousel = $('.configurator-base-carousel').owlCarousel({
            loop: false,
            items: items,
            nav: true,
            mouseDrag: false,
            margin: 30,
            dots: false,
            navText: ['<i class="svg prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>', '<i class="svg next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>'],
            // responsive: {
            //     0: {
            //         items: 1,
            //     },
            //     768: {
            //         items: 2,
            //     },
            //     992: {
            //         items: 3,
            //     }
            // }
        });
        let nodePrice = function (node_name) {
            return '<div><h6 class="dimension-price">Wymiar i cena</h6>' +
                '<p class="node-price blue-text" id="node-price-' + node_name + '" class="blue-text"></p>' +
                '<p style="font-size: 6px;">Cena zawiera podatek VAT 23 %</p></div>';
        };
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
                nodePrice(node_name) +
                this.addOption(node_name, successors) +
                '</div>' +
                '</div>']);

            if (counter === 1) {
                $('#select-' + node_name).parent().hide();
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
                if (price > 0) {
                    $owl.find('#node-price-' + node_name).html(configurator.numberWithSpaces(price) + ' PLN');
                }
                else {
                    $owl.find('#node-price-' + node_name).parent().hide();
                }
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
            $('#select-' + nodeName).prop("disabled", "disabled");
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
            $('.configurator-select').prop("disabled", "disabled");
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
                if(step.selectedNodes[2] != undefined) {
                    price += step.selectedNodes[2].price.g1;
                }
            }
        });
        $('#price').text(configurator.numberWithSpaces(price) + ' PLN*').removeAttr('hidden');
        $('#price-vat').removeAttr('hidden');
    }

    addOption(node_name, successors) {
        console.log('this.width');
        console.log(this.width);
        if (successors.length > 0) {
            var sb = '<div class="form-group">';
            sb += '<label class="label-small" for="select-' + node_name + '">Rozmiar</label>';
            sb += '<select disabled class="configurator-select form-control input-sm" name="base-size" id="select-' + node_name + '">';
            var optionNode = [];
            successors.forEach(s => {
                var node = this.graph.node(s);
                optionNode.push([s, node]);
                // sb += '<option value="' + s + '">' + node.label + '</option>';
            });
            if (this.step.optionsFilter && this.width > 0) {
                optionNode = optionNode.filter(function (elem) {
                    return elem[1].width == configurator.width;
                });
            }
            optionNode.forEach(node => {
                sb += '<option value="' + node[0] + '">' + node[1].label + '</option>';
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

        html += '<div class="col-sm-12">';
        // html += '<div class="center-block">';
        addImageToDom(g1Colors, 'I', 'text-align: right;');
        addImageToDom(g2Colors, 'II','text-align: left;');
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group, style) {
            // html += '<div class="row">';
            var counter = 0;
            html += '<div class="col-sm-6">';
            html += '<div class="center-block" style="' + style + '">';
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                html += '<div color="' + color.node + '" onclick="configurator.onColorSelect($(this))" class="img_tkan" style="background-image: url(\'' + color.url + '\')" ></div>';
                // html += '</div>';
            });
            html += '</div>';
            // html += '<div class="row">';
            html += '<h6 class="bold" style="' + style + '">grupa ' + group + '</h6>';
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
        $('#skip-step').hide();

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
            console.log('393');
            console.log(priceNode);
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 > 0) {
                str += '<div class="row summary-price-row"">';
                str += '<div class="col-sm-7 text-capitalize">' + step.selectedNodes[0].title + ' ' + step.selectedNodes[1].label.replace(/<br[^>]*>/gi, ' ') + ' ' + fabricName(step) + '</div>';
                str += '<div class="col-sm-5 text-right">' + this.numberWithSpaces(priceNode.price.g1) + ' PLN*</div>' +
                    '</div>';
                priceSum += priceNode.price.g1;
            }
        });
        str += '</div>';
        str += '<div class="col-sm-6 col-sm-offset-6 margin-top-25 margin-bottom-25">';
        str += '<h5>Wymiar i cena prezentowanego<br> zestawu:</h5>';
        str += '<h3 class="blue-text">' + this.numberWithSpaces(priceSum) + ' PLN</h3>';
        str += '<p id="price-vat">Cena zawiera podatek VAT 23 %</p>';
        str += '</div>';
        str += '<div class="row summary-btn-row">';
        str += '<div class="col-sm-6 text-center"><button class="btn text-uppercase btn-summary" onclick="location.href=\'https://hilding.pl/index/whereBuy\'" >Znajdź salon</button></div>';
        str += '<div class="col-sm-6 text-center"><button class="btn text-uppercase btn-summary">Wydrukuj</button></div>';
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
                colors: 'colors_7',
                optionsFilter: false
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

            g.setNode("base_box_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2 * 1199, g2: 2 * 1299},
                nextStep: 'step_2'
            });
            g.setNode("base_box_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2 * 1299, g2: 2 * 1749},
                nextStep: 'step_2'
            });
            g.setNode("base_box_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2 * 1769, g2: 2 * 1869},
                nextStep: 'step_2'
            });
            g.setNode("base_box_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2 * 2099, g2: 2 * 2199},
                nextStep: 'step_2'
            });

            g.setNode("baza_kontynentalna_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2 * 1599, g2: 2 * 1749},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2 * 1649, g2: 2 * 1799},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2 * 1799, g2: 2 * 1949},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2099, g2: 2299},
                nextStep: 'step_2'
            });

            g.setNode("baza_kontynentalna_z_szuflada_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2 * 1999, g2: 2 * 2199},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2 * 2159, g2: 2 * 2359},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2 * 2349, g2: 2 * 2549},
                nextStep: 'step_2'
            });
            g.setNode("baza_kontynentalna_z_szuflada_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 3199, g2: 3399},
                nextStep: 'step_2'
            });

            g.setNode("baza_tapicerowana_140_200", {
                label: '140/200',
                width: 140, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_160_200", {
                label: '180/200',
                width: 160, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_180_200", {
                label: '90/200',
                width: 180, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_200_200", {
                label: '200/200',
                width: 200, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });


            g.setNode("box_podnoszony_140_200", {
                label: '140/200',
                width: 140, price: {g1: 3659, g2: 3859}, nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2 * 2249, g2: 2 * 2399},
                nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2 * 2399, g2: 2 * 2549},
                nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2 * 2659, g2: 2 * 2859},
                nextStep: 'step_2'
            });

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
                colors: 'colors_7',
                optionsFilter: true
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

            g.setNode("urban_140_95", {label: '140/95', width: 140, price: {g1: 749, g2: 849}, nextStep: 'step_3'});
            g.setNode("urban_140_115", {label: '140/115', width: 140, price: {g1: 749, g2: 849}, nextStep: 'step_3'});
            g.setNode("urban_160_95", {label: '160/95', width: 160, price: {g1: 799, g2: 899}, nextStep: 'step_3'});
            g.setNode("urban_160_115", {label: '160/115', width: 160, price: {g1: 799, g2: 899}, nextStep: 'step_3'});
            g.setNode("urban_180_95", {label: '180/95', width: 180, price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("urban_180_115", {label: '180/115', width: 180, price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("urban_200_95", {label: '200/95', width: 200, price: {g1: 999, g2: 1099}, nextStep: 'step_3'});
            g.setNode("urban_200_115", {label: '200/115', width: 200, price: {g1: 999, g2: 1099}, nextStep: 'step_3'});

            g.setNode("preppy_140_95", {label: '140/95', width: 140, price: {g1: 1169, g2: 1269}, nextStep: 'step_3'});
            g.setNode("preppy_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1169, g2: 1269},
                nextStep: 'step_3'
            });
            g.setNode("preppy_160_95", {label: '160/95', width: 160, price: {g1: 1199, g2: 1299}, nextStep: 'step_3'});
            g.setNode("preppy_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1199, g2: 1299},
                nextStep: 'step_3'
            });
            g.setNode("preppy_180_95", {label: '180/95', width: 180, price: {g1: 1299, g2: 1399}, nextStep: 'step_3'});
            g.setNode("preppy_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1299, g2: 1399},
                nextStep: 'step_3'
            });
            g.setNode("preppy_200_95", {label: '200/95', width: 200, price: {g1: 1399, g2: 1499}, nextStep: 'step_3'});
            g.setNode("preppy_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_3'
            });

            g.setNode("glamour_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1369, g2: 1469},
                nextStep: 'step_3'
            });
            g.setNode("glamour_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_3'
            });
            g.setNode("glamour_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1559, g2: 1659},
                nextStep: 'step_3'
            });
            g.setNode("glamour_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1699, g2: 1799},
                nextStep: 'step_3'
            });

            g.setNode("vintage_140_95", {label: '140/95', width: 140, price: {g1: 1029, g2: 1129}, nextStep: 'step_3'});
            g.setNode("vintage_160_95", {label: '160/95', width: 160, price: {g1: 1059, g2: 1159}, nextStep: 'step_3'});
            g.setNode("vintage_180_95", {label: '180/95', width: 180, price: {g1: 1159, g2: 1259}, nextStep: 'step_3'});
            g.setNode("vintage_200_95", {label: '200/95', width: 200, price: {g1: 1259, g2: 1359}, nextStep: 'step_3'});

            g.setNode("vintage_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1029, g2: 1129},
                nextStep: 'step_3'
            });
            g.setNode("vintage_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1059, g2: 1159},
                nextStep: 'step_3'
            });
            g.setNode("vintage_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1159, g2: 1259},
                nextStep: 'step_3'
            });
            g.setNode("vintage_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1259, g2: 1359},
                nextStep: 'step_3'
            });

            g.setNode("momiko_140_95", {label: '140/95', width: 140, price: {g1: 869, g2: 969}, nextStep: 'step_3'});
            g.setNode("momiko_160_95", {label: '160/95', width: 160, price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("momiko_180_95", {label: '180/95', width: 180, price: {g1: 999, g2: 1099}, nextStep: 'step_3'});
            g.setNode("momiko_200_95", {label: '200/95', width: 200, price: {g1: 1099, g2: 1199}, nextStep: 'step_3'});

            g.setNode("momiko_140_115", {label: '140/115', width: 140, price: {g1: 869, g2: 969}, nextStep: 'step_3'});
            g.setNode("momiko_160_115", {label: '160/115', width: 160, price: {g1: 899, g2: 999}, nextStep: 'step_3'});
            g.setNode("momiko_180_115", {label: '180/115', width: 180, price: {g1: 999, g2: 1099}, nextStep: 'step_3'});
            g.setNode("momiko_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_3'
            });

            g.setNode("eclectic_140_95", {
                label: '140/95',
                width: 140,
                price: {g1: 1069, g2: 1169},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_160_95", {
                label: '160/95',
                width: 160,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_180_95", {
                label: '180/95',
                width: 180,
                price: {g1: 1199, g2: 1299},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_200_95", {
                label: '200/95',
                width: 200,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_3'
            });

            g.setNode("eclectic_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1069, g2: 1169},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1199, g2: 1299},
                nextStep: 'step_3'
            });
            g.setNode("eclectic_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_3'
            });

            g.setNode("ladylike_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 969, g2: 1069},
                nextStep: 'step_3'
            });
            g.setNode("ladylike_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 999, g2: 1099},
                nextStep: 'step_3'
            });
            g.setNode("ladylike_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_3'
            });
            g.setNode("ladylike_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1259, g2: 1359},
                nextStep: 'step_3'
            });

            g.setNode("step_3", {
                node: 'step_3',
                title: 'nóżki',
                label: 'wybierz nożki',
                number: 3,
                zIndex: 3,
                optionsFilter: false
            });

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

            g.setNode("stozek_owal_buk_16", {
                label: '200/95',
                price: {g1: 101.0, g2: 101.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_owal_wenge_16", {
                label: '200/95',
                price: {g1: 101.0, g2: 101.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_owal_dab_16", {
                label: '200/95',
                price: {g1: 132.0, g2: 132.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_buk_16", {
                label: '200/95',
                price: {g1: 36.0, g2: 36.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_dab_16", {
                label: '200/95',
                price: {g1: 50, g2: 50},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_wenge_16", {
                label: '200/95',
                price: {g1: 36, g2: 36},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_czern_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_miedz_16", {
                label: '200/95',
                price: {g1: 211, g2: 211},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_srebro_16", {
                label: '200/95',
                price: {g1: 163, g2: 163},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_czern_16", {
                label: '200/95',
                price: {g1: 108, g2: 108},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_miedz_16", {
                label: '200/95',
                price: {g1: 175, g2: 175},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_srebro_16", {
                label: '200/95',
                price: {g1: 115, g2: 115},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_czern_16", {
                label: '200/95',
                price: {g1: 136, g2: 136},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_miedz_16", {
                label: '200/95',
                price: {g1: 208, g2: 208},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_srebro_16", {
                label: '200/95',
                price: {g1: 145, g2: 145},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_czern_16", {
                label: '200/95',
                price: {g1: 55, g2: 55},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_miedz_16", {
                label: '200/95',
                price: {g1: 88, g2: 88},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_srebro_16", {
                label: '200/95',
                price: {g1: 61, g2: 61},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_czern_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_miedz_16", {
                label: '200/95',
                price: {g1: 211, g2: 211},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_srebro_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_czern_16", {
                label: '200/95',
                price: {g1: 92, g2: 92},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_miedz_16", {
                label: '200/95',
                price: {g1: 138, g2: 138},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_srebro_16", {
                label: '200/95',
                price: {g1: 114, g2: 114},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_buk_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_dab_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_wenge_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("step_typ_materaca", {
                node: 'step_typ_materaca',
                title: 'typ materac',
                label: 'wybierz typ materaca',
                number: 4,
                zIndex: 25,
                skipToNode: 'step_5'
            });

            g.setNode("materac_pokrowiec", {
                label: 'W pokrowcu',
                img: 'velvet.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_tapicerowany", {
                label: 'Tapicerowany',
                img: 'aspen_04.png',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_pokrowiec'});
            g.setNode("materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_tapicerowany'});

            g.setNode("step_pokrowiec", {
                node: 'step_pokrowiec',
                title: 'materac w pokrowcu',
                label: 'wybierz materac w pokrowcu',
                number: 4,
                zIndex: 25,
                optionsFilter: true
            });
            g.setNode("step_tapicerowany", {
                node: 'step_tapicerowany',
                title: 'materac tapicerowany',
                label: 'wybierz materac tapicerowany',
                number: 4,
                zIndex: 25,
                optionsFilter: true
            });

            g.setNode("step_4", {
                node: 'step_4',
                title: 'materac',
                label: 'wybierz materac',
                number: 4,
                zIndex: 25,
                skipToNode: 'step_5',
                optionsFilter: true
            });

            g.setNode("materac_tango", {
                label: 'Tango',
                img: 'tango.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_step", {
                label: 'Step',
                img: 'step.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_salsa", {
                label: 'Salsa',
                img: 'salsa.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_chacha", {
                label: 'Cha-Cha',
                img: 'cha-cha.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_pasodoble", {
                label: 'Pasodoble',
                img: 'pasadoble.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_flamenco", {
                label: 'Flamenco',
                img: 'flamenco.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_makarena", {
                label: 'Makarena',
                img: 'makarena.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_balet", {
                label: 'Balet',
                img: 'balet.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_rockroll", {
                label: 'Rock & Roll',
                img: 'cha-cha.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_foxtrot", {
                label: 'Foxtrot',
                img: 'foxtrot.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_mambo", {
                label: 'Mambo',
                img: 'mambo.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_rumba", {
                label: 'Rumba',
                img: 'rumba.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_latino", {
                label: 'Latino',
                img: 'latino.jpg',
                render: 'materac_salsa.png'
            });
            g.setNode("materac_zumba", {
                label: 'Zumba',
                img: 'zumba.jpg',
                render: 'materac_salsa.png'
            });


            g.setNode("materac_tango_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1029, g2: 1029},
                nextStep: 'step_5'
            });
            g.setNode("materac_tango_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1029, g2: 1029},
                nextStep: 'step_5'
            });
            g.setNode("materac_tango_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1299, g2: 1299},
                nextStep: 'step_5'
            });
            g.setNode("materac_tango_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1299, g2: 1299},
                nextStep: 'step_5'
            });

            g.setNode("materac_step_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 679, g2: 679},
                nextStep: 'step_5'
            });
            g.setNode("materac_step_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 679, g2: 679},
                nextStep: 'step_5'
            });
            g.setNode("materac_step_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 749, g2: 749},
                nextStep: 'step_5'
            });
            g.setNode("materac_step_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1138, g2: 1138},
                nextStep: 'step_5'
            });

            g.setNode("materac_salsa_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1119, g2: 1119},
                nextStep: 'step_5'
            });
            g.setNode("materac_salsa_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1119, g2: 1119},
                nextStep: 'step_5'
            });
            g.setNode("materac_salsa_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1359, g2: 1359},
                nextStep: 'step_5'
            });
            g.setNode("materac_salsa_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1519, g2: 1519},
                nextStep: 'step_5'
            });

            g.setNode("materac_chacha_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1929, g2: 2129},
                nextStep: 'step_5'
            });
            g.setNode("materac_chacha_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2099, g2: 2299},
                nextStep: 'step_5'
            });
            g.setNode("materac_chacha_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2299, g2: 2499},
                nextStep: 'step_5'
            });
            g.setNode("materac_chacha_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 3458, g2: 3858},
                nextStep: 'step_5'
            });

            g.setNode("materac_pasodoble_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1659, g2: 1659},
                nextStep: 'step_5'
            });
            g.setNode("materac_pasodoble_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1829, g2: 1829},
                nextStep: 'step_5'
            });
            g.setNode("materac_pasodoble_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1999, g2: 1999},
                nextStep: 'step_5'
            });
            g.setNode("materac_pasodoble_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2658, g2: 2658},
                nextStep: 'step_5'
            });

            g.setNode("materac_flamenco_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1659, g2: 1659},
                nextStep: 'step_5'
            });
            g.setNode("materac_flamenco_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1829, g2: 1829},
                nextStep: 'step_5'
            });
            g.setNode("materac_flamenco_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1999, g2: 1999},
                nextStep: 'step_5'
            });
            g.setNode("materac_flamenco_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2658, g2: 2658},
                nextStep: 'step_5'
            });

            g.setNode("materac_makarena_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 3059, g2: 3059},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 3399, g2: 3399},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 3749, g2: 3749},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 5118, g2: 5118},
                nextStep: 'step_5'
            });

            g.setNode("materac_balet_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 3559, g2: 3559},
                nextStep: 'step_5'
            });
            g.setNode("materac_balet_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 3949, g2: 3949},
                nextStep: 'step_5'
            });
            g.setNode("materac_balet_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 4349, g2: 4349},
                nextStep: 'step_5'
            });
            g.setNode("materac_balet_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 5758, g2: 5758},
                nextStep: 'step_5'
            });

            g.setNode("materac_rockroll_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1539, g2: 1539},
                nextStep: 'step_5'
            });
            g.setNode("materac_rockroll_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1699, g2: 1699},
                nextStep: 'step_5'
            });
            g.setNode("materac_rockroll_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1849, g2: 1849},
                nextStep: 'step_5'
            });
            g.setNode("materac_rockroll_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2438, g2: 2438},
                nextStep: 'step_5'
            });

            g.setNode("materac_foxtrot_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1639, g2: 1639},
                nextStep: 'step_5'
            });
            g.setNode("materac_foxtrot_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1799, g2: 1799},
                nextStep: 'step_5'
            });
            g.setNode("materac_foxtrot_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1959, g2: 1959},
                nextStep: 'step_5'
            });
            g.setNode("materac_foxtrot_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2678, g2: 2678},
                nextStep: 'step_5'
            });

            g.setNode("materac_mambo_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2429, g2: 2429},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2699, g2: 2699},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2929, g2: 2929},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 3898, g2: 3898},
                nextStep: 'step_5'
            });

            g.setNode("materac_rumba_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2699, g2: 2999},
                nextStep: 'step_5'
            });
            g.setNode("materac_rumba_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2999, g2: 3359},
                nextStep: 'step_5'
            });
            g.setNode("materac_rumba_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 3349, g2: 3699},
                nextStep: 'step_5'
            });
            g.setNode("materac_rumba_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 4598, g2: 4958},
                nextStep: 'step_5'
            });

            g.setNode("materac_latino_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2699, g2: 2699},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2999, g2: 2999},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 3279, g2: 3279},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 4518, g2: 4518},
                nextStep: 'step_5'
            });

            g.setNode("materac_zumba_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 3590, g2: 3590},
                nextStep: 'step_5'
            });
            g.setNode("materac_zumba_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 3999, g2: 3999},
                nextStep: 'step_5'
            });
            g.setNode("materac_zumba_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 4399, g2: 4399},
                nextStep: 'step_5'
            });
            g.setNode("materac_zumba_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 5738, g2: 5758},
                nextStep: 'step_5'
            });

            g.setNode("step_5", {
                node: 'step_5',
                title: 'materac nawierzchniowy',
                label: 'wybierz materac nawierzchniowy',
                number: 5,
                zIndex: 30,
                skipToNode: 'step_6',
                optionsFilter: true
            });

            g.setNode("materac_select_plus", {
                label: 'Select Plus Softex',
                img: 'jive.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_blues", {
                label: 'Blues',
                img: 'blues.jpg',
                render: 'materac_salsa.png'
            });


            g.setNode("materac_jive", {
                label: 'Jive',
                img: 'jive.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_select_top", {
                label: 'Select TOP',
                img: 'jive.jpg',
                render: 'materac_salsa.png'
            });

            g.setNode("materac_blues_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 799, g2: 799},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 799, g2: 799},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 879, g2: 879},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1079, g2: 1079},
                nextStep: 'step_6'
            });

            g.setNode("materac_jive_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 499, g2: 499},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 499, g2: 499},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 579, g2: 579},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 749, g2: 749},
                nextStep: 'step_6'
            });

            g.setNode("materac_select_plus_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 749, g2: 749},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 749, g2: 749},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 819, g2: 819},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1039, g2: 1039},
                nextStep: 'step_6'
            });

            g.setNode("materac_select_top_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 799, g2: 899},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 799, g2: 899},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 879, g2: 999},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1079, g2: 1229},
                nextStep: 'step_6'
            });

            g.setNode("step_6", {
                node: 'step_6',
                title: 'otomana',
                label: 'wybierz otomanę',
                number: 6,
                zIndex: 35,
                skipToNode: 'summary',
                optionsFilter: false
            });

            g.setNode("otomana", {
                label: 'Otomana',
                img: 'otomany.png',
                render: 'materac_salsa.png'
            });

            g.setNode("otomana_140", {label: '140/200', price: {g1: 1599, g2: 1849}, nextStep: 'summary'});
            g.setNode("otomana_160", {label: '160/200', price: {g1: 1699, g2: 2099}, nextStep: 'summary'});
            g.setNode("otomana_180", {label: '180/200', price: {g1: 1899, g2: 2169}, nextStep: 'summary'});

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

            g.setEdge("urban", "urban_140_115");
            g.setEdge("urban", "urban_160_115");
            g.setEdge("urban", "urban_180_115");
            g.setEdge("urban", "urban_200_115");

            g.setEdge("preppy", "preppy_140_95");
            g.setEdge("preppy", "preppy_160_95");
            g.setEdge("preppy", "preppy_180_95");
            g.setEdge("preppy", "preppy_200_95");

            g.setEdge("preppy", "preppy_140_115");
            g.setEdge("preppy", "preppy_160_115");
            g.setEdge("preppy", "preppy_180_115");
            g.setEdge("preppy", "preppy_200_115");

            g.setEdge("glamour", "glamour_140_115");
            g.setEdge("glamour", "glamour_160_115");
            g.setEdge("glamour", "glamour_180_115");
            g.setEdge("glamour", "glamour_200_115");

            g.setEdge("vintage", "vintage_140_95");
            g.setEdge("vintage", "vintage_160_95");
            g.setEdge("vintage", "vintage_180_95");
            g.setEdge("vintage", "vintage_200_95");

            g.setEdge("vintage", "vintage_140_115");
            g.setEdge("vintage", "vintage_160_115");
            g.setEdge("vintage", "vintage_180_115");
            g.setEdge("vintage", "vintage_200_115");

            g.setEdge("momiko", "momiko_140_95");
            g.setEdge("momiko", "momiko_160_95");
            g.setEdge("momiko", "momiko_180_95");
            g.setEdge("momiko", "momiko_200_95");

            g.setEdge("momiko", "momiko_140_115");
            g.setEdge("momiko", "momiko_160_115");
            g.setEdge("momiko", "momiko_180_115");
            g.setEdge("momiko", "momiko_200_115");

            g.setEdge("eclectic", "eclectic_140_95");
            g.setEdge("eclectic", "eclectic_160_95");
            g.setEdge("eclectic", "eclectic_180_95");
            g.setEdge("eclectic", "eclectic_200_95");

            g.setEdge("eclectic", "eclectic_140_115");
            g.setEdge("eclectic", "eclectic_160_115");
            g.setEdge("eclectic", "eclectic_180_115");
            g.setEdge("eclectic", "eclectic_200_115");

            g.setEdge("ladylike", "ladylike_140_115");
            g.setEdge("ladylike", "ladylike_160_115");
            g.setEdge("ladylike", "ladylike_180_115");
            g.setEdge("ladylike", "ladylike_200_115");

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
            g.setEdge("stozek_skos_buk", "stozek_skos_buk_16");
            g.setEdge("stozek_skos_dab", "stozek_skos_dab_16");
            g.setEdge("stozek_skos_wenge", "stozek_skos_wenge_16");
            g.setEdge("stozek_ze_stopka_czern", "stozek_ze_stopka_czern_16");
            g.setEdge("stozek_ze_stopka_miedz", "stozek_ze_stopka_miedz_16");
            g.setEdge("stozek_ze_stopka_srebro", "stozek_ze_stopka_srebro_16");
            g.setEdge("trojkat_prosty_czern", "trojkat_prosty_czern_16");
            g.setEdge("trojkat_prosty_miedz", "trojkat_prosty_miedz_16");
            g.setEdge("trojkat_prosty_srebro", "trojkat_prosty_srebro_16");
            g.setEdge("trojkat_skosny_czern", "trojkat_skosny_czern_16");
            g.setEdge("trojkat_skosny_miedz", "trojkat_skosny_miedz_16");
            g.setEdge("trojkat_skosny_srebro", "trojkat_skosny_srebro_16");
            g.setEdge("walek_srebro", "walek_srebro_16");
            g.setEdge("walek_miedz", "walek_miedz_16");
            g.setEdge("walek_srebro", "walek_srebro_16");
            g.setEdge("kielich_czern", "kielich_czern_16");
            g.setEdge("kielich_miedz", "kielich_miedz_16");
            g.setEdge("kielich_srebro", "kielich_srebro_16");
            g.setEdge("naroznik_czern", "naroznik_czern_16");
            g.setEdge("naroznik_miedz", "naroznik_miedz_16");
            g.setEdge("naroznik_srebro", "naroznik_srebro_16");
            g.setEdge("ploza_dab", "ploza_dab_16");
            g.setEdge("ploza_buk", "ploza_buk_16");
            g.setEdge("ploza_wenge", "ploza_wenge_16");

            g.setEdge("step_typ_materaca", "materac_pokrowiec");
            g.setEdge("step_typ_materaca", "materac_tapicerowany");

            g.setEdge("materac_pokrowiec", "materac_pokrowiec_1");
            g.setEdge("materac_tapicerowany", "materac_tapicerowany_1");

            g.setEdge("step_4", "materac_tango");
            g.setEdge("step_4", "materac_step");
            g.setEdge("step_4", "materac_pasodoble");
            g.setEdge("step_4", "materac_makarena");
            g.setEdge("step_4", "materac_balet");
            g.setEdge("step_4", "materac_rockroll");
            g.setEdge("step_4", "materac_mambo");
            g.setEdge("step_4", "materac_rumba");
            g.setEdge("step_4", "materac_latino");
            g.setEdge("step_4", "materac_zumba");

            g.setEdge("step_4", "materac_chacha");
            g.setEdge("step_4", "materac_foxtrot");
            g.setEdge("step_4", "materac_flamenco");

            g.setEdge("step_tapicerowany", "materac_foxtrot");
            g.setEdge("step_tapicerowany", "materac_chacha");
            g.setEdge("step_tapicerowany", "materac_flamenco");

            g.setEdge("step_pokrowiec", "materac_tango");
            g.setEdge("step_pokrowiec", "materac_step");
            g.setEdge("step_pokrowiec", "materac_pasodoble");
            g.setEdge("step_pokrowiec", "materac_makarena");
            g.setEdge("step_pokrowiec", "materac_balet");
            g.setEdge("step_pokrowiec", "materac_rockroll");
            g.setEdge("step_pokrowiec", "materac_mambo");
            g.setEdge("step_pokrowiec", "materac_rumba");
            g.setEdge("step_pokrowiec", "materac_latino");
            g.setEdge("step_pokrowiec", "materac_zumba");

            g.setEdge("materac_tango", "materac_tango_140_200");
            g.setEdge("materac_tango", "materac_tango_160_200");
            g.setEdge("materac_tango", "materac_tango_180_200");
            g.setEdge("materac_tango", "materac_tango_200_200");

            g.setEdge("materac_step", "materac_step_140_200");
            g.setEdge("materac_step", "materac_step_160_200");
            g.setEdge("materac_step", "materac_step_180_200");
            g.setEdge("materac_step", "materac_step_200_200");

            g.setEdge("materac_salsa", "materac_salsa_140_200");
            g.setEdge("materac_salsa", "materac_salsa_160_200");
            g.setEdge("materac_salsa", "materac_salsa_180_200");
            g.setEdge("materac_salsa", "materac_salsa_200_200");

            g.setEdge("materac_chacha", "materac_chacha_140_200");
            g.setEdge("materac_chacha", "materac_chacha_160_200");
            g.setEdge("materac_chacha", "materac_chacha_180_200");
            g.setEdge("materac_chacha", "materac_chacha_200_200");

            g.setEdge("materac_pasodoble", "materac_pasodoble_140_200");
            g.setEdge("materac_pasodoble", "materac_pasodoble_160_200");
            g.setEdge("materac_pasodoble", "materac_pasodoble_180_200");
            g.setEdge("materac_pasodoble", "materac_pasodoble_200_200");

            g.setEdge("materac_flamenco", "materac_flamenco_140_200");
            g.setEdge("materac_flamenco", "materac_flamenco_160_200");
            g.setEdge("materac_flamenco", "materac_flamenco_180_200");
            g.setEdge("materac_flamenco", "materac_flamenco_200_200");

            g.setEdge("materac_makarena", "materac_makarena_140_200");
            g.setEdge("materac_makarena", "materac_makarena_160_200");
            g.setEdge("materac_makarena", "materac_makarena_180_200");
            g.setEdge("materac_makarena", "materac_makarena_200_200");

            g.setEdge("materac_balet", "materac_balet_140_200");
            g.setEdge("materac_balet", "materac_balet_160_200");
            g.setEdge("materac_balet", "materac_balet_180_200");
            g.setEdge("materac_balet", "materac_balet_200_200");

            g.setEdge("materac_rockroll", "materac_rockroll_140_200");
            g.setEdge("materac_rockroll", "materac_rockroll_160_200");
            g.setEdge("materac_rockroll", "materac_rockroll_180_200");
            g.setEdge("materac_rockroll", "materac_rockroll_200_200");

            g.setEdge("materac_foxtrot", "materac_foxtrot_140_200");
            g.setEdge("materac_foxtrot", "materac_foxtrot_160_200");
            g.setEdge("materac_foxtrot", "materac_foxtrot_180_200");
            g.setEdge("materac_foxtrot", "materac_foxtrot_200_200");

            g.setEdge("materac_mambo", "materac_mambo_140_200");
            g.setEdge("materac_mambo", "materac_mambo_160_200");
            g.setEdge("materac_mambo", "materac_mambo_180_200");
            g.setEdge("materac_mambo", "materac_mambo_200_200");

            g.setEdge("materac_rumba", "materac_rumba_140_200");
            g.setEdge("materac_rumba", "materac_rumba_160_200");
            g.setEdge("materac_rumba", "materac_rumba_180_200");
            g.setEdge("materac_rumba", "materac_rumba_200_200");

            g.setEdge("materac_latino", "materac_latino_140_200");
            g.setEdge("materac_latino", "materac_latino_160_200");
            g.setEdge("materac_latino", "materac_latino_180_200");
            g.setEdge("materac_latino", "materac_latino_200_200");

            g.setEdge("materac_zumba", "materac_zumba_140_200");
            g.setEdge("materac_zumba", "materac_zumba_160_200");
            g.setEdge("materac_zumba", "materac_zumba_180_200");
            g.setEdge("materac_zumba", "materac_zumba_200_200");

            g.setEdge("step_5", "materac_select_plus");
            g.setEdge("step_5", "materac_blues");
            g.setEdge("step_5", "materac_jive");
            g.setEdge("step_5", "materac_select_top");

            g.setEdge("materac_blues", "materac_blues_140_200");
            g.setEdge("materac_blues", "materac_blues_160_200");
            g.setEdge("materac_blues", "materac_blues_180_200");
            g.setEdge("materac_blues", "materac_blues_200_200");

            g.setEdge("materac_jive", "materac_jive_140_200");
            g.setEdge("materac_jive", "materac_jive_160_200");
            g.setEdge("materac_jive", "materac_jive_180_200");
            g.setEdge("materac_jive", "materac_jive_200_200");

            g.setEdge("materac_select_top", "materac_select_top_140_200");
            g.setEdge("materac_select_top", "materac_select_top_160_200");
            g.setEdge("materac_select_top", "materac_select_top_180_200");
            g.setEdge("materac_select_top", "materac_select_top_200_200");

            g.setEdge("materac_select_plus", "materac_select_plus_140_200");
            g.setEdge("materac_select_plus", "materac_select_plus_160_200");
            g.setEdge("materac_select_plus", "materac_select_plus_180_200");
            g.setEdge("materac_select_plus", "materac_select_plus_200_200");

            g.setEdge("step_6", "otomana");

            g.setEdge("otomana", "otomana_140");
            g.setEdge("otomana", "otomana_160");
            g.setEdge("otomana", "otomana_180");


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