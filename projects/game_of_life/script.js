var canvas = document.getElementById('canvas');
var canvas_m = document.getElementById('canvas_m');
var start_b_c = document.getElementById('start_button_c')
var start_b_m = document.getElementById('start_button_m')
var width = document.getElementById('bs').value;
var alive = document.getElementById('a').value;
var dead = document.getElementById('d').value;
var gens = document.getElementById('g').value;
var chance = document.getElementById('c').value;
var name = document.createTextNode('Generation 0');
var choosing_area = document.getElementById('choosing_area');
var current_gen = 0;

var numbers = [];
var board_size = width*width;
var num = 0;

function create_selection_board(){
    clear(canvas_m);
    var tbl = document.createElement('table');
    get_inputs();

    print('Generation 0',canvas_m);
    for(var i = 0; i < width; i++){
        var tr = tbl.insertRow();
        for (var j = 1; j <= width; j++){
            var td = tr.insertCell();
            var index = ((i*width)+j)-1;
            var tick = document.createElement('input');
            tick.type = 'checkbox';
            tick.name = index;
            tick.id = 'cell'+index;
            tick.style.width = '25px';
            td.appendChild(tick);
        }

    }
    tbl.setAttribute("id","Starter");
    canvas_m.appendChild(tbl);
    start_b_m.style.display = "block";
}

function create_numbers(){
    start_b_m.style.display = "none";
    numbers = [];
    get_inputs1();
    for (index = 0; index < board_size; index++){
        var box = document.getElementById('cell'+index);
        if (box.checked == true){
            numbers.push((index+1)+board_size*2);
        }else{
            numbers.push(index+1);
        }
    }
    m_boards();
}

function m_boards(){
    current_gen = 0;
    clear(canvas_m);
    var tbl = document.createElement('table');

    print('Generation 0',canvas_m);
    for(var i = 0; i < width; i++){
        var tr = tbl.insertRow();
        for (var j = 1; j <= width; j++){
            var td = tr.insertCell();
            var index = ((i*width)+j)-1;
            if (numbers[index]>board_size*2){
                td.appendChild(document.createTextNode(alive));
            }else{
                td.appendChild(document.createTextNode(dead));
            }
        }
    }
    tbl.setAttribute("id","Starter");
    canvas_m.appendChild(tbl);
    print('no. of gens '+gens,canvas_m);
    for (var i = 1; i <= gens; i++){
        print('Generation '+i,canvas_m);
        check_numbers(canvas_m);
    }
}

function clear(area){
    while(area.firstChild){
        area.removeChild(area.firstChild);
    }
}

function print(text,area){
    area.appendChild(document.createTextNode(text));
    area.appendChild(document.createElement('br'));
}

function get_inputs(){
    chance = Math.ceil(document.getElementById('c').value);
    width = Math.ceil(document.getElementById('bs').value);
    gens = document.getElementById('g').value;
    board_size = width*width;
    numbers = [];
    alive = document.getElementById('a').value;
    dead = document.getElementById('d').value;
}

function get_inputs1(){
    gens = document.getElementById('g').value;
    alive = document.getElementById('a').value;
    dead = document.getElementById('d').value;
}

function generate_sample(){
    generate_numbers();
    draw_board(canvas);
}

function generate_numbers(){
    clear(canvas);
    get_inputs();
    for (var i=1; i<=board_size; i++){
        numbers.push(i);
    }
    for (var index = 0; index < numbers.length; index++){
        if (Math.random()<=chance/100){
            numbers[index] = numbers[index]+board_size*2;
        }
    }
}

function draw_board(area){

    clear(area);
    var tbl = document.createElement('table');

    print('Generation 0',canvas);
    for(var i = 0; i < width; i++){
        var tr = tbl.insertRow();
        for (var j = 1; j <= width; j++){
            var td = tr.insertCell();
            var index = ((i*width)+j)-1;
            if (numbers[index]>board_size*2){
                td.appendChild(document.createTextNode(alive));
            }else{
                td.appendChild(document.createTextNode(dead));
            }
        }

    }
    tbl.setAttribute("id","Starter");
    area.appendChild(tbl);
    start_b_c.style.display = "block";
}

function generate_boards(){
    start_b_c.style.display = "none";
    current_gen = 0;
    for (var i = 1; i <= gens; i++){
        print('Generation '+i,canvas);
        check_numbers(canvas);
    }
}

function check_numbers(ar){
    for (var index = 0; index < numbers.length; index++){
        num = 0;
        if (index == 0){
            s(index);
            se(index);
            e(index);
            finalise(index);
        }else if (index == width-1){
            s(index);
            sw(index);
            w(index);
            finalise(index);
        }else if (index == board_size-width){
            n(index);
            ne(index);
            e(index);
            finalise(index);
        }else if (index == board_size-1){
            n(index);
            nw(index);
            w(index);
            finalise(index);
        }else if (index < width){
            s(index);
            se(index);
            sw(index);
            e(index);
            w(index);
            finalise(index);
        }else if (index > width*width-width){
            n(index);
            ne(index);
            nw(index);
            e(index);
            w(index);
            finalise(index);
        }else if (index % width == 0){
            n(index);
            ne(index);
            se(index);
            e(index);
            s(index);
            finalise(index);
        }else if(index % width == width-1){
            n(index);
            nw(index);
            sw(index);
            w(index);
            s(index);
            finalise(index);
        }else{
            n(index);
            ne(index);
            e(index);
            se(index);
            s(index);
            sw(index);
            w(index);
            nw(index);
            finalise(index);
        }
    }
    clean(ar);
}

function finalise(index){
    if (num<2 || num>=4){
        if (numbers[index]>board_size*2){
            numbers[index] = numbers[index]+board_size;
        }
    }else if (num == 3){
        if (numbers[index]<=board_size){
            numbers[index] = index+1+board_size;
        }
    }
}

function clean(ar){
    for (var index = 0; index < numbers.length; index++){
        if (numbers[index]>board_size*3){
            numbers[index] = index+1;
        }else if (numbers[index]>board_size && numbers[index]<board_size*2){
            numbers[index] = numbers[index]+board_size;
        }
    }
    create_board(ar);
}

function create_board(ar){
    var tbl = document.createElement('table');
    for (var i = 0; i < width; i++){
        var tr = tbl.insertRow();
        for (var j = 1; j <= width; j++){
            var td = tr.insertCell();
            var index = ((i*width)+j)-1;
            if (numbers[index]>(i*width)+j){
                td.appendChild(document.createTextNode(alive));
            }else{
                td.appendChild(document.createTextNode(dead));
            }
        }
    }
    current_gen +=1;
    tbl.setAttribute("id",current_gen);
    ar.appendChild(tbl);
}

function n (index){
    if (numbers[index-width] > 2*board_size){
        num += 1;
    }
}
function ne (index){
    if (numbers[index-width+1] > 2*board_size){
        num += 1;
    }
}
function nw (index){
    if (numbers[index-width-1] > 2*board_size){
        num += 1;
    }
}
function e (index){
    if (numbers[index+1] > 2*board_size){
        num += 1;
    }
}
function s (index){
    if (numbers[index+width] > 2*board_size){
        num += 1;
    }
}
function se (index){
    if (numbers[index+width+1] > 2*board_size){
        num += 1;
    }
}
function sw (index){
    if (numbers[index+width-1] > 2*board_size){
        num += 1;
    }
}
function w (index){
    if (numbers[index-1] > 2*board_size){
        num += 1;
    }
}