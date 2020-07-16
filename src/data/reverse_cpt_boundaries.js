import * as turf from '@turf/turf'

const polygon = turf.polygon(
  [
    [
      [
        18.668511,
       -34.006026
     ],
     [
        18.668511,
       -34.089764
     ],
     [
        18.538168,
       -34.089782
     ],
     [
        18.538232,
       -34.006691
     ],
     [
       18.668511,
       -34.006026
     ]
    ]
  ]
)

const masked = turf.mask(polygon);


export default masked;
