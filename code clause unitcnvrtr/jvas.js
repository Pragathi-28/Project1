// variables for length
var input = document.getElementById('input');
var result = document.getElementById('output');
var i = document.getElementById('in');
var o = document.getElementById('out');
var ivalue, ovalue;


// finding units for length
input.addEventListener("keyup", fun);
i.addEventListener("change", fun);
o.addEventListener("change", fun);
ivalue = i.value;
ovalue = o.value;

function fun() {
    ivalue = i.value;
    ovalue = o.value;
    if (ivalue == "meter" && ovalue == "kilometer") {
        result.value = Number(input.value) * 0.001;
    } else if (ivalue === "meter" && ovalue === "centimeter") {
        result.value = Number(input.value) * 100;
    } else if (ivalue === "meter" && ovalue === "meter") {
        result.value = input.value;
    }
    if (ivalue === "kilometer" && ovalue === "kilometer") {
        result.value = input.value;
    } else if (ivalue === "kilometer" && ovalue === "centimeter") {
        result.value = Number(input.value) * 100000;
    } else if (ivalue === "kilometer" && ovalue === "meter") {
        result.value = Number(input.value) * 1000;
    }
    if (ivalue === "centimeter" && ovalue === "centimeter") {
        result.value = input.value;
    } else if (ivalue === "centimeter" && ovalue === "meter") {
        result.value = Number(input.value) * 0.01;
    } else if (ivalue === "centimeter" && ovalue === "kilometer") {
        result.value = Number(input.value) * 0.00001;
    }
}


// variables for time
var input2 = document.getElementById('input2');
var result2 = document.getElementById('output2');
var i2 = document.getElementById('in2');
var o2 = document.getElementById('out2');
var i2value, o2value;

// finding  units for time

input2.addEventListener("keyup", fun2);
i2.addEventListener("change", fun2);
o2.addEventListener("change", fun2);
i2value = i2.value;
o2value = o2.value;

function fun2() {
    i2value = i2.value;
    o2value = o2.value;
    if (i2value == "second" && o2value == "minute") {
        result2.value = Math.floor(Number(input2.value) * 0.0166667);
    } else if (i2value === "second" && o2value === "hour") {
        result2.value = Math.floor(Number(input2.value) * 0.000277778);
    } else if (i2value === "second" && o2value === "second") {
        result2.value = input2.value;
    }
    if (i2value === "minute" && o2value === "minute") {
        result2.value = input2.value;
    } else if (i2value === "minute" && o2value === "second") {
        result2.value = Math.floor(Number(input2.value) * 60);
    } else if (i2value === "minute" && o2value === "hour") {
        result2.value = Math.floor(Number(input2.value) * 0.0166667);
    }
    if (i2value === "hour" && o2value === "hour") {
        result2.value = input2.value;
    } else if (i2value === "hour" && o2value === "second") {
        result2.value = Math.floor(Number(input2.value) * 3600);
    } else if (i2value === "hour" && o2value === "minute") {
        result2.value = Math.floor(Number(input2.value) * 60);
    }

}