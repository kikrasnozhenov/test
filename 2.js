var getDegree = function(rad){
  return rad * Math.PI / 180;
};

var triangleArea = function(a, ang1, ang2){
  return 1 / 2 * Math.pow(a, 2) * (Math.sin(getDegree(ang1))*Math.sin(getDegree(ang2))
  / 180 - (Math.sin(getDegree(ang1)) - getDegree(ang2)));
}
console.log(triangleArea(3, 60, 60));