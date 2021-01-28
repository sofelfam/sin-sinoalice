import React from 'react';

interface dbImageProps {
  className?: string,
  'data-id': string;
}

const SINoDBImage = React.forwardRef(function SINoDBImage(props: dbImageProps, ref) {
  const { className, ...other } = props;
  const imageId = ( '0000' + props.['data-id'] ).slice( -4 )

  return(
    <img
      className={className}
      src={`https://sinoalice.game-db.tw/images/card/CardS${imageId}.png`}
      ref={ref}
      {...other}
    />
  );
});

export default SINoDBImage;