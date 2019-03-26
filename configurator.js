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
        this.selectedColor = undefined;
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
            if (configurator.step.number === 1) {
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
        if(this.allSteps[this.stepIndex].selectedNodes[0] !== undefined && this.allSteps[this.stepIndex].selectedNodes[0].overlay !== undefined){
            $('#render-overlay').remove();
        }
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
        $('#item-color').remove();

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
        var center = false;
        if (successors.length < 3) {
            if (successors.length === 2) {
                items = 2;
            }
            else {
                center = true;
            }
        };
        var carousel = $('.configurator-base-carousel').owlCarousel({
            loop: false,
            items: items,
            center: center,
            nav: true,
            mouseDrag: false,
            margin: 0,
            autoWidth: false,
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
            // },

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
                $('.dimension-price').text('Cena');
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
                    if(node !== undefined) {
                        price = node.price.g1;
                    }
                }
                if (price > 0) {
                    $owl.find('#node-price-' + node_name).html(configurator.numberWithSpaces(price) + ' PLN');
                    if (configurator.step.selectedNodes[0].number === 2) {
                        console.log('wezglowie');
                        var find = $('img#render-' + configurator.step.selectedNodes[0].node);
                        var src = $('#render-' + configurator.step.selectedNodes[0].node).prop('src');
                        console.log(src);
                        if (src !== undefined) {
                            if (src.includes('95')) {
                                $('#render-' + configurator.step.selectedNodes[0].node).prop('src', src.replace('95', '115'));
                                if($('#render-overlay').length){
                                    $('#render-overlay').prop('src', $('#render-overlay').prop('src').replace('95', '115'));
                                }
                            }
                            else {
                                $('#render-' + configurator.step.selectedNodes[0].node).prop('src', src.replace('115', '95'));
                                if($('#render-overlay').length){
                                    $('#render-overlay').prop('src', $('#render-overlay').prop('src').replace('115', '95'));
                                }
                            }
                            console.log(configurator.step.selectedNodes[0].node);
                        }
                    }
                }
                else {
                    $owl.find('#node-price-' + node_name).parent().hide();
                }
                $owl.trigger('refresh.owl.carousel');
                configurator.step.selectedNodes[2] = node;
                configurator.showPrice();
            });

            $('#select-' + node_name).val($('#select-' + node_name + ' option:first').val()).change();
            //            $('#select-' + node_name).val($('#select-' + node_name + ' option[width="160"]').val()).change();
        });

        carousel.trigger('refresh.owl.carousel');


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
            $('#render-overlay').remove();
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

            $('#item-color').remove();
            if (baseNode.colors !== undefined) {
                $('#step-content').after(this.addColor(baseNode.colors));
                if (configurator.selectedColor !== undefined) {
                    var selectedColor = configurator.selectedColor;
                    console.log('selectedColor');
                    console.log(selectedColor);
                    $('.tiles[name="' + selectedColor + '"]').click();
                }
                else {
                    $('.tiles:first').click();
                }

            }
            else if (baseNode.cover !== undefined) {
                $('#step-content').after(this.addCover(baseNode.cover));
                $('.tiles:first').addClass('color-selected');
            }

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
                if (step.selectedNodes[2] != undefined) {
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
            sb += '<label class="label-small" for="select-' + node_name + '">Wymiar</label>';
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
                sb += '<option value="' + node[0] + '" width="' + node[1].width + '">' + node[1].label + '</option>';
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


        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz tkaninę</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-12">';
        // html += '<div class="center-block">';
        addImageToDom(g1Colors, 'I', 'text-align: right;');
        addImageToDom(g2Colors, 'II', 'text-align: left;');
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group, style) {
            // html += '<div class="row">';
            var counter = 0;
            html += '<div class="col-sm-6">';
            html += '<div class="center-block" style="' + style + '">';
            var i;
            for (i = 0; i < colors.length; i++) {
                const color = colors[i];
                html += '<div style="display: inline-block;background-clip: content-box;text-align: center;">';
                if(i === 0){
                    html += '<span class="bold text-uppercase" style="font-size: 11px;">' + group + ' grupa</span>';
                }
                html += '<div color="' + color.node + '" name="' + color.name + '" onclick="configurator.onColorSelect($(this))" class="tiles img_tkan" style="background-image: url(\'' + color.url + '\')" ></div>';
                html += '<span class="bold text-uppercase" style="font-size: 8px;">' + color.name + '</span>'
                html += '</div>';
            }
            html += '</div>';
            // html += '<div class="row">';
            html += '</div>';
        }
    }

    addCover(coverNode) {
        var allColorsNodeNames = this.graph.successors(coverNode);
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

        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz pokrowiec</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-12">';
        // html += '<div class="center-block">';
        html += '<div class="center-block" style="text-align: center;font-size: 9px;">';
        if (g1Colors.length > 0) {
            addImageToDom(g1Colors, g1Colors[0].name);
        }
        if (g2Colors.length > 0) {
            addImageToDom(g2Colors, g2Colors[0].name);
        }
        html += '</div>';
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group) {
            // html += '<div class="row">';
            var counter = 0;
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                html += '<div style="display: inline-block;background-clip: content-box;"><div color="' + color.node + '" onclick="configurator.onColorSelect($(this))" class="img_cover tiles" style="background-image: url(\'' + color.url + '\')" >';
                // html += '</div>';
                html += '</div>';
            });
            html += '<span class="bold text-uppercase">' + group + '</span>';
            html += '</div>';
        }

        return html + '</div>';
    }

    onColorSelect(selectedColor) {
        var $this = $(selectedColor);

        console.log('selectedColor');
        console.log(selectedColor);
        console.log($this.attr('color'));
        this.selectedColor = $this.attr('name');

        let colorNode = configurator.graph.node($this.attr('color'));
        configurator.step.selectedNodes[3] = colorNode;
        console.log(colorNode.render);
        // var mainNode = configurator.step.selectedNodes[1];
        var mainNode = this.step.selectedNodes[0];
        var find = $('#configurator-preview').find('#render-' + mainNode.node);
        if (find.length === 0) {
            $('#configurator-preview').append('<img id="render-' + mainNode.node + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + colorNode.render + '" />');
        } else {
            $(find).attr('src', 'renders/' + colorNode.render);
        }

        if(mainNode.overlay !== undefined) {
            if (colorNode.overlay !== undefined) {
                var find = $('#configurator-preview').find('#render-overlay');
                if (find.length === 0) {
                    $('#base-img').after('<img id="render-overlay" style="z-index: 150" class="img-responsive configurator-img" src="renders/' + colorNode.overlay + '" />');
                } else {
                    $(find).attr('src', 'renders/' + colorNode.overlay);
                }
            }else {
                $('#render-overlay').remove();
            }
        }


        $('.tiles').removeClass('color-selected');
        // this.graph

        // var successors = configurator.graph.successors(mainNode.node);
        var $owl = $('.configurator-base-carousel');

        // successors.forEach(base_node_name => {
        //     console.log(base_node_name);
        //     // let baseNode = configurator.graph.node(base_node_name);
        //
        //     var val = $('#select-' + base_node_name).val();
        //     console.log(val);
        //     var node = this.step.selectedNodes[0];
        //     var base_node_name = node.name;
        //     console.log(node);
        //     if (node !== undefined) {
        //         if (colorNode.g === 1) {
        //             $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
        //         } else {
        //             $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
        //         }
        //     }
        // });

        var node = this.step.selectedNodes[2];
        var base_node_name = this.step.selectedNodes[1].node;
        console.log(this.step.selectedNodes[1].node);
        if (node !== undefined) {
            if (colorNode.g === 1) {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
            } else {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
            }
        }

        configurator.showPrice();
        $this.toggleClass('color-selected');
    }


    loadSummary() {
        $('#step-number').hide();
        $('#step-title').hide();
        $('#item-color').hide();
        $('#next-step').hide();
        $('#skip-step').hide();

        this.step = new Step(100, "Podsumowanie", false, 'baza kontynetalna_roko08.png', null);
        this.step.selectedNodes[0] = this.graph.node("summary");
        this.allSteps[this.stepIndex] = this.step;

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
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 > 0) {
                str += '<div class="row summary-price-row"">';
                str += '<div class="col-sm-7 text-capitalize">' + step.selectedNodes[0].title + ' - ' + step.selectedNodes[1].label + ' ' + fabricName(step) + '</div>';
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
        str += '<div class="col-sm-6 text-center"><button class="btn text-uppercase btn-summary" onclick="configurator.printSummary()">Wydrukuj</button></div>';
        str += '</div>';
        stepElement.html(str);
    }

    printSummary() {
        var bodyData = [];

        this.allSteps.forEach(step => {
            var priceNode = step.selectedNodes[2];
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 > 0) {
                bodyData.push([step.selectedNodes[0].title, step.selectedNodes[1].label, this.numberWithSpaces(priceNode.price.g1)]);
            }
        });

        var docDefinition = {
            content: [
                {
                    table: {
                        body: bodyData
                    }
                }
            ]
        };

        pdfMake.createPdf(docDefinition).download();

    }
}


$(document)

    .ready(
        function () {
            var Graph = graphlib.Graph;
            g = new Graph();

            $.when(
                $.getScript("graph.js" ),
                $.Deferred(function( deferred ){
                    $( deferred.resolve );
                })
            ).done(function() {
                //Stuff to do after someScript has loaded

                var base = new Step(1, "bazę", false, 'baza kontynetalna_roko08.png');
                configurator = new Configurator(base, g);
            });
        }
    )
;