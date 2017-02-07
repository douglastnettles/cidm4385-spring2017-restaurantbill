//look at https://www.checkyourmath.com/convert/volume/cubic_volume/inches_dm.php
//for conversions

var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: convert.
*/

unitConverter.controller('UnitConverterController', 
[
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.metVolumeValue = 0;
		
		ucc.metric_volume_units=
		[
			{
				unit_name: "Cubic Centimeters",
				unit_code: "cm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "Liters",
				unit_code: "l",
				type: "metric"
			},
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metric"
			},
			
		];
		
		function metVolumeUpdated(){
			console.log(ucc.metVolumeValue);
		}
		
		ucc.metLengthValue = 0;
		
		ucc.metric_length_units=
		[
			{
				unit_name: "Millimeter",
				unit_code: "mm",
				type: "metric"
			},
			{
				unit_name: "Centimeter",
				unit_code: "cm",
				type: "metric"
			},
			{
				unit_name: "Meter",
				unit_code: "m",
				type: "metric"
			},
			{
				unit_name: "Kilometer",
				unit_code: "km",
				type: "metric"
			},
		];
		
		function metLengthUpdated(){
			console.log(ucc.metLengthValue);
		}
		
		ucc.metWeightValue = 0;
		
		ucc.metric_weight_units=
		[
			{
				unit_name: "Milligram",
				unit_code: "mg",
				type: "metric"
			},
			{
				unit_name: "Gram",
				unit_code: "g",
				type: "metric"
			},
			{
				unit_name: "Kilogram",
				unit_code: "kg",
				type: "metric"
			},
			{
				unit_name: "Tonne",
				unit_code: "t",
				type: "metric"
			},
		];
		
		function metWeightUpdated(){
			console.log(ucc.metWeightValue);
		}
		
		ucc.imperial_volume_units=
		[
			{
				unit_name: "Cubic Inches",
				unit_code: "in3",
				type: "imperial"
			},
			{
				unit_name: "Cubic Feet",
				unit_code: "ft3",
				type: "imperial"
			},
			{
				unit_name: "Fluid Ounce",
				unit_code: "fl oz",
				type: "imperial"
			},
			{
				unit_name: "Pint",
				unit_code: "pt",
				type: "imperial"
			},
			{
				unit_name: "Gallon",
				unit_code: "gal",
				type: "imperial"
			},
		];
		
		function impVolumeUpdated(){
			console.log(ucc.impVolumeValue);
		}
		
		ucc.imperial_length_units=
		[
			{
				unit_name: "Inches",
				unit_code: "in",
				type: "imperial"
			},
			{
				unit_name: "Feet",
				unit_code: "ft",
				type: "imperial"
			},
			{
				unit_name: "Yards",
				unit_code: "yd",
				type: "imperial"
			},
			{
				unit_name: "Miles",
				unit_code: "mi",
				type: "imperial"
			},
			{
				unit_name: "Nautical Miles",
				unit_code: "nm",
				type: "imperial"
			},
		];
		
		function impLengthUpdated(){
			console.log(ucc.impLengthValue);
		}
		
		ucc.imperial_weight_units=
		[
			{
				unit_name: "Ounce",
				unit_code: "oz",
				type: "imperial"
			},
			{
				unit_name: "Pound",
				unit_code: "lb",
				type: "imperial"
			},
			{
				unit_name: "Stone",
				unit_code: "s",
				type: "imperial"
			},
			{
				unit_name: "Hundredweight",
				unit_code: "cwt",
				type: "imperial"
			},
			{
				unit_name: "Long Ton",
				unit_code: "ton",
				type: "imperial"
			},
		];
			
		function impWeightUpdated(){
			console.log(ucc.impWeightValue);
		}	
		
		$scope.$watch('ucc.metLengthValue', metLengthUpdated());
		$scope.$watch('ucc.metVolumeValue', metVolumeUpdated());
		$scope.$watch('ucc.metWeightValue', metWeightUpdated());
		
		ucc.selected1_metric_volume_units = ucc.metric_volume_units[0];
		ucc.selected1_metric_length_units = ucc.metric_length_units[0];
		ucc.selected1_metric_weight_units = ucc.metric_weight_units[0];
		
		ucc.selected2_imperial_volume_units = ucc.imperial_volume_units[0];
		ucc.selected2_imperial_length_units = ucc.imperial_length_units[0];
		ucc.selected2_imperial_weight_units = ucc.imperial_weight_units[0];
		
		//behaviors
		
		ucc.showSelected1VolumeUnit = function(){
			console.log(ucc.selected1_metric_volume_unit.unit_name);
		};
		
		ucc.showSelected1WeightUnit = function(){
			console.log(ucc.selected1_metric_weight_unit.unit_name);
		};
		
		ucc.showSelected1LengthUnit = function(){
			console.log(ucc.selected1_metric_length_unit.unit_name);
		};
		
		ucc.showSelected2VolumeUnit = function(){
			console.log(ucc.selected2_imperial_volume_unit.unit_name);
		}
		
		ucc.showSelected2WeightUnit = function(){
			console.log(ucc.selected2_imperial_weight_unit.unit_name);
		}
		
		ucc.showSelected2LengthUnit = function(){
			console.log(ucc.selected2_imperial_length_unit.unit_name);
		}
		
		//cubic centimeter volume
		function MtoICalculations(){
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Centimeters" && ucc.selected2_imperial_volume_unit = "Cubic Inches"){
				return(metVolumeValue * 0.0610237441);
			}else 
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Centimeters" && ucc.selected2_imperial_volume_unit = "Cubic Feet"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Centimeters" && ucc.selected2_imperial_volume_unit = "Fluid Ounce"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Centimeters" && ucc.selected2_imperial_volume_unit = "Pint"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Centimeters" && ucc.selected2_imperial_volume_unit = "Gallon"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			//cubic decimeter volume
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Decimeters" && ucc.selected2_imperial_volume_unit = "Cubic Inches"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Decimeters" && ucc.selected2_imperial_volume_unit = "Cubic Feet"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Decimeters" && ucc.selected2_imperial_volume_unit = "Fluid Ounce"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Decimeters" && ucc.selected2_imperial_volume_unit = "Pint"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Decimeters" && ucc.selected2_imperial_volume_unit = "Gallon"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			//cubic meters volume
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Meters" && ucc.selected2_imperial_volume_unit = "Cubic Inches"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Meters" && ucc.selected2_imperial_volume_unit = "Cubic Feet"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Meters" && ucc.selected2_imperial_volume_unit = "Fluid Ounce"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Meters" && ucc.selected2_imperial_volume_unit = "Pint"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Cubic Meters" && ucc.selected2_imperial_volume_unit = "Gallon"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			//liter volume
			
			if(ucc.selected1_metric_volume_units.unit_name = "Liters" && ucc.selected2_imperial_volume_unit = "Cubic Inches"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Liters" && ucc.selected2_imperial_volume_unit = "Cubic Feet"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Liters" && ucc.selected2_imperial_volume_unit = "Fluid Ounce"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Liters" && ucc.selected2_imperial_volume_unit = "Pint"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Liters" && ucc.selected2_imperial_volume_unit = "Gallon"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			//hectoliter volume
			
			if(ucc.selected1_metric_volume_units.unit_name = "Hectoliters" && ucc.selected2_imperial_volume_unit = "Cubic Inches"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Hectoliters" && ucc.selected2_imperial_volume_unit = "Cubic Feet"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Hectoliters" && ucc.selected2_imperial_volume_unit = "Fluid Ounce"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Hectoliters" && ucc.selected2_imperial_volume_unit = "Pint"){
				return(metVolumeValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_volume_units.unit_name = "Hectoliters" && ucc.selected2_imperial_volume_unit = "Gallon"){
				return(metVolumeValue * 0.0610237441);
			}else
			
			//Millimeter Length starts here
			
			if(ucc.selected1_metric_length_units.unit_name = "Millimeter" && ucc.selected2_imperial_length_unit = "Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Millimeter" && ucc.selected2_imperial_length_unit = "Feet"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Millimeter" && ucc.selected2_imperial_length_unit = "Yards"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Millimeter" && ucc.selected2_imperial_length_unit = "Miles"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Millimeter" && ucc.selected2_imperial_length_unit = "Nautical Miles"){
				return(metLengthValue * 61.0237440947);
			}else
			
			//Centimeter Length
			
			if(ucc.selected1_metric_length_units.unit_name = "Centimeter" && ucc.selected2_imperial_length_unit = "Inches"){
				return(metLengthValue * 61.0237440947);
			}else
		
			if(ucc.selected1_metric_length_units.unit_name = "Centimeter" && ucc.selected2_imperial_length_unit = "Feet"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Centimeter" && ucc.selected2_imperial_length_unit = "Yards"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Centimeter" && ucc.selected2_imperial_length_unit = "Miles"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Centimeter" && ucc.selected2_imperial_length_unit = "Nautical Miles"){
				return(metLengthValue * 61.0237440947);
			}else
			
			//meter length
			
			if(ucc.selected1_metric_length_units.unit_name = "Meter" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Meter" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Meter" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Meter" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Meter" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			//kilometer length
			
			if(ucc.selected1_metric_length_units.unit_name = "Kilometer" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Kilometer" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Kilometer" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
			
			if(ucc.selected1_metric_length_units.unit_name = "Kilometer" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
			}else
		
			if(ucc.selected1_metric_length_units.unit_name = "Kilometer" && ucc.selected2_imperial_length_unit = "Cubic Inches"){
				return(metLengthValue * 61.0237440947);
		}
	}
]);