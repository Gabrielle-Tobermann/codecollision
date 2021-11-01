/*
	Infront: Angle = 0
	Behind: Angle = 180
	Above: Angle = 90
	Below: Angle = -90
	
	Above & Infront: 0 < Angle < 90
	Below & Infront: -90 < Angle < 0
	Above & Behind: 90 < Angle < 180
	Below & Behind: -180 < Angle <-90
	
	0 is directly in front, 180 is directly behind, 90 is directly above, -90 is directly below, 
*/
class FloorIsLavaStrategy extends Strategy
{
	execute //Return Power (0-100), and Angle (0 is forward, 90 is up, -90 is down, 180 is backwards)
	({
		id, //Represents the player on the field (1,2,3)
		position, // { x, y }
		field, // { radius }
		teamMates, // [ {angle, distance, x, y} ]
		otherTeam, // [ [ {angle, distance, x, y} ] ]
		holes, // [ [ {angle, distance, x, y, radius } ] ]
	})
	{
		return { angle:180, power: 10 };
	};
};