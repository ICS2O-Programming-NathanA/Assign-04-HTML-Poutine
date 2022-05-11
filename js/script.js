// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much calories a person will lose doing a certain activity
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

	//input
	let select = document.getElementById('size');
	let size = select.options[select.selectedIndex].value;

	//IF Statements for sizes
	if (size == "small") {
		sizes = 7.99
	}
	else if (size == "medium") {
		sizes = 12.49
	}
	else if (size == "large"){
		sizes = 18.99
	}

	//IF statements for toppings
	if (document.getElementById('bacon').checked) {
		bacon = 1
	}
	if (document.getElementById('pulledPork').checked) {
		pulledPork = 3
	}
	if (document.getElementById('butterChicken').checked) {
		butterChicken = 3
	}
	if (document.getElementById('taterTots').checked) {
		taterTots = 1
	}

	//IF statements for drinks
	if (document.getElementById('drink-yes').checked) {
		drink = 2
	}

	//subtotal
	let subtotal = (sizes + bacon + pulledPork + butterChicken + taterTots + drink)
	let tax = subtotal * HST
	let total = subtotal + tax
	
	document.getElementById('display').innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + " and your tax is $" + tax.toFixed(2) + " which means your total is $" + total.toFixed(2) + "."
}
	