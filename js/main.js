/*--------------------
    price showing
---------------------*/
function extraCost(partId, partsName) {
    const extraMemory = document.getElementById(partsName + '-cost');
    if (partId == 'noExtra') {
        extraMemory.innerText = 0;
    }
    else if (partId == 'for180') {
        extraMemory.innerText = 180;
    }
    else if (partId == 'storage512gb') {
        extraMemory.innerText = 100;
    }
    else if (partId == 'premium') {
        extraMemory.innerText = 20;
    }
    total()
}
/*---------------------------------
    get an Element inner value
----------------------------------*/
function getInnerValue(id) {
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}
/*-----------------------
    normal total show
------------------------*/
function total() {
    debugger;
    const extraMemory = getInnerValue('memory-cost');
    const extraStorage = getInnerValue('storage-cost');
    const deliveryCharge = getInnerValue('delivery-cost');
    const bestPrice = getInnerValue('best-price');
    const total = bestPrice + extraStorage + extraMemory + deliveryCharge;
    document.getElementById('total-price').innerText = total;
}
/*============================
    button event listeners
==============================*/
document.getElementById('memory-8gb').addEventListener('click', function () {
    extraCost('noExtra', 'memory');
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    extraCost('for180', 'memory');
})
document.getElementById('storage-256gb').addEventListener('click', function () {
    extraCost('noExtra', 'storage');
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    extraCost('storage512gb', 'storage');
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    extraCost('for180', 'storage');
})
document.getElementById('delivery-free').addEventListener('click', function () {
    extraCost('noExtra', 'delivery');
})
document.getElementById('delivery-20').addEventListener('click', function () {
    extraCost('premium', 'delivery');
})

/*==========================
    apply promo in total
============================*/
function apply() {
    const promo = document.getElementById('promo').value;
    if (promo == 'stevekaku') {
        const normalTotal = getInnerValue('total-price');
        const totalAftpromo = normalTotal * 0.2;
        document.getElementById('total-total-price').innerText = totalAftpromo;
    }
}