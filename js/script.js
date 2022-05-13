// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much it will cost for a certain order
 */
function order () {

	//declare variables
	let sizes = 0
	let bacon = 0
	let pulledPork = 0
	let butterChicken = 0
	let taterTots = 0
	let drink = 0

	//declare constants
	const HST = 0.13
	const SMALL_PRICE = 7.99
	const MEDIUM_PRICE = 12.49
	const LARGE_PRICE = 18.99
	const BACON_PRICE = 1
	const PULLEDPORK_PRICE = 3
	const BUTTERCHICKEN_PRICE = 3
	const TATERTOTS_PRICE = 1
	const DRINK_PRICE = 2
	//input
	let select = document.getElementById('size');
	let size = select.options[select.selectedIndex].value;

	//IF small size is selected then set small price
	if (size == "small") {
		sizes = SMALL_PRICE
	}
	//IF medium size is selected then set medium price
	else if (size == "medium") {
		sizes = MEDIUM_PRICE
	}
	//IF large size is selected then set large price
	else if (size == "large"){
		sizes = LARGE_PRICE
	}

	//IF bacon is selected then set bacon price
	if (document.getElementById('bacon').checked) {
		bacon = BACON_PRICE
	}
	//IF pulled pork is selected then set bacon price
	if (document.getElementById('pulledPork').checked) {
		pulledPork = PULLEDPORK_PRICE
	}
	//IF butter chicken is selected then set bacon price
	if (document.getElementById('butterChicken').checked) {
		butterChicken = BUTTERCHICKEN_PRICE
	}
	//IF tater tots is selected then set bacon price
	if (document.getElementById('taterTots').checked) {
		taterTots = TATERTOTS_PRICE
	}

	//IF drinks is selected then set drink price
	if (document.getElementById('drink-yes').checked) {
		drink = DRINK_PRICE
	}

	//Calculations for subtotal, tax and total
	let subtotal = (sizes + bacon + pulledPork + butterChicken + taterTots + drink)
	let tax = subtotal * HST
	let total = subtotal + tax

	//Display results
	document.getElementById('display').innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + " and your tax is $" + tax.toFixed(2) + " which means your total is $" + total.toFixed(2) + "."
}
	