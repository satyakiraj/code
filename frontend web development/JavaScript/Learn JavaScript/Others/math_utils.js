export let Pi = Math.PI;
    Pi = Pi.toFixed(5);
export function calculate_area(radius) {
    return Pi * Math.pow(radius, 2);
}
export function calculate_circumference(radius){
    return 2 * Pi * radius;
}