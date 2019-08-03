
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!

    var total = numAnimals * avgFood;

    if ((Number(numAnimals) < 0) || (Number(avgFood) < 0) || isNaN(numAnimals) || isNaN(avgFood)){
        return -1;
    }
    else {
        return total;
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!

    var dayArr = [];

    var  mostTraffic = 0;

   	if ((week == null) || (week.length ==0)) return null;

    if (week.length && week) {
   		 for (var day of week) { 
    		if (day.traffic > mostTraffic){
    			dayArr = [day.name];
    			mostTraffic = day.traffic;
    		}
    		else if (day.traffic == mostTraffic){
    			dayArr.push(day.name);
    		}
    	}
    return (dayArr.length > 1) ? dayArr: dayArr[0];
	}
	return null;
}
 

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!

    var nullArr = [];

    var animalArr = [];

    if ((names == null) || (types == null) || (breeds == null)){
        return nullArr;
    }
    else if ((names.length != 0) && (names.length == types.length) && (names.length == breeds.length)) {
        for (var i = 0; i < names.length; i++) {
             animalArr[i] = new Animal(names[i], types[i], breeds[i]);
            }
        return animalArr;
     } 
       else {
    	return nullArr;
    }  
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

